import {Link} from "react-router-dom";
import config from "../../config/index.json";

const MainHero = () => {
  const {mainHero} = config;

  return (
    <main className="flex items-center justify-between gap-8 w-full">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          project management made easy
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
              to="/board"
            >
              {mainHero.primaryAction.text}
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
      <img
        className="h-10 object-cover "
        src={require("../../assets/images/kanban.png")}
        alt="happy team"
      />
    </main>
  );
};

export default MainHero;
