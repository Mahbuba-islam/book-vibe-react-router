import { Link } from "react-router-dom";


const MarkReadList = ({book}) => {
     const {bookName, image, author, category, publisher, 
          totalPages, yearOfPublishing,rating, tags, bookId} = book
    return (
        <div>
             <div className="card lg:card-side  flex flex-col md:flex-row
            my-18">
  <figure className="bg-amber-100 rounded-xl content-center">
    <img className="p-4 md:my-0 w-[150px]"
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body flex-1 px-12  space-y-4 mt-8 md:mt-0">
    <h2 className="card-title font-bold text-xl md:text-2xl ">{bookName}</h2>
    <p className="font-semibold">By: {author}</p>
   
   
    {/* tags */}
    <div className="flex gap-3 items-center">
     <span className="font-bold">Tag</span>
    <div className="space-x-4">
          {
            tags.map(tag => <button className="bg-lime-50 text-[#23BE0A] font-bold rounded-full text-xs px-4 py-2">{tag}</button>)
          }
          
         <span className="font-semibold text-xs flex-1">year of publishing : {yearOfPublishing}</span>
        </div>

       
       
    </div>
     <div className="space-x-6">
           <span className="text-gray-600 text-xs flex-1 font-semibold ">publisher : {publisher}</span>
           <span className="text-gray-700 text-xs flex-1 font-semibold">TotalPages : {totalPages}</span>
        </div>

     <hr className="border border-gray-400"/>
   
      <div className="card-actions justify-end space-x-4 mt-6">
      <button className="btn bg-[#bdd6f5] text-[#328EFF] px-5 py-2 font-semibold  rounded-full text-xs">Category {category}</button>
      <button className="btn bg-[#e9e3db]  px-5 py-2 text-[#c78c35] font-semibold rounded-full text-xs">Rating {rating}</button>
      <Link to={`${bookId}`}><button className="btn bg-[#23BE0A]  px-5 py-2 text-white font-semibold rounded-full text-xs">view details</button></Link>
    </div>


     
  </div>
</div>
        </div>
    );
};

export default MarkReadList;