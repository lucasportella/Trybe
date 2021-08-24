const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const escrever = require('./writeFunc');

const conteudoArquivo = 'VQV Trybe!'

describe('função de escrita', () => {
    describe('parâmetros corretos', () => {
        before(() => {
            sinon.stub(fs, 'writeFileSync').returns(conteudoArquivo);
        })

        after(() => {
            fs.writeFileSync.restore()
        })

        it('should return ok', () => {
           const resposta = escrever('arquivo1.txt', conteudoArquivo);
           expect(resposta).to.be.equals('ok')
        })
    })

    describe('parâmetros errados', () => {
        before(() => {
            sinon.stub(fs, 'writeFileSync').throws(new Error('Parâmetros errados'))
        })

        after(() => {
            fs.writeFileSync.restore()
        })

        it('should throw error', () => {
            const resposta = escrever('arquivo1.txt');
            expect(resposta).to.be.equals(null)
        })
    })


})