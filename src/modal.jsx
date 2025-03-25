function Modal({ closeModal }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>Hello, it's modal!</p>
                
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
