export class User {

    public static clone(u: User) {
        return new User(u.username, u.password, u.role)
    }

    constructor(
        public username: string = "",
        public password: string = "",
        public role: string = ""
    ) { }
}