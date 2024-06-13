<template>
  <div>
    <div class="top-menu">
      <input v-model="searchKeyword" class="search-input" placeholder="Input icon name to search" />
      <pick-colors v-model:value="pureColor"/>
    </div>
    <ul class="icons-container">
      <li v-for="icon in displayedIconsList" :key="icon.name" class="icon-container">
        <component :is="icon.icon" :color="pureColor" />
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

export default {
  name: "Icons",
  data() {
    return {
      pureColor: '#000000',
      searchKeyword: '',
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
  }
}
</script>

<style>
.top-menu {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

ul,li {
  list-style: none;
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
  width: 50px;
  height: 50px;
}
</style>