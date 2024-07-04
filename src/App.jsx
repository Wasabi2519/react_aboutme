import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState({});
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const req = require.context('./assets/images', false, /\.(png|jpe?g|svg)$/);
    const imageKeys = req.keys();
    const totalImages = imageKeys.length;

    let loadedImages = 0;
    const imagesObject = {};

    imageKeys.forEach((key) => {
      const img = new Image();
      img.src = req(key);
      img.onload = () => {
        loadedImages++;
        const imageName = key.replace('./', '').replace(/\.\w+$/, '');
        imagesObject[imageName] = img.src;
        setImages({ ...imagesObject });

        setLoadingProgress(Math.round((loadedImages / totalImages) * 100));

        if (loadedImages === totalImages) {
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }
      };
    });
  }, []);

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      {isLoading ? (
        <div className="fixed inset-0 bg-white flex flex-col justify-center items-center">
          <div className="text-2xl text-gray-600 mb-4">Loading...</div>
          <div className="w-64 bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-gray-600 h-2.5 rounded-full"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="text-gray-500 mt-2">{loadingProgress}%</div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-6"
                src={images.icon}
                alt="プロフィール写真"
              />
              <h1 className="text-3xl font-bold text-center mb-6">わさび</h1>

              <div className="flex justify-center space-x-4 mb-8">
                <a
                  className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full transition-colors duration-300 hover:bg-gray-200"
                  href="https://twitter.com/melt_wasabi"
                >
                  <img
                    className="h-5 w-5 mr-2"
                    src={images.X}
                    alt="X(Twitter)"
                  />
                  <span>@melt_wasabi</span>
                </a>
                <a
                  className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full transition-colors duration-300 hover:bg-gray-200"
                  href="https://www.instagram.com/melt_wasabi"
                >
                  <img
                    className="h-5 w-5 mr-2"
                    src={images.Instagram}
                    alt="Instagram"
                  />
                  <span>@melt_wasabi</span>
                </a>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  こんにちはー！！元ガジェ界のわさびです！<br />
                  このページは自己紹介ページです！！
                </p>

                <div>
                  <h2 className="text-xl font-semibold mb-2">趣味</h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>電車で大回り乗車をすること</li>
                    <li>寝ること</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">所有デバイス</h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Galaxy S23 Ultra (au運用)</li>
                    <li>iPhone 15 Pro (Rakuten運用)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;