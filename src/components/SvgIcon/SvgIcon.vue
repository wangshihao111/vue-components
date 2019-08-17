<template>
  <svg class="svg-icon" :fill="color" :width="size" :height="size">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    svgClass: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#000'
    },
    size: {
      type: [String, Number],
      default: '1em'
    }
  },
  computed: {
    iconName() {
      return require('./svg/svgs.svg') + '#' + this.icon;
    }
  }
}
</script>

<style scoped>
 
</style>