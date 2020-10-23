const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    // Tratar POST com Form Data, validando os dados do cartão de crédito
    // Exemplo:
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log(body);
      res.end('ok');
    });
  } else {
    // Tratar GET, retornar o doc HTML com o formulário do cartão de crédito
    // Exemplo:
    res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="/" method="post">
                <input type="text" name="card-number" />
                <input type="number" name="card-name" />
                <button>Submit</button>
            </form>
        </body>
        </html>
    `);
  }
});

server.listen(3000);
