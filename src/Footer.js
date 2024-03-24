import logo from './logo.svg';
import './Footer.css';

function Footer() {
  return (
    <div class='Login'>
      <div id='footer'>
        <div id='footer-content'>
          <div id='col-1'>
            <div id='ex'>Exclusive</div>
            <div id='sub'>Subscribe</div>
            <div>Get 10% of your first order</div>
            <input type='email' placeholder='Enter your email'></input>
          </div>
          <div id='col-2'>
            <div id='sup'>Support</div>
            <div>DOHS, Dhaka</div>
            <div>exclusive@gmail.com</div>
            <div>+880198</div>
          </div>
          <div id='col-3'>
            <div id='ac'>Account</div>
            <div>My Account</div>
            <div>Login / Register</div>
            <div>Cart</div>
            <div>Wishlist</div>
            <div>Shop</div>
          </div>
          <div id='col-4'>
            <div id='qk'>Quick Link</div>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>FAQ</div>
            <div>Contact</div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default Footer;
