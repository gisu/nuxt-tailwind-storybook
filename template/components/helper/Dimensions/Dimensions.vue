<script>
/**
 * Example:
 * <Dimensions>
 *   <h3
 *     slot-scope="{ width }"
 *     class="text-30p md:text-40p mb-20p"
 *     :class="[width > 400 ? 'bg-red' : '']"
 *   >
 *     ...
 *   </h3>
 * </Dimensions>
 */
import ResizeObserver from 'resize-observer-polyfill'

export default {
  name: 'Dimensions',

  data () {
    return {
      width: null,
      height: null
    }
  },
  computed: {
    dimensionObserver () {
      const self = this
      return new ResizeObserver(([entry]) => {
        self.width = entry.contentRect.width
        self.height = entry.contentRect.height
      })
    }
  },
  mounted () {
    this.dimensionObserver.observe(this.$el)
  },

  destroyed () {
    this.dimensionObserver.disconnect()
  },

  render () {
    return this.$scopedSlots.default({
      width: this.width,
      height: this.height
    })
  }
}
</script>
