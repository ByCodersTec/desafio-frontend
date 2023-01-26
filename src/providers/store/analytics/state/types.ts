import { CommitOptions, DispatchOptions, Store as VuexStore } from "vuex";

import { AnalyticsMutations } from "@providers/store/analytics/mutations";
import { AnalyticsGetters } from "@providers/store/analytics/getters";
import { AnalyticsActions } from "@providers/store/analytics/actions";

export interface AnalyticsState {}

export type Store<S = AnalyticsState> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof AnalyticsMutations, P extends Parameters<AnalyticsMutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<AnalyticsMutations[K]>
} & {
  getters: {
    [K in keyof AnalyticsGetters]: ReturnType<AnalyticsGetters[K]>
  }
} & {
  dispatch<K extends keyof AnalyticsActions>(
    key: K,
    payload?: Parameters<AnalyticsActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<AnalyticsActions[K]>
}
