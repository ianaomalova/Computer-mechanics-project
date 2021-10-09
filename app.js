function saveClick() {
    let rowCount = document.getElementById('mytbl').rows.length - 1; //получение количества строк
    //console.log(rowCount)
    //получение кол-ва ячеек(дырок куда вводятся цифры без учета статических данных)
    let x = new Array(rowCount);
    let count = rowCount;
    for (let i = 0; i < rowCount; i++) {
        x[i] = new Array(4);
        count+=3;
    }
    //console.log(count)
    //let table = document.getElementsByTagName('mytbl')[0];
    // var tableObj = document.getElementById( "mytbl" );
    // var arr = [];
    // var allTRs = tableObj.getElementsByTagName( "tr" );
    // for ( var trCounter = 0; trCounter < allTRs.length; trCounter++ )
    // {
    //     var tmpArr = [];
    //     var allTDsInTR = allTRs[ trCounter ].getElementsByTagName( "td" );
    //     for ( var tdCounter = 0; tdCounter < allTDsInTR.length; tdCounter++ )
    //     {
    //         tmpArr.push( allTDsInTR[ tdCounter ].textContent );
    //     }
    //     arr.push( tmpArr );
    // }
    // for(let i = 0; i < arr.length; i++) {
    //     for(let j = 0; j < 3; j++) {
    //         //console.log(arr[i]);
    //     }
    // }
    // for(let i = 0; i < count; i++) {
    //     //console.log(document.getElementsByTagName("input")[i].value)
    // }
    let bigArr = new Array()
    for(let i = 0; i < count; i++) {
        bigArr[i] = document.getElementsByTagName("input")[i].value;
    }

    for(let i = 0; i < bigArr.length; i++) {
        let temp = parseInt(bigArr[i])
        if(Number.isNaN(temp)) {
            alert("Владислав Александрович, это безобразие. И кстати с вас утка:)")
            document.write('<img src="https://pbs.twimg.com/profile_images/1021724681752256513/WM5yxh86_400x400.jpg">');
            break
        }
        else {
            bigArr[i] = temp;
            console.log(bigArr[i])
        }
    }
}

let form = document.querySelector("form");
let log = document.querySelector("#log");

let flagRake = 0; //переменная отвечающая за заделки
form.addEventListener("submit", function(event) {
    let data = new FormData(form);
    let output = "";
    for (const entry of data) {
        output = entry[0] + " = " + entry[1] + "\r";
        if(entry[1]==='left rake') {
            alert("111111111111")
            flagRake = 1;
        }
        else if(entry[1] === 'right rake') {
            flagRake = 2;
            alert("22222")
        }
        else if(entry[1] === 'both rake'){
            flagRake = 3;
            alert("33333")
        }
    };
    //log.innerText = output;
    event.preventDefault();
}, false);

// function createTable() {
//     let rowCount = document.getElementById('mytbl').rows.length - 1;
//     let count_node = rowCount - 1;
//     let tbody1 = document.getElementById(table2).getElementsByTagName("TBODY")[0];
//     let tbody2 = document.getElementById(table3).getElementsByTagName("TBODY")[0];
//     let row1 = document.createElement("TR")
//     let td1 = document.createElement("TD")
//     td1.appendChild(document.createElement("input"))
//     row1.appendChild(td1);
//     tbody1.appendChild(row1);
// }


