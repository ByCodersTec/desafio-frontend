import { createStore, createLogger } from 'vuex'

import {
	AnalyticsModule,
	Store as AnalyticsStore,
	AnalyticsState,
} from "@providers/store/analytics";


export type State = {
	analytics: AnalyticsState;
}

export type Store = AnalyticsStore<Pick<State, "analytics">>

const store = createStore({
	plugins: import.meta.env.NODE_ENV === "production" ? [] : [createLogger()],
    modules: {
		analytics: AnalyticsModule,
	},
})


export function useStore() {
	return store as Store;
}


export default store