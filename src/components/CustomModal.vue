<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    classes="modal-container"
    :drag="true"
    drag-selector=".modal-controls, .header"
    overlay-style="backdrop-filter: blur(5px); background-color: rgba(0, 0, 30, 0.3);"
  >
    <div class="modal-content">
      <div class="modal-controls">
        <button
          class="md:hidden px-6 p-2 text-raisin-100 hover:bg-ghostwhite-700 hover:text-raisin-400 transition-all rounded-br-lg text-2xl font-bold"
          @click="close"
        >
          &lt;
        </button>

        <div class="header md:pl-8 md:p-3 p-5 flex items-center">
          <h2 class="text-2xl font-bold text-raisin">{{ title }}</h2>
        </div>
        <button
          class="hidden md:block ml-auto px-6 p-2 text-raisin-100 hover:bg-ghostwhite-700 hover:text-raisin-400 transition-all rounded-bl-lg text-xl font-bold"
          @click="close"
        >
          X
        </button>
      </div>
      <div class="scroll-container">
        <div class="modal-slot">
          <slot :params="params" :close="close"></slot>
        </div>
      </div>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  name: "CustomModal",
  inheritAttrs: false,

  props: {
    title: {
      type: String,
      default: "Modal",
    },
  },
};
</script>

<style scoped>
::v-deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep(.modal-content) {
  position: relative;
  display: flex;
  flex-direction: column;
  @apply bg-ghostwhite p-8 mx-auto rounded-none md:rounded-2xl text-raisin-500;
  @apply h-screen w-screen md:max-w-2xl md:h-auto flex-col;
}

::v-deep(.vfm__content) {
  margin: 0;
  padding: 0;
  height: auto;
}

.modal-controls {
  @apply -mt-8 -mx-8 rounded-none md:rounded-t-2xl;
  @apply flex items-center items-stretch;
  overflow: hidden;
  @apply bg-ghostwhite-600;
}

.scroll-container {
  overflow-y: auto;
  @apply -mr-8 py-6 md:max-h-[66vh];
}

.modal-slot {
  @apply pr-8;
}

::-webkit-scrollbar {
}
</style>

<style scoped>
.dark-mode div ::v-deep(.modal-content) {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
