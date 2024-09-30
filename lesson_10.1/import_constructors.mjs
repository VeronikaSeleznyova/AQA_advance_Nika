import { Book } from '../Book/book.js';
import { EBook } from '../EBook/ebook.js';

const book1 = new Book("Cinderella", "George Orwell", 1950);
const book2 = new Book("", "Harper Lee", 1960);
const ebook1 = new EBook("Harry Potter", "J. K. Rowling", 1980, "PDF");

book1.printInfo(); 
book2.printInfo();  
ebook1.printInfo(); 

const ebook2 = EBook.createFromBook(book1, "EXEL");
ebook2.printInfo(); 

const books = [book1, book2, ebook1, ebook2];

const oldestBook = Book.findOldestBook(books);
console.log(`Oldest Book: ${oldestBook.title}, published in ${oldestBook.year}`);