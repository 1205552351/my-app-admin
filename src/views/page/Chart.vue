<template>
  <div class="index">
    <card />
    <line-chart />
  </div>
</template>
<script>
import Card from '@/components/Card.vue';
import LineChart from '@/components/LineChart.vue';

export default {
  components: {
    Card,
    LineChart,
  },
};
</script>
