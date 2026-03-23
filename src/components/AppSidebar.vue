<script setup>
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-label">APPLICATIONS</div>
    <a href="#" class="sidebar-item active">
      <span class="sidebar-icon">&#127760;</span>
      <span>Registry</span>
    </a>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background: #fafafa;
  border-right: 1px solid #e0e0e0;
  padding: 12px 0;
  flex-shrink: 0;
}

.sidebar-label {
  font-size: 11px;
  font-weight: 600;
  color: #888;
  padding: 8px 16px;
  letter-spacing: 0.5px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.sidebar-item.active {
  background: #ffc107;
  color: #333;
  font-weight: 500;
}

.sidebar-icon {
  font-size: 18px;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
