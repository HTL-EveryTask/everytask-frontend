<template>
  <div class="w-40 shadow relative">
    <input class="h-8" type="text" v-model="search" />
    <div class="overflow-scroll max-h-40">
      <div
        v-for="entry in filteredEntries"
        :key="entry"
        @click="selectEntry(entry)"
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
  },

  data() {
    return {
      search: "",
      filteredEntries: this.entries,
    };
  },

  methods: {
    filterEntries() {
      this.filteredEntries = this.entries.filter((entry) => {
        return entry.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    selectEntry(entry) {
      this.$emit("select", entry);
    },
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
