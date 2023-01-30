<template>
  <div class="d-flex justify-center align-center loading py-12">
    <v-progress-circular
      :size="70"
      :width="2"
      color="yt_red"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
    name: 'Loading'
};
</script>
