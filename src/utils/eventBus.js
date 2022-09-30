class EventBus {
  constructor() {
    this.events = this.events || new Object();
  }
  //发布事件，参数是事件的type和需要传递的参数
  emit = function (type, ...args) {
    let e;
    e = this.events[type];
    // 查看这个type的event有多少个回调函数，如果有多个需要依次调用。
    if (!e) return;
    if (Array.isArray(e)) {
      for (let i = 0; i < e.length; i++) {
        e[i] && e[i].apply(this, args);
      }
    } else {
      e[0] && e[0].apply(this, args);
    }
  };

  //监听函数，参数是事件type和触发时需要执行的回调函数
  addListener = function (type, fun) {
    const e = this.events[type];
    if (!e) {
      //如果从未注册过监听函数，则将函数放入数组存入对应的键名下
      this.events[type] = [fun];
    } else {
      //如果注册过，则直接放入
      e.push(fun);
    }
  };

  // 移除监听
  removeListener = function (type) {
    const e = this.events[type];
    if (!e) return;
    delete this.events[type];
  };

  //移除所有监听
  removeAll = function () {
    //移除所有监听函数
    if (this.events.length > 0) {
      this.events.length = 0;
    }
  };

  // 查询type
  cmd = function (type) {
    return this.events[type];
  };

  check = function (type) {
    return this.events;
  };
  once = function (type, fun) {
    const e = this.events[type];
    if (!e) {
      this.events[type] = [fun];
    } else {
      e.length = 0;
      e.push(fun);
    }
  };
}

const eventBusObj = (window.eventBus = new EventBus());
export default eventBusObj;
