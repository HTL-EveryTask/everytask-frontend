<template>
  <div class="flex align-middle items-center">
    <button
        class="menu-toggle"
        @click="handleShow"
    >
      <span class="material-icons">menu</span>
    </button>
    <div v-if="show" class="flex flex-col max-h-40 bg-ghostwhite absolute ml-10 rounded-2xl p-2 shadow-lg">
      <div
          v-for="option in options"
          :key="option"
          @mousedown="clickOption(option)"
          class="flex items-center"
      >
        <span class="flex-grow">{{ option.name }}</span>
        <span class="material-icons text-sm p-1">{{ option.icon }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Debouncer } from '../models/Debouncer'

export default {
  name: "TaskMenu",

  props: {
    entries: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      options: [{name:'Delete',icon:'delete'}, {name:'Edit',icon:'edit'}],
      show: false,
      debouncer: new Debouncer(3000),
    };
  },

  methods: {

    selectEntry(entry) {
      if (!entry) {
        this.selectedEntry = null;
        this.$emit("select", entry);
        this.$refs.input.style.backgroundColor = '#F3F4FF';
        this.$refs.input.style.color = 'black';
        return;
      }
    },

    clickOption(option) {
      this.show = false;
      this.$emit("clickOption",option.name);
    },

    handleShow() {
      this.show = !this.show;
      this.debouncer.debounce(() => {
        this.show = false;
      });
    },
  },
}
</script>

<style scoped>

</style>
