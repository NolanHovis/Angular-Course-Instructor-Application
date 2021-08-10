export class Book {
  public title: string;
  public author: string;
  public genre: string;
  public coverImagePath: string;
  public price: number

  constructor(title: string, author: string, genre: string, img: string, price: number) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.coverImagePath = img;
    this.price = price;
  }
}

// ! SHORTER SYNTAX !

// export class Book {
//   constructor(public title: string, public author: string, public genre: string, public coverImagePath: string) {}
// }
