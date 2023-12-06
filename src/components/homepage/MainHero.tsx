import {Link} from "react-router-dom";
import config from "../../config/index.json";

const MainHero = () => {
  const {mainHero} = config;

  return (
    <main className="flex items-center justify-between gap-24 w-full">
      <div className="sm:text-center lg:text-left ">
        <h1 className="text-2xl tracking-tight font-extrabold max-w-lg text-gray-900 sm:text-5xl md:text-4xl">
          project management made easy & open source
        </h1>
        <p className=" leading-8 max-w-xl text-gray-500 mt-9 text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <Link
            className="shadow-md flex items-center justify-center px-8 py-3
              border border-transparent text-base
              font-medium rounded-md text-background bg-primary
              hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10"
            to="/signup"
          >
            Get started
          </Link>
        </div>
      </div>
      <img
        className=" object-cover flex-1"
        src={require("../../assets/images/kanban.png")}
        alt="happy team"
      />
    </main>
  );
};

export default MainHero;
