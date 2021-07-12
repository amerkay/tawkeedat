<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-orange-500">
    <div
      class="max-w-3xl px-4 py-16 mx-auto text-center sm:py-20 sm:px-6 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="leading-normal text-gray-800 lg:block">
          كن من أول 100 شخص على لائحة الانتظار
        </span>
        <span class="leading-normal lg:block">
          واحصل على خصم 50% عند إطلاق التطبيق</span
        >
      </h2>
      <!-- <p class="mt-4 text-lg leading-6 text-orange-50">
        ب 2.99$ دولار شهريًا أو احصل على تخفيض رائع واشترك ب 25.99$ دولار سنويًا
      </p> -->
      <nuxt-link
        to="/#hero-h1"
        v-scroll-to="'#hero-h1'"
        class="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium text-white bg-gray-700 border border-transparent rounded-md  hover:bg-gray-800 hover:text-white sm:w-auto"
      >
        احصل عليه ب 1.99$/ش بدل
        <span class="mx-1 line-through opacity-80">3.99$/ش</span>
      </nuxt-link>
    </div>
  </div>
</template>