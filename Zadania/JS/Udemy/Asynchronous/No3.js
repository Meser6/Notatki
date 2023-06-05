/* Your tasks:
PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2, this time
using async/await (only the part where the promise is consumed, reuse the
'createImage' function from before)
2. Compare the two versions, think about the big differences, and see which one
you like more
3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab
PART 2
1. Create an async function 'loadAll' that receives an array of image paths
'imgArr'
2. Use .map to loop over the array, to load all the images with the
'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array �
5. Add the 'parallel' class to all the images (it has some CSS styles)
Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function
GOOD LUCK � */

// TODO

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const element = document.createElement("img");
    element.src = imgPath;

    element.addEventListener("load", () => {
      document.body.appendChild(element);
      resolve(element);
    });
    element.addEventListener("error", () => {
      reject(new Error("image not found"));
    });
  });
}

async function loadNPause() {
  try {
    const firstElement = await createImage("Asynchronous/images/first.jpg");
    await wait(2);
    firstElement.style.display = "none";
    const secondElement = await createImage("Asynchronous/images/second.jpg");
    await wait(2);
    secondElement.style.display = "none";
  } catch (err) {
    alert(err);
  }
}

//2

async function loadAll(imgArr) {
  try {
    console.log(Promise.all(imgArr));
  } catch (err) {
    alert(err);
  }
}

(async function () {
  try {
    await loadAll([
      "Asynchronous/images/first.jpg",
      "Asynchronous/images/second.jpg",
    ]);
  } catch (err) {
    alert(err);
  }
})();
//loadAll(["Asynchronous/images/first.jpg", "Asynchronous/images/second.jpg"]);
