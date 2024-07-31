import React from 'react';
import { Twitter, Instagram, Briefcase } from 'lucide-react';

const SelfIntroductionSite = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="profile-section text-center mb-8">
        <img
          src="/images/icon.png"
          alt="わさびのプロフィール写真"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/128?text=わさび";
          }}
        />
        <h1 className="text-3xl font-bold mb-2 animate-fade-in">わさび</h1>
        <p className="text-gray-600 mb-4 animate-fade-in animate-delay-100">
          Gadget / 大回り乗車 / ヤオコー愛好家
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in animate-delay-200">
          <SocialIcon href="https://twitter.com/melt_wasabi" icon={<Twitter size={24} />} label="Twitter" />
          <SocialIcon href="https://www.instagram.com/melt_wasabi" icon={<Instagram size={24} />} label="Instagram" />
          <SocialIcon href="https://portfolio.frontisland.jp/" icon={<Briefcase size={24} />} label="Portfolio" />
          {/* <SocialIcon href="#blog" icon={<Book size={24} />} label="Blog" />
          <SocialIcon href="mailto:yamada@example.com" icon={<Mail size={24} />} label="Contact" /> */}
        </div>
      </div>
      <div className="description-container bg-white p-6 rounded-lg shadow-md max-w-2xl w-full animate-fade-in animate-delay-300 mb-8">
        <h2 className="text-2xl font-semibold mb-4">自己紹介</h2>
        <p className="text-gray-700 leading-relaxed">
          こんにちはー！！元ガジェ界のわさびです！<br />
          このページは自己紹介ページです！！
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          最近はガジェットブームは去りつつ大回り乗車が趣味になりつつあります！！
        </p>
      </div>
      <div className="description-container bg-white p-6 rounded-lg shadow-md max-w-2xl w-full animate-fade-in animate-delay-300">
        <h2 className="text-2xl font-semibold mb-4">所有デバイス</h2>
        <ul className="text-gray-700 leading-relaxed list-disc pl-5">
          <li>Galaxy S23 Ultra (au運用)</li>
          <li>iPhone 15 Pro (Rakuten運用)</li>
        </ul>
      </div>
    </div>
  );
};

const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default SelfIntroductionSite;
