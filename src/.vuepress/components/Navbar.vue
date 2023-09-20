<script setup lang="ts">
import {ref, onMounted, nextTick} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import "aplayer/dist/APlayer.min.css";


let APlayer: any;
let showAPlayer = ref(false);
let musicList = [];

const toggleAPlayer = () => {
  showAPlayer.value = !showAPlayer.value;
};

const closeAPlayer = () => {
  if (showAPlayer.value) {
    showAPlayer.value = false;
  }
};

const insertMenu = () => {
  const navCenterElm = document.querySelector(".vp-navbar-end");
  if (!navCenterElm) return;

  if (!document.querySelector("#aplayer-menu")) {
    const elm = document.createElement("div");
    elm.id = "aplayer-menu";
    elm.classList.add("nav-item");
    elm.innerHTML = `<svg id="aplayer-icon"  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>`; // spin="true"
    navCenterElm.appendChild(elm);
  }

  const menu = document.querySelector("#aplayer-menu") as HTMLElement;
  menu.onclick = (event) => {
    toggleAPlayer();
    event.stopPropagation();
  };

  const aplayerWrapper = document.querySelector(".aplayer-wrapper") as HTMLElement;
  aplayerWrapper.onclick = (event) => {
    event.stopPropagation();
  };
};

const NewPlayer = () => {
  if (!APlayer) return;
  const Win: any = window;
  const playElm = document.getElementById("aplayer");
  if (!playElm) return;
  if (musicList.length < 1) {
    setTimeout(() => {
      NewPlayer();
    }, 200)
    return;
  }
  if (playElm.classList.contains("aplayer")) return;
  Win.globalAplayer = new APlayer({
    container: document.getElementById("aplayer"),
    audio: musicList,
    theme: "#f26d6d",
    mini: false,
    autoplay: false,
    loop: "all",
    order: "random",
    preload: "auto",
    volume: 1,
    mutex: true,
    listFolded: false,
    listMaxHeight: "240px",
    lrcType: 3,
    storageName: "aplayer",

  });
};


onMounted(() => {
  const router = useRouter();

  axios({
    method: "get",
    url: "https://api.injahow.cn/meting/?type=playlist&id=3545749124&server=tencent",
    params: {},
  }).then((response) => {
    const data = response.data;
    if (data && data.length > 0) {
      musicList = data.map(music => {
        const name = music.name;
        const artist = music.artist;
        const url = music.url;
        const lrc = music.lrc;
        const cover = music.pic;
        return {name, artist, url, lrc, cover};
      });
    }
  });

  import("aplayer").then((res) => {
    nextTick(() => {
      APlayer = res.default;
      insertMenu();
      NewPlayer();
      window.document.body.onclick = () => {
        closeAPlayer();
      };
    });

    router.beforeEach(() => {
      setTimeout(() => {
        insertMenu();
        NewPlayer();
      }, 50);
    });
  });
});

</script>

<template>
  <ClientOnly>
    <div class="aplayer-wrapper">
      <div class="aplayer-main-wrapper" :class="{ hide: !showAPlayer }">
        <div class="close" @click="closeAPlayer">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
          </svg>
        </div>
        <div id="aplayer"></div>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
.aplayer-wrapper {
  position: fixed;
  z-index: 999;
  cursor: pointer;
  user-select: none;
  max-height: 240px;
}

.aplayer-main-wrapper {
  background: #fff;
  position: fixed;
  top: calc(50% - 120px);
  left: calc(50% - min(350px, 48vw));
  width: min(700px, 96vw);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .07), 0 1px 5px 0 rgba(0, 0, 0, .1);
  border-radius: 3px;
  line-height: normal;
  transition: 0.3s;
  transform: scale(1);
  opacity: 1;

  &.hide {
    left: 80%;
    top: -20px;
    opacity: 0;
    transform: scale(0);
    visibility: hidden;
  }

  .aplayer {
    margin: 0;
    font-family: JetBrainsMono, serif;
  }

  .close {
    position: absolute;
    right: 8px;
    top: 8px;
    user-select: none;
    cursor: pointer;
    font-size: 18px;
    z-index: 11;
    border-radius: 100px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    svg {
      fill: #858585;
    }
  }
}

#aplayer-menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: rgba(153, 153, 153, 1);
  }

  svg:hover {
    fill: var(--theme-color);
  }
}

.aplayer-volume-bar-wrap, .aplayer-volume-bar {
  display: none;
}
</style>