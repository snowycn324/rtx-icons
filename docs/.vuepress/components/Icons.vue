<template>
  <div class="container">
    <div class="top-menu">
      <input v-model="searchKeyword" class="search-input" placeholder="Input icon name to search" />
      <pick-colors v-model:value="pureColor"></pick-colors>
    </div>
    <div>
      <vue-slider v-model="size" min="8" interval="1" max="30"></vue-slider>
    </div>
    <ul class="icons-container">
      <li v-for="icon in displayedIconsList" :key="icon.name" class="icon-container">
        <component class="icon-self" :is="icon.icon" :color="pureColor" :size="size"></component>
        <span class="icon-label">{{ icon.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { markRaw } from "vue"
import { Add } from "../../../src/icons/Add"
import { Close } from "../../../src/icons/Close"
import { Edit } from "../../../src/icons/Edit"
import { Left } from "../../../src/icons/Left"
import { Back } from "../../../src/icons/Back"
import { Chain } from "../../../src/icons/Chain"
import { Copy } from "../../../src/icons/Copy"
import { Delete } from "../../../src/icons/Delete"
import { Demap } from "../../../src/icons/Demap"
import { Down } from "../../../src/icons/Down"
import { Download } from "../../../src/icons/Download"
import { Hamburger } from "../../../src/icons/Hamburger"
import { Remap } from "../../../src/icons/Remap"
import { Right } from "../../../src/icons/Right"

import { Search } from "../../../src/icons/Search"
import { Trigger } from "../../../src/icons/Trigger"
import { Up } from "../../../src/icons/Up"
import { Updater } from "../../../src/icons/Updater"

import { Erase } from "../../../src/icons/Erase"

export default {
  name: "Icons",
  data() {
    return {
      pureColor: '#000000',
      searchKeyword: '',
      size: 10,
      iconsList: [
        {
          name: "rtx-add",
          icon: markRaw(Add),
        },
        {
          name: "rtx-close",
          icon: markRaw(Close),
        },
        {
          name: "rtx-edit",
          icon: markRaw(Edit),
        },
        {
          name: "rtx-left",
          icon: markRaw(Left),
        },
        {
          name: "rtx-back",
          icon: markRaw(Back),
        },
        {
          name: "rtx-chain",
          icon: markRaw(Chain),
        },
        {
          name: "rtx-copy",
          icon: markRaw(Copy),
        },
        {
          name: "rtx-delete",
          icon: markRaw(Delete),
        },
        {
          name: "rtx-demap",
          icon: markRaw(Demap),
        },
        {
          name: "rtx-down",
          icon: markRaw(Down),
        },
        {
          name: "rtx-download",
          icon: markRaw(Download),
        },
        {
          name: "rtx-hamburger",
          icon: markRaw(Hamburger),
        },
        {
          name: "rtx-remap",
          icon: markRaw(Remap),
        },
        {
          name: "rtx-right",
          icon: markRaw(Right),
        },
        {
          name: "rtx-search",
          icon: markRaw(Search),
        },
        {
          name: "rtx-trigger",
          icon: markRaw(Trigger),
        },
        {
          name: "rtx-up",
          icon: markRaw(Up),
        },
        {
          name: "rtx-updater",
          icon: markRaw(Updater),
        },
        {
          name: "rtx-erase",
          icon: markRaw(Erase),
        },
      ]
    }
  },
  methods: {
    async doCopy(text) {
      await this.$copyText(text)
    },
  },
  computed: {
    displayedIconsList(){
      return this.iconsList.filter((icon) => icon.name.includes(this.searchKeyword.trim()))
    }
  },
}
</script>

<style>
.container {
  min-height: 500px;
}

.top-menu {
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: 30px;
  position: relative;
  left: 55px;
  margin-bottom: 20px;
}

ul,li {
  list-style: none;
  /* padding: 0; */
}

.icons-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  transition: all ease 0.5s;
}

.icon-name {
  width: 200px;
  margin-right: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
}

.icon-value {
  width: 150px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 12px;
  color: gray;
}

.icon-display-box {
  width: 100px;
  height: 40px;
  border-radius: 10px;
}

.search-input {
  color: rgb(61, 58, 58);
  width: 540px;
  padding-left: 15px;
  margin-left: 20px;
  margin-right: 20px;
  height: 40px;
  border-radius: 20px;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 120px;
  height: 80px;
}

.icon-label {
  font-size: 12px;
  margin-top: 5px;
}
</style>