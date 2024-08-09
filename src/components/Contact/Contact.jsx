import React from 'react'

function Contact() {
  return (
      <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
          <form className="space-y-4">
              <div>
                  <label htmlFor="name" className="block text-lg font-medium mb-1">Name</label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                  />
              </div>
              <div>
                  <label htmlFor="email" className="block text-lg font-medium mb-1">Email</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                  />
              </div>
              <div>
                  <label htmlFor="phone" className="block text-lg font-medium mb-1">Phone Number</label>
                  <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
              </div>
              <div>
                  <label htmlFor="message" className="block text-lg font-medium mb-1">Message</label>
                  <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                  />
              </div>
              <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                  Send Message
              </button>
          </form>
      </div>
  );
}



export default Contact
