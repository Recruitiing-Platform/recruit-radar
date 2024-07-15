"use client";

import React from "react";
import signIn from "../../lib/firebase/auth/signIn";

import { useRouter } from "next/navigation";

import Image from "next/image";

interface Props {}

const Login = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [signInError, setsignInError] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    console.log(passwordVisible);
  };

  const handleForm = async (event: any) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      setsignInError(true)
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };

  return (
    <div className="lg:flex h-screen">
      <div
        className="w-3/5 p-10 bg-cover hidden lg:block "
        style={{
          backgroundImage: "url('bglogin.png')",
        }}
      >
        <Image src="/logo.png" alt="logo" width={100} height={800}></Image>

        <h1 className="font-recSemiBold text-center text-textLarge mt-40">
          Discover Your Perfect
          <span className="text-recPrimary"> Career</span> Match
        </h1>
      </div>
      <div className="lg:w-2/5 relative h-screen bg-recLight p-4 text-center text-recDark">
        <svg
          className="absolute inset-y-0 right-0 pointer-events-none lg:hidden"
          width="109"
          height="101"
          viewBox="0 0 109 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="230.44"
            height="52.9769"
            rx="26.4884"
            transform="matrix(0.822643 -0.568558 0.568547 0.82265 7.19971 57.4186)"
            fill="#6F83A9"
          />
          <g filter="url(#filter0_d_1477_2163)">
            <rect
              width="230.44"
              height="52.9769"
              rx="26.4884"
              transform="matrix(0.822643 -0.568558 0.568547 0.82265 0 34.0187)"
              fill="url(#paint0_linear_1477_2163)"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1477_2163"
              x="-4"
              y="-101"
              width="235.69"
              height="190.6"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.0470588 0 0 0 0 0.133333 0 0 0 0.19 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1477_2163"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1477_2163"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1477_2163"
              x1="114.122"
              y1="52.5309"
              x2="113.903"
              y2="28.3114"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E7EAEF" stop-opacity="0.76" />
              <stop offset="1" stop-color="#6F83A9" />
            </linearGradient>
          </defs>
        </svg>

        <div
          className="
        md:py-12 grid grid-cols-1  px-12 pt-24"
        >
          <div className="mb-12">
            <h1 className="text-headerOne font-recSemiBold text-recDark">
              Log in
            </h1>
            <p className="font-recMedium">Welcome back to Recruiter Radar</p>
          </div>

          <button className="border-2 border-recLightGrey font-textBody rounded-md mb-2 py-2 text-textSmall inline-flex  item-center justify-center gap-2 font-recRegular min-h-auto transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2">
            <span className="">
              <Image
                src="/googleicon.png"
                alt="arrow icon"
                width={24}
                height={24}
              ></Image>
            </span>
            <p>Login with Google</p>
          </button>
          <div className="flex items-center justify-center w-full">
            <div className="flex-grow border-t-2 border-recLightGrey pb-2"></div>
            <p className="mb-2 text-textSmall font-recRegular mx-2">
              or Login with Email
            </p>
            <div className="flex-grow border-t-2 border-recLightGrey pb-2"></div>
          </div>
          <form
            onSubmit={handleForm}
            className="grid grid-cols-1 min-w-full gap-2"
          >
            <div className="grid grid-col-1 relative">
              <label className="text-left min-w-full text-textSmall font-recRegular">
                Email*
              </label>

              <input
                onChange={(e) => setEmail(e.target.value)}
                className="text-recBody rounded-md bg-recLightGrey py-2 pl-8"
                type="email"
                id="email"
                name="email"
                placeholder="enter email"
                required
              />
              <span>
                <Image
                  className="absolute inset-y-0 left-0 pointer-events-none mt-[30px] ml-2"
                  src="/mdi_user.png"
                  alt="arrow icon"
                  width={20}
                  height={20}
                ></Image>
              </span>
            </div>

            <div className="grid grid-col-1 relative">
              <label className="text-left text-textSmall font-recRegular">
                Password*
              </label>

              <input
                onChange={(e) => setPassword(e.target.value)}
                className=" text-recBody rounded-md bg-recLightGrey py-2 pl-8"
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="enter your password"
                required
              />
              <span>
                <Image
                  className="absolute inset-y-0 left-0 pointer-events-none mt-[30px] ml-2"
                  src="/lock.png"
                  alt="lock icon"
                  width={20}
                  height={20}
                ></Image>
              </span>
              <button onClick={togglePasswordVisibility} type="button">
                <Image
                  className="absolute inset-y-0 right-0  mt-[30px] mr-2"
                  src="/eyes.png"
                  alt="visibility icon"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </div>

            <p className="text-left mb-4 text-textSmall font-recSemiBold">
              <a href="#">Forgot password?</a>
            </p>
            <div>
              <p
                className={
                  signInError
                    ? "text-left text-recError text-textSmall"
                    : "hidden"
                }
              >
                Your email or password is incorrect
              </p>
            </div>

            <button
              className="bg-recPrimary py-2 rounded-md text-recLight flex items-center justify-center gap-1 hover:opacity-25 mb-4 ease-in-out duration-100"
              type="submit"
            >
              Login
              <span>
                <Image
                  className="top-1 left-50"
                  src="/icon.png"
                  alt="arrow icon"
                  width={15}
                  height={15}
                ></Image>
              </span>
            </button>
          </form>
          <footer>
            <p className="text-textSmall mb-2">
              By continuing you accept our standard &nbsp;
              <span>
                <a href="#" className="text-recPrimary">
                  terms and condition
                </a>
              </span>
              &nbsp; and our
              <span>
                <a href="#" className="text-recPrimary">
                  &nbsp; privacy policy
                </a>
              </span>
            </p>
            <p className="text-textSmall">Don’t have an account? Sign up</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
