import http from 'http'
import fs from 'fs'
import queryString from 'querystring'


const PORTA = 3000
const HOST = 'localhost'

let alunos = []
let cursos = []


const server = http.createServer((req, res) => {
    console.log(`URL: ${req.url} - Método: ${req.method}`)


     if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(`
            <h1>Sistema SENAC</h1>

            <h2>Alunos</h2>
            <a href="/cadastro">Cadastrar Aluno</a><br>
            <a href="/alunos/html">Ver Alunos</a><br><br>

            <h2>Cursos</h2>
            <a href="/cadastroCurso">Cadastrar Curso</a><br>
            <a href="/cursos">Ver Cursos</a>
        `)
    }
      else if (req.url === '/cadastro' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(fs.readFileSync('cadastro.html', 'utf-8'))
    }

    else if (req.url === '/aluno' && req.method === 'POST') {
        let dados = ''

        req.on('data', chunk => dados += chunk)

        req.on('end', () => {
            const aluno = queryString.parse(dados)

            alunos.push(aluno)

            res.writeHead(302, { 'Location': '/alunos/html' })
            res.end()
        })
    }

    else if (req.url === '/alunos/html' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

        const lista = alunos.map(a => `
            <tr>
                <td>${a.matricula}</td>
                <td>${a.nome}</td>
                <td>${a.telefone}</td>
                <td>${a.email}</td>
                <td>${a.curso}</td>
            </tr>
        `).join('')

        res.end(`
            <h1>Alunos</h1>
            <table border="1">
                <tr>
                    <th>Matrícula</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Curso</th>
                </tr>
                ${lista}
            </table>

            <a href="/">Voltar</a>
        `)
    }

    // ===== CADASTRO CURSO =====
    else if (req.url === '/cadastroCurso' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(fs.readFileSync('cadastroCurso.html', 'utf-8'))
    }

    else if (req.url === '/curso' && req.method === 'POST') {
        let dados = ''

        req.on('data', chunk => dados += chunk)

        req.on('end', () => {
            const curso = queryString.parse(dados)

            cursos.push(curso)

            res.writeHead(302, { 'Location': '/cursos' })
            res.end()
        })
    }

    else if (req.url === '/cursos' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

        const lista = cursos.map(c => `
            <li>
                ${c.nome} - ${c.carga}h - ${c.tipo}
            </li>
        `).join('')

        res.end(`
            <h1>Cursos</h1>
            <ul>${lista}</ul>

            <a href="/">Voltar</a>
        `)
    }

    else {
        res.writeHead(404)
        res.end("Página não encontrada")
    }
})

server.listen(PORTA, HOST, () => {
    console.log(`Servidor rodando: http://${HOST}:${PORTA}`)
})