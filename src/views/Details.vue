<template>
  <div class="container mt-4">
    <h3>
      {{user.name}}
      <span class="float-right">
        <router-link tag="button" :to="'/edit/' + user.id" class="btn btn-success">编辑</router-link>
        <button @click="handleDelete" class="btn btn-danger">删除</button>
      </span>
    </h3>
    <hr>
    <ul class="list-group">
      <li class="list-group-item"><strong>Username: </strong>{{user.username}}</li>
      <li class="list-group-item"><strong>Phone: </strong>{{user.phone}}</li>
      <li class="list-group-item"><strong>Email: </strong>{{user.email}}</li>
      <li class="list-group-item"><strong>Website: </strong>{{user.website}}</li>
    </ul>
  </div>
</template>

<script>
import { getUserById, deleteUserById } from '@/api/users'
export default {
  name: 'Details',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    getUser () {
      getUserById(this.$route.params.id)
        .then(res => {
          this.user = res.data
        })
        .catch(error => error)
    },
    handleDelete () {
      deleteUserById(this.$route.params.id)
        .then(res => {
          this.$router.push({path: '/', query: {alert: '用户信息删除成功！'}})
        })
        .catch(error => error)
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style>

</style>
