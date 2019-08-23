<template>
    <div class="container">
       <el-card class="box-card">
           <img src="../../assets/images/logo_index.png" alt="">

            <el-form ref="LoginForm">
                <el-form-item >
                    <el-input v-model="LoginForm.mobile" placeholder="你能爱我多久"></el-input>
                </el-form-item>

                <el-form-item >
                    <el-input v-model="LoginForm.code" placeholder="真心有多真？" style="width: 255px; margin-right: 20px"></el-input>
                    <el-button>真假话</el-button>
                </el-form-item>

                <el-checkbox :value="true" style="margin-bottom:20px">大大方方的抱我，势均力敌的爱我</el-checkbox>
                <el-button type="danger" plain disabled style="width: 350px">我在来的路上看到你了</el-button>
            </el-form>

    </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      LoginForm: {
        mobile: '',
        code: ''
      },
      checked: true
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
