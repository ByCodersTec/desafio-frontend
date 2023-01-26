import { GetterTree } from "vuex";
import { State as RootState } from "@providers/store";
import { AnalyticsState as State } from "@providers/store/analytics/state/types";
import { AnalyticsGetters } from "@providers/store/analytics/getters/types";

export const analyticsGetters: GetterTree<State, RootState> & AnalyticsGetters = {}