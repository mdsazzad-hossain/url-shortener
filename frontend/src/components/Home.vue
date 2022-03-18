<template>
  <div class="row text-center mt-5">
    <div class="col-12 position-relative">
      <h1>Short Url</h1>
      <h3>Paste the url to be shortened</h3>
    </div>
    <div class="col-4 offset-4 p-2 text-right d-flex div-position">
      <button type="button" @click="visibleModal()" class="btn btn-outline-primary">Sign In</button>
      <button class="btn btn-outline-primary">Sign Up</button>
    </div>
    <div class="d-flex text-center col-8 offset-2">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">Url</span>
        <input type="text" v-model="url" class="form-control" placeholder="Enter url https://..." aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <button class="btn btn-success">Submit</button>
    </div>
      <login ref="modal"/>
    <!-- <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-hidden="true">
    </div> -->
  </div>
</template>

<script>
import Login from './Login.vue'
import Register from './Register.vue'
export default {
  components:{
    Login,
    Register
  },
  data () {
    return {
      url: ''
    }
  },
  methods:{
    visibleModal () {
      console.log('test')
      this.$refs.modal.show()
    }
  }
}
</script>
<style>
  .div-position{
    position: absolute;
    right: -55px;
  }
</style>
