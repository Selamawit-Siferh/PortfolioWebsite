import React from "react";
import "./style.scss";
import PageHeaderContainer from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaReact, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

const personDetails = [
  {
    label: "Name",
    value: "Selamawit Siferh",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Addis Ababa",
  },
  {
    label: "Email",
    value: "siferhselamawit@gmail.com",
  },
  {
    label: "Contact",
    value: "+251977643415",
  },
];

const jobSummary =
  "Motivated and skilled Software Engineer with a strong foundation in Software Engineering and computer science principles. I have honed my skills in developing innovative, responsive, and user centric web applications using modern tools and frameworks. Proficient in front-end technologies with a basic understanding of back-end systems and RESTful APIs, I deliver scalable, high-performance solutions. My academic background and project experience have equipped me with solid programming knowledge and software development methodologies. With a passion for technology, creativity, and continuous learning.";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContainer
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
     
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)", opacity: 0 }}
            end={{ transform: "translateX(0px)", opacity: 1 }}
          >
            <div>
              <h3>Software Engineer</h3>
              <p>{jobSummary}</p>
            </div>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)", opacity: 0 }}
            end={{ transform: "translateX(0px)", opacity: 1 }}
          >
            <div>
              <h3 className="personalInformationHeaderText">
                Personal Information
              </h3>
              <ul>
                {personDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)", opacity: 0 }}
            end={{ transform: "translateX(0px)", opacity: 1 }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaHtml5 size={60} color="var(--yellow-theme-main-color)" />
                <p>HTML</p>
              </div>
              <div>
                <FaCss3Alt size={60} color="var(--yellow-theme-main-color)" />
                <p>CSS</p>
              </div>
              <div>
                <FaReact size={60} color="var(--yellow-theme-main-color)" />
                <p>React</p>
              </div>
              <div>
                <SiDjango size={60} color="var(--yellow-theme-main-color)" />
                <p>Django</p>
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                <p>Database</p>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
