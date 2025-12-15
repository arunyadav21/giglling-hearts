import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Navbar always visible */}
      <Navbar />

      {/* Main content area */}
      <main className="'flex-grow' pt-20">
        <Outlet /> {/* Page content here */}
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
