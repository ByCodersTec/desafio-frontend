import { MutationTree } from "vuex";
import { AnalyticsState as State } from "@providers/store/analytics/state";
import { 
	AnalyticsMutations,
	AnalyticsMutationTypes
} from "@providers/store/analytics/mutations/types";

export const analyticsMutations: MutationTree<State> & AnalyticsMutations = {};
