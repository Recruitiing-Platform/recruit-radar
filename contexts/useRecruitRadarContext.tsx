'use client';

import { auth } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  TwitterAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  User,
  updateProfile,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { createContext, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

export const RecruitRadarContext = createContext<any>({});

const RecruitRadarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const { toast } = useToast();

  const [rRUser, setRRUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [buttonColor, setButtonColor] = useState<string>('bg-recPrimary');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);
  const [twitterLoading, setTwitterLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [signInError, setsignInError] = useState(false);

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const signInWithGoogle = async () => {
    setGoogleLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setRRUser(result?.user);
    } catch (error) {
      console.error('Google sign-in error:', error);
    } finally {
      setGoogleLoading(false);
    }
  };

  const signInWithTwitter = async () => {
    setTwitterLoading(true);
    const provider = new TwitterAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      setRRUser(result?.user);
    } catch (error) {
      console.error('Twitter sign-in error:', error);
    } finally {
      setTwitterLoading(false)
    }
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const resendEmail = async () => {
    try {
      const actionCodeSettings = {
        url: `${base_url}/verify`,  // your Next.js page URL
        handleCodeInApp: true,
      };
      if (rRUser) {
        await sendEmailVerification(rRUser, actionCodeSettings);
        toast({
          description: 'Email sent successfully!'
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setButtonColor('bg-[#FFACAC]');
    setLoading(true);

    // Validate name
    if (!name.trim()) {
      setError('Please enter your name.');
      setButtonColor('bg-recPrimary');
      setLoading(false);
      return;
    }

    if (name.split(' ').length < 2) {
      setError('Please enter your full name.');
      setButtonColor('bg-recPrimary');
      setLoading(false);
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      setButtonColor('bg-recPrimary');
      setLoading(false);
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, and one special character.'
      );
      setButtonColor('bg-recPrimary');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      setRRUser(user);
      setButtonColor('bg-[#000C22]');
      toast({
        description: 'Signup successful. Verify your email address.'
      })
      const actionCodeSettings = {
        url: `${base_url}/verify`,  // your Next.js page URL
        handleCodeInApp: true,
      };
      await sendEmailVerification(user, actionCodeSettings);
      setShowAlert(true);
      setName('');
      setEmail('');
      setPassword('');
    } catch (error: any) {
      setError(error.message);
      setButtonColor('bg-recPrimary');
    } finally {
      setLoading(false);
    }
  };

  return (
    <RecruitRadarContext.Provider
      value={{
        signInWithGoogle,
        signInWithTwitter,
        error,
        buttonColor,
        handleSubmit,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        loading,
        googleLoading,
        twitterLoading,
        showAlert,
        setShowAlert,
        rRUser,
        resendEmail,
        loginEmail, loginPassword, setLoginEmail, setLoginPassword, signInError
      }}
    >
      {children}
    </RecruitRadarContext.Provider>
  );
};

export default RecruitRadarContextProvider;
