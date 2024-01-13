import { Inter } from "next/font/google";
import ColorPicker from "./component/ColorPicker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-center pt-5 text-lg">React Color Picker App </h1>
      <ColorPicker />
    </>
  );
}
