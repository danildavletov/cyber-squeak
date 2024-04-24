import { useRef, useContext, useState } from "react";
import app from "../../../firebase";
import { GithubAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import s from './PageLogin.module.css'

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const PageLogin = () => {
  const provider = new GithubAuthProvider();
  const [isPending, setIsPending] = useState(false);
  // const ctx = useContext(AppContext);
  const navigate = useNavigate();

  // const loginRef = useRef();
  // const passRef = useRef();

  // const handleOnLogin = () => {
  //   let email = loginRef.current.value;
  //   let password = passRef.current.value;

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user);
  //       ctx.loginHandler();
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       alert(error.message)
  //     });
  // }

  const loginViaGithub = async () => {
    setIsPending(true)
    try {
      const res = await signInWithPopup(auth, provider);

      if (!res) {
        throw new Error("Invalid login");
      }

      let user = res.user;

      setIsPending(false)
      localStorage.setItem("auth", true)
      localStorage.setItem("name", user.displayName)
      navigate("/");
    } catch (e) {
      console.log(e);
      setIsPending(false)
    }
  }

  return (
    <form action='#' className={s.form}>
      <p className={s.title}>Login page</p>
      {/* <div className={s.wrapper}>
        <input type="text" ref={loginRef} placeholder="Login" required className={s.input} />
      </div>
      <input type="password" ref={passRef} placeholder="Password" required className={s.input} /> */}

      <button className={s.button} onClick={loginViaGithub}>
        {isPending ? "Loading..." : "Login With Github"}
      </button>

      {/* <button className={s.button} onSubmit={loginViaGithub}>Login</button> */}
    </form>
  );
};

export default PageLogin;
