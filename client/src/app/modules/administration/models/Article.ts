export class Article {
    public static clone(a: Article): Article {
        return new Article(a.id, a.name, a.createdBy, a.date, a.articleName, a.content, a.photoForArticle, a.isApproved)
    }

    constructor(
        public id: number = 0,
        public name: string = '',
        public createdBy: string | null = '',
        public date: String = new Date().toLocaleDateString(),
        public articleName: string = '',
        public content: string = '',
        public photoForArticle: String | null = null,
        public isApproved: boolean = false,
    ) { }
}