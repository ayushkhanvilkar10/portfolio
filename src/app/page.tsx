import Image from "next/image";
import TypingText from "@/components/TypingText";

export default function Home() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
        <div className="flex-1">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: '"Cormorant", serif',
              fontWeight: 500,
            }}
          >
            <TypingText text="Hello! I am Ayush" speed={80} />
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/ganpati-visarjan.png"
            alt="Ganpati Visarjan"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
