import Compressor from 'compressorjs';



export default   function CompressFile(file) {
     
      let img = file
      let imageCompressed = "";
          
          
      const onFile = async (img) =>{
        console.log("FILE ASYNC",img);
        try {
           
            await  new Compressor(file, {
                  quality: 0.6,
              
                  // The compression process is asynchronous,
                  // which means you have to access the `result` in the `success` hook function.
                  success(result) {
              console.log("SUCCESS COMPRESSOR ",result);
              imageCompressed = result
              return result
            },
              error(err) {
                  console.log(err.message);
                  return err
                },
               
              });
    
        } catch (error) {
          console.log(error);
        } finally {
         
        }
        
      };
       // invoke the function
      onFile(img);
    
      return {imageCompressed} ;
    }

