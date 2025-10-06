import { motion } from 'framer-motion';
import { Wrench, Heart, Clock } from 'lucide-react';

/**
 * MaintenancePage component displays a maintenance message when the website is under maintenance.
 * 
 * Features:
 * - Animated maintenance message
 * - Contact information display
 * - Heart animation to maintain wedding theme
 * - Responsive design
 * 
 * @component
 * @example
 * <MaintenancePage />
 */
function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full text-center"
      >
        {/* Maintenance Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative">
            <Wrench className="w-16 h-16 text-rose-400 mx-auto" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2"
            >
              <Clock className="w-6 h-6 text-rose-300" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Sedang Diperbaiki
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          Website undangan pernikahan kami sedang dalam perawatan untuk memberikan pengalaman terbaik.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="bg-white/50 backdrop-blur-sm rounded-lg p-4 mb-6"
        >
          <p className="text-sm text-gray-700">
            Untuk informasi lebih lanjut, silakan hubungi:
          </p>
          <p className="font-semibold text-rose-600 mt-1">
            +62-xxx-xxx-xxxx
          </p>
        </motion.div>

        {/* Animated Hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-6 h-6 text-rose-400 fill-current" />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="text-xs text-gray-500 mt-6"
        >
          Terima kasih atas pengertian Anda
        </motion.p>
      </motion.div>
    </div>
  );
}

export default MaintenancePage;
