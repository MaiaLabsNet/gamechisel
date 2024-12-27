// GameSection.tsx

// Imports
import PlatformIcons from "./PlatformIcons";
import DownloadButtons from "./DownloadButtons";

export default function GameSection() {
  return (
    <section
      id="game"
      className="relative w-full bg-cover bg-fixed"
      style={{
        backgroundImage: 'url("/images/stock/background2.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh", // Ensure full-screen height
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container contx conty flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <DownloadButtons />
          <PlatformIcons />
        </div>
      </div>
    </section>
  );
}
