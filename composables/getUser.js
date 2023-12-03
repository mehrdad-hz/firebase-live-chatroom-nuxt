import { ref } from "vue";
import { ProjectAuth } from "@/firebase/config";

const user = ref(ProjectAuth.currentUser);

ProjectAuth.onAuthStateChanged((_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
