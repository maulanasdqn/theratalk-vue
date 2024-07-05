<script setup lang="ts">
import Input from '../../../components/ui/input.vue'
import Button from '../../../components/ui/button.vue'
import { useRegisterForm } from '../store'

const { form, isPending, onSubmit } = useRegisterForm()

</script>

<template>
  <form @submit.prevent="onSubmit"
    class="w-full max-w-[594px] p-6 bg-white shadow-md h-auto rounded-xl flex flex-col gap-y-6 justify-center">
    <div class="flex flex-col">
      <h1 class="text-3xl font-bold">Register</h1>
    </div>
    <div class="flex flex-col gap-y-4">
      <Input :errorMessage="form.state.error.fullname" autocomplete="fullname" v-model="form.fullname"
        label="Nama Lengkap" name="fullname" type="text" placeholder="Masukkan nama lengkap" required />
      <Input :errorMessage="form.state.error.address" autocomplete="address" v-model="form.address" label="Alamat Lengkap"
        name="address" type="text" placeholder="Masukkan alamat lengkap" required />
      <Input :errorMessage="form.state.error.email" autocomplete="email" v-model="form.email" label="Alamat Email"
        name="email" type="email" placeholder="Masukkan email" required />
      <div class="flex gap-x-4 w-full">
        <Input :errorMessage="form.state.error.password" autocomplete="current-password" v-model="form.password"
          label="Kata Sandi" name="password" type="password" placeholder="********" required />
        <Input :errorMessage="form.state.error.confirmPassword" autocomplete="current-password"
          v-model="form.confirmPassword" label="Konfirmasi Kata Sandi" name="confirmPassword" type="password"
          placeholder="********" required />
      </div>
      <Button :disabled="!form.state.isValid || isPending" class="w-full">Daftar Sekarang</Button>
      <div class="w-full flex justify-center">
        <div class="text-xs sm:text-sm text-gray-500">
          Sudah Mempunyai Akun?
          <RouterLink class="text-green-700 text-xs sm:text-sm" to="/auth/login">
            Masuk Disini
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
        Daftar dengan Google
      </Button>
    </div>
  </form>
</template>
