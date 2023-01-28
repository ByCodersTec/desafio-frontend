import { ActionContext } from "vuex";
import { State as RootState } from "@providers/store";
import { AnalyticsMutations } from "@providers/store/analytics/mutations/types";
import { AnalyticsState as State} from "@providers/store/analytics/state/types";

export enum AnalyticsActionTypes {
    GET_HOME_PAGE_VIDEOS = "GET_HOME_PAGE_VIDEOS",
    GET_TECNOLOGY_PAGE_VIDEOS = "GET_TECNOLOGY_PAGE_VIDEOS",
}

export interface AnalyticsActions {
    [AnalyticsActionTypes.GET_HOME_PAGE_VIDEOS]({commit}: AugmentedActionContext): void
    [AnalyticsActionTypes.GET_TECNOLOGY_PAGE_VIDEOS]({commit}: AugmentedActionContext): void
}

export type AugmentedActionContext = {
    commit<K extends keyof AnalyticsMutations>(
        key: K,
        payload?: Parameters<AnalyticsMutations[K]>[1],
    ): ReturnType<AnalyticsMutations[K]>
} & Omit<ActionContext<State, RootState>, "commit">;
