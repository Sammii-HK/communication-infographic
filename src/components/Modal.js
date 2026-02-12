import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedItem, setSelectedItem, triggerRef }) => {
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  const handleClose = useCallback(() => {
    setSelectedItem(null);
    if (triggerRef && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [setSelectedItem, triggerRef]);

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, handleClose]);

  if (!selectedItem) return null;

  return (
    <motion.div
      className="modal is-active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className='modal-background' onClick={handleClose}></div>
      <motion.div
        className='modal-card'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <header className='modal-card-head'>
          <h3 className='modal-card-title' id="modal-title">{selectedItem.title}</h3>
          <p className='column'>{selectedItem.year}</p>
          <button
            className='delete'
            onClick={handleClose}
            aria-label='close'
            ref={closeButtonRef}
          />
        </header>
        <section className='modal-card-body'>
          {selectedItem.image && (
            <img src={selectedItem.image} alt={selectedItem.title} className="modal-image" />
          )}
          <p>{selectedItem.content}</p>
        </section>
        <footer className='modal-card-foot'>
          <p className={`column ${selectedItem.category}`}>{selectedItem.category}</p>
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
