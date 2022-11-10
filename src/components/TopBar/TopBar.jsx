import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
function TopBar(props) {
  return (
    <>
      <div className="infoBar">{props.greeting}</div>
      <div className="logoCartBar">
        <div className="text-center p-5">
          <Link to="/" className="">
            <img src="/img/main/logo.jpg" alt=""></img>
          </Link>

          <CartWidget />
        </div>
      </div>
    </>
  );
}

export default TopBar;
