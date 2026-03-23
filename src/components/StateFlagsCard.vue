<script setup>
import { computed } from 'vue'

const props = defineProps({
  stateFlags: {
    type: Object,
    required: true,
  },
  verbose: {
    type: Boolean,
    default: false,
  },
})

const displayedFlags = computed(() => {
  if (props.verbose) {
    return props.stateFlags.flags
  }
  return props.stateFlags.flags.filter((f) => f.active)
})
</script>

<template>
  <div class="card">
    <div class="card-header">State flags:</div>
    <div class="flags-content">
      <div
        v-for="flag in displayedFlags"
        :key="flag.name"
        class="flag-item"
        :class="{ active: flag.active, inactive: !flag.active }"
      >
        <span class="flag-icon">{{ flag.active ? '&#9989;' : '&#10060;' }}</span>
        <span class="flag-text">{{ flag.description }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.card-header {
  background: #e0e0e0;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 14px;
}

.flags-content {
  padding: 12px 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 24px;
}

.flag-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 0;
}

.flag-item.active .flag-text {
  color: #4caf50;
}

.flag-item.inactive .flag-text {
  color: #f44336;
}

.flag-icon {
  font-size: 14px;
  line-height: 1;
}
</style>
