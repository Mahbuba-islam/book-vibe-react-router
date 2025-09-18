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
    if(bookList.includes(id)){
        alert('already exist')
    }
    else{
        bookList.push(id)
        const bookListStr = JSON.stringify(bookList)
        localStorage.setItem(booklists, bookListStr)
    }
    
   
}



export {saveBookToLS, getBookList}