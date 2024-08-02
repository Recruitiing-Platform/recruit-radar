import { Eye, EyeOff } from 'lucide-react';
import { FaUser } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import InputField from '../ui/InputField';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import { useState } from 'react';

const SignUpFormComponent = () => {
  const {
    handleSubmit,
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    error,
    buttonColor,
    loading,
  } = useRecruitRadarHook();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form className="space-y-4 mt-7 md:mt-2 lg:mt-7" onSubmit={handleSubmit}>
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
          className="absolute right-3 top-10 cursor-pointer text-recSubtle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      </div>
      {error && <p className="text-red-500 text-recError text-xs">{error}</p>}
      {loading ? (
        <Button className='w-full' variant={'disabled'}>Loading...</Button>
      ) : (
        <Button
          className={`w-full py-3 ${buttonColor} text-recLight font-recBold rounded-lg mb-6 flex gap-3 items-center justify-center hover:scale-105 duration-300 transition-transform`}
          type="submit"
        >
          <>
            <span>Create account</span>
            <FaUser />
          </>
        </Button>
      )}
    </form>
  );
};

export default SignUpFormComponent;
