import React from "react";
import Link from "next/link";

const style = {
  box: "flex items-start hover:text-white hover:scale-105 transition flex-col font-abc bg-white shadow-lg hover:bg-[#8FD400] px-4 py-6 mx-2 mt-3 mb-10  rounded-sm hover:shadow-md cursor-pointer",
  letter: "pt-4 font-ab font-medium text-lg ",
  para: "pt-5 text-[14px]",
  img: "w-[1.8rem]",
  imgbox: "flex w-[95%] pt-3 flex-1 justify-between items-center",
  icon: "relative right-[3.1rem]",
  button: "bg-blue-100 px-8 py-2 rounded-[1.6rem] hover:shadow-lg",
};

const Offer = () => {
  return (
    <div>
      {/*=============== offers =============*/}
      <div className="mx-[2.6rem] md:mx-[5rem] lg:mx-[6rem] xl:mx-[9rem] lg:mt-[9rem]">
        <div>
          <div className="text-center">
            <p className="font-normal font-bcd text-[1.8rem]">
              Explore the scheme we provide.
            </p>
            <p className="font-abc font-light text-[15px] pt-2">
              Delve into a range of activities that can advance your career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:pt-6 lg:pt-0 lg:mt-[2.4rem]">
            <Link href="/jobsearch">
              <Offers
                header={"Explore Oppurtunities"}
                description={
                  "Explore new avenues and chances for career improvement as well as the acquisition of new skills."
                }
                img={"./intro/job.png"}
              />
            </Link>
            <Link href="/talent">
              <Offers
                header={"Freelance Projects"}
                description={
                  "Work together with other freelancers on a variety of incredible projects to develop your skills."
                }
                img={"./intro/blueprint.png"}
              />
            </Link>
            <Link href="/talent">
              <Offers
                header={"Find Talents"}
                description={
                  "Discover the many talented, skillful and creative persons you need to make ideas a reality."
                }
                img={"./intro/crowd.png"}
              />
            </Link>
            <Link href="/events">
              <Offers
                header={"Events"}
                description={
                  "Participate in a range of events that NGOs, corporations, and other organizations are hosting."
                }
                img={"./intro/event.png"}
              />
            </Link>
          </div>
        </div>
        <div className="py-[3rem] lg:flex lg:flex-row lg:items-center">
          <h2 className="font-ab text-lg md:text-[1.4rem]">
            Ready to explore opportunities that'll help you enhance your career?
          </h2>
          <button className="relative animate-bounce transition-all lg:left-5 bottom-5 font-ab lg:px-3 lg:py-2 xl:py-3 xl:px-8 greenbutton">
            <Link href="/jobsearch"> Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

function Offers(props) {
  return (
    <div className={style.box}>
      <div className="flex">
        <img
          className="w-[53px] bg-white p-1 rounded-md"
          src={props.img}
          alt=""
        />
      </div>
      <h3 className={style.letter}>{props.header}</h3>
      <p className={style.para}>{props.description}</p>
      <div className={style.imgbox}>
        <p></p>
        <img className={style.img} src="./intro/right-arrow.png" alt="" />
      </div>
    </div>
  );
}

export default Offer;
