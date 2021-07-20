export class Book {
  public title: string;
  public author: string;
  public genre: string;
  public bookCoverImagePath: string;

  constructor(title: string, author: string, genre: string, img: string) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.bookCoverImagePath = img;
  }
}
