import Container from "./components/Container";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

export default function App() {
  return (
    <div className="bg-white max-w-[1920px] mx-auto rounded-3xl p-5 flex">
      <Navbar />
      <NavbarMobile />
      <Container />
    </div>
  );
}
