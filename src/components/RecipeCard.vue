<script setup>
const props = defineProps(['recipe'])


</script>
<template lang="">
<router-link v-if="props.recipe"
        :to="{ name: 'recipesDetails', params: { id: `${props.recipe.strMeal.toLowerCase().split(' ').join('-')}-${props.recipe.idMeal}` } }"
        class="bg-white shadow-lg flex flex-col gap-5 rounded overflow-hidden hover:-translate-y-4 transition duration-300 ease-in-out justify-between">
        <div class="flex-1">
            <img :src="recipe.strMealThumb"
                alt=""
                class="h-48 object-cover w-full">
        </div>
        <div class="py-4 px-5 flex-1 flex flex-col justify-between">
            <h4 class="text-2xl font-bold mb-5 text-center">{{ recipe.strMeal }}</h4>
            <router-link 
                :to="{ name: 'recipesDetails', params: { id: `${props.recipe.strMeal.toLowerCase().split(' ').join('-')}-${props.recipe.idMeal}` } }"
                class="bg-[#cb2727] text-white px-8 py-4 rounded-lg  hover:bg-[#931b1b] transition duration-300 ease-in-out w-full mb-5 block text-center">
                See Recipe Details</router-link>
        </div>
    </router-link>
</template>
