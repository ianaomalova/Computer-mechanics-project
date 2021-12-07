var bigArr = [];
var arrQ = []
var arrF = []
let bum = 0;
let bum3 = 0;
let bum2 = 0;
var counter2 = 1; //счетчик строк

function AddRow() {
    const $tbl = document.getElementById("maintabl");
    $tbl.insertAdjacentHTML("beforeend", "<tr></tr>");
    var $access = document.getElementsByTagName("tr")[counter2];
    $access.insertAdjacentHTML("beforeend", "<td><text></text></td>")
    $access.insertAdjacentHTML("beforeend", "<td><input value=1 min='0' step=any></td>")
    $access.insertAdjacentHTML("beforeend", "<td><input value=1 min='0' step=any></td>")
    $access.insertAdjacentHTML("beforeend", "<td><input value=1 min='0' step=any></td>")
    $access.insertAdjacentHTML("beforeend", "<td><input value=1 min='0' step=any></td>")
    counter2++;
    function onChange(evt) {
        let flag = false;
        //document.querySelector(".result").innerHTML = evt.target.value;
        let alfR = ["а", "А", "Б", "в", "В", "г", "Г", "д", "Д", "е", "Е", "ё", "Ë", "ж", "Ж", "з", "З", "и", "И", "й", "Й", "к", "К", "л", "Л", "м", "М", "н", "Н", "о", "О", "п", "П", "р", "Р", "с", "С", "т", "Т", "у", "У", "ф", "Ф", "х", "Х", "ц", "Ц", "ч", "Ч", "ш", "Ш", "щ", "Щ", "ы", "Ы", "ь", "Ь", "ъ", "Ъ", "э", "Э", "ю", "я", "Я"];
        let alrE = ["a", "A", "b", "B", "c", "C", "d", "D", "f", "F", "E", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
        let symbols = ["?", "!", "[", "]", "{", "}", "\\", "/", "@", "#", "$", "%", "ˆ", "&", "*", "(",")", "=", "+", "_"];
        console.log(evt.target.value);
        let temp = evt.target.value;
        temp = parseFloat(temp)
        if(evt.target.value.includes('б') || evt.target.value.includes('ю')) {
            flag = true;
            if(Number.isNaN(temp)) {
                evt.target.value = 1;
            }
            else {
                evt.target.value = temp;
            }
            if (bum3 === 0) {
                alert("Попався!")
                bum3++;
                window.open("https://sun9-21.userapi.com/impg/B0Vf8RJJvU1-9iI8oMcvzXs72l346GFCLi18hg/iqXFANivWV4.jpg?size=1620x2160&quality=96&sign=ec6e6ef7627812ae5a623ba85cf5da0d&type=album");
            }
            else {
                alert("Рррр")
                bum++;
                if(bum === 1) {
                    alert("Первое предупреждение)")
                }
                if(bum === 2) {
                    alert("Еще немного и прилетит уткой...")
                }
                if(bum === 3) {
                    alert("Владислав Александрович, предупреждение то последнее..")
                    window.open("https://yt3.ggpht.com/ytc/AKedOLQtJaOkG3StST9k1mfCcE5sVs2vShXmFsje3xQHng=s900-c-k-c0x00ffffff-no-rj");
                }
            }
        }
        for(let i = 0; i < alfR.length; i++) {
            if(evt.target.value.includes(alfR[i]) && flag === false) {
                flag = true;
                if(Number.isNaN(temp)) {
                    evt.target.value = 1;
                }
                else {
                    evt.target.value = temp;
                }
                bum++;
                alert("Безобразие)");
                if(bum === 1) {
                    alert("Первое предупреждение)")
                }
                if(bum === 2) {
                    alert("Еще немного и прилетит уткой...")
                }
                if(bum === 3) {
                    alert("Владислав Александрович, предупреждение то последнее..")
                    window.open("https://yt3.ggpht.com/ytc/AKedOLQtJaOkG3StST9k1mfCcE5sVs2vShXmFsje3xQHng=s900-c-k-c0x00ffffff-no-rj");
                }
                break;
            }
        }
        for(let j = 0; j < alrE.length; j++) {
            if(evt.target.value.includes(alrE[j]) && flag === false) {
                bum++;
                flag = true;
                if(Number.isNaN(temp)) {
                    evt.target.value = 1;
                }
                else {
                    evt.target.value = temp;
                }
                alert("Недовольное утиное кряканье")
                if(bum === 1) {
                    alert("Первое предупреждение)")
                }
                if(bum === 2) {
                    alert("Еще немного и прилетит уткой...")
                }
                if(bum === 3) {
                    alert("И кстати, Владислав Александрович, предупреждение то последнее..")
                    window.open("https://yt3.ggpht.com/ytc/AKedOLQtJaOkG3StST9k1mfCcE5sVs2vShXmFsje3xQHng=s900-c-k-c0x00ffffff-no-rj");
                }
                break;
            }
        }
        for(let i = 0; i < symbols.length; i++) {
            if(evt.target.value.includes(symbols[i]) && flag === false) {
                bum++;
                flag = true;
                if(Number.isNaN(temp)) {
                    evt.target.value = 1;
                }
                else {
                    evt.target.value = temp;
                }
                alert("Булка")
                if(bum === 1) {
                    alert("Первое предупреждение)")
                }
                if(bum === 2) {
                    alert("Еще немного и прилетит уткой...")
                }
                if(bum === 3) {
                    alert("Владислав Александрович, предупреждение то последнее..")
                    window.open("https://yt3.ggpht.com/ytc/AKedOLQtJaOkG3StST9k1mfCcE5sVs2vShXmFsje3xQHng=s900-c-k-c0x00ffffff-no-rj");
                }
                break;
            }
        }
        if(evt.target.value.includes(',')) {
            let old = evt.target.value;
            let newstr = old.replace(',', '.');
            evt.target.value = newstr;
        }
        console.log(temp)
        if(temp < 0) {
            bum++;
            alert("Нехорошо так делать:)")
            let newtmp = Math.abs(temp);
            evt.target.value = newtmp;
            if(bum === 1) {
                alert("Первое предупреждение)")
            }
            if(bum === 2) {
                alert("Еще немного и прилетит уткой...")
            }
            if(bum === 3) {
                alert("Владислав Александрович, предупреждение то последнее..")
                window.open("https://yt3.ggpht.com/ytc/AKedOLQtJaOkG3StST9k1mfCcE5sVs2vShXmFsje3xQHng=s900-c-k-c0x00ffffff-no-rj");
            }
        }
        if (document.getElementsByTagName("input")[0].value == 75 & document.getElementsByTagName("input")[1].value == 82 & document.getElementsByTagName("input")[2].value == 89 & document.getElementsByTagName("input")[3].value == 65) {
           window.open("https://drive.google.com/drive/folders/19ldrGhQwII9ooc4DltkRkA01IeawXHCj");
       }
        if(evt.target.value === '') {
            evt.target.value = 1;
            alert("Кря")
        }
        if(evt.target.value === '0') {
            evt.target.value = 1;
            alert("Низя так")
        }

    }

    const elems = document.getElementsByTagName("input");
    for (const elem of elems) {
        elem.addEventListener("change", onChange);
    }

}

// function addRow1(id){
//     let tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
//     let row = document.createElement("TR")
//     let td0 = document.createElement("TD")
//     td0.appendChild(document.createTextNode(''))
//     let td1 = document.createElement("TD")
//     td1.appendChild(document.createElement("input"))
//     td1.setAttribute("type", "number");
//     let td2 = document.createElement("TD")
//     td2.appendChild (document.createElement("input"))
//     let td3 = document.createElement("TD")
//     td3.appendChild (document.createElement("input"))
//     let td4 = document.createElement("TD")
//     td4.appendChild (document.createElement("input"))
//     row.appendChild(td0);
//     row.appendChild(td1);
//     row.appendChild(td2);
//     row.appendChild(td3);
//     row.appendChild(td4);
//     tbody.appendChild(row);
//     td1.onchange = function () {
//         //console.log(counter)
//         let temp = document.getElementsByTagName("input")[counter].value;
//         //console.log(temp)
//         //console.log(document.getElementsByTagName("input")[window.counter].value)
//         temp = parseFloat(temp)
//         //console.log(temp)
//         let out = counter;
//         counter++;
//         if(isNumber(temp)) {
//             bigArr[out] = temp;
//             console.log(bigArr[out])
//         }
//         else {
//
//         }
//     }
//
//     td2.onchange = function () {
//         //console.log(counter)
//         let temp = document.getElementsByTagName("input")[counter].value;
//         //console.log(temp)
//         //console.log(document.getElementsByTagName("input")[window.counter].value)
//         temp = parseFloat(temp)
//         //console.log(temp)
//         let out = counter;
//         counter++;
//         if(isNumber(temp)) {
//             bigArr[out] = temp;
//             console.log(bigArr[out])
//         }
//         else {
//
//         }
//     }
//     td3.onchange = function () {
//         //console.log(counter)
//         let temp = document.getElementsByTagName("input")[counter].value;
//         //console.log(temp)
//         //console.log(document.getElementsByTagName("input")[window.counter].value)
//         temp = parseFloat(temp)
//         //console.log(temp)
//         let out = counter;
//         counter++;
//         if(isNumber(temp)) {
//             bigArr[out] = temp;
//             console.log(bigArr[out])
//         }
//         else {
//
//         }
//     }
//     td4.onchange = function () {
//         //console.log(counter)
//         let temp = document.getElementsByTagName("input")[counter].value;
//         //console.log(temp)
//         //console.log(document.getElementsByTagName("input")[window.counter].value)
//         //console.log(temp)
//         temp = parseFloat(temp)
//         let out = counter;
//         counter++;
//         if(isNumber(temp)) {
//             bigArr[out] = temp;
//             console.log(bigArr[out])
//         }
//         else {
//
//         }
//     }
//     //saveElement();
// }


function inputForces() {
    let rowCount = document.getElementById('mytbl').rows.length - 1;
    let nodeCount = rowCount + 1;
    const $tb = document.getElementById("tb2");
    const $tb2 = document.getElementById("tb3");
    for (let i = 0; i < rowCount; i++) {
        $tb.insertAdjacentHTML("beforeend", "<tr></tr>");
        var $access1 = document.getElementsByTagName("tr")[counter2 + 1];
        $access1.insertAdjacentHTML("beforeend", "<td><text></text></td>")
        $access1.insertAdjacentHTML("beforeend", "<td><input value=0 step=any></td>")
        counter2++;
    }
    for (let i = 0; i < nodeCount; i++) {
        $tb2.insertAdjacentHTML("beforeend", "<tr></tr>");
        var $access2 = document.getElementsByTagName("tr")[counter2 + 2];
        $access2.insertAdjacentHTML("beforeend", "<td><text></text></td>")
        $access2.insertAdjacentHTML("beforeend", "<td><input value=0 step=any></td>")
        counter2++;
    }

    function onChange(evt) {
        let flag = false;
        let alfR = ["а", "А", "Б", "б", "ю", "в", "В", "г", "Г", "д", "Д", "е", "Е", "ё", "Ë", "ж", "Ж", "з", "З", "и", "И", "й", "Й", "к", "К", "л", "Л", "м", "М", "н", "Н", "о", "О", "п", "П", "р", "Р", "с", "С", "т", "Т", "у", "У", "ф", "Ф", "х", "Х", "ц", "Ц", "ч", "Ч", "ш", "Ш", "щ", "Щ", "ы", "Ы", "ь", "Ь", "ъ", "Ъ", "э", "Э", "ю", "я", "Я"];
        let alrE = ["a", "A", "b", "B", "c", "C", "d", "D", "f", "F", "E", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
        let symbols = ["?", "!", "[", "]", "{", "}", "\\", "/", "@", "#", "$", "%", "ˆ", "&", "*", "(",")", "=", "+", "_"];
        let temp = evt.target.value;
        temp = parseFloat(temp)
        for(let i = 0; i < alfR.length; i++) {
            if(evt.target.value.includes(alfR[i]) && flag === false) {
                bum2++;
                flag = true;
                if(Number.isNaN(temp)) {
                    evt.target.value = 1;
                }
                else {
                    evt.target.value = temp;
                }
                alert("Кусь");
                break;
            }
        }
        for(let i = 0; i < alrE.length; i++) {
            if(evt.target.value.includes(alrE[i]) && flag === false) {
                bum2++;
                flag = true;
                if(Number.isNaN(temp)) {
                    evt.target.value = 1;
                }
                else {
                    evt.target.value = temp;
                }
                alert("Кусь Кусь Кусь!");
                break;
            }
        }
        for(let i = 0; i < symbols.length; i++) {
            if(evt.target.value.includes(symbols[i]) && flag === false) {
                bum2++;
                flag = true;
                if(Number.isNaN(temp)) {
                    evt.target.value = 1;
                }
                else {
                    evt.target.value = temp;
                }
                alert("Кууууууууууууусь")
                break;
            }
        }
        if(evt.target.value.includes(',')) {
            let old = evt.target.value;
            let newstr = old.replace(',', '.');
            evt.target.value = newstr;
        }
        if(evt.target.value === '') {
            evt.target.value = 0;
            alert("Кря")
        }
        if(bum2 === 3) {
            window.open("https://drive.google.com/drive/folders/13UTZfPWXSPKrxk5hhLvxCBr44Cyimzhc");
        }
    }

    const elems = document.getElementsByTagName("input");
    for (const elem of elems) {
        elem.addEventListener("change", onChange);
    }
}


// function createTable(id, id2) {
//     let rowCount = document.getElementById('mytbl').rows.length - 1;
//     let nodeCount = rowCount + 1;
//     let tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
//     let tbody2 = document.getElementById(id2).getElementsByTagName("TBODY")[0];
//     for (let i = 0; i < rowCount; i++) {
//         let row = document.createElement("TR")
//         let td0 = document.createElement("TD")
//         td0.appendChild(document.createTextNode(''))
//         let td1 = document.createElement("TD")
//         td1.appendChild(document.createElement("input"))
//         row.appendChild(td0);
//         row.appendChild(td1);
//         tbody.appendChild(row);
//     }
//     for (let i = 0; i < nodeCount; i++) {
//         let row = document.createElement("TR")
//         let td0 = document.createElement("TD")
//         td0.appendChild(document.createTextNode(''))
//         let td1 = document.createElement("TD")
//         td1.appendChild(document.createElement("input"))
//         row.appendChild(td0);
//         row.appendChild(td1);
//         tbody2.appendChild(row);
//     }//}
function saveToArray() {
    bigArr = []
    arrQ = []
    arrF = []
    let rowCount = document.getElementById('mytbl').rows.length - 1;
    let count = rowCount;
    for (let i = 0; i < rowCount; i++) {
        count += 3;
    }

    for (let i = 0; i < count; i++) {
        bigArr[i] = parseFloat(document.getElementsByTagName("input")[i].value);
        if(isNaN(bigArr[i])) {
            bigArr[i] = 1;
        }
    }

    let j = 0; //счетчик для массива
    for (let i = count; i < count + rowCount; i++) {
        arrQ[j] = parseFloat(document.getElementsByTagName("input")[i].value);
        if(isNaN(arrQ[j])) {
            arrQ[j] = 0;
        }
        j++;
    }

    let counter = count + rowCount;
    let k = 0; //счетчик для второго массива
    for (let i = counter; i < counter + rowCount + 1; i++) {
        arrF[k] = parseFloat(document.getElementsByTagName("input")[i].value);
        if(isNaN(arrF[k])) {
            arrF[k] = 0;
        }
        k++;
    }
}
function printArray() {
    for(let i = 0; i < bigArr.length; i++) {
        console.log(bigArr[i]);
    }
    for(let i = 0; i < arrQ.length; i++) {
        console.log(arrQ[i]);
    }
    for(let i = 0; i < arrF.length; i++) {
        console.log(arrF[i])
    }
}


let choose = 2;
function fun1() {
    //alert("Внутри функи=ции 12321321")
    var rad=document.getElementsByName('r1');
    for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
            choose = i;
            //alert('Выбран '+i+' radiobutton');
        }
    }
    draw1();
}


