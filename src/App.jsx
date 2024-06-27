import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const splashTextRef = useRef(null);
  const [images, setImages] = useState({});
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const req = require.context('./assets/images', false, /\.(png|jpe?g|svg)$/);
    const imageKeys = req.keys();
    const totalImages = imageKeys.length;

    let loadedImages = 0;
    const imagesObject = {};

    const bar = new ProgressBar.Line(splashTextRef.current, {
      easing: 'easeInOut',
      duration: 1000,
      strokeWidth: 0.2,
      color: '#555',
      trailWidth: 0.2,
      trailColor: '#bbb',
      text: {
        style: {
          position: 'absolute',
          left: '50%',
          top: '40px',
          padding: '0',
          margin: '0',
          transform: 'translateX(-50%)',
          fontSize: '1rem',
          color: '#555',
          display: 'inline-block',
          whiteSpace: 'nowrap',
        },
        autoStyleContainer: false,
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      },
    });

    imageKeys.forEach((key) => {
      const img = new Image();
      img.src = req(key);
      img.onload = () => {
        loadedImages++;
        const imageName = key.replace('./', '').replace(/\.\w+$/, '');
        imagesObject[imageName] = img.src;
        setImages({ ...imagesObject });

        setLoadingProgress(Math.round((loadedImages / totalImages) * 100));
        bar.set(loadedImages / totalImages);

        if (loadedImages === totalImages) {
          bar.animate(1.0, () => {
            setTimeout(() => {
              setIsLoading(false);
            }, 500);
          });
        }
      };
    });
  }, []);

  return (
    <div className="bg-gray-200 font-sans">
      {isLoading && (
        <div
          id="loader"
          className="fixed top-0 left-0 w-full h-full bg-gray-100 flex justify-center items-center flex-col z-50"
        >
          <div ref={splashTextRef} className="progress-container text-xl text-gray-600 mb-4" />
        </div>
      )}

      {!isLoading && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="header text-center py-8">
            <img
              className="w-36 h-36 rounded-full mx-auto"
              src={images.icon}
              alt="プロフィール写真"
            />
            <h1 className="text-4xl mt-2">わさび</h1>

            <ul className="flex justify-center space-x-4 mt-4">
              <li>
                <a
                  className="inline-flex items-center px-6 py-3 bg-white rounded-full cursor-pointer transition-colors duration-300 hover:bg-black-500 hover:text-white exampleClass"
                  href="https://twitter.com/melt_wasabi"
                >
                  <img
                    className="h-6 w-6 mr-2"
                    src={images.X}
                    alt="X(Twitter)"
                  />
                  <span>@melt_wasabi</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center px-6 py-3 bg-white rounded-full cursor-pointer transition-colors duration-300 hover:bg-black-500 hover:text-white exampleClass"
                  href="https://www.instagram.com/melt_wasabi"
                >
                  <img
                    className="h-6 w-6 mr-2"
                    src={images.Instagram}
                    alt="Instagram"
                  />
                  <span>@melt_wasabi</span>
                </a>
              </li>
            </ul>

            <div className="mt-4 bg-white p-6 rounded shadow">
              <p className="text-lg leading-relaxed text-left">
                こんにちはー！！元ガジェ界のわさびです！<br />
                このページは自己紹介ページです！！
              </p>
              <br />
              <p className="text-lg leading-relaxed text-left">【趣味】</p>
              <ul className="list-disc list-inside text-left">
                <li>電車で大回り乗車をすること</li>
                <li>寝ること</li>
              </ul>
            </div>

            <div className="mt-4 bg-white p-6 rounded shadow">
              <p className="text-lg leading-relaxed text-left">【所有デバイス】</p>
              <ul className="list-disc list-inside text-left">
                <li>Galaxy S23 Ultra (au運用)</li>
                <li>iPhone 15 Pro (Rakuten運用)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
