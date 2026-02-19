import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import "./collection.css";
import image1 from "../collection-images/c-i-1.jpg";
import image2 from "../collection-images/c-i-2.jpg";
import image3 from "../collection-images/c-i-3.jpg";
import image4 from "../collection-images/c-i-4.jpg";

const catalougeItems = [
  {
    id: 1,
    title: "IMPERIA SET",
    description:
      " A statement set adorned with stones from top to bottom. Designed to shimmer with every movement, IMPERIA is pure luxury and an undeniable attraction wherever you go.",
    color: "Available in wide range of colors",
    image: image1,
  },
  {
    id: 2,
    title: "KIM",
    description:
      " The perfect summer dress for summer girls. A flared dress adorned with delicate 3D flowers. Simple, yet effortlessly chic . Can be made long and short . Made to fit all sizes",
    color: "Available in wide range of colors",

    image: image2,
  },
  {
    id: 3,
    title: " STARLIGHT",
    description:
      "A sequin dress intricately detailed with mixed sizes of sequins, designed to catch the light and command attention.",
    color: "Silver • Black • Green • Red",
    image: image3,
  },
  {
    id: 4,
    title: "BLOSSOM",
    description:
      "A floral masterpiece, hand-beaded to perfection. Designed with sculpted floral details and an inner corset for precise sizing, structure, and a flawless snatched fit.Unique. Limited. Unforgettable. Perfect for occasions, photoshoots, and moments that demand distinction.",
    color: "Available in wide range of colors",

    image: image4,
  },
];

function Collection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const el = carouselRef.current;

    const checkScroll = () => {
      setIsAtStart(el.scrollLeft === 0);
      setIsAtEnd(el.scrollLeft + el.offsetWidth >= el.scrollWidth - 5);
    };

    el.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => el.removeEventListener("scroll", checkScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const carouselRef = useRef(null);

  return (
    <>
      {isModalOpen && (
        <Modal
          modalopen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedProduct={selectedProduct}
        />
      )}
      <div className="container" id="catalogue">
        <div className="collection-section">
          <h2>Product Collection</h2>

          <div className="relative">
            {/* Carousel Track */}
            <div className="collection-items" ref={carouselRef}>
              {catalougeItems.map((product, index) => (
                <div
                  key={product.id}
                  id={`slide-${index}`}
                  className="collection-item"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedProduct(product);
                    }}
                  />
                  <div className="prod-cta">
                    <h3>{product.title}</h3>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
