var bigArr = [];
var arrQ = []
var arrF = []

function saveClick() {
    let rowCount = document.getElementById('mytbl').rows.length - 1; //получение количества строк
    //console.log(rowCount)
    //получение кол-ва ячеек(дырок куда вводятся цифры без учета статических данных)
    let count = rowCount;
    for (let i = 0; i < rowCount; i++) {
        count+=3;
    }
    // bigArr = new Array()
    for(let i = 0; i < count; i++) {
        //bigArr[i] = document.getElementsByTagName("input")[i].value;
        window.bigArr.push(document.getElementsByTagName("input")[i].value);
    }

    for(let i = 0; i < bigArr.length; i++) {
        let temp = parseInt(bigArr[i])
        if(Number.isNaN(temp)) {
            alert("Владислав Александрович, это безобразие!:)")
            document.write('<img src="https://pbs.twimg.com/profile_images/1021724681752256513/WM5yxh86_400x400.jpg">');
            break
        }
        else {
            window.bigArr[i] = temp;
            console.log(bigArr[i])
        }
    }

    console.log(bigArr[0])
    console.log(bigArr[1])
    console.log(bigArr[2])
    console.log(bigArr[3])
    let qw = 0;
    for(let i = 0; i < count + rowCount; i++) {
        arrQ[qw] = 0;
    }
    //parse the Q array from strings to numbers
    let j = 0; //счетчик для массива
    for(let i = count; i < count+rowCount; i++) {
        arrQ[j] = document.getElementsByTagName("input")[i].value;
        j++;
    }

    for(let i = 0; i < rowCount; i++) {
        let temp = parseInt(arrQ[i]);
        if(Number.isNaN(temp)) {
            alert("Владислав Александрович, это безобразие! :)")
            document.write('<img src="https://pbs.twimg.com/profile_images/1021724681752256513/WM5yxh86_400x400.jpg">');
            break
        }
        else {
            arrQ[i] = temp;
        }
        console.log(arrQ[i])
    }
    let counter = count + rowCount;
    //parse the F array from strings to numbers
    let qw1 = 0;
    for(let i = 0; i < count + rowCount; i++) {
        arrF[qw1] = 0;
    }
    let k = 0; //счетчик для второго массива
    for(let i = counter; i < counter+rowCount + 1; i++ ) {
        arrF[k] = document.getElementsByTagName("input")[i].value;
        k++;
    }
    for(let i = 0; i < arrF.length; i++) {
        let temp = parseInt(arrF[i])
        if(Number.isNaN(temp)) {
            alert("Владислав Александрович, это безобразие! :)")
            document.write('<img src="https://pbs.twimg.com/profile_images/1021724681752256513/WM5yxh86_400x400.jpg">');
            break
        }
        else {
            arrF[i] = temp;
        }
        console.log(arrF[i])
    }
    if(bigArr[0] === 75 & bigArr[1] === 82 & bigArr[2] === 89 & bigArr[3] === 65) {
       document.write('<img width="800" height="1000" src="https://sun9-21.userapi.com/impg/B0Vf8RJJvU1-9iI8oMcvzXs72l346GFCLi18hg/iqXFANivWV4.jpg?size=1620x2160&quality=96&sign=ec6e6ef7627812ae5a623ba85cf5da0d&type=album">');
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
            console.log("Выбрана 1")
            flagRake = 1;
            console.log(flagRake)
        }
        else if(entry[1] === 'right rake') {
            flagRake = 2;
            console.log(flagRake)
            console.log("Выбрана 2")
        }
        else if(entry[1] === 'both rake'){
            flagRake = 3;
            console.log(flagRake)
            console.log("Выбрана 3")
        }
    };
    //log.innerText = output;
    event.preventDefault();
}, false);

