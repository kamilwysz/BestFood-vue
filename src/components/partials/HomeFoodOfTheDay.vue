<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const loading = ref(false);
const mealDetails = ref("");

function fetchRecipe() {
  loading.value = true
  axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => {
      loading.value = false
      const meal= response.data.meals[0]
      mealDetails.value = meal
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
  <div class="bg-[#F5F6F7] py-20 px-5" v-if="mealDetails">
    <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">
      Recipe of The Moment
    </h3>
    <div
      class="flex flex-col md:flex-row max-w-[1000px] mx-auto items-center gap-10"
    >
      <div class="flex-1">
        <h4 class="text-4xl font-bold mb-6">{{mealDetails.strMeal}}</h4>
        <div class="justify-start">
          <p
            class="text-red-900 mb-2 bg-red-50 border border-red-400 rounded-full w-fit px-5 py-1"
          >
            Instructions:
          </p>
          <p class="text-lg">
            {{mealDetails.strInstructions.split(/\s+/).slice(0, 50).join(" ")}}...
          </p>
        </div>
        <div class="mb-10 flex flex-wrap gap-5 mt-5">
          <router-link
            :to="{ name: 'recipesCategories', params: { name: mealDetails.strCategory } }"
            class="bg-white text-red-600 border border-red-600 hover:border-red-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out"
          >
            {{mealDetails.strCategory}}</router-link
          >
        </div>
        <router-link
          :to="{ name: 'recipesDetails', params: { id: `${mealDetails.strMeal.toLowerCase().split(' ').join('-')}-${mealDetails.idMeal}` } }"
          class="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
        >
          More Recipe Details</router-link
        >
      </div>
      <div class="flex-1">
        <img
          :src="mealDetails.strMealThumb"
          alt=""
          class="rounded-tl shadow-[20px_20px_0px_2px_rgba(220,38,38,0.95)] border-4 border-gray-200 hover:border-[#F5F6F7] hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(220,38,38,0.95)] transition duration-400 cursor-pointer hover:scale-95"
        />
      </div>
    </div>
  </div>
</template>
