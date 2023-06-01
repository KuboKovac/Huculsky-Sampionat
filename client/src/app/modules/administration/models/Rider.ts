export class Rider {
    public static clone(r: Rider): Rider {
        return new Rider(r.id, r.riderNumber, r.firstName, r.lastName, r.dateOfbirth, r.category)
    }

    constructor(
        public id: number = 0,
        public riderNumber: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public dateOfbirth: string = '',
        public category: string = ''
    ) {
    }
}