import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const images = [
  "https://media-hosting.imagekit.io/e7a6cc239e3f4d81/pexels-pixabay-356170.jpg?Expires=1840277715&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mBz89vNRxlwgHTsDitlw29xg6rY0JFAE3T-9iiSqnwk8Qw4JzFKvXVJdt1SR7vBZsH5HAzvr-EEmoqIr22pE2QAZ7KGzUJWWdqhfcHNMB8ESQCexRw6XPjhiNOBQPa31egCSDskZhXRkoP6qZ1BWqsPBUrKuydJlAe12au9IiKFv8vpsrEF~Bu8Oz5zXtzSAPRk8M9KNi6H~300dBEDEpyx1LnTEe-9QzVEokp6kkk2Gc9oy8XPg9vAlO7GEx1ukLmSoUnu7BovQPOOUPFxLGroxmpBSmqXPCD~7onHrCn21YWpAvLBcNk7a8KwLTkiLtOnPhopdHD0-F8wXKNkobg__",
  "https://media-hosting.imagekit.io/4a5bff28a50345cf/pexels-jmendezrf-1536619.jpg?Expires=1840277706&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W8X-J9YafS5GiQY8wwttL1m4m7ZNcRCT1ICGnOBcNCHxlS8e5ScCMEgZ5omBZYy5EYt4oRRM80p~8D08jVXYZVWL72HjLsmQSxe9bP7td5zugJbTGyO1H~9VNXfJj523ao8lgfWkOl~8FbeOywCLOefm9EN28y2VNItrGD6AWr2o8U2ys2QWndO4U5gpGu5Isgb63M-R~3dRhl8rvj85tAXIioAvJE26-eYVIA2G1SgWaP3UXNltSQzIHL6s~9gkt8uXDvHjoPBPcfejwrgy2nb~gSC1ZflM9yXcfZjH~CBRr~PdVx9IK-r1CGaeqIXPw9uJa1zNdCPVXq3fKzfNUg__",
  "https://media-hosting.imagekit.io/84f978d0c641418d/freestocks-_3Q3tsJ01nc-unsplash.jpg?Expires=1840277695&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1J7TE5NdSlSnxg6ynoaxV4q6cMK~19oGheSQi3DCcKbKAtNdIqwTAyhuj6SORgrTZcsiba-kpREIicjL5dQ2HJKIyUJLZAlZaCtwerHib4941GsDq4vX863TmjJj6PxsLhwBM6Hwr5hPXvm6YazFUhd54oxLNVO2XF7ttFO3ls7J5kqVR371Wo1cRC0ORrTTbt5cyU2trX6I2J1loWIbUahUCmRvD~YLN63Zban6bjba9OgCvoKz66uQ~BXNt-jM3Kw30KXJ8fo6QOv2l4185OTXGa0J5JWsXsU0dzU0VKvF4wD7GnnOobGYvhBlhhofueg2Wdu2~O943vIUibnFAA__"
];

const BackgroundSlider = () => {
  const bgRef = useRef();
  const nextBgRef = useRef();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!bgRef.current || !nextBgRef.current) return;

    bgRef.current.style.backgroundImage = `url(${images[0]})`;
    nextBgRef.current.style.backgroundImage = `url(${images[1]})`;

    let currentIndex = 0;

    const slideBackground = () => {
      gsap.to(nextBgRef.current, {
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => {
          bgRef.current.style.backgroundImage = nextBgRef.current.style.backgroundImage;
          nextBgRef.current.style.opacity = 0;

          currentIndex = (currentIndex + 1) % images.length;
          const afterNextIndex = (currentIndex + 1) % images.length;

          nextBgRef.current.style.backgroundImage = `url(${images[afterNextIndex]})`;

          setIndex(currentIndex); // optional
        }
      });
    };

    const interval = setInterval(slideBackground, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
      ></div>
      <div
        ref={nextBgRef}
        className="absolute inset-0 bg-cover bg-center opacity-0"
      ></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black opacity-80">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">New Collection 2025</h1>
        <h2 className="text-2xl md:text-4xl mb-4 drop-shadow-lg">Discover Your Perfect Style</h2>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md max-w-2xl">
          Explore our curated collection of premium fashion items designed to elevate your personal style.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default BackgroundSlider;
