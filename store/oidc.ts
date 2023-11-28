import { GetterTree, ActionTree, MutationTree } from "vuex";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export const state = () => ({
  items: [],
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  items: ({ items }) => items,
  getBlockByName: (state) => (name: string) => {
    let items: IBaseNavigation[];
    items = state.items;
    function findElement(items: any, name: string) {
      return items.map((element: any) => {
        // console.log("menu-items", element);

        if (element.name === name) {
          return { ...element };
        } else {
          return findElement(element.items, name);
        }
      });
    }
    let result;
    result = findElement(items, name).flat(Infinity);
    return result[0];
  },
};

export const mutations: MutationTree<RootState> = {
  SET_ITEMS(state, items: []) {
    state.items = items;
  },
};

export const actions: ActionTree<RootState, RootState> = {};