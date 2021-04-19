<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="what-is-it" class="py-16 overflow-hidden bg-gray-50 lg:py-24">
    <div class="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative">
        <h2
          class="text-3xl leading-8 tracking-tight text-center text-gray-900 sm:text-4xl"
        >
          <span class="font-extrabold">
            كل فكرة لديك ستكون إما استثمار أو تكلفة.
          </span>
          <span>– هارف ايكر</span>
        </h2>
        <p class="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
          حوّل أفكارك من تكاليف إلى استثمارات!
        </p>
      </div>

      <div
        class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
      >
        <div class="relative">
          <h3
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            انتقل من السلبي للإيجابي معنا
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            حدد أهدافك وما تطمح للوصول إليه، تطبيق توكيدات معك يحفزك ويساعدك كل
            يوم.
          </p>

          <dl class="mt-10 space-y-10">
            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
                >
                  <wind-icon></wind-icon>
                </div>
                <p class="mr-16 text-lg font-medium leading-6 text-gray-900">
                  تجاوز كل الأفكار المعرقلة لتطورك
                </p>
              </dt>
              <dd class="mt-2 mr-16 text-base text-gray-500">
                تعويد العقل الباطن على التفكير بإيجابية
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
                >
                  <smile-icon></smile-icon>
                </div>
                <p class="mr-16 text-lg font-medium leading-6 text-gray-900">
                  فعّل قانون الجذب لجميع نواحي الحياة التي قد تخطر ببالك
                </p>
              </dt>
              <dd class="mt-2 mr-16 text-base text-gray-500">
                استكشف المئات من التوكيدات التي ستفيدك في رحلتك الإيجابية
              </dd>
            </div>
          </dl>
        </div>

        <div class="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
          <svg
            class="absolute transform -translate-x-1/2 translate-y-16 right-1/2 lg:hidden"
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="784"
              height="404"
              fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
            />
          </svg>
          <base-img
            class="relative mx-auto"
            width="320"
            height="636"
            src="/img/iphone-screen-categories.png"
            alt="اشحن يومك بالإيجابية معنا"
          />
        </div>
      </div>

      <svg
        class="absolute hidden transform translate-x-1/2 translate-y-12 lg:block left-full"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div
          class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div class="lg:col-start-2">
            <h3
              class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
            >
              اشحن يومك بالإيجابية
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              تأكد من أن عقلك الباطن يتعرض لطاقة إيجابية باستمرار
            </p>

            <dl class="mt-10 space-y-10">
              <div class="relative">
                <dt>
                  <div
                    class="absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
                  >
                    <message-square-icon />
                  </div>
                  <p class="mr-16 text-lg font-medium leading-6 text-gray-900">
                    إشعارات لتذكيرات وتوكيدات يومية حسب اختيارك
                  </p>
                </dt>
                <dd class="mt-2 mr-16 text-base text-gray-500">
                  استقبل إشعارات يومية على جهازك لتستمر برعاية ذاتك على الدوام
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div
                    class="absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
                  >
                    <heart-icon />
                  </div>
                  <p class="mr-16 text-lg font-medium leading-6 text-gray-900">
                    أضف توكيداتك الخاصة
                  </p>
                </dt>
                <dd class="mt-2 mr-16 text-base text-gray-500">
                  يمكنك إضافة توكيدات خاصة بك كما ترغب
                </dd>
              </div>
              <div class="relative">
                <dt>
                  <div
                    class="absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
                  >
                    <calendar-icon />
                  </div>
                  <p class="mr-16 text-lg font-medium leading-6 text-gray-900">
                    بيت التوكيدات
                  </p>
                </dt>
                <dd class="mt-2 mr-16 text-base text-gray-500">
                  تمتع بتوكيدات جديدة يومياً وأسبوعياً
                </dd>
              </div>
            </dl>
          </div>

          <div class="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
            <svg
              class="absolute transform -translate-x-1/2 translate-y-16 right-1/2 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="784"
                height="404"
                fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
              />
            </svg>
            <base-img
              class="relative mx-auto"
              width="320"
              height="636"
              src="/img/iphone-screen-notifications.png"
              alt="املأ يومك بما هو إيجابي"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  WindIcon,
  SmileIcon,
  MessageSquareIcon,
  HeartIcon,
  CalendarIcon,
} from 'vue-feather-icons'

export default {
  components: {
    WindIcon,
    SmileIcon,
    MessageSquareIcon,
    HeartIcon,
    CalendarIcon,
  },
}
</script>