console.log('Run 10 times');
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log('\nOdd numbers only: ');
for (var j = 0; j < 50; j++) {
  if (j % 2 !== 0) {
    console.log(j);
  }
}

console.log('\nindex variables by 2');
for (var a = 0; a < 10; a++) {
  console.log(a * 2);
}
console.log('\nBomb Timer');
for (var k = 100; k > 0; k--) {
  console.log('Time till explosion ' + k + '!');
}
console.log('BOOM!');
