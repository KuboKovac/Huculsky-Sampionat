export class Article {
    constructor(
        public username: string = '',
        public date: Date = new Date(),
        public articleName: string = '',
        public articleContext: string = '',
        public approvedArticle: boolean = false
    ) { }
}