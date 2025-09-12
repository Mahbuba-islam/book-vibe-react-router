import BannerImg from "../../assets/books.jpg"

const Banner = () => {
    return (
        
            <div className="mt-12 bg-gray-200 rounded-lg hero px-14 py-12">
  <div className="hero-content flex flex-col lg:flex-row-reverse  ">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl "
    />
    <div className="space-y-6">
      <h1 className="lg:text-6xl text-4xl font-bold mt-4 ">Books to freshen up your bookshelf</h1>
        <button className="btn bg-[#23BE0A] text-white rounded-xl px-4 py-2 text-sm mt-8">
            View The List
          </button>
      
    </div>
  </div>
</div>
        
    );
};

export default Banner;