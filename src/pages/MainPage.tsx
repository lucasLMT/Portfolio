import { FC } from "react";
import photo_profile from "../assets/profile.jpg";
import budget_app from "../assets/BudgetApp.png";
import lp_travelers from "../assets/LP-Travelers.png";
import DropDownBox from "./../components/DropDownBox";

const MainPage: FC = () => {
  const qualifications_array = [
    "Bachelor Degree in Computer Engineering",
    "7 years of experience as a developer",
    "Front End: React.js, Tailwindcss, Typescript",
    "Back End: Python, Fast API, Django",
    "Databases: MySQL, Postgres, MongoDB, DynamoDB",
  ];

  return (
    <div className="sm:grid sm:grid-cols-[1fr_2fr]">
      <div className="bg-main w-full p-2">
        <div className="flex w-full sm:block lg:w-full">
          <div className="ml-2 w-4/12 sm:ml-0 sm:w-full">
            <img
              className="rounded-3xl p-2 shadow-2xl"
              src={photo_profile}
              alt=""
            />
          </div>
          <div className="text-title m-2 my-auto items-center sm:mt-4 sm:text-center">
            <h2 className="mb-2 text-4xl">Lucas Moreira</h2>
            <small className="border-b-title w-fit border-b text-xs uppercase">
              Full Stack Developer
            </small>
          </div>
        </div>
        <DropDownBox title="Qualifications" items={qualifications_array} />
      </div>
      <div className="relative justify-center">
        <div className="border-t-bkg border-r-bkg absolute right-0 top-0 z-10 border border-b-[7rem] border-l-[3rem] border-r-[3rem] border-t-[7rem] border-white max-sm:-top-8"></div>
        <div className="mx-auto w-11/12 gap-8 lg:flex">
          <div className="divide-main relative z-20 mx-auto mt-8 grid w-4/5 auto-rows-min justify-center gap-4 divide-y-2">
            <h2 className="text-center text-4xl font-medium">
              Front End Development
            </h2>
            <p className="mt-2 pt-2 text-justify">
              My front-end projects showcase my commitment to delivering
              high-quality software aligned with industry best practices. Using
              <span className="font-bold"> React.js</span> and{" "}
              <span className="font-bold">Tailwind CSS</span>, I create visually
              appealing designs while maintaining efficient code bases. These
              projects exemplify my blend of creativity and technology,
              resulting in user-friendly experiences.
            </p>
          </div>
          <div className="divide-main relative z-20 mx-auto mt-8 grid w-4/5 auto-rows-min justify-center gap-4 divide-y-2">
            <h2 className="text-center text-4xl font-medium">
              Back End Development
            </h2>
            <p className="mt-2 pt-2 text-justify">
              My projects are developed using cutting-edge technologies in the
              <span className="font-bold"> Python</span> ecosystem, including{" "}
              <span className="font-bold">FastAPI and Django</span>. By
              harnessing the power of these frameworks, I create robust and
              scalable applications that meet the demands of modern software
              development. Leveraging diverse databases such as{" "}
              <span className="font-bold">MongoDB, DynamoDB, and Postgres</span>
              , I ensure that data management is efficient and seamless.
            </p>
          </div>
        </div>
        <h2 className="border-main mx-auto mt-8 w-4/5 border-b-2 pb-4 text-center text-4xl font-medium lg:w-11/12">
          Projects
        </h2>
        <div className="m-8 mx-auto w-4/5 gap-8 lg:flex lg:w-11/12">
          <div className="mt-4 grid w-full items-center rounded-xl p-1 text-center shadow-lg lg:mt-0 lg:w-1/2">
            <div className="bg-main rounded-xl p-2">
              <a href="https://lucaslmt.github.io/BudgetApp" target="_blank">
                <img src={budget_app} alt="" className="" />
              </a>
            </div>
            <h3 className="mb-2 mt-4 text-lg font-bold">Budget App</h3>
            <p className="text-justify">
              In this project, I utilized React and React Router DOM to craft a
              Single Page Application (SPA) that serves as a powerful budget
              management tool. By seamlessly integrating React's component-based
              architecture and React Router DOM's navigation capabilities,
              creating thus a smooth and intuitive user experience.{" "}
              <a
                href="https://lucaslmt.github.io/BudgetApp"
                target="_blank"
                className="text-blue-600"
              >
                Demo!
              </a>
            </p>
          </div>
          <div className="mt-4 grid w-full items-center rounded-xl p-1 text-center shadow-lg lg:mt-0 lg:w-1/2">
            <div className="bg-bkg rounded-xl p-2">
              <a
                href="https://lucaslmt.github.io/TravelersLandingPage/"
                target="_blank"
              >
                <img src={lp_travelers} alt="" className="" />
              </a>
            </div>
            <h3 className="mb-2 mt-4 text-lg font-bold">
              Parallax Landing Page
            </h3>
            <p className="text-justify">
              This project showcases a landing page with a photo gallery that
              allows users to explore visually stunning images effortlessly. The
              parallax effect adds an extra layer of depth and engagement to the
              user experience. All made combining the dynamic features of
              React.js and the sleek design of Tailwind CSS.{" "}
              <a
                href="https://lucaslmt.github.io/TravelersLandingPage/"
                target="_blank"
                className="text-blue-600"
              >
                Demo!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
