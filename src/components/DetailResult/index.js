import DataDetailCar from "../../const/DataDetailCar";
import { Link } from "react-router-dom";
import "./style.css";
import noImage from "../../assets/no-image-available.png";

const DetailResult = (props) => {
  const { car, ButtonCari } = props;
  return (
    <section className="detail__section">
      <div className="detail__hero"></div>
      <div className="detail__result__container">
        <div className="detail__result__info">
          <DataDetailCar />
        </div>
        <div className="detail__result__car">
          <div>
            {!!Object.keys(car).length ? (
              <div>
                <div className="detail__result__car-image">
                  {!!car.image ? (
                    <img src={car.image} />
                  ) : (
                    <img src={noImage} />
                  )}
                </div>
                <h1>{car.name}</h1>
                <p>{car.category}</p>
                <div className="detail__result__total-price">
                  <p>Total</p>
                  <p>Rp {car.price}</p>
                </div>
              </div>
            ) : (
              <p>loading...</p>
            )}
          </div>
          <div className="detail__result__button-cari-mobil">
            <Link to="/carimobil">
              <button>{ButtonCari}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailResult;
