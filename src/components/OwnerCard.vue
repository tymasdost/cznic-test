<script setup>
const props = defineProps({
  owner: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <div class="card-header">Owner:</div>
    <table class="owner-table">
      <tr>
        <td class="label">Handle:</td>
        <td><a href="#">{{ owner.handle }}</a></td>
      </tr>
      <tr>
        <td class="label">
          <span v-if="owner.publish.organization" class="publish-icon" title="Published">&#128994;</span>
          <span v-else class="publish-icon" title="Hidden">&#128683;</span>
          Organization:
        </td>
        <td>{{ owner.organization }}</td>
      </tr>
      <tr>
        <td class="label">
          <span v-if="owner.publish.name" class="publish-icon" title="Published">&#128994;</span>
          <span v-else class="publish-icon" title="Hidden">&#128683;</span>
          Name:
        </td>
        <td>{{ owner.name }}</td>
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

.owner-table {
  width: 100%;
  border-collapse: collapse;
}

.owner-table td {
  padding: 6px 16px;
}

.label {
  font-weight: 700;
  white-space: nowrap;
}

.publish-icon {
  font-size: 12px;
  margin-right: 2px;
}
</style>
