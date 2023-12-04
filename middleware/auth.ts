import { ProjectAuth } from "@/firebase/config";

export default defineNuxtRouteMiddleware((to, from) => {
    let user = ProjectAuth.currentUser;
    if (!user) {
        return navigateTo("/")
    }
})

