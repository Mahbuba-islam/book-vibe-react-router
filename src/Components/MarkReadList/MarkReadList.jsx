import { Link } from "react-router-dom";


const MarkReadList = ({book}) => {
     const {bookName, image, author, category, publisher, 
          totalPages, yearOfPublishing,rating, tags, bookId} = book
    return (
        <div>
             <div className="card lg:card-side flex flex-col md:flex-row
            my-10 gap-8">
  <figure className="bg-amber-100 rounded-xl content-center">
    <img className=" md:my-0 w-[150px] mx-auto"
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body flex-1 space-y-4 mt-8 md:mt-0">
    <h2 className="card-title font-bold text-xl md:text-2xl ">{bookName}</h2>
    <p className="font-semibold">By: {author}</p>
   
   
    {/* tags */}
    <div className="flex md:flex-row flex-col md:gap-12 gap-3">
     
    <div className="space-x-4 flex gap-2 ">
      <span className="font-bold">Tag</span>
      <div className="flex gap-2">
       {
            tags.map(tag => <button className="bg-lime-50 text-[#23BE0A] font-bold rounded-full text-xs px-4 py-2 flex flex-col md:flex-row space-y-2">{tag}</button>)
          }
      </div>
         
          
       
        </div>
  <span className="mt-2 font-semibold text-xs ">year of publishing : {yearOfPublishing}</span>
       
       
    </div>
     <div className="space-x-6 flex flex-col md:flex-row md:gap-20 gap-3">
           <span className="text-gray-600 text-xs font-semibold ">publisher : {publisher}</span>
           <span className="text-gray-700 text-xs font-semibold">TotalPages : {totalPages}</span>
        </div>

     <hr className="border border-gray-400"/>
   
      <div className="card-actions  space-x-4 mt-6 flex flex-col md:flex-row gap-3">
      <button className="btn bg-[#bdd6f5] text-[#328EFF] px-5 py-2 font-semibold  rounded-full text-xs w-[160px]">Category {category}</button>
      <button className="btn bg-[#e9e3db]  px-5 py-2 text-[#c78c35] font-semibold rounded-full text-xs w-[160px]">Rating {rating}</button>
      <Link to={`${bookId}`}><button className="btn bg-[#23BE0A]  px-5 py-2 text-white font-semibold rounded-full text-xs w-[160px]">view details</button></Link>
    </div>


     
  </div>
</div>
        </div>
    );
};

export default MarkReadList;