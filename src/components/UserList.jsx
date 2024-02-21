import { useCallback, useEffect, useState } from "react";
import Loader from "./Loader";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResult = useCallback(async () => {
    const response = await fetch("/api/userlist", {
      method: "GET",
    });
    const data = await response.json();
    if (data.message != 'Failed') {
      setUser(data)
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
            User List
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
            {user?.map((u, index) => (
              <div
                key={`user-${index}`}
                class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Name</span> : {u.fullName}
                  {u.isPremium ? (
                    <span class="bg-green-100 text-green-800 text-sm font-medium mx-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      Premium - {u.amount}
                    </span>
                  ) : null}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Email</span> :{u.userEmail}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Phone</span> : {u.phoneNumber}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Country</span> :{" "}
                  {u.userCountry}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default UserList;
