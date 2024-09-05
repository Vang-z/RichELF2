<template>
  <div id="donateMainBox">
    <a id="github" href="https://github.com/Kaiyuan/donate-page" target="_blank" class="pos-f tr3" title="Github">
      <svg height="24px" id="Layer_1" viewBox="0 0 24 24" width="24px" xml:space="preserve"
           xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M14.435,12.973c0.269,0,0.492,0.133,0.686,0.396c0.192,0.265,0.294,0.588,0.294,0.975c0,0.385-0.102,0.711-0.294,0.973    c-0.193,0.265-0.417,0.396-0.686,0.396c-0.278,0-0.522-0.131-0.715-0.396c-0.192-0.262-0.294-0.588-0.294-0.973    c0-0.387,0.102-0.71,0.294-0.975C13.912,13.105,14.156,12.973,14.435,12.973 M17.875,9.414C18.621,10.225,19,11.209,19,12.367    c0,0.748-0.086,1.423-0.259,2.023c-0.175,0.597-0.394,1.084-0.654,1.459c-0.264,0.376-0.588,0.705-0.974,0.989    c-0.386,0.286-0.741,0.492-1.065,0.623c-0.325,0.132-0.695,0.233-1.111,0.306c-0.417,0.071-0.726,0.111-0.943,0.123    c-0.213,0.009-0.438,0.014-0.685,0.014c-0.055,0-0.243,0.004-0.547,0.015c-0.301,0.013-0.56,0.016-0.762,0.016    s-0.461-0.003-0.762-0.016c-0.304-0.011-0.492-0.015-0.547-0.015c-0.246,0-0.472-0.005-0.685-0.014    c-0.218-0.012-0.526-0.052-0.943-0.123c-0.423-0.072-0.786-0.174-1.111-0.306c-0.324-0.131-0.68-0.337-1.064-0.623    c-0.387-0.284-0.711-0.613-0.975-0.989c-0.261-0.375-0.479-0.862-0.654-1.459C5.086,13.79,5,13.115,5,12.367    c0-1.158,0.379-2.143,1.125-2.953C6.043,9.373,6.04,8.967,6.117,8.197C6.18,7.426,6.344,6.715,6.612,6.065    c0.934,0.099,2.09,0.629,3.471,1.581C10.549,7.527,11.184,7.463,12,7.463c0.852,0,1.491,0.064,1.918,0.184    c0.629-0.425,1.23-0.771,1.805-1.034c0.584-0.261,1.005-0.416,1.269-0.457l0.396-0.09c0.27,0.649,0.434,1.36,0.496,2.132    C17.96,8.967,17.957,9.373,17.875,9.414 M12.03,17.234c1.688,0,2.954-0.202,3.821-0.607c0.855-0.404,1.292-1.238,1.292-2.496    c0-0.73-0.273-1.34-0.822-1.828c-0.278-0.263-0.613-0.425-0.989-0.486c-0.375-0.061-0.949-0.061-1.72,0    c-0.769,0.062-1.298,0.09-1.582,0.09c-0.385,0-0.8-0.018-1.319-0.059c-0.52-0.04-0.928-0.065-1.223-0.078    c-0.294-0.009-0.609,0.027-0.958,0.108c-0.345,0.082-0.629,0.224-0.853,0.425c-0.521,0.469-0.79,1.077-0.79,1.828    c0,1.258,0.426,2.092,1.28,2.496c0.85,0.405,2.113,0.607,3.802,0.607H12.03 M9.596,12.973c0.268,0,0.492,0.133,0.685,0.396    c0.192,0.265,0.294,0.588,0.294,0.975c0,0.385-0.102,0.711-0.294,0.973c-0.192,0.265-0.417,0.396-0.685,0.396    c-0.279,0-0.522-0.131-0.716-0.396c-0.192-0.262-0.294-0.588-0.294-0.973c0-0.387,0.102-0.71,0.294-0.975    C9.073,13.105,9.316,12.973,9.596,12.973"/></g></g></svg>
    </a>
    <!-- <div id="DonateText" class="tr3">Sponsor</div>-->
    <ul id="donateBox" class="list pos-f tr3">
      <li id="PayPal" data-footnote="暂未开放">
        <!-- <a href="https://www.paypal.me/" target="_blank">PayPal</a>-->
      </li>
      <li id="BTC" data-footnote="暂未开放">
        <!-- <button id="BTCBn" data-clipboard-target="#btc-key" alt="Copy to clipboard">Bitcoin</button> -->
      </li>
      <li id="AliPay">AliPay</li>
      <li id="WeChat">WeChat</li>
    </ul>
    <div id="QRBox" class="pos-f left-100">
      <div id="MainBox"></div>
    </div>
    <!-- Bitcoin 账号 -->
    <input id="btc-key" type="text" value="" readonly="readonly">
  </div>
