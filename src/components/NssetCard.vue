<script setup>
const props = defineProps({
  nsset: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <div class="card-header">NSSet:</div>
    <table class="nsset-table">
      <tr>
        <td class="label">Handle:</td>
        <td><a href="#">{{ nsset.handle }}</a></td>
      </tr>
      <tr>
        <td class="label">Registrar:</td>
        <td><a href="#">{{ nsset.registrar }}</a></td>
      </tr>
      <tr>
        <td class="label">DNS:</td>
        <td>
          <div v-for="dns in nsset.dns" :key="dns.name">
            {{ dns.name }} ({{ dns.ip_address }})
          </div>
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

.nsset-table {
  width: 100%;
  border-collapse: collapse;
}

.nsset-table td {
  padding: 6px 16px;
  vertical-align: top;
}

.label {
  font-weight: 700;
  white-space: nowrap;
}
</style>
