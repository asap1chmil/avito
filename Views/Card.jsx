const React = require('react');

module.exports = function Card({ house }) {
  return (
    <div class="container-ad">
    <form action="">
      <div
        id={house.id}
        className="card"
        style={{ width: '18rem', margin: 30 }}
      >
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={house.photo} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={house.photo2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={house.photo3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="card-body">
          <h5 className="card-title">{house.type}</h5>
          <p className="card-text">{house.description}</p>
        </div>
        <ul>
          <li className="list-group-item">{house.price}</li>
          <li className="list-group-item">{house.address}</li>
        </ul>
        <div className="card-body">
          <button type="button" className="btn btn-dark">
            Арендовать
          </button>
          <button
            type="button"
            className="btn btn-dark"
            style={{ marginLeft: 15 }}
          >
            В избранное
          </button>
        </div>
      </div>
    </form>

    </div>

  );
};
