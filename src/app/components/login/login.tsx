import Link from "next/link";

const style = {
  logo: "font-cde text-center text-[#2f3061] font-normal text-[28px] cursor-pointer pb-[1rem]",
  icon: "flex space-x-8 border hover:bg-gray-50 rounded-md cursor-pointer items-center py-2 px-7",
};

const LoginAccount = () => {
  return (
    <div className="bg-gray-50 w-screen h-screen">
      <div className="">
        <div className="bg-white relative top-4 py-[3rem] mx-[27rem] lg:mx-[20rem] md:mx-[15rem] sm:mx-[7rem] flex flex-col justify-center items-center rounded-md shadow-xl">
          <div className="space-y-3">
            <h1 className={style.logo}>JobFrisk</h1>
            <p className="font-def font-semi-bold text-[18px]">Sign In</p>
            <div className="flex flex-col space-y-5">
              <input
                className="inputLogin"
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />
              <input
                className="inputLogin"
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
              <div className="space-y-2">
                <p className="text-center text-[13px] font-bcd">
                  Don't have an account?{" "}
                  <Link href="/signup">
                    <span className="text-center text-[#8FD400] hover:underline cursor-pointer">
                      Sign up now!
                    </span>
                  </Link>
                </p>{" "}
                <p className="font-bcd text-center text-[#8FD400] hover:underline cursor-pointer text-[13px]">
                  Forgot password?
                </p>
              </div>

              {/* <Link href="/personalForm"> */}
              {/* </Link> */}
              <button
                className="bg-[#8FD400] hover:bg-green-500 font-bcd font-semibold cursor-pointer rounded-full py-2 text-white"
                type="submit"
              >
                Sign in
              </button>
            </div>
            <p className="text-gray-400 font-ab text-[13px] text-center">Or</p>

            {/* ==================== optional sign in method ================== */}

            <div className="flex flex-col space-y-3">
              <button className={style.icon}>
                <img
                  className="w-[1.7rem]"
                  src="https://img.icons8.com/color/48/null/google-logo.png"
                />
                <p className="text-gray-700 text-[15px]">Sign in with Google</p>
              </button>
              <button className={style.icon}>
                <img
                  className="w-[1.7rem]"
                  src="https://img.icons8.com/ios-filled/50/577BCE/facebook-f.png"
                />
                <span className="text-gray-700 text-[15px] font-bcd">
                  Sign in with Facebook
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAccount;
