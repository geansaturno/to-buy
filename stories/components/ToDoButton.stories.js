import ToDoButton from '@/components/ToDoButton.vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'

export default {
    title: 'TodoButton',
    component: ToDoButton,
    decorators: [withKnobs]
}

export const Default = () => {
    return {
        components: { ToDoButton },
        template: '<to-do-button :text="btnText" @click="action"/>',
        props: {
            btnText: {
                default: text('Texto', 'Enviar')
            }
        },
        methods: {
            action: action('clicked')
        }
    }
}

export const WithTheme = () => {
    return {
        components: { ToDoButton },
        template: '<to-do-button :text="btnText" @click="action" :btnStyle="btnStyle"/>',
        props: {
            btnText: {
                default: text('Texto', 'Enviar')
            },
            btnStyle: {
                default: select('Tema', ['primary', 'danger'], 'primary')
            }

        },
        methods: {
            action: action('clicked')
        }
    }
}
