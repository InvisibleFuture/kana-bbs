<template lang="pug">
.admin-index
  .ceremony
    .circumscription
      p admin
      p 1. 列出所有用户
      p 2. 列出用户的会话列表
      p 3. 列出用户的ws连接
      p 4. 列出用户的订阅频道
      p 5. 列出用户的绘画
      p 6. 列出消息盒子列表, 通常这属于用户隐私(不建议)
      p 7. 列出系统消息
      p 8. 创建系统频道
      p 9. 发送系统消息向指定用户或指定用户群体
      p 10. 发送功能性消息
      p 11. 变更事件通知
      p 12. 列出对象列表
      p 13. 提供对象检索与排序
      p 15. 还有啥..
      p -----------------------------
      p 主要分为两部分,
      p 1. 标准对象
      p 2. 标准频道
      ul.user-statistics
        li 用户对象的概览
        li 1. 用户总量
        li 2. 本周注册量
        li 3. 今日新增
        li 4. 日活/周活/月活(共用时间轴)
        li 5. 会话的连接数量
        li 6. 会话的连接频率(点击admin时不跳转路由, 而是弹出全屏管理面板,顶部带有有限刻度)
      //.console
      //  p 一个控制台
</template>
