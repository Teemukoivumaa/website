"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

const experiences = [
  {
    company: "OP FINANCIAL GROUP",
    position: "SPECIALIST, DEVOPS ENGINEER",
    startTime: "01.04.2023",
    endTime: "Present",
    type: "Full Stack",
    description:
      "After graduating from Oulu University of Applied Sciences, I continued working on my thesis project, focusing on coding new features and resolving bugs. Along the way, I became intrigued by Reliability Engineering, sparking an ongoing journey of learning and skill development.",
  },
  {
    company: "OP FINANCIAL GROUP",
    position: "DEVOPS ENGINEER TRAINEE",
    startTime: "01.10.2022",
    endTime: "30.03.2023",
    type: "Full Stack",
    description:
      "After completing a summer internship, I transitioned to a Full Stack React project where I started on working on my Bachelor's thesis. This switch provided me with the opportunity to challenge myself by delving into a new platform, further expanding my skill set and knowledge base.",
  },
  {
    company: "OP FINANCIAL GROUP",
    position: "DEVOPS ENGINEER SUMMER TRAINEE",
    startTime: "01.05.2022",
    endTime: "30.09.2022",
    type: "Back-end",
    description:
      "Returning to a previous project, I focused on fortifying my skills as a junior developer. This decision allowed me to leverage existing knowledge, tackle challenges with fresh insights, and seamlessly integrate back into the team.",
  },
  {
    company: "OP FINANCIAL GROUP",
    position: "DEVOPS ENGINEER TRAINEE",
    startTime: "01.09.2021",
    endTime: "31.12.2021",
    type: "Back-end",
    description:
      "While completing my studies at Oulu University of Applied Sciences, I continued working on the same project as a trainee following my summer job. Through this experience, I gained valuable experience in software development and improved my English language skills while working in a multinational team. In the last two months of my traineeship, I took on leadership responsibilities in some of the daily meetings. Overall, I gained further knowledge in writing maintainable code, working collaboratively in a team, and CI/CD processes.",
  },
  {
    company: "OP FINANCIAL GROUP",
    position: "DEVOPS ENGINEER SUMMER TRAINEE",
    startTime: "03.05.2021",
    endTime: "27.08.2021",
    type: "Back-end",
    description:
      "At OP, I developed and maintained their CI/CD Jenkins pipelines. Although I had minimal experience in CI/CD before starting, I learned a great deal during my time there. I gained valuable knowledge in the importance of unit testing, how to work collaboratively in a team, and how to properly use Git. My work largely consisted of maintaining the pipelines, working on new improvements, and providing support to pipeline users. Through this experience, I was able to develop strong skills in software development, and learned how to write high-quality, maintainable code.",
  },
  {
    company: "NOKIA",
    position: "RF BB TEST AUTOMATION SUMMER TRAINEE",
    startTime: "18.05.2020",
    endTime: "30.09.2020",
    type: "Full stack",
    description:
      "During my time at Nokia, I worked closely with a team of seven to develop a new website. Through this experience, I gained valuable insights into web development and learned JavaScript, React, and Flask. I developed a file upload feature and created dynamic, interactive charts based on the website's information. Overall, my time at Nokia was a critical period of growth for me as a developer.",
  },
  {
    company: "TENTRIO OY",
    position: "SOFTWARE DEVELOPER TRAINEE",
    startTime: "04.06.2019",
    endTime: "12.08.2019",
    type: "Full stack",
    description:
      "I returned to work with Tentrio for the summer, in the same role as before. This time, however, my job assignments were added because I had been working there for some time. I had improved significantly compared to summer 2018. I got bigger tasks like doing an API and a small artificial intelligence project that I was responsible for.",
  },
  {
    company: "TENTRIO OY",
    position: "SOFTWARE DEVELOPER TRAINEE",
    startTime: "01.09.2018",
    endTime: "20.12.2018",
    type: "Full stack",
    description:
      "Following my summer job, I was able to secure a position as a trainee in the same company. My work largely consisted of testing new applications and websites, and I was able to address any issues or errors that I identified independently. Through this experience, I gained valuable knowledge and skills in software development.",
  },
  {
    company: "TENTRIO OY",
    position: "SOFTWARE DEVELOPER SUMMER TRAINEE",
    startTime: "01.06.2018",
    endTime: "01.07.2018",
    type: "Front-end",
    description:
      "As a summer trainee, I tested new applications and websites, while also making small improvements to the web pages. I gained valuable experience in software development and gained a deeper understanding of how to work effectively in a team environment.",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function WorkExperienceCard({ ...props }: CardProps) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const allExperiences = experiences.map((experience, index) => (
    <Card className={cn("m-[2rem] max-w-screen-2xl")} key={index} {...props}>
      <CardHeader>
        <CardTitle>
          {experience.position} at {experience.company}
        </CardTitle>
        <CardDescription>
          {experience.type} <br></br>
          {experience.startTime} - {experience.endTime}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h2>{experience.description}</h2>
      </CardContent>
    </Card>
  ));

  const initialExperiences = allExperiences.slice(0, 4);
  const restExperiences = allExperiences.slice(5, allExperiences.length);

  return (
    <>
      {
        <div>
          <div>{initialExperiences}</div>

          <div
            className={`mb-[3rem] overflow-hidden transition-transform duration-700 motion-reduce:transition-none motion-reduce:hover:transform-none ${
              showMore ? "-translate-y-0" : "translate-y-full"
            }`}
          >
            <div style={{ height: showMore ? "auto" : 0 }}>
              {restExperiences}
            </div>
          </div>

          <div className="mb-[5rem] flex justify-center">
            <Button onClick={toggleShowMore}>
              {showMore ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" />
              )}
              {showMore ? "Show Less" : "Show More"}
            </Button>
          </div>
        </div>
      }
    </>
  );
}
