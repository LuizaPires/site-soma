const calc = require('./calculadora');
test('somar 1 e 2 é igual a 3', () => {
    const soma = calc.soma(1,2);
    expect(soma).toBe(3); //soma ===3?
});

test('somar 1.2 e 2.3 igual 3.5', () => {
    const soma = calc.soma(1.2, 2.3);
    expect(soma).toBe(3.5);
});

test('somar valores texto', () => {
    const soma = calc.soma('1', '2');
    expect(soma).toBe(3);
});