

const FileUpload =  (event) => {
    console.log("EVENT ARG FILEUPLOAD MODUL", event);
    var input = event.target;
    console.log("EVENT TARGET FILEUPLOAD MODUL", event.target);
    if (input.files) {
        var reader = new FileReader();
        var preview ="";
         reader.onload =  ((e) => {
           preview = e.target.result;
            console.log("EVENT TARGET RESULT MODUL", preview);
        //    ne charge pas preview a temps
        })
        let image = input.files[0];
        reader.readAsDataURL(input.files[0]);
        console.log("INPUT FILE [0] MODUL", image);
    }
    let fileSelected = "";
    let OnefileSelected = "";
    let fileName = "";
    const data =
    {
        fileSelected: event.target.files[0],
        OnefileSelected: fileSelected.File,
        fileName: OnefileSelected.name,
        filePreview:preview,
        // Preview passe vide , l'info arrive apres l'envoi de data
    }
    console.log("RETURN DATA MODUL", data);
    return data
}

export default FileUpload