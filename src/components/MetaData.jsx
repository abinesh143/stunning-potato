import { useCallback, useEffect, useState } from "react";
import Loader from "./Loader";

const MetaData = () => {
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResult = useCallback(async () => {
    const response = await fetch("/api/metadata", {
      method: "GET",
    });
    const data = await response.json();
    if (data.message != "Failed") {
      setMeta(data);
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
            App Meta Data
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
          <div className="grid grid-cols-2 gap-6">
            {meta.map((m, index) => (
              <div
                key={`meta-${index}`}
                class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    User : {m.userEmail}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">App Name :</span>{" "}
                  {m?.appInfo?.appName || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Package Name :</span>{" "}
                  {m?.appInfo?.packageName || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Website :</span>{" "}
                  {m?.appInfo?.website || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">App Icon : </span>
                  {m?.appInfo?.appIcon || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Theme Color :</span>{" "}
                  {m?.appDesign?.themeColor || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Custom Color :</span>{" "}
                  {m?.appDesign?.custom || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Splash Screen : </span>
                  {m?.appDesign?.splashScreen || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">NavLink :</span>{" "}
                  {m?.appSetting?.showMessage ? "show" : "hide"}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">NavLink 1:</span>{" "}
                  {m?.appSetting?.navLink1 || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">NavLink 2:</span>{" "}
                  {m?.appSetting?.navLink2 || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">NavLink 3:</span>{" "}
                  {m?.appSetting?.navLink3 || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">One Signal Id:</span>{" "}
                  {m?.appNotification?.oneSignalId || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Admob App Id:</span>{" "}
                  {m?.appAds?.admobAppId || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Admob Banner Id:</span>{" "}
                  {m?.appAds?.admobBannerId || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Admob FullScreen Id:</span>{" "}
                  {m?.appAds?.admobInterstitialId || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Unity Game Id:</span>{" "}
                  {m?.appAds?.unityGameId || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Unity Banner Id:</span>{" "}
                  {m?.appAds?.unityBannerId || ""}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Unity FullScreen Id:</span>{" "}
                  {m?.appAds?.unityInterstitialId || ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MetaData;
