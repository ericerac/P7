

// const FileUpload =  (event,inp) => {
//     console.log("EVENT ARG FILEUPLOAD MODUL", event,inp);
//     let inputSelected ="";
//     // let file = event.target.files[0];
//     let iR = inp.forEach((input, index) => {
//         let file = input.files[0]
//         console.log("FILE FILEUPLOAD MODUL", input.files[0],index);
//         if (file) {

//             inputSelected = index;
//         }
// return inputSelected
//       });
// }

// export default  FileUpload


// ***********************************************************
// ***********************************************************
    


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



// ***********************************************************
// ***********************************************************




const FileUpload =  ((event) => {
   
    var input = event.target;
    console.log("EVENT TARGET FILEUPLOAD MODUL", event.target);
    console.log("EVENT TARGET FILEUPLOAD MODUL", event);
    

    let fileSelected = "";
    let preview=""
    let filess="";

    var reader = new FileReader();
   


          

        reader.onload =  ((e) => {
               return preview = e.target.result;
                  console.log("EVENT TARGET RESULT MODUL", preview);
              
              })
              reader.readAsDataURL(input.files[0]);
                 
                  const data = 
              {
                  
                  fileName: event.target.files[0].name,
                   filePreview:reader.onload,
                   fileSelected: event.target.files[0],
                   
                  }
          return data
          
           
          
 
})

export default  FileUpload