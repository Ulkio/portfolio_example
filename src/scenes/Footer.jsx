import React from "react";
import SocialMediaIcons from "@components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-fit bg-blue pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-roboto font-semibold text-2xl text-yellow">Ulkio</p>
          <p className="font-roboto font-semibold text-md text-yellow">©2023 ULKIO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
