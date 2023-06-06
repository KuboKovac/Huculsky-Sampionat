import { Arbiter } from "./Arbiter";
import { RidersCompetetion } from "./RidersCompetition";

export class Competition {

    public static clone(c: Competition): Competition {
        return new Competition(c.id, c.name, c.description, c.date,
            c.riders.map(rider => RidersCompetetion.cloneFromRider(rider)),
            c.arbiters.map(arbiters => Arbiter.clone(arbiters)))
    }

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public date: any,
        public riders: RidersCompetetion[] = [],
        public arbiters: Arbiter[] = [],
        public ridersIds?: number[],
        public arbitersIds?: number[]
    ) { }
}