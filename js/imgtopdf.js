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
  if (!newimg) {
    alert("Please upload img first!");
    // ! out ka code tway a lote ma lote say chin loa return pyan htr tar
    return;
  }
  console.log("pdf is working...");
}
