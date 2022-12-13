function solution(sizes) {
  let num = sizes.map((x)=> x.sort((a, b)=> a-b))
  let width = 0
  let height = 0
  num.filter((n, i) => width <= num[i][0] ? width = num[i][0] : width = width)
  num.filter((n, i) => height <= num[i][1] ? height = num[i][1] : height = height)
  return width * height
}
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))

// 다른사람 풀이
function solution(sizes) {
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
  return hor * ver;
}

function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach(s => {
      const [a, b] = s.sort((a,b) => a-b);
      if (a > h) h = a;
      if (b > w) w = b;
  });

  return w * h;
}

function solution(sizes) {
  const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
      if (w > maxSize[0]) maxSize[0] = w;
      if (h > maxSize[1]) maxSize[1] = h;
  })
  return maxSize[0]*maxSize[1];
}

function solution(sizes) {
  sizes.map((item) => item.sort((a, b) => b - a));
  let hMax = Math.max.apply(null, sizes.map((item) => item[0]));
  let vMax = Math.max.apply(null, sizes.map((item) => item[1]));
  return hMax * vMax;
}

function solution(sizes) {
  const newSizes = sizes.map(e => e.sort((a, b) => a - b));
  return Math.max(...newSizes.map(e => e[0])) * Math.max(...newSizes.map(e => e[1]));
}

function solution(sizes) {
  let horizontal = 1;
  let vertical = 1;
  sizes.forEach((el) => {
      if(horizontal < Math.max(...el)) horizontal=Math.max(...el);
      if(vertical < Math.min(...el)) vertical=Math.min(...el)
  })
  return horizontal*vertical
}

function solution(sizes) {
  for (let size of sizes) {
      size.sort((a, b) => a - b);
  }
  const a = sizes.sort((a, b) => b[0] - a[0])[0][0];
  const b = sizes.sort((a, b) => b[1] - a[1])[0][1];

  return a * b;
}

function solution(sizes) {
  return sizes
          .map(([w, h]) => [w > h ? w : h, w > h ? h : w])
          .reduce((m, [w, h]) => {
              m[0] = Math.max(m[0], w);
              m[1] = Math.max(m[1], h);
              return m;
          }, [0, 0])
          .reduce((a, b) => a * b);
}

function solution(sizes) {
  const [x, y] = sizes.reduce((max, t) => [Math.max(max[0], t[0], t[1]), Math.max(max[1], Math.min(t[0], t[1]))], [0, 0])
  return x * y
}

function solution(sizes) {
  let size1 = [];
  let size2 = [];
  for(let card of sizes){
      card.sort((a,b)=>a-b)
      size1.push(card[0])
      size2.push(card[1])
  }
  return Math.max(...size1) * Math.max(...size2) 
}

var solution = sizes => Math.max(...sizes.map(x => Math.max(x[0], x[1]))) * Math.max(...sizes.map(x => Math.min(x[0], x[1])))

function solution(sizes) {
  let answer = 0;
  let maxLong = 0;
  let maxShort = 0;

  sizes.forEach(size => {
      if (Math.max(size[0],size[1]) > maxLong) {
          maxLong = Math.max(size[0],size[1]);
      }
      if (Math.min(size[0],size[1]) > maxShort) {
          maxShort = Math.min(size[0],size[1]);
      }
  });
  answer = maxLong * maxShort;
  return answer;
}