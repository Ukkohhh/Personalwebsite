import "@/App.css"
interface AboutMeSlotProps {
    title: string,
    alt: string,
    picture: string
}
export default function AboutMeSlot({title, alt, picture}: AboutMeSlotProps) {
    return (
        <div className="flex  flex-col justify-center items-center">
          <h1 className="text-4xl font-mono pb-3">{title}</h1>
          <img className="w-lg h-lg rounded-4xl" 
          src={picture} 
          alt={alt}/>
        </div>
    )
}