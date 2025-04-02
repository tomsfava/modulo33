const saudacao = require('./saudacao')

describe('Testes para saudação', () => {
    test('Deverá retornar Olá Maria', () => {
        const saudarMaria = saudacao.dizOla('Maria')
        expect(saudarMaria).toBe('Olá Maria')
    })
})