<template>
    <form @submit.prevent="handlerSubmit" class="flex gap-2 mt-3">
        <input 
        type="text"
        class=" w-full border rounded-md border-cyan-700 px-3 h-11"
        placeholder="I need to ..."
        v-model="newTask"
        >
        <button class=" bg-black h-11 w-16 rounded-md text-white">Add</button>
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

<style scoped>

</style>../stores/TaskStore