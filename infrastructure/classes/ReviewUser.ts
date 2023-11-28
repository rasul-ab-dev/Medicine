import {IReviewUser} from "~/infrastructure/interfaces/IReviewUser"

export class ReviewUser implements IReviewUser {
    id: number
    applicationObservationStatus: number

    constructor(payload?: IReviewUser) {
        this.id = payload?.id || null
        this.applicationObservationStatus = payload?.applicationObservationStatus || null
    }
}