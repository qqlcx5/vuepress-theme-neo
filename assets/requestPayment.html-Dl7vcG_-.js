import{_ as e,c as i,o as a,a as n}from"./app-7eMFvEA8.js";const l={},s=n(`<h1 id="面试官-说说微信小程序的支付流程" tabindex="-1"><a class="header-anchor" href="#面试官-说说微信小程序的支付流程" aria-hidden="true">#</a> 面试官：说说微信小程序的支付流程？</h1><p><img src="https://static.vue-js.com/2266fff0-34a0-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>微信小程序为电商类小程序，提供了非常完善、优秀、安全的支付功能</p><p>在小程序内可调用微信的<code>API</code>完成支付功能，方便、快捷</p><p>场景如下图所示：</p><p><img src="https://static.vue-js.com/6e0cff40-34a0-11ec-a752-75723a64e8f5.png" alt=""></p><p><img src="https://static.vue-js.com/34864830-34a0-11ec-8e64-91fdec0f05a1.png" alt=""></p><ul><li>用户通过分享或扫描二维码进入商户小程序，用户选择购买，完成选购流程</li><li>调起微信支付控件，用户开始输入支付密码</li><li>密码验证通过，支付成功。商户后台得到支付成功的通知</li><li>返回商户小程序，显示购买成功</li><li>微信支付公众号下发支付凭证</li></ul><h2 id="二、流程" tabindex="-1"><a class="header-anchor" href="#二、流程" aria-hidden="true">#</a> 二、流程</h2><p>以电商小程序为例</p><p>支付流程图如下所示：</p><p><img src="https://static.vue-js.com/76b66780-34a0-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>具体的做法：</p><ul><li>打开某小程序，点击直接下单</li><li>wx.login获取用户临时登录凭证code，发送到后端服务器换取openId</li><li>在下单时，小程序需要将购买的商品Id，商品数量，以及用户的openId传送到服务器</li><li>服务器在接收到商品Id、商品数量、openId后，生成服务期订单数据，同时经过一定的签名算法，向微信支付发送请求，获取预付单信息(prepay_id)，同时将获取的数据再次进行相应规则的签名，向小程序端响应必要的信息</li><li>小程序端在获取对应的参数后，调用wx.requestPayment()发起微信支付，唤醒支付工作台，进行支付</li><li>接下来的一些列操作都是由用户来操作的包括了微信支付密码，指纹等验证，确认支付之后执行鉴权调起支付</li><li>鉴权调起支付：在微信后台进行鉴权，微信后台直接返回给前端支付的结果，前端收到返回数据后对支付结果进行展示</li><li>推送支付结果：微信后台在给前端返回支付的结果后，也会向后台也返回一个支付结果，后台通过这个支付结果来更新订单的状态</li></ul><p>其中后端响应数据必要的信息则是<code>wx.requestPayment</code>方法所需要的参数，大致如下：</p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>wx.requestPayment({
  // 时间戳
  timeStamp: &#39;&#39;,
  // 随机字符串
  nonceStr: &#39;&#39;,
  // 统一下单接口返回的 prepay_id 参数值
  package: &#39;&#39;,
  // 签名类型
  signType: &#39;&#39;,
  // 签名
  paySign: &#39;&#39;,
  // 调用成功回调
  success () {},
  // 失败回调
  fail () {},
  // 接口调用结束回调
  complete () {}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数表如下所示：</p><p><img src="https://files.mdnice.com/user/155/48efed1f-d67f-45a7-ab2c-89a6424fafa0.png" alt=""></p><h2 id="三、结束" tabindex="-1"><a class="header-anchor" href="#三、结束" aria-hidden="true">#</a> 三、结束</h2><p>小程序支付和以往的网页、APP微信支付大同小异，可以说小程序的支付变得更加简洁，不需要设置支付目录、域名授权等操作</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_8_0.shtml</li><li>https://juejin.cn/post/6844903895970349064</li></ul>`,23),d=[s];function c(t,r){return a(),i("div",null,d)}const u=e(l,[["render",c],["__file","requestPayment.html.vue"]]);export{u as default};
