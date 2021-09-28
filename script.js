var fs = require("fs");
const path = "./Nodejs Project/main.json";

//add Note to the file.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("title: ", (name) => {
  readline.question("body: ", (body) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
      }
      const y = JSON.parse(data);
      let z = { title: name.toString(), body: body.toString() };

      y.push(z);
      console.log(y);
      fs.writeFile(path, JSON.stringify(y), (err) => {
        if (err) {
          console.log(err);
        }
        console.log("saved");
      });
    });
  });
});

//Delete note from the file.

fs.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
  }
  const y = JSON.parse(data);
  y.pop();
  console.log(y);
  fs.writeFile(path, JSON.stringify(y), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("saved");
  });
});

// display all the titles of the file
fs.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
  }
  const y = JSON.parse(data);
  let i;
  for (i = 0; i < y. length; i++) {
    console.log(y[i].title);
  }
});

//read the file
fs.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
  }
  const y = JSON.parse(data);
  console.log(y);
});
