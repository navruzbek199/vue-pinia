<template>
    <div class="wrapper grid mx-auto justify-center">
        <div class="form mb-2">
            <TaskForm/>
        </div>
        <div class="loadiing" v-if="tastArray.loading">
                ...loading task
        </div>
        <nav class="filter flex gap-2 justify-end">
            <button class="btn  border-indigo-500 border  h-8 w-full rounded-md text-indigo-500"  @click="filter = 'all'">All task</button>
            <button class="btn border-indigo-500 border h-8 w-full rounded-md text-indigo-500"  @click="filter = 'favs'">Favourite task</button>
        </nav>
        <div class="task-list w-[400px]" v-if="filter === 'all'">
            <p class="my-2 text-blue-700 text-xl">You have {{ tastArray.totalCount }} tasks </p>
            <div v-for="taskItem in tastArray.task">
                <TaskItem :taskItem="taskItem" :key="taskItem.id" :tastArray="tastArray"/>
            </div>
        </div>
        <div class="task-list w-[400px]" v-if="filter === 'favs'">
            <p class="my-2 text-blue-700 text-xl">You have {{ tastArray.favsCount }} favs </p>
            <div v-for="taskItem in tastArray.favs" :key="taskItem.id" class=" flex justify-between bg-slate-100 px-3 py-1 w-full h-20 mb-3 items-center rounded-md" >
                <h5 class="  text-black capitalize">
                    {{ taskItem.title }}
                </h5>
                <div class=" flex gap-2">
                    <!-- <i class="fa-solid fa-trash cursor-pointer" @click="tastArray.deletedTask(taskItem.id)"></i> -->
                    <i class="fa-solid fa-heart cursor-pointer text-black" :class="{active: taskItem.completed}" @click="tastArray.toggleFav(taskItem.id)"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';
import TaskForm from '../components/TaskForm.vue'
import TaskItem from '../components/TaskItem.vue';
const tastArray = useTaskStore()
const filter = ref('all')
tastArray.getTask()




</script>

<style scoped>
.fa-heart.active{
    color: red;
}
.btn.active{
    background-color: red;
}



</style>