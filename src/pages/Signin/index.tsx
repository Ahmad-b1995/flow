import {FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/images/logo";
import {object, ref, string, ValidationError} from "yup";
import {signin} from "../../services/http/user.http.service";
import ls from "local-storage";

export default function SignIn() {
  const [error, setError] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const schema = object().shape({
    email: string().required().email(),
    password: string().required().min(8),
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validation = await schema.validate(formData);
      setError([]);
      const req = await signin({
        email: validation.email,
        password: validation.password,
      });
      ls("user", req.data);
      navigate("/dashboard/projects");
    } catch (err: ValidationError | any) {
      setError(err.response?.data.message || [err.message]);
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <Logo />
        </Link>
        <div className="w-full bg-gray-100 rounded-sm border-gray-200 border-1 md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col items-center justify-center gap-3 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-200 ">
                Sign in
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  autoComplete="email"
                  onChange={(e) =>
                    setFormData({...formData, email: e.target.value})
                  }
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white border rounded-sm border-gray-200 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Password
                </label>
                <input
                  autoComplete="new-password"
                  onChange={(e) =>
                    setFormData({...formData, password: e.target.value})
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-white border rounded-sm border-gray-200 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <div className="flex flex-col gap-5 items-center justify-center">
                <button
                  type="submit"
                  className="w-full disabled:text-gray-400 disabled:bg-gray-300 text-white mt-9 bg-main hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center "
                  disabled={!formData.email || !formData.password}
                >
                  Sign in
                </button>
                <div className="flex flex-col items-center justify-center gap-2">
                  {error.map((err) => (
                    <p className="text-red-500">{error}</p>
                  ))}
                  <p className="text-sm dark:text-gray-200 ">
                    Dont't have an account?{" "}
                    <Link
                      to="/signup"
                      className=" text-main font-semibold text-primary-600 hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
