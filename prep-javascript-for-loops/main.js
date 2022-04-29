// create your loops here.
var str = '';

for (var i = 0; i < 10; i++) {
  str = str + i;
  console.log('loop1', i);
}

for (var x = 0; x < 20; x = x + 2) {
  str = str + x;
  console.log('loop2', x);
}

var str3 = 'Time till explosion:';

for (var i = 100; i; i--) {
  str3 = 'Time till explosion:' + i;
  console.log(str3);
}
