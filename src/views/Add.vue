<template>
  <div class="container mt-4">
    <h3>添加用户信息</h3>
    <hr>
    <form @submit="handleSubmit" class="bg-light p-4">
      <div class="form-group">
        <label>姓名</label>
        <input type="text" class="form-control" placeholder="name" v-model="user.name" />
      </div>
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="username" v-model="user.username" />
      </div>
      <div class="form-group">
        <label>电话</label>
        <input type="text" class="form-control" placeholder="phone" v-model="user.phone" />
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <input type="text" class="form-control" placeholder="email" v-model="user.email" />
      </div>
      <div class="form-group">
        <label>网址</label>
        <input type="text" class="form-control" placeholder="website" v-model="user.website" />
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
  </div>
</template>

<script>
import { addUser } from '@/api/users'
export default {
  name: 'Add',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    handleSubmit: function (e) {
      const user = this.user
      if (!user.name || !user.phone || !user.email) {
        alert('请填写对应信息!')
      } else {
        const newUser = {
          name: user.name,
          username: user.username,
          phone: user.phone,
          email: user.email,
          website: user.website
        }
        addUser(newUser)
          .then(res => {
            this.$router.push({path: '/', query: {alert: '用户信息添加成功！'}})
          })
          .catch(error => error)
      }
      e.preventDefault()
    }
  }
}
</script>

<style>

</style>
