import { createContext } from "react";

export const RecruitRadarContext = createContext({});

const useRecruitRadarContext = ({children}: {children: React.ReactNode}) => {
  

  return (
    <RecruitRadarContext.Provider value={{}}>
        {children}
    </RecruitRadarContext.Provider>
  )
}

export default useRecruitRadarContext