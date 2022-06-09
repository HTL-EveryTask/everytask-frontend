<template>
  <div class="w-40 shadow rounded-lg">
    <input ref="input" class="h-8" type="text" v-model="search" @input="selectEntry(null)" @focus="show = true" @blur="show = false" :disabled="!entries.length" @change="onEnter"/>
    <div v-if="show" class="w-40 overflow-y-scroll max-h-40 bg-ghostwhite absolute">
      <div
        v-for="entry in filteredEntries"
        :key="entry"
        @mousedown="selectEntry(entry)"
      >
        {{ entry.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchDropDown",

  props: {
    entries: {
      type: Array,
      default: () => [],
    },
    show: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      search: "",
      filteredEntries: this.entries,
      selectedEntry: null,
    };
  },

  methods: {
    filterEntries() {
      this.filteredEntries = this.entries.filter((entry) => {
        return entry.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    selectEntry(entry) {
      if(!entry) {
        this.selectedEntry = null;
        this.$emit("select", entry);
        this.$refs.input.style.backgroundColor = '#F3F4FF';
        this.$refs.input.style.color = 'black';
        return;
      }
      this.search = entry.name;
      this.selectedEntry = entry;
      this.$refs.input.style.backgroundColor = '#' + entry.backColor + '80';
      this.$refs.input.style.color = '#' + entry.foreColor;
      this.$emit("select", entry);
    },

    onEnter() {
      let entry = this.entries.find((entry) => {
        return entry.name.toLowerCase() === this.search.toLowerCase();
      });
      if(entry) {
        this.selectEntry(entry);
      }
    }
  },

  watch: {
    search() {
      this.filterEntries();
      console.log(this.filteredEntries);
    },
  },
};
</script>

<style scoped>

</style>
