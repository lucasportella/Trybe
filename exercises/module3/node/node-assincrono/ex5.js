const fs = require('fs').promises;

const myArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

Promise.all(myArray.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string))
)
    .then(
        () => {
        // perceba que o () do .then ficou vazio aqui, pq o retorno da promise é um array com 5 posições undefined, pois o que a promise fez foi escrever no nosso sistema 5 arquivos e não retornar algo de fato para o nosso código, logo aqui deve ficar vazio e vc deve continuar codando a partir do {} sem esperar nada de retorno do fs.writeFile
            const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

            Promise.all(files.map((file) => fs.readFile(file, 'utf8')))
                .then((fullString) => {
                    treatedFullString = fullString.join(' ');
                    fs.writeFile('./fileAll.txt', treatedFullString)
                })
        }
    )



