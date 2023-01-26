import { ActionContext } from "vuex";
import { State as RootState } from "@providers/store";
import { AnalyticsMutations } from "@providers/store/analytics/mutations/types";
import { AnalyticsState as State} from "@providers/store/analytics/state/types";

export enum AnalyticsActionTypes {}
export interface AnalyticsActions {}
export type AugmentedActionContext = {
    commit<K extends keyof AnalyticsMutations>(
        key: K,
        payload?: Parameters<AnalyticsMutations[K]>[1],
    ): ReturnType<AnalyticsMutations[K]>
} & Omit<ActionContext<State, RootState>, "commit">;
