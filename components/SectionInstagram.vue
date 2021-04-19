<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">
    <div class="py-16 mx-auto max-w-7xl lg:py-24" v-if="postsData.length > 0">
      <div class="pb-10 lg:pb-16">
        <h2
          class="text-3xl leading-8 tracking-tight text-center text-gray-900 sm:text-4xl"
        >
          <span class="font-extrabold"> People love us on Instagram!</span>
        </h2>
        <p class="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
          More than 70,000 users follw our daily affirmations on
          <a
            href="https://www.instagram.com/arabicaffirmations/"
            target="_blank"
            >Instagram @arabicaffirmations</a
          >.
        </p>
      </div>

      <div
        class="grid max-w-lg gap-5 mx-auto auto-rows-max lg:grid-cols-3 lg:gap-10 lg:max-w-6xl"
      >
        <div
          v-for="post in postsData"
          :key="post.id"
          class="flex flex-col overflow-hidden rounded-sm shadow-md"
        >
          <div class="flex-shrink-0">
            <base-img class="w-full" :src="post.url" :alt="post.caption" />
          </div>
          <div class="flex flex-col justify-between flex-1 p-5 bg-white">
            <div class="flex-1">
              <p class="text-base font-light text-gray-500">
                {{ post.caption }}
              </p>
            </div>
          </div>
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