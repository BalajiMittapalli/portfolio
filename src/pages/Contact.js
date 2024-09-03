import React from 'react';

const Contact = () => {
  return (
    
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Contact form section */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <h2 className="text-5xl font-bold text-center text-purple-500 mb-12">
            Contact Me
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-black text-white placeholder-gray-400 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-black text-white placeholder-gray-400 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-3 bg-black text-white placeholder-gray-400 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Email Subject"
                className="w-full px-4 py-3 bg-black text-white placeholder-gray-400 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full px-4 py-3 bg-black text-white placeholder-gray-400 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;