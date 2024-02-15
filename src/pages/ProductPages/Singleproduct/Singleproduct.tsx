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
    axios.get(`https://fakestoreapi.com/products/${id} `).then((res) => {
      // console.log(res.data);
      if (Array.isArray(res.data)) {
        setState(res.data);
      } else {
        setState([res.data]); // wrap nonarray response in an array
      }
      console.log(res.data);
    });
  }, []);

  const handleAddToCart = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleBuyNow = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <StyledDiv1>
      {state.map((data) => (
        <div id="MainSection" key={data.id}>
          <div id="SubSection">
            <div id="Image">
              <img src={data.image} alt="product" />
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
              <p>{data.rating.count} Ratings, 5285 Reviews *</p>
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

                <p>Name : {data.title}</p>
                <p>Fabric : Cotton Blend</p>
                <p>Sleeve Length : Short Sleeves</p>
                <p>Pattern : Printed</p>
                <p>Net Quantity (N) : 1</p>
                <p>Sizes : </p>
                <p>{data.description}</p>
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
