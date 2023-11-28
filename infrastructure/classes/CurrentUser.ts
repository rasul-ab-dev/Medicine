import { ICurrentUser } from '~/infrastructure/interfaces/ICurrentUser'
import { IClaim } from '~/infrastructure/interfaces/IClaim'

export class CurrentUser implements ICurrentUser {
  id: string
  name: string
  role: string
  jobTitle: string
  claims: IClaim
  organizationId: string
  constructor (payload: ICurrentUser) {
    this.id = payload.id
    this.name = payload.name
    // this.role = payload.role
    // this.jobTitle = payload.jobTitle
    // this.claims = payload.claims
    // this.organizationId = payload.organizationId
  }
}
