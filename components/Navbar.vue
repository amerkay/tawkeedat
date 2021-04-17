<template>
  <nav class="relative z-10 bg-white shadow">
    <div class="px-4 mx-auto max-w-7xl sm:px-6">
      <div
        class="flex items-center justify-between py-6 md:justify-start md:space-x-10 md:space-x-reverse"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <logo />
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button
            @click="isMenuOpen = true"
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden space-x-10 space-x-reverse md:flex">
          <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            ما هي التوكيدات
          </a>

          <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            كيفية استخدام التوكيدات
          </a>

          <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            من نحن
          </a>
        </nav>
        <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <!-- <a
              href="#"
              class="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
            >
              Sign in
            </a> -->
          <a
            href="#"
            class="inline-flex items-center justify-center px-4 py-2 mr-8 text-base font-medium text-white bg-gray-700 border border-transparent rounded-md shadow whitespace-nowrap hover:bg-blue-600"
          >
            حمل التطبيق وابدأ اليوم!
          </a>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div
      v-show="isMenuOpen"
      class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-left transform md:hidden"
    >
      <div
        class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50"
      >
        <div class="px-5 pt-5 pb-6">
          <div class="flex items-center justify-between">
            <div>
              <logo />
            </div>
            <div class="-mr-2">
              <button
                @click="isMenuOpen = false"
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a
                href="#"
                class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
              >
                <span class="mr-3 text-base font-medium text-gray-900">
                  ما هي التوكيدات
                </span>
              </a>
              <a
                href="#"
                class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
              >
                <span class="mr-3 text-base font-medium text-gray-900">
                  كيفية استخدام التوكيدات
                </span>
              </a>
              <a
                href="#"
                class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
              >
                <span class="mr-3 text-base font-medium text-gray-900">
                  من نحن
                </span>
              </a>
            </nav>
          </div>
        </div>
        <div class="px-5 py-6 space-y-6">
          <div>
            <a
              href="#"
              class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-blue-600"
            >
              حمل التطبيق وابدأ اليوم!
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>