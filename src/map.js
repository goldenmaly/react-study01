const arr = [10, 20, 30, 40, 50];

// 화살표 함수로 작성
arr.map((item, index)=>{
    console.log(index+'번 값', item);
})

// forEach ex
arr.forEach((item, index)=>{
    console.log(`${index}번 값, ${item}`)
})