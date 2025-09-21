import { useLoaderData, useParams } from "react-router-dom";
import { saveBookToLS } from "../../utilities/saveToLS";

const BookDetails = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)
    console.log(bookId)
    const data = useLoaderData()
    console.log(data)
    const bookDetails = data.find(book => book.bookId === id )
    const {bookName, image, author, review,category, publisher, 
          totalPages, yearOfPublishing,rating, tags} = bookDetails
    console.log(bookDetails)


   const handleReadMark = (id) => {
     saveBookToLS(id,'book-list')
   }

   const handleWishList = (id) => {
    saveBookToLS(id, 'wish-list')
   }

    return (
        <div>
            <div className="card lg:card-side w-[1100px] h-[650px] flex flex-col md:flex-row
            my-18">
  <figure className="bg-amber-100 rounded-lg flex-1  p-4 content-center">
    <img className=" content-center m-auto w-1/2"
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body flex-1 px-12 h-[573px] space-y-4 mt-8 md:mt-0">
    <h2 className="card-title font-bold text-xl md:text-2xl ">{bookName}</h2>
    <p className="font-semibold">By: {author}</p>
    <hr className="border border-gray-400"/>
    <p>{category}</p>
    <hr className="border border-gray-400"/>
    <p className="text-gray-500 max-w-3xl"> <span className="text-black font-bold">review:</span> {review}</p>
    {/* tags */}
    <div className="flex gap-3 items-center">
     <span className="font-bold">Tag</span>
    <div className="space-x-2">
          {
            tags.map(tag => <button className="bg-lime-50 text-[#23BE0A] font-bold rounded-full text-xs px-4 py-2">{tag}</button>)
          }
          
        
        </div>
       
    </div>

     <hr className="border border-gray-400"/>
     <div className="w-[300px]">
        <div className="flex gap-4 items-center">
            <p className="text-gray-600 space-x-2 flex-1">Number of pages: </p>
            <span className="font-bold  flex-1">{totalPages}</span>
        </div>
        <div className="flex gap-4 items-center">
            <p className="text-gray-600 space-x-2 flex-1">publisher: </p>
            <span className="font-bold flex-1">{publisher}</span>
        </div>
        <div className="flex gap-4 items-center">
            <p className="text-gray-600 space-x-2 flex-1">year of publishing: </p>
            <span className="font-bold flex-1">{yearOfPublishing}</span>
        </div>
       
        <div className="flex gap-4 items-center">
            <p className="text-gray-600 space-x-2 flex-1">rating: </p>
            <span className="font-bold flex-1">{rating}</span>
        </div>
        
         <div className="flex card-actions justify-end space-x-4 mt-6">
      <button onClick={() => handleReadMark(id)} className="w-[160px] rounded-full btn border border-gray-400 px-5 py-1 font-bold">Mark as Read</button>
      <button onClick={() => handleWishList(id)} className="btn bg-[#50B1C9]  py-1 text-white font-bold w-[165px] rounded-full">Add to WishList</button>
    </div>
     </div>
   
   
  </div>
</div>
        </div>
    );
};

export default BookDetails;