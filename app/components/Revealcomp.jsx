'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Revealcomp = ({ children, classes }) => {
    const ref = useRef(null)
    const isinview = useInView(ref)
    console.log(isinview);

    return (
        <motion.div ref={ref} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .4 }} className={`${classes}`}>
            {children}
        </motion.div>
    )
}

export default Revealcomp
