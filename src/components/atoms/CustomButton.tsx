import "../../App.css";

interface CustomButtonProps {
    children: string,
    onClick?: () => void;
}
export default function CustomButton({ children, onClick}: CustomButtonProps) {
    return (
        <button onClick={onClick} className="text-Col1 text-3xl bg-Col4 hover:bg-Col5 p-3 rounded-3xl font-mono font-bold tracking-wide">
            {children}
        </button>
    )
}
