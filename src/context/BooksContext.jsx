
import AfterTheCurePhoto from '../assets/ScienceFiction/AfterTheCure/AfterTheCure.jpg'
import AfterTheCurePdf from '../assets/ScienceFiction/AfterTheCure/AfterTheCure.pdf'

import AlmuricPhoto from '../assets/ScienceFiction/Almuric/Almuric.jpg'
import AlmuricdPdf from '../assets/ScienceFiction/Almuric/Almuric.pdf'

import AtTheEarthcorePhoto from '../assets/ScienceFiction/AtTheEarthcore/AtTheEarthcore.jpg'
import AtTheEarthcorePdf from '../assets/ScienceFiction/AtTheEarthcore/AtTheEarthcore.pdf'

import TheAliensPhoto from '../assets/ScienceFiction/TheAliens/TheAliens.jpg'
import TheAliensPdf from '../assets/ScienceFiction/TheAliens/TheAliens.pdf'

import TheInvisibleManPhoto from '../assets/ScienceFiction/TheInvisibleMan/TheInvisibleMan.jpg'
import TheInvisibleMandPdf from '../assets/ScienceFiction/TheInvisibleMan/TheInvisibleMan.pdf'
import JourneyToCenterOfEarthPhoto from '../assets/Adventure/JourneyToCenterOfEarth/JourneyToCenterOfEarth.jpg'
import JourneyToCenterOfEarthPdf from '../assets/Adventure/JourneyToCenterOfEarth/JourneyToCenterOfEarth.pdf'
import LeaguesUndertheSeaPhoto from '../assets/Adventure/LeaguesUndertheSea/LeaguesUndertheSea.jpeg'
import LeaguesUndertheSeahPdf from '../assets/Adventure/LeaguesUndertheSea/LeaguesUndertheSea.pdf'
import PrincessOfMarsPhoto from '../assets/Adventure/PrincessOfMars/PrincessOfMars.jpg'
import PrincessOfMarsPdf from '../assets/Adventure/PrincessOfMars/PrincessOfMars.pdf'
import TheCountOfMonteCristoPhoto from '../assets/Adventure/TheCountOfMonteCristo/TheCountOfMonteCristo.webp'
import TheCountOfMonteCristoPdf from '../assets/Adventure/TheCountOfMonteCristo/TheCountOfMonteCristo.pdf'
import TheMesteriousIslandPhoto from '../assets/Adventure/TheMesteriousIsland/TheMesteriousIsland.webp'
import TheMesteriousIslandPdf from '../assets/Adventure/TheMesteriousIsland/TheMesteriousIsland.pdf'
import AlibiPhoto from '../assets/Childrens/Alibi/Alibi.jpg';
import AlibiPdf from '../assets/Childrens/Alibi/Alibi.pdf';

import ChessAndCheckerPhoto from '../assets/Childrens/ChessAndChecker/ChessAndChecker.jpg';
import ChessAndCheckerPdf from '../assets/Childrens/ChessAndChecker/ChessAndChecker.pdf';

import JackWinterPhoto from '../assets/Childrens/JackWinter/JackWinter.jpg';
import JackWinterPdf from '../assets/Childrens/JackWinter/JackWinter.pdf';

import ThingsToMakePhoto from '../assets/Childrens/ThingsToMake/ThingsToMake.jpg';
import ThingsToMakePdf from '../assets/Childrens/ThingsToMake/ThingsToMake.pdf';

import WhatShallWeDoNowPhoto from '../assets/Childrens/WhatShallWeDoNow/WhatShallWeDoNow.jpg';
import WhatShallWeDoNowPdf from '../assets/Childrens/WhatShallWeDoNow/WhatShallWeDoNow.pdf';

import frankenstienPhoto from '../assets/classicBooks/frankenstien/frenkenstien.png'
import frankenstienPdf from '../assets/classicBooks/frankenstien/frenkenstien.pdf'
import prideAndPrejudicePhoto from '../assets/classicBooks/prideandprejudice/prideAndPrejudice.jpg'
import prideAndPrejudicePdf from '../assets/classicBooks/prideandprejudice/prideandprejudice.pdf'
import thusSpakePhoto from '../assets/classicBooks/thusSpake/thusSpake.png'
import thusSpakePdf from '../assets/classicBooks/thusSpake/thusSpake.pdf'
import JaneEyrePhoto from '../assets/classicBooks/JaneEyre/JaneEyre.jpg'
import JaneEyrePdf from '../assets/classicBooks/JaneEyre/JaneEyre.pdf'
import TheApocryphalPhoto from '../assets/classicBooks/TheApocryphal/TheApocryphal.jpg'
import TheApocryphalPdf from '../assets/classicBooks/TheApocryphal/TheApocryphal.pdf'
import WarandPeacePhoto from '../assets/classicBooks/WarandPeace/warAndPeace.jpg'
import WarandPeacePdf from '../assets/classicBooks/WarandPeace/warAndPeace.pdf'
import VedantaPhilosophyPhoto from '../assets/Philosophy/VedantaPhilosophy/VedantaPhilosophy.jpg';
import VedantaPhilosophyPdf from '../assets/Philosophy/VedantaPhilosophy/VedantaPhilosophy.pdf';

