import { Link } from "react-router-dom";
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
import "../../DB/Api.json";
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
          <Link to={`/SingleProduct/${item.id}`}>
            {" "}
            <ProductCard key={item.id}>
              <ProductImg src={item.image} alt="Product" />
              <ProductText>
                <ProductName>{item.title}</ProductName>
                {/* <ProductWeight>{item.description}</ProductWeight> */}
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
          </Link>
        ))}
      </StyledDiv1>
    </Div>
  );
}

export default Electronics;
