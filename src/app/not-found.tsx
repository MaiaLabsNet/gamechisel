// NotFound.tsx

// Imports
import Link from "next/link";

export default function NotFound() {
  const returnButton = "/";

  return (
    <section id="not-found">
      <div
        className="relative w-full bg-cover bg-fixed"
        style={{
          backgroundImage: 'url("/images/stock/background1.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="container contx conty">
          <div className="flex justify-center items-center h-[80vh] text-center">
            <div className="flex flex-col items-center justify-center mb-32">
              <div>
                <p className="font-bold text-6xl">404.</p>
                <p className="font-bold text-4xl">Page not found!</p>
              </div>
              <Link
                className="mt-8 px-6 font-bold text-2xl hover:scale-110 transition-transform duration-300 ease-in-out"
                href={returnButton}
              >
                &larr; Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
