import { RecruitRadarContext } from "@/contexts/useRecruitRadarContext";
import { useContext } from "react";

export const useRecruitRadarHook = () => {
    const context = useContext(RecruitRadarContext);

    return context;
}