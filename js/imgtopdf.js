let display = document.getElementById("display"),
  getfileinput = document.getElementById("fileinput");

let newimg = null;

getfileinput.addEventListener("change", function (e) {
  // console.log("hello world");
  // console.log(e.target.value); // C:\fakepath\img1.jpg
  // console.log(e.target.files); // ? Filelist array
  let files = e.target.files[0];
  // console.log(files); // File {name: 'upload.png', lastModified: 1761587032218, lastModifiedDate: Tue Oct 28 2025 00:13:52 GMT+0630 (Myanmar Time), webkitRelativePath: '', size: 38819, …}

  // ? a paw ka files ma shi buu so yin out ka code tway ko sat a lote ma lote nae top pyaw tar

  //? Method 1
  // if(!files){
  // 	return true;
  // }

  //? Method 2
  if (!files) return;

  // ? it creates a temporary object URL(e.g:blob:http://...) stored in memory(RAM). It is not a real file on disk. it's just a memory-based reference.
  const imgURL = URL.createObjectURL(files);
  console.log(imgURL); // blob:null/78ca6b4c-9d8c-4a58-ae70-1a945de18764

  //? Method 1
  // newimg = document.createElement("img");

  //? Method 2
  newimg = new Image();
  newimg.src = imgURL;

  //! Memory paw mar pyut tar nay yar ma sar aung loa
  newimg.onload = () => {
    URL.revokeObjectURL(imgURL);
  };
  console.log(newimg);

  display.src = imgURL;
});

function pdfloader() {
  // todo 1. Check if image is exists or not
  if (!newimg) {
    alert("Please upload img first!");
    // ! out ka code tway a lote ma lote say chin loa return pyan htr tar
    return;
  }
  // console.log("pdf is working...");

  // todo 2. Import package and instance
  // ! import lote tat nii
  const { jsPDF } = window.jspdf;

  // ? Default export is a4 paper, portrait using millimeters for units
  const doc = new jsPDF({
    orientation: "landscape", //? portrait
    unit: "mm",
  });

  // todo 3. Create canvas as image actual dimension
  const canvas = document.createElement("canvas");
  canvas.width = newimg.naturalWidth;
  canvas.height = newimg.height;
  console.log(canvas);

  // todo 4. Draw image on canvas
  // ? drawing contex
  const ctx = canvas.getContext("2d");
  ctx.drawImage(newimg, 0, 0); // ? parameter 5 khu hti pay loa ya tal => (img,dx,dy) ==> dx = destination x ,dy = destination y;
  console.log(ctx); // ? CanvasRenderingContext2D

  // todo 5. Convert canvas to jpeg(Quality 0 to 1)
  const imgdata = canvas.toDataURL("image/jpeg", 1); //? 3 khu pay loa ya tal ==> image/jpeg, image/webp, image/png

  // todo 6. Download img to pdf => parameter = (image,x-coordinate,y-coordinate,width,height)
  doc.addImage(imgdata, 10, 10, 200, 80);
  doc.save("newimagefile.pdf");
}

// console.log(window.jspdf);
// console.log(window.jspdf.jsPDF);

// todo Method 1
// let jspdfObj = window.jspdf.jsPDF;
// console.log(jspdfObj);

// todo Method 2 ==> Object destructuring
// let { jsPDF } = window.jspdf;
// console.log(jsPDF);
