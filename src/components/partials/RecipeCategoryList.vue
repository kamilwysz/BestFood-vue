<script setup>
import RecipeCard from "../RecipeCard.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";
const loading = ref(false);
const recipes = ref("");
const route = useRoute();

function fetchRecipe() {
  loading.value = true
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.name}`)
    .then(response => {
      loading.value = false
      const meals= response.data.meals
      recipes.value = meals
    })
    .catch(error => {
      loading.value = false
      console.log(error)
    })
  }

onMounted(()=>{
  fetchRecipe()
})
</script>

<template>
  <div class="py-20 px-5">
    <div
      class="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-5"
    >
      <div class="flex-1">
        <h3 class="text-5xl font-bold mb-4 text-center">
          Recipes in {{ $router.currentRoute.value.params.name }}
        </h3>
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-20 max-w-[1100px] mx-auto pt-16"
    >
      <RecipeCard
        v-for="(item, index) in recipes"
        :key="index"
        :recipe="item"
      />
    </div>
  </div>
</template>