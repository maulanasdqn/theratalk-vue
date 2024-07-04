<script setup lang="ts">
import Input from '../../../components/ui/input.vue'
import Button from '../../../components/ui/button.vue'
import { useLoginStore } from '../store'

const { form, login } = useLoginStore()

</script>

<template>
  <form @submit.prevent="login"
    class="w-full max-w-[594px] p-6 bg-white shadow-md h-auto rounded-xl flex flex-col gap-y-6 justify-center">
    <div class="flex flex-col">
      <h1 class="text-3xl font-bold">Login</h1>
    </div>
    <div class="flex flex-col gap-y-4">
      <Input :errorMessage="form.state.error.email" autocomplete="email" v-model="form.email" label="Email" name="email"
        type="email" placeholder="Masukkan Email" required />
      <Input :errorMessage="form.state.error.password" autocomplete="current-password" v-model="form.password"
        label="Kata Sandi" name="password" type="password" placeholder="********" required />
      <div class="w-full flex justify-end">
        <RouterLink class="text-xs sm:text-sm font-semibold text-green-700" to="/auth/forgot">
          Lupa kata sandi?
        </RouterLink>
      </div>
      <Button :disabled="!form.state.isValid" class="w-full">Masuk</Button>
      <div class="w-full flex justify-center">
        <div class="text-xs sm:text-sm text-gray-500">
          Belum Mempunyai Akun?
          <RouterLink class="text-green-700 text-xs sm:text-sm" to="/auth/register">
            Daftar Disini
          </RouterLink>
        </div>
      </div>
      <div class="flex relative my-3">
        <span
          class="text-sm text-gray-400 leading-5 left-1/2 translate-x-[-50%] flex justify-center bg-white absolute -top-3 z-10 px-1">
          Atau
        </span>
        <hr class="border absolute top-1/2 -translate-y-1/2 border-gray-300 w-full" />
      </div>
      <Button variant="secondary" type="button">
        Masuk dengan Google
      </Button>
    </div>
  </form>
</template>
