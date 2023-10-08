function GetData(callback) {
  let xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");

  xmlHttpRequest.onreadystatechange = function () {
    if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
      callback(null, xmlHttpRequest.responseText);
    } else if (
      xmlHttpRequest.readyState == 4 &&
      xmlHttpRequest.status !== 200
    ) {
      callback("Something went wrong - " + xmlHttpRequest.status, null);
    }
  };

  xmlHttpRequest.send(); // places the async call
}
