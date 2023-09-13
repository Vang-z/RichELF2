<script setup lang="ts">
import {onMounted, nextTick} from "vue";
import {useRouter} from "vue-router";


const InsertRepobeats = () => {
  let textElm;
  const classElm = document.getElementsByClassName("vp-project-card project0");
  if (classElm.length > 0) {
    textElm = classElm[0];
    textElm.id = "repobeats";
    textElm.className = "repobeats";
  }
  textElm = document.getElementById("repobeats");
  if (!textElm) return;
  textElm.innerHTML = `<img style="width: 100%; margin-top: 0.6rem;" src="https://repobeats.axiom.co/api/embed/350170b740014311951346a2bcb706a37a09a5fc.svg" alt=""/>`;
};

onMounted(() => {
  nextTick(() => {
    InsertRepobeats();
  });

  const router = useRouter();
  router.afterEach(() => {
    nextTick(() => {
      InsertRepobeats();
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none"></div>
  </ClientOnly>
</template>
