import "@/App.css"

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
      className="text-Col1 text-3xl bg-Col4 hover:bg-Col5 p-3 rounded-3xl font-mono"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
    </button>
  );
}
