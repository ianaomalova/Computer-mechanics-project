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
        bigArr[i] = document.getElementsByTagName("input")[i].value;document.getElementsByTagName("input")[i].value
        console.log(bigArr[i])
    }
}


