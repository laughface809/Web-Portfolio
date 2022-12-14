import React from 'react'
import { Header, Modal, ContactForm, Footer } from './'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

export const Layout = ({ children, page, location }) => {
  return (
    <motion.div className="layout">
      <Header />
      <AnimatePresence
        exitBeforeEnter
        // initial={false}
        // onExitComplete={() => {
        //   if (typeof window !== 'undefined') {
        //     window.scrollTo({ top: 0 })
        //   }
        // }}
      >
        <main key={location.pathname} className={cn('main', [page])}>
          {children}
        </main>
      </AnimatePresence>
      <Footer />

      <Modal name="modal-cv" className="max-w-3xl">
        <a target="_blank" href="/Portfolio.pdf" className="cursor-zoom-in">
          <img className="" src="/CV.png" alt="" />
        </a>
      </Modal>

      <Modal name="modal-contact">
        <h2 className="text-4xl text-gray-600 text-center font-akaya font-extrabold tracking-wider">
          Write me something
          <span className="text-3xl block w-full"> coool 😜</span>
        </h2>
        <ContactForm className="pt-2" btnFull />
      </Modal>
    </motion.div>
  )
}
