<template>
  <div class="container">
    <div class="chat-window-box">
      <Navbar />
      <ChatWindow />
      <NewChatForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
import NewChatForm from "@/components/NewChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";
definePageMeta({
  middleware: ["auth"]
});
const { user } = getUser();
const router = useRouter();
watch(user, () => {
  if (!user.value) {
    router.push("/chatroom");
  }
});


</script>

<style></style>
