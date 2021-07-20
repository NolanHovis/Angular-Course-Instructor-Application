export class Book {
  public title: string;
  public author: string;
  public genre: string;
  public coverImagePath: string;

  constructor(title: string, author: string, genre: string, img: string) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.coverImagePath = img;
  }
}

// ! SHORTER SYNTAX !

// export class Book {
//   constructor(public title: string, public author: string, public genre: string, public coverImagePath: string) {}
// }
