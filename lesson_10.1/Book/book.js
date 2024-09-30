export class Book {
    constructor(name, author, year) {
      this.name = name;
      this.author = author;
      this.year = year;
 }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Title must be a non-empty string.');
    }
    this._name = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Author must be a non-empty string.');
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Year must be a valid positive number.');
    }
    this._year = value;
  }

 printInfo() {
    console.log(`The ${this.name} book was written by ${this.author} in ${this.year}`);
  }

  static findOldestBook(books) {
    return books.reduce((oldest, current) => {
      return current.year < oldest.year ? current : oldest;
    });
}
}