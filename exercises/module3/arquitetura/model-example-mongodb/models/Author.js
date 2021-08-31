const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
 .filter((name) => name)
 .join(' ');

return {
 id,
 firstName,
 middleName,
 lastName,
 name: fullName,
};
};

const serialize = (authorData) => ({
 id: authorData.id,
 firstName: authorData.first_name,
 middleName: authorData.middle_name,
 lastName: authorData.last_name,
});


const getAll = async () => {
    return await connection()
        .then((db) => db.collection('authors').find().toArray()) 
        // pelo código que fizemos na connection anteriormente, sabemos que ela nos retorna uma conexão ao banco de dados do mongodb, em específico o banco 'model_example'
        // acessamos a coleção 'authors' do banco 'model_example' e usamos a função find() sem parâmetros o que nos retornará tudo q tem na coleção
        // e por fim usamos o método toArray() para transformar o resultado da query do mongo em um array
        // como essa operação retorna uma promise temos que usar outro .then se quisermos fazer alguma modificação adicional, como nesse caso, que queremos retornar algumas propriedades diferentes, mas poderíamos omitir essa parte:
            .then((authors) =>
                authors.map(({ _id, firstName, middleName, lastName }) =>
                getNewAuthor({
                    id: _id,
                    firstName,
                    middleName,
                    lastName,
                })
            )
        );
}


const findById = async (id) => {
    if (!ObjectId.isValid(id)) {
        return null;
    }

    const authorData = await connection()
        .then((db) => db.collection('authors').findOne(new ObjectId(id)));

    if (!authorData) return null;

    const { firstName, middleName, lastName } = authorData;

    return getNewAuthor({ id, firstName, middleName, lastName });
};

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;

    return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
    [firstName, middleName, lastName],
);

module.exports = {
        getAll,
        findById,
        isValid,
        create,
};
