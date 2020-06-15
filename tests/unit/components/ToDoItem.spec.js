import { mount } from '@vue/test-utils'
import ToDoItem from '@/components/ToDoItem.vue'
import { expect } from 'chai'

const toDoItemFactory = (name) => {
    return mount(ToDoItem, {
        propsData: {
            name
        }
    })
}

describe('ToDoItem', () => {
    it('Deve ter o nome do item', () => {
        const itemName = 'Laranja'
        const cp = toDoItemFactory(itemName)

        expect(cp.find('.to-do-item-name').text()).to.be.equal(itemName)
    })

    it('Deve ter o botão para confirmar compra', () => {
        const cp = toDoItemFactory('Laranja')

        expect(cp.find('.to-do-item-shoping .button')).to.be.ok
    })

    it('Deve ter o botão para remover da lista', () => {
        const cp = toDoItemFactory('Maça')

        expect(cp.get('.to-do-item-remove .button')).to.be.ok
    })

    describe('Ação de compra', () => {
        it('Deve Emitir o evento de "shop"', () => {
            const cp = toDoItemFactory('Laranja')

            cp.get('.to-do-item-shoping .button').trigger('click')

            expect(cp.emitted('shop')).to.be.ok
        })
    })
    describe('Ação de remoção', () => {
        it('Deve emitir o evento de "remove"', () => {
            const cp = toDoItemFactory('Abobrinha')

            cp.get('.to-do-item-remove .button').trigger('click')

            expect(cp.emitted('remove')).to.be.ok
        })
    })
})
