const axios = require('axios');
const puppeteer = require('puppeteer');

const TIME_WORKER_INTERVAL = 60000;
const takeScreenshot=  async (url) => {
    let imgBase64 = "";
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        imgBase64 = await page.screenshot({encoding: "base64"});
        await browser.close();
    } catch {
        imgBase64 = "Não foi possível printar a home desta url."
    }
   return imgBase64.toString();
}

async function  worker() {
    axios.get('http://localhost:3001/jobs').then((res) => {

        let jobs = res.data;

        Object.keys(jobs).map(async e => {
            let img = await takeScreenshot(jobs[e].url);
            let date = new Date().toLocaleString("pt-br", {timeZone: "America/Sao_Paulo"});
            axios.put(`http://localhost:3001/links/${jobs[e].id_link}`, {
                url: jobs[e].url,
                screenshot: img,
                date: date
            }).then((response) => {
                if(response.status == 200) {
                    axios.delete(`http://localhost:3001/jobs/${jobs[e].id}`);
                }
            })
        });

    })
    console.log('executado.')
}

setInterval(() => {
    worker()
}, TIME_WORKER_INTERVAL);

