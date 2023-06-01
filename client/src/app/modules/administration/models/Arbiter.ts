export class Arbiter {
    public static clone(a: Arbiter): Arbiter {
        return new Arbiter(a.id, a.firstName, a.lastName)
    }

    constructor(
        public id: number,
        public firstName: String,
        public lastName: String,
    ) { }
}