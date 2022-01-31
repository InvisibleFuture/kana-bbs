const that = {
  controller: new Map(),
  connection: null,
  onclose: null,
  onerror: null,
  onopen: null,
  onmessage: null,
  delay: 0,
  init: (link) => {
    that.connection = new WebSocket(link)
    that.connection.onopen = (event) => {
      that.delay = 0
      console.log("Open connection")
      that.connection.send(JSON.stringify({ fm: "chat", data: `Link Start! ${that.delay}` }))
      // 检查消息版本, 从最后时间向前查20条
      // 当向上滚动时, 从本地最早时间向前查询20条
      // 落日志与合并日志
      if (that.onopen) that.onopen();
    }
    that.connection.onmessage = (event) => {
      console.log("[message]", event.data)
      let data = JSON.parse(event.data)
      console.log(event.data, "xxxxxxxxxxxxxx")
      let call = that.controller.get(data.fm)
      if (call) call(data)
      if (that.onmessage) that.onmessage();
    }
    that.connection.onclose = (event) => {
      if (event.wasClean) {
        console.log(`[close] code=${event.code} reason=${event.reason}`);
      } else {
        that.delay++
        console.log(`[close] 连接中断${that.delay}第次, 尝试重连(延时${that.delay} s)`);
        setTimeout(that.init(link), that.delay * 1000)
      }
      if (that.onclose) that.onclose()
    };
    that.connection.onerror = (error) => {
      console.log(`[error] ${error.message}`);
      if (that.onerror) that.onerror()
    };
  }
}

export default that


// 1. 保存连接全局调用唯一指针
// 2. 保持连接, 并自动重连
// 3. 有限长度缓存消息, 并在向上翻阅时主动载入消息记录
// 4. 主动清除多余的缓存, 经常重载
