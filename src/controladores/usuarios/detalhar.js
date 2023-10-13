const knex = require("../../conexao");


const detalhar = async (req, res) => {
    try {
      const detalharUsuario = req.detalhar.usuario;
  
      const usuario = await knex('usuarios')
        .select('id', 'nome', 'email')
        .where({ id: detalharUsuario })
        .first();
  
      if (!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
  
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  }

  module.exports = detalhar;
