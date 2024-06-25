import Link from "next/link";

const style = {
  button:
    "hidden lg:block font-bcd text-sm font-regular bg-[#8FD400] text-white hover:bg-slate-50 hover:text-[#2f3061] transition px-4 py-2 rounded-[3px] cursor-pointer hover:shadow-md tracking-wider",
  letter:
    "hidden lg:block font-abc text-[13px] font-regular hover:bg-slate-50 px-3 py-2 rounded-sm cursor-pointer hover:shadow-lg",
  logo: "font-cde text-[#2f3061] font-normal text-[28px] cursor-pointer",
};

const Header = () => {
  return (
    <div className="md:border-b">
      <div className="flex w-[90vw] mx-auto justify-between md:mx-[2rem] xl:mx-9 lg:px-[4rem] py-2 items-center">
        <h1 className={style.logo}>JobFrisk</h1>

        <div className="flex space-x-3">
          <Link href="/jobsearch">
            <p className={style.letter}>Explore oppurtunities</p>
          </Link>
          <Link href="/talent">
            <p className={style.button}>Hire a Talent</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
