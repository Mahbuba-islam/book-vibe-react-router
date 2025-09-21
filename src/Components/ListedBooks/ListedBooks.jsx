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
    const [sort , setSort] = useState('')
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
 console.log(bookList)
    // sort
    const handleSort = (sortType) => {
     setSort(sortType)
     const sortedList = [...bookList]
     if(sortType === 'ratings'){
       sortedList.sort((a,b)=> a.rating-b.rating)
       
     }
     if(sortType === 'number of page'){
   sortedList.sort((a,b)=> a.totalPages-b.totalPages)
      
     }
     setBookList(sortedList)
    }
   

    return (
        <div className=''>
   
  <details className="dropdown w-1/2 md:w-1/4 my-12 mx-auto ">
    <summary className=" bg-[#1c8f0a] btn btn-outline btn-sm py-3 px-4 font-bold text-white rounded-lg shadow hover:shadow-md transition-all duration-200">
      {sort ? `Sort by: ${sort}` : 'Sort by'}
    </summary>
    <ul className=" dropdown-content menu p-2 shadow-md bg-base-100 rounded-lg  z-10">
      <li>
        <button onClick={() => handleSort('ratings')} className="text-sm md:text-base hover:bg-base-200 rounded-md px-2 py-1 focus:">
          ⭐ Ratings
        </button>
      </li>
      <li>
        <button onClick={() => handleSort('number of page')} className="text-sm md:text-base hover:bg-base-200 rounded-md px-2 py-1">
          📄 Number of Pages
        </button>
      </li>
    </ul>
  </details>


    
<Tabs className='mx-4'>
          <TabList>
            <Tab>Read book list</Tab>
            <Tab>Wish list</Tab>
          </TabList>


          <TabPanel>
            <h2 className='font-bold text-2xl mt-4'>Read Books list</h2>
            <div>
              {bookList.map(book => <MarkReadList key={book.bookId} book={book}></MarkReadList>)}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className='font-bold text-2xl'>Wish list Books</h2>
            <div>
              {wishList.map(book => <MarkReadList key={book.bookId} book={book}></MarkReadList>)}
            </div>
          </TabPanel>
        </Tabs>
        </div>
        
    );
};

export default ListedBooks;