import Image from "next/image";
import { THero } from "../constants/type";
import TextLoop from "./TextLoop";
import ImageCircle from "./ImageCirce";

type HeroProps = {
  hero: THero;
};

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Container for Text and Image */}
      <div className="relative container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center pb-5  justify-center lg:justify-between h-full lg:space-y-10">
        {/* Text Content (Left Side) */}
        <div className="lg:w-3/4 w-full text-left bg-black bg-opacity-30  p-4 rounded-lg shadow-lg backdrop-blur-sm order-2 lg:order-1">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2 lg:mb-6 leading-tight drop-shadow-lg">
            {hero.name}
          </h1>
          <div className="text-lg md:text-xl drop-shadow-md">
            <TextLoop skills={hero.skills}/>
          </div>
          <p className="text md:text-xl drop-shadow-md lg:mt-4">
            {hero.description}
          </p>
        </div>
        <ImageCircle />

        {/* <div className="lg:w-1/2 w-full flex justify-center items-center sm:px-4 lg:px-4 rder-1 lg:order-2">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-xl overflow-hidden shadow-xl border-2 border-white">
            <Image
              src={hero.profileImage.src}
              alt={hero.profileImage.alt}
              width={500} // Decreased width
              height={0} // Keeps aspect ratio
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
