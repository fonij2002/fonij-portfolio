import { Header } from "@/components";
import { ChatBoxForm } from "@/components/ui/custom";
import { SocialLinks } from "@/components/ui/custom/SocialLinks";
import { motion, useReducedMotion } from "framer-motion";

import { HeroBackground } from "./HeroBackground";

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-dvh w-full flex-col overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <HeroBackground />

      <div className="relative z-20 shrink-0">
        <Header />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center justify-center py-8 sm:py-10">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.02 }}
            className="mb-6 sm:mb-8"
          >
            <img
              src={`${import.meta.env.BASE_URL}profile_image.png`}
              alt="Foroozan"
              width={112}
              height={112}
              className="size-20 rounded-[1.6rem] object-cover shadow-lg shadow-black/20 sm:size-28 sm:rounded-[2rem]"
            />
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Hi! I&apos;m Foroozan, a Product Engineer.
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-base leading-7 text-neutral-300 sm:mt-6 sm:text-lg"
          >
            Exploring the art of building in Business, in Thought, in Life.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 w-full rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:mt-10 sm:rounded-[2rem] sm:p-6"
          >
            <ChatBoxForm />
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 sm:mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
