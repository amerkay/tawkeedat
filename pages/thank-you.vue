<template>
  <div class="pb-20 md:pb-36 bg-gray-50">
    <main
      class="max-w-6xl px-4 pt-10 mx-auto sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 md:grid md:grid-cols-2"
    >
      <div class="sm:text-center lg:text-right">
        <h1
          class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          <span class="block xl:inline">شكراً جزيلاً لاهتمامك.</span>
          <span class="block text-orange-600 xl:inline">
            نعتذر، التطبيق لم يجهز بعد.</span
          >
        </h1>
        <p
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
        >
          سنرسل لك عند جاهزية التطبيق. وفي هذه الأثناء يمكنك الاستمتاع بتوكيدات
          إيجابية على صفحتنا بالإنستغرام.
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a
              href="https://www.instagram.com/arabicaffirmations/"
              class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-orange-600 border border-transparent rounded-md hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
            >
              تابعنا على الإنستغرام
            </a>
          </div>
          <!-- <div class="mt-3 sm:mt-0 sm:mr-3">
            <a
              href="#"
              class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-orange-700 bg-orange-100 border border-transparent rounded-md hover:bg-orange-200 md:py-4 md:text-lg md:px-10"
            >
              Live demo
            </a>
          </div> -->
        </div>
      </div>
      <div class="mt-20 md:flex md:justify-end md:mt-0">
        <base-img
          src="/img/character-working-7.svg"
          alt="We're working on it. We'll let you know when we're ready!"
          class="w-2/3 mx-auto md:mx-0 md:w-full md:max-w-xs"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { metaFromCMS } from '@/utils/utils-meta'

export default {
  head() {
    const data = {
      metaData: {
        title: 'تطبيق توكيدات – شكرا لك',
        description: 'شكرا لك',
        published_at: '2021-04-18T04:26:51.300Z',
        updated_at: '2021-04-18T04:26:51.300Z',
      },
    }

    return metaFromCMS(data, this.$route.path, this.$route.query)
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
