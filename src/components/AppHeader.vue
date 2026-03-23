<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import UserMenu from './UserMenu.vue'

const showUserMenu = ref(false)
const headerRight = ref(null)

function toggleUserMenu() {
  showUserMenu.value = !showUserMenu.value
}

function handleClickOutside(e) {
  if (headerRight.value && !headerRight.value.contains(e.target)) {
    showUserMenu.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <header class="header">
    <div class="header-left">
      <button class="hamburger" aria-label="Menu">&#9776;</button>
      <span class="app-name">Ferda</span>
    </div>
    <div class="header-right" ref="headerRight">
      <button class="user-button" @click="toggleUserMenu">
        <span class="user-icon">&#9679;</span>
        <span class="user-name">JAN MUSILEK</span>
      </button>
      <UserMenu v-if="showUserMenu" />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #29b6f6;
  color: #fff;
  padding: 0 16px;
  height: 48px;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hamburger {
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
}

.app-name {
  font-size: 18px;
  font-weight: 700;
}

.header-right {
  position: relative;
}

.user-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 8px;
}

.user-icon {
  font-size: 28px;
  line-height: 1;
}

.user-name {
  letter-spacing: 0.5px;
}
</style>
