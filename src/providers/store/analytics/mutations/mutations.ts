import { MutationTree } from "vuex";
import { AnalyticsState as State } from "@providers/store/analytics/state";
import { 
	AnalyticsMutations,
	AnalyticsMutationTypes
} from "@providers/store/analytics/mutations/types";
import { VideoList } from "@modules/google";

export const analyticsMutations: MutationTree<State> & AnalyticsMutations = {
	[AnalyticsMutationTypes.SET_HOME_PAGE_VIDEOS](state: State, videoList: VideoList[]): void {
		const TEMP = state;
		TEMP.homePageVideos = videoList;
		state = TEMP;
	},
	[AnalyticsMutationTypes.SET_TECNOLOGY_PAGE_VIDEOS](state: State, videoList: VideoList[]): void {
		const TEMP = state;
		TEMP.tecnologyVideos = videoList;
		state = TEMP;
	}
};
