<script lang="ts" setup>
import * as xlsx from 'xlsx'
import {dataMerge, groupedData} from "../common/collection.ts";
import {exceljsToExcel} from "../common/file.ts";
import {ref} from 'vue'
import {ElNotification} from 'element-plus'
import {useCofigStore} from "@/store/config.ts";
import {unique} from '@/common/collection.ts'
import {sleep} from "@/common/wait.ts";

let excelData = {}
const fullscreenLoading = ref(false)
const showButton = ref(false)
const configStore = useCofigStore()

async function onChange(file) {
  ElNotification({
    title: '上传成功, 等待后台处理',
    type: 'success',
    duration: 1000,
    showClose: true,
  }),
    fullscreenLoading.value = true
  /**
   * 1. 使用原生api去读取好的文件
   */
    // console.log("原始上传的文件", file);
    // 读取文件不是立马能够读取到的，所以是异步的，使用Promise
  const dataBinary = await new Promise((resolve) => {
      // Web API构造函数FileReader，可实例化对象，去调用其身上方法，去读取解析文件信息
      const reader = new FileReader() // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
      // console.log("实例化对象有各种方法", reader);
      reader.readAsBinaryString(file.raw) // 读取raw的File文件
      reader.onload = (ev: ProgressEvent<FileReader>) => {
        // console.log("文件解析流程进度事件", ev);
        resolve(ev.target.result) // 将解析好的结果扔出去，以供使用
      }
    })
  // console.log("读取出的流文件", dataBinary);

  /**
   * 2. 使用xlsx插件去解析已经读取好的二进制excel流文件
   */
  const workBook = xlsx.read(dataBinary, {type: 'binary', cellDates: true})
  // excel中有很多的sheet，这里取了第一个sheet：workBook.SheetNames[0]
  const firstWorkSheet = workBook.Sheets[workBook.SheetNames[0]]
  // 分为第一行的数据，和第一行下方的数据
  const header = getHeaderRow(firstWorkSheet)
  ElNotification({
    title: '后台处理完成',
    type: 'success',
    duration: 1000,
    showClose: true,
  }),
    console.log('读取的excel表头数据（第一行）', header)
  // defval 给空的单元格赋值为空字符串
  // header 以那一行为开头
  const data = xlsx.utils.sheet_to_json(firstWorkSheet, {blankrows: true, defval: ''})
  // data里面添加group数据 给groupedData函数分组
  data.forEach((item: Object) => {
    item['group'] = configStore.config[item['使用部门']]
  })
  // 依据部门分组
  excelData = groupedData(data, "group")
  console.log(`读取所有excel数据${Object.keys(excelData).length} || ${Object.keys(excelData)}`, excelData)
  fullscreenLoading.value = false
  showButton.value = true
}

function getHeaderRow(sheet) {
  const headers = [] // 定义数组，用于存放解析好的数据
  const range = xlsx.utils.decode_range(sheet['!ref']) // 读取sheet的单元格数据
  let C
  const R = range.s.r
  /* start in the first row */
  for (C = range.s.c; C <= range.e.c; ++C) {
    /* walk every column in the range */
    const cell = sheet[xlsx.utils.encode_cell({c: C, r: R})]
    /* find the cell in the first row */
    let hdr = `UNKNOWN ${C}` // <-- replace with your desired default
    if (cell && cell.t)
      hdr = xlsx.utils.format_cell(cell)
    headers.push(hdr)
  }
  return headers // 经过上方一波操作遍历，得到最终的第一行头数据
}


function exportOneExcel(name: string) {
  console.log("wholeExceldata", name, excelData);

  // console.log(excelData['健康管理中心'], excelData)
  Object.keys(excelData).forEach(async (key) => {

    if (name === key) {
      let excelWriteData = dataMerge(excelData[key])
      //   修改对应文件名称为对照表的key
      console.log(`${key}.xlsx 表生成成功 数据源为`, excelWriteData)
      // if (key !== 'undefined') {
      exceljsToExcel(excelWriteData, key)
      console.log("after exportOneExcel excel");
      // }
    }
  })
}

function exportExcelEx() {
  unique(Object.values(configStore.config)).forEach(async (key) => {
    console.log(key, document.getElementById(key).innerText)
    document.getElementById(key).click()
    sleep(10)
  })
}

</script>

<template>
    <el-upload action="#" :auto-upload="false" :on-change="onChange" :limit="1" drag accept=".xls,.xlsx"
               class="m-4 mt-10">
        <el-icon class="el-icon--upload">
            <upload-filled/>
        </el-icon>

        <div class="el-upload__text">
            点我上传文件 <em>click to upload</em>
        </div>
    </el-upload>

    <el-scrollbar max-height="200px" v-if="showButton">
        <el-button v-for="item in unique(Object.values(configStore.config))" :key="item" type="primary" :id="item"
                   @click="exportOneExcel(item)">导出{{ item }}表格
        </el-button>
    </el-scrollbar>


    <div class="mt-10">
        <el-button type="primary" @click="exportExcelEx" element-loading-background="rgba(192,192,192,0.3)"
                   v-loading.fullscreen.lock="fullscreenLoading">下载所有文件
        </el-button>
    </div>
</template>
