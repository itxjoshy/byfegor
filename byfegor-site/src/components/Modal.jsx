import "./modal.css";
function Modal({ modalopen, setIsModalOpen, selectedProduct }) {
  return (
    <div
      className={`modal-container ${modalopen ? "open" : ""}`}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setIsModalOpen(false)}>
          <span className="close-icon">&times;</span>
        </button>
        {selectedProduct && (
          <>
            <div className="image">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <div className="product-description">
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.description}</p>
              <p>{selectedProduct.color}</p>
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/23480120195744?text=${encodeURIComponent(
                      `Hello, I want to order the ${product.title}, can I get more information please?`,
                    )}`,
                    "_blank",
                  )
                }
              >
                Order On Whatsapp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
