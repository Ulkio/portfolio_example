import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ visiblePage, selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow 
  before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7 ">
      <AnchorLink
        className={`${visiblePage === "accueil" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href="#accueil"
        onClick={() => setSelectedPage("accueil")}
      />
      <AnchorLink
        className={`${visiblePage === "compétences" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href="#compétences"
        onClick={() => setSelectedPage("compétences")}
      />
      <AnchorLink
        className={`${visiblePage === "projets" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href="#projets"
        onClick={() => setSelectedPage("projets")}
      />
      <AnchorLink
        className={`${visiblePage === "témoignages" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href="#témoignages"
        onClick={() => setSelectedPage("témoignages")}
      />
      <AnchorLink
        className={`${visiblePage === "contact" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
