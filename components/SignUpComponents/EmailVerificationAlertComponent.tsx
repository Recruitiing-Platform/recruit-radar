import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import { X } from 'lucide-react';
import { FaEnvelopeOpenText } from 'react-icons/fa';

type Props = {};

const EmailVerificationAlertComponent = (props: Props) => {
  const { setShowAlert, rRUser, resendEmail } = useRecruitRadarHook();
  
  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="dark:bg-recLightGrey bg-recDark">
        <div onClick={() => setShowAlert(false)} className="absolute dark:text-recDark text-recLightGrey top-2 right-2 cursor-pointer p-2 duration-300 hover:text-recLightGrey hover:dark:text-recLightGrey hover:bg-recPrimary transition-all rounded-full">
          <X size={16} />
        </div>
        <div className='pt-5 flex flex-col items-center dark:text-recDark text-recLightGrey'>
          <div className="dark:text-recDark text-recLightGrey">
            <FaEnvelopeOpenText size={92} />
          </div>
          <h1 className='text-center font-recSemiBold text-headerFive py-3'>Email Confirmation</h1>
          <p className='text-center pb-2'>We have sent a mail to <span className='text-recPrimary font-recMedium'>{rRUser?.email}</span> to confirm the validity of our email address. After receiving the email follow the link provided to complete your registration.</p>
          <p className='text-center text-[12px] pb-3'>Did not get email <span onClick={resendEmail} className='font-recSemiBold hover:underline cursor-pointer'>Resend email</span></p>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EmailVerificationAlertComponent;
