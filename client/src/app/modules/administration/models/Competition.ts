export class Competition {

    public static clone(c: Competition): Competition {
        return new Competition(c.id, c.name, c.description, c.date)
    }

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public date: string,
    ) { }
}