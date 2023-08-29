import { FC, useRef } from "react";
import photo_profile from "../assets/profile.jpg";
import budget_app from "../assets/BudgetApp.png";
import lp_travelers from "../assets/LP-Travelers.png";

const MainPage: FC = () => {
  const qualifications = useRef<HTMLUListElement>(null);

  const handleClickQualifications = () => {
    qualifications.current?.classList.toggle("hidden");
  };

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
        <div
          className="border-title text-title m-4 grid rounded-xl border p-2 sm:m-2 sm:mt-4"
          onClick={handleClickQualifications}
        >
          <h3 className="text-2lx mb-3 mt-2 text-center font-medium">
            Qualifications
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="ml-2 inline-block h-5 w-5 sm:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </h3>
          <ul
            className="child:pb-1 hidden text-sm transition-transform duration-300 ease-linear sm:block"
            ref={qualifications}
          >
            <li className="relative items-center text-white">
              <div className="bg-bkg/20 absolute -left-1 z-10 h-5/6 w-2"></div>
              <span className="relative z-20">
                Bachelor Degree in Computer Engineering
              </span>
            </li>
            <li className="relative">
              <div className="bg-bkg/20 absolute -left-1 top-0 z-10 h-5/6 w-2"></div>
              <span className="relative z-20">
                7 years of experience as a developer
              </span>
            </li>
            <li className="relative">
              <div className="bg-bkg/20 absolute -left-1 top-0 z-10 h-5/6 w-2"></div>
              <span className="relative z-20">
                Front End: React.js, Tailwindcss, Typescript
              </span>
            </li>
            <li className="relative">
              <div className="bg-bkg/20 absolute -left-1 top-0 z-10 h-5/6 w-2"></div>
              <span className="relative z-20">
                Back End: Python, Fast API, Django
              </span>
            </li>
            <li className="relative">
              <div className="bg-bkg/20 absolute -left-1 top-0 z-10 h-5/6 w-2"></div>
              <span className="relative z-20">
                Databases: MySQL, Postgres, MongoDB, DynamoDB
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative justify-center">
        <div className="border-t-bkg border-r-bkg absolute right-0 top-0 z-10 border border-b-[7rem] border-l-[3rem] border-r-[3rem] border-t-[7rem] border-white"></div>
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
        <div className="m-8 mx-auto w-4/5 gap-8 lg:flex">
          <div className="mt-4 grid w-full items-center rounded-xl p-2 text-center shadow-lg lg:mt-0 lg:w-1/2">
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
          <div className="mt-4 grid w-full items-center rounded-xl p-2 text-center shadow-lg lg:mt-0 lg:w-1/2">
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
