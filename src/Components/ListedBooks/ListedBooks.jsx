import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getBookList } from '../../utilities/saveToLS';
import MarkReadList from '../markReadList/markReadList';

const ListedBooks = () => {
    const allBooks = useLoaderData()
    const [bookList, setBookList] = useState([])
    const [wishList, setWishList] = useState([])
    useEffect(()=> {
        const bookList = getBookList('book-list')
        const bookListIds = bookList.map(id => parseInt(id))
        const markRead = allBooks.filter(book => bookListIds.includes(book.bookId))
        console.log(markRead)
        setBookList(markRead)
    },[])


     useEffect(()=> {
        const wishList = getBookList('wish-list')
        const wishListIds = wishList.map(id => parseInt(id))
        const wishReadList = allBooks.filter(book => wishListIds.includes(book.bookId))
        console.log(wishReadList)
        setWishList(wishReadList)
    },[])

   

    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Read book list</Tab>
      <Tab>Wish list</Tab>
    </TabList>

    <TabPanel>
      <h2 className='font-bold text-2xl'>Read Books list</h2>
      <div>
        {
            bookList.map(book => <MarkReadList key={book.bookId} book={book}></MarkReadList>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2 className='font-bold text-2xl'>Wish list Books</h2>
      <div>
        {
            wishList.map(book => <MarkReadList key={book.bookId} book={book}></MarkReadList>)
        }
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;