import ToBuyButton from '@/components/ToBuyButton.vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'

export default {
    title: 'ToBuyButton',
    component: ToBuyButton,
    decorators: [withKnobs]
}

export const Default = () => ({
    components: { ToBuyButton },
    template: '<to-buy-button :text="btnText" @click="action"/>',
    props: {
        btnText: {
            default: text('Texto', 'Enviar')
        }
    },
    methods: {
        action: action('clicked')
    }
})

export const WithTheme = () => ({
    components: { ToBuyButton },
    template: '<to-buy-button :text="btnText" @click="action" :btnStyle="btnStyle"/>',
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
})
