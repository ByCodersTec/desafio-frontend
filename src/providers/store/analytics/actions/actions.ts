import { ActionTree } from "vuex";
import { State as RootState } from "@providers/store";
import { AnalyticsActions, AnalyticsActionTypes } from "@providers/store/analytics/actions/types";
import { AnalyticsState as State } from "@providers/store/analytics/state";
import { AnalyticsMutationTypes } from "@providers/store/analytics/mutations";

export const analyticsActions: ActionTree<State, RootState> & AnalyticsActions = {};
