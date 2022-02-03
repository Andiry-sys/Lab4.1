function AddColors(numberOfColors, groups) {
  let blocks = document.querySelectorAll('.block'),
    colors = groups.reduce(function (arr, n) {
      let x = Math.floor(Math.random() * numberOfColors);
      while (arr.indexOf(x) >= 0) {
        x = (x + 1) % numberOfColors;
      }
      return arr.concat(Array(n).fill(x));
    }, []);
  Array.from(blocks).forEach(function (block, idx) {
    block.classList.add('color' + colors[idx]);
  });
}
