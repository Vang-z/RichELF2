<script setup lang="ts">
import {onMounted, nextTick} from "vue";
import {useRouter} from "vue-router";
// import axios from "axios;


const InsertText = (data) => {
  const Win: any = window;
  clearInterval(Win.Timer);
  let textElm;
  const classElm = document.getElementsByClassName("vp-blog-hero-title");
  if (classElm.length > 0) {
    textElm = classElm[0];
    textElm.id = "hotWord";
  }
  textElm = document.getElementById("hotWord");
  if (!textElm) return;

  textElm.innerHTML = `
<div class="word">
  <div class="left">『</div>
    <span id="hitokoto_text"></span>
  <div class="right">』</div>
</div>
<div class="author" id="hitokoto_author"> ——「${data.from}」</div>
  `;

  const authorElm = document.getElementById('hitokoto_author');
  const hitokotoElm = document.getElementById('hitokoto_text');
  if (!hitokotoElm || !authorElm) return;
  authorElm.style.opacity = "0";
  const txt = data.hitokoto.split("");

  let index = 0;
  let pauseNum = 0;
  let pauseMax = 40;
  let line = false;
  let insertTxt = '';
  Win.Timer = setInterval(() => {
    const el = txt[index];

    if (insertTxt.length < 4) authorElm.style.opacity = '0';
    else authorElm.style.opacity = '1';

    if (pauseNum != 0) {
      pauseNum--;
      if (insertTxt.length == 0 && pauseNum == 0) {
        clearInterval(Win.Timer);
        GetWord();
      }
      return;
    }

    if (line) insertTxt = insertTxt.slice(0, index);
    else insertTxt += el;

    if (line) index--;
    else index++;
    if (index >= txt.length) {
      line = true;
      index = txt.length;
      pauseNum = pauseMax;
    }
    if (index < 0) {
      line = false;
      index = 0;
      pauseNum = pauseMax;
    }
    hitokotoElm.innerHTML = insertTxt;
  }, 200);
};

const GetWord = (path?) => {
  let toPath = window.location.pathname;
  if (path) toPath = path;
  // if (toPath == '/' || toPath == '/en/') {
  if (toPath == '/') {
    // axios({
    //   method: 'get',
    //   url: 'https://v1.hitokoto.cn',
    //   params: {},
    // }).then((response) => {
    //   InsertText(response.data);
    // });
    InsertText({
      "id": -1,
      "uuid": "",
      "hitokoto": "给机器以生命，给岁月以文明。",
      "type": "",
      "from": "Vang-z",
      "from_who": "",
      "creator": "",
      "creator_uid": -1,
      "reviewer": 1,
      "commit_from": "",
      "created_at": "",
      "length": 0
    });
  }
};

onMounted(() => {
  nextTick(() => {
    GetWord();
  });

  const router = useRouter();
  router.afterEach((to) => {
    nextTick(() => {
      GetWord(to.fullPath);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none"></div>
  </ClientOnly>
</template>

<style lang="scss">
#hotWord {
  margin: 1.2rem auto 0;
  font-weight: 600;
  color: rgba($color: #fff, $alpha: 0.95);

  .word {
    position: relative;
    padding: 1rem 2.5rem;
    text-align: center;

    .left {
      position: absolute;
      left: 0;
      top: 0;
    }

    .right {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .author {
    font-weight: 400;
    margin-top: 1rem;
    float: right;
  }
}

.word {
}

#hitokoto_text {
  max-width: 80vw;
  position: relative;
  display: inline-block;
  font-size: 2.25rem;
  font-weight: normal;

  &::after {
    content: "|";
    font-size: 2rem;
    animation: san 0.8s infinite;
  }
}

#hitokoto_author {
  transition: 0.7s;
  font-size: 1rem;
}

@keyframes san {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>