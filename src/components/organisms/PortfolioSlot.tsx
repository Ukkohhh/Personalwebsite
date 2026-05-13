import "@/App.css";
import Nuppu from "@/media/images/nuppu.jpg";

interface PortfolioSlotProps {
  title: string;
  description: string;
  tools: string;
  githubLink: string;
}
export default function PortfolioSlot({
  title,
  description,
  tools,
  githubLink,
}: PortfolioSlotProps) {
  return (
    <div className="flex columns-2 gap-8 border-4 border-Col5 rounded-3xl p-6">
      <img src={Nuppu} className="h-128 w-128 rounded-2xl" />
      <div className="flex flex-col">
        <h1 className="text-4xl pb-12 text-Col5 font-mono">{title}</h1>
        <p className="text-2xl w-80 h-60 font-mono">{description}</p>
        <p className="text-2xl w-80 font-mono">Built with:</p>
        <p className="text-2xl w-80 h-30 font-mono">{tools}</p>
        <a
          className="text-2xl text-Col4 hover:text-Col5 font-mono"
          href={githubLink}
        >
          Github
        </a>
      </div>
    </div>
  );
}
