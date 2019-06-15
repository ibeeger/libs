const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--disable-gpu", "--max-texture-size=210000"]
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
  // await page._client.send('Performance.enable');
  await page.goto('http://www.willclass.com');
  let rst = await page.evaluate(() => {
    const result = {
        redirect:  window.performance.timing["redirectEnd"] - window.performance.timing["redirectStart"]+"ms",
        connect : window.performance.timing["connectEnd"] - window.performance.timing["connectStart"]+"ms",
        response : window.performance.timing["responseEnd"] - window.performance.timing["responseStart"]+"ms",
        contentLoad : window.performance.timing["domContentLoadedEventEnd"] - window.performance.timing["domContentLoadedEventStart"]+"ms",
        load : window.performance.timing["loadEventEnd"] - window.performance.timing["loadEventStart"]+"ms"
    };
    // for (const key of Object.keys(window.performance.timing.__proto__))
    //   result[key] = (window.performance.timing[key])+"ms";
    return result;
  })

  console.log(rst);
  // await page.pdf({path: 'result.pdf',margin:{left:0,top:0,right:0,bottom:0}, height:"297mm",width:"210mm",printBackground:true});
  // console.log('Dimensions:', 1);
  await page.screenshot({
    path: "a.png",
    fullPage: true
  })

  await browser.close();
})();