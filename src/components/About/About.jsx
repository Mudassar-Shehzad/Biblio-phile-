import React from 'react';
import photo from '../../assets/homePhoto.jpg'; // Make sure the correct path to the image is used

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Our Bookstore</h1>
      <div className="flex flex-col pc:flex-row pc:space-x-9">
        <div className="md:w-1/2 md:pr-8 flex items-center">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Bookstore"
            className="w-full h-auto object-cover pc:w-[100%] "
            style={{ height: '100%' }}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Our bookstore is dedicated to providing a wide selection of books to
            inspire and educate readers of all ages. We believe in the power of
            reading to transform lives and open minds.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Founded in 2023, our bookstore started as a small family business with
            a passion for literature. Over the years, we've grown into a beloved
            community hub for book lovers, offering a diverse range of genres and
            hosting events that bring people together.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>Wide selection of books across all genres</li>
            <li>Friendly and knowledgeable staff</li>
            <li>Regular events and author signings</li>
            <li>Community-focused and supportive of local authors</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
