process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
      let sum = "";
      for (i = 1; i <= b; i++) {
        if (i < b) {
          for (j = 1; j <= a; j++) {
            sum += "*"
          }
          sum += '\n'
        } else {
          for (j = 1; j <= a; j++) {
            sum += "*"
          }
        }
      }
    console.log(sum)
});

// 다른사람풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let result = "";
    for(let i=0;i<b;i++){
        for(let j=0;j<a;j++){
            result+=("*");
        }
        result+=("\n");
    }
    console.log(result);
});

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(var i = 1; i <= b; i++) {
        var star = "*";
        for(var j = 1; j < a; j++) {
            star += "*";
        }
        console.log(star);
    }
});

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) {
        console.log(generateStar(a))
    }
});

function generateStar(num) {
    let star = '*'
    let retVal = ''
    for (let i = 0; i < num; i++) {
        retVal += star
    }
    return  retVal
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let resultStr = ``;
    for (let i = 0; i < b; i++) { // rows
        if (i) resultStr += '\n'
        resultStr += '*'.repeat(a);
    }
    console.log(resultStr)
    return resultStr
});

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(var i=0; i<b; i++){
        var temp = ''
        for(var j=0; j<a; j++)
            temp += '*'
        console.log(temp)
    }
});