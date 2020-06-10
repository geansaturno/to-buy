import ToDoButton from '@/components/ToDoButton.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import { fake } from 'sinon'

function buttomFactory (text, action = fake()) {
  return shallowMount(ToDoButton, {
    propsData: {
      text,
      action
    }
  })
}

describe('ToDoButton', () => {
  it('Deve ser um botão', () => {
    const cp = buttomFactory('Fechar')

    expect(cp.element.tagName.toLocaleLowerCase()).to.be.equal('button')
  })

  it('Deve ter o texto "Clique Aqui"', () => {
    const cp = buttomFactory('Clique Aqui')
    expect(cp.text()).to.be.equal('Clique Aqui')
  })

  it('Deve executar uma ação quando for clicado', () => {
    const acao = fake()
    const cp = buttomFactory('Fechar', acao)

    cp.trigger('click')

    expect(acao.called).to.be.true
  })
})
