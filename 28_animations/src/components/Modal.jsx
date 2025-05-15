import { createPortal } from 'react-dom';
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
          open
          variants={{
              hidden: {
                  scale: 0,
                  opacity: 0,
              },
              visible: {
                  scale: 1,
                  opacity: 1,
              },
          }}
          className="modal"
          initial='hidden'
          animate='visible'
          exit='hidden'
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
