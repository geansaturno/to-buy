import ToBuyButton from '@/components/ToBuyButton.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

function defaultButtomFactory (text) {
    return shallowMount(ToBuyButton, {
        propsData: {
            text
        }
    })
}

describe('ToDoButton', () => {
    describe('Botão Padrão', () => {
        it('Deve ser um botão', () => {
            const cp = defaultButtomFactory('Fechar')

            expect(cp.element.tagName.toLocaleLowerCase()).to.be.equal('button')
        })

        it('Deve ter o texto "Clique Aqui"', () => {
            const cp = defaultButtomFactory('Clique Aqui')
            expect(cp.text()).to.be.equal('Clique Aqui')
        })

        it('Deve emitir o evendo de clique quando for clicado', () => {
            const cp = defaultButtomFactory('Fechar')

            cp.trigger('click')

            expect(cp.emitted().click).to.be.ok
        })

        it('Deve ter a classe button-primary', () => {
            const cp = defaultButtomFactory('Enviar')

            expect(cp.classes()).to.include('button-primary')
        })
    })

    describe('Botão de perigo', () => {
        it('Deve ter a classe button-danger', () => {
            const cp = shallowMount(ToBuyButton, {
                propsData: {
                    text: 'Enviar',
                    btnStyle: 'danger'
                }
            })

            expect(cp.classes()).to.include('button-danger')
        })
    })

    describe('Botão com icone', () => {
        it('Deve ter a classe button-icon', () => {
            const cp = shallowMount(ToBuyButton, {
                propsData: {
                    icon: 'cast'
                }
            })

            expect(cp.classes()).to.include('button-icon')
        })
        it('Deve ter o icone de cast', () => {
            const cp = shallowMount(ToBuyButton, {
                propsData: {
                    icon: 'cast'
                }
            })

            expect(cp.get('[data-feather="cast"]')).to.be.ok
        })
        it('Deve ter o icone de lixeira', () => {
            const cp = shallowMount(ToBuyButton, {
                propsData: {
                    icon: 'trash-2'
                }
            })

            expect(cp.get('[data-feather="trash-2"]'))
        })
    })
})
