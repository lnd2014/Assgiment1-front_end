<template>
  <div>
    <el-container>
      <!--标题栏-->
      <el-header style="text-align: center;font-size: 20px;">
        <el-col :span="1" style="margin-top: 3px;">
          <img @click="clickTopIcon" :src="currentImg" alt="图标" style="width: 57px;">
        </el-col>
         <!--下拉菜单-->
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 20px;padding: auto;"></i>
          <el-dropdown-menu slot="dropdown">
            <!--新增按钮-->
            <el-dropdown-item><span @click="handleAdd()">新增</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>通讯录管理系统</span>
      </el-header>
      <!--内容栏-->
      <el-main>
        <!--表格-->
        <el-table 
          :data="tableData"
          stripe
          border>
          <el-table-column 
            prop="name"
            label="姓名"></el-table-column>
          <el-table-column 
            prop="phonenumber"
            label="电话号码"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>  
        </el-table>
      </el-main>
    </el-container>
    <!--对话框-->
    <el-dialog title="编辑联系人" :visible.sync="dialogFormVisible" style="text-align: center;">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" :label-width="formLabelWidth">
          <el-input v-model="form.phonenumber" placeholder="请输入电话号码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

import request from '@/utils/request'

export default {
  name: 'HomeView',
  data() {
    return {
      currentImg: '/icon_ruka.png',
      imgSrc_ruka: '/icon_ruka.png',
      imgSrc_yuki:' /icon_yuki.png',
      tableData: [{
        name: '1',
        phonenumber: '1212'
      },{
        name: '12',
        phonenumber: '1212'
      },{
        name: '123',
        phonenumber: '1212'
      },{
        name: '1234',
        phonenumber: '1212'
      }],
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
          name: '',
          delivery: false,
          type: [],
          phonenumber: ''
        },
    }
  },
  created()
  {
    this.load()
  },

  methods: {
    //功能逻辑
    save()
    {
      request.post("http:///localhost:9090/user", this.form).then(
        res=>{
          this.load()
        }
      )
      // console.log(this.form.name);
      
      this.dialogFormVisible = false;
    },
    load(){
      request.get("http://localhost:9090/user").then(
        res=>{
          this.tableData = res
        }
      )
    },
    //业务逻辑
    handleAdd(){
      this.dialogFormVisible = true;
    },
    clickTopIcon()
    {
      //console.log("click");
      if(this.currentImg === this.imgSrc_ruka) {
        this.currentImg = this.imgSrc_yuki;
      }
      else {
        this.currentImg = this.imgSrc_ruka;
      }
    },
    handleEdit(row){
      
      this.dialogFormVisible = true;
      this.form = row;
      
    },
    handleDelete(row){
      // console.log(index, row);
      request.delete("http://localhost:9090/user/"+row.id).then(
        res=>{
          this.load()
        }
      )
    }
  }
}
</script>

<style>
.el-header {
    background-color: goldenrod;
    color: #333;
    line-height: 65px;
  }
</style>