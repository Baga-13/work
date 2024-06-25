import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const style = {
  button:
    "hidden lg:block font-bcd text-sm font-regular bg-[#8FD400] text-white hover:bg-white hover:text-[#2f3061] transition px-4 py-2 rounded-[3px] cursor-pointer hover:shadow-md tracking-wider",
  logo: "font-cde text-[#2f3061] font-normal text-[28px] cursor-pointer",
  list: "absolute w-[12rem] top-[70px] right-[20px] bg-white rounded-md px-[9px] pt-[12px] pb-[8px] shadow-lg font-ab text-[14px] font-light",
  options:
    "flex items-center my-[2px] px-2 py-2 space-x-3 hover:bg-gray-100 cursor-pointer rounded-sm transition",
  img: "w-5 h-5",
};

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  return (
    <div className="md:border-b">
      <div className="flex px-5 justify-between md:mx-[2rem] xl:mx-9 lg:px-[4rem] py-2 items-center">
        <div className="flex justify-between space-x-9 items-center">
          <Link href="/">
            <p className={style.logo}>JobFrisk</p>
          </Link>
          <div className="flex">
            <p className="whitebutton">Career Advice</p>
          </div>
        </div>

        {/* ==================== new ================ */}
        <div className="flex">
          <div className="pr-3 flex">
            <p className="whitebutton">Explore Oppurtunities</p>
            <p className={style.button}>Post a job</p>
            {/* <p className={style.letter}>Be a freelancer</p> */}
          </div>

          <div className="flex space-x-2 items-center border-l pl-4">
            <img
              className="h-6 scale-75 cursor-pointer"
              alt="notification"
              src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/50/808080/external-notification-ecommerce-user-interface-inkubators-detailed-outline-inkubators.png"
            />
            <div>
              <div className="hover:bg-gray-50 transition-all rounded-full">
                <div onClick={handleToggle} className="flex items-center">
                  <img
                    className="bg-gray-100 rounded-full p-1 cursor-pointer w-[36px]"
                    alt="account"
                    src="./woman.jpg"
                  />
                  <ArrowDropDownIcon className="cursor-pointer" />
                </div>

                {toggle && (
                  <div className="transition">
                    <ul className={style.list}>
                      <li className="font-semibold font-def text-[15px]">
                        Signed as <span>User</span>
                      </li>
                      <DropdownItem
                        img={
                          "https://img.icons8.com/ios/50/36454f/user--v1.png"
                        }
                        text={"My Account"}
                      />
                      <DropdownItem
                        img={
                          "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/36454f/external-job-web-and-seo-tanah-basah-basic-outline-tanah-basah.png"
                        }
                        text={"My Job"}
                      />
                      <DropdownItem
                        img={
                          "https://img.icons8.com/small/32/36454f/helping-hand.png"
                        }
                        text={"FAQs"}
                      />
                      <DropdownItem
                        img={
                          "https://img.icons8.com/sf-ultralight/50/36454f/services.png"
                        }
                        text={"Settings"}
                      />
                      <li className="border-t text-center text-[#8FD400] font-semibold cursor-pointer hover:bg-gray-200 pt-1 pb-2 transition rounded-sm">
                        LogOut
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <div className={style.options}>
      <img className={style.img} src={props.img} alt="icons" />
      <p>{props.text}</p>
    </div>
  );
}

export default Header;
