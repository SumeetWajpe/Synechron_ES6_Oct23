function GetData() {
  return new Promise((resolve, reject) => {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xmlHttpRequest.onreadystatechange = function () {
      if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
        resolve(xmlHttpRequest.responseText);
      } else if (
        xmlHttpRequest.readyState == 4 &&
        xmlHttpRequest.status !== 200
      ) {
        reject("Something went wrong - " + xmlHttpRequest.status);
      }
    };

    xmlHttpRequest.send(); // places the async call
  });
}