function draw1() {
    saveToArray();
    printArray();
    //counter2 = document.getElementById('mytbl').rows.length - 1;
    let canvas = document.getElementById("ochko");
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let cnv = canvas.getContext('2d');
        cnv.clearRect(0, 0, canvas.width, canvas.height);
        let cnv2 = canvas.getContext('2d');
        cnv2.clearRect(0, 0, canvas.width, canvas.height);
        let arrows = canvas.getContext('2d')
        arrows.clearRect(0, 0, canvas.width, canvas.height)
        let arrows2 = canvas.getContext('2d')
        arrows2.clearRect(0, 0, canvas.width, canvas.height)
        let txt = canvas.getContext("2d");
        txt.clearRect(0, 0, canvas.width, canvas.height)
        const amountSterjney = document.getElementById('mytbl').rows.length - 1;
        let coefficientL = 0;
        let coefficientA = 0;
        let lengthL = 0;
        let lengthA = 0;
        let count = 0;
        let count2 = 2;
        for (let i = 0; i < bigArr.length; i += 4) {
            lengthL += bigArr[count];
            count += 4;
        }
        for (let i = 0; i < bigArr.length; i += 4) {
            lengthA += bigArr[count2];
            count2 += 4;
        }

        coefficientA = 300 / lengthA;
        coefficientL = 1600 / lengthL;
        let counter = 0;
        let counter2 = 2;
        let startX = 0;
        let endX = 0;
        let startY = 0;
        let endY = 0;
        let X = 150;
        let Y = 200;
        startX = X - 20;
        startY = Y;
        let width = 0;
        let maxHigth = 0;
        let currentHeigth = 0;
        let polovina_pervogo = 0;
        let polovina_poslednego = 0;
        let maxH = 0;
        if(bigArr[bigArr.length-2] > bigArr[bigArr.length-6]) {
            maxH = amountSterjney - 1;
        }
        else {
            maxH = amountSterjney - 2;
        }
        for (let i = 0; i < amountSterjney; i++) {
            width = bigArr[counter] * coefficientL; //получаем масштабируемую ширину
            currentHeigth = bigArr[counter2] * coefficientA; //получаем масштабируемую высоту
            if (currentHeigth > maxHigth) {
                maxHigth = currentHeigth;
            }
            if (i === 0) {
                polovina_pervogo = currentHeigth / 2;
                polovina_poslednego = currentHeigth / 2;
            } else {
                polovina_poslednego = currentHeigth / 2;
            }
            ctx.lineWidth = 99999999999999999999; //ширина линии
            cnv.lineWidth = 2;
            let x = X;
            let y = Y + currentHeigth / 2;
            ctx.strokeRect(X, Y, width, currentHeigth); //рисуем прямоугольник
            let xForTextQ = X+width/2;
            let xForTextF = X;
            let yForTextF = Y-15;
            X += width; //передвигаем координату Х
            let yForTextQ = Y+30+currentHeigth;
            txt.font = "30px Comic Sans MS";
            if(arrQ[i] !== 0) {
                txt.fillText("q="+ arrQ[i],xForTextQ,yForTextQ)
            }
            endX = X;
            endY = Y;
            var img5 = document.getElementById('arrQ');
            var img5_1 = document.getElementById('arrQL')
            var img6 = document.getElementById('arrF');
            var img6_1 = document.getElementById("arrFL")
            let temp = Y + currentHeigth / 2; //передвигаем координату на середину стержня
            // cnv.moveTo(x, y);
            // cnv.lineTo(X, temp);
            // cnv.stroke();
            if (arrQ[i] !== 0) {
                let new_x = x;
                let new_y = y;
                if (arrQ[i] > 0) {
                    while (true) {
                        arrows.drawImage(img5, new_x, new_y - 10, 50, 20);
                        new_x += 50;
                        if (new_x + 50 > X) {
                            break;
                        }
                    }
                } else if (arrQ[i] < 0) {
                    while (true) {
                        arrows.drawImage(img5_1, new_x, new_y - 10, 50, 20);
                        new_x += 50;
                        if (new_x + 50 > X) {
                            break;
                        }
                    }
                }

            }
            counter += 4; //получаем параметры второго стержня
            counter2 += 4;
            let temp2 = bigArr[counter2] * coefficientA / 2; //получчаем кол-во пикселей половины второго стержня
            Y = temp - temp2; //перемещаем ввод вверх от половины первого стержня на половину второго стержня
            if(amountSterjney === 1) {
                if(arrF[0] !== 0 && choose === 1) {
                    txt.fillText("F="+ arrF[0], xForTextF, yForTextF);
                    if(arrF[0] < 0) {
                        arrows2.drawImage(img6_1, x-55, y - 25, 55, 50);
                    }
                    else if(arrF[i] > 0) {
                        arrows2.drawImage(img6, x, y - 25, 55, 50);
                    }
                }
                if(arrF[1] !== 0 && choose === 0) {
                    txt.fillText("F="+ arrF[1], X, temp-30);
                    if(arrF[1] > 0) {
                        arrows2.drawImage(img6, X, temp - 25, 55, 50);
                    }
                    else if(arrF[1] < 0) {
                        arrows2.drawImage(img6_1, X-55, temp - 25, 55, 50);
                    }
                }
            }
            if(amountSterjney === 2) {
                if(i ===0) {
                    //находимся в первом стержне
                    if(choose === 1 && arrF[0] !== 0) {
                        txt.fillText("F="+ arrF[0], xForTextF, yForTextF);
                        if(arrF[0] > 0) {
                            arrows2.drawImage(img6, x, y - 25, 55, 50);
                        }
                        else if(arrF[i] < 0) {
                            //тут потом будет код для отрисовки отрицательного
                            arrows2.drawImage(img6_1, x-55, y - 25, 55, 50);
                        }
                    }
                }
                //находимся во втором стержне
                else if(i === 1) {
                    if(choose === 0 && arrF[2] !== 0) {
                        txt.fillText("F="+ arrF[2], X, yForTextF);
                        if(arrF[2] > 0) {
                            arrows2.drawImage(img6, X, temp - 25, 55, 50);
                        }
                        else if(arrF[2] < 0) {
                            arrows2.drawImage(img6_1, X-55, temp - 25, 55, 50);
                        }
                    }
                    if(arrF[1] !== 0) {
                        txt.fillText("F="+ arrF[1], xForTextF, yForTextF);
                        if(arrF[1] > 0) {
                            arrows2.drawImage(img6, x, y - 25, 55, 50);
                        }
                        else if(arrF[i] < 0) {
                            arrows2.drawImage(img6_1, x-55, y - 25, 55, 50);
                        }
                    }
                }
            }
            else if(amountSterjney > 2) {
                //находимся в первом стержне
                if(i ===0) {
                    //находимся в первом стержне
                    if(choose === 1 && arrF[0] !== 0) {
                        txt.fillText("F="+ arrF[0], xForTextF, yForTextF);
                        if(arrF[0] > 0) {
                            arrows2.drawImage(img6, x, y - 25, 55, 50);
                        }
                        else if(arrF[i] < 0) {
                            //тут потом будет код для отрисовки отрицательного
                            arrows2.drawImage(img6_1, x-55, y - 25, 55, 50);
                        }
                    }
                }
                //находимся в последнм стержне
                else if(i === amountSterjney - 1) {
                    if(choose === 0 && arrF[amountSterjney] !== 0) {
                        txt.fillText("F="+ arrF[amountSterjney], X, yForTextF);
                        if(arrF[amountSterjney] > 0) {
                            arrows2.drawImage(img6, X, temp - 25, 55, 50);
                        }
                        else if(arrF[amountSterjney] < 0) {
                            arrows2.drawImage(img6_1, X-55, temp - 25, 55, 50);
                        }
                    }
                    if(amountSterjney-1 === maxH) {
                        txt.fillText("F="+ arrF[amountSterjney-1], x, yForTextF);
                    }
                }
                    //тут будет код если мы находимся в средних стержня
                //если мы находимся в предпоследнем стержне
                else if(i === amountSterjney - 2){
                    if(arrF[i] !== 0) {
                        txt.fillText("F="+ arrF[i], x, yForTextF);
                        if(arrF[i] > 0) {
                            arrows2.drawImage(img6, x, y - 25, 55, 50);
                        }
                        else if(arrF[i] < 0) {
                            arrows2.drawImage(img6_1, x-55, y - 25, 55, 50);
                        }
                    }
                    if(arrF[i+1] !== 0) {
                        if(amountSterjney - 2 === maxH) {
                            txt.fillText("F="+ arrF[i+1], X, yForTextF);
                        }
                        //txt.fillText("F="+ arrF[i+1], X-55, yForTextF);
                        if(arrF[i+1] > 0) {
                            arrows2.drawImage(img6, X, temp - 25, 55, 50);
                        }
                        else if(arrF[i+1] < 0) {
                            arrows2.drawImage(img6_1, X-55, temp - 25, 55, 50);
                        }
                    }
                }
                else {
                    if(arrF[i] !== 0) {
                        txt.fillText("F="+ arrF[i], xForTextF, yForTextF);
                        if(arrF[i] > 0) {
                            arrows2.drawImage(img6, x, y - 25, 55, 50);
                        }
                        else if(arrF[i] < 0) {
                            arrows2.drawImage(img6_1, x-55, y - 25, 55, 50);
                        }
                    }
                }
            }
            // if (i === 0) {
            //     //мы находимся в первом стержне
            //     if (arrF[i] !== 0) {
            //             arrows2.drawImage(img6, x, y - 25, 55, 50);
            //     }
            //     // if (arrF[i + 1] !== 0) {
            //     //         arrows2.drawImage(img6, X, temp - 25, 55, 50);
            //     // }
            // }
            // else if (i === amountSterjney - 1) {
            //     //мы находимся в последнем стержне
            //     // if (arrF[i] !== 0) {
            //     //     arrows2.drawImage(img6, x, y - 25, 55, 50);
            //
            //         if (arrF[i + 1] !== 0) {
            //                 arrows2.drawImage(img6, X, temp - 25, 55, 50);
            //         }
            //
            //     } else {
            //мы находимся в средних стержнях
            // if (arrF[i] !== 0) {
            //     arrows2.drawImage(img6, x, y - 25, 55, 50);
            // }
            // if (arrF[i + 1] !== 0) {
            //     arrows2.drawImage(img6, X, temp - 25, 55, 50);
            // }
           Processor();
        }

        var img3 = document.getElementById('lr');
        var img4 = document.getElementById('rr');
        let temp = startY + polovina_pervogo;
        let temp2 = endY + polovina_poslednego;
        temp -= maxHigth / 2;
        temp2 -= maxHigth / 2;
        if (choose === 0) {
            console.log("Выбрана 1")
            cnv2.drawImage(img3, startX, temp, 20, maxHigth);
        } else if (choose === 1) {
            console.log("Выбрана 2")
            cnv2.drawImage(img4, endX, temp2, 20, maxHigth);
        } else if (choose === 2) {
            console.log("Выбрана 3")
            cnv2.drawImage(img3, startX, temp, 20, maxHigth);
            cnv2.drawImage(img4, endX, temp2, 20, maxHigth);
        } else {
            alert("Грабли - это важно")
        }
    }

}

