import classes from './Header.module.css';
import { logout } from '../store/authenticationSlice';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const state = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  console.log(state.isAuthenticated)
  return (
    <>
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        <nav>
          <ul>
            {!state.isAuthenticated ? (
              <>
                <li>
                  <a href="/">My Products</a>
                </li>
                <li>
                  <a href="/">My Sales</a>
                </li>
              </>
            ) : (
              <li>
                <button onClick={() => dispatch(logout())}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
