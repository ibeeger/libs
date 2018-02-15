var client = require("../dist/http_client_huitong.js")
client.setHost("keep.huitong.com");
client.setMethod("GET");

// const http = require("http");
// http.get({
//   hostname: 'v3.huitong.com',
//   port: 80,
//   path: '/',
//   headers: {
// 	'Connection':'keep-alive',
// 	// "HT-Login-Token":"TWd2M2NwL3FNdG9GWHp2SU81MzQ3Zz09",
// 	// "HT-Platform-Type":"android",
// 	// "HT-Client-Version":"3.5.0",
// 	// "HT-Version-Code":30500,
// 	// "HT-Device-id":353347063280671,
// 	// 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
// 	// 'Content-Type': type,
// 	// 'Content-Length': _datalth,
// 	'Cookie': "HT_SSO_COOKIE=TjBwQnpqZEdKVFFGWHp2SU81MzQ3Zz09|11|1514271352877|f65d90f9f678b4d59cb90ce249f536cf; JSESSIONID=FC0B0772190EE9B0EEA21BE637F06F54; sid=1490771544067"
// 	},
//   agent: false  // create a new agent just for this one request
// }, (res) => {
//   // Do stuff with response
//   let str = ""
//   res.on("data",function(b){
//   	str+=b;
//   });
//   res.on("end",function(){
//   	console.log(str);
//   })
// });
// var i =0;
// setInterval(function(){
// 	client.post("/keep",{},function(data){
// 		console.log("ok");
// 	})
// },1)

