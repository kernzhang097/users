<template>
  <div class="container mt-4">
    <alert v-if="alert" :alert="alert"></alert>
    <h3>用户信息</h3>
    <hr>
    <input v-model="searchValue" type="text" class="form-control mb-3" placeholder="搜索">
    <table class="table table-striped">
      <thead>
        <th scope="col">姓名</th>
        <th scope="col">电话</th>
        <th scope="col">邮箱</th>
        <th scope="col"></th>
      </thead>
      <tbody>
        <tr v-for="user of getFilter(users, searchValue)" :key="user.id">
          <td>{{user.name}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.email}}</td>
          <td><router-link tag="button" :to="'/details/' + user.id" class="btn btn-default">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/utils/api'
import Alert from '@/components/alert/Alert'
export default {
  name: 'Home',
  data () {
    return {
      users: [],
      alert: '',
      searchValue: ''
    }
  },
  components: {
    Alert
  },
  methods: {
    getUsersInfo: function () {
      api.get('/api/users')
        .then(res => {
          this.users = res.data
        })
        .catch(error => error)
    },
    getFilter: function (users, searchValue) {
      return this.users.filter(function (user) {
        return user.name.toLowerCase().match(searchValue.toLowerCase())
      })
    }
  },
  created () {
    this.getUsersInfo()
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
  }
}
</script>

<style>

</style>
