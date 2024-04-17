import { useRef, useContext } from "react";
import app from "../../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import s from './PageLogin.module.css'

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const PageLogin = () => {
  const ctx = useContext(AppContext);
  const navigate = useNavigate();

  const loginRef = useRef();
  const passRef = useRef();

  const handleOnLogin = () => {

    let email = loginRef.current.value;
    let password = passRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        ctx.loginHandler();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
      });
  }

  return (
    <form action='#' className={s.form} onSubmit={handleOnLogin}>
      <p className={s.title}>Login page</p>
      <p className={!ctx.isLoggedIn ? s.hidden : ''}>{ctx.isLoggedIn && "Вы вошли"}</p>
      <div className={s.wrapper}>
        <input type="text" ref={loginRef} placeholder="Login" required className={s.input} />
      </div>
      <input type="password" ref={passRef} placeholder="Password" required className={s.input} />

      <button className={s.button}>Login</button>
    </form>
  );
};

export default PageLogin;
