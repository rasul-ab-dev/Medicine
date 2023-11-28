import { GetterTree, ActionTree, MutationTree } from "vuex";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export const state = () => ({
  items: [],
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  items: ({ items }) => items,

};

export const mutations: MutationTree<RootState> = {
  SET_ITEMS(state, items: []) {
    state.items = items;
  },
};

export const actions: ActionTree<RootState, RootState> = {};
