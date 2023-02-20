<template>
    <el-popover
        placement="bottom-end"
        :hide-after="0"
        :width="260"
        trigger="click"
        popper-class="admin-info-box"
    >
        <template #reference>
            <div class="admin-info hover">
                <el-avatar :size="25" fit="fill">
                    <img src="https://demo.buildadmin.com/static/images/avatar.png" alt="" />
                </el-avatar>
                <div class="admin-name">管理员</div>
                <el-icon class="header-icon el-icon--right">
                    <arrow-down />
                </el-icon>
            </div>
        </template>
        <div>
            <div class="admin-info-base">
                <el-avatar :size="70" fit="fill">
                    <img src="https://demo.buildadmin.com/static/images/avatar.png" alt="" />
                </el-avatar>
                <div class="admin-info-other">
                    <div class="admin-info-name">管理员</div>
                    <div class="admin-info-lasttime">2023-02-14 15:35:24</div>
                </div>
            </div>
            <div class="admin-info-footer">
                <el-button type="primary" plain>个人资料</el-button>
                <el-button type="danger" @click="logOut" plain>注销</el-button>
            </div>
        </div>
    </el-popover>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from "element-plus";
const router = useRouter()

const logOut = async () => {
    ElMessageBox.confirm('您是否确认退出登录?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    })
    .then(async () => {
        localStorage.removeItem('token')
        location.reload()
    })
    .catch(() => {})
}
</script>
<style lang="scss" scoped>
.admin-info {
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
    user-select: none;
    .admin-name {
        padding-left: 6px;
        white-space: nowrap;
        color: var(--el-text-color-primary);
    }
}
.admin-info-base {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 10px;
    .admin-info-other {
        display: block;
        width: 100%;
        text-align: center;
        padding: 10px 0;
    }
}
.admin-info-footer {
    padding: 10px 0;
    margin: 0 -12px -12px;
    display: flex;
    justify-content: space-around;
}
</style>