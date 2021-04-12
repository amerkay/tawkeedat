<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-teal-blue-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:mr-6">
            <div class="flex">
              <!-- Current: "bg-teal-blue-900 text-white", Default: "text-teal-blue-300 hover:bg-teal-blue-700 hover:text-white" -->
              <a
                href="#"
                class="bg-teal-blue-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2"
                >Dashboard</a
              >
              <a
                href="#"
                class="text-teal-blue-300 hover:bg-teal-blue-700 hover:text-white px-3 py-2 ml-2 rounded-md text-sm font-medium"
                >Team</a
              >
              <a
                href="#"
                class="text-teal-blue-300 hover:bg-teal-blue-700 hover:text-white px-3 py-2 ml-2 rounded-md text-sm font-medium"
                >Projects</a
              >
              <a
                href="#"
                class="text-teal-blue-300 hover:bg-teal-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Calendar</a
              >
            </div>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <a
            href="#"
            class="bg-selective-yellow-500 text-gray-800 hover:bg-selective-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >CTA Button</a
          >
        </div>
        <div class="-mr-2 flex sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-teal-blue-400 hover:text-white hover:bg-teal-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
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
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
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
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-teal-blue-900 text-white", Default: "text-teal-blue-300 hover:bg-teal-blue-700 hover:text-white" -->
        <a
          href="#"
          class="bg-teal-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >Dashboard</a
        >
        <a
          href="#"
          class="text-teal-blue-300 hover:bg-teal-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Team</a
        >
        <a
          href="#"
          class="text-teal-blue-300 hover:bg-teal-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Projects</a
        >
        <a
          href="#"
          class="text-teal-blue-300 hover:bg-teal-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Calendar</a
        >
      </div>
      <div class="pt-4 pb-3 border-t border-teal-blue-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=PguZ6clds6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">Tom Cook</div>
            <div class="text-sm font-medium text-teal-blue-400">
              tom@example.com
            </div>
          </div>
          <button
            class="ml-auto flex-shrink-0 bg-teal-blue-800 p-1 rounded-full text-teal-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-blue-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg
              class="h-6 w-6"
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>