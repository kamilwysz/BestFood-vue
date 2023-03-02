<template lang="">
<div class="flex px-5 md:px-10 py-5 md:py-10 justify-between items-center relative mb-14 lg:flex-row flex-col">
    <div class="max-w-[1000px] mx-auto px-5 py-10 flex flex-col gap-4 items-center justify-center">
        <h3 class="text-5xl font-bold text-center mt-8 leading-normal">Love to hear from you</h3>

        <p class="md:w-[500px] text-center text-xl">So, given that this wasn't a planned project, I didn't think of
            hooking a
            form up with an
            API, a custom
            backend or doing anything fancy. </p>
        <p class="md:w-[500px] text-center text-xl mb-5">So, if you want to get in touch with me:</p>
        
    </div>
    <!-- //////////////////////////////////// -->
    <div class="max-w-[1000px] mx-auto px-5 py-10 flex flex-col gap-4 items-center justify-center">
     <h3 class="text-5xl font-bold text-center mt-8 leading-normal">Get in Touch</h3>
    <form @submit.prevent
      class="w-[100%] md:w-[400px] xl:w-[500px] flex flex-col gap-4  justify-center"
    >
    <!-- px-5 py-20 flex flex-col gap-4 items-center justify-center -->
      <div class="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          class=" px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <div class="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          class=" px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <div class="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" 
          required
        />
      </div>

      <div class="mb-3 pt-0 text-center">
        <button
          class="bg-red-600 text-white shadow hover:bg-red-700 px-8 py-4 rounded-lg text-xl transition duration-300 ease-in-out text-center hover:scale-105 "
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  </div>
</div>
</template>