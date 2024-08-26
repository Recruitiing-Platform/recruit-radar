import SideBarComponent from '@/components/ProfileComponents/JobSeekerProfileComponents/SideBarComponent'
import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

type Props = {}

const JobSeekerProfilePage = (props: Props) => {
  return (
    <div>
        <SideBarComponent/>
    </div>
  )
}

export default JobSeekerProfilePage