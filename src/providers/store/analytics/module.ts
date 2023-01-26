import { analyticsActions } from "@providers/store/analytics/actions"
import { analyticsMutations } from "@providers/store/analytics/mutations"
import { analyticsState } from "@providers/store/analytics/state"
import { analyticsGetters } from "@providers/store/analytics/getters"

export const AnalyticsModule: any = {
    state: analyticsState,
    mutations: analyticsMutations,
    actions: analyticsActions,
    getters: analyticsGetters
}