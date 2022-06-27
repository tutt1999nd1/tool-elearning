var selectedFile;
var arr=[];
document
    .getElementById("fileUpload")
    .addEventListener("change", function(event) {
        selectedFile = event.target.files[0];
    });
document
    .getElementById("uploadExcel")
    .addEventListener("click", function() {
        let answers={answers:[]}
        if (selectedFile) {
            var fileReader = new FileReader();
            fileReader.onload = function(event) {
                var data = event.target.result;

                var workbook = XLSX.read(data, {
                    type: "binary"
                });
                let rowObject;
                workbook.SheetNames.forEach(sheet => {
                    rowObject = XLSX.utils.sheet_to_row_object_array(
                        workbook.Sheets[sheet]
                    );
                    let jsonObject = JSON.stringify(rowObject);
                    document.getElementById("jsonData").innerHTML = jsonObject;
                });
                console.log("rowObject",rowObject)
                for (let i = 1 ;i<rowObject.length;i++){
                    let q = {
                        q:rowObject[i].__EMPTY,
                        a:[]
                    }
                    if((rowObject[i].__EMPTY_1+"").includes("1")){
                        q.a.push(rowObject[i].__EMPTY_2+"")
                    }
                    if((rowObject[i].__EMPTY_1+"").includes("2")){
                        q.a.push(rowObject[i].__EMPTY_3+"")
                    }
                    if((rowObject[i].__EMPTY_1+"").includes("3")){
                        q.a.push(rowObject[i].__EMPTY_4+"")
                    }
                    if((rowObject[i].__EMPTY_1+"").includes("4")){
                        q.a.push(rowObject[i].__EMPTY_5+"")
                    }

                    answers.answers.push(q)
                }

                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    chrome.tabs.executeScript(tabs[0].id,
                        { code: `alert('tutt20')` })
                })
            };
            fileReader.readAsBinaryString(selectedFile);

        }

    });
function greet(greeting) {
    alert(`${greeting}, World!`);
}



// for (let i = 0 ;i <)
const convert = (a,q) => {
    console.log("arrr",arr)
    //   console.log("arr,",arr)
    // let array = []
    //   for (let i =0;i<arr[0].length;i++){
    //       let ob = arr[0][i]
    //       // console.log(ob)
    //   }
}