<template lang="pug">
.model-box
  .wrap
    .cube
      .front
      .back
      .left
      .right
      .top
      .bottom

      i.ifront
      i.iback
      i.ileft
      i.iright
      i.itop
      i.ibottom
</template>

<style lang="sass">
.model-box
  .wrap
    height: 200px
    margin-top: 200px
    perspective: 1000px
    perspective-origin: 50% 50%
    background: #222
    border-radius: .5rem
    .cube
      position: relative
      width: 12.5rem
      height: 12.5rem
      margin: 0 auto
      transform-style: preserve-3d
      animation: box 15s linear infinite
      transform: rotateX(0deg) rotateY(0deg)
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
        background: linear-gradient(blueviolet,dodgerblue)
        background-size: auto 100%
        transform: translateZ(100px)
      .back
        background: linear-gradient(blueviolet,dodgerblue)
        background-size: auto 100%
        transform: translateZ(-100px) rotateY(180deg)
      .right
        background: linear-gradient(blueviolet,dodgerblue)
        background-size: auto 100%
        transform: rotateY(90deg) translateZ(100px)
      .left
        background: linear-gradient(blueviolet,dodgerblue)
        background-size: auto 100%
        transform: rotateY(-90deg) translateZ(100px)
      .top
        background: linear-gradient(blueviolet,blueviolet)
        background-size: auto 100%
        transform: rotateX(90deg) translateZ(100px)
      .bottom
        background: linear-gradient(dodgerblue,dodgerblue)
        background-size: auto 100%
        transform: rotateX(-90deg) translateZ(100px)
      i
        position: absolute
        top: 50%
        left: 50%
        margin-top: -50px
        margin-left: -50px
        width: 100px
        height: 100px
      .ifront
        background: linear-gradient(blueviolet,dodgerblue)
        background-size: auto 100%
        transform: translateZ(50px)
      .iback
        background: linear-gradient(blueviolet,dodgerblue)
        background-size: auto 100%
        transform: translateZ(-50px) rotateY(180deg)
      .iright
        background: linear-gradient(blueviolet,dodgerblue)
        background-size: auto 100%
        transform: rotateY(90deg) translateZ(50px)
      .ileft
        background: linear-gradient(blueviolet,dodgerblue)
        background-size: auto 100%
        transform: rotateY(-90deg) translateZ(50px)
      .itop
        background: linear-gradient(blueviolet,blueviolet)
        background-size: auto 100%
        transform: rotateX(90deg) translateZ(50px)
      .ibottom
        background: linear-gradient(dodgerblue,dodgerblue)
        background-size: auto 100%
        transform: rotateX(-90deg) translateZ(50px)
    .cube:hover
      .front
        background-size: auto 100%
        transform: translateZ(200px)
      .back
        background-size: auto 100%
        transform: translateZ(-200px) rotateY(180deg)
      .right
        background-size: auto 100%
        transform: rotateY(90deg) translateZ(200px)
      .left
        background-size: auto 100%
        transform: rotateY(-90deg) translateZ(200px)
      .top
        background-size: auto 100%
        transform: rotateX(90deg) translateZ(200px)
      .bottom
        background-size: auto 100%
        transform: rotateX(-90deg) translateZ(200px)
@keyframes box
  0%
    transform: rotateX(0) rotateY(0)
  100%
    transform: rotateX(360deg) rotateY(360deg)
</style>
