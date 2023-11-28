import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { ICurrentUser } from '~/infrastructure/interfaces/ICurrentUser'
export const state = () => ({
  id: '',
  name: '',
  // role: '',
  // jobTitle: '',
  // claims: {},
  // organizationId: ''
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  id ({ id }) {
    return id
  },
  name ({ name }) {
    return name
  },
  // role ({ role }) {
  //   return role
  // },
  // jobTitle ({ jobTitle }) {
  //   return jobTitle
  // },
  // organizationId ({ organizationId }) {
  //   return organizationId
  // },
  // claims ({ claims }) {
  //   return claims
  // }
}

export const mutations: MutationTree<RootState> = {
  INIT_USER (state, payload: ICurrentUser) {
    state.id = payload.id
    state.name = payload.name
    // state.role = payload.role
    // state.jobTitle = payload.jobTitle
    // state.organizationId = payload.organizationId
    // state.claims = payload.claims
  }
}

export const actions: ActionTree<RootState, RootState> = {}
