import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col pb-12 text-base bg-white">
        <div className="flex flex-col items-center font-poppins pr-20 pl- w-full bg-gradient-to-bl from-custom1 to-custom2 rounded-tr-none rounded-tl-none md:rounded-br-[150px] md:rounded-bl-[150px] max-md:px-5 max-md:max-w-full h-[900px]">
          <div className="flex justify-between mt-5 w-full text-white max-w-[1262px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="mt-52 max-md:mt-10">
              <div className="flex flex-col self-end max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl max-md:max-w-full max-md:text-4xl font-bold">
                  Let's Get in <span className="text-white">Touch!</span>
                </div>
                <div className="mt-3 text-lg text-white max-md:max-w-full">
                  Have a question or need assistance? Reach out to us via email,{" "}
                  <br />
                  phone, or the contact form below. We're eager to assist you.
                </div>
                <div className="mt-2.5 font-semibold text-3xl max-md:max-w-full">
                  Nice hearing from you!
                </div>
                <div>
                  <img src="/contact/image.png" alt="" className="md:absolute top-[500px] z-40 shadow-2xl" />
                </div>
              </div>
            </div>
            <div className="mt-56 max-md:mt-96">
              <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <label htmlFor="firstName" className="text-white">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex flex-col max-md:max-w-full">
                  <label htmlFor="lastName" className="text-white">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex flex-col max-md:max-w-full">
                  <label htmlFor="email" className="text-white">Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Enter your email address"
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  />
                </div>
                <div className="flex flex-col max-md:max-w-full">
                  <label htmlFor="message" className="text-white">Message</label>
                  <textarea
                    id="message"
                    className="mt-2 px-4 py-2 border w-full border-black text-black rounded-md focus:outline-none "
                    placeholder="Enter your message"
                    rows="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-end mt-14 mr-44 max-w-full text-lg font-medium text-zinc-900 w-[246px] max-md:mt-10 max-md:mr-2.5">
          <div className="text-3xl text-pink-700">Office:</div>
          <div className="flex gap-3 mt-8 whitespace-nowrap tracking-[2.88px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b18ef1aa2bda240d5973139df7222139ed94e2774593244b836705ba95c76b1a?"
              className="shrink-0 aspect-square w-[25px]"
              alt="phone-icon"
            />
            <div className="flex-auto my-auto">+447473997191</div>
          </div>
          <div className="flex gap-2.5 mt-3.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e430d0dbecdd164f5f997d5001e7481e48e59aac7f19c99c4c80ebb8c6406c66?"
              className="shrink-0 aspect-square w-[25px]"
              alt="email-icon"
            />
            <div className="flex-auto my-auto">sales@nectronixdigital.com</div>
          </div>
          <div className="flex gap-3 mt-3.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da09b859b3e1adcb736ba6f475b3b437bab3e7eeb9d13137cfb31c21780b9de?"
              className="shrink-0 self-start aspect-square w-[25px]"
              alt="location-icon"
            />
            <div>
              2068 Boulevard Henri
              <br />
              -Bourassa Est
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
