<template>
  <div class="modal" id="exampleModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Exit</h5>
          <button type="button" class="close" aria-label="Close" @click="$emit('close-exit')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure want to exit?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('close-exit')">Cancel</button>
          <button type="button" class="btn btn-primary" @click="toLogout">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Exit',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['toLogout'])
  }
}
</script>

<style scoped>
.modal {
  display: block;
}
</style>
