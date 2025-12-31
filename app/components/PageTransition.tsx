"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    )
}