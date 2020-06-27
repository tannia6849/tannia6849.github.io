(async () => {
    const cur = await fetch('https://kodaktor.ru/j/rates')
        .then(x=> x.json());
    console.log(cur);

    table = document.createElement('table');
    document.body.appendChild(table);
    tr = table.appendChild(document.createElement('tr'));
    tr.appendChild(document.createElement('td')).appendChild(document.createTextNode('Валюта'));
    tr.appendChild(document.createElement('td')).appendChild(document.createTextNode('Продажа'));
    tr.appendChild(document.createElement('td')).appendChild(document.createTextNode('Покупка'));
    cur.forEach(element => {
        const tabletr = table.appendChild(document.createElement('tr'));
        tabletr.appendChild(document.createElement('td')).appendChild(document.createTextNode(element['name']));
        tabletr.appendChild(document.createElement('td')).appendChild(document.createTextNode(element['sell']));
        tabletr.appendChild(document.createElement('td')).appendChild(document.createTextNode(element['buy']));
         
    });
})();