</template>

<script setup lang="ts">
import {onMounted, nextTick} from "vue";

onMounted(async () => {
  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };
  await loadScript("https://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.3.min.js");
  await nextTick();

  window.jQuery(document).ready(function () {
    const QRBox = window.jQuery("#QRBox");
    const MainBox = window.jQuery("#MainBox");
    const BTCQR = "images/BTCQR.png";
    const AliPayQR = "/assets/images/AliPayQR.jpg";
    const WeChanQR = "/assets/images/WeChatQR.jpg";

    function showQR(QR) {
      if (QR) {
        MainBox.css("background-image", "url(" + QR + ")");
      }
      window.jQuery("#DonateText, #donateBox, #github").addClass("blur");
      QRBox.fadeIn(300, function () {
        MainBox.addClass("showQR");
      });
    }

    window.jQuery("#donateBox>li").click(function () {
      const thisID = window.jQuery(this).attr("id");
      if (thisID === "BTC") {
        // showQR(BTCQR);
      } else if (thisID === "AliPay") {
        showQR(AliPayQR);
      } else if (thisID === "WeChat") {
        showQR(WeChanQR);
      }
    });

    MainBox.click(function () {
      MainBox.removeClass("showQR").addClass("hideQR");
      setTimeout(function () {
        QRBox.fadeOut(300, function () {
          MainBox.removeClass("hideQR");
        });
        window.jQuery("#DonateText, #donateBox, #github").removeClass("blur");
      }, 600);
    });
  });
});
</script>

<style lang="scss" scoped>
img {
  border-width: 0;
}

a {
  color: #000;
  text-decoration: none;
  outline: none;
  border: none;
}

.list, .list li, .list-left li {
  list-style: none none;
  margin: 0;
  padding: 0;
}

.pos-f {
  position: absolute;
}

.left-100 {
  width: 100%;
  height: 100%;
}

.blur {
  -webkit-filter: blur(3px);
  filter: blur(3px);
}

.tr3 {
  transition: all .3s;
}

#donateMainBox {
  position: relative;
  height: 32px;
  top: 24px;
}

#DonateText {
  position: absolute;
  font-size: 12px;
  width: 70px;
  height: 70px;
  line-height: 70px;
  color: #fff;
  background: #ffd886 url(/assets/images/like.svg) no-repeat center 10px;
  background-size: 20px;
  border-radius: 35px;
  text-align: center;
  left: calc(50% - 120px);
  top: calc(50% - 60px);
  z-index: -1;
  transform: rotatez(-15deg);
}

#donateBox {
  left: calc(50% - 150px);
  top: calc(50% - 15px);
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 299px;
  height: 28px;
  float: left;
  z-index: 1;
}

#donateBox li {
  width: 74px;
  float: left;
  text-align: center;
  border-left: 1px solid #ddd;
  background: var(--donate-color) no-repeat center center;
  background-size: 45px;
  transition: all .3s;
  cursor: pointer;
  overflow: hidden;
  line-height: 600px;
  height: 28px;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  opacity: 0.5;
}

