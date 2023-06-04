/* Your tasks:
Tasks are not super-descriptive this time, so that you can figure out some stuff by
yourself. Pretend you're working on your own �
PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input.
This function returns a promise which creates a new image (use
document.createElement('img')) and sets the .src attribute to the
provided image path
2. When the image is done loading, append it to the DOM element with the
'images' class, and resolve the promise. The fulfilled value should be the
image element itself. In case there is an error loading the image (listen for
the'error' event), reject the promise
3. If this part is too tricky for you, just watch the first part of the solution
PART 2
4. Consume the promise using .then and also add an error handler
5. After the image has loaded, pause execution for 2 seconds using the 'wait'
function we created earlier
6. After the 2 seconds have passed, hide the current image (set display CSS
property to 'none'), and load a second image (Hint: Use the image element
returned by the 'createImage' promise to hide the current image. You will
need a global variable for that �)
7. After the second image has loaded, pause execution for 2 seconds again
8. After the 2 seconds have passed, hide the current image
Test data: Images in the img folder. Test the error handler by passing a wrong
image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
otherwise images load too fast */

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

function imgElement(imgPath) {
  const element = document.createElement("img");
  element.src = imgPath;

  element.addEventListener("load", () => {
    document.body.appendChild(element);
    resolve(element);
  });

  element.addEventListener("error", () => {
    reject(new Error("image not found"));
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

createImage("Asynchronous/images/first.jpg")
  .then((element) => {
    return wait(2).then(() => {
      element.style.display = "none";
      return createImage("Asynchronous/images/second.jpg");
    });
  })
  .then((element) => {
    wait(2).then(() => {
      element.style.display = "none";
    });
  })
  .catch((err) => {
    alert(err);
  });