import ChristianityandGreekPhilosophyPhoto from '../assets/Philosophy/ChristianityandGreekPhilosophy/ChristianityandGreekPhilosophy.jpg';
import ChristianityandGreekPhilosophyPdf from '../assets/Philosophy/ChristianityandGreekPhilosophy/ChristianityandGreekPhilosophy.pdf';

import FouteenLessonOnYogiPhoto from '../assets/Philosophy/FouteenLessonOnYogi/FouteenLessonOnYogi.jpg';
import FouteenLessonOnYogiPdf from '../assets/Philosophy/FouteenLessonOnYogi/FouteenLessonOnYogi.pdf';

import TheProblemOfPhilosophyPhoto from '../assets/Philosophy/TheProblemOfPhilosophy/TheProblemOfPhilosophy.jpg';
import TheProblemOfPhilosophyPdf from '../assets/Philosophy/TheProblemOfPhilosophy/TheProblemOfPhilosophy.pdf';

import HistoryofModernPhilosophyPhoto from '../assets/Philosophy/HistoryofModernPhilosophy/HistoryofModernPhilosophy.jpg';
import HistoryofModernPhilosophyPdf from '../assets/Philosophy/HistoryofModernPhilosophy/HistoryofModernPhilosophy.pdf';
import React, { createContext, useContext, useState } from "react";
const allItems = [
    {
        id: 'C1',
        title: 'TheApocryphal',
        author: 'F. Scott Fitzgerald',
        price: 12,
        description: 'A classic novel about love and society.',
        imagesrc: TheApocryphalPhoto,
        pdfsrc: TheApocryphalPdf,
        addedToCart: false,
    },
    {
        id: 'C2',
        title: 'JaneEyre',
        author: 'Charlotte Brontë',
        price: 12,
        description: 'A classic novel about love and society.',
        imagesrc: JaneEyrePhoto,
        pdfsrc: JaneEyrePdf,
        addedToCart: false,
    },
    {
        id: 'C3',
        title: 'WarandPeace',
        author: 'Leo Tolstoy',
        price: 12,
        description: 'A classic novel about love and society.',
        imagesrc: WarandPeacePhoto,
        pdfsrc: WarandPeacePdf,
        addedToCart: false,
    },
    {
        id: 'C4',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: 12,
        description: 'A classic novel about love and society.',
        imagesrc: prideAndPrejudicePhoto,
        pdfsrc: prideAndPrejudicePdf,
        addedToCart: false,
    },
    {
        id: 'C5',
        title: 'Frankenstein',
        author: 'Mary Shelley',
        price: 12,
        description: 'A classic novel about love and society.',
        imagesrc: frankenstienPhoto,
        pdfsrc: frankenstienPdf,
        addedToCart: false,
    },
    {
        id: 'C6',
        title: 'THUS SPAKE ZARATHUSTRA',
        author: 'Friedrich Nietzsche',
        price: 12,
        description: 'A philosophical work on the idea of eternal recurrence.',
        imagesrc: thusSpakePhoto,
        pdfsrc: thusSpakePdf,
        addedToCart: false,
    },
    {
        id: 'A1',
        title: 'Journey to the Center of the Earth',
        author: 'Jules Verne',
        price: 12,
        description: 'An adventure novel about a journey to the Earth\'s core.',
        imagesrc: JourneyToCenterOfEarthPhoto,
        pdfsrc: JourneyToCenterOfEarthPdf,
        addedToCart: false,
    },
    {
        id: 'A2',
        title: 'Twenty Thousand Leagues Under the Sea',
        author: 'Jules Verne',
        price: 12,
        description: 'A classic science fiction novel about underwater exploration.',
        imagesrc: LeaguesUndertheSeaPhoto,
        pdfsrc: LeaguesUndertheSeahPdf,
        addedToCart: false,
    },
    {
        id: 'A3',
        title: 'A Princess of Mars',
        author: 'Edgar Rice Burroughs',
        price: 12,
        description: 'The first book in the Barsoom series, featuring John Carter on Mars.',
        imagesrc: PrincessOfMarsPhoto,
        pdfsrc: PrincessOfMarsPdf,
        addedToCart: false,
    },
    {
        id: 'A4',
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        price: 12,
        description: 'A tale of adventure and revenge set in post-Napoleonic France.',
        imagesrc: TheCountOfMonteCristoPhoto,
        pdfsrc: TheCountOfMonteCristoPdf,
        addedToCart: false,
    },
    {
        id: 'A5',
        title: 'The Mysterious Island',
        author: 'Jules Verne',
        price: 12,
        description: 'A novel about castaways on an uncharted island with many secrets.',
        imagesrc: TheMesteriousIslandPhoto,
        pdfsrc: TheMesteriousIslandPdf,
        addedToCart: false,
    },
    {
        id: 'Ch1',
        title: 'Alibi',
        author: 'Deirdre Gould',
        price: 12,
        description: 'A post-apocalyptic novel exploring life after a pandemic cure.',
        imagesrc: AlibiPhoto,
        pdfsrc: AlibiPdf,
        addedToCart: false,
    },
    {
        id: 'Ch2',
        title: 'Chess And Checker',
        author: 'Robert E. Howard',
        price: 12,
        description: 'A science fiction novel about a man transported to a barbaric planet.',
        imagesrc: ChessAndCheckerPhoto,
        pdfsrc: ChessAndCheckerPdf,
        addedToCart: false,
    },
    {
        id: 'Ch3',
        title: 'Jack Winter',
        author: 'Edgar Rice Burroughs',
        price: 12,
        description: 'An adventure novel about a journey to a prehistoric world at the center of the Earth.',
        imagesrc: JackWinterPhoto,
        pdfsrc: JackWinterPdf,
        addedToCart: false,
    },
    {
        id: 'Ch4',
        title: 'Things To Make',
        author: 'Murray Leinster',
        price: 12,
        description: 'A science fiction novel exploring first contact with alien species.',
        imagesrc: ThingsToMakePhoto,
        pdfsrc: ThingsToMakePdf,
        addedToCart: false,
    },
    {
        id: 'Ch5',
        title: 'What Shall We Do Now',
        author: 'H.G. Wells',
        price: 12,
        description: 'A novel about a scientist who discovers how to become invisible.',
        imagesrc: WhatShallWeDoNowPhoto,
        pdfsrc: WhatShallWeDoNowPdf,
        addedToCart: false,
    },
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
    {
        id: 'S1',
        title: 'After the Cure',
        author: 'Deirdre Gould',
        price: 12,
        description: 'A post-apocalyptic novel exploring life after a pandemic cure.',
        imagesrc: AfterTheCurePhoto,
        pdfsrc: AfterTheCurePdf,
        addedToCart: false,
    },
    {
        id: 'S2',
        title: 'Almuric',
        author: 'Robert E. Howard',
        price: 12,
        description: 'A science fiction novel about a man transported to a barbaric planet.',
        imagesrc: AlmuricPhoto,
        pdfsrc: AlmuricdPdf,
        addedToCart: false,
    },
    {
        id: 'S3',
        title: 'At the Earth\'s Core',
        author: 'Edgar Rice Burroughs',
        price: 12,
        description: 'An adventure novel about a journey to a prehistoric world at the center of the Earth.',
        imagesrc: AtTheEarthcorePhoto,
        pdfsrc: AtTheEarthcorePdf,
        addedToCart: false,
    },
    {
        id: 'S4',
        title: 'The Aliens',
        author: 'Murray Leinster',
        price: 12,
        description: 'A science fiction novel exploring first contact with alien species.',
        imagesrc: TheAliensPhoto,
        pdfsrc: TheAliensPdf,
        addedToCart: false,
    },
    {
        id: 'S5',
        title: 'The Invisible Man',
        author: 'H.G. Wells',
        price: 12,
        description: 'A novel about a scientist who discovers how to become invisible.',
        imagesrc: TheInvisibleManPhoto,
        pdfsrc: TheInvisibleMandPdf,
        addedToCart: false,
    },
];

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);

    const addToCart = (id, image, title, author, price, pdfsrc) => {
        setCarts((cart) => [
            ...cart,
            { id, image, title, author, price, pdfsrc, addedToCart: true },
        ]);
    };
    const removeCart = (id) => {
        setCarts((cart) => cart.filter((item) => item.id !== id));
    };

    const isProductInCart = (id) => {
        return carts.some((item) => item.id === id);
    };

    return (
        <BookContext.Provider value={{ carts, addToCart, removeCart, isProductInCart, allItems }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBook = () => {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error("useBook must be used within a BookProvider");
    }
    return context;
};
