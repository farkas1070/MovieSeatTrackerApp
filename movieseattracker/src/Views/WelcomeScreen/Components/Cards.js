const Cards = () => {
  return (
    <section class="section relative mt-10 z-20 ">
      <img
        class="absolute left-0 top-0 -z-[1] -translate-y-1/2"
        src="images/icons/feature-shape.svg"
        alt=""
      />
      <div class="container mb-20 ">
        <div class="flex flex-col lg:flex-row justify-between items-center text-center lg:text-start">
          <div class="lg:w-5/12">
            <h2 class="text-2xl lg:text-3xl font-bold text-white">
              Discover The Easiest Way to get into your Favourite Cinemas
            </h2>
          </div>
          <div class="mt-6 lg:mt-0 lg:w-5/12 lg:text-xl">
            <p class="text-white">
              Find The Cinema, Find The Movie, Book Your Seat and You are all Done
            </p>
          </div>
        </div>
        <div class=" mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
          <div class="flex flex-col justify-between rounded-lg bg-[#C5E5DE] p-5 shadow-lg shadow-white">
            <div>
              <h3 class="h4 text-xl lg:text-2xl">Cheap</h3>
              <p>We Offer New Deals Daily</p>
            </div>
            <span class="icon mt-4">
              <img
                class="objec-contain"
                src="images/icons/feature-icon-1.svg"
                alt=""
              />
            </span>
          </div>
          <div class="flex flex-col justify-between rounded-lg bg-[#C5E5DE] p-5 shadow-lg shadow-white">
            <div>
              <h3 class="h4 text-xl lg:text-2xl">Fast</h3>
              <p>Takes Only A Couple Of Minutes</p>
            </div>
            <span class="icon mt-4">
              <img
                class="objec-contain"
                src="images/icons/feature-icon-2.svg"
                alt=""
              />
            </span>
          </div>
          <div class="flex flex-col justify-between rounded-lg bg-[#C5E5DE] p-5 shadow-lg shadow-white">
            <div>
              <h3 class="h4 text-xl lg:text-2xl">Safe</h3>
              <p>We are Working With the Top Cinemas, There is no room for error here</p>
            </div>
            <span class="icon mt-4">
              <img
                class="objec-contain"
                src="images/icons/feature-icon-3.svg"
                alt=""
              />
            </span>
          </div>
          <div class="flex flex-col justify-between rounded-lg bg-[#C5E5DE] p-5 shadow-lg shadow-white">
            <div>
              <h3 class="h4 text-xl lg:text-2xl">Reliable</h3>
              <p>Money Back Garantuee Up to 7 Days</p>
            </div>
            <span class="icon mt-4">
              <img
                class="objec-contain"
                src="images/icons/feature-icon-4.svg"
                alt=""
              />
            </span>
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default Cards;
