<template>
  <div class="content-sections">
    <section
      v-for="(section, index) in transformedSections"
      :key="index"
      class="content-sections__section"
    >
      <component :is="section.component" :section="section.fields" />
    </section>
  </div>
</template>

<script>
import { capitalize } from '~/utils/transform-string'

export default {
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    /**
     * Returns the transformed sections.
     * @returns {array}
     */
    transformedSections() {
      return this.sections.map((section) => {
        const name = capitalize(section.__typename)

        return {
          component: () => import(`~/sections/${name}.vue`),
          type: section.__typename,
          fields: section
        }
      })
    }
  }
}
</script>

<style lang="scss">
.content-sections {
  &__section {
    margin: $LAYOUT_S 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @include mq($from: large) {
    &__section {
      margin: $LAYOUT_M 0;
    }
  }
}
</style>
