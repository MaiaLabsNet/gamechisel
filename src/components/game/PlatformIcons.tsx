// PlatformIcons.tsx

// Imports
import Image from "next/image";
import SectionHeader from "../base/SectionHeader";

// PlatformData
const platforms = [
  { id: 1, name: "Android", icon: "/icons/android.svg" },
  { id: 2, name: "Apple", icon: "/icons/apple.svg" },
  { id: 3, name: "Windows", icon: "/icons/windows.svg" },
  { id: 4, name: "Linux", icon: "/icons/linux.svg" },
  { id: 5, name: "PlayStation", icon: "/icons/playstation.svg" },
  { id: 6, name: "Nintendo Switch", icon: "/icons/switch.svg" },
  { id: 7, name: "Xbox", icon: "/icons/xbox.svg" },
];

export default function PlatformIcons() {
  return (
    <section
      id="platforms"
      className="container contx conty relative w-full bg-cover bg-fixed"
    >
      <div className="text-white flex flex-col items-center justify-center">
        <SectionHeader
          title="All Downloads"
          subtitle="Platformen"
          description=""
        />
        <div>
          {/* Icons */}
          <div className="flex flex-wrap justify-center gap-8 bg-gray max-w-screen-lg mx-auto">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="max-h-16 max-w-16 w-20 h-20 p-4 bg-white rounded-full flex items-center justify-center"
              >
                <Image
                  src={platform.icon}
                  alt={platform.name}
                  width={32}
                  height={32}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
