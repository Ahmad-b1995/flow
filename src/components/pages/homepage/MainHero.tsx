import {Link} from "react-router-dom";
import config from "../../../config/index.json";
import Button from "../../common/Button";

const MainHero = () => {
  const {mainHero} = config;

  return (
    <main className="flex items-center justify-between w-full">
      <div className="sm:text-center lg:text-left ">
        <h1
          className={`
        text-2xl tracking-tight font-extrabold max-w-lg  sm:text-5xl md:text-4xl
        `}
        >
          project management made easy & open source
        </h1>
        <p className=" leading-8 max-w-xl text-gray-500 mt-9 text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <Link to="/signup">
            <Button>Get started</Button>
          </Link>
        </div>
      </div>
      <img
        className=" object-cover w-96"
        src={require("../../../assets/images/kanban.png")}
        alt="happy team"
      />
    </main>
  );
};

export default MainHero;
