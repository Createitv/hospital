<script lang="ts" setup>
import { ref } from 'vue'
import { h } from 'vue'
import * as pkg from "../../../package.json"
import { ElNotification } from 'element-plus'
const activeIndex = ref('1')
const open1 = () => {
  ElNotification({
    title: '版本信息',
    type: 'success',
    message: h('i', { style: 'color: teal' }, `版本号: ${pkg.version} 开发者: ${pkg.author}`),
    duration: 1500,
    showClose: true,
  })
}
const open2 = () => {
  ElNotification({
    title: '作者微信',
    type: 'success',
    message: h('i', { style: 'color: teal' }, `navalism1`),
    duration: 3500,
    showClose: true,
  })
}
function handleSelect(key: string, keyPath: string[]) {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect"
    :router="true">
    <el-menu-item index="/" class="scale-60">
      <img class="" style="width: 100px" src="/src/assets/wails.png" alt="Element logo">
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/home">
      <el-icon>
        <location />
      </el-icon>
      文件上传区域
    </el-menu-item>
    <el-menu-item index="/settings">
      <el-icon>
        <Tools />
      </el-icon>
      科室匹配配置
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <setting />
        </el-icon>
        设置
      </template>
      <el-menu-item index="2-1" @click="open1">
        <el-icon>
          <Operation />
        </el-icon>
        系统版本
      </el-menu-item>
      <el-menu-item index="2-2" @click="open2">
        <el-icon>
          <Notebook />
        </el-icon>
        联系作者
      </el-menu-item>
      <!-- <el-menu-item index="2-3">
        item three
      </el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>
          item four
        </template>
        <el-menu-item index="2-4-1">
          item one
        </el-menu-item>
        <el-menu-item index="2-4-2">
          item two
        </el-menu-item>
        <el-menu-item index="2-4-3">
          item three
        </el-menu-item> -->
      <!-- </el-sub-menu> -->
    </el-sub-menu>
  </el-menu>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}</style>
