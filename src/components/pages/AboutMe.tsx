import "@/App.css";
import Nuppu from "@/media/images/nuppu.jpg";
import AboutMeSlot from "../organisms/AboutMeSlot";

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center pt-6">
      <h1 className="text-6xl font-mono pb-6 text-Col5">Who am I?</h1>
      <div className="flex flex-col justify-center items-center gap-10 pb-20">
        <p className="text-5xl h-4">Mainly, I'm a software developer,</p>
        <p className="text-5xl h-4">but on the side I'm</p>
      </div>
      <div className="flex columns-3 gap-10">
        <AboutMeSlot title="A musician" picture={Nuppu} alt="Ukko playing the guitar"/>
        <AboutMeSlot title="An artist" picture={Nuppu} alt="Ukko drawing"/>
        <AboutMeSlot title='An "Athelete"' picture={Nuppu} alt="Ukko exercising"/>
      </div>
    </div>
  );
}
