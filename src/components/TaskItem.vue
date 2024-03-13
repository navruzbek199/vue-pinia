<template>
    <div class=" flex justify-between bg-slate-100 px-3 py-1 h-20 mb-3 items-center rounded-md">
        <h5 class="  text-black capitalize">
            {{ taskItem.title }}
        </h5>
        <div class=" flex gap-2">
            <i class="fa-solid fa-trash cursor-pointer" @click="tastArray.deletedTask(taskItem.id)"></i>
            <i class="fa-solid fa-heart cursor-pointer text-black" :class="{ 'active': taskItem.completed }"
            @click="tastArray.toggleFav(taskItem.id)"></i>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { TaskInterface } from '../models';
export default defineComponent({
    props: {
        taskItem: {
            type: Object as PropType<TaskInterface>,
            required: true
        },
        tastArray: {
            type: Object,
            required: true
        }
    },
    methods: {
    }
})
</script>

<style scoped>
.fa-heart.active{
    color: red;
}
</style>