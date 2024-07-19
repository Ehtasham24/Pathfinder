import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "../src/app/globals.css";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16 flex items-center">
      <Head>
        <title>About Us - Travello</title>
      </Head>
      <div className="container mx-auto px-6 text-gray-100 md:px-12 xl:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="lg:w-5/12">
            <Image
              src="/AboutUs.jpeg"
              alt="Travel Vlog Image"
              loading="lazy"
              width={500}
              height={500}
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="lg:w-7/12">
            <h2 className="text-4xl text-white font-bold md:text-5xl leading-tight mb-4">
              Discover the World with Travel Log App
            </h2>
            <p className="mt-6 text-gray-200 leading-relaxed">
              Welcome to <span className="font-semibold">Travello</span>, your
              ultimate platform for exploring the world's most breathtaking
              destinations. Our mission is to inspire and guide you through
              immersive video content, providing you with tips, insights, and
              stories that make every journey unforgettable.
            </p>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Founded by a passionate traveler and storyteller, our app brings
              you the most authentic travel experiences. From hidden gems to
              popular tourist spots, our vlogs cover a diverse range of
              destinations, offering something for every kind of traveler.
            </p>
            <p className="mt-4 text-gray-200 leading-relaxed">
              At <span className="font-semibold">Travel Log App</span>, we
              believe in the transformative power of travel. Our goal is not
              just to show you places but to connect you with cultures, people,
              and adventures that broaden your horizons and enrich your life.
            </p>
            <Link href="/" legacyBehavior>
              <a className="inline-block mt-8 px-8 py-3 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out shadow-lg transform hover:scale-105">
                Back to Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
