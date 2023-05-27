export class Article {
    public static clone(a: Article): Article {
        return new Article(a.id, a.name, a.date, a.articleName, a.content, a.photoForArticle, a.approvedArticle)
    }

    constructor(
        public id: number = 0,
        public name: string = '',
        public date: String = new Date().toLocaleDateString(),
        public articleName: string = '',
        public content: string = '',
        public photoForArticle: String | null = null,
        public approvedArticle: boolean = false,
    ) { }
}