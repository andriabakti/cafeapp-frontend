<template>
    <div class="back">
        <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                        <button type="button" class="close" @click="$emit('close-modal')" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Product Name</label>
                        <input type="text" v-model="data.name" class="form-control" id="formGroupExampleInput" placeholder="Product name">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Price</label>
                        <input type="text" v-model="data.price" class="form-control" id="formGroupExampleInput2" placeholder="Price">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput3">Category</label>
                        <input type="text" v-model="data.idCategory" class="form-control" id="formGroupExampleInput3" placeholder="Category">
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="file" name="image" @change="handleFile" id="formGroupExampleInput4" placeholder="Another input">
                    </div>
                </form>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="this.closeModal">Close</button>
                        <button type="button" class="btn btn-primary" @click="$emit('save-event')">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    data: {
      type: Object
    },
    closeModal: {
      type: Function
    }
  },
  methods: {
    handleFile (e) {
      this.data.image = e.target.files[0]
    }
  }
}
</script>

<style scoped>
.modal {
    display: block;
}
/* .back {
    background-color: rgba(0, 0, 0, 0.25);
} */
</style>
