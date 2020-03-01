<template>
  <portal :to="target">
    <transition name="visible">
      <div
        v-if="openState"
        :class="[
          screenColor,
          zindex,
          middle ? 'items-center' : 'items-start',
          scrollable ? 'overflow-y-scroll' : ''
        ]"
        class="fixed min-h-screen w-full top-0 left-0"
      >
        <div
          :class="[
            scrollable ? 'overflow-y-scroll scrolling-touch py-20p' : 'flex justify-center items-center',
            desktopCentered ? 'md:flex justify-center items-center' : ''
          ]"
          class="h-screen w-full"
        >
          <div
            :class="[modalColor, modalStyle, modalWidth]"
            class="relative mx-auto"
          >
            <div
              v-if="!customClose"
              class="absolute right-0 top-0 p-2 cursor-pointer z-10"
              @click="closeModal()"
            >
              <IconCancel
                class="h-4 w-4"
                :thin="true"
                color="#383737"
              />
            </div>
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
import IconCancel from '@/components/icons/IconCancel/IconCancel'

export default {
  name: 'ModalPorter',
  components: { IconCancel },
  props: {
    /**
     * Keyname from the Portal Target
     */
    target: {
      type: String,
      default: 'modal-place'
    },
    openState: {
      type: Boolean,
      default: false
    },
    screenColor: {
      type: String,
      default: 'bg-trans-black-08'
    },
    modalColor: {
      type: String,
      default: 'bg-white'
    },
    modalStyle: {
      type: String,
      default: ''
    },
    middle: {
      type: Boolean,
      default: true
    },
    modalWidth: {
      type: String,
      default: 'container'
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    desktopCentered: {
      type: Boolean,
      default: true
    },
    customClose: {
      type: Boolean,
      default: false
    },
    zindex: {
      type: String,
      default: 'z-100'
    }
  },

  watch: {
    openState: {
      handler (state) {
        if (this.lockScroll) {
          if (state) {
            document.body.classList.add('overflow-hidden', 'scrolling-touch')
            document.addEventListener('touchmove', e => e.preventDefault(), false)
          } else {
            document.body.classList.remove('overflow-hidden', 'scrolling-touch')
            document.removeEventListener('touchmove', (e) => {})
          }
        }
      }
    }
  },

  created () {
    this.escapeHandler = (e) => {
      if (e.key === 'Escape' && this.openState) {
        this.closeModal()
      }
    }

    if (process.browser) {
      window.addEventListener('keydown', this.escapeHandler) /* eslint-disable-line */
    }
  },
  destroyed () {
    if (process.browser) {
      document.body.classList.remove('overflow-hidden', 'scrolling-touch')
      window.removeEventListener('keydown', this.escapeHandler) /* eslint-disable-line */
      document.removeEventListener('touchmove', (e) => {})
    }
  },

  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
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
  .visible-enter-active,
  .visible-leave-active {
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
  }

  .visible-enter,
  .visible-leave-to {
    opacity: 0;
  }
</style>
