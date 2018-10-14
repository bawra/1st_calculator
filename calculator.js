function myFunction() {
  var symbol = ["+", "-", "*", "/"];
  var nb1 = document.getElementById('number1');
  var nb2 = document.getElementById('number2');

  var number1;
  var number2;
  var action;
  var text;
  var result;

  switch (action) {
    case "+":
      {
        result = (number1 + number2);
        document.write("", result);
        break;
      }
    case "-":
      {
        result = (number1 - number2);
        document.write("", result);
        break;
      }
    case "*":
      {
        result = (number1 * number2);
        document.write("", result);
        break;
      }
    case "/"; {
      result = (number1 / number2);
      document.write("", result);
      break;
    }
    default:
      {
        document.write("Please select valid action ");
        break;
      }
  }
