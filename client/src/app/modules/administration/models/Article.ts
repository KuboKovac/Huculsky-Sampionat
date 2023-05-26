export class Article {
    constructor(
        public id: number = 0,
        public username: string = '',
        public date: String = new Date().toLocaleDateString(),
        public articleName: string = '',
        public articleContext: string = '',
        public photoForArticle: String | null = null,
        public approvedArticle: boolean = false
    ) { }
}