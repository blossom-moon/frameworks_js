<script setup lang="ts">
import { ref, computed } from 'vue'
import UserCard from './components/UserCard.vue'

interface User {
  id: number
  firstName: string
  lastName: string
  gender: 'male' | 'female'
  age: number
  position: string
  photo: string
  hobbies: string[]
}

const users = ref<User[]>([
  {
    id: 1,
    firstName: 'Іван',
    lastName: 'Петренко',
    gender: 'male',
    age: 25,
    position: 'Frontend Developer',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    hobbies: ['Програмування', 'Футбол', 'Гітара']
  },
  {
    id: 2,
    firstName: 'Марія',
    lastName: 'Іваненко',
    gender: 'female',
    age: 22,
    position: 'UI/UX Designer',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    hobbies: ['Дизайн', 'Танці', 'Фотографія']
  },
  {
    id: 3,
    firstName: 'Олександр',
    lastName: 'Сидоренко',
    gender: 'male',
    age: 30,
    position: 'Project Manager',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
    hobbies: ['Шахи', 'Читання', 'Біг']
  },
  {
    id: 4,
    firstName: 'Анна',
    lastName: 'Коваленко',
    gender: 'female',
    age: 28,
    position: 'Data Analyst',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    hobbies: ['Аналітика', 'Йога', 'Подорожі']
  },
  {
    id: 5,
    firstName: 'Петро',
    lastName: 'Шевченко',
    gender: 'male',
    age: 35,
    position: 'Backend Developer',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    hobbies: ['Програмування', 'Футбол', 'Музика']
  },
  {
    id: 6,
    firstName: 'Ольга',
    lastName: 'Бондаренко',
    gender: 'female',
    age: 19,
    position: 'Marketing Manager',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    hobbies: ['Маркетинг', 'Спорт', 'Кіно']
  },
  {
    id: 7,
    firstName: 'Михайло',
    lastName: 'Ткаченко',
    gender: 'male',
    age: 17,
    position: 'Intern Developer',
    photo: 'https://randomuser.me/api/portraits/men/4.jpg',
    hobbies: ['Навчання', 'Геймінг', 'Баскетбол']
  },
  {
    id: 8,
    firstName: 'Наталія',
    lastName: 'Кравченко',
    gender: 'female',
    age: 32,
    position: 'QA Engineer',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
    hobbies: ['Тестування', 'Садоводство', 'Велоспорт']
  },
  {
    id: 9,
    firstName: 'Дмитро',
    lastName: 'Олійник',
    gender: 'male',
    age: 27,
    position: 'DevOps Engineer',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
    hobbies: ['Сервери', 'Біг', 'Кемпінг']
  },
  {
    id: 10,
    firstName: 'Софія',
    lastName: 'Павленко',
    gender: 'female',
    age: 24,
    position: 'Frontend Developer',
    photo: 'https://randomuser.me/api/portraits/women/5.jpg',
    hobbies: ['Програмування', 'Малювання', 'Танці']
  }
])

type Filter = 'all' | 'male' | 'female'
const currentFilter = ref<Filter>('all')

const setFilter = (filter: Filter) => {
  currentFilter.value = filter
}

const filteredUsers = computed(() => {
  if (currentFilter.value === 'all') {
    return users.value
  }
  return users.value.filter(user => user.gender === currentFilter.value)
})
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>🏢 Наша команда</h1>
      <p>Знайомтесь з нашими чудовими співробітниками</p>
    </header>

    <div class="filters">
      <button
        @click="setFilter('all')"
        :class="{ active: currentFilter === 'all' }"
        class="filter-btn"
      >
        👥 Всі
      </button>
      <button
        @click="setFilter('male')"
        :class="{ active: currentFilter === 'male' }"
        class="filter-btn"
      >
        👨 Чоловіки
      </button>
      <button
        @click="setFilter('female')"
        :class="{ active: currentFilter === 'female' }"
        class="filter-btn"
      >
        👩 Жінки
      </button>
    </div>

    <div class="users-row">
      <div v-if="filteredUsers.length === 0" class="empty-message">
        😔 Список користувачів пустий
      </div>

      <UserCard
        v-for="user in filteredUsers"
        :key="user.id"
        :user="user"
        class="user-card-item"
      />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.app {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  color: white;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.filter-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  background: rgba(255,255,255,0.2);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.filter-btn:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: white;
  color: #667eea;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.users-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  overflow-x: auto;
  padding: 20px 0;
  min-height: 350px;
}

.user-card-item {
  flex: 0 0 auto;
}

.empty-message {
  text-align: center;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  padding: 50px;
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

/* Стилі для скролу */
.users-row::-webkit-scrollbar {
  height: 8px;
}

.users-row::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
}

.users-row::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.3);
  border-radius: 10px;
}

.users-row::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.5);
}
</style>
