import ToDoButton from '@/components/ToDoButton.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('ToDoButton', () => {
  it('Deve ser um botão', () => {
    const cp = shallowMount(ToDoButton)

    expect(cp.element).to.be.equal('button')
  })
  it('Deve ter o texto Clique Aqui')
})
