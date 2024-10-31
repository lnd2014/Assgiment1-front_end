<template>
    <div>
        <!--element为24等分-->
        <el-row>
            <el-col :span="6">
                <div style="width: 100%; height:  300px; background-color: dodgerblue;"></div>
            </el-col>
            <el-col :span="6">
                <div style="width: 100%; height: 300px; background-color: red;"></div>
            </el-col>
        </el-row>

        <!--测试图片与Element框架-->
        <el-row>
            <el-col :span="6">
                <div style="border:1px solid #ccc; padding:10px; text-align: center;">
                    <img src="@/assets/logo.png" style="width: 80%;">
                    <div>描述</div>
                    <div style="color: red">价格 99</div>
                </div>
            </el-col>
            <el-col :span="6">
                <div style="border:1px solid #ccc; padding:10px">
                <img src="@/assets/logo.png" style="width: 100%;">
                </div>
            </el-col>
        </el-row>

        
        <el-row>
            <el-col :span="24">
                <el-button type="warning">警告按钮</el-button>
                <el-button type="">普通按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="" circle icon="el-icon-search"></el-button>
                <el-button type="" round>圆角按钮</el-button>
                <el-button type="primary" plain>朴素按钮</el-button>
            </el-col>
        </el-row>

        <!--表单测试 必须使用v-model绑定-->
        <el-row>
          <el-col :span="24">
            <!--简单输入框-->
            <div>
            <el-input @input="printValues(value)" placeholder="请输入内容" type="textarea" style="width: 200px;" v-model="value"></el-input>  
            <!--密码-->
            <br><br>
            <el-input style="width: 300px" clearable prefix-icon="el-icon-search"  show-password v-model="value1" placeholder=""></el-input>
            <el-button type="" style="align-items:baseline;" icon="el-icon-search">搜搜</el-button>
            </div>
          </el-col>
        </el-row>

        
    </div>
</template>

<script>
export default
{
    name:'Element',
    //对象里的内容返回给实例
    data(){
        return{
            value:"",
            value1:"",
        }
    },
    methods: {
        printValues(value){
            console.log(value);
        }
    }
    
}
//检测实时变化


</script>