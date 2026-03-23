<script setup>
const props = defineProps({
  contacts: {
    type: Array,
    required: true,
  },
  verbose: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <template v-if="verbose">
    <div v-for="contact in contacts" :key="contact.handle" class="card">
      <div class="card-header">Administrative contact:</div>
      <table class="contact-table">
        <tbody>
          <tr>
            <td class="label">Handle:</td>
            <td><a href="#">{{ contact.handle }}</a></td>
          </tr>
          <tr>
            <td class="label">
              <span v-if="contact.publish.organization" class="publish-icon" title="Published">&#128994;</span>
              <span v-else class="publish-icon" title="Hidden">&#128683;</span>
              Organization:
            </td>
            <td>{{ contact.organization }}</td>
          </tr>
          <tr>
            <td class="label">
              <span v-if="contact.publish.name" class="publish-icon" title="Published">&#128994;</span>
              <span v-else class="publish-icon" title="Hidden">&#128683;</span>
              Name:
            </td>
            <td>{{ contact.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <div v-else class="card">
    <div class="card-header">Administrative contacts:</div>
    <table class="contact-table">
      <tbody>
        <tr v-for="contact in contacts" :key="contact.handle">
          <td class="label">{{ contact.name }}:</td>
          <td><a href="#">{{ contact.handle }}</a></td>
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
  overflow: hidden;
}

.card + .card {
  margin-top: 16px;
}

.card-header {
  background: #e0e0e0;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 14px;
}

.contact-table {
  width: 100%;
  border-collapse: collapse;
}

.contact-table td {
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
