import { Book } from '../book.js'; 

export class EBook extends Book {
    constructor(name, author, year, format) {
      super(name, author, year);  
      this.format = format;
 }

 get format() {
  return this._format;
}

set format(value) {
  const validFormats = ['PDF', 'EPUB', 'EXEL'];
  if (!validFormats.includes(value)) {
    throw new Error('Invalid format. Allowed formats are: PDF, EPUB, MOBI.');
  }
  this._format = value;
}

 printInfo() {
    super.printInfo();
    console.log(`Format: ${this.format}`);
  }


  static createFromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}

const ebook1 = new EBook("Harry Potter", "J. K. Rowling", 1980, "PDF");
ebook1.printInfo();
ebook1.format = "EXEL";
console.log(ebook1.format);