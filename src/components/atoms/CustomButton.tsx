import "@/App.css";

interface CustomButtonProps {
  children: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}
export default function CustomButton({
  children,
  width,
  height,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-Col1 text-3xl bg-Col2 hover:underline font-mono flex justify-center items-center"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
    </button>
  );
}
