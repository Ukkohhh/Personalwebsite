import "@/App.css"
import CustomButton from "../atoms/CustomButton";

interface NavBarButtonProps {
  children: string;
}
export default function NavBarButton({ children }: NavBarButtonProps) {
  return (
    <div>
      <CustomButton width={190} height={100}>
        {children}
      </CustomButton>
    </div>
  );
}
