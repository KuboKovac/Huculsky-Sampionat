export class Rider {
    public static clone(r: Rider): Rider {
        return new Rider(r.riderNumber, r.firstName, r.lastName, r.dateOfbirth, r.category)
    }

    constructor(
        public riderNumber: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public dateOfbirth: string = '',
        public category: string = ''
    ) {
    }
}