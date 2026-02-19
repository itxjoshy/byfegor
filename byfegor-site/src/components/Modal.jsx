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
                    `https://wa.me/2348132118998?text=${encodeURIComponent(
                      `Hello, I'm interested in the ${selectedProduct.title}.
I found it on your website and would love to place an order.`,
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
