import Container from "./components/Container";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-white max-w-[1920px] mx-auto rounded-3xl p-5 flex">
      <Navbar />
      <Container />
    </div>
  );
}
