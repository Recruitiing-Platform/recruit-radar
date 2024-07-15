"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "../../lib/firebase";
import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import InputField from "../../components/ui/InputField";
import Link from "next/link";
import Image1 from "../../app/auth/Assets/LeftImg.png";
import google from "../auth/Assets/icons_google.png";
import LinkedIn from "../auth/Assets/linkedin.png";
import User from "../auth/Assets/User.png";
import eyeIcon from "../auth/Assets/Lock.png";
import Logo from "../auth/Assets/logo.png";

const Page = () => {
  const router = useRouter();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [buttonColor, setButtonColor] = useState("bg-recPrimary");

  const texts = [
    "All you need to <br /> hire or get hired <br /> fast.",
    "Access thousands <br /> of job <br /> opportunities",
    "Professionally <br /> tailor resume",
    "AI powered <br /> applicant tracking <br /> system",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const signInWithLinkedIn = async () => {
    const provider = new OAuthProvider("linkedin.com");
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("LinkedIn sign-in error:", error);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setButtonColor("bg-[#FFACAC]");

    // Validate name
    if (!name.trim()) {
      setError("Please enter your name.");
      setButtonColor("bg-recPrimary");
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      setButtonColor("bg-recPrimary");
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, and one special character."
      );
      setButtonColor("bg-recPrimary");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);
      alert("Verification email sent!");
      router.push("/login");
      setButtonColor("bg-[#000C22]");
    } catch (error: any) {
      setError(error.message);
      setButtonColor("bg-recPrimary");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side (Desktop View) */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-recLightGrey text-recSecondary relative">
        <div className="absolute top-10 left-10">
          <Image
            src={Logo}
            alt="RecruitRadar Logo"
            width={200}
            height={50}
            priority
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center max-w-lg px-8">
          <div className="relative w-full h-full flex items-center justify-center">
            {texts.map((text, index) => (
              <p
                key={index}
                className={`absolute text-center text-headerOne font-recBold text-transparent bg-clip-text transition-opacity duration-1000 ${
                  currentTextIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #150096, #9F0BA2)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  minHeight: "6rem",
                  lineHeight: "1.5",
                  whiteSpace: "pre-line",
                }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            src={Image1}
            alt="Decorative circles"
            width={350}
            height={300}
            priority
          />
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="flex-1 flex flex-col justify-center items-center bg-recLight p-8 relative md:static">
        <div className="absolute inset-0 bg-recLightGrey md:bg-transparent opacity-10 md:opacity-100 md:hidden"></div>
        <div className="relative z-10 w-full max-w-md">
          <h2 className="text-[#000030] text-headerTwo mb-2 text-center font-recBold">
            Create Account
          </h2>
          <p className="text-[#000030] mb-2 text-left font-recBold">
            Find your dream job, launch your career.
          </p>
          <form className="space-y-4 mt-7" onSubmit={handleSubmit}>
            <InputField
              id="name"
              label="Enter Name"
              type="text"
              placeholder="Name"
              labelClassName="text-[#000030]"
              inputClassName="bg-[#F5F4FB] border-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!name.trim() && (
              <p className="text-[#DC3545] text-sm mt-1">Enter full name</p>
            )}
            <InputField
              id="email"
              label="Enter Email"
              type="email"
              placeholder="Email"
              labelClassName="text-[#000030]"
              inputClassName="bg-[#F5F4FB] border-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <InputField
                id="password"
                label="Enter Password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                labelClassName="text-[#000030]"
                inputClassName="bg-[#F5F4FB] border-none pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!password.trim() && (
                <p className="text-[#DC3545] text-sm mt-1">
                  Password should be alphabet and number
                </p>
              )}
              <Image
                src={eyeIcon}
                alt={showPassword ? "Hide Password" : "Show Password"}
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${
                  showPassword ? "text-000030" : "text-000030"
                }`}
                width={20}
                height={20}
              />
            </div>
            {error && <p className="text-red-500 text-[#000030]">{error}</p>}
            <button
              className={`w-full py-3 ${buttonColor} text-recLight font-recBold rounded-lg mb-6 flex items-center justify-center`}
              type="submit"
            >
              <span>Create account</span>
              <Image src={User} alt="User" className="h-5 w-5 ml-2" />
            </button>
          </form>

          <p className="text-center text-recSecondary text-sm mb-6 mt-3">
            By continuing you&nbsp;
            <span className="underline hover:font-recBold hover:text-recDark">
              accept our terms and conditions
            </span>
            &nbsp; including our&nbsp;
            <span className="underline hover:font-recBold hover:text-recDark">
              privacy policy
            </span>
            .
          </p>

          <div className="relative my-6 flex items-center justify-center">
            <hr className="w-1/2 border-0 mt-3 mb-3 h-px bg-recDark" />
            <span className="px-2 text-sm text-recDark bg-white">Or</span>
            <hr className="w-1/2 border-0 mt-3 mb-3 h-px bg-recDark" />
          </div>

          <div className="flex flex-col space-y-3 mb-6">
            <div
              className="flex items-center justify-center bg-gray-200 text-recSecondary font-recSemiBold py-2 px-4 rounded-lg border border-recSecondary cursor-pointer"
              onClick={signInWithGoogle}
            >
              <Image
                src={google}
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign in with Google
            </div>
            <div
              className="flex items-center justify-center bg-gray-200 text-recSecondary font-recSemiBold py-2 px-4 rounded-lg border border-recSecondary cursor-pointer"
              onClick={signInWithLinkedIn}
            >
              <Image
                src={LinkedIn}
                alt="LinkedIn"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign in with LinkedIn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