function createTable(id, id2) {
    let rowCount = document.getElementById('mytbl').rows.length - 1;
    let nodeCount = rowCount + 1;
    let tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
    let tbody2 = document.getElementById(id2).getElementsByTagName("TBODY")[0];
    for(let i = 0; i < rowCount; i++) {
        let row = document.createElement("TR")
        let td0 = document.createElement("TD")
        td0.appendChild(document.createTextNode(''))
        let td1 = document.createElement("TD")
        td1.appendChild(document.createElement("input"))
        row.appendChild(td0);
        row.appendChild(td1);
        tbody.appendChild(row);
    }
    for(let i = 0; i < nodeCount; i++) {
        let row = document.createElement("TR")
        let td0 = document.createElement("TD")
        td0.appendChild(document.createTextNode(''))
        let td1 = document.createElement("TD")
        td1.appendChild(document.createElement("input"))
        row.appendChild(td0);
        row.appendChild(td1);
        tbody2.appendChild(row);
    }

}

function draw1() {
    let canvas = document.getElementById("ochko");
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let cnv = canvas.getContext('2d');
        let cnv2 = canvas.getContext('2d');
        const amountSterjney = document.getElementById('mytbl').rows.length - 1;
        let coefficientL = 0;
        let coefficientA = 0;
        let lengthL = 0;
        let lengthA = 0;
        let count = 0;
        let count2 = 2;
        for(let i = 0; i < bigArr.length; i+= 4) {
            lengthL += bigArr[count];
            count +=4;
        }
        for(let i = 0; i < bigArr.length; i+=4) {
            lengthA += bigArr[count2];
            count2+=4;
        }

        coefficientA = 300 / lengthA;
        coefficientL = 1600 / lengthL;
        let counter = 0;
        let counter2 = 2;
        let startX = 0;
        let endX = 0;
        let startY = 0;
        let endY = 0;
        let X = 90;
        let Y = 90;
        startX = X - 20;
        startY = Y;
        let width = 0;
        let maxHigth = 0;
        let currentHeigth = 0;
        let polovina_pervogo = 0;
        let polovina_poslednego = 0;
        for(let i = 0; i < amountSterjney; i++) {
            width = bigArr[counter] * coefficientL; //получаем масштабируемую ширину
            currentHeigth = bigArr[counter2] * coefficientA; //получаем масштабируемую высоту
            if(currentHeigth > maxHigth) {
                maxHigth = currentHeigth;
            }
            if(i === 0) {
                polovina_pervogo = currentHeigth / 2;
            }
            else {
                polovina_poslednego = currentHeigth / 2;
            }
            ctx.lineWidth = 4; //ширина линии
            cnv.lineWidth = 3;
            let x = X;
            let y = Y + currentHeigth / 2;
            ctx.strokeRect(X, Y, width, currentHeigth); //рисуем прямоугольник
            X += width; //передвигаем координату Х
            endX = X;
            endY = Y;
            let temp = Y + currentHeigth / 2; //передвигаем координату на середину стержня
            console.log("ArrQ[0]");
            console.log(arrQ[0]);
            if(arrQ[i] !== 0) {
                cnv.moveTo(x, y);
                cnv.lineTo(X, temp);
                cnv.stroke();
            }
            counter +=4; //получаем параметры второго стержня
            counter2 +=4;
            let temp2 = bigArr[counter2]*coefficientA / 2; //получчаем кол-во пикселей половины второго стержня
            Y = temp - temp2; //перемещаем ввод вверх от половины первого стержня на половину второго стержня

            // console.log("X" + endX);
            // console.log("Y" + endY);
            //ctx.strokeRect(endX, endY, 20, 20);
        }
        var img3=document.getElementById('lr');
        var img4=document.getElementById('rr');
        let temp = startY + polovina_pervogo;
        let temp2 = endY + polovina_poslednego;
        temp -= maxHigth/2;
        temp2 -= maxHigth / 2;
        if(flagRake === 1) {
            console.log("Выбрана 1")
            cnv2.drawImage(img3, startX, temp, 20, maxHigth);
        }
        else if(flagRake === 2) {
            console.log("Выбрана 2")
            cnv2.drawImage(img4, endX, temp2, 20, maxHigth);
        }
        else {
            console.log("Выбрана 3")
            cnv2.drawImage(img3, startX, temp, 20, maxHigth);
            cnv2.drawImage(img4, endX, temp2, 20, maxHigth);
        }

    }
}






