<<<<<<< HEAD
import React, { useEffect } from 'react';
import {FaCaretUp} from 'react-icons/fa6'

const BackToTop: React.FC = () => {
    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    useEffect(() => {
        const scrollButton: HTMLElement | null = document.getElementById("scrollBtn");
        const maxScroll: number = document.documentElement.scrollHeight - window.innerHeight;

        const scrollFunction = () => {
            const scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollPercentage: number = (scrollTop / maxScroll) * 100;

            // Adjust the opacity increase factor as needed
            const opacityIncreaseFactor: number = 1; // You can experiment with different values

            const newOpacity: number = Math.min(1, opacityIncreaseFactor * (scrollPercentage / 100));

            if (scrollButton) {
                scrollButton.style.opacity = newOpacity.toString();
            }
        };

        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    return (
            <div className="flex justify-center">
                <button id="scrollBtn" onClick={scrollToTop}>Back To Top <FaCaretUp /> </button>
            </div>
    );
};

export default BackToTop;
=======
import React, { useEffect } from 'react';
import {FaCaretUp} from 'react-icons/fa6'

const BackToTop: React.FC = () => {
    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    useEffect(() => {
        const scrollButton: HTMLElement | null = document.getElementById("scrollBtn");
        const maxScroll: number = document.documentElement.scrollHeight - window.innerHeight;

        const scrollFunction = () => {
            const scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollPercentage: number = (scrollTop / maxScroll) * 100;

            // Adjust the opacity increase factor as needed
            const opacityIncreaseFactor: number = 1; // You can experiment with different values

            const newOpacity: number = Math.min(1, opacityIncreaseFactor * (scrollPercentage / 100));

            if (scrollButton) {
                scrollButton.style.opacity = newOpacity.toString();
            }
        };

        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    return (
            <div className="flex justify-center">
                <button id="scrollBtn" onClick={scrollToTop}>Back To Top <FaCaretUp /> </button>
            </div>
    );
};

export default BackToTop;
>>>>>>> 4daf38508125158ea0a8131ecd7e180cc2054641
