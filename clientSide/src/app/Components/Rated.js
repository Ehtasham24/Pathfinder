import React from "react";
import Image from "next/image";
import destinations from "../Data";
// import Link from "next/link";

const Rated = () => {
  const sortedDestinations = destinations.sort((a, b) => b.rating - a.rating);

  return (
    <section className="my-10">
      <h1 className="text-3xl font-bold text-gray-600 mb-10">
        Top Rated Destinations
      </h1>
      <div className="flex overflow-x-auto space-x-6">
        {sortedDestinations.map((destination) => (
          <div
            key={destination.name}
            className="relative w-64 h-64 rounded-lg flex-shrink-0 overflow-hidden"
          >
            <Image
              src={destination.image}
              alt="Gallery Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="text-lg font-semibold text-white">
                {destination.name}
              </h3>
              <p className="text-sm text-gray-300">{destination.destination}</p>
              <p className="text-sm text-yellow-400">
                {destination.rating.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rated;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import reviewers from "../Components/Reviewers"; // Import reviewers data

// const Rated = () => {
//   // Calculate average rating for a specific destination
//   const calculateAverageRating = (destinationName) => {
//     let totalRating = 0;
//     let totalCount = 0;

//     reviewers.forEach((reviewer) => {
//       if (reviewer.destinations[destinationName]) {
//         totalRating += reviewer.destinations[destinationName].rating;
//         totalCount++;
//       }
//     });

//     if (totalCount === 0) return 0; // Avoid division by zero

//     return totalRating / totalCount;
//   };

//   // Sort destinations by average rating
//   const sortedDestinations = Object.keys(reviewers[0].destinations) // Assuming all reviewers have the same destinations
//     .map((destinationName) => ({
//       name: destinationName,
//       rating: calculateAverageRating(destinationName),
//       image: `/images/${destinationName.toLowerCase().replace(/\s/g, "")}.jpg`, // Assuming images follow this pattern
//     }))
//     .sort((a, b) => b.rating - a.rating);

//   return (
//     <section className="my-10">
//       <h1 className="text-3xl font-bold text-gray-600 mb-10">
//         Top Rated Destinations
//       </h1>
//       <div className="flex overflow-x-auto space-x-6">
//         {sortedDestinations.map((destination) => (
//           <Link key={destination.name} href={`/reviews/${destination.name}`}>
//             <div
//               key={destination.name}
//               className="relative w-64 h-64 rounded-lg flex-shrink-0 overflow-hidden"
//             >
//               <Image
//                 src={destination.image}
//                 alt="Gallery Image"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
//                 <h3 className="text-lg font-semibold text-white">
//                   {destination.name}
//                 </h3>
//                 <p className="text-sm text-yellow-400">
//                   {destination.rating.toFixed(1)} (Avg Rating)
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Rated;
