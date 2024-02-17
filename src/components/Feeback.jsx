import { useCallback, useEffect, useState } from "react";
import Loader from "./Loader";

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResult = useCallback(async () => {
    const response = await fetch("/api/feedback", {
      method: "GET",
    });
    const feed = await response.json();
    setFeedback(feed);
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
            Feedback Details
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
            {feedback.map((feed, index) => (
              <div
                key={`feedback-${index}`}
                class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {feed.fullName} - {feed.userEmail}
                </h5>
                <div className="my-2 text-lg">{feed.subject}</div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {feed.description}
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Done
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Feedback;
