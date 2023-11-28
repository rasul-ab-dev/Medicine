import { IClaim } from '~/infrastructure/interfaces/IClaim'

export interface ICurrentUser {
  id: string
  name: string
  // role: string
  // jobTitle: string
  // organizationId: string
  // claims: IClaim
}
