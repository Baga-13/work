import React from "react";
import Link from "next/link";

const style = {
  logo: "font-cde text-center text-[#2f3061] font-normal text-[28px] cursor-pointer pb-[1rem]",
  input:
    "border hover:border-[#8FD400] w-[20rem] focus:outline-blue-400 font-ab rounded-full py-2 px-2 font-light text-[14px]",
  google:
    "flex space-x-8 border hover:bg-gray-50 rounded-full cursor-pointer items-center py-2 px-7",
};

const signup = () => {
  return (
    <div>
      {" "}
      <div className="bg-gray-50 w-screen h-screen">
        <div className="">
          <div className="bg-white py-[3rem] mx-[27rem] flex flex-col justify-center items-center rounded-md shadow-xl">
            <div className="space-y-3">
              <h1 className={style.logo}>JobFrisk</h1>
              <p className="font-def font-semi-bold text-[18px]">Sign Up</p>
              <div className="flex flex-col space-y-5">
                <input
                  className={style.input}
                  type="email"
                  name="password"
                  id=""
                  placeholder="Email"
                />
                <input
                  className={style.input}
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                />
                <input
                  className={style.input}
                  type="password"
                  name="password"
                  id=""
                  placeholder="Confirm Password"
                />
                <div className="space-y-2">
                  <p className="text-center text-[13px] font-bcd">
                    Already have an account?{" "}
                    <Link href="/login">
                      <span className="text-center text-[#8FD400] hover:underline cursor-pointer">
                        Log in
                      </span>
                    </Link>
                  </p>{" "}
                </div>

                <input
                  className="bg-[#8FD400] hover:bg-green-500 font-bcd font-semibold cursor-pointer rounded-full py-2 text-white"
                  type="submit"
                  value="Sign up"
                />
              </div>
              <p className="text-gray-400 font-ab text-[13px] text-center">
                Or
              </p>

              {/* ==================== optional sign in method ================== */}

              <div className="flex flex-col space-y-3">
                <button className={style.google}>
                  <img
                    className="w-[1.7rem]"
                    src="https://img.icons8.com/color/48/null/google-logo.png"
                  />
                  <p className="text-gray-700 text-[15px]">
                    Sign in with Google
                  </p>
                </button>
                <button className={style.google}>
                  <img
                    className="w-[1.7rem]"
                    src="https://img.icons8.com/ios-filled/50/577BCE/facebook-f.png"
                  />
                  <p className="text-gray-700 text-[15px] font-bcd">
                    Sign in with Facebook
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup
