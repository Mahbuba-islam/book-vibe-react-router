import { toast } from "react-toastify"

const getBookList = (booklists) => {
    const bookList = localStorage.getItem(booklists)
   
    if(bookList){
        return JSON.parse(bookList)
    }
    else{
       return  []
    }
}

const saveBookToLS = (id,booklists) => {
     const bookList = getBookList(booklists)
    console.log(bookList)
   if (bookList.includes(id)) {
  toast.error('📚 This book is already in your list!', {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
  });
} else {
  bookList.push(id); 
  const bookListStr = JSON.stringify(bookList)
 localStorage.setItem(booklists, bookListStr)
  toast.success('✅ Book added successfully!', {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
  });
}

}



export {saveBookToLS, getBookList}