const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({
    headless:true,
    args:["--disable-gpu","--max-texture-size=210000"]
  });
  const page = await browser.newPage();
  let height = 0;
  // page.setViewport({width: 1200, height: 1680});
  // page.emulate({
  //   viewport:{
  //     width:1100,
  //     height:110000
  //   },
  //   userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
  // })
  // await page.emulateMedia('screen');
  await page.goto('http://git.works.com/indexs.html');
  console.log('Dimensions:', 3);
  // await page.waitFor(10000);
  console.log('Dimensions:', 1);
 // await page.evaluate(()=>{
 //    document.documentElement.scrollTo(0,205000)
 // })
  console.log('Dimensions:', 2);
  // await page.pdf({path: 'result.pdf',margin:{left:0,top:0,right:0,bottom:0}, height:"297mm",width:"210mm",printBackground:true});
  // console.log('Dimensions:', 1);
  await page.screenshot({path:"a.png",fullPage:true})
  console.log('Dimensions:', 0);

  await browser.close();
})();