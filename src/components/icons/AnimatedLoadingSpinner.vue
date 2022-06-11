<template>
  <!-- animated loading spinner-->
  <svg>
    <circle
      ref="circle"
      cx="50"
      cy="50"
      r="40"
      stroke="#85849a"
      stroke-width="10"
      stroke-dasharray="360"
      stroke-linecap="round"
      :style="{
        strokeDashoffset: circleDashoffset,
        transition: circleTransition,
      }"
    ></circle>

    <path
      ref="check"
      d="M91 40L56.4028 88L38 71.3333"
      stroke="#3F518F"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
      :style="{
        strokeDashoffset: checkDashoffset,
        transition: checkTransition,
      }"
    ></path>

    <animate
      attributeName="stroke-dashoffset"
      values="360;0"
      dur="0.6s"
      begin="indefinite"
      ref="circleAnimation"
    ></animate>

    <animate
      attributeName="stroke-dashoffset"
      values="0;360"
      dur="0.6s"
      begin="indefinite"
      ref="checkAnimation"
    ></animate>
  </svg>
</template>

<script>
export default {
  name: "AnimatedLoadingSpinner",

  data() {
    return {
      circleDashoffset: "360",
      circleTransition: "all 0.6s ease-in-out",
      checkDashoffset: "0",
      checkTransition: "all 0.6s ease-in-out",
    };
  },
};
</script>

<style scoped></style>
