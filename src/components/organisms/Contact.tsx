import "@/App.css";

interface ContactProps {
  title: string;
  text: string;
}
export default function Contact({ title, text }: ContactProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl pb-2 ">{title}</h1>
      <h1 className="text-4xl">{text}</h1>
    </div>
  );
}
