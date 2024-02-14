import { WomenShopping } from "../../assets/pngs";
import {
  ImgCard,
  MainDiv,
  ProductScrollDiv,
  Scroll_1,
  SubDiv,
  TextCard,
  TextS18,
  TextS24,
  TextS45,
} from "../../components/components.styled";
import {
  ProductCard,
  ProductImg,
  ProductText,
  ProductName,
  ProductWeight,
  ProductPrice,
  OfferText,
} from "../../components/components.styled";
import {
  grocery,
  electronics,
  menswear,
  girlswear,
  mobiles,
  toys,
} from "../constant";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <MainDiv>
        <SubDiv>
          <ImgCard>
            <img src={WomenShopping} alt="" style={{ height: "75vh" }} />
          </ImgCard>

          <TextCard>
            <TextS45>Happy Shopping</TextS45>
            <hr />
            <TextS24>
              I love shopping. There is a little bit of magic found in buying
              something new. It is instant gratification, a quick fix.
            </TextS24>
            <TextS18>A place where you get everything do as you want</TextS18>
          </TextCard>
        </SubDiv>

        {/* Electronics Scroll section */}
        <ProductScrollDiv>
          <Scroll_1>
            {electronics.map((Item) => (
              // <Link to="./Selectedproduct">

              <ProductCard
                key={Item.id}
                onClick={() => navigate("./Selectedpage")}
              >
                <ProductImg src={Item.Proimg} alt="Grocery" />
                <ProductText>
                  <ProductName>{Item.ProName}</ProductName>
                  <ProductWeight>𓍝&nbsp;{Item.ProWeight}kg</ProductWeight>
                  <ProductPrice>₹&nbsp;{Item.ProPrice} /-</ProductPrice>
                  <form className="rating">
                    <label>
                      <input type="radio" name="stars" value="1" />
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="2" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="3" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="4" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="5" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                  </form>
                  <OfferText>Buy 3 get Extra 3% Disscount</OfferText>
                </ProductText>
              </ProductCard>
              // </Link>
            ))}
          </Scroll_1>
        </ProductScrollDiv>

        {/* JentsWeat scroll section */}
        <ProductScrollDiv onClick={() => navigate("./Selectedpage")}>
          <Scroll_1>
            {menswear.map((Item) => (
              <ProductCard key={Item.id}>
                <ProductImg src={Item.Proimg} alt="Grocery" />
                <ProductText>
                  <ProductName>{Item.ProName}</ProductName>
                  <ProductWeight>𓍝&nbsp;{Item.ProWeight}kg</ProductWeight>
                  <ProductPrice>₹&nbsp;{Item.ProPrice} /-</ProductPrice>
                  <form className="rating">
                    <label>
                      <input type="radio" name="stars" value="1" />
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="2" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="3" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="4" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="5" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                  </form>
                  <OfferText>Buy 3 get Extra 3% Disscount</OfferText>
                </ProductText>
              </ProductCard>
            ))}
          </Scroll_1>
        </ProductScrollDiv>

        {/* Grocery Scrolling Section */}
        <ProductScrollDiv>
          <Scroll_1>
            {grocery.map((Item) => (
              <ProductCard key={Item.id}>
                <ProductImg src={Item.Proimg} alt="Grocery" />
                <ProductText>
                  <ProductName>{Item.ProName}</ProductName>
                  <ProductWeight>𓍝&nbsp;{Item.ProWeight}kg</ProductWeight>
                  <ProductPrice>₹&nbsp;{Item.ProPrice} /-</ProductPrice>
                  <form className="rating">
                    <label>
                      <input type="radio" name="stars" value="1" />
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="2" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="3" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="4" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="5" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                  </form>
                  <OfferText>Buy 3 get Extra 3% Disscount</OfferText>
                </ProductText>
              </ProductCard>
            ))}
          </Scroll_1>
        </ProductScrollDiv>

        {/* girlsWear scroll section */}
        <ProductScrollDiv>
          <Scroll_1>
            {girlswear.map((Item) => (
              <ProductCard key={Item.id}>
                <ProductImg src={Item.Proimg} alt="Grocery" />
                <ProductText>
                  <ProductName>{Item.ProName}</ProductName>
                  <ProductWeight>𓍝&nbsp;{Item.ProWeight}kg</ProductWeight>
                  <ProductPrice>₹&nbsp;{Item.ProPrice} /-</ProductPrice>
                  <form className="rating">
                    <label>
                      <input type="radio" name="stars" value="1" />
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="2" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="3" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="4" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="5" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                  </form>
                  <OfferText>Buy 3 get Extra 3% Disscount</OfferText>
                </ProductText>
              </ProductCard>
            ))}
          </Scroll_1>
        </ProductScrollDiv>

        {/* Mobiles scroll section */}
        <ProductScrollDiv>
          <Scroll_1>
            {mobiles.map((Item) => (
              <ProductCard key={Item.id}>
                <ProductImg src={Item.Proimg} alt="Grocery" />
                <ProductText>
                  <ProductName>{Item.ProName}</ProductName>
                  <ProductWeight>𓍝&nbsp;{Item.ProWeight}kg</ProductWeight>
                  <ProductPrice>₹&nbsp;{Item.ProPrice} /-</ProductPrice>
                  <form className="rating">
                    <label>
                      <input type="radio" name="stars" value="1" />
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="2" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="3" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="4" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="5" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                  </form>
                  <OfferText>Buy 3 get Extra 3% Disscount</OfferText>
                </ProductText>
              </ProductCard>
            ))}
          </Scroll_1>
        </ProductScrollDiv>

        {/* Beauty and Toys scroll section */}
        <ProductScrollDiv>
          <Scroll_1>
            {toys.map((Item) => (
              <ProductCard key={Item.id}>
                <ProductImg src={Item.Proimg} alt="Grocery" />
                <ProductText>
                  <ProductName>{Item.ProName}</ProductName>
                  <ProductWeight>𓍝&nbsp;{Item.ProWeight}kg</ProductWeight>
                  <ProductPrice>₹&nbsp;{Item.ProPrice} /-</ProductPrice>
                  <form className="rating">
                    <label>
                      <input type="radio" name="stars" value="1" />
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="2" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="3" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="4" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="5" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                  </form>
                  <OfferText>Buy 3 get Extra 3% Disscount</OfferText>
                </ProductText>
              </ProductCard>
            ))}
          </Scroll_1>
        </ProductScrollDiv>
      </MainDiv>
    </div>
  );
}

export default Home;
