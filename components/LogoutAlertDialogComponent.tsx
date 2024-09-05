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
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import { IoLogOutOutline } from 'react-icons/io5';

const LogoutAlertDialogComponent = ({children}: {children: React.ReactNode}) => {
  const { handleLogout } = useRecruitRadarHook();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className='bg-recLightGrey dark:bg-recSecondary'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-headerSix font-recSemiBold text-center'>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will log you out of your RecruitRadar dashboard. You will have to log in again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='justify-center'>
          <AlertDialogCancel className='w-32'>Cancel</AlertDialogCancel>
          <AlertDialogAction className='w-32' onClick={handleLogout}>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutAlertDialogComponent;
