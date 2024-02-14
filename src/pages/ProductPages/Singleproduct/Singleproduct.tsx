import { useEffect, useState } from "react";
import { StyledDiv1 } from "../../../components/components.styled";
import { useParams } from "react-router-dom";
import axios from "axios";

function Singleproduct() {
  const [state, setState] = useState([
    {
      id: Number || null,
      title: String,
      price: Number,
      description: String,
      category: String,
      image: String,
      rating: {
        rate: Number,
        count: Number,
      },
    },
  ]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      // setState(res.data);
      // console.log(res.data);
      if (Array.isArray(res.data)) {
        setState(res.data);
      } else {
        setState([res.data]); // Wrap non-array response in an array
      }
      console.log(res.data);
    });
  }, []);

  const handleAddToCart = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent page reload
    // Add your logic to handle adding to cart here
  };

  const handleBuyNow = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent page reload
    // Add your logic to handle buying now here
  };
  return (
    <StyledDiv1>
      {state.map((data) => (
        <div id="MainSection" key={data.id}>
          <div id="SubSection">
            <div id="Image">
              <img src="" alt="product" />
            </div>

            <div id="Btn">
              <button id="Cart-Btn" onClick={handleAddToCart}>
                <i className="fa-solid fa-cart-shopping"></i> &nbsp; Add to Cart
              </button>
              <button id="Buy-Btn" onClick={handleBuyNow}>
                <i className="fa-solid fa-angles-right"></i> &nbsp; Buy Now
              </button>
            </div>
          </div>

          <div id="SubSection">
            <div className="Section1">
              <h3>{data.title}</h3>
              <h2>
                <i className="fa-solid fa-indian-rupee-sign">&nbsp;</i>200
              </h2>

              <span id="Rating">
                {data.rating.rate} &nbsp; <i className="fa-solid fa-star"></i>
              </span>
              <p>26588 Ratings, 5285 Reviews *</p>
              <span>Free Delivery</span>
            </div>

            <div className="Section2">
              <h3>Select Size</h3>
              <button id="Sizes">S</button>
              <button id="Sizes">M</button>
              <button id="Sizes">L</button>
              <button id="Sizes">XL</button>
              <button id="Sizes">XXL</button>
            </div>

            <div>
              <div id="productDetails">
                <h3>Product Details</h3>

                <p>Name : Men Casual Shirt</p>
                <p>Fabric : Cotton Blend</p>
                <p>Sleeve Length : Short Sleeves</p>
                <p>Pattern : Printed</p>
                <p>Net Quantity (N) : 1</p>
                <p>Sizes : </p>
                {/* <p>S (Chest Size : 36 in, Length Size: 27 in)</p>
            <p>M (Chest Size : 38 in, Length Size: 28 in)</p>
            <p>L (Chest Size : 40 in, Length Size: 29 in)</p>
            <p>XL (Chest Size : 42 in, Length Size: 30 in)</p>
            <p>XXL (Chest Size : 44 in, Length Size: 30.5 in)</p> */}
                <p>STREP HALF SLEEVE SOFT FABRIC WEIGHT LESS MEN SHIRT</p>
                <p>Country of Origin : India</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </StyledDiv1>
  );
}

export default Singleproduct;
