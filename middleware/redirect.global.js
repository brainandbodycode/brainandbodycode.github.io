export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path === "/bio" || to.path === "/bio/") {
        return navigateTo('/')
    }
})