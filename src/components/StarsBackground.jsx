import { useEffect, useState } from "react";

// Stars : id, size, x, y, opacity, animationDuration
// Meteors : id, size, x, y, delay, animationDuration

export const StarsBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
      generateStars();
      generateMeteors();

      // Regenerate stars and meteors on window resize
      const handleResize = () => {
        generateStars();
        generateMeteors();
      }

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const generateStars = () => {
      const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);    
      const newStars = []

      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1, //size between 1 and 4 pixels
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.5, //opacity between 0.5 and 1
          animationDuration: Math.random() * 4 + 2, //duration between 2 and 6 seconds
        });
      }

      setStars(newStars);
    }

    //Meteors

    const generateMeteors = () => {
      const numberOfMeteors = 4; // Fixed number of meteors for simplicity
      const newMeteors = []

      for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
          id: i,
          size: Math.random() * 2 + 1, //size between 1 and 4 pixels
          x: Math.random() * 100,
          y: Math.random() * 20,
          delay: Math.random() * 15, //delay between 0 and 15 seconds
          animationDuration: Math.random() * 3 + 3, //duration between 3 and 6 seconds
        });
      }

      setMeteors(newMeteors);
    }



  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div key={star.id} className="star animate-pulse-subtle"
        style={{
          width: `${star.size}px`,
          height: `${star.size}px`,
          left: `${star.x}%`,
          top: `${star.y}%`,
          opacity: star.opacity,
          animationDuration: `${star.animationDuration}s`,
        }}/>
        ))}

      {meteors.map((meteor) => (
        <div key={meteor.id} className="meteor animate-meteor"
        style={{
          width: `${meteor.size * 60}px`,
          height: `${meteor.size * 5}px`,
          left: `${meteor.x}%`,
          top: `${meteor.y}%`,
          animationDelay: `${meteor.delay}s`,
          animationDuration: `${meteor.animationDuration}s`,
        }}/>
        ))}
    </div> // Placeholder for the StarsBackground component
  );
};
