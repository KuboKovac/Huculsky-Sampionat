import { Rider } from "./Rider";

export class Horse {
    public static clone(h: Horse): Horse {
        return new Horse(h.id, h.name, h.number, h.dateOfBirth, h.male, h.motherId, h.fatherId)
    }

    constructor(
        public id: number = 0,
        public name: string = "",
        public number: string = "",
        public dateOfBirth: string = "",
        public male: boolean = true,
        public motherId: number = 0,
        public fatherId: number = 0,

    ) {
    }
}