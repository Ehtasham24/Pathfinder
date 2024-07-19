// import React from "react";
// import Image from "next/image";
// import destinations from "../Data";

// const Blog = () => {
//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <main className="mt-10">
//         {destinations.map((blog, index) => (
//           <div key={index} className="mb-4 md:mb-0 w-full mx-auto relative">
//             <div className="px-4 lg:px-0">
//               <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
//                 {blog.destination}
//               </h2>
//               <a
//                 href="#"
//                 className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
//               >
//                 Explore More
//               </a>
//             </div>

//             {/* Gallery */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {blog.gallery.map((image, imgIndex) => (
//                 <img
//                   key={imgIndex}
//                   src={image}
//                   alt={blog.destination}
//                   className="w-full object-cover rounded-lg shadow-md"
//                 />
//               ))}
//             </div>

//             {/* Content and Pros/Cons */}
//             <div className="px-4 lg:px-0 mt-4 text-gray-700 text-lg leading-relaxed">
//               <p className="pb-6">{blog.content}</p>

//               {/* Pros and Cons */}
//               <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
//                 <h3 className="text-lg font-semibold mb-2">Pros:</h3>
//                 <ul className="list-disc pl-4">
//                   {blog.prosAndCons.pros.map((pro, proIndex) => (
//                     <li key={proIndex}>{pro}</li>
//                   ))}
//                 </ul>
//                 <h3 className="text-lg font-semibold mb-2 mt-4">Cons:</h3>
//                 <ul className="list-disc pl-4">
//                   {blog.prosAndCons.cons.map((con, conIndex) => (
//                     <li key={conIndex}>{con}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>

//       {/* Footer */}
//       <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
//         <div>
//           {/* <Image
//             src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
//             className="h-12 w-12"
//             alt="logo"
//           /> */}
//         </div>
//         <div className="flex flex-wrap">
//           <div className="w-full lg:w-2/5">
//             <p className="text-gray-600 hidden lg:block mt-4 p-0 lg:pr-12">
//               Boisterous he on understood attachment as entreaties ye
//               devonshire. In mile an form snug were been sell. Extremely ham any
//               his departure for contained curiosity defective. Way now
//               instrument had eat diminution melancholy expression sentiments
//               stimulated.
//             </p>
//           </div>

//           <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
//             <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
//             <ul>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Team
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   About us
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Press
//                 </a>{" "}
//               </li>
//             </ul>
//           </div>

//           <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
//             <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
//             <ul>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Blog
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Privacy Policy
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Terms & Conditions
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Documentation
//                 </a>{" "}
//               </li>
//             </ul>
//           </div>

//           <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
//             <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
//             <ul>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Team
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   About us
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Press
//                 </a>{" "}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Blog;

// Import from next/navigation instead of next/router
// ./src/app/Blog/Blog.js

// Import necessary dependencies
// "use client";
// import { useRouter } from "next/router";
// import destinations from "../Data";

// // Define Blog component
// const Blog = () => {
//   // Use useRouter to get access to route parameters
//   const router = useRouter();
//   const { id } = router.query;

//   // Find the blog data corresponding to the id
//   const blogData = destinations.find((destination) => destination.id === id);

//   // If blogData is not found, handle accordingly (e.g., show loading)
//   if (!blogData) {
//     return <div>Loading...</div>;
//   }

//   // Render blog details based on blogData
//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <main className="mt-10">
//         <div className="mb-4 md:mb-0 w-full mx-auto relative">
//           <div className="px-4 lg:px-0">
//             <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
//               {blogData.name}
//             </h2>
//             <a
//               href={blogData.map}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
//             >
//               Explore More
//             </a>
//           </div>

//           {/* Gallery */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {blogData.blog.gallery.map((image, imgIndex) => (
//               <img
//                 key={imgIndex}
//                 src={image}
//                 alt={blogData.name}
//                 className="w-full object-cover rounded-lg shadow-md"
//               />
//             ))}
//           </div>

//           {/* Content and Pros/Cons */}
//           <div className="px-4 lg:px-0 mt-4 text-gray-700 text-lg leading-relaxed">
//             <p className="pb-6 whitespace-pre-line">{blogData.blog.content}</p>

//             {/* Pros and Cons */}
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

// // Export the Blog component
// export default Blog;
