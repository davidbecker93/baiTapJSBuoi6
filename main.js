/**
 * Tìm số nguyên dương nhỏ nhất
 * - Tạo biến min và biến sum
 * - i bắt đầu từ 1 điều kiện <10000
 * - sum > 1000 dung lai min = i
 */
function numMin() {
    var min = 0;
    var sum = 0;
    for (var i = 1; i < 10000; i++) {
        sum += i
        if (sum > 10000) {
            min = i;
            break;
        }
    }
    var result = "Số nguyên dương nhỏ nhất là: " + min;
    document.getElementById("showBai1").innerHTML = result;
}

/**
 * Tính tồng
 * sum = Math.pow(x,n)
 */
function tinhTong() {
    var x = document.getElementById("num1").value * 1;
    var n = document.getElementById("num2").value * 1;
    var sum = 0;
    for (i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    result = "Tổng: " + sum;
    document.getElementById("showBai2").innerHTML = result;
}

/**
 * Tính giai thừa
 * 
 */
function tinhGiaiThua() {
    var n = document.getElementById("numN").value * 1;
    var time = 1;
    for (i = 1; i <= n; i++) {
        time *= i;
    }
    result = "Giai thừa: " + time;
    document.getElementById("showBai3").innerHTML = result;
}
/**
 * Tao Div
 */
function taoDiv() {
    var div = "";
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            div += "<div class='bg-danger text-white p-2'>Div chẵn</div>";
        } else {
            div += "<div class='bg-primary text-white  p-2'>Div lẻ </div>";
        }
    }
    document.getElementById("showBai4").innerHTML = div;
}

/**
 * So Nguyen to
 */
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
function tinhNguyenTo() {
    var x = document.getElementById("numX").value * 1;
    numPrime = "";
    for (i = 1; i <= x; i++) {
        isPrime(i) && (numPrime += " " + i);
    }
    document.getElementById("showBai5").innerHTML = numPrime;
}