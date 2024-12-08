import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col w-full">
      {/* Top banner */}
      {/* <div className="bg-white text-center py-3 px-4 border-b">
        <h1 className="text-base md:text-lg font-medium mb-1">Hello Nike App</h1>
        <p className="text-sm md:text-base">
          Download the app to access everything Nike.{" "}
          <Link href="#" className="underline font-medium">
            Get Your Great
          </Link>
        </p>
      </div> */}

      {/* Hero section */}
      {/* <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] bg-gradient-to-br from-blue-50 to-white overflow-hidden">
     
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/hero.png" 
            alt="Nike Air Max Sneaker"
            fill
            className="object-contain"
            priority
          />
        </div> */}

      
        {/* Bottom logos */}
        <div className="absolute bottom-4 w-full px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-4 sm:space-y-0">
          {/* Left side logos */}
          {/* <div className="flex gap-2 sm:gap-4">
            <div className="h-4 w-4 sm:h-6 sm:w-6 bg-white/80 rounded-full" />
            <div className="h-4 w-4 sm:h-6 sm:w-6 bg-white/80 rounded-full" />
            <div className="h-4 w-4 sm:h-6 sm:w-6 bg-white/80 rounded-full" />
          </div> */}

          {/* Right side text */}
          {/* <p className="text-xs sm:text-sm text-gray-600">Step into greatness.</p> */}
        </div>
      
    </div>
  );
}
