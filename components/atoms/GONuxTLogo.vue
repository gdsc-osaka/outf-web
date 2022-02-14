<template>
  <div class="d-inline-block">
    <div
      class="d-inline-flex justify-center font-weight-black gont-logo-text"
      :class="fontSize"
    >
      <strong class="gont-text-blue">G</strong>
      <strong class="gont-text-red">O</strong>
      <strong class="gont-text-green">Nux</strong>
      <strong class="gont-text-yellow">T</strong>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'GONuxTLogo',
  props: {
    fontSize: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.gont-logo-text {
  letter-spacing: -0.5em;

  .gont-text-blue {
    color: #4285f4;
    display: inline-block;
  }

  .gont-text-red {
    color: #ea4335;
    display: inline-block;
  }

  .gont-text-yellow {
    color: #fbbc04;
    display: inline-block;
  }

  .gont-text-green {
    color: #34a853;
    display: inline-block;
  }
}
</style>
