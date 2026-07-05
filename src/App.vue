<script setup>
import { ref, onMounted } from 'vue'

const users = ref([])

onMounted(async () => {
  const res = await fetch('/api/users')
  users.value = await res.json()
})
</script>

<template>
  <div>
    <h2>Daftar Users</h2>

    <table border="1">
      <tr>
        <th>ID</th>
        <th>Nama</th>
        <th>Alamat</th>
      </tr>

      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.address }}</td>
      </tr>
    </table>
  </div>
</template>