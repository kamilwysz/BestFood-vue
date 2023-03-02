<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import DefaultLayout from "../components/DefaultLayout.vue";
import RecipeCategoryList from "../components/partials/RecipeCategoryList.vue";
import { useRoute } from "vue-router";
const route = useRoute();

const currentCategory = ref("")
const loading = ref(false)

function getCategoryDetails(){
  loading.value = true
  axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then(response=> {
    loading.value = false
    currentCategory.value = response.data.categories.find(category=>category.strCategory===route.params.name)
  })
  .catch(error => {
      loading.value = false
      console.log(error)
    })
}

onMounted(()=>{
  getCategoryDetails()
})
</script>

<template>
  <DefaultLayout>
    <div class="bg-[#F5F6F7] py-20 px-5">
      <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">
        Viewing {{ $router.currentRoute.value.params.name }}
      </h3>
      <div
        class="flex flex-col md:flex-row max-w-[1200px] mx-auto items-center gap-20"
      >
        <div class="flex-1">
          <h4 class="text-4xl font-bold mb-6">
            More About <span class="bg-[#cb2727]"> {{ $router.currentRoute.value.params.name }} </span>
          </h4>
          <div class="justify-start">
            <p class="text-lg leading-loose">
              {{currentCategory.strCategoryDescription}}
            </p>
          </div>
        </div>
        <div class="flex-1">
          <img
            :src=currentCategory.strCategoryThumb
            alt=""
            class="rounded-tl shadow-[20px_20px_0px_2px_rgba(203,39,39,0.95)] border-4 border-gray-200 hover:border-[#F5F6F7] hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(203,39,39,0.95)] transition duration-400 cursor-pointer hover:scale-95 w-full"
          />
        </div>
      </div>
    </div>
    <RecipeCategoryList />
  </DefaultLayout>
</template>
