'use client'

import { toast } from '@/components/ui/use-toast'
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

const DecisionPage = (props: Props) => {
  const router = useRouter();
  const { rRUser } = useRecruitRadarHook();

  if (!rRUser) {
    toast({
      description: 'Please sign up before you can access the Recruit Radar dashboard.'
    });
    router.push('/signup');
  }

  if (rRUser && !rRUser.emailVerified) {
    toast({
      description: 'Please confirm and verify before you can access the Recruit Radar dashboard.'
    });
    router.push('/error');
  }

  return (
    <div>DecisionPage</div>
  )
}

export default DecisionPage