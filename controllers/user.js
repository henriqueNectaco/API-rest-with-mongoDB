const User = require('../models/Picture')

exports.create = async (req, res) => {
  try {
    const { name, age } = req.body; // Corrija para pegar o campo age corretamente
    const user = new User({
      name,
      age
    });
    await user.save();
    res.status(201).json(user); // Envia uma resposta com o usuário criado e status 201 (Created)
  } catch (error) {
    console.error('Erro ao criar usuário:', error); // Adiciona log para debugging
    res.status(500).json({ message: 'Erro ao criar usuário' }); // Melhore a resposta de erro
  }
};
exports.findAll = async (req, res) => {
  try {
    const users = await User.find(); // Corrija para usar find() em vez de findAll()
    res.json(users); // Envia os usuários encontrados como resposta
  } catch (error) {
    console.error('Erro ao buscar usuários:', error); // Adiciona log para debugging
    res.status(500).json({ message: 'Erro ao buscar usuários' }); // Melhore a resposta de erro
  }
};