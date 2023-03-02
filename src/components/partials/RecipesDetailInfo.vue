<script setup>
  import { computed, ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import axios from "axios";
  const route = useRoute();

  const loading = ref(false);
  const mealDetails = ref("");
  const tags = ref("")
  const ingredients = ref([])

  const mealIDArray = computed(() => route.params.id.split("-"));
  const mealId = mealIDArray.value[mealIDArray.value.length - 1];

  onMounted(() => {
    fetchRecipe(); 
  });

  function fetchRecipe() {
    loading.value = true;
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => {
        loading.value = false;
        if (response.data.meals !== null) {
          const meal = response.data.meals[0];
          meal.strTags? tags.value = meal.strTags.split(",") : ""
          for (let i=1;i<21;i++){
            let ingredient = eval("meal.strIngredient"+i)
              ingredient? ingredients.value.push(ingredient) : ""
          }
          if (meal.strMeal) {
            mealDetails.value = meal;
          }
        } else {
          alert("That meals doesn't exist");
          route.push("/404");
        }
      })
      .catch((error) => {
        this.loading = false;
        console.log(error);
      });
  }
</script>

<template>
  <div class="bg-white py-20 px-5 border-t">
    <div class="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] mx-auto items-start gap-10"
      v-if="!loading && mealDetails !== null">
      <div class="">
        <h3 class="text-4xl font-bold mb-6">{{mealDetails.strMeal}}</h3>
        <div class="flex flex-col gap-3 mb-10" >
          <h6 class="font-bold text-xl">Ingredients:</h6>
          <div class="flex flex-wrap gap-x-3 gap-y-3">
            <p v-for="(ingredient, index) in ingredients" :key="index" class="bg-red-600 text-white w-fit px-5 py-1.5 rounded-full text-sm">{{ingredient}}</p>
          </div>
        </div>
        <div class="justify-start">
          <p class="text-red-900 mb-2 bg-red-50 border border-red-400 rounded-full w-fit px-5 py-1 mt-5"> Instructions: </p>
          <p class="text-lg">{{mealDetails.strInstructions}}</p>
        </div>
        <div class="categories-container" >
          <p class="mt-5 font-bold">Category:</p>
          <div class="mb-10 flex flex-wrap gap-5 mt-3">
            <router-link :to="{ name: 'recipesCategories', params: { name: `${mealDetails.strCategory}` }, }" class="bg-white text-red-600 border border-red-600 hover:border-red-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out">{{mealDetails.strCategory}}</router-link>
          </div>
        </div>
        <div class="tags-container" v-if="tags">
          <p class="mt-3 font-bold">Tags:</p>
          <div class="mb-10 flex flex-wrap gap-5 mt-3">
            <p v-for="(tag,index) in tags" :key="index" :to="{ name: 'recipesCategories', params: { name: `${tag}` }, }" class="text-white bg-red-600 border border-red-600 px-5 py-1.5 rounded-full text-sm">{{tag}}</p>
          </div>  
          <a :href="mealDetails.strYoutube" target="_blank" class="py-2 px-5 rounded bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out inline-flex items-center gap-5 text-white mt-5">
            <font-awesome-icon icon="fa-solid fa-play" class="" /><span>Watch on YouTube</span> 
          </a>
        </div>
      </div>
      <div class="sticky top-8"> <img :src="mealDetails.strMealThumb" alt="" class="rounded-tl shadow-[20px_20px_0px_2px_rgba(220,38,38,0.95)] border-4 border-gray-200 hover:border-[#F5F6F7] hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(220,38,38,0.95)] transition duration-400 cursor-pointer hover:scale-95" /> </div>
      <div class="md:col-span-2 border-t pt-5 border-gray-300">
        <h5 class="text-4xl font-bold mb-4">More Info:</h5>
        <div class="flex flex-col gap-3">
          <h6 class="font-bold text-xl">Area of origin:</h6>
          <p class="bg-red-600 text-white w-fit px-5 py-1.5 rounded-full text-sm"> Area </p>
        </div>
      </div>
    </div>
  </div>
</template>