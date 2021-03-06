var body = document.getElementsByTagName('body')[0];
var first = document.querySelectorAll('#first')[0];
var second = document.querySelectorAll('#second')[0];
var result = document.querySelectorAll('#result')[0];
var valid = ['0','1','2','3','4','5','6','7','8','9','+','-','.'];
var operators = document.querySelectorAll('#keypad button');
var focused;

first.addEventListener('keyup', handleKeyUp);
first.addEventListener('focus', handleFocus);
first.addEventListener('blur', handleBlur);

second.addEventListener('keyup', handleKeyUp);
second.addEventListener('focus', handleFocus);
second.addEventListener('blur', handleBlur);

for (var i = 0; i < operators.length; i++)
  operators[i].addEventListener('click', handleOperation);

function handleKeyUp(e) {
  console.log(e);
  var element = e.srcElement;
  var value = element.value;
  if (value == '0')
    element.value = '';

  var check = element.value;
  check = check[check.length - 1];
  element.value = (valid.indexOf(check) == -1) ? 
    element.value = element.value.substring(0, element.value.length - 1) : element.value = element.value;
}

function handleFocus(e) {
  var element = e.srcElement;
  focused = element;
  var value = element.value;
  if (value == '0')
    element.value = '';
}

function handleBlur(e) {
  var element = e.srcElement;
  focused = undefined;
  var value = element.value;
  if (value == '')
    element.value = '0';
}

function handleOperation(e) {
  var element = e.srcElement;

  var c1 = parseComplex(first.value);
  var c2 = parseComplex(second.value);
  var use = element.getAttribute('data-use');

  var c3 = new Complex(0,0);

  if (use == 'add')
    c3 = c1.add(c2);
  else if (use == 'sub')
    c3 = c1.subtract(c2);
  else if (use == 'mul')
    c3 = c1.multiply(c2);
  else if (use == 'div')
    c3 = c1.divide(c2);

  result.value = c3.toString();

}