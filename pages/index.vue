<template>
  <div>
    <div class="bg-gray-50 lg:-mb-32">
      <section-hero />
    </div>
    <call-to-action class="relative z-30" />
    <section-features />
    <section-feature-exercise />

    <section-testimonial />
    <call-to-action />
  </div>
</template>

<script>
import { metaFromCMS } from '@/utils/utils-meta'

export default {
  head() {
    const data = {
      metaData: {
        title: 'تطبيق توكيدات – اشحن يومك بالإيجابية معنا',
        description:
          'استخدم التوكيدات لتفعيل قانون الجذب لصالحك فورًا. تجاوز الأفكار السلبية. فكّر بإيجابية. حقّق أحلامك، توكيدات معك في كل خطوة، وكل يوم.',
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
