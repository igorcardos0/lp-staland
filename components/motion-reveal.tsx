"use client"

import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Target,
  type Transition,
} from "framer-motion"
import { useRef, type ReactNode } from "react"

type RevealVariants = {
  hidden: Target
  visible: Target
}

const defaultVariants: RevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export type MotionRevealProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "children"
> & {
  children: ReactNode
  transition?: Transition
  /** Fraction of element visible (0–1) before triggering */
  amount?: number
  variants?: RevealVariants
}

/**
 * Scroll reveal consistent between SSR and hydration: first paint uses `hidden`;
 * `useInView` only updates after mount (avoids `whileInView` hydration issues).
 */
export function MotionReveal({
  children,
  className,
  transition = { duration: 0.6 },
  amount = 0.15,
  variants = defaultVariants,
  ...rest
}: MotionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants.hidden}
      animate={isInView ? variants.visible : variants.hidden}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
