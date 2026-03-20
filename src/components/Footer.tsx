import logo from "@/assets/logo.jpg";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-white/80 py-12 px-5">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Morning Fuel" className="h-10 w-10 rounded-lg" />
        <div>
          <p className="font-bold text-white text-lg">Morning Fuel</p>
          <p className="text-xs text-white/50">Fuel Your Day</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <a href="https://wa.me/919106116932" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp">
          <MessageCircle className="w-5 h-5" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="mailto:morningfuel9@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
          <Mail className="w-5 h-5" />
        </a>
      </div>
      <p className="text-xs text-white/40">© {new Date().getFullYear()} Morning Fuel. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
