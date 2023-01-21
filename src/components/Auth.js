import classes from './Auth.module.css';
import { login } from '../store/authenticationSlice';
import { useSelector, useDispatch } from 'react-redux';


const Auth = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authentication);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
