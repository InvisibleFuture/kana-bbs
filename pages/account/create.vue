<template lang="pug">
.account-create.circumscription
  div.card
    .left CREATE
    .right
      input(placeholder="account")
      input(placeholder="password")
      button Submit
</template>

<style lang="sass">
.account-create
  padding-top: 6rem
  .card
    display: flex
    width: 48rem
    margin: auto
    background-color: var(--background-main)
    margin-top: 6rem
    padding: 6rem 4rem
    border-radius: 1rem
    box-sizing: border-box
    .left
      flex: 1
      font-size: 4rem
      font-weight: bold
      color: #ff8888
      display: flex
      justify-content: center
      align-items: center
    .right
      width: 18rem
      display: flex
      flex-direction: column
      input, button
        margin-bottom: 1rem
        font-size: 1.2rem
        padding: .75rem
        border: none
        border-radius: .5rem
</style>
