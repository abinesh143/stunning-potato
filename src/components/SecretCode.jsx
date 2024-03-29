import { useCallback, useEffect, useState } from "react";

const SecretCode = () => {
  const [randomId, setRandomId] = useState("");
  const [link, setLink] = useState("");

  const createRandom = () => {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    setRandomId(firstPart + secondPart);
  };

  const createSecretCode = async (id) => {
    if (id) {
      const requestBody = {
        secretCode: id,
        website: "",
        userEmail: "",
        downloadLink: link,
      };

      let res = await fetch("/api/applist", {
        method: "POST",
        body: JSON.stringify(requestBody),
      });

      if (res?.status == 200) {
        setRandomId("");
        setLink("")
        alert("created");
      }
    }
  };
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold capitalize">
            Create Secret Code
          </div>

          <p className="text-sm sm:text-lg xl:text-xl">
            06/02/2024,
            <span className="font-semibold">18:26 ⏰</span>
          </p>
        </div>
        <div className="flex justify-center">
          <div class="min-w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Create Secret Code
            </h5>
            <div className="my-2 text-lg">My Code - {randomId}</div>

            <div className="mb-4 my-2">
              <label
                for="andriod_apk"
                className="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Download Link:
              </label>
              <input
                type="text"
                id="andriod_apk"
                className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Andriod Download Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="flex justify-between my-6">
              <button
                type="button"
                class="inline-flex items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => createRandom()}
              >
                Random
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
              <button
                type="button"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => createSecretCode(randomId)}
              >
                Create
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
            <div className="flex justify-between mb-6">
              <a
                href={`https://www.googleapis.com/drive/v3/files/${link}?alt=media&key=AIzaSyAA9ERw-9LZVEohRYtCWka_TQc6oXmvcVU&supportsAllDrives=True`}
                class="focus:outline-none text-white text-center bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm w-full py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Testing
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SecretCode;
