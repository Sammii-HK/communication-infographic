import classNames from "classnames";

// import styles from './submit-button.css';

// const cx = classNames.bind();

const Modal = ({selectedItem, setSelectedItem}) => {
  if (!selectedItem) return

  console.log("selectedItem", selectedItem);
  

  return (
    <div className={classNames({ 'modal': true, 'is-active': selectedItem })}>
      <div className='modal-background'></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <h3 className='modal-card-title'>{selectedItem.title}</h3>
          <p className='column'>{selectedItem.year}</p>
          <button
            className='delete'
            onClick={() => setSelectedItem(null)}
            aria-label='close'/>
        </header>
        <section className='modal-card-body'>
          <p>{selectedItem.content}</p>
        </section>
        <footer className='modal-card-foot'>
          <p className={`column ${selectedItem.category}`}>{selectedItem.category}</p>
        </footer>
      </div>
    </div>
  )
}

export default Modal;