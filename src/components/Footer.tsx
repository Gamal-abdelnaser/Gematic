import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-border section-dark">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()}</span>
            <span className="gradient-text font-semibold">Gematic</span>
            <span className="hidden sm:inline"> Built with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive hidden sm:inline" />
            {/* <span className="hidden sm:inline">using React & Tailwind</span> */}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            {[
              { icon: <FaGithub size={20} />, href: 'https://www.linkedin.com/in/gamal-abdelnaser-2b9b38311/', label: 'GitHub' },
              { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/gematic2/', label: 'intagram' },
              // { icon: <Mail size={30} />, href: 'alawljmal9@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white text-foreground hover:bg-secondary/80 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          {/* Back to Top */}
          {/* <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
