const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let height = 0;
  await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36");
  page.setViewport({width: 1200, height: 900});
  await page.setCookie({
    'value': 'dVpYSXpwdTVJVElGWHp2SU81MzQ3Zz09|11|1523154320554|db67277bc0bf095bec19db765b89b56f',
    /* required property */
    'name': 'HT_SSO_COOKIE',
    /* required property */
    'domain': '.willclass.com',
    'path': '/',
    /* required property */
    'httponly': true,
    'secure': false,
    'expires': (new Date()).getTime() + (1000 * 60 * 60) /* <-- expires in 1 hour */
  })
  // await page.goto('http://t.willclass.com/exams/new/wholeReport/393?examNo=W15064387455832017100001205&subjectCode=11');
  // await page.goto('http://t.willclass.com/exams/new/wholeReport/393?examNo=W15064387455832017100001205&subjectCode=11');
  // await page.goto('http://t.willclass.com/exams/olds');
  await page.goto('http://t.willclass.com/report');
  // await page.goto('http://t.willclass.com/');
  // Get the "viewport" of the page, as reported by the page.
  await page.waitForFunction(()=>{
      return !!!document.querySelector(".rc_wholeReport_ratio");
  });
  await page.waitFor(1000);
  let j = await page.evaluate(() => {
      // document.querySelector(".rc_old_view_report").style.padding=0;
      document.body.style.padding=0;
      document.documentElement.style.borderColor="#00c";
      // document.documentElement.style.backgroundColor="#cc9";
      document.querySelector(".header").remove();
      document.querySelector(".footer").remove();
      // document.querySelector("[name='viewport']").remove();
      // document.documentElement.style.width="210mm";
      // document.body.style.width="210mm";
      // document.body.style.maxWidth="210mm";
      // document.body.style.minWidth="210mm";
      // document.documentElement.style.overflow="hidden";
      document.querySelector(".container").style.overflow="hidden";
      document.querySelector(".container").style.margin="0";
      document.querySelector(".container").style.padding="0";
      document.querySelector(".row").style.margin="0";
      document.querySelector(".row").style.padding="0";
      document.querySelector(".container").style.maxWidth="100%";
      document.querySelector(".container").style.minWidth="100%";
      // document.querySelector("#reactExams").style.marginTop=0;
      // document.querySelector(".rc_wholeReport_grade").style.display='none';
      // document.querySelector(".ant-breadcrumb").style.display='none';
      // for(let t =0; t<document.querySelectorAll(".rc_wholeReport_gradee_knowledge table").length; t++){
      //   document.querySelectorAll(".rc_wholeReport_gradee_knowledge table")[t].style.width="auto";
      // }
      // for(let i=0; i<document.querySelectorAll(".ant-table-tbody tr").length; i++){
      //    document.querySelectorAll(".ant-table-tbody tr")[i].removeAttribute("style");
      // };
      // return document.querySelectorAll(".rc_wholeReport_gradee_knowledge td").length;
     // document.querySelector(".repository_left_list").style.display='none';
     // document.querySelector(".livecon").style.display='none';
    // return {
    //   width: document.documentElement.clientWidth,
    //   height: document.documentElement.clientHeight,
    //   deviceScaleFactor: window.devicePixelRatio
    // };
  });

  console.log(j);

  await page.emulateMedia('screen');
  // await page.pdf({path: 'hn.pdf',margin:{left:0,top:0,right:0,bottom:0}, height:"297mm",width:"210mm",printBackground:true});
  await page.screenshot({path:"a.png",fullPage:true})
  // console.log('Dimensions:', dimensions);

  await browser.close();
})();