<script setup>
import RecipeCard from "../RecipeCard.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
const loading = ref(false);

const featuredMealsIds= ref([53065,52951,53022])
const featuredMeals = ref([])

function fetchRecipes() {
    featuredMealsIds.value.forEach(id=>{
    loading.value = true
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then(response => {
        loading.value = false
        featuredMeals.value.push(response.data.meals[0])
      })
      .catch(error => {
        loading.value = false
        console.log(error)
      })
    })
    }

onMounted(()=>{
  fetchRecipes()
})


</script>
<template lang="">
  <div class="bg-[#F5F6F7] mt-10 py-20 px-5" v-if="featuredMeals.length>=3">
    <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">
      Featured Recipes
    </h3>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-[1100px] mx-auto pt-8"
    >
      <RecipeCard
        v-for="(item, index) in featuredMeals"
        :key="index"
        :recipe="item"
      />
    </div>

    <div class="flex items-center justify-center mt-12">
      <router-link
        to="/recipes"
        class="bg-white text-red-600 border-2 border-red-600 hover:border-red-700 px-8 py-4 rounded-lg text-xl transition duration-300 ease-in-out text-center hover:text-red-700"
      >
        See More Recipes</router-link
      >
    </div>
  </div>
</template>