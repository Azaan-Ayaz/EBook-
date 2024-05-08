import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineArrowForward } from "react-icons/md";
import { RxDoubleArrowUp } from "react-icons/rx";

const Home = () => {

  const[icon, setIcon] = useState(false)
  const[hover, setHover] = useState(false)

  return (
    <>
     <div className="flex flex-col bg-white">
      <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-16 mb-1 w-full max-w-[1554px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/Home/image1.png"
                className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-center max-md:mt-10 max-md:max-w-full font-poppins">
                {/* <div className="self-center text-6xl font-semibold  max-md:max-w-full max-md:text-4xl  bg-gradient-to-br from-custom1 to-custom2 w-10/12 h-full">
                  Nectronix <span>Digitals</span> 
                </div> */}
                <div className="self-center text-6xl font-semibold max-md:max-w-full max-md:text-4xl text-black bg-custom1 bg-clip-text w-10/12 h-full">
    Nectronix <span className="text-custom2">Digitals</span> 
</div>

                <div className="mt-16 text-4xl font-medium text-black max-md:mt-10 max-md:max-w-full">
                  Welcome to your one-stop shop for all things ebooks!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end px-5  w-full text-2xl max-md:text-lg text-center text-white max-md:max-w-full bg-gradient-to-br from-custom1  to-custom2">
        <div className="self-center max-md:py-3 py-10 max-md:mt- max-md:max-w-full max-md:tracking-tighter max-md:text-justify font-poppins">
          Nectronix Digitals is dedicated to supporting authors by providing
          them with the tools they need to share their stories with the world.
          We believe that everyone should have the opportunity to share their
          unique perspective through the written word, which is why we offer a
          range of services to help authors of all levels achieve their goals.
          Our comprehensive suite of services includes everything from editing
          and proofreading to formatting and cover design, ensuring that your
          manuscript is transformed into a polished and professional ebook that
          can stand out in a crowded marketplace. Whether you're a seasoned
          writer looking to take your work to the next level or a first-time
          author just starting, we're here to help you achieve your vision and
          bring your story to life.
        </div>
        {/* <div className="mt-36 w-full bg-zinc-300 min-h-[5px] max-md:mt-10 max-md:max-w-full" /> */}
      </div>
      <div className="flex gap-5 justify-between md:px-20 md:py-20 max-md:py-2 w-full bg-neutral-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col my-auto max-md:max-w-full">
          <div className='font-poppins text-4xl max-md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-bl from-custom1 to-custom2'>About Us</div>
          <div className="text-2xl max-md:text-lg text-black max-md:max-w-full font-poppins tracking-tight max-md:tracking-tighter max-md:text-justify ">
            Discover the heart behind Nectronix Digitals with a click of a
            button. Our About Us page unveils the passion, dedication, and
            expertise driving our mission to empower authors worldwide. Get to
            know the team behind the scenes, our commitment to excellence, and
            our vision for the future of digital publishing. Click now to embark
            on a journey where stories are celebrated, creativity thrives, and
            dreams take flight.
          </div>
          <div className="flex justify-center self-start px-8 py-5 ml-2.5 text-2xl font-medium text-center text-white max-md:px-5 max-md:ml-2.5">
      <button
        className="bg-gradient-to-br from-custom1 to-custom2 p-3 rounded-md w-full relative"
        onMouseEnter={() => setIcon(true)}
        onMouseLeave={() => setIcon(false)}
      >
        <span className='mr-8'>About Us</span>
        {icon && (
          <span className="absolute top-1/2 transform -translate-y-1/2 right-3">
            <GoArrowUpRight />
          </span>
        )}
        {!icon && (
          <span className="absolute top-1/2 transform -translate-y-1/2 right-3">
            <MdOutlineArrowForward />
          </span>
        )}
      </button>
    </div>
        </div>
        <img
          loading="lazy"
          srcSet="/Home/image.png"
          className="shrink-0 max-w-full aspect-square w-[400px]"
        />
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full max-md:py-6">
        <div className="flex flex-col mb-14 w-full max-w-[1419px] max-md:mb-10 max-md:max-w-full">
          <div className="self-center text-5xl font-poppins font-semibold text-center max-md:text-3xl max-md:font-medium bg-clip-text">
            Our Services
          </div>
          <div className="px-0.5 mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col justify-center max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full bg-gradient-to-br from-custom1  to-custom2 rounded-2xl">
                <div className="flex flex-col grow px-9 py-20 text-xl font-medium text-center rounded-2xl max-md:px-5 max-md:mt-10 font-poppins">
                  <div className="text-3xl text-white">Ebook Writing</div>
                  <div className="mt-16 text-white font-normal">
                    We collaborate with you to craft a captivating ebook that
                    resonates with your target audience.
                  </div>
                  <div className="flex flex-col justify-center items-start self-center p-3 px-2 mt-9 max-w-full bg-zinc-300 w-[180px] max-md:pl-5">
                    <div className="bg-clip-text flex">
                    <button className='flex items-center gap-1 bg-clip-text text-transparent bg-gradient-to-br from-custom1  to-custom2'>
    Learn More <RxDoubleArrowUp className='text-black animate-bounce ml-2'/>
</button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-gradient-to-br from-custom1  to-custom2 rounded-2xl">
                <div className="flex flex-col grow px-8 py-20 w-full text-xl font-medium text-center rounded-2xl max-md:px-5 max-md:mt-10 font-poppins">
                  <div className="text-3xl text-white">Ebook Publishing</div>
                  <div className="mt-16 text-white font-normal">
                  Streamline ebook publishing for major online retailers like Amazon Kindle, Kobo, and Apple Books.                  </div>
                  <div className="flex flex-col justify-center items-start self-center p-3 px-2 mt-9 max-w-full bg-zinc-300 w-[180px] max-md:pl-5">
                    <div className="bg-clip-text flex">
                    <button className='flex items-center gap-1 bg-clip-text text-transparent bg-gradient-to-br from-custom1  to-custom2'>
    Learn More <RxDoubleArrowUp className='text-black animate-bounce ml-2'/>
</button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-gradient-to-br from-custom1  to-custom2 rounded-2xl">
                <div className="flex flex-col grow px-10 py-20 w-full text-xl font-medium text-center rounded-2xl max-md:px-5 max-md:mt-10 font-poppins">
                  <div className="text-3xl text-white">Ebook Cover Designing</div>
                  <div className="mt-9 text-white font-normal">
                  Craft a captivating cover reflecting your book's essence.
                  </div>
                  <div className="flex flex-col justify-center items-start self-center p-3 px-2 mt-14 max-w-full bg-zinc-300 w-[180px] max-md:pl-5">
                    <div className="bg-clip-text flex">
                    <button className='flex items-center gap-1 bg-clip-text text-transparent bg-gradient-to-br from-custom1  to-custom2'>
    Learn More <RxDoubleArrowUp className='text-black animate-bounce ml-2'/>
</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-11 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col justify-center max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full bg-gr bg-gradient-to-br from-custom1  to-custom2 rounded-2xl">
                <div className="flex flex-col grow items-center px-3 py-14 text-xl font-medium text-center rounded-2xl max-md:mt-10 font-poppins">
                  <div className="self-stretch text-3xl text-white font-poppins">
                    Ebook Proofreading
                  </div>
                  <div className="mt-16 text-white font-normal">
                    Eliminate typos, grammatical errors, and inconsistencies for
                    a flawless reading experience
                  </div>
                  <div className="flex flex-col justify-center items-start self-center p-3 px-2 mt-20 max-w-full bg-zinc-300 w-[180px] max-md:pl-5">
                    <div className="bg-clip-text flex">
                    <button className='flex items-center gap-1 bg-clip-text text-transparent bg-gradient-to-br from-custom1  to-custom2'>
    Learn More <RxDoubleArrowUp className='text-black animate-bounce ml-2'/>
</button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-gradient-to-br from-custom1  to-custom2 rounded-2xl">
                <div className="flex flex-col grow px-6 py-14 text-xl font-medium text-center rounded-2xl max-md:px-5 max-md:mt-10">
                  <div className="text-3xl text-white font-poppins">Ebook Formatting</div>
                  <div className="mt-12 text-white font-normal font-poppins">
                    We ensure your ebook adheres to industry standards and
                    displays beautifully across various devices.
                  </div>
                  <div className="flex flex-col justify-center items-start self-center p-3 px-2 mt-[72px] max-w-full bg-zinc-300 w-[180px] max-md:pl-5">
                    <div className="bg-clip-text flex">
                    <button className='flex items-center gap-1 bg-clip-text text-transparent bg-gradient-to-br from-custom1  to-custom2'>
    Learn More <RxDoubleArrowUp className='text-black animate-bounce ml-2'/>
</button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-gradient-to-br from-custom1  to-custom2 rounded-2xl">
                <div className="flex flex-col grow items-center px-6 py-14 w-full text-xl font-medium text-center rounded-2xl max-md:px-5 max-md:mt-10">
                  <div className="text-3xl text-white w-[382px] font-poppins">
                    Ebook Consultancy
                  </div>
                  <div className="self-stretch mt-16 text-white font-normal font-poppins">
                    Get expert guidance on your ebook journey, from concept
                    development to marketing strategies.
                  </div>
                  <div className="flex flex-col justify-center items-start self-center p-3 px-2 mt-16 max-w-full bg-zinc-300 w-[180px] max-md:pl-5">
                    <div className="bg-clip-text flex">
                    <button className='flex items-center gap-1 bg-clip-text text-transparent bg-gradient-to-br from-custom1  to-custom2'>
    Learn More <RxDoubleArrowUp className='text-black animate-bounce ml-2'/>
</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center w-full text-center text-white max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/Home/image3.jpg"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center px-16 py-20 w-full bg-black bg-opacity-80 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-3.5 mr- mb-8 ml-11 max-md:mr-2.5 max-md:max-w-full font-poppins">
            <div className="self-center text-5xl max-md:text-3xl font-semibold max-md:max-w-full">
              Why Choose Nectronix Digitals?
            </div>
            <div className="flex gap-5 mt-24 text-4xl max-md:text-2xl font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:font-normal">
              <div className="flex-auto">Experienced Team</div>
              <div className="flex-auto">High-Quality Work</div>
              <div className="flex-auto">Competitive Rates</div>
              <div className="flex-auto self-start">Seamless Process</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full text-center bg-neutral-200 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-3 mb-2.5 max-w-full w-[964px]">
          <div className="text-5xl font-semibold bg-clip-text max-md:max-w-full font-poppins max-md:text-3xl text-transparent bg-gradient-to-r from-custom1 to-custom2">
            Ready to take the next step?
          </div>
          <div className="self-stretch mt-4 max-md:text-xl font-poppins text-3xl text-black max-md:max-w-full">
            Contact Nectronix Digitals today for a free consultation. Let's turn
            your dream of becoming a published author into reality!
          </div>
          <div className="justify-center px-10 py-5 mt-6 text-2xl font-medium text-white max-md:px-5">
            <button className='bg-gradient-to-br from-custom1 to-custom2 p-3 rounded-md flex'
            onMouseEnter={() => setIcon(true)}
            onMouseLeave={() => setIcon(false)}>
            <span className='mr-1'>Contact Us</span>
            {icon?
            <span className="mt-1"><GoArrowUpRight/></span>:
            <span className="mt-1"><MdOutlineArrowForward/></span>}
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
