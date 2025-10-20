<template>
  <div class="user-card" :class="cardClass">
    <img :src="user.photo" :alt="user.firstName" class="user-photo">

    <h3>{{ user.firstName }} {{ user.lastName }}</h3>
    <p class="position">{{ user.position }}</p>

    <p class="gender">{{ user.gender === 'male' ? '👨 Чоловік' : '👩 Жінка' }}</p>

    <p v-if="user.age > 18" class="age">Вік: {{ user.age }}</p>
    <p v-else class="age">Вік: Менше 18</p>

    <div class="hobbies">
      <strong>Хобі:</strong>
      <span v-for="(hobby, index) in user.hobbies" :key="index">
        {{ hobby }}{{ index < user.hobbies.length - 1 ? ', ' : '' }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface User {
  firstName: string
  lastName: string
  gender: 'male' | 'female'
  age: number
  position: string
  photo: string
  hobbies: string[]
}

interface Props {
  user: User
}

const props = defineProps<Props>()

const cardClass = computed(() => {
  if (props.user.age < 25) {
    return 'young'
  } else if (props.user.age >= 25 && props.user.age < 40) {
    return 'adult'
  } else {
    return 'senior'
  }
})
</script>

<style scoped>
.user-card {
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  padding: 15px;
  margin: 10px;
  width: 200px;
  text-align: center;
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.user-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.user-card.young {
  background: linear-gradient(135deg, #e8f5e8, #ffffff);
  border-left: 5px solid #4CAF50;
}

.user-card.adult {
  background: linear-gradient(135deg, #e3f2fd, #ffffff);
  border-left: 5px solid #2196F3;
}

.user-card.senior {
  background: linear-gradient(135deg, #fff3e0, #ffffff);
  border-left: 5px solid #FF9800;
}

.user-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 3px solid #ddd;
}

h3 {
  margin: 5px 0;
  color: #2c3e50;
  font-size: 16px;
  font-weight: bold;
}

.position {
  color: #7f8c8d;
  font-size: 14px;
  margin: 5px 0;
  font-weight: 500;
}

.gender {
  margin: 5px 0;
  font-size: 14px;
  color: #34495e;
  font-weight: 500;
}

.age {
  margin: 5px 0;
  font-weight: bold;
  color: #2c3e50;
}

.hobbies {
  margin-top: 10px;
  font-size: 12px;
  color: #555;
}

.hobbies strong {
  color: #2c3e50;
}

.hobbies span {
  display: block;
  margin-top: 3px;
  line-height: 1.4;
}
</style>
