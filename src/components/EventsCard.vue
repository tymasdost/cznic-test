<script setup>
import { computed } from 'vue'

const props = defineProps({
  events: {
    type: Object,
    required: true,
  },
})

function formatDate(iso) {
  if (!iso) return ''
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

const eventRows = computed(() => [
  {
    label: 'Create date:',
    date: props.events.registered?.timestamp,
    registrar: props.events.registered?.registrar_handle,
  },
  {
    label: 'Update date:',
    date: props.events.updated?.timestamp,
    registrar: props.events.updated?.registrar_handle,
  },
  {
    label: 'Transfer date:',
    date: props.events.transferred?.timestamp,
    registrar: props.events.transferred?.registrar_handle,
  },
  {
    label: 'Delete date:',
    date: props.events.unregistered?.timestamp,
    registrar: props.events.unregistered?.registrar_handle,
  },
])
</script>

<template>
  <div class="card">
    <div class="card-header">Events:</div>
    <table class="events-table">
      <tr v-for="row in eventRows" :key="row.label">
        <td class="label">{{ row.label }}</td>
        <td>{{ row.date ? formatDate(row.date) : '' }}</td>
        <td class="registrar-label">{{ row.date ? 'Registrar:' : '' }}</td>
        <td>
          <a v-if="row.registrar" href="#">{{ row.registrar }}</a>
        </td>
      </tr>
    </table>
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

.events-table {
  width: 100%;
  border-collapse: collapse;
  padding: 8px 16px;
}

.events-table td {
  padding: 6px 16px;
}

.label {
  font-weight: 700;
  white-space: nowrap;
}

.registrar-label {
  font-weight: 700;
  white-space: nowrap;
}
</style>
