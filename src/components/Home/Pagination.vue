<template>
    <div class="container-page">
        <ul class="pagination">
            <h2>Page</h2>
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true" @click.prevent="$emit('page-event')">Previous</a>
            </li>
            <li class="page-item" :class="n==data.currentPage? 'active': ''" v-for="n in data.totalPage" :key="n">
                <a class="page-link" href="#" @click.prevent="$emit('page-event', n)">{{n}}</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#" @click.prevent="$emit('page-event')">Next</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>
.container-page {
    margin: 15px auto 5px;
    background-color: coral;
}
</style>
