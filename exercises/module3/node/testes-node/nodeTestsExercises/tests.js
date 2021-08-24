const sinon = require('sinon');
const { expect } = require('chai');
const func = require('./funcNumero');

describe('funcNumero', () => {
    describe('parâmetro é um número', () => {
        describe('número é positivo', () => {
            it('resposta positivo - string', () => {
                const resposta = func(5);
                expect(resposta).to.be.a('string')
            })

            it('resposta positivo', () => {
                const resposta = func(5);
            expect(resposta).to.be.equals("positivo")
            })
        })

        describe('número é negativo', () => {
            it('resposta negativo', () => {
                const resposta = func(-2);
                expect(resposta).to.be.equals('negativo')
            })
        })

        describe('número é neutro', () => {
            it('resposta neutro', () => {
                const resposta = func(0);
                expect(resposta).to.be.equals("neutro");
            })
        })
})

describe('parâmetro não é um número', () => {
    it('resposta é do tipo string', () => {
        const resposta = func('5');
        expect(resposta).to.be.a('string')
    })

    it('resposta apenas números', () => {
        const resposta = func('5h');
        expect(resposta).to.be.equals('por favor, informe apenas números')
    })
})

})