#donateBox li:hover {
  background-color: var(--donate-hover-color);
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
  opacity: 1;
}

#donateBox > li:first-child {
  border-width: 0;
}

#donateBox a {
  display: block;
}

#donateBox #PayPal {
  background-image: url(/assets/images/paypal.svg);
}

#donateBox > #BTC {
  background-image: url(/assets/images/bitcoin.svg);
  line-height: 28px;
}

#donateBox > #PayPal:hover, #BTC:hover, {
  overflow: visible;
}

#BTC > button {
  opacity: 0;
  cursor: pointer;
}

#donateBox #AliPay {
  background-image: url(/assets/images/alipay.svg);
}

#donateBox #WeChat {
  background-image: url(/assets/images/wechat.svg);
}

#QRBox {
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.0);
  display: none;
  perspective: 400px;
}

#MainBox {
  cursor: pointer;
  position: absolute;
  text-align: center;
  width: 200px;
  height: 200px;
  left: calc(50% - 100px);
  top: calc(50% - 100px);
  background: #fff no-repeat center center;
  background-size: 190px;
  border-radius: 6px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: all 1s ease-in-out;
  transform-style: preserve-3d;
  transform-origin: center center;
  overflow: hidden;
}

#btc-key {
  opacity: 0;
  width: 2px;
  height: 8px;
  overflow: hidden;
  left: -2px;
  top: -8px;
}

#github {
  width: 24px;
  height: 24px;
  left: calc(50% + 135px);
  top: calc(50% - 30px);
  background-size: contain;
  transform: rotatez(15deg);

  svg {
    fill: var(--svg-color);
  }
}

[data-footnote] {
  position: relative;
  overflow: hidden;
}

[data-footnote]:hover {
  overflow: visible;
}

[data-footnote]::before, [data-footnote]::after {
  position: absolute;
  transition: all .3s;
  transform: translate3d(-50%, 0, 0);
  opacity: 0;
  left: 37px;
  z-index: 10;
}

[data-footnote]::before {
  content: attr(data-footnote);
  border-radius: 6px;
  background-color: rgba(100, 100, 100, 0.8);
  color: #fff;
  height: 24px;
  line-height: 24px;
  padding: 0 6px;
  font-size: 12px;
  white-space: nowrap;
  top: -24px;
  left: 37px;
}

[data-footnote]::after {
  content: "";
  border: 5px solid;
  border-color: rgba(100, 100, 100, 0.8) transparent transparent transparent;
  top: 0;
  left: 37px;
}

[data-footnote]:hover::before, [data-footnote]:hover::after {
  opacity: 1;
}

[data-footnote]:hover::before, [data-footnote]:hover::after {
  transform: translate3d(-50%, -7px, 0);
}

#MainBox.showQR {
  opacity: 1;
  animation-name: showQR;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation: showQR 3s ease-in-out 0s 1 normal forwards;
}

@keyframes showQR {
  from {
    transform: rotateX(90deg);
  }
  8% {
    opacity: 1;
    transform: rotateX(-60deg);
  }
  18% {
    opacity: 1;
    transform: rotateX(40deg);
  }
  34% {
    opacity: 1;
    transform: rotateX(-28deg);
  }
  44% {
    opacity: 1;
    transform: rotateX(18deg);
  }
  58% {
    opacity: 1;
    transform: rotateX(-12deg);
  }
  72% {
    opacity: 1;
    transform: rotateX(9deg);
  }
  88% {
    opacity: 1;
    transform: rotateX(-5deg);
  }
  96% {
    opacity: 1;
    transform: rotateX(2deg);
  }
  to {
    opacity: 1;
  }
}

#MainBox.hideQR {
  opacity: 1;
  animation-name: hideQR;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation: hideQR 0.5s ease-in-out 0s 1 normal forwards;
}

@keyframes hideQR {
  from {
  }
  20%, 50% {
    transform: scale(1.08, 1.08);
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: rotateZ(40deg) scale(0.6, 0.6);
  }
}
</style>
