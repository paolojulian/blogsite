import classNames from "classnames";
import AnimateOnIntersect, {
  AnimateOnIntersectContext,
} from "components/Animations/AnimateOnIntersect";
import Stack from "layouts/Stack";
import React, { FunctionComponent } from "react";

export type CareerProps = {
  // No Props
};

const data = [
  {
    date: "August 2017",
    title: "Utalk",
    description:
      "Learned Vue.js, also was appointed to lead the team on the vue.js project for a School Management System",
  },
  {
    date: "September 2019",
    title: "YNS Philippines Inc.",
    description:
      "Learned many systems like Live streaming service, gambling sites and Website management system. Mainly used Laravel, CakePHP, VueJS and ReactJS",
  },
  {
    date: "September 2021",
    title: "Yondu",
    description:
      "Gambling site, election app, seat/room reservation app, hr management tool. Mainly used Nuxt.js and Next.js",
  },
];
const Career: FunctionComponent<CareerProps> = () => {
  return (
    <Stack className="items-center bg-transparent text-white py-24 mb-32 gap-24">
      <Stack className="gap-8 text-center  max-w-screen-lg px-12 mx-auto">
        <AnimateOnIntersect
          options={{
            root: null,
            rootMargin: "0px 0px -100px 0px",
            threshold: 1.0,
          }}
        >
          <AnimateOnIntersectContext.Consumer>
            {({ isInView }) => (
              <h1
                className={classNames(
                  "text-3xl font-bold tracking-wide uppercase",
                  "transition duration-1000",
                  isInView
                    ? "opacity-1 translate-x-0"
                    : "transition opacity-0 -translate-x-96"
                )}
              >
                Career
              </h1>
            )}
          </AnimateOnIntersectContext.Consumer>
        </AnimateOnIntersect>
      </Stack>
      <Stack className="container max-w-screen-lg">
        {data.map((item, i) => (
          <div className="grid grid-cols-[1fr,3px,1fr] gap-8" key={i}>
            {/* Left */}
            {i % 2 === 0 ? (
              <Stack className="pb-12 text-right">
                <div className="text-gray-500 uppercase text-sm">
                  {item.date}
                </div>
                <h4 className="text-white font-semibold text-xl">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.description}</p>
              </Stack>
            ) : (
              <div className="col-auto">&nbsp;</div>
            )}
            <Stack className="items-center">
              <div className="h-3 w-3 rounded-full bg-white"></div>
              <div className="h-full w-0.5 bg-white"></div>
            </Stack>
            {/* Right */}
            {i % 2 !== 0 ? (
              <Stack className="pb-12">
                <div className="text-gray-500 uppercase text-sm">
                  {item.date}
                </div>
                <h4 className="text-white font-semibold text-xl">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.description}</p>
              </Stack>
            ) : (
              <div className="col-auto">&nbsp;</div>
            )}
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default Career;
