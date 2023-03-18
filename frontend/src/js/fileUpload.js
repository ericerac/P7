

const FileUpload =  (event,inp) => {
    console.log("EVENT ARG FILEUPLOAD MODUL", event,inp);
    let inputSelected ="";
    // let file = event.target.files[0];
    let iR = inp.forEach((input, index) => {
        let file = input.files[0]
        console.log("FILE FILEUPLOAD MODUL", input.files[0],index);
        if (file) {

            inputSelected = index;
        }
return inputSelected
      });
}

// export default function FileUpload(event,inp) {
//     const isLoading = ref(true);
  
//     const onDownload = async () => {
//       isLoading.value = true;
//       try {
//         const { data } = await axios.post('/api/download', {id: id}, 
//        {responseType: 'blob'})
//           // handle the response
  
//       } catch (error) {
//         console.log(error);
//       } finally {
//         isLoading.value = false;
//       }
//     };
//      // invoke the function
//     onDownload();
  
//     return { // return your reactive data here };
//   }



// const FileUpload = async (event,inp) => {
//     console.log("EVENT ARG FILEUPLOAD MODUL", event,inp);
//     var input = event.target;
//     console.log("EVENT TARGET FILEUPLOAD MODUL", event.target);
//     if (input.files) {
//         var reader = new FileReader();
//         var preview ="";
//          reader.onload =  await ((e) => {
//            preview = e.target.result;
//             console.log("EVENT TARGET RESULT MODUL", preview);
        
//         })
//         let image = input.files[0];
//         await reader.readAsDataURL(input.files[0]);
//         console.log("INPUT FILE [0] MODUL", image);
//     }
//     let fileSelected = "";
//     let OnefileSelected = "";
//     let fileName = "";
//     const data =
//     {
//         fileSelected: event.target.files[0],
//         OnefileSelected: fileSelected.File,
//         fileName: OnefileSelected.name,
//         filePreview:preview,
        
//     }
//     console.log("RETURN DATA MODUL", data);
//     return data
// }

export default  FileUpload