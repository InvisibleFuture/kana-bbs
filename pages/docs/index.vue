<template lang="pug">
.docs-index
  .docs.circumscription
    .outline
      ul
        li 下载安装
        li 接口使用
        li 插件制作
        li 基础开发
    .content
      p 其构建目的是使实现所需越简单越好,, 避免仅为实现一个简单功能而牵涉到一堆较深层级的知识体系
      p SDK
      p 由于实现前端功能为直接目标, 为避免牵涉到其它知识体系, 此处将基于cookie的登录与权限判定逻辑均装入js库以直接调用
      p 
      div
        p import kana from 'kana-sdk'
        p
        p const ctx = new Kana() // 创建实例, 它将在内部自动完成与服务端的通信, 因而不必自己手动处理网络问题
        p console.log(ctx.title) // 站点名字
        p console.log(ctx.info) // 站点信息
        p console.log(ctx.list) // 所有对象类型的列表, 是一个 Map() 对象
        p 
        p const threadlist = ctx.list.get("thread") // 获得 thread 对象类型的实例
        p console.log(threadlist) // 打印主题列表
        p console.log(threadlist[1].posts) // 打印这个对象的评论列表
        p console.log(threadlist[1].posts[1].data) // 打印第二条评论的内容
        p console.log(threadlist[1].posts[1].user.name) // 打印第二条评论的作者名
        p
        p 维度是可变的
        p ctx.list.get("post")
        p 按照某一条件检索获得post列表
</template>

<style lang="sass">
.docs-index
  margin: 8rem 4rem
  .docs
    display: flex
    width: 100%
    .outline
      width: 12rem
      padding: 2rem
      background: #ccefef
    .content
      padding: 2rem
      background: #ffefef
      flex: 1
</style>
