// Footer.tsx

import { title } from "@/index";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="my-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-white py-6 md:justify-between">
          <p className="text text-left text-low unselectable">
            &copy; {CURRENT_YEAR} {title}. All rights reserved.
          </p>
          <a href="/legal" className="link">
            Legal Information
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
