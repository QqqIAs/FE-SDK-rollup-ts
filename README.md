# SDK
采用rollup+ts开发的前端埋点，支持history，hash，jserror，dom监听等上报操作，利用express写一个本地接口进行测试

PV：页面访问量，即PageView，用户每次对网站的访问均被记录

主要监听了 history 和 hash

history API  go back  forward pushState  replaceState  

history 无法通过 popstate 监听 pushState replaceState  只能重写其函数 在utils/pv

hash 使用hashchange 监听

UV(独立访客)：即Unique Visitor，访问您网站的一台电脑客户端为一个访客

用户唯一表示 可以在登录之后通过接口返回的id 进行设置值 提供了setUserId

也可以使用canvas 指纹追踪技术 Vue3 + vite + Ts + pinia + 实战 + 源码 +全栈_哔哩哔哩_bilibili

本章重点 navigator.sendBeacon

为什么要使用这个去上报

这个上报的机制 跟 XMLHttrequest 对比  navigator.sendBeacon 即使页面关闭了 也会完成请求 而XMLHTTPRequest 不一定

DOM事件监听

主要是给需要监听的元素添加一个属性 用来区分是否需要监听 target-key

js报错上报 error 事件  promise报错 unhandledrejection
