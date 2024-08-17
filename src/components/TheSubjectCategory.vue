<script setup lang="ts">
import TitleItem from './TitleItem.vue'
import NoteBookIcon from './icons/iconNoteBook.vue'
</script>

<template>
  <!-- js -->
  <TitleItem>
    <template #icon>
      <NoteBookIcon />
    </template>
    <template #heading>
      <RouterLink to="/javascriptList">javascript</RouterLink>
    </template>
    记录关于通用javascript应用的案例
  </TitleItem>
  <!-- css -->
  <TitleItem>
    <template #icon>
      <NoteBookIcon />
    </template>
    <template #heading>
      
      <RouterLink to="/cssList">css</RouterLink>
    </template>

    记录关于javascript应用的案例
    
  </TitleItem>

  <TitleItem>
    <template #icon>
      <NoteBookIcon />
    </template>
    <template #heading>
      <RouterLink to="/vueList">vue</RouterLink>
    </template>

    记录vue项目案例
  </TitleItem>
</template>