import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import { Link } from 'lucide-react';
import { useRef, useState } from 'react';
import DateInput from '../JobSeekerProfileComponents/DateInputComponent';

const SettingsCompanyInfoTab = () => {
  const { rRUser } = useRecruitRadarHook();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [avatarUrl, setAvatarUrl] = useState<string>('');

  const avatarPicFallback =
    rRUser?.displayName.split(' ')[0][0] +
      rRUser?.displayName.split(' ')[1][0] || 'CN';

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

  return (
    <div>
      <h3 className="text-textSmall font-recSemiBold pb-4">Logo Image</h3>
      <div className="flex md:items-center flex-col md:flex-row gap-5 pb-20">
        <Avatar className="w-36 h-36 border-2 border-recPrimary">
          <AvatarImage
            src={
              avatarUrl || rRUser?.photoURL || 'https://github.com/shadcn.png'
            }
          />
          <AvatarFallback>{avatarPicFallback}</AvatarFallback>
        </Avatar>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <span
            className="text-textSmall text-recPrimary font-recSemiBold cursor-pointer hover:font-recBold"
            onClick={handleCameraClick}
          >
            Upload your photo
          </span>
          <span className="block pt-1">
            Photos help your teammates recognize you.
          </span>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-center flex-col md:flex-row w-full gap-6">
          <div className="w-full">
            <label className="block text-recBody mb-2 text-textSmall font-recSemiBold">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-2.5 py-3 border rounded"
              placeholder="Enter company name"
            />
          </div>
          <div className="w-full">
            <label className="block text-recBody mb-2 text-textSmall font-recSemiBold">
              Organization Type
            </label>
            <select className="w-full px-2.5 py-3 border rounded">
              <option>Select</option>
              <option value="">He/Him</option>
            </select>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row w-full gap-6">
          <div className="w-full">
            <label className="block text-recBody mb-2 text-textSmall font-recSemiBold">
              Industry Type
            </label>
            <input
              type="text"
              className="w-full px-2.5 py-3 border rounded"
              placeholder="Enter industry or profession"
            />
          </div>
          <div className="w-full">
            <label className="block text-recBody mb-2 text-textSmall font-recSemiBold">
              Team Size
            </label>
            <input
              type="text"
              className="w-full px-2.5 py-3 border rounded"
              placeholder="Enter team size"
            />
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row w-full gap-6">
          <div className="w-full">
            <DateInput dateLabel='Year of establishment' className='w-full md:w-full p-2.5 border rounded' />
          </div>
          <div className="w-full">
            <label className="block text-recBody mb-2 text-textSmall font-recSemiBold">
              Company Website
            </label>
            <input
              type="text"
              className="w-full px-2.5 py-3 border rounded"
              placeholder="Website URL"
            />
          </div>
        </div>
        <div>
          <label className="block text-recBody mb-2 text-textSmall font-recSemiBold">
          About the Company
          </label>
          <textarea
            rows={4}
            className="w-full px-2.5 py-3 border rounded"
            placeholder="Write down about your company here. Let the candidate know who you are"
          />
          <span className="text-textSmall text-recSubtle">
            Maximum of 64 characters
          </span>
        </div>

        <div>
          <label className="block text-recBody mb-2 text-textSmall font-recSemiBold">
            Social links
          </label>
          <div className="w-full dark:bg-[#0E0E0E] flex items-center gap-1 border rounded px-2.5 mb-2">
            <Link size={20} className="inline-flex" />
            <input
              type="text"
              placeholder="Link to social platform"
              className="px-2.5 py-3 w-full"
            />
          </div>
          <Button variant='outline' className="text-textSmall">Add URL</Button>
        </div>

        <div className="flex justify-end mt-4 space-x-4">
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsCompanyInfoTab;
