import * as React from "react";
const Logo = (props: any) => (
  <div className="flex items-center justify-center gap-2">
    <svg
      viewBox="0 0 500 388"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5"
      {...props}
    >
      <path
        transform="matrix(1.0498 0 0 1.0498 -14.84 -81.712)"
        d="m166.45 330.21 236.32-234.77c4.1712-4.144 11.792-9.7323 17.327-11.702 13.012-4.6294 36.429-9.56 54.063 5.7454 16.127 13.997 16.072 34.131 13.778 47.225-1.2952 7.3931-7.836 17.44-13.141 22.765l-270.64 271.69s-12.389 14.807-37.963 14.665-41.066-19.292-41.066-19.292l-104.64-106.37c-1.4211-1.4445-3.2259-4.1264-3.858-6.051-2.9126-8.8681-8.3439-33.22 11.075-53.021 18.074-18.43 43.435-12.61 55.134-8.4729 3.5869 1.2683 8.5869 4.7656 11.319 7.4167z"
        fill="#0097a6"
      />
    </svg>
    <div className="block text-[1.5rem] font-bold text-[#2c5e74]">Flow</div>
  </div>
);
export default Logo;
