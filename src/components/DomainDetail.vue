<script setup>
import { ref } from 'vue'
import InfoCard from './InfoCard.vue'
import EventsCard from './EventsCard.vue'
import StateFlagsCard from './StateFlagsCard.vue'
import OwnerCard from './OwnerCard.vue'
import ContactsCard from './ContactsCard.vue'
import NssetCard from './NssetCard.vue'
import KeysetCard from './KeysetCard.vue'

const props = defineProps({
  domain: {
    type: Object,
    required: true,
  },
})

const verbose = ref(false)
</script>

<template>
  <div class="domain-detail">
    <h1 class="domain-name">{{ domain.fqdn }}</h1>
    <label class="verbose-toggle">
      <input type="checkbox" v-model="verbose" class="toggle-input" />
      <span class="toggle-switch" :class="{ active: verbose }"></span>
      <span class="toggle-label">Verbose view</span>
    </label>

    <div class="columns">
      <div class="column-left">
        <InfoCard :domain="domain" />
        <EventsCard :events="domain.events" />
        <StateFlagsCard :state-flags="domain.state_flags" :verbose="verbose" />
      </div>
      <div class="column-right">
        <OwnerCard :owner="domain.owner" />
        <ContactsCard
          :contacts="domain.administrative_contacts"
          :verbose="verbose"
        />
        <NssetCard :nsset="domain.nsset" />
        <KeysetCard :keyset="domain.keyset" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.domain-name {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 8px;
  color: #333;
}

.verbose-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  user-select: none;
}

.toggle-input {
  display: none;
}

.toggle-switch {
  width: 36px;
  height: 20px;
  background: #ccc;
  border-radius: 10px;
  position: relative;
  transition: background 0.2s;
}

.toggle-switch::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: transform 0.2s;
}

.toggle-switch.active {
  background: #29b6f6;
}

.toggle-switch.active::after {
  transform: translateX(16px);
}

.toggle-label {
  color: #999;
  font-size: 14px;
}

.columns {
  display: flex;
  gap: 24px;
}

.column-left {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.column-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 960px) {
  .columns {
    flex-direction: column;
  }
}
</style>
