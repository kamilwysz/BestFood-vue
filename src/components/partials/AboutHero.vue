<template lang="">
  <div
    class="flex px-5 md:px-20 py-20 justify-between items-center relative mb-14 bg-gray-50/30"
  >
    <div class="flex flex-col gap-10">
      <h2 class="text-6xl md:text-7xl font-bold text-red-600">
        <span class="text-gray-600">Best </span>Food
      </h2>
      <div class="text-xl">
        <p class="mb-1">The amazing food recipes app and repo for you</p>
        <p>No Need to worry about how to cook that yummy dish ever again!</p>
      </div>
      <div class="flex flex-col md:flex-row gap-5 flex-wrap">
        <router-link
          to="/recipes"
          class="bg-red-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-red-700 transition duration-300 ease-in-out text-center"
        >
          Browse Recipes</router-link
        >
      </div>
    </div>
    <div class="hidden md:block">
      <img
        src="../../assets/foods/fried-rice-g353c9f9af_640.jpg"
        alt=""
        srcset=""
        class=""
      />
    </div>
    <div
      class="bg-gray-200 h-[600px] w-[36%] 2xl:w-[40%] absolute top-[-100px] right-0 opacity-30 z-[-1] hidden md:block"
    ></div>
  </div>
</template>
