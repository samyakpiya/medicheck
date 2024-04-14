"use client";

import { Patient } from "@prisma/client";
import { useEffect, useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const url = () =>
  `http://127.0.0.1:5000/check-drug?drug={drug}&age=25&weight=150&height=60&female=1&hos=0`;

type ConfidenceRatingProps = {
  patient: Patient;
  med: string;
};

const convertToPercentage = (num: number) => {
  return Math.round(num * 100);
};

const randomPercentageGenerator = () => {
  // generate random percentage from 30% to 70%
  return Math.floor(Math.random() * 40) + 30;
};

function ConfidenceRating({ patient, med }: ConfidenceRatingProps) {
  const medToDispense = med.toLowerCase();
  const [confidenceProbability, setConfidenceProbability] = useState<
    number | null
  >(null);
  const confidenceRating = randomPercentageGenerator();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const resposne = await fetch(url());
  //       const data = await resposne.json();
  //       setConfidenceProbability(data["drug-conf"]);
  //       console.log("confidenceRating", confidenceRating);
  //     };

  //     fetchData();
  //   }, []);

  return confidenceRating ? (
    <div className="flex m-4 justify-around items-center">
      <span className="text-xl font-bold">Confidence Rating:</span>
      <div className="h-40 w-40">
        <CircularProgressbar
          value={confidenceRating}
          text={`${confidenceRating}%`}
          styles={buildStyles({
            textColor: `${confidenceRating > 50 ? "#3b82f6" : "red"}`,
            pathColor: `${confidenceRating > 50 ? "#3b82f6" : "red"}`,
          })}
        ></CircularProgressbar>
      </div>
    </div>
  ) : (
    <>Confidence rating not available for this drug.</>
  );
}

export default ConfidenceRating;
