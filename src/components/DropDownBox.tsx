import { FC, useEffect, useRef, useState } from "react";

interface DropDownBoxProps {
  title: string;
  items: string[];
}

const DropDownBox: FC<DropDownBoxProps> = ({ title, items }) => {
  const qualifications = useRef<HTMLUListElement>(null);
  const box_qualifications = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const qualifications_arrow = useRef<SVGSVGElement>(null);
  const [qualificationsBase, setQualificationsBase] = useState(0);
  const [qualificationsExpanded, setQualificationsExpanded] = useState(0);

  useEffect(() => {
    if (qualificationsBase === 0) {
      setQualificationsBase(box_qualifications.current?.offsetHeight || 0);
    }
    setQualificationsExpanded(
      qualificationsBase + 8 + (qualifications.current?.offsetHeight || 0),
    );

    if (window.innerWidth >= 640) {
      box_qualifications.current?.style.setProperty(
        "height",
        qualificationsExpanded + "px",
      );

      container.current?.style.setProperty(
        "height",
        (qualifications.current?.offsetHeight || 0) + "px",
      );
    }

    function handleWindowResize() {
      if (window.innerWidth < 640) {
        box_qualifications.current?.style.setProperty(
          "height",
          qualificationsBase + "px",
        );

        setQualificationsExpanded(
          qualificationsBase + 8 + (qualifications.current?.offsetHeight || 0),
        );

        container.current?.style.setProperty("height", "0px");
        qualifications_arrow.current?.classList.remove("rotate-180");
        qualifications.current?.classList.remove("expanded");
      } else {
        setQualificationsExpanded(
          qualificationsBase + 8 + (qualifications.current?.offsetHeight || 0),
        );

        box_qualifications.current?.style.setProperty(
          "height",
          qualificationsExpanded + "px",
        );

        container.current?.style.setProperty(
          "height",
          (qualifications.current?.offsetHeight || 0) + "px",
        );
      }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const handleClickQualifications = () => {
    if (window.innerWidth < 640) {
      if (qualifications.current?.classList.contains("expanded")) {
        box_qualifications.current?.style.setProperty(
          "height",
          qualificationsBase + "px",
        );
        container.current?.style.setProperty("height", "0px");
        qualifications_arrow.current?.classList.toggle("rotate-180");
      } else {
        box_qualifications.current?.style.setProperty(
          "height",
          qualificationsExpanded + "px",
        );
        container.current?.style.setProperty(
          "height",
          (qualifications.current?.offsetHeight || 0) + "px",
        );
        qualifications_arrow.current?.classList.toggle("rotate-180");
        console.log(qualificationsExpanded);
      }
      qualifications.current?.classList.toggle("expanded");
    }
  };

  return (
    <div
      className="border-title text-title m-4 grid auto-rows-min rounded-xl border p-2 transition-all duration-500 sm:m-2 sm:mt-4"
      onClick={handleClickQualifications}
      ref={box_qualifications}
    >
      <h3 className="text-2lx relative z-20 mb-3 mt-2 text-center font-medium">
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="ml-2 inline-block h-5 w-5 transition-all duration-300 sm:hidden"
          ref={qualifications_arrow}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </h3>
      <div
        className="relative h-0 overflow-hidden transition-all duration-500"
        ref={container}
      >
        <ul className="child:pb-1 absolute left-4 text-sm" ref={qualifications}>
          {items.map((item, index) => {
            return (
              <li className="relative first:text-white" key={index}>
                <div className="bg-bkg/20 absolute -left-1 z-10 h-5/6 w-2"></div>
                <span className="relative z-20">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDownBox;
