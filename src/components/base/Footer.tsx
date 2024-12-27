// Footer.tsx

// Imports
import { title } from "@/index";

// Get Current Year
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="footer" className="container contx conty pt-20">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-white py-6">
        <p className="text-left">
          &copy; {CURRENT_YEAR} {title}. All rights reserved.
        </p>
        <a href="/legal" className="link">
          Legal Information
        </a>
      </div>
    </footer>
  );
}

export default Footer;
