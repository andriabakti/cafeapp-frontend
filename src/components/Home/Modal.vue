<template>
    <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Product</h5>
                    <button type="button" class="close" @click="$emit('close-modal')" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="name">Product Name</label>
                    <input type="text" v-model="data.name" class="form-control" id="name" placeholder="Product name">
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" v-model="data.price" class="form-control" id="price" placeholder="Price">
                </div>
                <div class="form-group">
                    <label for="category">Category</label>
                    <select id="sort" class="form-control" @change="setCategory">
                        <option selected>Choose Category</option>
                        <option value="1">Coffe</option>
                        <option value="2">Dessert</option>
                        <option value="3">Main Dish</option>
                        <option value="4">Juice</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="image">Image</label>
                    <input type="file" id="image" name="image" @change="handleFile" placeholder="Another input">
                </div>
            </form>
            </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="$emit('close-modal')">Close</button>
                    <button type="button" class="btn btn-primary" @click="$emit('fire-event')">{{data.id ? 'Update': 'Add'}}</button>
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
    },
    setCategory (event) {
      this.data.idCategory = event.target.value
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
