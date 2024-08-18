<template>
  <!-- javascript列表页 -->
  <div class="listBox" style="overflow: auto">
    <el-table :data="jsRecordList" height="100%" style="width: 100%" table-layout="fixed">
      <el-table-column align="center" prop="date" label="日期" width="100" />
      <el-table-column align="center" prop="dec" label="描述" width="300" />
      <el-table-column align="center" prop="sample" label="示例">
        <template #default="{ row }">
          <el-link :href="row.sample" type="primary">示例</el-link>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="code" label="代码">
        <template #default="{ row }">
          <el-link :href="row.code" type="primary">code</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const jsRecordList = [
  {
    date: '2024-08-18',
    dec: '跨标签页通讯',
    sample: '/myJsProject/cssList',
    code: '123'
  }
]
</script>

<style scoped>
.listBox {
  width: 100%;
  height: calc(100% - 103px);
}
</style>
