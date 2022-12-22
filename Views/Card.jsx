const React = require('react');

function Card() {
  return (
      <div className="card" style={{ width: '18rem', marginTop: 30 }}>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/1.1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="img/1.3.jpg" className="d-block w-100" alt="..." />
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
          <h5 className="card-title">Коттедж 250 м² на участке 14 сот.</h5>
          <p className="card-text">
            Сдается современный новый коттедж в стиле минимализм, в двух
            километрах от Павловского парка
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Цена:</li>
          <li className="list-group-item">Адрес</li>
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
    </Layout>
  );
}

module.exports = Card;
