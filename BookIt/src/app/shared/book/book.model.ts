export class Book {
  constructor(
    public title: string,
    public author: string,
    public genre?: string,
    public coverImagePath?: string,
    public price?: number,
    public firstPublishYear?: number,
    public isbn?: string
  ) {}
}
