import ToDoButton from '@/components/ToDoButton.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import { fake } from 'sinon'

function defaultButtomFactory (text, action = fake()) {
  return shallowMount(ToDoButton, {
    propsData: {
      text,
      action
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

    it('Deve executar uma ação quando for clicado', () => {
      const acao = fake()
      const cp = defaultButtomFactory('Fechar', acao)

      cp.trigger('click')

      expect(acao.called).to.be.true
    })

    it('Deve ter a classe button-primary', () => {
      const cp = defaultButtomFactory('Enviar')

      expect(cp.classes()).to.include('button-primary')
    })
  })

  describe('Botão de perigo', () => {
    it('Deve ter a classe button-danger', () => {
      const cp = shallowMount(ToDoButton, {
        propsData: {
          text: 'Enviar',
          action: fake(),
          btnStyle: 'danger'
        }
      })

      expect(cp.classes()).to.include('button-danger')
    })
  })
})
