import { ActionTree } from "vuex";
import { State as RootState } from "@providers/store";
import { AnalyticsActions, AnalyticsActionTypes } from "@providers/store/analytics/actions/types";
import { AnalyticsState as State } from "@providers/store/analytics/state";
import { AnalyticsMutationTypes } from "@providers/store/analytics/mutations";
import { categoryTecnologyId, YoutubeVideosService } from "@modules/google";

export const analyticsActions: ActionTree<State, RootState> & AnalyticsActions = {
    async [AnalyticsActionTypes.GET_HOME_PAGE_VIDEOS]({commit}) {
        const videosList = (await YoutubeVideosService.list())
        commit(AnalyticsMutationTypes.SET_HOME_PAGE_VIDEOS, videosList)
    },
    async [AnalyticsActionTypes.GET_TECNOLOGY_PAGE_VIDEOS]({commit}) {
        const videosList = (await YoutubeVideosService.list(6, categoryTecnologyId))
        commit(AnalyticsMutationTypes.SET_TECNOLOGY_PAGE_VIDEOS, videosList)
    }
};