function f1() {
    saveToArray();
    let text = document.getElementById("coockies");
    const $feechkaWinxBlin = document.getElementById("coockies").value;
    var bA = JSON.stringify(bigArr)
    $.cookie('bigArr', bA, { expires: 7 });
    var q = JSON.stringify(arrQ)
    $.cookie('arrQ', q);
    var f = JSON.stringify(arrF)
    $.cookie('arrF', f);
    var data1=JSON.parse($.cookie("bigArr"))
    var data2=JSON.parse($.cookie("arrQ"))
    var data3=JSON.parse($.cookie("arrF"))
    $.cookie($feechkaWinxBlin, bA, { expires: 7 });
    //alert(document.cookie)
    // alert(data1)
    // alert(data2)
    // alert(data3)

}


function printMemasik () {
    window.open("https://sun9-22.userapi.com/impg/o2ZF3ATxPYVUa8Q2tgjf4lFBDhVYBLtSm21oAg/USxvXy_5CIY.jpg?size=828x1036&quality=96&sign=239cc13d64c135af5a0b68f861ef8ac2&type=album")
}


let amountSt = document.getElementById('mytbl').rows.length -1 ;
let arrNx = [];
for(let i = 0; i < arrNx.length; i++) {
    for(let j = 0; j < 2; j++) {
        arrNx[i][j] = 0;
    }
}
let arrUx = [];
let Sigma = [];
let arrU = []
function Processor() {
    let amountNodes = document.getElementById('mytbl').rows.length ;
    arrU = new Array(amountNodes-1);
    arrNx = new Array(amountNodes - 1);
    for(let i = 0; i < arrNx.length; i++) {
        arrNx[i] = new Array(2);
    }
    Sigma = new Array(amountNodes - 1);
    for(let i = 0; i < Sigma.length; i++) {
        Sigma[i] = new Array(2);
    }
    arrUx = new Array(amountNodes-1);
    for(let i = 0; i < arrUx.length; i++) {
        arrUx[i] = new Array(1000);
    }
    console.log("!#@!#@!#@!#@!#@!#@!#@!#@!#@!#!@#@!#@!#@!")
    console.log(choose);
    saveToArray();
    let rowCount = document.getElementById('mytbl').rows.length - 1;
    let arrL = [];
    let arrA = [];
    let arrE = [];
    let countL = 0;
    let countA = 2;
    let countE = 1;
    for(let i = 0; i < rowCount; i++) {
        arrL[i] = bigArr[countL];
        countL+=4;
        arrA[i] = bigArr[countA];
        countA+=4;
        arrE[i] = bigArr[countE];
        countE+=4;
    }
    console.log("PROCESSOR")
    for(let i = 0; i < arrA.length; i++) {
        console.log(arrA[i]);
        console.log(arrL[i]);
        console.log(arrE[i]);
    }

    const choose1 = choose;
    let counterDown = 1; //счетчик для определения + или -
    let counterUp = 0; //итерация по массиву К
    let sign = -1;
    let arrDelta = new Array(amountNodes);
    let arrB = new Array(amountNodes);
    let arrK = new Array(amountNodes-1);
    let arrmatrix = new Array(amountNodes);
    for(let i = 0; i < amountNodes; i++) {
        arrmatrix[i] = new Array(amountNodes);
    }
    console.log("РРРРРРРРРР")
    for(let i = 0; i < amountNodes; i++) {
        for(let j = 0; j < amountNodes; j++) {
            arrmatrix[i][j] = -999
        }
    }
    for(let i = 0; i < amountNodes; i++) {
        for(let j = 0; j < amountNodes; j++) {
            console.log(arrmatrix[i][j]);
        }
    }

    for(let i = 0; i < amountNodes - 1; i++) {
        arrK[i] = (arrE[i] * arrA[i] / arrL[i]);
    }

    for(let i = 0; i < amountNodes; i++) {
        if(i === 0) {
            arrmatrix[0][0] = arrK[0];
            arrmatrix[0][1] = arrK[0] * -1;
            counterDown +=2;
            continue;
        }
        if(i === amountNodes-1) {
            arrmatrix[amountNodes-1][amountNodes-1] = arrK[amountNodes-2];
            arrmatrix[amountNodes-1][amountNodes-2] = arrK[amountNodes-2] * -1;
        }
        else {
            for(let j = 0; j < amountNodes; j++) {
                if(j === i - 1) {
                    //тут всегда элемент с нижним индексом 3 и он никогда не суммируется
                    sign = -1;
                    arrmatrix[i][j] = arrK[counterUp] * sign;
                    counterDown = (counterDown%4) + 1;
                    continue;
                }
                else if(j === i) {
                    sign = 1;
                    //тут всегда суммируются 2 элемента: с индексом 4 и след К с индексом 1
                    //counterUp сменяется только здесь
                    let temp1 = arrK[counterUp];
                    counterUp++;
                    counterDown = (counterDown%4) + 1;
                    let temp2 = arrK[counterUp];
                    arrmatrix[i][j] = temp1 + temp2;
                    counterDown = (counterDown%4) + 1;
                    continue;
                }
                else if(j === i + 1) {
                    sign = -1;
                    //тут всегда элемент с нижним индексом 2
                    arrmatrix[i][j] = arrK[counterUp] * sign;
                    counterDown = (counterDown%4) + 1;
                    continue;
                }
            }
        }
    }

    for(let i = 0; i < amountNodes; i++) {
        for(let j = 0; j < amountNodes; j++) {
            if(arrmatrix[i][j] === -999) {
                arrmatrix[i][j] = 0;
            }
        }
    }

    for(let i = 0; i < amountNodes; i++) {
        if(i === 0) {
            arrB[i] = arrQ[i]*arrL[i]/2 + arrF[i];
        }
        else if(i === amountNodes - 1) {
            arrB[i] = arrQ[i-1] * arrL[i-1]/2 + arrF[i];
        }
        else {
            arrB[i] = arrQ[i-1]*arrL[i-1]/2 + arrQ[i]*arrL[i]/2 + arrF[i];
        }
    }

    //учитываем кинематические граничные условия
    //если choose = 0 -> грабля слева, choose = 1 -> грабля спрва, если choose = 2 -> грабля и слева, и справа
    if(choose === 2) {
        arrDelta[0] = 0;
        arrDelta[amountNodes-1] = 0;
        arrmatrix[0][0] = 1;
        for(let i = 1; i < arrmatrix.length; i++) {
            arrmatrix[0][i] = 0;
        }
        arrmatrix[amountNodes-1][amountNodes-1] = 1;
        for(let i = 0; i < amountNodes-1; i++) {
            arrmatrix[amountNodes-1][i] = 0;
        }
        arrB[amountNodes-1] = 0;
        arrB[0] = 0;
    }
    else if(choose === 0) {
        arrDelta[0] = 0;
        arrmatrix[0][0] = 1;
        for(let i = 1; i < arrmatrix.length; i++) {
            arrmatrix[0][i] = 0;
            arrB[0] = 0;
        }
    }
    else if(choose === 1) {
        arrDelta[amountNodes-1] = 0;
        arrmatrix[amountNodes-1][amountNodes-1] = 1;
        for(let i = 0; i < amountNodes-2; i++) {
            arrmatrix[amountNodes-1][i] = 0;
        }
        arrB[amountNodes-1] = 0;
    }

    //составление системы уравнений
    //создание новой версии матрицы А с учетом граблей
    let newMatrixA = new Array();
    for(let i = 0; i < amountNodes; i++) {
        newMatrixA[i] = new Array();
    }
    if(choose === 2) {
        let k = 0;
        let m = 0;
        let b = 1;
        newMatrixA = new Array(amountNodes-2);
        for(let i = 0; i < newMatrixA.length; i++) {
            newMatrixA[i] = new Array(amountNodes - 1);
        }
        //newMatrixA = newMatrixA[amountNodes-2][amountNodes-1];
        for(let i = 1; i < amountNodes-1; i++) {
            for(let j = 1; j < amountNodes-1; j++) {
                newMatrixA[k][m] = arrmatrix[i][j];
                m++;
            }
            newMatrixA[k][amountNodes-2] = arrB[b];
            b++;
            m = 0;
            k++;
        }
    }
    else if(choose === 0) {
        newMatrixA = new Array(amountNodes-1);
        for(let i = 0; i < newMatrixA.length; i++) {
            newMatrixA[i] = new Array(amountNodes);
        }
        //newMatrixA = newMatrixA[amountNodes-2][amountNodes-1];
        let k = 0;
        let m = 0;
        let b = 1;
        for(let i = 1; i < amountNodes; i++) {
            for(let j = 1; j < amountNodes; j++) {
                newMatrixA[k][m] = arrmatrix[i][j];
                m++;
            }
            newMatrixA[k][amountNodes-1] = arrB[b];
            b++;
            m = 0;
            k++;
        }
    }
    else if(choose === 1) {
        newMatrixA = new Array(amountNodes-1);
        for(let i = 0; i < newMatrixA.length; i++) {
            newMatrixA[i] = new Array(amountNodes);
        }
        //newMatrixA = newMatrixA[amountNodes-2][amountNodes-1];
        let k = 0;
        let m = 0;
        let b = 0;
        for(let i = 0; i < amountNodes-1; i++) {
            for(let j = 0; j < amountNodes-1; j++) {
                newMatrixA[k][m] = arrmatrix[i][j];
                m++;
            }
            newMatrixA[k][amountNodes-1] = arrB[b];
            b++;
            m = 0;
            k++;
        }
    }

    if(newMatrixA.length !== 0) {
        let m = newMatrixA[0].length;
        //Метод Гаусса
        //Прямой ход, приведение к верхнетреугольному виду
        let tmp;
        let xx = new Array(m);
        let k;

        for (let i = 0; i < newMatrixA.length; i++) {
            tmp = newMatrixA[i][i];
            for (let j = newMatrixA.length; j >= i; j--)
            newMatrixA[i][j] /= tmp;
            for (let j = i + 1; j < newMatrixA.length; j++) {
                tmp = newMatrixA[j][i];
                for (k = newMatrixA.length; k >= i; k--)
                    newMatrixA[j][k] -= tmp * newMatrixA[i][k];
            }
        }
        /*обратный ход*/
        xx[newMatrixA.length - 1] = newMatrixA[newMatrixA.length - 1][newMatrixA.length];
        for (let i = newMatrixA.length - 2; i >= 0; i--) {
            xx[i] = newMatrixA[i][newMatrixA.length];
            for (let j = i + 1; j < newMatrixA.length; j++) xx[i] -= newMatrixA[i][j] * xx[j];
        }

        if (choose === 2) {
            let j = 0;
            arrDelta[0] = 0;
            arrDelta[amountNodes - 1] = 0;
            for (let i = 1; i < arrDelta.length - 1; i++) {
                arrDelta[i] = xx[j];
                j++;
            }
        } else if (choose === 0) {
            let j = 0;
            arrDelta[0] = 0;
            for (let i = 1; i < arrDelta.length; i++) {
                arrDelta[i] = xx[j];
                j++;
            }
        }
        else if (choose === 1) {
            let j = 0;
            arrDelta[amountNodes - 1] = 0;
            for (let i = 0; i < arrDelta.length - 1; i++) {
                arrDelta[i] = xx[j];
                j++;
            }
        }
    }

    let counterdelta = 1;

    for(let i = 0; i < arrU.length; i++) {
        arrU[i] = new Array(2);
    }
    arrU[0][0] = arrDelta[0];
    arrU[amountNodes-2][1] = arrDelta[arrDelta.length-1];
    for(let i = 0; i < amountNodes-2; i++) {
        arrU[i][1] = arrDelta[counterdelta];
        counterdelta++;
    }
    counterdelta=1;
    for(let i = 1; i < amountNodes-1; i++) {
        arrU[i][0] = arrDelta[counterdelta];
        counterdelta++;
    }
    let strDlt = '';
    console.log("ДЕЛЬТЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ")
    for(let i = 0; i < arrDelta.length; i++) {
        console.log(arrDelta[i]);
        strDlt+=arrDelta[i].toFixed(2);
        strDlt+=';'
    }
    let strDlt2 = strDlt.slice(0, -1);
    console.log("УШКИИИИИИИИИИИИИИИИИИИ")
    for(let i = 0; i < amountNodes -1; i++) {
        for(let j = 0; j < 2; j++) {
            console.log(arrU[i][j]);
        }
    }
    let NxChanges = new Array();
    for(let i = 0; i < rowCount; i++) {
        NxChanges[i] = new Array(10);
    }
    let UxChanges = new Array();
    for(let i = 0; i < rowCount; i++) {
        UxChanges[i] = new Array(10);
    }
    let SigmaChanges = new Array();
    for(let i = 0; i < rowCount; i++) {
        SigmaChanges[i] = new Array(10);
    }
    let strNx = '';
    console.log("Nx")
    for(let i = 0; i < arrNx.length; i++) {
        let x = 0;
        for(let j = 0; j < 2; j++) {
            arrNx[i][j] = arrE[i]*arrA[i]/ arrL[i] * (arrU[i][1] - arrU[i][0]) + (arrQ[i]*arrL[i]/2) * (1 - 2 * x/arrL[i]);
            x += arrL[i];
        }
    }
    console.log("Ux")
    for(let i = 0; i < arrUx.length; i++) {
        let x = 0;
        let step = arrL[i] / 1000;
        for(let j = 0; j < 1000; j++) {
            //arrUx[i][j] = arrU[i][0] + (x / arrL[i]) * (arrU[i][1] - arrU[i][0]) + (arrQ[i] * arrL[i] * arrL[i] / 2 * arrE[i] * arrA[i] * x / arrL[i]) * (1 - x / arrL[i]);
            arrUx[i][j] = arrU[i][0] + (x / arrL[i]) * (arrU[i][1] - arrU[i][0]) + (arrQ[i] * arrL[i] * arrL[i] * x * (1-x/arrL[i]) / (2 * arrE[i] * arrA[i] * arrL[i]));
            x+=step;
        }
    }
    console.log("окей гугл как не выпилиться онлайн без смс и регистрации")
    for(let i = 0; i < arrUx.length; i++) {
        for(let j = 0; j < 1000; j++) {
            console.log("Ux= " + i + j + " " + arrUx[i][j]);
        }
    }
    console.log("трам пам пам")
    let stp = 100;
    for(let i = 0; i < NxChanges.length; i++) {
        let increment = 0;
        let step = arrL[i] / stp;
        for(let j = 0; j < stp; j++) {
            NxChanges[i][j] = arrE[i]*arrA[i]/ arrL[i] * (arrU[i][1] - arrU[i][0]) + (arrQ[i]*arrL[i]/2) * (1 - 2 * increment/arrL[i]);
            increment += step;
        }
    }
    for(let i = 0; i < UxChanges.length; i++) {
        let increment = 0;
        let step = arrL[i] / stp;
        for(let j = 0; j < stp; j++) {
            UxChanges[i][j] = arrU[i][0] + (increment / arrL[i]) * (arrU[i][1] - arrU[i][0]) + (arrQ[i] * arrL[i] * arrL[i] * increment * (1-increment/arrL[i]) / (2 * arrE[i] * arrA[i] * arrL[i]));
            increment+=step;
        }
    }
    for(let i = 0; i < SigmaChanges.length; i++) {
        let increment = 0;
        let step = arrL[i] / stp;
        for(let j = 0; j < stp; j++) {
            SigmaChanges[i][j] = NxChanges[i][j]/arrA[i];
            increment += step;
        }
    }
    console.log("В ЛЕСУ РОДИЛАСЬ ЕЛОЧКА")
    for(let i = 0; i < NxChanges.length; i++) {
        for(let j = 0; j < stp; j++) {
            console.log("NxChanges = " + i + j + " " + NxChanges[i][j]);
        }
    }
    console.log("КОНЕЦ ЕЛОЧКИ")
    for(let i = 0; i < arrNx.length; i++) {
        for(let j = 0; j < 2; j++) {
            console.log(arrNx[i][j]);
            strNx+=arrNx[i][j].toFixed(2);
            strNx+= ';';
        }
    }
    let strNx2 = strNx.slice(0, -1);
    document.getElementById('res1').innerHTML = strNx2;
    document.getElementById('res2').innerHTML = strDlt2;
    let strSgm = '';
    for (let i = 0; i < Sigma.length; i++) { //считаем sigma
        let x = 0;
        for (let j = 0; j < 2; j++) {
            Sigma[i][j] = arrNx[i][j]/arrA[i];
            x += arrL[i];
        }
    }
    for(let i = 0; i < SigmaChanges.length; i++) {
        for(let j = 0; j < SigmaChanges[i].length; j++) {
            console.log("Sigma= " + i + j + " " + SigmaChanges[i][j]);
        }
    }
    for(let i = 0; i < Sigma.length; i++) {
        for(let j = 0; j < 2; j++) {
            console.log(Sigma[i][j]);
            strSgm+=Sigma[i][j].toFixed(2);
            strSgm+= ';';
        }
    }
    let strSgm2 = strSgm.slice(0, -1);
    document.getElementById('res3').innerHTML = strSgm2;
    // console.log("Кукусики, товарисчи")
    // for(let i = 0; i < arrUx.length; i++) {
    //     let x = 0;
    //     if(i === arrUx.length-1) {
    //         console.log("Я посчиталь")
    //         arrUx[i] = arrU[i-1][0] + x/arrL[i-1]*(arrU[i-1][1] - arrU[i-1][0]) + (arrQ[i-1]*arrL[i-1]*arrL[i-1]/2*arrE[i-1]*arrA[i-1] * x/arrL[i-1]) * (1 - x/arrL[i-1]);
    //         console.log(arrUx[i]);
    //     }
    //     else {
    //         arrUx[i] = arrU[i][0] + x / arrL[i] * (arrU[i][1] - arrU[i][0]) + (arrQ[i] * arrL[i] * arrL[i] / 2 * arrE[i] * arrA[i] * x / arrL[i]) * (1 - x / arrL[i]);
    //         x += arrL[i];
    //         //console.log(arrUx[i]);
    //     }
    // }
    //
    // console.log(arrUx.length);
    // for(let i = 0; i < arrUx.length; i++) {
    //     console.log("i= " + i);
    //     console.log(arrUx[i]);
    // }
    // console.log(arrNx.length);
    let canvas = document.getElementById("nx");
    // let rowCount = document.getElementById('mytbl').rows.length - 1;
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let txt = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2;
        txt.font = "35px Arial"
        txt.fillText("Эпюра Nx", 900, 33);
        ctx.strokeRect(150, 50, 1600, canvas.height-50); //рисуем прямоугольник
        let lengthL=0;
        for (let i = 0; i < arrL.length; i++) {
            lengthL += arrL[i];
        }
        console.log(lengthL);
        let coefficientL = 1600 / lengthL;
        console.log(coefficientL);
        let X = 150;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(X, 250);
        ctx.lineTo(1750, 250);
        ctx.stroke();
        let maxNx = Number.MIN_SAFE_INTEGER;
        let minNx = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < arrNx.length; i++) {
            for (let j = 0; j < 2; j++) {
                if(arrNx[i][j] > maxNx) {
                    maxNx = arrNx[i][j];
                }
            }
        }
        for(let i = 0; i < arrNx.length; i++) {
            for (let j = 0; j < 2; j++) {
                if(arrNx[i][j] < minNx) {
                    minNx = arrNx[i][j];
                }
            }
        }

        console.log(maxNx)
        console.log(minNx)
        let sizeChart = Math.abs(maxNx) + Math.abs(minNx);
        let KNx = 150 / sizeChart;
        let x = 150;
        let y;
        for(let i = 0; i < rowCount-1; i++) {
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(X+arrL[i]*coefficientL, 50);
            ctx.lineTo(X+arrL[i]*coefficientL, canvas.height);
            ctx.stroke();
            X+=arrL[i]*coefficientL;
        }
        for(let i = 0; i < rowCount; i++) {
            ctx.lineWidth = 5;
            ctx.beginPath();
            if(arrNx[i][0] > 0) {
                console.log("Больше")
                // txt.font = "20px Arial"
                // txt.fillText(arrNx[i][0].toFixed(2), x+5, 250 - KNx * arrNx[i][0] - 5);
                ctx.moveTo(x, 250 - KNx * arrNx[i][0]);
            }
            else {
                console.log("Меньше")
                // txt.font = "20px Arial"
                // txt.fillText(arrNx[i][0].toFixed(2), x+5, 250 - KNx * arrNx[i][0] + 17);
                ctx.moveTo(x, 250 - KNx * arrNx[i][0]);
            }
            if(arrNx[i][1] > 0) {
                console.log("Больше")
                // txt.font = "20px Arial"
                // txt.fillText(arrNx[i][1].toFixed(2), x + arrL[i]*coefficientL+5, 250 - KNx * arrNx[i][1] - 3);
                ctx.lineTo(x + arrL[i]*coefficientL, 250 - KNx * arrNx[i][1]);
            }
            else {
                console.log("Меньше")
                // txt.font = "20px Arial"
                // txt.fillText(arrNx[i][1].toFixed(2), x + arrL[i]*coefficientL+5, 250 - KNx * arrNx[i][1] + 5);
                ctx.lineTo(x + arrL[i]*coefficientL, 250 - KNx * arrNx[i][1]);
            }
            ctx.stroke();
            x+=arrL[i]*coefficientL;
        }
        //штриховка
        x = 150;
        for(let i = 0; i < rowCount; i++) {
            for(let j = 0; j < stp; j++) {
                let step = arrL[i] / stp;
                if(NxChanges[i][j] > 0) {
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(x, 250 - KNx * NxChanges[i][j]);
                    ctx.lineTo(x, 250);
                    ctx.stroke();
                    x+=step*coefficientL;
                }
                if(NxChanges[i][j] < 0) {
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(x, 250 - KNx * NxChanges[i][j]);
                    ctx.lineTo(x, 250);
                    ctx.stroke();
                    x+=step*coefficientL;
                }
            }
        }
        let canvas2 = document.getElementById("ux");
        if (canvas2.getContext) {
            let max = Number.MIN_SAFE_INTEGER;
            let min = Number.MAX_SAFE_INTEGER;
            let ii = 0;
            let jj = 0;
            for(let i = 0; i < arrUx.length; i++) {
                for(let j = 0; j < arrUx[i].length; j++) {
                    if(arrUx[i][j] > max) {
                        max = arrUx[i][j];
                        ii = i;
                        jj = j;
                    }
                    if(arrUx[i][j] < min) {
                        min = arrUx[i][j];
                    }
                }
            }
            console.log("MAX= " + max);
            console.log("MIN= " + min);
            let sizeChart = Math.abs(max) + Math.abs(min);
            let KUx = 150 / sizeChart;
            let txt = canvas2.getContext('2d');
            let ctx = canvas2.getContext('2d');
            ctx.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx.lineWidth = 2;
            txt.font = "35px Arial"
            txt.fillText("Эпюра Ux", 900, 33);
            ctx.strokeRect(150, 50, 1600, canvas2.height-50); //рисуем прямоугольник
            let lengthL=0;
            for (let i = 0; i < arrL.length; i++) {
                lengthL += arrL[i];
            }
            let coefficientL = 1600 / lengthL;
            console.log(coefficientL);
            let X = 150;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(X, 250);
            ctx.lineTo(1750, 250);
            ctx.stroke();
            for(let i = 0; i < rowCount-1; i++) {
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(X+arrL[i]*coefficientL, 50);
                ctx.lineTo(X+arrL[i]*coefficientL, canvas.height);
                ctx.stroke();
                X+=arrL[i]*coefficientL;
            }
            let x = 150;
            let tmp = 250 - KUx * arrUx[ii][jj];
            console.log("KUx = " + KUx);
            console.log("TMP = " + tmp);
            for(let i = 0; i < rowCount; i++) {
                for(let j = 0; j < 1000; j++) {
                    ctx.lineWidth = 5;
                    let step = arrL[i] / 1000;
                    ctx.beginPath();
                    //ctx.arcTo(x, 250 - KUx*arrUx[i][j], x, 250 - KUx*arrUx[i][j]+0.1, 1);
                    ctx.moveTo(x, 250- arrUx[i][j]*KUx);
                    ctx.lineTo(x+1, 250 - arrUx[i][j]*KUx+0.001);
                    ctx.stroke();
                    x+=step*coefficientL;
                }
            }
            x = 150;
            for(let i = 0; i < rowCount; i++) {
                for(let j = 0; j < stp; j++) {
                    let step = arrL[i] / stp;
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(x, 250 - KUx * UxChanges[i][j]);
                        ctx.lineTo(x, 250);
                        ctx.stroke();
                        x+=step*coefficientL;
                }
            }
        }
    }
    let canvas3 = document.getElementById("sigma");
    if (canvas3.getContext) {
        let ctx = canvas3.getContext('2d');
        let txt = canvas3.getContext('2d');
        ctx.clearRect(0, 0, canvas3.width, canvas3.height);
        ctx.lineWidth = 2;
        txt.font = "35px Arial"
        txt.fillText("Эпюра σ", 900, 33);
        ctx.strokeRect(150, 50, 1600, canvas3.height-50); //рисуем прямоугольник
        let lengthL=0;
        for (let i = 0; i < arrL.length; i++) {
            lengthL += arrL[i];
        }
        let coefficientL = 1600 / lengthL;
        let X = 150;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(X, 250);
        ctx.lineTo(1750, 250);
        ctx.stroke();
        for(let i = 0; i < rowCount-1; i++) {
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(X+arrL[i]*coefficientL, 50);
            ctx.lineTo(X+arrL[i]*coefficientL, canvas3.height);
            ctx.stroke();
            X+=arrL[i]*coefficientL;
        }
        let maxSigma = Number.MIN_SAFE_INTEGER;
        let minSigma = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < Sigma.length; i++) {
            for (let j = 0; j < 2; j++) {
                if(Sigma[i][j] > maxSigma) {
                    maxSigma = Sigma[i][j];
                }
                if(Sigma[i][j] < minSigma) {
                    minSigma = Sigma[i][j];
                }
            }
        }
        let sizeChart = Math.abs(maxSigma) + Math.abs(minSigma);
        let KSigma = 150 / sizeChart;
        let x = 150;
        for(let i = 0; i < rowCount; i++) {
            ctx.lineWidth = 5;
            ctx.beginPath();
            if(Sigma[i][0] > 0) {
                ctx.moveTo(x, 250 - KSigma * Sigma[i][0]);
            }
            else {
                ctx.moveTo(x, 250 - KSigma * Sigma[i][0]);
            }
            if(Sigma[i][1] > 0) {
                ctx.lineTo(x + arrL[i]*coefficientL, 250 - KSigma * Sigma[i][1]);
            }
            else {
                ctx.lineTo(x + arrL[i]*coefficientL, 250 - KSigma * Sigma[i][1]);
            }
            ctx.stroke();
            x+=arrL[i]*coefficientL;
        }
        x = 150;
        for(let i = 0; i < rowCount; i++) {
            for(let j = 0; j < stp; j++) {
                let step = arrL[i] / stp;
                if(SigmaChanges[i][j] > 0) {
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(x, 250 - KSigma * SigmaChanges[i][j]);
                    ctx.lineTo(x, 250);
                    ctx.stroke();
                    x+=step*coefficientL;
                }
                if(SigmaChanges[i][j] < 0) {
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(x, 250 - KSigma * SigmaChanges[i][j]);
                    ctx.lineTo(x, 250);
                    ctx.stroke();
                    x+=step*coefficientL;
                }
            }
        }

    }
}
let feeachkawinxblin = 0;
let count22 = 0;
let count11 = 0;
let count33 = 0;
function AddItem() {
    let rowCount = document.getElementById('mytbl').rows.length - 1;
    let arrL = [];
    let select = document.getElementById("chooseSt");
    for (let i = 0; i < rowCount; i++) {
        let option = document.createElement('option');
        option.value = (i + 1).toString();
        option.text = option.value;
        select.add(option);
    }
    let d1 = document.getElementById('chooseL');
    d1.insertAdjacentHTML('beforeend', '<input style="margin-left: 43.5%" id="info" placeholder="Введите длину" onchange="Bup()">');
    d1.insertAdjacentHTML('beforebegin', '<br>');
}
let countY = 0;
function Bup() {
    let rowCount = document.getElementById('mytbl').rows.length - 1;
    let flag = false;
    let select = document.getElementById("chooseSt");
    let arrL = [];
    let alfR = ["а", "А", "Б", "в", "В", "г", "Г", "д", "Д", "е", "Е", "ё", "Ë", "ж", "Ж", "з", "З", "и", "И", "й", "Й", "к", "К", "л", "Л", "м", "М", "н", "Н", "о", "О", "п", "П", "р", "Р", "с", "С", "т", "Т", "у", "У", "ф", "Ф", "х", "Х", "ц", "Ц", "ч", "Ч", "ш", "Ш", "щ", "Щ", "ы", "Ы", "ь", "Ь", "ъ", "Ъ", "э", "Э", "ю", "я", "Я"];
    let alrE = ["a", "A", "b", "B", "c", "C", "d", "D", "f", "F", "E", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
    let symbols = ["?", "!", "[", "]", "{", "}", "\\", "/", "@", "#", "$", "%", "ˆ", "&", "*", "(", ")", "=", "+", "_", '-'];
    let temp = document.getElementById("info").value;
    temp = parseFloat(temp);
    let countL = 0;
    for (let i = 0; i < rowCount; i++) {
        arrL[i] = bigArr[countL];
        countL += 4;
    }
    if(temp < 0) {
        document.getElementById("info").value = Math.abs(document.getElementById("info").value);
        alert("Кря")
            //alert("суицид тоже выход")
    }
    if(document.getElementById("info").value > arrL[select.value-1]) {
        alert("Значение больше длины стержня. Кусь");
        document.getElementById("info").value = arrL[select.value-1];
        if(countY === 0) {
            window.open("https://www.youtube.com/playlist?list=PLVtYY3Ujl33PMW8H1OAoafK_V48v9VIHt");
            countY++;
        }
    }
    for (let i = 0; i < alfR.length; i++) {
        if (document.getElementById("info").value.includes(alfR[i])) {
            if (Number.isNaN(temp)) {
                document.getElementById("info").value = 0;
            } else {
                if(temp > arrL[select.value-1]) {
                    alert("Значение больше длины стержня. Кусь");
                    document.getElementById("info").value = arrL[select.value-1];
                }
                else {
                    document.getElementById("info").value = temp;
                }
            }
            if(count11 === 0) {
                count11++;
                alert("А буковки низя")
                window.open("https://vk.com/wall-42800749_714106");
            }
            else if(count11 === 1)  {
                alert("Десять маленьких утят\n" +
                    "Ночью все ложатся спать:\n" +
                    "Раз — утенок самый смелый,\n" +
                    "Два — немножко неумелый,\n" +
                    "Три — утенок был хитрец,\n" +
                    "А четыре — удалец!\n" +
                    "Пять — обжорой оказался!\n" +
                    "Шесть — грязнулею остался!\n" +
                    "Семь — утенок был пройдохой!\n" +
                    "Восемь — всю дорогу охал!\n" +
                    "Девять — лег скорей в кровать,\n" +
                    "А десятый, самый важный, —\n" +
                    "Он тебя за руку хвать!");

                window.open("https://vk.com/wall-206143282_1609");
            }
            else {
                alert("Безобразие")
            }
            break;
        }
    }
    for (let i = 0; i < alrE.length; i++) {
        if (document.getElementById("info").value.includes(alrE[i])) {
            if (Number.isNaN(temp)) {
                document.getElementById("info").value = 0;
            } else {
                //document.getElementById("info").value = temp;
                if(temp > arrL[select.value-1]) {
                    alert("Значение больше длины стержня. Кусь");
                    document.getElementById("info").value = arrL[select.value-1];
                }
                else {
                    document.getElementById("info").value = temp;
                }
            }
            if (count22 === 0) {
                count22++;
                window.open("https://vk.com/wall-206143282_1406")
            } else if(count22 === 1){
                alert("Больше уток богу уток");
                window.open("https://vk.com/wall-40567493_108172")
            }
            else {
                alert("Пусть будет мяу");
            }
            break;
        }
    }
    for(let i = 0; i < symbols.length; i++) {
        if(document.getElementById("info").value.includes(symbols[i])) {
            if (Number.isNaN(temp)) {
                document.getElementById("info").value = 0;
            } else {
                if(temp > arrL[select.value-1]) {
                    alert("Значение больше длины стержня. Кусь");
                    document.getElementById("info").value = arrL[select.value-1];
                }
                else {
                    document.getElementById("info").value = temp;
                }
            }
            if(count33 === 0) {
                count33++;
                window.open("https://vk.com/wall-206143282_771");
            }
            else {
                alert("Опять безобразничаете")
            }
        }
    }
    if(document.getElementById("info").value.includes(',')) {
        let old = document.getElementById("info").value;
        let newstr = old.replace(',', '.');
        document.getElementById("info").value = newstr;
        feeachkawinxblin = document.getElementById("info").value;
    }
    if(document.getElementById("info").value === ''){
        document.getElementById("info").value = 0;
        alert("Кряяяяяяя")
    }
    feeachkawinxblin = document.getElementById("info").value;
}

    let numberSt = 1;

    function Count() {
        let select = document.getElementById("chooseSt");
        numberSt = select.value;
    }

let count = 0;
    function Calculation() {
        if(numberSt === 0) {
            numberSt = 1;
        }
        let rowCount = document.getElementById('mytbl').rows.length - 1;
        let arrL = [];
        let arrA = [];
        let arrE = [];
        let arrS = [];
        let countL = 0;
        let countA = 2;
        let countE = 1;
        let countS = 3;
        for(let i = 0; i < rowCount; i++) {
            arrL[i] = bigArr[countL];
            countL+=4;
            arrA[i] = bigArr[countA];
            countA+=4;
            arrE[i] = bigArr[countE];
            countE+=4;
            arrS[i] = bigArr[countS];
            countS+=4;
        }

        let nx = arrE[numberSt-1]*arrA[numberSt-1]/ arrL[numberSt-1] * (arrU[numberSt-1][1] - arrU[numberSt-1][0]) + (arrQ[numberSt-1]*arrL[numberSt-1]/2) * (1 - 2 * feeachkawinxblin/arrL[numberSt-1]);
        let ux = arrU[numberSt-1][0] + (feeachkawinxblin / arrL[numberSt-1]) * (arrU[numberSt-1][1] - arrU[numberSt-1][0]) + (arrQ[numberSt-1] * arrL[numberSt-1] * arrL[numberSt-1] * feeachkawinxblin * (1-feeachkawinxblin/arrL[numberSt-1]) / (2 * arrE[numberSt-1] * arrA[numberSt-1] * arrL[numberSt-1]));
        let sigma = nx/arrA[numberSt-1];

        let st = document.getElementById('numberSt');
        let nxx = document.getElementById('nxx');
        let uxx = document.getElementById('uxx');
        let sigma2 = document.getElementById('sgm');
        // let row_2 = document.createElement('tr');
        // let row_2_data_1 = document.createElement('td');
        st.innerHTML = "*" + numberSt + "*";
        // let row_2_data_2 = document.createElement('td');
        nxx.innerHTML = nx.toFixed(2).toString();
        // let row_2_data_3 = document.createElement('td');
        // let row_2_data_4 = document.createElement('td');
        uxx.innerHTML = ux.toFixed(2).toString();
        sigma2.innerHTML = sigma.toFixed(2).toString();
        if(arrS[numberSt-1] < sigma) {
            document.getElementById('sgm').style.backgroundColor = "#FF0000";
            document.getElementById("sgm").style.color = "#FFFFFF";
        }
        else {
            document.getElementById('sgm').style.backgroundColor = "#7FFF00";
            document.getElementById("sgm").style.color = "#000000";
        }
    }
    let stp = 0;
    function AddItem2() {
        let rowCount = document.getElementById('mytbl').rows.length - 1;
        let arrL = [];
        let countL = 0;
        for (let i = 0; i < rowCount; i++) {
            arrL[i] = bigArr[countL];
            countL += 4;
        }
        let d2 = document.getElementById('step');
        d2.insertAdjacentHTML('beforeend', '<input style="margin-left: 43.5%" id="stepp" placeholder="Введите шаг">')
        d2.insertAdjacentHTML('beforebegin', '<br>');

    }
    function Calculation2() {
        stp = document.getElementById('stepp').value;
        console.log(stp);
        let count = 1;
        if(numberSt === 0) {
            numberSt = 1;
        }
        let rowCount = document.getElementById('mytbl').rows.length - 1;
        let arrL = [];
        let arrA = [];
        let arrE = [];
        let countL = 0;
        let countA = 2;
        let countE = 1;
        for(let i = 0; i < rowCount; i++) {
            arrL[i] = bigArr[countL];
            countL+=4;
            arrA[i] = bigArr[countA];
            countA+=4;
            arrE[i] = bigArr[countE];
            countE+=4;
        }


        // alert(stp);
        // alert(arrL[numberSt-1]);
        let start = 0;
        do {
            start +=Number.parseFloat(stp);
            count++;
            console.log("START = " + start);
            console.log("COUNT = " + count);
        } while (start <= arrL[numberSt-1])
        if(start > arrL[numberSt-1]) {
            count--;
        }
        // var newElem=document.createElement("table");
        //
        // var newRow=newElem.insertRow(0);
        // var newCell = newRow.insertCell(0);
        // newCell.width="200";
        // newCell.innerHTML="строка 1 столбец 1";
        //
        // var newCell = newRow.insertCell(1);
        // newCell.width="400";
        // newCell.innerHTML="строка 1 столбец 2";
        //
        // var newRow=newElem.insertRow(1);
        // var newCell = newRow.insertCell(0);
        // newCell.width="200";
        // newCell.innerHTML="строка 2 столбец 1";
        //
        // var newCell = newRow.insertCell(1);
        // newCell.width="400";
        // newCell.innerHTML="строка 2 столбец 2";
        //
        // document.body.appendChild(newElem);
        // const table = document.createElement('table');
        // let tr = document.createElement('tr');
        // for(let i = 0; i < 6; i++) {
        //     tr.appendChild(document.createElement('th'));
        // }
        // table.appendChild(tr);
        // table.rows[0].cells[0].innerHTML = '№';
        // table.rows[0].cells[1].innerHTML = 'Step';
        // table.rows[0].cells[2].innerHTML = 'Nx';
        // table.rows[0].cells[3].innerHTML = 'Ux';
        // table.rows[0].cells[4].innerHTML = 'Sigma';
        // table.rows[0].cells[5].innerHTML = '[sigma]';
        let tbody = document.getElementById('tbll');
        // let row = document.createElement("TR")
        // let td0 = document.createElement("TH")
        // td0.appendChild(document.createTextNode(''))
        // let td1 = document.createElement("TH")
        // td1.appendChild(document.createElement("text"))
        // let td2 = document.createElement("TH")
        // td2.appendChild (document.createElement("text"))
        // let td3 = document.createElement("TH")
        // td3.appendChild (document.createElement("text"))
        // let td4 = document.createElement("TH")
        // td4.appendChild (document.createElement("text"))
        // let td5 = document.createElement("TH")
        // td4.appendChild (document.createElement("text"))
        // let td6 = document.createElement("TH")
        // td4.appendChild (document.createElement("text"))
        // row.appendChild(td0);
        // row.appendChild(td1);
        // row.appendChild(td2);
        // row.appendChild(td3);
        // row.appendChild(td4);
        // row.appendChild(td5);
        // row.appendChild(td6);
        // tbody.appendChild(row);
        let row2;
        for(let i = 0; i < count; i++) {
        row2 = document.createElement("TR")
        for(let i = 0; i < 7; i++) {
            let td = document.createElement('td');
            //td.appendChild(document.createElement("text"))
            row2.appendChild(td);
            tbody.appendChild(row2);
        }
    }
        tbody.rows[0].cells[1].innerHTML = "1";
        tbody.rows[1].cells[1].innerHTML = "2";
        let startRow = 0;
        let counterRows = count;
        while(counterRows > 0) {
            tbody.rows[startRow].cells[1].innerHTML = start.toFixed(1);
            startRow++;
            counterRows--;
        }

    }

