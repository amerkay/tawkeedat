<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">
    <div class="py-16 mx-auto max-w-6xl lg:py-24" v-if="postsData.length > 0">
      <div class="px-5 pb-10 lg:pb-16">
        <h2
          class="text-3xl tracking-tight leading-8 text-center text-gray-900  sm:text-4xl"
        >
          <span class="font-extrabold">توكيدات من القلب</span>
        </h2>
        <p class="mx-auto mt-4 max-w-3xl text-xl text-center text-gray-500">
          ننشر الإيجابية لأكثر من <strong>100,000</strong> متابع على
          <a
            href="https://www.instagram.com/arabicaffirmations/"
            target="_blank"
          >
            الانستغرام
          </a>
        </p>
      </div>

      <div
        class="grid grid-cols-3 auto-rows-max gap-0 mx-auto  lg:grid-cols-3 lg:gap-4 lg:max-w-3xl"
      >
        <div
          v-for="post in postsData"
          :key="post.id"
          class="flex overflow-hidden flex-col md:rounded-sm md:shadow-md"
        >
          <div class="flex-shrink-0">
            <base-img
              class="w-full"
              width="344"
              height="344"
              :src="post.url"
              :alt="post.caption"
            />
          </div>
          <!-- <div class="flex flex-col flex-1 justify-between p-5 bg-white">
            <div class="flex-1">
              <p class="text-sm font-light text-gray-500">
                {{ post.caption | truncate(100) }}
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InstagramIcon } from 'vue-feather-icons'

export default {
  data() {
    return {
      postsData: { events: [] },
    }
  },
  components: {
    InstagramIcon,
  },
  mounted() {
    this.getInstagramPosts()
  },
  methods: {
    getInstagramPosts() {
      this.$axios
        .$get('/.netlify/functions/instagram')
        .then((res) => {
          this.postsData = res
        })
        .catch((err) => {
          console.error('Cannot load instagram data', err)
        })
    },
  },
}
</script>