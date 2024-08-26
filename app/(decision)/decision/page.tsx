'use client';

import { toast } from '@/components/ui/use-toast';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import { useRouter } from 'next/navigation';

type Props = {};

const DecisionPage = (props: Props) => {
  const router = useRouter();
  const { rRUser } = useRecruitRadarHook();
  console.log(rRUser)

  if (!rRUser) {
    toast({
      description:
        'Please sign up before you can access the Recruit Radar dashboard.',
    });
    router.push('/signup');
  }
  if (rRUser && !rRUser.emailVerified) {
    toast({
      description:
        'Please ensure your email is verified before you can access the Recruit Radar dashboard.',
    });
    router.push('/error');
  }

  return <div>DecisionPage</div>;
};

export default DecisionPage;
