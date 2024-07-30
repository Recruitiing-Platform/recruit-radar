'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from '../../../lib/firebase';
import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import Image from 'next/image';
import InputField from '../../../components/ui/InputField';
import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';
import { Eye, EyeOff } from 'lucide-react';
import { FaUser } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

const Page = () => {
  const router = useRouter();
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [buttonColor, setButtonColor] = useState('bg-recPrimary');

  const texts = [
    'All you need to hire or get hired fast.',
    'Access thousands of job opportunities',
    'Professionally tailored resume',
    'AI powered applicant tracking system',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const signInWithLinkedIn = async () => {
    const provider = new OAuthProvider('linkedin.com');
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('LinkedIn sign-in error:', error);
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
    setButtonColor('bg-[#FFACAC]');

    // Validate name
    if (!name.trim()) {
      setError('Please enter your name.');
      setButtonColor('bg-recPrimary');
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      setButtonColor('bg-recPrimary');
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, and one special character.'
      );
      setButtonColor('bg-recPrimary');
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
      alert('Verification email sent!');
      router.push('/login');
      setButtonColor('bg-[#000C22]');
    } catch (error: any) {
      setError(error.message);
      setButtonColor('bg-recPrimary');
    }
  };

  return (
    <div className="max-h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Left Side (Desktop View) */}
      <div className="hidden md:flex w-[50%] flex-col items-center dark:bg-[#000611] bg-recLightGrey text-recSecondary relative">
        <div className="bg-gradient-to-r from-[#150096] to-[#9F0BA2] h-2 w-full rounded-sm"></div>
        <div className="flex items-center justify-between w-full p-10">
          <div>
            {/* Logo */}
            <Link href="/" className="hidden dark:flex">
              <Image
                src="/rr-dark.svg"
                width={120}
                height={30}
                loading="lazy"
                alt="RecruitRadar Logo"
              />
            </Link>
            <Link href="/" className="dark:hidden">
              <Image
                src="/rr_light.svg"
                width={120}
                height={30}
                loading="lazy"
                alt="RecruitRadar Logo"
              />
            </Link>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
        <div className="relative w-[70%] sm:hidden md:flex items-center dark:hidden justify-center">
          {texts.map((text, index) => (
            <p
              key={index}
              className={`absolute text-center top-[70px] text-headerOne font-[800] text-transparent bg-clip-text transition-opacity duration-1000 ${
                currentTextIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: 'linear-gradient(to right, #150096, #9F0BA2)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                minHeight: '6rem',
                lineHeight: '1.5',
                whiteSpace: 'pre-line',
              }}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
        <div className="relative w-[70%] sm:hidden md:dark:flex items-center hidden justify-center">
          {texts.map((text, index) => (
            <p
              key={index}
              className={`absolute text-center top-[70px] text-headerOne font-[800] text-transparent bg-clip-text transition-opacity duration-1000 ${
                currentTextIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: 'linear-gradient(to right, #F585F7, #81E0E6)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                minHeight: '6rem',
                lineHeight: '1.5',
                whiteSpace: 'pre-line',
              }}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0">
          <Image src="/left-img.png" width={350} height={300} alt="Circles" />
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="flex-1 flex flex-col justify-center items-center w-[50%] bg-recLight px-8 relative md:static">
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
              labelClassName="text-[#000030] text-sm"
              inputClassName="bg-[#F5F4FB] border-none"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <InputField
              id="email"
              label="Enter Email"
              type="email"
              placeholder="Email"
              labelClassName="text-[#000030] text-sm"
              inputClassName="bg-[#F5F4FB] border-none"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className="relative">
              <InputField
                id="password"
                label="Enter Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                labelClassName="text-[#000030] text-sm"
                inputClassName="bg-[#F5F4FB] border-none pr-10"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <div
                className="absolute right-3 top-11 cursor-pointer text-recSubtle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
            {error && <p className="text-red-500 text-recError text-xs">{error}</p>}
            <Button
              className={`w-full py-3 ${buttonColor} text-recLight font-recBold rounded-lg mb-6 flex gap-3 items-center justify-center`}
              type="submit"
            >
              <span>Create account</span>
              <FaUser />
            </Button>
          </form>

          <p className="text-center text-recSecondary text-xs mb-6 mt-3">
            By continuing you accept our&nbsp;
            <span className="underline cursor-pointer hover:font-recBold hover:text-recDark">
              terms and conditions
            </span>
            &nbsp; including our&nbsp;
            <span className="underline cursor-pointer hover:font-recBold hover:text-recDark">
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
              className="flex items-center gap-3 justify-center bg-gray-200 text-recSecondary font-recSemiBold py-2 px-4 rounded-lg border border-recSecondary cursor-pointer hover:bg-recPrimary/50 hover:border-recPrimary/50 transition-colors duration-300"
              onClick={signInWithGoogle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M29.5743 13.3886H28.5003V13.3333H16.5003V18.6666H24.0357C22.9363 21.7713 19.9823 24 16.5003 24C12.0823 24 8.50033 20.418 8.50033 16C8.50033 11.582 12.0823 7.99996 16.5003 7.99996C18.5397 7.99996 20.395 8.76929 21.8077 10.026L25.579 6.25463C23.1977 4.03529 20.0123 2.66663 16.5003 2.66663C9.13699 2.66663 3.16699 8.63663 3.16699 16C3.16699 23.3633 9.13699 29.3333 16.5003 29.3333C23.8637 29.3333 29.8337 23.3633 29.8337 16C29.8337 15.106 29.7417 14.2333 29.5743 13.3886Z"
                  fill="#FFC107"
                />
                <path
                  d="M4.7041 9.79396L9.08477 13.0066C10.2701 10.072 13.1408 7.99996 16.5001 7.99996C18.5394 7.99996 20.3948 8.76929 21.8074 10.026L25.5788 6.25463C23.1974 4.03529 20.0121 2.66663 16.5001 2.66663C11.3788 2.66663 6.93743 5.55796 4.7041 9.79396Z"
                  fill="#FF3D00"
                />
                <path
                  d="M16.4999 29.3333C19.9439 29.3333 23.0732 28.0153 25.4392 25.872L21.3125 22.38C19.9289 23.4322 18.2382 24.0013 16.4999 24C13.0319 24 10.0872 21.7886 8.97788 18.7026L4.62988 22.0526C6.83655 26.3706 11.3179 29.3333 16.4999 29.3333Z"
                  fill="#4CAF50"
                />
                <path
                  d="M29.574 13.3887H28.5V13.3334H16.5V18.6667H24.0353C23.5095 20.1443 22.5622 21.4355 21.3107 22.3807L21.3127 22.3794L25.4393 25.8714C25.1473 26.1367 29.8333 22.6667 29.8333 16C29.8333 15.106 29.7413 14.2334 29.574 13.3887Z"
                  fill="#1976D2"
                />
              </svg>
              <span>Sign in with Google</span>
            </div>
            <div
              className="flex items-center gap-3 justify-center bg-gray-200 text-recSecondary font-recSemiBold py-2 px-4 rounded-lg border border-recSecondary cursor-pointer hover:bg-recPrimary/50 hover:border-recPrimary/50 transition-colors duration-300"
              onClick={signInWithLinkedIn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clip-path="url(#clip0_457_2241)">
                  <path
                    d="M29 0.749993H3C2.41008 0.74399 1.84187 0.972255 1.42005 1.3847C0.998227 1.79715 0.757253 2.36009 0.75 2.94999V29.055C0.758564 29.644 1.00012 30.2057 1.42179 30.6171C1.84347 31.0284 2.41093 31.256 3 31.25H29C29.59 31.2547 30.1578 31.0256 30.5794 30.6129C31.001 30.2002 31.2421 29.6374 31.25 29.0475V2.94249C31.2395 2.35432 30.9972 1.79406 30.5759 1.38351C30.1546 0.972955 29.5883 0.745288 29 0.749993Z"
                    fill="#0076B2"
                  />
                  <path
                    d="M5.26527 12.1825H9.79277V26.75H5.26527V12.1825ZM7.53027 4.9325C8.04956 4.9325 8.55717 5.08651 8.98891 5.37506C9.42064 5.66361 9.75709 6.07373 9.9557 6.55353C10.1543 7.03333 10.2061 7.56126 10.1047 8.07053C10.0032 8.5798 9.75291 9.04752 9.38554 9.41453C9.01818 9.78155 8.55022 10.0314 8.04085 10.1324C7.53149 10.2334 7.00361 10.181 6.524 9.98196C6.04438 9.7829 5.63459 9.44606 5.34645 9.01405C5.05831 8.58204 4.90478 8.07428 4.90527 7.555C4.90594 6.85924 5.18279 6.1922 5.675 5.70046C6.16721 5.20871 6.83451 4.93249 7.53027 4.9325ZM12.6328 12.1825H16.9728V14.1825H17.0328C17.6378 13.0375 19.1128 11.83 21.3153 11.83C25.9003 11.82 26.7503 14.8375 26.7503 18.75V26.75H22.2228V19.6625C22.2228 17.975 22.1928 15.8025 19.8703 15.8025C17.5478 15.8025 17.1528 17.6425 17.1528 19.5525V26.75H12.6328V12.1825Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_457_2241">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in with LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
