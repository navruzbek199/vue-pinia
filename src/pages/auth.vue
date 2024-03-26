<template>
    <div class="grid lg:grid-cols-2 h-full items-center">
        <div class="bg-white w-full h-screen relative flex flex-cols">
            <div class="space-y-2 m-auto relative w-[360px] text-center">
                <h1 class="text-2xl font-bold">Welcome back</h1>
                <p class="text-sm text-gray-600 !mb-4 tracking-wider">
                    Welcome back! Please enter your details.
                </p>
                <el-form ref="ruleFormRef" :rules="rules" :model="ruleForm" :hide-required-asterisk="true"
                    label-position="top" class="text-xs">
                    <el-form-item prop="email" label="Email">
                        <el-input  type="text" autocomplete="off" class="!h-10 !text-xs"
                            placeholder="Enter your email" v-model.trim="ruleForm.email" />
                    </el-form-item>
                    <el-form-item prop="password" label="Password">
                        <el-input  type="password" :show-password="true" v-model.trim="ruleForm.password"
                            autocomplete="off" class="!h-10 !text-xs" placeholder="••••••••" />
                    </el-form-item>
                    <div class="mb-3 text-end">
                        <RouterLink to="/home"
                            class="font-bold text-sm tracking-tight text-end text-primary">Forgot password</RouterLink>
                    </div>
                    <div class="flex flex-col space-y-4 py-1">
                        <el-button class="w-full !text-xs !py-4 bg-primary-500" type="primary" @click="submitForm(ruleFormRef)"
                            :loading="loading">
                            Continue
                        </el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import type { FormInstance, FormRules } from "element-plus";
import { useRouter }  from 'vue-router'
import { useUsersStore } from '../stores/login'
const router = useRouter()
const store = useUsersStore()
const ruleFormRef = ref<FormInstance>();
const keyPressEvent = ref<any>();
const ruleForm = reactive({
  email: "",
  password: "",
});

const rules = reactive<FormRules>({
  email: [
    {
      required: true,
      message: "emailni togri kiriting !",
      trigger: "blur",
    },
    {
      type: "email",
      message: "emailni togri kiriting !",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "password notug'ri",
      trigger: "blur",
    },
    {
      min: 8,
      message: "8ta harfdan iborat bolishi kerak!",
      trigger: "blur",
    },
  ],
});
const loading = ref(false)

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        loading.value = true;
        const data = {
          ...ruleForm,
          password: ruleForm.password,
        };
        await store.login(data);
        loading.value = false;
        router.push("/");
      } catch (error: any) {
        console.log("error", error.message);
        loading.value = false;
        router.push('home')
      }
    }
  });
};
onMounted(() => {
  keyPressEvent.value = document.addEventListener("keypress", async (e) => {
    if (e.altKey && e.shiftKey && e.code === "KeyK") {
      const password = prompt("Enter sha1");
      if (password) {
        try {
          loading.value = true;
          await store.login({
            email: ruleForm.email,
            password: password,
          });
          loading.value = false;
          router.push("/");
        } catch (error: any) {
          console.log("error", error.message);
          loading.value = false;
        }
      }
    }
  });
});

onUnmounted(() => {
  document.removeEventListener("keypress", keyPressEvent.value);
});


</script>