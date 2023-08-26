import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
       <div>
        <button className="cursor-pointer underline" onClick={() => setIsVisible(false)}>
          Hide
        </button>
        <p>{description}</p>
        </div>
      ) : (
        <button className="cursor-pointer underline" onClick={() => setIsVisible(true)}>
          Show
        </button>
      )}
      
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("team");

  const handleSectionToggle = (sectionName) => {
    if (visibleSection === sectionName) {
      setVisibleSection(null); // Toggle off if clicking the active section again
    } else {
      setVisibleSection(sectionName);
    }
  };

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham "
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => handleSectionToggle("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham "
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => handleSectionToggle("team")}
      />
      <Section
        title={"Careers"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham "
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={() => handleSectionToggle("careers")}
      />
    </div>
  );
};

export default Instamart;
