import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId,bookName, image, author, category, 
          rating, tags} 
         = book
    return (
    <Link to={`books/${bookId}`}>
    <div class="card bg-base-100 md:w-90  shadow-sm border border-gray-300 p-8 rounded-lg h-[500px]">
  <figure className="bg-gray-200 md:w-[300px] h-[230px] py-8 rounded-lg">
    <img className="w-[120px] h-[166px] mx-auto "
      src={image}
      alt="Shoes" />
  </figure>
  
       <div class="card-body mt-4 space-y-2">
        <div className="space-x-2">
          {
            tags.map(tag => <button className="bg-lime-50 text-[#23BE0A] font-bold rounded-full text-xs px-4 py-2">{tag}</button>)
          }
          
        
        </div>
       
    <h2 class="card-title font-bold text-xl md:text-2xl ">
     {bookName}
     
    </h2>
   <div className="card-actions justify-end">
      <div className="badge badge-outline font-semibold">By: {author}</div>
      <hr className="my-3 border border-dashed border-gray-400"/>
      {/* tags and rating */}
      <div className="flex items-center justify-between">
      
      <div className="badge badge-outline font-semibold "> {category}</div>
       <div class="badge badge-secondary">{rating} 🌟</div>
      </div>
       
    </div>
  </div>
</div>
    </Link> 
            
        
    );
};

export default Book;