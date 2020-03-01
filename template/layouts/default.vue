<template>
  <div>
    <nuxt />
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutFooter from '@/layouts/partials/LayoutFooter'

export default {
  name: 'LayoutDefault',
  components: { LayoutFooter }
}
</script>
