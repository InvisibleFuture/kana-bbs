<template lang="pug">
.model-box-none
  .wrap
    .cube
      .front
      .back
      .left
      .right
      .top
      .bottom
</template>

<style lang="sass">
.model-box-none
  .wrap
    height: 200px
    margin-top: 80px
    perspective: 1000px
    perspective-origin: 50% 50%
    border-radius: .5rem
    .cube
      position: relative
      width: 8rem
      height: 8rem
      margin: 0 auto
      transform-style: preserve-3d
      animation: box 15s linear infinite
      transform: rotateX(350deg) rotateY(350deg)
      div
        position: absolute
        top: 0
        left: 0
        opacity: 0.8
        width: 100%
        height: 100%
        font-size: 1.25rem
        color: white
        text-align: center
        line-height: 200px
        transition: transform .75s ease-in
      .front
        background: rgba(0, 0, 0, .05)
        background-size: auto 100%
        transform: translateZ(100px)
      .back
        background: rgba(0, 0, 0, .05)
        background-size: auto 100%
        transform: translateZ(-100px) rotateY(180deg)
      .right
        background: rgba(0, 0, 0, .05)
        background-size: auto 100%
        transform: rotateY(90deg) translateZ(100px)
      .left
        background: rgba(0, 0, 0, .05)
        background-size: auto 100%
        transform: rotateY(-90deg) translateZ(100px)
      .top
        background: rgba(0, 0, 0, .05)
        background-size: auto 100%
        transform: rotateX(90deg) translateZ(100px)
      .bottom
        background: rgba(0, 0, 0, .05)
        background-size: auto 100%
        transform: rotateX(-90deg) translateZ(100px)
</style>
