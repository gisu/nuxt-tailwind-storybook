<script>
// https://github.com/maoberlehner/transition-to-height-auto-with-vue/blob/master/src/components/TransitionExpand.vue
export default {
  name: 'HeightExpander',
  functional: true,
  render (createElement, context) {
    const data = {
      props: {
        name: context.props.timing ? 'expand-' + context.props.timing : 'expand-fast'
      },
      on: {
        afterEnter (element) {
          // eslint-disable-next-line no-param-reassign
          element.style.height = 'auto'
        },
        enter (element) {
          const { width } = getComputedStyle(element)
          /* eslint-disable no-param-reassign */
          element.style.width = width
          element.style.position = 'absolute'
          element.style.visibility = 'hidden'
          element.style.height = 'auto'
          /* eslint-enable */
          const { height } = getComputedStyle(element)
          /* eslint-disable no-param-reassign */
          element.style.width = null
          element.style.position = null
          element.style.visibility = null
          element.style.height = 0
          /* eslint-enable */
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height
          setTimeout(() => {
            // eslint-disable-next-line no-param-reassign
            element.style.height = height
          })
        },
        leave (element) {
          const { height } = getComputedStyle(element)
          // eslint-disable-next-line no-param-reassign
          element.style.height = height
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height
          setTimeout(() => {
            // eslint-disable-next-line no-param-reassign
            element.style.height = 0
          })
        }
      }
    }
    return createElement('transition', data, context.children)
  }
}
</script>

<style scoped>
  * {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
</style>

<style>
  .expand-fast-enter-active,
  .expand-fast-leave-active {
    transition: height .15s ease-in;
    overflow: hidden;
  }

  .expand-fast-enter,
  .expand-fast-leave-to {
    height: 0;
  }
  .expand-slow-enter-active,
  .expand-slow-leave-active {
    transition: height .6s ease-in;
    overflow: hidden;
  }

  .expand-slow-enter,
  .expand-slow-leave-to {
    height: 0;
  }

  .expand-moderate-enter-active,
  .expand-moderate-leave-active {
    transition: height .3s ease-in;
    overflow: hidden;
  }

  .expand-moderate-enter,
  .expand-moderate-leave-to {
    height: 0;
  }
</style>
