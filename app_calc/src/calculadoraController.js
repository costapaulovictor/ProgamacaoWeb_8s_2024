const calculadora = require('../calculadora/calculadora');

exports.index = (req, res) => {
    res.render('index');
};

exports.calcular = (req, res) => {
    const { numero1, numero2, operacao } = req.body;

    if (isNaN(numero1) || isNaN(numero2)) {
        res.render('index', { error: 'Por favor, insira valores numéricos.' });
    } else {
        const resultado = calculadora.calcular(parseFloat(numero1), parseFloat(numero2), operacao);
        res.render('resultado', { resultado, operacao: calculadora.getNomeOperacao(operacao) });
    }
};