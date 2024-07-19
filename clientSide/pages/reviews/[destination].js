// pages/reviews/[destination].js

import React from "react";
import { useRouter } from "next/router";
import reviewers from "../../src/app/Components/Reviewers";
// import "../src/app/globals.css";

const Reviews = () => {
  const router = useRouter();
  const { destination } = router.query;

  // Find the reviews for the selected destination
  const destinationReviews = reviewers.map((reviewer) => ({
    name: reviewer.name,
    review: reviewer.destinations.find((dest) => dest.name === destination)
      ?.review,
  }));

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Reviews for {destination}
      </h1>
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {destinationReviews.map((review, index) => (
          <div key={index} className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              {review.name}
            </h2>
            <p className="text-gray-600 mt-2">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
