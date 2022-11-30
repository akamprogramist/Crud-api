<script setup>
import Navbar from "@/components/Navbar.vue";
import PostList from "./components/PostList.vue";
</script>

<template>
  <Navbar />
  <PostList />
  <RouterView />
</template>
