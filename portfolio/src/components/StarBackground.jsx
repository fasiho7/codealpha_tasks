import { useState, useEffect } from "react";

export const StarBackground = () => {
    const [starts, setstars] = useState([]);
    const [meteors, setmeteors] = useState([]);

    useEffect(() => {
        generateStar();
        generateMeteors();

        const handleresize = () => {
            generateStar();
        };

window.addEventListener('resize', handleresize)
return () =>{
   window.removeEventListener('resize', handleresize) ;
}
    }, []);

    const generateStar = () => {
        const numberstar = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        const newStar = [];

        for (let i = 0; i < numberstar; i++) {
            newStar.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setstars(newStar);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                opacity: Math.random() * 0.15 + 0.05,
                animationDuration: Math.random() * 3 + 3,
                delay: Math.random() * 5 + "s",
            });
        }
        setmeteors(newMeteors);
    };



    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {starts.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle absolute"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteors) => (
                <div
                    key={meteors.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteors.size * 75 + "px",
                        height: meteors.size + "px",
                        left: meteors.x + "%",
                        top: meteors.y + "%",
                        animationDelay: meteors.delay,
                        animationDuration: meteors.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};