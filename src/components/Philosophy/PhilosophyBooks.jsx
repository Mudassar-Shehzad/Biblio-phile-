import React from 'react';
import { useNavigate } from 'react-router-dom';

import VedantaPhilosophyPhoto from '../../assets/Philosophy/VedantaPhilosophy/VedantaPhilosophy.jpg';
import VedantaPhilosophyPdf from '../../assets/Philosophy/VedantaPhilosophy/VedantaPhilosophy.pdf';

import ChristianityandGreekPhilosophyPhoto from '../../assets/Philosophy/ChristianityandGreekPhilosophy/ChristianityandGreekPhilosophy.jpg';
import ChristianityandGreekPhilosophyPdf from '../../assets/Philosophy/ChristianityandGreekPhilosophy/ChristianityandGreekPhilosophy.pdf';

import FouteenLessonOnYogiPhoto from '../../assets/Philosophy/FouteenLessonOnYogi/FouteenLessonOnYogi.jpg';
import FouteenLessonOnYogiPdf from '../../assets/Philosophy/FouteenLessonOnYogi/FouteenLessonOnYogi.pdf';

import TheProblemOfPhilosophyPhoto from '../../assets/Philosophy/TheProblemOfPhilosophy/TheProblemOfPhilosophy.jpg';
import TheProblemOfPhilosophyPdf from '../../assets/Philosophy/TheProblemOfPhilosophy/TheProblemOfPhilosophy.pdf';

import HistoryofModernPhilosophyPhoto from '../../assets/Philosophy/HistoryofModernPhilosophy/HistoryofModernPhilosophy.jpg';
import HistoryofModernPhilosophyPdf from '../../assets/Philosophy/HistoryofModernPhilosophy/HistoryofModernPhilosophy.pdf';

const products = [
  {
    id: 'P1',
    title: 'Vedanta Philosophy',
    author: 'Swami Vivekananda',
    price: 12,
    description: 'An introduction to Vedanta philosophy by Swami Vivekananda.',
    imagesrc: VedantaPhilosophyPhoto,
    pdfsrc: VedantaPhilosophyPdf,
    addedToCart: false,
  },
  {
    id: 'P2',
    title: 'Christianity and Greek Philosophy',
    author: 'Benjamin Franklin Cocker',
    price: 15,
    description: 'A study on the relationship between Christianity and Greek philosophy.',
    imagesrc: ChristianityandGreekPhilosophyPhoto,
    pdfsrc: ChristianityandGreekPhilosophyPdf,
    addedToCart: false,
  },
  {
    id: 'P3',
    title: 'Fourteen Lessons in Yogi Philosophy',
    author: 'Yogi Ramacharaka',
    price: 18,
    description: 'A series of lessons in yogi philosophy by Yogi Ramacharaka.',
    imagesrc: FouteenLessonOnYogiPhoto,
    pdfsrc: FouteenLessonOnYogiPdf,
    addedToCart: false,
  },
  {
    id: 'P4',
    title: 'The Problem of Philosophy',
    author: 'Bertrand Russell',
    price: 20,
    description: 'A philosophical exploration of major philosophical problems by Bertrand Russell.',
    imagesrc: TheProblemOfPhilosophyPhoto,
    pdfsrc: TheProblemOfPhilosophyPdf,
    addedToCart: false,
  },
  {
    id: 'P5',
    title: 'History of Modern Philosophy',
    author: 'Richard Falckenberg',
    price: 25,
    description: 'A comprehensive history of modern philosophy by Richard Falckenberg.',
    imagesrc: HistoryofModernPhilosophyPhoto,
    pdfsrc: HistoryofModernPhilosophyPdf,
    addedToCart: false,
  },
];


function PhilosophyBooks() {
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate('/productDetail', { state: { product } });
  };

  return (
    <div className="h-auto flex flex-wrap justify-center">
        


        {products.map((product) => (
            <div
                key={product.id}
                className="w-[45%] h-auto m-2 bg-white shadow-lg rounded-lg overflow-hidden pc:w-[20%]"
                onClick={() => handleClick(product)}
            >
                <img
                    className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110  "
                    src={product.imagesrc}
                    alt={product.title}
                />
                <div className="p-2">
                    <h1 className="text-xl font-semibold mb-2">{product.title} by {product.author}</h1>
                    <h1 className="text-xl font-semibold">Price: <span className="text-lg font-normal">${product.price}</span></h1>
                </div>
            </div>
        ))}
        </div>
);
}

export default PhilosophyBooks;
