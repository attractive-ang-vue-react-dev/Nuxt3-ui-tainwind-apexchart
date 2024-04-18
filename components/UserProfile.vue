<template>
    <div>
       <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton color="white" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface User {
    firstName: string
    lastName: string
}

export default defineComponent({
    props: {
        user: {
            type: Object as () => User,
            required: true
        }
    },

    setup ({ user }) {
        const fullName = computed(() => `${user.firstName} ${user.lastName}`)
        const message = ref('This is a message')
        const items = [
            [{
                label: 'Profile',
                avatar: {
                    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
                }
            }]
        ]
        return {
            fullName,
            message,
            items
        }
    }
})
</script>