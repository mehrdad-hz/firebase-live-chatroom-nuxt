import { ProjectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const signup = async (email, password, displayName) => {
  error.valu = null;

  try {
    const res = await ProjectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete Signup");
    }

    await res.user.updateProfile({ displayName });
    error.value = null;

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
