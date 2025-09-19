import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=> {
     fetch('/booksData.json')
     .then(res => res.json())
     .then(data => setBooks(data))
    },[])
    return (
        <div className="">
            <h1 className="my-8 text-4xl font-bold text-center">Explore Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-autonav">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book> )
                }
            </div>
        </div>
    );
};

export default Books;