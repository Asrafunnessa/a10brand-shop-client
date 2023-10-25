const Banner = () => {
    return (
      <div>
        <div className="hero h-[70vh] bg-gray-200">
          <img className="hero h-[70vh]" src="banner.jpg" alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">TECH & FUTURE</h1>
              <p className="mb-5">Technology are an essential part of our lives because It facilitated communication between individuals, communities and countries, deepened dialogue and approached languages, many of which relyed on translation features.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;