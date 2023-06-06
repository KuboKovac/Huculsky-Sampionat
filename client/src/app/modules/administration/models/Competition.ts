export class Competition {

    public static clone(c: Competition): Competition {
        return new Competition(c.id, c.name, c.description, c.date, c.ridersIds,)
    }

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public date: any,
        public ridersIds: number[] = [],
        public arbitersIds: number[] = []
    ) { }
}