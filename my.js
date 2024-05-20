


function testGS(){

    //app script web app
    var url ="https://script.google.com/macros/s/AKfycbzIsPWN0U4NArxM3_Dl3sWWZBIpTFiHtEe3ova_RX2HioDBVXDdoVzxdxdKeHsvdOp0/exec";
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
             });
}

document.getElementById("btn").addEventListener("click",testGS);

