import { useCallback, useEffect, useState } from "react";
import Loader from "./Loader";

const BuildRequest = () => {
  const [build, setBuild] = useState([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState({
    andriodApk: "",
    andriodAab: "",
    iosApk: "",
    iosAbb: "",
  });

  const submitBuildData = async (email) => {
    try {
      let res = await fetch("/api/publish", {
        method: "POST",
        body: JSON.stringify({ ...file, userEmail: email }),
      });

      if (res?.status == 200) {
        alert("done");
      }
    } catch (error) {}
  };

  const fetchResult = useCallback(async (quesId) => {
    const response = await fetch("/api/publish", {
      method: "GET",
    });
    const publish = await response.json();
    setLoading(false);
    setBuild(publish);
  }, []);

  useEffect(() => {
    fetchResult();
  }, [fetchResult]);
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold capitalize">
            App Build Request
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
            {build.map((b, index) => (
              <div
                key={`build-${index}`}
                class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {b.userEmail}
                </h5>
                <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Andriod - {b.andriodStatus} - {b.andriodReq ? "Want" : "None"}
                </h5>
                <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Ios - {b.iosStatus} - {b.iosReq ? "Want" : "None"}
                </h5>

                <div className="mb-4">
                  <label
                    for="andriod_apk"
                    className="block mb-2  font-medium text-gray-900 dark:text-white"
                  >
                    Andriod Apk -{b.andriodApk}
                  </label>
                  <input
                    type="text"
                    id="andriod_apk"
                    className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="andriod apk file"
                    onChange={(e) =>
                      setFile({ ...file, andriodApk: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="andriod_abb"
                    className="block mb-2  font-medium text-gray-900 dark:text-white"
                  >
                    Andriod Abb - {b.andriodAab}
                  </label>
                  <input
                    type="text"
                    id="andriod_abb"
                    className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="andriod abb file"
                    onChange={(e) =>
                      setFile({ ...file, andriodAab: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="ios_apk"
                    className="block mb-2  font-medium text-gray-900 dark:text-white"
                  >
                    Ios Apk -{b.iosApk}
                  </label>
                  <input
                    type="text"
                    id="ios_apk"
                    className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ios apk file"
                    onChange={(e) =>
                      setFile({ ...file, iosApk: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="ios_abb"
                    className="block mb-2  font-medium text-gray-900 dark:text-white"
                  >
                    Ios Abb {b.iosAbb}
                  </label>
                  <input
                    type="text"
                    id="ios_abb"
                    className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ios abb file"
                    onChange={(e) =>
                      setFile({ ...file, iosAbb: e.target.value })
                    }
                  />
                </div>

                <button
                  type="button"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => submitBuildData(b.userEmail)}
                >
                  Read more
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
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
export default BuildRequest;
