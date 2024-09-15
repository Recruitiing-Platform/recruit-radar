import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';

const SettingsPasswordTabComponent = () => {
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
    <div>
      <h3 className="pb-8">Update password for enhanced account security</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-recBody mb-2 font-recMedium">
            Current Password
          </label>
          <div className="w-full dark:bg-[#0E0E0E] flex items-center gap-1 border rounded px-2.5">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter current password"
              className="px-2.5 py-3 w-full"
            />
            <span onClick={togglePasswordVisibility}>{passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}</span>
          </div>
        </div>
        <div>
          <label className="block text-recBody mb-2 font-recMedium">
            New Password
          </label>
          <div className="w-full dark:bg-[#0E0E0E] flex items-center gap-1 border rounded px-2.5">
            <input
              type={newPasswordVisible ? "text" : "password"}
              placeholder="Enter new password"
              className="px-2.5 py-3 w-full"
            />
            <span onClick={toggleNewPasswordVisibility}>{newPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}</span>
          </div>
        </div>
        <div>
          <label className="block text-recBody mb-2 font-recMedium">
            Confirm New Password
          </label>
          <div className="w-full dark:bg-[#0E0E0E] flex items-center gap-1 border rounded px-2.5">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm new password"
              className="px-2.5 py-3 w-full"
            />
            <span onClick={toggleConfirmPasswordVisibility}>{confirmPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}</span>
          </div>
        </div>

        <div className="flex mt-4 space-x-4">
          <button
            type="button"
            className="border border-recPrimary text-recPrimary px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-recPrimary text-recLight px-4 py-2 rounded"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPasswordTabComponent;
