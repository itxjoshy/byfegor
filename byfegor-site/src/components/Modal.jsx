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
              <h2>{selectedProduct.title}</h2>
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <div className="product-description">
              <p>{selectedProduct.description}</p>
              <p>Price: N{selectedProduct.price}</p>
              <button>Order On Whatsapp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
