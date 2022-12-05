<template>
  <PostForm :post="post" :submitForm="updatePost" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import PostForm from "../components/PostForm.vue";
const router = useRouter();
const route = useRoute();
const API_URL = "https://crudwithmongodb.adaptable.app/posts";
const post = ref({
  title: "",
  content: "",
  creator: "",
});
onMounted(() => {
  getPost();
});
async function getPost() {
  const { id } = route.params;
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  post.value = json;
}
async function updatePost() {
  const { id } = route.params;
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: post.value.title,
      content: post.value.content,
      creator: post.value.creator,
    }),
  });
  const json = await response.json();
  router.push({
    name: "home",
  });
}
</script>
