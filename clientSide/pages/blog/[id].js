// "use client";
// import { useRouter } from "next/router";
// import destinations from "../../src/app/Data";
// import "../../src/app/globals.css";
// import Image from "next/image";
// import dynamic from "next/dynamic";

// // Dynamically import the MapComponent to avoid server-side rendering issues
// const MapComponent = dynamic(
//   () => import("../../src/app/thirdParty/MapComponent"),
//   {
//     ssr: false,
//   }
// );

// const Blog = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const blogData = destinations.find((destination) => destination.id === id);

//   if (!blogData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <main className="mt-10">
//         <div className="mb-4 md:mb-0 w-full mx-auto relative">
//           <div className="px-4 lg:px-0">
//             <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
//               {blogData.name}
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {blogData.blog.gallery.map((image, imgIndex) => (
//               <Image
//                 key={imgIndex}
//                 src={image}
//                 alt={blogData.name}
//                 className="w-full object-cover rounded-lg shadow-md"
//               />
//             ))}
//           </div>
//           <MapComponent
//             latitude={blogData.latitude}
//             longitude={blogData.longitude}
//           />

//           <div className="px-4 lg:px-0 mt-4 text-gray-700 text-lg leading-relaxed">
//             <p className="pb-6 whitespace-pre-line">{blogData.blog.content}</p>

//             <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
//               <h3 className="text-lg font-semibold mb-2">Pros:</h3>
//               <ul className="list-disc pl-4">
//                 {blogData.blog.prosAndCons.pros.map((pro, proIndex) => (
//                   <li key={proIndex}>{pro}</li>
//                 ))}
//               </ul>
//               <h3 className="text-lg font-semibold mb-2 mt-4">Cons:</h3>
//               <ul className="list-disc pl-4">
//                 {blogData.blog.prosAndCons.cons.map((con, conIndex) => (
//                   <li key={conIndex}>{con}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Blog;

"use client";
import { useRouter } from "next/router";
import destinations from "../../src/app/Data";
import "../../src/app/globals.css";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import the MapComponent to avoid server-side rendering issues
const MapComponent = dynamic(
  () => import("../../src/app/thirdParty/MapComponent"),
  {
    ssr: false,
  }
);

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;

  const blogData = destinations.find((destination) => destination.id === id);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: "antiquewhite" }}
    >
      <main className="mt-10">
        <div className="mb-8 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0 text-center mb-4">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              {blogData.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogData.blog.gallery.map((image, imgIndex) => (
              <Image
                key={imgIndex}
                src={image}
                alt={blogData.name}
                className="w-full object-cover rounded-lg shadow-md"
              />
            ))}
          </div>

          {/* Map Component Wrapper with styling */}
          <div className="my-6 p-4 rounded-lg shadow-lg">
            <MapComponent
              latitude={blogData.latitude}
              longitude={blogData.longitude}
            />
          </div>

          <div className="px-4 lg:px-0 mt-4 text-gray-700 text-lg leading-relaxed">
            <p className="pb-6 whitespace-pre-line">{blogData.blog.content}</p>

            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              <h3 className="text-lg font-semibold mb-2">Pros:</h3>
              <ul className="list-disc pl-4">
                {blogData.blog.prosAndCons.pros.map((pro, proIndex) => (
                  <li key={proIndex}>{pro}</li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold mb-2 mt-4">Cons:</h3>
              <ul className="list-disc pl-4">
                {blogData.blog.prosAndCons.cons.map((con, conIndex) => (
                  <li key={conIndex}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
