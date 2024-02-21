import { useCallback, useEffect, useState } from "react";
import Loader from "./Loader";

const ReviewRequest = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResult = useCallback(async () => {
    const response = await fetch("/api/reviews", {
      method: "GET",
    });
    const data = await response.json();
    if (data.message != "Failed") {
      setReview(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchResult();
  }, [fetchResult]);
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold capitalize ">
            Review Request
          </div>

          <p className="text-sm sm:text-lg xl:text-xl">
            06/02/2024,
            <span className="font-semibold">18:26 ⏰</span>
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {review.map((rev, index) => (
              <div
                key={`review-${index}`}
                class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex items-center">
                  <svg
                    class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                  </svg>
                  <h5 class="mb-2 ml-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Need a {rev.appRating} Star Reviews?
                  </h5>
                </div>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Email: </span> {rev.userEmail}
                </p>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">AppLink: </span> {rev.appLink}
                </p>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Keywords: </span>{" "}
                  {rev.appKeywords}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ReviewRequest;
