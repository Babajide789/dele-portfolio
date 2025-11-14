"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // FIX: no effect needed, no hydration mismatch
  const [mounted] = useState(() => typeof window !== "undefined");

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Auto-hide on mobile
  const isMobile =
    mounted && window.innerWidth < 640;

  if (!mounted || isMobile) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.35, type: "spring", stiffness: 180 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle theme"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300 backdrop-blur-md bg-background/70 border-border"
          >
            <motion.div
              key={resolvedTheme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </motion.div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
