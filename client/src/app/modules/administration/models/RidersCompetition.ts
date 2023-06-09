import { GResult } from "./GetResult";
import { Horse } from "./Horse";
import { Rider } from "./Rider";




export class RidersCompetetion {
    public static clone(r: RidersCompetetion): RidersCompetetion {
        return new RidersCompetetion(r.id, r.riderNumber, r.firstName, r.lastName, r.dateOfbirth, r.category, r.horses.map(h => Horse.clone(h), r.results))
    }

    public static cloneFromRider(r: Rider): RidersCompetetion {
        return new RidersCompetetion(r.id, r.riderNumber, r.firstName, r.lastName, r.dateOfbirth, r.category, r.horses.map(h => Horse.clone(h)))
    }

    constructor(
        public id: number = 0,
        public riderNumber: string = "",
        public firstName: string = "",
        public lastName: string = "",
        public dateOfbirth: string = "",
        public category: string = "",
        public horses: Horse[] = [],
        public results: GResult[] = []
    ) {
    }
}