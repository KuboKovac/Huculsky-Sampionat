import { Horse } from "./Horse";
import { Result } from "./Result";
import { Rider } from "./Rider";

export class RidersCompetetion {
    public static clone(r: RidersCompetetion): RidersCompetetion {
        return new RidersCompetetion(r.id, r.riderNumber, r.firstName, r.lastName, r.dateOfbirth, r.category, r.horses.map(h => Horse.clone(h), r.result))
    }

    constructor(
        public id: number = 0,
        public riderNumber: string = "",
        public firstName: string = "",
        public lastName: string = "",
        public dateOfbirth: string = "",
        public category: string = "",
        public horses: Horse[] = [],
        public result: Result = new Result
    ) {
    }
}