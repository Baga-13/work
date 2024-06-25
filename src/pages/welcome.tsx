"use client";
import Freelance from "../app/components/Welcomepage/Freelance";
import Intro from "../app/components/Welcomepage/Intro";
import Offer from "../app/components/Welcomepage/Offer";

const Welcome = () => {
  return (
    <div className="-z-50">
      <Intro handleFalse={undefined} />
      <Freelance />
      <Offer />
    </div>
  );
};

export default Welcome;
