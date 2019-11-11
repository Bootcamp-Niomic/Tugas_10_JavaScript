// ====== Tugas 10 JavaScript =====

var a = 0;
var b = 1;
var c = "";

for(var i=0; i<10; i++) {
  c = a + b;
  a = c;
  b++;
  console.log(c)
}