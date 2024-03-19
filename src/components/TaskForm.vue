<template>
    <form @submit.prevent="handlerSubmit" class="flex gap-2 mt-3">
        <el-input 
        type="text"
        class="input min-w-[400px] h-[80px] placeholder-red-500 text-blue-600"
        placeholder="I need to ..."
        v-model="newTask"
        clearable
        />
        <el-button type="danger" class="btn">
            Add
        </el-button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore';
const taskStore = useTaskStore()
const newTask = ref('')


const handlerSubmit = () => {
    if(newTask?.value.length > 0){
        taskStore.addTask({
            title: newTask.value,
            completed: false,
            id: Math.floor(Math.random() * 10000),
            userId: 1
        })
        newTask.value = ""
    }
}
</script>

<style scoped lang="css">
    .btn{
        height: 45px;
    }
    
</style>