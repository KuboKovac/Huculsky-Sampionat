export class Article {
    constructor(
        public username: string = '',
        public date: String = new Date().toLocaleDateString(),
        public articleName: string = '',
        public articleContext: string = '',
        public approvedArticle: boolean = false
    ) { }
}