<template>
  <img v-if="isURL()" :data-src="getSrc()" :class="['lazyload']" :alt="alt" />

  <!-- For explanation of v-if v-else see https://vuejs.org/v2/guide/conditional.html -->
  <!--  -->
  <!-- SVGs: default is to include if smaller than 5kb -->
  <!-- For SVGs no img-class can be used, just class -->
  <div
    v-else-if="isSVG()"
    v-html="require('~/static/img/' + stripExtension(getSrc()) + '.svg?raw')"
  />

  <!-- if gif filetype, no reponsive sizes generated, just webp and compression -->
  <!-- Note: for GIF, the `size` property is ignored -->
  <img v-else :data-src="'/img/' + getSrc()" :class="['lazyload']" :alt="alt" />
</template>

<script>
// To use (dependancies): `npm install -D nuxt-lazysizes @nuxtjs/svg` and
// add them to nuxt.config as per their docs on Github.

export default {
  props: {
    // the name of the image in ~/static/ folder
    // choosen automatic based on image extension
    // Use as: <BaseImg src="someimg.svg" ... />
    //   OR    <BaseImg src="img/someimg.png" ... />
    src: {
      type: String,
      default: '',
    },
    // img alt text
    alt: {
      type: String,
      default: '',
    },
  },
  methods: {
    isSVG() {
      return this.src.endsWith('.svg')
    },
    isURL() {
      return this.src.startsWith('http')
    },
    stripExtension(filename) {
      return filename.split('.').slice(0, -1).join('.')
    },
    getSrc() {
      return this.src.replace('/img/', '').replace('img/', '')
    },
  },
}
</script>

<style scoped>
img {
  @apply object-cover;
}
</style>