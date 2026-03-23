<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  domain: {
    type: Object,
    required: true,
  },
})

const authInfoVisible = ref(false)

const expiresFormatted = computed(() => {
  if (!props.domain.expires_at) return ''
  return formatDate(props.domain.expires_at)
})

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
}
</script>

<template>
  <div class="card">
    <table class="info-table">
      <tbody>
        <tr>
          <td class="label">AuthInfo:</td>
          <td>
            <button
              v-if="!authInfoVisible"
              class="show-btn"
              @click="authInfoVisible = true"
            >
              SHOW
            </button>
            <span v-else class="auth-password">c5*4jK#mN9</span>
          </td>
        </tr>
        <tr>
          <td class="label">Expires at:</td>
          <td>{{ expiresFormatted }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.card {
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 16px;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
}

.info-table td {
  padding: 6px 0;
}

.label {
  font-weight: 700;
  width: 140px;
}

.show-btn {
  background: #2196f3;
  color: #fff;
  border: none;
  padding: 6px 20px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
}

.show-btn:hover {
  background: #1976d2;
}

.auth-password {
  font-family: monospace;
  background: #fff3e0;
  padding: 2px 8px;
  border-radius: 3px;
}
</style>
