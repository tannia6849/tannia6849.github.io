const express = require('express');
const { get } = require('axios');
const bodyParser = require('body-parser');
const session = require('express-session');

const PORT = 8000;
const app = express();
const URL = 'https://kodaktor.ru/j/users';
const checkAuth = (r, res, next) => {
    if (r.session.auth === 'ok') {
        next();
    } else {
        res.redirect('/login');
    }
};
app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(session({	
        secret:	'mysecret',	
        resave:	true,	
        saveUninitialized:	true 
        }))
    .get(/hello/, r => r.res.end('Hello world!'))
    .get('/login', r => r.res.render('login'))
    .post('/login/check/', r => {
        const { body: { login: l } } = r;
        const user = items.find(({ login }) => login === l);
        if (user) {
            if (user.password === r.body.pass) {
                r.session.auth = 'ok';
                r.res.send('Good');
            } else {
                r.res.send('Wrong pass!');
            }
        } else {
            r.res.send('No such user!');
        }
    })
    .get(/users/, checkAuth, async r => { 
        const { data: { users: items } } = await get(URL);
        r.res.render('list', { title: 'Список логинов', items });
        })
    .get('/logout', r => {
        r.session = null;   
        r.res.redirect('/login');
    })
    .get('/author', r =>{
        r.res.send('%D0%9F%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0%20%D0%9B%D0%B0%D0%B7%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0');
    })
    .use(r => r.res.status(404).end('Still not here, sorry!'))
    .use((e, r, res, n) => res.status(500).end(`Error: ${e}`))
    .set('view engine','pug')
    .listen(process.env.PORT || PORT, async () => {
        console.log(`Старт процесса ${process.pid}`);
        ({ data: { users: items } } = await get(URL));
    });
