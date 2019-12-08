<template>
    <div>
      <h3 class="login-title">用户登录</h3>
      <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
        <el-form-item prop="userName">
          <el-input v-model="dataForm.userName" placeholder="帐号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="dataForm.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <el-row :gutter="20">
            <el-col :span="14">
              <el-input v-model="dataForm.captcha" placeholder="验证码">
              </el-input>
            </el-col>
            <el-col :span="10" class="login-captcha">
              <img style="display: block;width: 100%;" :src="captchaPath" @click="getCaptcha()" alt="">
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="38">
            <el-col :span="12">
              <el-button class="login-btn-submit" type="primary" @click="dataFormSubmit()" :loading="loginLoading">
                登录
              </el-button>
            </el-col>
            <el-col :span="12">
              <el-button class="login-btn-submit" type="primary" @click="visible = false">取消</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

</style>
