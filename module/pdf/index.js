var conversion = require("phantom-html-to-pdf")({
    /* number of allocated phantomjs processes */
    numberOfWorkers: 2,
    /* timeout in ms for html conversion, when the timeout is reached, the phantom process is recycled */
    timeout: 5000,
    /* directory where are stored temporary html and pdf files, use something like npm package reaper to clean this up */
    tmpDir: "os/tmpdir",
    /* optional port range where to start phantomjs server */
    portLeftBoundary: 1000,
    portRightBoundary: 2000,
    /* optional hostname where to start phantomjs server */
    host: '127.0.0.1',
    /* use rather dedicated process for every phantom printing
      dedicated-process strategy is quite slower but can solve some bugs
      with corporate proxy */
    // strategy: "phantom-server | dedicated-process",
    /* optional path to the phantomjs binary
       NOTE: When using phantomjs 2.0, be aware of https://github.com/ariya/phantomjs/issues/12685 */
    phantomPath: "/usr/local/bin/phantomjs",
    /* see phantomjs arguments for proxy setting details */
    // proxy,proxy-type,proxy-auth,
    /* the collected console.log messages are trimmed by default */
    maxLogEntrySize: 1000
});
conversion({
    html: "<h1>Hello world</h1>",
    header: "<h2>foo</h2>",
    footer: "<h2>foo</h2>",
}, function(err, pdf) {
	console.log(err)
});