const { listarCategorias } = require('../../servicos/repositorios/categorias');

const listaCategorias = async (req, res) => {

    const { id } = req.params;

    try {

        const categoria = await listarCategorias(id ? id : "");

        return res.status(categoria.status).json(categoria.resposta);

    } catch (error) {

        return res.status(500).json(error.message);

    }

}

module.exports = listaCategorias;