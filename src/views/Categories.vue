<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CategeryCreate />

        <CategeryEdit />
      </div>
    </section>
  </div>
</template>

<script>
import CategeryCreate from '@/components/CategeryCreate'
import CategeryEdit from '@/components/CategeryEdit'

export default {
  name: 'categories',
  components: {
    CategeryCreate, CategeryEdit
  }  
}
</script>