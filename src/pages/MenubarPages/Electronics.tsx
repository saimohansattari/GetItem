// import {
//   Div,
//   ProductCard,
//   StyledDiv1,
//   ProductImg,
//   ProductText,
//   ProductName,
//   ProductWeight,
//   ProductPrice,
//   OfferText,
// } from "../../components/components.styled";
// import { electronics } from "../constant";

// function Electronics() {
//   return (
//     <Div>
//       <StyledDiv1>
//         {electronics.map((Item) => (
//           <ProductCard key={Item.id}>
//             <ProductImg src={Item.Proimg} alt="Grocery" />
//             <ProductText>
//               <ProductName>{Item.ProName}</ProductName>
//               <ProductWeight>𓍝&nbsp;{Item.ProWeight}kg</ProductWeight>
//               <ProductPrice>₹&nbsp; {Item.ProPrice} /-</ProductPrice>
//               <form className="rating">
//                 <label>
//                   <input type="radio" name="stars" value="1" />
//                   <span className="icon">★</span>
//                 </label>
//                 <label>
//                   <input type="radio" name="stars" value="2" />
//                   <span className="icon">★</span>
//                   <span className="icon">★</span>
//                 </label>
//                 <label>
//                   <input type="radio" name="stars" value="3" />
//                   <span className="icon">★</span>
//                   <span className="icon">★</span>
//                   <span className="icon">★</span>
//                 </label>
//                 <label>
//                   <input type="radio" name="stars" value="4" />
//                   <span className="icon">★</span>
//                   <span className="icon">★</span>
//                   <span className="icon">★</span>
//                   <span className="icon">★</span>
//                 </label>
//                 <label>
//                   <input type="radio" name="stars" value="5" />
//                   <span className="icon">★</span>
//                   <span className="icon">★</span>
//                   <span className="icon">★</span>
//                   <span className="icon">★</span>
//                   <span className="icon">★</span>
//                 </label>
//               </form>
//               <OfferText>Buy 3 get Extra 3% Disscount</OfferText>
//             </ProductText>
//           </ProductCard>
//         ))}
//       </StyledDiv1>
//     </Div>
//   );
// }

// export default Electronics;

import { useEffect, useState } from "react";
import {
  Div,
  ProductCard,
  StyledDiv1,
  ProductImg,
  ProductText,
  ProductName,
  ProductWeight,
  ProductPrice,
  OfferText,
} from "../../components/components.styled";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

function Electronics() {
  // const { id }: { id?: string } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        // console.log("condition Working");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error: {error}</div>;
  if (products.length === 0) return <div>No products found.</div>;

  return (
    <Div>
      <StyledDiv1>
        {products.map((item) => (
          <ProductCard key={item.id}>
            <ProductImg src={item.image} alt="Product" />
            <ProductText>
              <ProductName>{item.title}</ProductName>
              <ProductWeight>{item.description}</ProductWeight>
              <ProductPrice>
                {item.price
                  ? `₹ ${item.price.toFixed(2)}`
                  : "Price not available"}
              </ProductPrice>
              {/* Rating form */}
              <form className="rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value}>
                    <input type="radio" name="stars" value={value} />
                    <span className="icon">★</span>
                  </label>
                ))}
              </form>
              <OfferText>Buy 3 get Extra 3% Discount</OfferText>
            </ProductText>
          </ProductCard>
        ))}
      </StyledDiv1>
    </Div>
  );
}

export default Electronics;
