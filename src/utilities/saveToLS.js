const getBookList = () => {
    const bookList = localStorage.getItem('book-list')
   
    if(bookList){
        return JSON.parse(bookList)
    }
    else{
       return  []
    }
}

const saveBookToLS = (id) => {

    const bookList = getBookList()
    console.log(bookList)
    if(bookList.includes(id)){
        alert('already exist')
    }
    else{
        bookList.push(id)
        const bookListStr = JSON.stringify(bookList)
        localStorage.setItem('book-list', bookListStr)
    }
    
   
}

export {saveBookToLS, getBookList}