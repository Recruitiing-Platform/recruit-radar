import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";

const SettingsAccountTabComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="font-recSemiBold">Contact Information</h1>
        <div>
          <label
            htmlFor="address-one"
            className="block text-recBody mb-2 font-recMedium"
          >
            Address 1
          </label>
          <input
            type="text"
            name="address-one"
            id="address-one"
            placeholder="Enter address"
            className="px-2.5 py-3 w-full border rounded "
          />
        </div>
        <div>
          <label
            htmlFor="address-two"
            className="block text-recBody mb-2 font-recMedium"
          >
            Address 2
          </label>
          <input
            type="text"
            name="address-two"
            id="address-two"
            placeholder="Enter address (optional)"
            className="px-2.5 py-3 w-full border rounded "
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-recBody mb-2 font-recMedium"
          >
            Tel./Phone No.
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="+2348123456789"
            className="px-2.5 py-3 w-full border rounded"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-recBody mb-2 font-recMedium"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="px-2.5 py-3 w-full border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-recPrimary text-recLight px-4 py-2 rounded mt-2"
        >
          Save Changes
        </button>
      </div>

      <div>
        <h3 className="pb-4 font-recSemiBold">Change Password</h3>
        <div className="flex flex-col lg:flex-row justify-between w-full gap-2.5 items-center pb-6">
          <div className='w-full'>
            <label className="block text-recBody mb-2 font-recMedium">
              Current Password
            </label>
            <div className="w-full dark:bg-[#0E0E0E] flex items-center gap-1 border rounded px-2.5">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter current password"
                className="px-2.5 py-3 w-full"
              />
              <span onClick={togglePasswordVisibility}>
                {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>
          <div className='w-full'>
            <label className="block text-recBody mb-2 font-recMedium">
              New Password
            </label>
            <div className="w-full dark:bg-[#0E0E0E] flex items-center gap-1 border rounded px-2.5">
              <input
                type={newPasswordVisible ? 'text' : 'password'}
                placeholder="Enter new password"
                className="px-2.5 py-3 w-full"
              />
              <span onClick={toggleNewPasswordVisibility}>
                {newPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>
          <div className='w-full'>
            <label className="block text-recBody mb-2 font-recMedium">
              Confirm New Password
            </label>
            <div className="w-full dark:bg-[#0E0E0E] flex items-center gap-1 border rounded px-2.5">
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                placeholder="Confirm new password"
                className="px-2.5 py-3 w-full"
              />
              <span onClick={toggleConfirmPasswordVisibility}>
                {confirmPasswordVisible ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-recPrimary text-recLight px-4 py-2 rounded"
        >
          Change Password
        </button>
      </div>

      <div className='space-y-4'>
        <h1 className="font-recSemiBold">Delete Your Company Account</h1>
        <p className='text-textSmall text-recSubtle font-recRegular w-full lg:w-1/2'>
          If you delete your RecruitRadar account, you will no longer be able to
          receive information about the matched jobs, following employers, and
          job alerts, shortlisted jobs and more. You will be removed from all
          the services of RecruitRadar.com
        </p>
        <Button className='text-recError outline-none border-none bg-recLightGrey dark:bg-[#000611] hover:bg-recLightGrey hover:dark:bg-[#000611] flex items-center gap-2'><span><IoIosCloseCircle /></span>Close Account</Button>
      </div>
    </div>
  );
};

export default SettingsAccountTabComponent;
