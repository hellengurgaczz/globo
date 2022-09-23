const axios = require('axios');
const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const http = require('http');
const { setInterval, setTimeout } = require('timers/promises');

const takeScreenshot=  async (url) => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto(url);
   let imgBase64 = await page.screenshot({encoding: "base64"});
   await browser.close();
   return imgBase64.toString();
}

async function  worker() {
    axios.get('http://localhost:3001/jobs').then((res) => {

        let jobs = res.data;

        Object.keys(jobs).map(async e => {
            let img = await takeScreenshot(jobs[e].url);
            console.log(img)
            axios.put(`http://localhost:3001/links/${jobs[e].id_link}`, {
                url: jobs[e].url,
                screenshot: img
            }).then((response) => {
                if(response.status == 200) {
                    axios.delete(`http://localhost:3001/jobs/${jobs[e].id}`);
                }
            })
        });

    })
    console.log('executado.')
}

worker()

app.listen(4300)