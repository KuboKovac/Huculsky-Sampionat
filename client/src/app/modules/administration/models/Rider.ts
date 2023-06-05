import { Horse } from "./Horse";

export class Rider {
    public static clone(r: Rider): Rider {
        return new Rider(r.id, r.riderNumber, r.firstName, r.lastName, r.dateOfbirth, r.category, r.horses.map(h => Horse.clone(h)))
    }

    constructor(
        public id: number = 0,
        public riderNumber: string = "",
        public firstName: string = "",
        public lastName: string = "",
        public dateOfbirth: string = "",
        public category: string = "",
        public horses: Horse[] = []
    ) {
    }
}