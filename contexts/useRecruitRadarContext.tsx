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
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const RecruitRadarContext = createContext<any>({});

const RecruitRadarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const pathname = usePathname();

  const [rRUser, setRRUser] = useState<User | null>(null);
  const [providerUser, setProviderUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [buttonColor, setButtonColor] = useState<string>('bg-recPrimary');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);
  const [twitterLoading, setTwitterLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [signInError, setSignInError] = useState<string | null>(null);

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const signInWithGoogle = async () => {
    setGoogleLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result?.user;
      setRRUser(user);
      if (pathname === '/login') {
        router.push('/home');
      }
      if (pathname === '/signup') {
        router.push('/decision')
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    } finally {
      setGoogleLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setRRUser(user);
        console.log('User is signed in:', user);
      } else {
        setRRUser(null);
        console.log('No user is signed in.');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const signInWithTwitter = async () => {
    setTwitterLoading(true);
    const provider = new TwitterAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result?.user;
      setRRUser(user);
      if (pathname === '/login') {
        router.push('/home');
      }
      if (pathname === '/signup') {
        router.push('/decision')
      }
    } catch (error) {
      console.error('Twitter sign-in error:', error);
    } finally {
      setTwitterLoading(false);
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

  const resendEmail = async () => {
    try {
      const actionCodeSettings = {
        url: `${base_url}/verify`, // your Next.js page URL
        handleCodeInApp: true,
      };
      if (rRUser) {
        await sendEmailVerification(rRUser, actionCodeSettings);
        toast({
          description: 'Email sent successfully!',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

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
      toast({
        description: 'Signup successful. Verify your email address.',
      });
      const actionCodeSettings = {
        url: `${base_url}/verify`, // your Next.js page URL
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

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSignInError(null);
    setLoginLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const user = userCredential.user;
      if (!user.emailVerified) {
        toast({
          description: 'Email verification failed/email not verified'
        })
        return;
      }
      setRRUser(user);
      toast({
        description: 'Login successful!',
      });
      router.push('/home');
      setLoginEmail('');
      setLoginPassword('');
    } catch (error: any) {
      setSignInError(error.message);
      setButtonColor('bg-recPrimary');
    } finally {
      setLoginLoading(false);
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
        loginEmail,
        loginPassword,
        setLoginEmail,
        setLoginPassword,
        signInError,
        loginLoading,
        handleLoginSubmit,
        providerUser
      }}
    >
      {children}
    </RecruitRadarContext.Provider>
  );
};

export default RecruitRadarContextProvider;
