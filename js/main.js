let arrNum = []

// Thêm số và lưu vào mảng
function addNum() {
  let n = Number(document.querySelector('#inputNum').value)

  arrNum.push(n)
  document.querySelector('#arrNum').innerHTML = `Mảng: ${arrNum}`
}
document.querySelector('#btn-addNum').onclick = addNum

// Tổng số dương
function calcSum() {
  let sum = 0
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0 && arrNum[i] > 0) {
      sum += arrNum[i]
    }
  }
  document.querySelector('#calc-sum').innerHTML = `Tổng các số dương: ${sum}`
}
document.querySelector('#btn-sum').onclick = calcSum

// Đếm số dương
function countPositiveNum() {
  let count = 0
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0 && arrNum[i] > 0) {
      count++
    }
  }
  document.querySelector('#calc-count').innerHTML = `Đếm số dương: ${count}`
}
document.querySelector('#btn-count').onclick = countPositiveNum

// Tìm số nhỏ nhất trong mảng
function minNum() {
  let min = arrNum[0]
  for (let i = 1; i < arrNum.length; i++) {
    if (min > arrNum[i]) {
      min = arrNum[i]
    }
  }
  document.querySelector('#find-min').innerHTML = `Số nhỏ nhất: ${min}`
}
document.querySelector('#btn-min').onclick = minNum

// Tìm số dương nhỏ nhất trong mảng
function minPositiveNum() {
  let arrMinDuong = []
  let minDuong
  for (let i = 1; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0 && arrNum[i] > 0) {
      arrMinDuong.push(arrNum[i])
      minDuong = arrMinDuong[0]
      if (minDuong > arrMinDuong[i]) {
        console.log('minDuong', arrMinDuong[i]);
        return minDuong = arrMinDuong[i]
      }
    }
  }
  document.querySelector('#find-minDuong').innerHTML = `Số nhỏ nhất: ${minDuong}`
}
document.querySelector('#btn-minDuong').onclick = minPositiveNum

// Tìm số chẵn cuối cùng trong mảng, nếu không có trả về -1
function findEvenNum() {
  let arrDuong = []
  let lastEvenNum = -1
  // let minDuong
  for (let i = 1; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0 && arrNum[i] > 0) {
      arrDuong.push(arrNum[i])
      lastEvenNum = arrDuong.slice(-1)
    }
  }
  console.log(lastEvenNum);
  document.querySelector('#find-even-num').innerHTML = `Số dương cuối cùng: ${lastEvenNum}`
}
document.querySelector('#btn-even-num').onclick = findEvenNum

// Đổi chỗ 2 vị trí trong mảng
function changePlace() {
  let arrNumCopy2 = []

  let p1 = Number(document.querySelector('#inputNum3').value)
  let p2 = Number(document.querySelector('#inputNum4').value)
  let viTri1 = 0
  let viTri2 = 0
  let contents = ''

  for (let i = 0; i < arrNum.length; i++) {
    arrNumCopy2.push(arrNum[i])
  }

  for (let i = 0; i < arrNumCopy2.length; i++) {
    if (arrNumCopy2[i] === p1) {
      viTri1 = i
    } else if (arrNumCopy2[i] === p2) {
      viTri2 = i
    }
  }

  if (p1 === p2) {
    alert('vị trí 1 trùng vị trí 2')
  } else if (arrNumCopy2[viTri1] === p1 && arrNumCopy2[viTri2] === p2) {
    let temp = arrNumCopy2[viTri1]
    arrNumCopy2[viTri1] = arrNumCopy2[viTri2]
    arrNumCopy2[viTri2] = temp
    contents = `Mảng đã đổi: ${arrNumCopy2}`
  } else if (arrNumCopy2[viTri1] !== p1 && arrNumCopy2[viTri2] !== p2) {
    alert('không tìm thấy vị trí 1 và 2');
  } else if (arrNumCopy2[viTri1] !== p1) {
    alert('không tìm thấy vị trí 1')
  } else if (arrNumCopy2[viTri2] !== p2) {
    alert('không tìm thấy vị trí 2')
  }
  console.log(p1, p2);

  document.querySelector('#changePlace').innerHTML = contents
}
document.querySelector('#btn-changePlace').onclick = changePlace


// Sắp xếp tăng dần
function asendingSort() {
  let arrNumCopy = []

  for (let i = 0; i < arrNum.length; i++) {
    arrNumCopy.push(arrNum[i])
  }

  // Cách 1: for loop
  for (let i = 0; i < arrNumCopy.length - 1; i++) {
    for (let j = 0; j < arrNumCopy.length; j++) {
      if (arrNumCopy[j] > arrNumCopy[j + 1]) {
        let temp = arrNumCopy[j]
        arrNumCopy[j] = arrNumCopy[j + 1]
        arrNumCopy[j + 1] = temp
      }
    }
  }

  // Cách 2: sử dụng hàm sort
  // arrNumCopy.sort((a, b) => {
  //   return a - b
  // })
  document.querySelector('#find-asending-sort').innerHTML = `Thứ tự tăng dần: ${arrNumCopy}`
}
document.querySelector('#btn-asending-sort').onclick = asendingSort

// Tìm số nguyên tố đầu tiên, nếu không có trả về -1
// check số nguyên tố
function isPrime(n) {
  if (n < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
// Hiển thị số nguyên đầu
function displayPrime() {
  let arrPrime = []
  let prime = -1

  for (let i = 0; i < arrNum.length; i++) {
    if (isPrime(arrNum[i]) === true) {
      arrPrime.push(arrNum[i])
      prime = arrPrime.slice(0, 1)
    }
  }

  document.querySelector('#find-prime').innerHTML = `Số nguyên tố đầu tiên: ${prime}`
}
document.querySelector('#btn-prime').onclick = displayPrime

// Đếm số nguyên
let arrNum2 = []
// Thêm số và lưu vào mảng
function addNum2() {
  let n = Number(document.querySelector('#inputNum2').value)

  arrNum2.push(n)
  document.querySelector('#count-prime').innerHTML = `Mảng: ${arrNum2}`
}
document.querySelector('#btn-addNum2').onclick = addNum2
// Đếm
function countPrime() {
  let count = 0
  for (let i = 0; i < arrNum2.length; i++) {
    if (Number.isInteger(arrNum2[i]) === true) {
      count++
    }
  }
  console.log(count);
  document.querySelector('#count-prime2').innerHTML = `Đếm số nguyên: ${count}`

}
document.querySelector('#btn-prime2').onclick = countPrime

// So sánh số lượng số dương và số âm
function compareNum() {
  let countDuong = 0
  let countAm = 0
  let contents = ''
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      countDuong++
    } else if (arrNum[i] < 0) {
      countAm++
    }
  }

  if (countDuong > countAm) {
    contents = 'số dương > số âm'
  } else if (countDuong < countAm) {
    contents = 'số dương < số âm'
  } else {
    contents = 'số dương = số âm'
  }

  document.querySelector('#compareNum').innerHTML = contents
}
document.querySelector('#btn-compare').onclick = compareNum
