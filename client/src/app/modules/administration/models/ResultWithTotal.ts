import { Result } from "./Result";

export class ResultWithTotal {

    public static clone(r: ResultWithTotal): ResultWithTotal {
        return new ResultWithTotal(r.id, r.time, r.timeLimit, r.pointsAtObstacles, r.totalPoints)
    }

    constructor(
        public id: number = 0,
        public time: string = "",
        public timeLimit: string = "",
        public pointsAtObstacles: Result = new Result(),
        public totalPoints: number = 0
    ) { }
}