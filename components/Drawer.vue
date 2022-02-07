<template lang="pug">
.drawwer-background(
  :class="{ show: show, hidden: !show }",
  @click="exit()",
  @keyup.esc="exit()",
  v-focus,
  tabindex="0"
)
  .container.circumscription(
    :class="{ show: show, hidden: !show }",
    @click.stop
  )
    .containerbox
      slot
</template>

<script>
export default {
  data: () => ({
    show: true,
  }),
  mounted() {
    this.stop();
  },
  methods: {
    exit() {
      this.show = false;
      document.referrer === "" ? this.$router.push(".") : this.$router.go(-1);
      this.move();
    },
    /***滑动限制***/
    stop() {
      var mo = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    /***取消滑动限制***/
    move() {
      var mo = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    },
  },
  beforeDestroy() {
    this.move();
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
};
</script>

<style lang="sass">
.drawwer-background
  outline: 0
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 9999
  background: rgba(0, 0, 0, 0.8)
.container
  color: #333333
  position: absolute
  left: 0
  top: 0 //3rem
  right: 0
  bottom: 0
  overflow: auto
  scrollbar-width: none
  -ms-overflow-style: none
  //padding: 2rem 4rem
  //max-width: 1280px
  //margin: 0 auto
  @media (max-width: 1280px)
    //background: #ff1414
    width: 980px
    //top: 0
    //border-radius: 0 0 0 0
  .containerbox
    color: #333333
    background: #ffffff
    border-radius: 2rem 2rem 0 0
    overflow: hidden
    margin-top: 3rem
    min-height: 100%

.container::-webkit-scrollbar
  display: none // Chrome Safari

/* show element */
.drawwer-background.show
  animation: showbackground 0.75s

.drawwer-background.hidden
  animation: hiddenbackground 0.75s

.container.show
  animation: showcontainer 0.75s

.container.hidden
  animation: hiddencontainer 0.75s

@keyframes showbackground
  0%
    opacity: 0
  100%
    opacity: 1
@keyframes hiddenbackground
  0%
    opacity: 1
  100%
    opacity: 0

@keyframes showcontainer
  0%
    opacity: 0
    transform: translate(0, 64px)
  100%
    opacity: 1
    transform: translate(0, 0)
@keyframes hiddencontainer
  0%
    opacity: 1
    transform: translate(0, 0)
  100%
    opacity: 0
    transform: translate(0, 64px)
</style>
