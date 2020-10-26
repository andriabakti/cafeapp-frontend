<template>
  <div class="modal" id="exampleModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete</h5>
          <button type="button" class="close btn" aria-label="Close" @click="$emit('close-delete')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure delete this product?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('close-delete')">Cancel</button>
          <button type="button" class="btn btn-primary" @click="$emit('delete-event')">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Delete',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
}
</style>
