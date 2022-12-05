<template>
  <PostForm :post="post" :submitForm="createPost" />
</template>

<script setup>
import PostForm from "../components/PostForm.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const API_URL = "https://crudwithmongodb.adaptable.app/posts";
const router = useRouter();
const post = reactive({
  title: "",
  content: "",
  creator: "",
});
async function createPost() {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: post.title,
        content: post.content,
        creator: post.creator,
      }),
    });
    const json = await response.json();
    router.push({
      name: "home",
    });
  } catch (error) {
    console.log(error);
  }
}
</script>
