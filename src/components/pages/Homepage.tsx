import "@/App.css";
import omakuva from "@/media/images/omakuva.jpg";
import Contact from "../organisms/Contact";

export default function Homepage() {
  return (
    <div className=" flex flex-col justify-center ">
      <div className="flex columns-2 gap-20 justify-center items-center pb-6 pt-6">
        <div>
          <h1 className=" p-4 text-7xl font-mono text-Col5">Hey, I'm Ukko!</h1>
          <h1 className=" p-4 text-6sxl font-mono">
            I'm a Software developer from Helsinki.
          </h1>
        </div>
        <img
          className="aspect-square w-lg h-lg object-cover rounded-full "
          src={omakuva}
          alt="Ukko"
        />
      </div>
      <div className="flex flex-col  justify-center items-center">
        <h1 className="font-mono pb-6 text-Col5 text-5xl">Contact information</h1>
        <div className="flex columns-2 gap-10">
          <Contact title="Email" text="ukkoryynanen@gmail.com"/>
          <Contact title="Phone" text="+358 40 9360 780"/>
        </div>
      </div>
    </div>
  );
}
