<template>
  <main class="px-4 pt-16 pb-16 mx-auto max-w-7xl sm:pt-24 sm:px-6">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div
        class="sm:text-center md:max-w-2xl md:mx-auto lg:mx-0 lg:col-span-8 lg:text-right"
      >
        <h1 id="hero-h1">
          <span
            class="block mt-1 text-4xl font-extrabold sm:text-5xl xl:text-6xl"
          >
            <span class="block leading-snug text-gray-900">حقق أحلامك </span>
            <span class="block leading-normal text-orange-500"
              >بدءاً من اليوم!</span
            >
          </span>
        </h1>
        <p
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          استخدم التوكيدات لتفعيل قانون الجذب لصالحك فورًا. تجاوز الأفكار
          السلبية. فكّر بإيجابية. حقّق أحلامك.
        </p>
        <div
          class="mt-8 sm:max-w-2xl sm:mx-auto sm:text-center lg:text-right lg:mx-0"
        >
          <p class="text-base font-medium text-gray-900">
            أدخل بريدك الإلكتروني فعّل أهدافك الآن
          </p>
          <form
            name="subscribe"
            action="/thank-you"
            method="POST"
            class="mt-3 sm:flex"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="subscribe" />
            <FormulateInput
              type="email"
              name="email"
              id="email"
              label="Email"
              validation="required|email"
              placeholder="البريد الإلكتروني"
              :input-class="['py-3']"
              class="sm:w-1/2"
              :validation-messages="{
                required: 'الرجاء إدخال بريد إلكتروني صحيح',
                email: 'الرجاء إدخال بريد إلكتروني صحيح',
              }"
            />
            <div>
              <button
                type="submit"
                class="w-full px-6 py-3 mt-3 text-base font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mr-3 sm:mt-0 sm:items-center sm:w-auto"
              >
                حمل التطبيق ب 2.99$/ش فقط
              </button>
            </div>
          </form>
          <!-- <p class="mt-3 text-sm text-gray-500">
            We care about the protection of your data. Read our
            <a href="#" class="font-medium text-gray-900 underline"
              >Privacy Policy</a
            >.
          </p> -->
        </div>
      </div>
      <div
        class="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center"
      >
        <div class="relative w-full lg:max-w-xs">
          <base-img
            class="object-contain w-full"
            src="/img/iphone-screen-home.png"
            alt="استخدم التوكيدات لتفعيل قانون الجذب لصالحك فورًا"
          />
        </div>
      </div>
    </div>
  </main>
</template>