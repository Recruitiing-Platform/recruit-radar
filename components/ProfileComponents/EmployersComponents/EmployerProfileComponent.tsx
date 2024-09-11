import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import React, { useRef, useState } from 'react';
import { RiEdit2Line } from 'react-icons/ri';
import { FaRegTrashAlt } from 'react-icons/fa';
import EmployerProfileSideText from './EmployerProfileSideText';

const EmployerProfileComponent = () => {
  const { rRUser } = useRecruitRadarHook();
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current && fileInputRef.current?.click();
    }
  };

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

  const avatarPicFallback =
    rRUser?.displayName.split(' ')[0][0] +
      rRUser?.displayName.split(' ')[1][0] || 'CN';

  return (
    <div className="px-5 py-10 md:px-10 lg:px-20 md:py-10">
      <h1 className="pb-5 md:pb-10 text-headerFive font-recSemiBold">
        Employer profile
      </h1>

      <p className="text-headerSix font-recSemiBold pb-1">Details</p>
      <hr />
      <div className="flex flex-col md:flex-row items-center justify-between py-5 md:py-10">
        <EmployerProfileSideText
          header="Logo"
          subheader="JPG, PNG and SVG. Max size of 800kb"
        />
        <div className="flex items-center gap-5">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src={
                avatarUrl || rRUser?.photoURL || 'https://github.com/shadcn.png'
              }
            />
            <AvatarFallback>{avatarPicFallback}</AvatarFallback>
          </Avatar>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <Button
            className="flex gap-2 rounded-full bg-recSecondary hover:bg-recDark"
            onClick={handleCameraClick}
          >
            <RiEdit2Line />
            Edit
          </Button>
          <Button
            variant="link"
            className="flex gap-2 p-0 text-recError hover:font-recSemiBold hover:no-underline"
            onClick={() => setAvatarUrl('')}
          >
            <FaRegTrashAlt />
            Delete
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10">
        <EmployerProfileSideText
          className='pb-3 md:pb-0'
          header="Company name"
          subheader="Fill in your organization's name for legal and business identification"
        />
        <input
          type="text"
          className="w-full md:w-2/3 lg:w-1/3 p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          placeholder="MyCompany Org"
        />
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between pb-10">
        <EmployerProfileSideText
          className='pb-3 md:pb-0'
          header="Company Bio"
          subheader="Fill in a brief about your organization"
        />
        <textarea
          rows={4}
          className="w-full md:w-1/2 p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          placeholder="We deal in services and goods interested in making sure that..."
        />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10">
        <EmployerProfileSideText
          className='pb-3 md:pb-0'
          header="Industry sector"
          subheader="What industry sector does your organization fall under"
        />
        <select className="w-full md:w-1/2 p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall">
          <option value="sector" disabled>
            Sector
          </option>
          <option value="sector">Agriculture</option>
          <option value="sector">Customer Service</option>
          <option value="sector">Branding</option>
          <option value="sector">Advertising</option>
          <option value="sector">Technology</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row md:gap-5 lg:gap-0 items-start md:items-center justify-between pb-10">
        <EmployerProfileSideText
          className='pb-3 md:pb-0'
          header="Display name"
          subheader="Personalize your  display name for a distinct and unique representation"
        />
        <input
          type="text"
          className="w-full md:w-2/3 lg:w-1/2 p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          placeholder="geneclaire"
        />
      </div>

      <p className="text-headerSix font-recSemiBold pb-1">Details</p>
      <hr />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-5 pb-10">
        <EmployerProfileSideText
          className='pb-3 md:pb-0'
          header="Phone number"
          subheader="Give users a way to contact you with a phone number"
        />
        <input
          type="text"
          className="w-full md:w-1/2 p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          placeholder="+2348123456890"
        />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10">
        <EmployerProfileSideText
          className='pb-3 md:pb-0'
          header="Email"
          subheader="Provide an email for user support and communication"
        />
        <input
          type="text"
          className="w-full md:w-1/2 p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          placeholder="myemail@example.com"
        />
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between lg:gap-10 pb-10">
        <EmployerProfileSideText
          className="w-full md:2/3 lg:w-1/2 pb-3 md:pb-0"
          header="Address"
          subheader="Provide the physical location of your organization for mailing purposes or for users to find your office"
        />
        <div className="grid grid-col-1 lg:grid-cols-2 gap-5 w-full">
          <input
            type="text"
            className="p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
            placeholder="Country"
          />
          <input
            type="text"
            className="p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
            placeholder="State"
          />
          <input
            type="text"
            className="p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
            placeholder="Address"
          />
          <input
            type="text"
            className="p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
            placeholder="Postal Code"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10">
        <EmployerProfileSideText
          className='pb-3 md:pb-0'
          header="Socials"
          subheader="Share links to your social media profiles for engagements and updates"
        />
        <div className="w-full md:2/3 lg:w-1/2">
          <input
            type="text"
            className="w-full p-2 mb-2 lg:mb-5 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
            placeholder="https://www.mywebsite.com"
          />
          <Button variant="link" className="text-recPrimary block">
            Add link
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-end mt-4 pb-5 space-x-4">
        <button
          type="button"
          className="border border-recPrimary text-recPrimary px-5 py-2 rounded"
        >
          Edit
        </button>
        <button
          type="submit"
          className="bg-recPrimary text-recLight px-5 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EmployerProfileComponent;
