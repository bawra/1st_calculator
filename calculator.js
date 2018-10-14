function myFunction() {

  var nb1 = document.getElementById('number1').value;
  nb1 = Number(nb1);
  var nb2 = document.getElementById('number2').value;
  nb2 = Number(nb2);
  var action = document.getElementById('action').value;

  console.log(action, nb1, nb2);
  var result = 1;
  switch (action) {
    case "+":
      {
        result = (nb1 + nb2);
        alert("The result of addition is " + result);
        break;
      }
    case "-":
      {
        result = (nb1 - nb2);
        alert("The result of substraction is " + result);
        break;
      }
    case "*":
      {
        result = (nb1 * nb2);
        alert("The result of multiplication is " + result);
        break;
      }
    case "/": {
      result = (nb1 / nb2);
      alert("The result of division is " + result);
      break;
    }
    default:
      {
        alert("Please select valid action ");
        break;
      }
  }
  console.log(result);
}
