import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase-config/config";




export const createAdminAction = (userInfo) => async () => {
  try {
    // firebase AUTH
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password,
    );
    // console.log(userInfo, "user");
    // userInfo holds user information!
    const userId = user.uid;

    //firebase DB
    const { password, confirmPassword, ...rest } = userInfo;
    const setDocPromise = await setDoc(doc(db, "users", userId), rest);
    toast.promise(setDocPromise, {
      pending: "In progress"
    })
    await setDocPromise;
    toast.success("Sign up successful!")
  } catch (e) {
    toast.error(e.message);
  }
};
