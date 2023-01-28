import { VideoList } from "@modules/google";
import { AnalyticsState as State } from "@providers/store/analytics/state/types"; 

export enum AnalyticsMutationTypes {
    SET_HOME_PAGE_VIDEOS = "SET_HOME_PAGE_VIDEOS",
    SET_TECNOLOGY_PAGE_VIDEOS = "SET_TECNOLOGY_PAGE_VIDEOS",
}

export type AnalyticsMutations<S = State> = {
    [AnalyticsMutationTypes.SET_HOME_PAGE_VIDEOS](state: State, VideoList: VideoList[]): void
    [AnalyticsMutationTypes.SET_TECNOLOGY_PAGE_VIDEOS](state: State, VideoList: VideoList[]): void
}
