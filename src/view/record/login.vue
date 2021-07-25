<template>
  <div>
    <el-form :model="userForm"
             :rules="rules2"
             ref="userForm"
             label-position="left"
             label-width="0px"
             class="demo-userForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="userForm.username"
                  auto-complete="off"
                  placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password"
                  v-model="userForm.password"
                  auto-complete="off"
                  placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked"
                   checked
                   class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary"
                   style="width:100%;"
                   @click.native.prevent="handleSubmit"
                   :loading="logining">登录</el-button>
        <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import recordApi from '../../api/record'
import router from '../../router'

export default {
  name: 'Login',
  data () {
    return {
      logining: false,
      userForm: {
        username: 'admin',
        password: '123456'
      },
      rules2: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
          // { validator: validaePass }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // { validator: validaePass2 }
        ]
      },
      checked: true
    }
  },
  methods: {
    handleReset () {
      this.$refs.userForm.resetFields()
    },
    handleSubmit (ev) {
      this.$refs.userForm.validate((valid) => {
        recordApi.authorize(this.userForm).then(response => {
          if (response) {
            const token = response.data.token
            if (token) {
              this.$store.dispatch('auth/create_token', token)
              router.push('/record/main')
            }
          }
        })
      })
    }
  }
}

</script>
<style >
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.remember {
  margin: 0px 0px 35px 0px;
}
</style>
