import { VideoList } from "@modules/google";
import {
	AnalyticsState as State,
} from "@providers/store/analytics/state/types";

export type AnalyticsGetters = {
	getHomePageVideos(state: State): VideoList[]
	getTecnologyPageVideos(state: State): VideoList[]
}