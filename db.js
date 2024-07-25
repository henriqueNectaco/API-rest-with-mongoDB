const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/uploado', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  }
}

module.exports = main;
