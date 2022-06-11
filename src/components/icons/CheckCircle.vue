<template>
  <svg
    width="128"
    height="128"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="handleClick()"
  >
    <g id="checkcircle" ref="checkCircle">
      <circle
        fill="none"
        stroke="#9E91EA"
        stroke-width="10"
        cx="64"
        cy="64"
        r="52.5"
        stroke-dasharray="360"
        stroke-linecap="round"
        ref="circle"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="360;0"
          dur="0.6s"
          begin="indefinite"
          ref="circleAnimation"
        ></animate>
      </circle>
      <path
        ref="check"
        d="M91 40L56.4028 88L38 71.3333"
        stroke="#3F518F"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<script>
function styleUnchecked() {
  const checkCircle = this.$refs.checkCircle;
  checkCircle.style.transform = "scale(0.8)";
  this.$refs.check.style.transition = "all 0.6s ease-in-out";
  this.$refs.circle.style.transition = "all 0.3s ease-in-out";
  this.$refs.checkCircle.style.transition = "all 0.4s ease-in-out";
  this.$refs.circle.style.strokeWidth = "8";
  this.$refs.circle.style.stroke = "#85849a";
  this.$refs.check.style.strokeWidth = "8";
  this.$refs.check.style.stroke = "#85849a";
}

function styleChecked() {
  const checkCircle = this.$refs.checkCircle;
  checkCircle.style.transform = "scale(1)";
  this.$refs.circle.style.strokeWidth = null;
  this.$refs.circle.style.stroke = null;
  this.$refs.check.style.strokeWidth = null;
  this.$refs.check.style.stroke = null;
  this.$refs.circleAnimation.beginElement();
}

export default {
  name: "CheckCircle",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    const checkCircle = this.$refs.checkCircle;
    checkCircle.style.transform = "scale(0.8)";
    this.$refs.check.style.transition = "all 0.3s ease-in-out";
    this.$refs.circle.style.transition = "all 0.3s ease-in-out";
    this.$refs.checkCircle.style.transition = "all 0.3s ease-in-out";
    this.$refs.circle.style.strokeWidth = "8";
    this.$refs.circle.style.stroke = "#85849a";
    this.$refs.check.style.strokeWidth = "8";
    this.$refs.check.style.stroke = "#85849a";
  },
  methods: {
    handleClick() {
      this.$emit("check");
    },
  },

  watch: {
    checked(newValue) {
      if (newValue) {
        styleChecked.call(this);
      } else {
        styleUnchecked.call(this);
      }
    },
  },
};
</script>

<style scoped>
svg {
  width: 40px;
  height: 40px;
}

#checkcircle {
  transform-origin: center;
}

svg:hover #checkcircle * {
  filter: brightness(0.8);
}
</style>
