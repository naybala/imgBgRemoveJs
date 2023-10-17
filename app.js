var image = document.getElementById("testImage");
const toDataURL = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
toDataURL("./imgs/test_img.jpg").then((dataUrl) => {
  image.setAttribute("src", dataUrl);
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.height = canvas.width = 1000;
  ctx.drawImage(image, 0, 0);

  var imgd = ctx.getImageData(0, 0, 1000, 1000);
  var pix = imgd.data;
  var newColor = { r: 0, g: 0, b: 0, a: 0 };

  for (var i = 0, n = pix.length; i < n; i += 4) {
    var r = pix[i],
      g = pix[i + 1],
      b = pix[i + 2],
      a = pix[i + 3];
    // console.log(a);

    if (r > 180 && g > 180 && b > 180 && a > 180) {
      // Change the white to the new color.
      pix[i] = newColor.r;
      pix[i + 1] = newColor.g;
      pix[i + 2] = newColor.b;
      pix[i + 3] = newColor.a;
    }
  }

  ctx.putImageData(imgd, 0, 0);
});
