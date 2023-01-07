import React from "react";
import linkedinIcon from "~/assets/linkedin.png";
import facebookIcon from "~/assets/facebook.png";
import instagramIcon from "~/assets/instagram.png";
import twitterIcon from "~/assets/twitter.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-50 transition duration-500">
        <img src={linkedinIcon} alt="linkedin" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-50 transition duration-500">
        <img src={facebookIcon} alt="facebook" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-50 transition duration-500">
        <img src={instagramIcon} alt="instagram" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-50 transition duration-500">
        <img src={twitterIcon} alt="twitter" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
