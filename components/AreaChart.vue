<template>
  <apexchart :options="chartOptions" :series="series"></apexchart>
</template>

<script setup lang="ts">
const props = defineProps({
  chartOptions: {
    type: Object,
    required: true
  },
  series: { 
    type: Array,
    required: true
  }
})

</script>
