import { Button } from "@mui/material";
import "../../css/login.css";
import logo from "../../assets/images/whatsapp_logo.webp";
import { signInWithPopup } from "firebase/auth";
import db, { auth, provider } from "../../firebase";
import { useStateValue } from "../context/stateProvider";
import { ACTION_TYPES } from "../context/stateReducer";
import { doc, setDoc } from "firebase/firestore/lite";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const setUserData = async (currentUser) => {
    try {
      await setDoc(doc(db, "user", currentUser.uid), {
        uid: currentUser.uid,
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
      });

      await setDoc(doc(db, "userChat", currentUser.uid), {});
    } catch (error) {
      alert("error message : ", error);
    }
  };

  const handleLogin = () => {
    dispatch({ type: ACTION_TYPES.LOGIN_START });
    signInWithPopup(auth, provider)
      .then((result) => {
        // it gives google access token, You can use it to access Google API

        localStorage.setItem("user", JSON.stringify(result.user));

        dispatch({
          type: ACTION_TYPES.SET_USER,
          payload: { value: result.user },
        });

        // storing user data to firestore databsae
        setUserData(result.user);
      })
      .catch((err) => {
        alert(err.message);
        console.log("err: ", err);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="whatsapp logo" className="login__logo" />
        <h1 className="login__text">Sign in to Whatsapp</h1>
        <Button className="login__btn" onClick={handleLogin}>
          {state.loading ? (
            <RefreshRoundedIcon className="login__loader" />
          ) : (
            "Sign in with Google"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Login;
