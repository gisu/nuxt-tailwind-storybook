<template>
  <div
    v-if="colorName"
    class="rounded shadow-lg overflow-hidden mx-20px mb-30px w-1/3 md:w-1/5">
    <div
      class="format-landscape round"
      :style="{ background: colorCode }"
    />
    <div class="p-10px">
      <div
        class="font-bold text-2xl mb-5px"
        v-text="colorName"
      />
      <pre class="mb-5px text-sm bg-transparent border-0 p-0">.bg-{{colorName}}<br>.text-{{colorName}}</pre>
      <p
        v-if="colorCode"
        class="text-gray-darkest text-sm text-right mb-0"
        v-text="colorCode"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SBColor',
  props: {
    colorName: {
      type: String,
      default: ''
    },
    colorCode: {
      type: String,
      default: ''
    }
  }
}
</script>
