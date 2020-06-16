import ToBuyItem from '@/components/ToBuyItem.vue'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
    title: 'ToBuyItem',
    component: ToBuyItem,
    decorators: [withKnobs]
}

export const Default = () => ({
    components: {
        ToBuyItem
    },
    template: '<to-buy-item :name="name" />',
    props: {
        name: {
            default: text('Nome', 'Laranja')
        }
    }
})
