import ToDoButton from '@/components/ToDoButton.vue'
import { action } from '@storybook/addon-actions'

export default {
    title: 'TodoButton',
    component: ToDoButton
}

export const DefaultButton = () => {
    return {
        components: { ToDoButton },
        template: '<to-do-button :text="\'Enviar\'" @click="action"/>',
        methods: {
            action: action('clicked')
        }
    }
}
