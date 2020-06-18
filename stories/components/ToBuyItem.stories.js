import ToBuyItem from '@/components/ToBuyItem.vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
    title: 'ToBuyItem',
    component: ToBuyItem,
    decorators: [withKnobs]
}

export const Default = () => ({
    components: {
        ToBuyItem
    },
    template: '<to-buy-item :name="name" @shop="shop" @remove="remove" />',
    props: {
        name: {
            default: text('Nome', 'Laranja')
        }
    },
    methods: {
        shop: action('shop'),
        remove: action('remove')
    }
})
