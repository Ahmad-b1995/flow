import {Link} from "react-router-dom";
import config from "../../../config/index.json";
import Button from "../../common/Button";
import classes from "./homepage.module.scss";
import classNames from "classnames";

const MainHero = () => {
  const {mainHero} = config;

  return (
    <div className={classNames(classes.auto_grid)}>
      <div>
        <h1
          className={classNames(
            "text-2xl tracking-tight font-extrabold max-w-lg  sm:text-5xl md:text-4xl"
          )}
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
      <div className="flex items-end justify-end w-full">
        <img
          className="object-cover w-full max-w-[25rem]"
          src={require("../../../assets/images/kanban.png")}
          alt="happy team"
        />
      </div>
    </div>
  );
};

export default MainHero;
