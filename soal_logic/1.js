let soal1a = [10, 20, 20, 10, 10, 30, 50, 10, 20]
let soal1b = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]
let soal1c = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]

function countSocks(arr) {
    // set a init value
    let count_pairs = 0
    let same_obj = {}
    // iterate, if same, count
    arr.forEach((item) => {
        if (same_obj[item]) {
            count_pairs += 1
            same_obj[item] = 0
        }
        else {
            same_obj[item] = 1
        }
    })
    return count_pairs
}
console.log(countSocks(soal1a))
console.log(countSocks(soal1b))
console.log(countSocks(soal1c))