//# style
import "./style.css"

//# function
import { currencyFormatter } from "../../utils/numberFormatter"

import { Link } from "react-router-dom"
import noImage from "../../assets/no-image-available.png"

const SearchCarResult = (props) => {
  const { data, ButtonPilih } = props

  return (
    <div className="search-result__section">
      <div className="search-result__container">
        {data.length ? (
          data.map((car) => (
            <div key={car.id} className="search-result__cards">
              <div>
                {!!car.image ? <img src={car.image} /> : <img src={noImage} />}
                <div className="search-result__cards__info">
                  {!!car.name ? <h1>{car.name}</h1> : <h1>not available</h1>}
                  <p>{`${currencyFormatter(car.price)} / hari`}</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa accusamus doloribus quam veniam eligendi sed?
                  </p>
                </div>
                <div className="search-result__cards__button">
                  <Link to={`/detailmobil/${car.id}`}>{ButtonPilih}</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchCarResult
