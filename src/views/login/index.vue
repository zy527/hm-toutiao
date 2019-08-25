<template>
    <div class="container" ref="box">
       <el-card class="box-card">
           <img src="../../assets/images/logo_index.png" alt="">

            <el-form  ref="LoginForm" :model="LoginForm" status-icon :rules="LoginRules">
                <el-form-item prop="mobile" status-icon>
                    <el-input v-model="LoginForm.mobile" placeholder="被窝是上帝开在人间的分店"></el-input>
                </el-form-item>

                <el-form-item prop="code">
                    <el-input v-model="LoginForm.code" placeholder="真心有多真？" style="width: 255px; margin-right: 20px"></el-input>
                    <el-button>可人儿</el-button>
                </el-form-item>

                <el-checkbox :value="true" style="margin-bottom:20px">大大方方的抱我，势均力敌的爱我</el-checkbox>
                <el-button @click="login()" type="primary" round style="width: 350px">我在来的路上看到你了</el-button>
            </el-form>

    </el-card>
    </div>
</template>

<script>
export default {
  mounted () {
    // const box = this.$refs.box
    // const LoginForm = this.$refs.LoginForm
    // console.log(box)
    // console.log(LoginForm)
  },
  data () {
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('你！再好好想想！！！'))
      }
      callback()
    }

    return {
      LoginForm: {
        mobile: '',
        code: ''
      },

      LoginRules: {
        mobile: [
          { required: true, message: '难道不是吗?!!', trigger: 'blur' },
          { validator: checkMobile, trigger: 'change' }
        ],
        code: [
          { required: true, message: '这都要考虑!!!', trigger: 'blur' },
          { len: 6, message: '验证码长度6位数', trigger: 'blur' }
        ]
      },

      checked: true
    }
  },

  methods: {
    login () {
      this.$refs.LoginForm.validate((valid) => {
        if (valid) {
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.LoginForm)
            // 成功
            .then(res => {
              this.$router.push('/')
            })
            // 失败
            .catch(() => {
              this.message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
    background: url(../../assets/images/liyifeng.jpg) no-repeat center / cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.box-card {
    width: 400px;
    height: 350px;
    position: absolute;
    top: 0;
    right: 0;

    img {
        display: block;
        margin: 0 auto 30px;

    }
  }
</style>
