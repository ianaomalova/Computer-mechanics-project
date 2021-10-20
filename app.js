var bigArr = [];
var arrQ = []
var arrF = []
let bum = 0;
let bum2 = 0;
var counter2 = 1; //счетчик строк
function AddRow() {
    const $tbl = document.getElementById("maintabl");
    $tbl.insertAdjacentHTML("beforeend", "<tr></tr>");
    var $access = document.getElementsByTagName("tr")[counter2];
    $access.insertAdjacentHTML("beforeend", "<td><text></text></td>")
    $access.insertAdjacentHTML("beforeend", "<td><input type='number' value=0 min='0' step=any></td>")
    $access.insertAdjacentHTML("beforeend", "<td><input type='number' value=0 min='0' step=any></td>")
    $access.insertAdjacentHTML("beforeend", "<td><input type='number' value=0 min='0' step=any></td>")
    $access.insertAdjacentHTML("beforeend", "<td><input type='number' value=0 min='0' step=any></td>")
    //const input = document.querySelector('input');
    counter2++;
    function onChange(evt) {
        //console.log("called");
        //document.querySelector(".result").innerHTML = evt.target.value;
        let temp = evt.target.value;
        temp = parseFloat(temp)
        if(Number.isNaN(temp)) {
            bum++;
            if(bum < 3)
                alert("Владислав Александрович, это безобразие. Введите число")
        }
        else if(evt.target.value < 0) {
            bum++;
            if(bum < 3)
                alert("Владислав Александрович, это безобразие. Введите положительное число")
        }
        if (bum === 3) {
            alert("Безобразие..Еще одна попытка")
        }
        if (bum === 4) {
            document.write('<img width="700" height="700" src="RRR.jpg">');
        }

        if (document.getElementsByTagName("input")[0].value == 75 & document.getElementsByTagName("input")[1].value == 82 & document.getElementsByTagName("input")[2].value == 89 & document.getElementsByTagName("input")[3].value == 65) {
            document.write('<img width="800" height="1000" src="etoya.jpg">');
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
//             alert("За буквы по жопе")
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
//             alert("За буквы по жопе")
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
//             alert("За буквы по жопе")
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
//             alert("За буквы по жопе")
//         }
//     }
//     //saveElement();
// }
// function isNumber(num) {
//     return typeof num === 'number' && !Number.isNaN(num);
// }

    // function saveClick() {
    //     let rowCount = document.getElementById('mytbl').rows.length - 1; //получение количества строк
    //     //получение кол-ва ячеек(дырок куда вводятся цифры без учета статических данных)
    //     let count = rowCount;
    //     for (let i = 0; i < rowCount; i++) {
    //         count += 3;
    //     }
    //
    //     for (let i = 0; i < count; i++) {
    //         bigArr[i] = document.getElementsByTagName("input")[i].value;
    //     }
    //
    //
    //     let qw = 0;
    //     for (let i = 0; i < count + rowCount; i++) {
    //         arrQ[qw] = 0;
    //     }
    //     //parse the Q array from strings to numbers
    //     let j = 0; //счетчик для массива
    //     for (let i = count; i < count + rowCount; i++) {
    //         arrQ[j] = document.getElementsByTagName("input")[i].value;
    //         j++;
    //     }
    //
    //     for (let i = 0; i < rowCount; i++) {
    //         let temp = parseInt(arrQ[i]);
    //         if (Number.isNaN(temp)) {
    //             alert("Владислав Александрович, это безобразие! :)")
    //             document.write('<img src="https://pbs.twimg.com/profile_images/1021724681752256513/WM5yxh86_400x400.jpg">');
    //             break
    //         } else {
    //             arrQ[i] = temp;
    //         }
    //         console.log(arrQ[i])
    //     }
    //     let counter = count + rowCount;
    //     //parse the F array from strings to numbers
    //     let qw1 = 0;
    //     for (let i = 0; i < count + rowCount; i++) {
    //         arrF[qw1] = 0;
    //     }
    //     let k = 0; //счетчик для второго массива
    //     for (let i = counter; i < counter + rowCount + 1; i++) {
    //         arrF[k] = document.getElementsByTagName("input")[i].value;
    //         k++;
    //     }
    //     for (let i = 0; i < arrF.length; i++) {
    //         let temp = parseInt(arrF[i])
    //         if (Number.isNaN(temp)) {
    //             alert("Владислав Александрович, это безобразие! :)")
    //             document.write('<img src="https://pbs.twimg.com/profile_images/1021724681752256513/WM5yxh86_400x400.jpg">');
    //             break
    //         } else {
    //             arrF[i] = temp;
    //         }
    //         console.log(arrF[i])
    //     }
    //     if (bigArr[0] === 75 & bigArr[1] === 82 & bigArr[2] === 89 & bigArr[3] === 65) {
    //         document.write('<img width="800" height="1000" src="https://sun9-21.userapi.com/impg/B0Vf8RJJvU1-9iI8oMcvzXs72l346GFCLi18hg/iqXFANivWV4.jpg?size=1620x2160&quality=96&sign=ec6e6ef7627812ae5a623ba85cf5da0d&type=album">');
    //     }
    // }


    // let form = document.querySelector("form");
    // let log = document.querySelector("#log");
    //
    // let flagRake = 0; //переменная отвечающая за заделки
    // form.addEventListener("submit", function (event) {
    //     let data = new FormData(form);
    //     let output = "";
    //     for (const entry of data) {
    //         output = entry[0] + " = " + entry[1] + "\r";
    //         if (entry[1] === 'left rake') {
    //             console.log("Выбрана 1")
    //             flagRake = 1;
    //             console.log(flagRake)
    //         } else if (entry[1] === 'right rake') {
    //             flagRake = 2;
    //             console.log(flagRake)
    //             console.log("Выбрана 2")
    //         } else if (entry[1] === 'both rake') {
    //             flagRake = 3;
    //             console.log(flagRake)
    //             console.log("Выбрана 3")
    //         }
    //     }
    //     ;
    //     //log.innerText = output;
    //     event.preventDefault();
    // }, false);

    function inputForces() {
        let rowCount = document.getElementById('mytbl').rows.length - 1;
        let nodeCount = rowCount + 1;
        const $tb = document.getElementById("tb2");
        const $tb2 = document.getElementById("tb3");
        for (let i = 0; i < rowCount; i++) {
            $tb.insertAdjacentHTML("beforeend", "<tr></tr>");
            var $access1 = document.getElementsByTagName("tr")[counter2 + 1];
            $access1.insertAdjacentHTML("beforeend", "<td><text></text></td>")
            $access1.insertAdjacentHTML("beforeend", "<td><input type='number' value=0 step=any></td>")
            counter2++;
        }
        for (let i = 0; i < nodeCount; i++) {
            $tb2.insertAdjacentHTML("beforeend", "<tr></tr>");
            var $access2 = document.getElementsByTagName("tr")[counter2 + 2];
            $access2.insertAdjacentHTML("beforeend", "<td><text></text></td>")
            $access2.insertAdjacentHTML("beforeend", "<td><input type='number' value=0 step=any></td>")
            counter2++;
        }

        function onChange(evt) {
            //console.log("called");
            //document.querySelector(".result").innerHTML = evt.target.value;
            let temp = evt.target.value;
            temp = parseFloat(temp)
            if(Number.isNaN(temp)) {
                if (bum2 === 0) {
                    bum2++;
                    alert("Рубрика интересные факты: маленькие утята считают матерью первое существо, которое увидят, выбравшись из яйца. Причем этим существом может оказаться, например, человек или домашняя кошка — утятам всё равно. Осталось найти утку, принять у нее роды и вырастить себе утенка P.S А вы не хотите еще раз ввести буквы в нагрузки?)");
                }
                else if(bum2 === 1){
                    bum2++;
                    alert("Вам больше нравятся утки или гуси?")
                }
                else if(bum2 === 2) {
                    bum2++;
                    alert("А вы уверены, что пасхалка не заключается в том, чтобы вы вы просто устали и зачли мне проект просто потому что уже устали тыкать?:) Ну или проверить ваше терпение..")
                }
                else if(bum2 === 3) {
                    alert("Анатидаефобия — это навязчивый страх, что где—то в мире есть утка, следящая за вами... Ладно, все, последний разочек:) P.S на фоне все-таки гусь или утка?")
                    alert("3")
                    alert("2")
                    alert("1")
                    alert("Ладно, я просто хотела вам показать свои носки с утками на фоне нарисованной утки с какой-то прикольной цитатой про уток и еще резиновых уточек, которых мне подарили на др. И шапку с пикачу. Она желтая как утята.")
                    document.write('<img width="800" height="1000" src="bebebe.jpg">');
                }
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
    }

    let j = 0; //счетчик для массива
    for (let i = count; i < count + rowCount; i++) {
        arrQ[j] = parseFloat(document.getElementsByTagName("input")[i].value);
        j++;
    }

    let counter = count + rowCount;
    let k = 0; //счетчик для второго массива
    for (let i = counter; i < counter + rowCount + 1; i++) {
        arrF[k] = parseFloat(document.getElementsByTagName("input")[i].value);
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


let choose = -1;
function fun1() {
    //alert("Внутри функи=ции 12321321")
    var rad=document.getElementsByName('r1');
    for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
            choose = i;
            //alert('Выбран '+i+' radiobutton');
        }
    }
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
            let Y = 150;
            startX = X - 20;
            startY = Y;
            let width = 0;
            let maxHigth = 0;
            let currentHeigth = 0;
            let polovina_pervogo = 0;
            let polovina_poslednego = 0;
            for (let i = 0; i < amountSterjney; i++) {
                width = bigArr[counter] * coefficientL; //получаем масштабируемую ширину
                currentHeigth = bigArr[counter2] * coefficientA; //получаем масштабируемую высоту
                if (currentHeigth > maxHigth) {
                    maxHigth = currentHeigth;
                }
                if (i === 0) {
                    polovina_pervogo = currentHeigth / 2;
                } else {
                    polovina_poslednego = currentHeigth / 2;
                }
                ctx.lineWidth = 7000; //ширина линии
                cnv.lineWidth = 2;
                let x = X;
                let y = Y + currentHeigth / 2;
                ctx.strokeRect(X, Y, width, currentHeigth); //рисуем прямоугольник
                X += width; //передвигаем координату Х
                endX = X;
                endY = Y;
                var img5 = document.getElementById('arrQ');
                var img5_1 = document.getElementById('arrQL')
                var img6 = document.getElementById('arrF');
                let temp = Y + currentHeigth / 2; //передвигаем координату на середину стержня
                if (arrQ[i] !== 0) {
                    // cnv.moveTo(x, y);
                    // cnv.lineTo(X, temp);
                    // cnv.stroke();
                    // while(new_x < X) {
                    //     arrows.moveTo(new_x + arrW, y - arrH);
                    //     arrows.lineTo(new_x + (arrW+arrW), y);
                    //     arrows.stroke();
                    // }
                }
                if(arrQ[i] !== 0) {
                    let new_x = x;
                    let new_y = y;
                    if(arrQ[i] > 0) {
                        while (true) {
                            arrows.drawImage(img5, new_x, new_y - 15, 50, 30);
                            new_x += 50;
                            if(new_x + 50 > X) {
                                break;
                            }
                        }
                    }
                    else if(arrQ[i] < 0) {
                        while (true) {
                            arrows.drawImage(img5_1, new_x, new_y - 15, 50, 30);
                            new_x += 50;
                            if(new_x + 50 > X) {
                                break;
                            }
                        }
                    }
                    cnv.moveTo(x, y);
                    cnv.lineTo(X, temp);
                    cnv.stroke();
                }
                counter += 4; //получаем параметры второго стержня
                counter2 += 4;
                let temp2 = bigArr[counter2] * coefficientA / 2; //получчаем кол-во пикселей половины второго стержня
                Y = temp - temp2; //перемещаем ввод вверх от половины первого стержня на половину второго стержня

                // console.log("X" + endX);
                // console.log("Y" + endY);
                //ctx.strokeRect(endX, endY, 20, 20);
            }
            for(let i = 0; i < amountSterjney + 1; i++) {
                if(arrF[i] !== 0) {
                    let new_x = x;
                    let new_y = y;
                    arrows.drawImage(img6, new_x, new_y - 15, 50, 30);
                }
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
            } else if(choose === 2){
                console.log("Выбрана 3")
                cnv2.drawImage(img3, startX, temp, 20, maxHigth);
                cnv2.drawImage(img4, endX, temp2, 20, maxHigth);
            }
            else {
                alert("Грабли - это важно")
            }

        }
    }