var tm = `ewogICJwcml2YXRlIjogdHJ1ZSwKICAiZGVwZW5kZW5jaWVzIjogewogICAgImFu
dGQiOiAifjIuMTIuMCIsCiAgICAiYXJ0LXRlbXBsYXRlIjogIl40LjExLjAiLAog
ICAgImJhYmVsLWNvcmUiOiAiXjYueCIsCiAgICAiYmFiZWwtcGx1Z2luLWltcG9y
dCI6ICJeMS4xLngiLAogICAgImJhYmVsLXBsdWdpbi1tb2R1bGUtcmVzb2x2ZXIi
OiAiXjIuNy4xIiwKICAgICJib2R5LXBhcnNlciI6ICJeMS4xNy4yIiwKICAgICJj
bGFzc25hbWVzIjogIl4yLjIuNSIsCiAgICAiY29tcG9uZW50cyI6ICJeMC4xLjAi
LAogICAgImNvb2tpZS1wYXJzZXIiOiAiXjEuNC4zIiwKICAgICJkdmEtbG9hZGlu
ZyI6ICJeMC4yLjAiLAogICAgImR2YS1yZWFjdC1yb3V0ZXItMyI6ICJeMS4wLjAi
LAogICAgImV4cHJlc3MiOiAiXjQuMTUuMyIsCiAgICAiZXhwcmVzcy1hcnQtdGVt
cGxhdGUiOiAiXjEuMC4wIiwKICAgICJpbW11dGFiaWxpdHktaGVscGVyIjogIl4y
LjQuMCIsCiAgICAibGVzcy1taWRkbGV3YXJlIjogIl4yLjIuMCIsCiAgICAibG9k
YXNoIjogIl40LjE3LjQiLAogICAgImxvZzRqcyI6ICJeMS4xLjEiLAogICAgIm1v
bWVudCI6ICJeMi4xNi4wIiwKICAgICJtb3JnYW4iOiAiXjEuOC4yIiwKICAgICJw
YXRoLXRvLXJlZ2V4cCI6ICJeMS42LjAiLAogICAgInBkZmpzLWRpc3QiOiAiXjEu
Ni40NjUiLAogICAgInJjLWFuaW1hdGUiOiAiXjIuNCIsCiAgICAicmMtcXVldWUt
YW5pbSI6ICJeMS4zLjEiLAogICAgInJjLXR3ZWVuLW9uZSI6ICJeMS40LjAiLAog
ICAgInJlYWN0IjogIl4xNS40LjEiLAogICAgInJlYWN0LWNvcHktdG8tY2xpcGJv
YXJkIjogIl40LjIuMyIsCiAgICAicmVhY3QtZG5kIjogIl4yLjUuMSIsCiAgICAi
cmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQiOiAiXjIuNS4xIiwKICAgICJyZWFjdC1k
b20iOiAiXjE1LjQuMSIsCiAgICAicmVhY3QtZWNoYXJ0cyI6ICJeMC4xLjEiLAog
ICAgInJlcXVlc3QiOiAiXjIuNzIuMCIsCiAgICAic2VydmUtZmF2aWNvbiI6ICJe
Mi40LjMiLAogICAgInNpdGUiOiAiXjIuMjEuMCIsCiAgICAidXRpbHMiOiAiXjAu
My4xIgogIH0sCiAgImRldkRlcGVuZGVuY2llcyI6IHsKICAgICJiYWJlbC1jb3Jl
IjogIl42LjIzLjEiLAogICAgImJhYmVsLXBsdWdpbi1kZXYtZXhwcmVzc2lvbiI6
ICJeMC4yLjEiLAogICAgImJhYmVsLXBsdWdpbi1kdmEtaG1yIjogIl4wLjMuMiIs
CiAgICAiYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1kZWNvcmF0b3JzLWxlZ2FjeSI6
ICJeMS4zLjQiLAogICAgImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSI6
ICJeNi4yMi4wIiwKICAgICJiYWJlbC1wcmVzZXQtZXMyMDE1IjogIl42LjIyLjAi
LAogICAgImJhYmVsLXJ1bnRpbWUiOiAiXjYuOS4yIiwKICAgICJlc2xpbnQiOiAi
XjMuMTguMCIsCiAgICAiZXNsaW50LWxvYWRlciI6ICJeMS43LjAiLAogICAgImV4
cGVjdCI6ICJeMS4yMC4yIiwKICAgICJtb2NranMiOiAiXjEuMC4xLWJldGEzIiwK
ICAgICJyZWRib3gtcmVhY3QiOiAiXjEuMi4xMCIsCiAgICAicm9hZGhvZyI6ICJe
MS4xLjIiCiAgfSwKICAic2NyaXB0cyI6IHsKICAgICJzdGFydCI6ICJQT1JUPTg5
ODkgQlJPV1NFUj1ub25lIHJvYWRob2cgc2VydmVyIiwKICAgICJidWlsZCI6ICJO
T0RFX0VOVj1wcm9kdWN0aW9uIHJvYWRob2cgYnVpbGQiLAogICAgInRlc3Q0MCI6
ICJQT1JUPTMwNjAgTk9ERV9FTlY9dGVzdCBub2RlbW9uIC0td2F0Y2ggc2VydmVy
IC4vc2VydmVyL2Jpbi9lbXB3d3ciLAogICAgInRlc3Q0MSI6ICJQT1JUPTMwNjAg
Tk9ERV9FTlY9dGVzdGEgbm9kZW1vbiAtLXdhdGNoIHNlcnZlciAuL3NlcnZlci9i
aW4vZW1wd3d3IiwKICAgICJ0ZXN0NDIiOiAiUE9SVD0zMDYwIE5PREVfRU5WPXRl
c3RiIG5vZGVtb24gLS13YXRjaCBzZXJ2ZXIgLi9zZXJ2ZXIvYmluL2VtcHd3dyIs
CiAgICAidGVzdDQ1IjogIlBPUlQ9MzA2MCBOT0RFX0VOVj10ZXN0YyBub2RlbW9u
IC0td2F0Y2ggc2VydmVyIC4vc2VydmVyL2Jpbi9lbXB3d3ciLAogICAgInRlc3Q0
NiI6ICJQT1JUPTMwNjAgTk9ERV9FTlY9dGVzdGQgbm9kZW1vbiAtLXdhdGNoIHNl
cnZlciAuL3NlcnZlci9iaW4vZW1wd3d3IiwKICAgICJ0ZXN0NDciOiAiUE9SVD0z
MDYwIE5PREVfRU5WPXRlc3RlIG5vZGVtb24gLS13YXRjaCBzZXJ2ZXIgLi9zZXJ2
ZXIvYmluL2VtcHd3dyIsCiAgICAidGVzdDI1IjogIlBPUlQ9MzA2MCBOT0RFX0VO
Vj10ZXN0ZiBub2RlbW9uIC0td2F0Y2ggc2VydmVyIC4vc2VydmVyL2Jpbi9lbXB3
d3ciLAogICAgInRlc3QyNiI6ICJQT1JUPTMwNjAgTk9ERV9FTlY9dGVzdGcgbm9k
ZW1vbiAtLXdhdGNoIHNlcnZlciAuL3NlcnZlci9iaW4vZW1wd3d3IiwKICAgICJ0
ZXN0UHJlcCI6ICJQT1JUPTMwNjAgTk9ERV9FTlY9emhpdGlrdSBub2RlbW9uIC4v
c2VydmVyL2Jpbi9lbXB3d3ciLAogICAgInRlc3RPbmxpbmUiOiAiUE9SVD0zMDYw
IE5PREVfRU5WPW9ubGluZSBub2RlbW9uIC4vc2VydmVyL2Jpbi9lbXB3d3ciLAog
ICAgInRlc3RmIjogIlBPUlQ9MzA2MCBOT0RFX0VOVj10ZXN0ZiBmb3JldmVyIHN0
YXJ0IC1hIC1sIC90bXAvZW1wLmxvZyAuL3NlcnZlci9iaW4vZW1wd3d3IC1lIiwK
ICAgICJ0ZXN0IjogIlBPUlQ9MzA2MCBOT0RFX0VOVj10ZXN0IGZvcmV2ZXIgc3Rh
cnQgLWEgLWwgL3RtcC9lbXAubG9nIC4vc2VydmVyL2Jpbi9lbXB3d3cgLWUiLAog
ICAgInRlc3RhIjogIlBPUlQ9MzA2MCBOT0RFX0VOVj10ZXN0YSBmb3JldmVyIHN0
YXJ0IC1hIC1sIC90bXAvZW1wLmxvZyAuL3NlcnZlci9iaW4vZW1wd3d3IC1lIiwK
ICAgICJ0ZXN0YiI6ICJQT1JUPTMwNjAgTk9ERV9FTlY9dGVzdGIgZm9yZXZlciBz
dGFydCAtYSAtbCAvdG1wL2VtcC5sb2cgLi9zZXJ2ZXIvYmluL2VtcHd3dyAtZSIs
CiAgICAidGVzdGMiOiAiUE9SVD0zMDYwIE5PREVfRU5WPXRlc3RjIGZvcmV2ZXIg
c3RhcnQgLWEgLWwgL3RtcC9lbXAubG9nIC4vc2VydmVyL2Jpbi9lbXB3d3cgLWUi
LAogICAgInRlc3RkIjogIlBPUlQ9MzA2MCBOT0RFX0VOVj10ZXN0ZCBmb3JldmVy
IHN0YXJ0IC1hIC1sIC90bXAvZW1wLmxvZyAuL3NlcnZlci9iaW4vZW1wd3d3IC1l
IiwKICAgICJ0ZXN0ZSI6ICJQT1JUPTMwNjAgTk9ERV9FTlY9dGVzdGUgZm9yZXZl
ciBzdGFydCAtYSAtbCAvdG1wL2VtcC5sb2cgLi9zZXJ2ZXIvYmluL2VtcHd3dyAt
ZSIsCiAgICAidGVzdGciOiAiUE9SVD0zMDYwIE5PREVfRU5WPXRlc3RnIGZvcmV2
ZXIgc3RhcnQgLWEgLWwgL3RtcC9lbXAubG9nIC4vc2VydmVyL2Jpbi9lbXB3d3cg
LWUiLAogICAgInByZXAiOiAiUE9SVD0zMDYwIE5PREVfRU5WPXpoaXRpa3UgZm9y
ZXZlciBzdGFydCAtYSAtbCAvdG1wL2VtcC5sb2cgLi9zZXJ2ZXIvYmluL2VtcHd3
dyAtZSIsCiAgICAib25saW5lIjogIlBPUlQ9MzA2MCBOT0RFX0VOVj1vbmxpbmUg
Zm9yZXZlciBzdGFydCAtYSAtbCAvdG1wL2VtcC5sb2cgLi9zZXJ2ZXIvYmluL2Vt
cHd3dyAtZSIKICB9Cn0=
`

var arr = tm.replace(/\n/g,"").split("");
// var arr = new Array(214748364);
// var arr = new Buffer(10);
// var arr = new Buffer(2147483647);
var i =0;
console.log(arr.length);
console.time("for");
for(let k=0; k<arr.length; k++){
	// console.log(k);
}
console.timeEnd("for")
console.time("each");
arr.forEach(function(k,i){

});
console.timeEnd("each");
console.time("forin");
for(let k in arr){
	// console.log(k+":");
	// process.stdout.write(i+":");
}
console.timeEnd("forin")
