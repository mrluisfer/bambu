import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "../../logo";

export function NavbarLogo() {
  return (
    <motion.div
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href="/" className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Logo width={24} height={24} />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
          Bambú
        </span>
      </Link>
    </motion.div>
  );
}
