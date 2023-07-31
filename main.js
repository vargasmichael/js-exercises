function factoral(n) {
  if (n == 0) {
    return 1;
  } else {
    return factoral(n - 1) * n;
  }
}
console.log(factoral(8));
