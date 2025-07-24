import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

import colorSharp from "../assets/img/color-sharp.png";

import udacityLogo from "../assets/img/udacity.png";
import GSGLogo from "../assets/img/gsg.png";
import primeLogo from "../assets/img/primeAcademy.jpg";
import knowledgeLogo from "../assets/img/knowledgeAcademy.png";

const experiences = [
  {
    title: "Front End Training",
    company_name: "Udacity",
    icon: (
      <img
        src={udacityLogo}
        alt="experience"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    ),
    date: "Feb 2025 – Jun 2025",
    points: [
      "Developed responsive and accessible web applications using HTML, CSS, and modern JavaScript (ES6+)",
      "Built real-world projects integrating RESTful APIs, handling asynchronous operations using Fetch and Async/Await.",
      "Streamlined front-end development workflow using package managers (npm), task runners (Gulp), and bundlers (Parcel) to automate repetitive tasks and optimize code for production",
    ],
  },
  {
    title: "Database Security Training",
    company_name: "Gaza Sky Geeks",
    icon: (
      <img
        src={GSGLogo}
        alt="experience"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    ),
    date: "Jan 2025 – Apr 2025",
    points: [
      "Completed 50 hours of Oracle database security training covering OLS, DAC, and user privilege management.",
      "Gained practical knowledge in controlled data access and secure database configurations.",
      "Simulated real-world scenarios using Oracle tools to enforce multi-level security and access control policies.",
    ],
  },
  {
    title: "Problem Solving Training",
    company_name: "Prime Academy",
    icon: (
      <img
        src={primeLogo}
        alt="experience"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    ),
    date: "Mar 2024 – Jul 2024",
    points: [
      "Learned core problem-solving techniques including Two Pointers, Greedy Algorithms, and Brute Force.",
      "Implemented advanced techniques like Recursion, Dynamic Programming, and Mathematical problem solving.",
    ],
  },
  {
    title: "Front End Training",
    company_name: "Knowledge Academy",
    icon: (
      <img
        src={knowledgeLogo}
        alt="experience"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    ),
    date: "Sep 2023 – Jan 2024",
    points: [
      "Gained hands-on experience in HTML, CSS, and Media Queries.",
      "Built responsive and user-friendly web pages through practical projects",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#151515",
        color: "#fff",
        backgroundImage: `url(${colorSharp})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      //   iconStyle={{ background: experience.iconBg }}
      iconStyle={{ background: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {experience.icon}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div style={{ background: "#000" }} id="experience" className="experience">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariant()}
        className="text-center"
      >
        {/* <h2 className={`${styles.heroHeadText}`}>Degrees and Experiences</h2> */}
        <h2
          className={`${styles.sectionHeadText}`}
          style={{ color: "#fff", fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Experience
        </h2>
        <p className="mt-2">
          {/* Here’s a collection of learning journeys, internships, and hands-on
          experiences I gained across different areas such as front-end
          development, database security, and algorithmic problem solving. */}
        </p>
      </motion.div>

      <div className="flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
