<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img src="../assets/symbol_copy.png" alt="Vue"/>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/register" class="button">
        <span class="material-icons">description</span>
        <span class="text">Register</span>
      </router-link>
      <router-link to="/tasks" class="button">
        <span class="material-icons">view_list</span>
        <span class="text">Tasks</span>
      </router-link>
      <router-link to="/untis" class="button">
        <span class="material-icons">date_range</span>
        <span class="text">Untis</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <div v-if="$store.getters.untis.login === true" class="item">
        <span class="material-icons">check</span>
        <span class="text">{{ $store.getters.untis.username }}</span>
      </div>
      <router-link v-else to="/untis" class="button untis">
        <span class="material-icons">close</span>
        <span class="text">Untis Login</span>
      </router-link>
      <div v-if="$store.getters.everyTask.token !== ''" class="item">
        <span class="material-icons">account_circle</span>
        <span class="text">{{ $store.getters.everyTask.getUsername() }}</span>
      </div>
      <router-link v-else to="/" class="button">
        <span class="material-icons">close</span>
        <span class="text">User Login</span>
      </router-link>
      <div @click="logout($store,$router)" class="button">
        <span class="material-icons logout">exit_to_app</span>
        <span class="text">Logout</span>
      </div>
    </div>

  </aside>
</template>

<script setup>
import {ref} from 'vue'

const logout = (store,router) => {
    store.dispatch('logout')
    router.push("/");
}

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
  @apply flex flex-col overflow-hidden min-h-screen p-4 bg-ghostwhite text-raisin shadow-lg;
  width: calc(2rem + 32px);
  transition: 0.2s ease-in-out;
}

aside .flex {
  flex: 1 1 0%;
}

aside .logo {
  @apply mb-4;
}

.logout {
  color: red !important;
}

aside .logo img {
  @apply w-12;
}

aside .menu-toggle-wrap {
  @apply flex justify-end mb-4 relative;
  transition: 0.2s ease-in-out;
}

aside .menu-toggle-wrap .menu-toggle {
  transition: 0.2s ease-in-out;
}

aside .menu-toggle-wrap .menu-toggle .material-icons {
  @apply text-3xl;
  color: var(--light);
  transition: 0.2s ease-out;
}

aside .menu-toggle-wrap .menu-toggle:hover .material-icons {
  color: var(--primary);
  transform: translateX(0.5rem);
}

aside h3, aside .button .text, aside .item .text {
  @apply opacity-0;
  transition: opacity 0.3s ease-in-out;
}

aside h3 {
  @apply text-sm mb-2 uppercase;
  color: var(--grey);
}

aside .menu {
  margin: 0 -1rem;
}

aside .menu .button, aside .menu .item {
  @apply flex items-center no-underline;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 1rem;
}

aside .menu .button .material-icons, aside .menu .item .material-icons {
  @apply text-3xl;
  color: var(--light);
  transition: 0.2s ease-in-out;
}

aside .menu .button .material-icons:hover {
  font-size: 2.5rem;
}

aside .menu .button .text, aside .menu .item .text {
  color: var(--light);
  transition: 0.2s ease-in-out;
}

aside .menu .button:hover {
  @apply bg-steelpink-200;
}

aside .menu .button:hover .material-icons, aside .menu .button:hover .text {
  color: var(--primary);
}

aside .menu .button.router-link-exact-active:not(.untis) {
  @apply bg-cornflower-300;
  border-right: 5px solid var(--primary);
}

aside .menu .button.router-link-exact-active .material-icons, aside .menu .button.router-link-exact-active .text {
  color: var(--primary);
}

aside .footer {
  @apply opacity-0;
  transition: opacity 0.3s ease-in-out;
}

aside .footer p {
  @apply text-sm;
  color: var(--grey);
}

aside.is-expanded {
  width: var(--sidebar-width);
}

aside.is-expanded .menu-toggle-wrap {
  top: -3.5rem;
}

aside.is-expanded .menu-toggle-wrap .menu-toggle {
  transform: rotate(-180deg);
}

aside.is-expanded h3, aside.is-expanded .button .text, aside.is-expanded .item .text {
  @apply opacity-100;
}

aside.is-expanded .button .material-icons, aside.is-expanded .item .material-icons {
  @apply mr-8;
}

aside.is-expanded .footer {
  @apply opacity-0;
}

@media (max-width: 1024px) {
  aside {
    position: absolute;
    z-index: 99;
  }
}
</style>