import "@/App.css";
import PortfolioSlot from "../organisms/PortfolioSlot";

const loremDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut laborum magni";
export default function Portfolio() {
  return (
    <div>
      <h1 className="flex justify-center item-center text-Col5 font-mono pb-12 pt-6 text-6xl">
        Portfolio
      </h1>

      <div className="flex justify-center items-center columns-2 gap-12">
        <PortfolioSlot
          title="Personal website"
          description="Personal website for showing my code and art, seems familiar dont it?"
          tools="React, Tailwind"
          githubLink="https://github.com/Ukkohhh/Personalwebsite"
        />
        <PortfolioSlot
          title="Wedecap"
          description="A weather dependent calendar app, plan your outdoor activities to the weather needs!"
          tools="React, Express"
          githubLink="https://github.com/Ukkohhh/wedacap"
        />
      </div>
    </div>
  );
}
