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
  onAuthStateChanged,
  sendPasswordResetEmail,
  confirmPasswordReset
} from 'firebase/auth';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useEffect, useRef, useState } from 'react';
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
  const [error, setError] = useState<string | null>(null);
  const [buttonColor, setButtonColor] = useState<string>('bg-recPrimary');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [pwdResetEmail, setPwdResetEmail] = useState<string>('');
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);
  const [twitterLoading, setTwitterLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [pwdResetAlert, setPwdResetAlert] = useState<boolean>(false);
  const [signInError, setSignInError] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showProfileHome, setShowProfileHome] = useState<boolean>(true);
  const [overview, setOverview] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(true);
  const [appliedJobs, setAppliedJobs] = useState<boolean>(false);
  const [savedJobs, setSavedJobs] = useState<boolean>(false);
  const [jobAlerts, setJobAlerts] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files && event.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const [avatarUrl, setAvatarUrl] = useState<string>('');

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
      } else {
        setRRUser(null);
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

  const validateEmail = (str: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
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

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current && fileInputRef.current?.click();
    }
  };

  const handleClickOverview = () => {
    setOverview(true);
    setProfile(false);
    setAppliedJobs(false);
    setSavedJobs(false);
    setJobAlerts(false);
    setSettings(false);
    setShowProfile(false);
    setShowProfileHome(false);
    setIsOpen(false);
  };

  const handleClickProfile = () => {
    setProfile(true);
    setOverview(false);
    setAppliedJobs(false);
    setSavedJobs(false);
    setJobAlerts(false);
    setSettings(false);
    setShowProfile(false);
    setShowProfileHome(true);
    setIsOpen(false);
  };

  const handleClickAppliedJobs = () => {
    setAppliedJobs(true);
    setOverview(false);
    setProfile(false);
    setSavedJobs(false);
    setJobAlerts(false);
    setSettings(false);
    setIsOpen(false);
  };

  const handleClickSavedJobs = () => {
    setSavedJobs(true);
    setOverview(false);
    setProfile(false);
    setAppliedJobs(false);
    setJobAlerts(false);
    setSettings(false);
    setIsOpen(false);
  };

  const handleClickJobAlerts = () => {
    setJobAlerts(true);
    setOverview(false);
    setProfile(false);
    setAppliedJobs(false);
    setSavedJobs(false);
    setSettings(false);
    setIsOpen(false);
  };
  
  const handleClickSettings = () => {
    setSettings(true);
    setOverview(false);
    setProfile(false);
    setAppliedJobs(false);
    setSavedJobs(false);
    setJobAlerts(false);
    setIsOpen(false);
  };

  const handlePasswordReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    if (!validateEmail(pwdResetEmail)) {
      setError('Invalid email format.');
      setLoading(false);
      return;
    }
    try {
      const actionCodeSettings = {
        url: `${base_url}/verify`, // your Next.js page URL
        handleCodeInApp: true,
      };
      await sendPasswordResetEmail(auth, pwdResetEmail, actionCodeSettings);
      setPwdResetAlert(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleReset = async () => {
    const oobCode = new URLSearchParams(window.location.search).get(
        'oobCode'
      ) as string;

    if (!oobCode) {
      setError('Invalid request.');
      return;
    }

    if (!validatePassword(newPassword)) {
      setError('Invalid format. Password must contain at least one uppercase, one lowercase, one number, one special character, and be at least 8 characters long.');
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.')
    }

    try {
      await confirmPasswordReset(auth, oobCode as string, newPassword);
      toast({
        description: 'Password has been reset successfully. Log in with new password now.',
      })
      router.push('/login');
    } catch (error: any) {
      setError(error.message);
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
      console.log(error.message);
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        setSignInError('Account already exists. Please log in.')
      }
      // setSignInError(error.message);
      setButtonColor('bg-recPrimary');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    setRRUser(null);
    router.push('/login')
  }

  const handleShowProfile = () => {
    setShowProfile(true);
    setShowProfileHome(false);
  }

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
        handleReset,
        pwdResetEmail,
        setPwdResetEmail,
        pwdResetAlert,
        setPwdResetAlert,
        handlePasswordReset,
        setNewPassword, 
        setConfirmPassword,
        handleLogout,
        showProfile,
        showProfileHome,
        handleShowProfile,
        setShowProfile,
        setShowProfileHome,
        profile,
        overview,
        appliedJobs,
        savedJobs,
        jobAlerts,
        settings,
        handleClickOverview,
        handleClickProfile,
        handleClickAppliedJobs,
        handleClickSavedJobs,
        handleClickJobAlerts,
        handleClickSettings,
        isOpen, setIsOpen,
        avatarUrl,
        handleFileChange,
        handleCameraClick,
        fileInputRef
      }}
    >
      {children}
    </RecruitRadarContext.Provider>
  );
};

export default RecruitRadarContextProvider;
