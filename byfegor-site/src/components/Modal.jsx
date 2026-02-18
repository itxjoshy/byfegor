import React from "react";
import "./modal.css";
function Modal({ modalopen, setIsModalOpen, selectedProduct }) {
  return (
    <div
      className={`modal-container ${modalopen ? "open" : ""}`}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {selectedProduct && (
          <>
            <div className="image">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <div className="product-description">
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.description}</p>
              <p>{selectedProduct.color}</p>
              <button>Order On Whatsapp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
