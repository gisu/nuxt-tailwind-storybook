<template>
  <div class="rounded shadow-lg mb-20px p-20px">
    <div
      :style="{ fontSize: size}"
      class="truncate mb-10px">The quick brown fox jumps over the lazy dog</div>
    <div>
      <div class="mb-5px">{{ fontSize }}</div>
      <pre class="text-sm bg-transparent border-0 p-0 mb-0">.text-{{ name }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SBFontsize',
  props: {
    size: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    fontSize () {
      if (this.size.includes('rem')) {
        const baseFontSize = 10
        const size = parseFloat(this.size)
        return `${this.size} / ${size * baseFontSize}px`
      } else {
        return `${this.size}`
      }
    }
  }
}
</script>
