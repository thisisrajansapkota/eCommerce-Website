import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase-config/config";
import { setUser } from "./userSlice";

export const createAdminAction = (userInfo, navigate) => async () => {
  try {
    // firebase AUTH
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    // userInfo holds user information!
    const userId = user.uid;

    //firebase DB
    const { password, confirmPassword, ...rest } = userInfo;
    const setDocPromise = setDoc(doc(db, "users", userId), rest);
    toast.promise(setDocPromise, {
      pending: "In progress..."
    })
    await setDocPromise;
    toast.success("Sign up successful!");
    navigate("./login");
  } catch (e) {
    toast.error(e.message);
  }
};

export const resetPasswordAction = (email) => async () => {
  try {
    const resPromise = sendPasswordResetEmail(auth, email);
    toast.promise(resPromise, {
      pending: "In progress...",
    });
    await resPromise;
    toast.success(
      "If you have an account with us, you should receive Password Reset Email."
    );
  } catch (e) {
    toast.error(e.message);
  }
};

export const loginAdminAction = (email, password) => async dispatch => {
  try {
    const authPromise = signInWithEmailAndPassword(auth, email, password);
    toast.promise(authPromise, {
      pending: "In progress...",
    });
    const {user: { uid } } = await authPromise;
 dispatch (getUserInfoAction(uid))
    toast.success("Login Successful!");

  } catch (e) {
    toast.error(e.message);
  }
};

export const getUserInfoAction = (uid) => async dispatch => {
  try {
    const userSnap = await getDoc(doc(db, "users", uid))
  if(userSnap.exists()){
    const userData = userSnap.data();
    const userInfo = {...userData, uid}
    //Save userInfo to redux Store / Slice.
    dispatch(setUser(userInfo))
  }
  } catch (e) {
    toast.error(e.message);
  }
};
