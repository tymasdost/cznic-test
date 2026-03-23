<script setup>
</script>

<template>
  <div class="user-menu">
    <div class="user-info">
      <span class="avatar">&#9679;</span>
      <div class="user-details">
        <div class="name">Jan Musilek</div>
        <div class="role">admin</div>
      </div>
    </div>
    <hr class="divider" />
    <button class="menu-item">
      <span class="logout-icon">&#10132;</span>
      Logout
    </button>
  </div>
</template>

<style scoped>
.user-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  min-width: 220px;
  z-index: 100;
  padding: 16px;
  margin-top: 8px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 12px;
}

.avatar {
  font-size: 40px;
  color: #9e9e9e;
  line-height: 1;
}

.user-details .name {
  font-weight: 600;
  color: #333;
  font-size: 15px;
}

.user-details .role {
  color: #888;
  font-size: 13px;
}

.divider {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 0 0 8px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 4px;
  width: 100%;
  font-size: 14px;
  color: #333;
}

.menu-item:hover {
  background: #f5f5f5;
}

.logout-icon {
  font-size: 18px;
  color: #666;
}
</style>
