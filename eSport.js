var ePromise = d3.csv("thisIsaMess.csv")

ePromise.then(function(data){
    console.log("boom", data);
},
function(yikes){
    console.log("bigYikes", yikes);
})