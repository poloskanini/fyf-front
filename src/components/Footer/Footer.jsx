import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam vitae illo corrupti a corporis nobis ut fuga sed eos.</span>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam vitae illo corrupti a corporis nobis ut fuga sed eos.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">FYF</span>
          <span className="copyright">© Copyright {new Date().getFullYear() }</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  )
}