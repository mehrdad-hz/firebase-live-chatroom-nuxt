<template>
  <nav v-if="user">
    <div>
      <p>hey there {{ user.displayName }}</p>
      <p class="email">user logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };
    return { handleClick, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 2px solid #636363;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #112240;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #fff;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
