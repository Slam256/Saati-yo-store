import '../css/Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={process.env.PUBLIC_URL + '/img/hero-img.jpeg'}
          alt="coverpage"
        />{' '}
        Home
      </div>

      <div className="home__row">
        <Product
          id=""
          title="Round neck"
          price="19.99"
          image={process.env.PUBLIC_URL + '/img/product-1.jpeg'}
          rating={5}
        />
        <Product
          id=""
          title="The lean Startup"
          price="19.99"
          image={process.env.PUBLIC_URL + '/img/product-2.jpeg'}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id=""
          title="V-neck"
          price="19.99"
          image={process.env.PUBLIC_URL + '/img/product-3.jpeg'}
          rating={5}
        />
        <Product
          id=""
          title="Sweater"
          price="19.99"
          image={process.env.PUBLIC_URL + '/img/product-4.jpeg'}
          rating={5}
        />
        <Product
          id=""
          title="lonely"
          price="19.99"
          image={process.env.PUBLIC_URL + '/img/product-5.jpeg'}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id=""
          title="couples"
          price="19.99"
          image={process.env.PUBLIC_URL + '/img/product-6.jpeg'}
          rating={5}
        />
      </div>
    </div>
  );
}
export default Home;
