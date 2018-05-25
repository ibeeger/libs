const puppeteer = require('puppeteer');
const fs = require("fs");
var gid = 1000;
var allHTML = "";
(async function fetch() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36");
  // page.setViewport({width: 1200, height: 900});
  await page.setCookie({
    'value': 'dVpYSXpwdTVJVElGWHp2SU81MzQ3Zz09|11|1523154320554|db67277bc0bf095bec19db765b89b56f',
    'name': 'HT_SSO_COOKIE',
    'domain': '.willclass.com',
    'path': '/',
    'httponly': true,
    'secure': false,
    'expires': (new Date()).getTime() + (1000 * 60 * 60) /* <-- expires in 1 hour */
  })
  await page.goto('http://local.willclass.com/education/?groupId=' + gid);
  let has = await page.evaluate(() => {
    let html ="";
    var list = document.querySelectorAll(".table_list tbody>tr");
    var fire = false;
    if (list.length>1) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].querySelectorAll("td")[2].innerText != '未激活') {
          html+="<tr><td>"+list[i].querySelectorAll("td")[0].innerText+"</td><td>"+list[i].querySelectorAll("td")[2].innerText+"</td></tr>"
        };
      };
    }
    return html;
  });
   allHTML+=has;
   console.log(gid);
  if (true) {
    await browser.close();
    gid++;
    fetch(gid);
  } else {
    await page.evaluate(() => {
      document.querySelector(".header").remove();
      document.querySelector(".footer").remove();
      document.querySelector(".myclass_list").remove();
      document.querySelector(".repository_left_list").remove();
    });
    await page.emulateMedia('screen');
    await page.pdf({
      path: gid + '.pdf',
      margin: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      },
      height: "297mm",
      width: "210mm",
      printBackground: true
    });
    await browser.close();
    fetch(gid++);
  }
})();

process.on("SIGINT",function(){
  fs.writeFile("./index.html","<table>"+allHTML+"</table>","utf8",function () {
     process.exit(0);
  });

})