<script setup>
import { ref, onMounted} from "vue";
import RecipeCard from "../RecipeCard.vue";
import axios from "axios";

const loading = ref(false)
const categories = ref("");
const tempCategory = ref("")
const recipes = ref([])

function fetchCategory(){
  loading.value = true
  axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then(response=> {
    loading.value = false
    categories.value = response.data.categories
    tempCategory.value = categories.value[Math.floor(Math.random()*14)].strCategory
    fetchRecipes()
  })
  .catch(error => {
      loading.value = false
      console.log(error)
    })
}
function fetchRecipes(){
  loading.value = true
  axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c="+ tempCategory.value)
  .then(response=> {
    loading.value = false
    recipes.value = response.data.meals
  })
  .catch(error => {
      loading.value = false
      console.log(error)
    })
}

onMounted(()=>{
  fetchCategory()

})

</script>

<template lang="">
  <div class="py-20 px-5" v-if="recipes.length>0">
    <div
      class="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-5"
    >
      <div class="flex-1">
        <h3 class="text-5xl font-bold mb-4">Recipes For you</h3>
        <p class="text-lg">
          Loading Recipes from:
          <router-link
            :to="{ name: 'recipesCategories', params: { name: tempCategory } }"
            class="bg-white text-red-600 border border-red-600 hover:border-red-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out"
          >{{tempCategory}}
          </router-link>
        </p>
      </div>

      <div class="flex-1">
        <select
          v-on:change="() => fetchRecipes()"
          v-model="tempCategory"
          class="flex-1 block w-full mt-1 rounded-md bg-gray-100 border focus:border-gray-500 focus:bg-white focus:ring-0 cursor-pointer p-3"
        >
          <option v-for="(category,index) in categories" :key="index" class="cursor-pointer" :value="category.strCategory">{{category.strCategory}}</option>
        </select>
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