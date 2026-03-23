<script setup>
const props = defineProps({
  keyset: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <div class="card-header">KeySet:</div>
    <table class="keyset-table">
      <tr>
        <td class="label">Handle:</td>
        <td><a href="#">{{ keyset.handle }}</a></td>
      </tr>
      <tr>
        <td class="label">Registrar:</td>
        <td><a href="#">{{ keyset.registrar }}</a></td>
      </tr>
      <tr>
        <td class="label">DNS keys:</td>
        <td>
          <div v-for="(key, index) in keyset.dns_keys" :key="index" class="dns-key">
            {{ key }}
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

.keyset-table {
  width: 100%;
  border-collapse: collapse;
}

.keyset-table td {
  padding: 6px 16px;
  vertical-align: top;
}

.label {
  font-weight: 700;
  white-space: nowrap;
}

.dns-key {
  word-break: break-all;
  font-family: monospace;
  font-size: 13px;
}
</style>
