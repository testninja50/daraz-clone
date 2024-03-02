import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  return (
    <>
      <div className="main">
        <nav>
          <div className="topbar">
            <div className="topbar-left">
              <ul>
                <li><a href="#">Become a Seller</a></li>
                <li><a href="#">Daraz Affiliate Program</a></li>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Daraz Logistics Partner</a></li>
              </ul>
            </div>
            <div className="topbar-right">
              <button>
                <img src="https://img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png" alt="" />
                <span>Save more on App</span>
              </button>
            </div>
          </div>
          <div className="navbar">
            <img src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png" alt="Daraz logo" />
            <input type="search" placeholder="Search in Daraz" />
            <div className="buttons">
              <button className="logn">Login</button>
              <span> | </span>
              <button className="logn">Sign Up</button>
              <button className="logn">&#9762; EN</button>
              <button className="logn">&#9750;</button>
            </div>
          </div>
        </nav>
        <div className="header">
          <aside>
            <ul>
              <li><a href="#">Groceries & Pets</a></li>
              <li><a href="#">Groceries & Pets</a></li>
              <li><a href="#">Health & Beauty</a></li>
              <li><a href="#">Men's Fashion</a></li>
              <li><a href="#">Women's Fashion</a></li>
              <li><a href="#">Mother & Baby</a></li>
              <li><a href="#">Home & Lifestyle</a></li>
              <li><a href="#">Electronic Devices</a></li>
              <li><a href="#">Electronic Accessories</a></li>
              <li><a href="#">TV & Home Appliances</a></li>
              <li><a href="#">Sports & Outdoor</a></li>
              <li><a href="#">Watches, Bags & Jewellery</a></li>
              <li><a href="#">Automotive & Motorbike</a></li>
            </ul>
          </aside>
          <div className="slider">
            <img src="https://icms-image.slatic.net/images/ims-web/1ec33dcd-79b9-4719-a711-5b77775c1b16.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
