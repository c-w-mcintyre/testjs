
function testGS(){

    //app script web app
    var url ="https://script.google.com/macros/s/AKfycbzIsPWN0U4NArxM3_Dl3sWWZBIpTFiHtEe3ova_RX2HioDBVXDdoVzxdxdKeHsvdOp0/exec";
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
             });
}


function addGS(){

    //app script web app
    var url ="https://script.google.com/macros/s/AKfycbzIsPWN0U4NArxM3_Dl3sWWZBIpTFiHtEe3ova_RX2HioDBVXDdoVzxdxdKeHsvdOp0/exec";
    
    fetch(url,{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name:"Curtis"}), // body data type must match "Content-Type" header
      });

}

document.getElementById("btn").addEventListener("click",testGS);
document.getElementById("btn2").addEventListener("click",addGS);
