<template>
    <div class="img_card">
              <template v-if="preview && index === inputSelected">
                <!-- <p class="mb-0 img_preview">file name: {{ image.name }}</p> --> -->
                 <img :src="preview" class="img_diapo" />

              </template>
              <!-- <img v-else class="img_diapo" :src="img.imageUrl" alt=""> -->
              <!-- <p> image{{ index + 1 }} </p> -->

              <label for="image" class="btn_upload">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                    <path
                      d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                    </path>
                  </svg>
                </figure> 
                <input class="btn_upload_file" type="file" name="image" id="image" ref="file" @change="$emit('fileUpload',event)"
                  accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" />
                 <!-- <span class="fileName" v-if="fileName && index === inputSelected">{{ fileName }}</span>  -->
              </label>
              

              <div class="btn_action">
                <div class="btn_update">

                  <label for="submit"></label>
                  <input type="button" name="submit" class="btn btn_up btn_all" keyUp="enter" value="Create"
                    @click="createImg()">
                </div>
                <div class="btn_update">
                  <label for="retour"></label>
                  <input type="button" name="retour" class="btn btn_del btn_all" keyUp="enter" value="Cancel File"
                    @click="cancelFileSelected()">
                </div>
                <div class="btn_update">
                  <label for="retour"></label>
                  <input type="button" name="retour" class="btn btn_del btn_all" keyUp="enter" value="Close"
                    @click="$emit('close',false)">
                </div>
              </div>
            </div>
</template>
<script>
export default {

  data: function () {
    return {
      fileName: "",
      fileSelected: "",
      preview: "",
    }
  },
  props:{
    preview:String
  },
  method:{
    async fileUpload(event) {
      // $emit('fileUpload',event)
      let that = this;
      // let inp = document.querySelectorAll('input[type=file]');
// console.log("INPUT SELECTED",inp);
console.log("EVENT SELECTED",event);
      // let inp1 = document.querySelector('input[type=file]').files[0];

      // let iR = inp.forEach((input, index) => {
        // let files = input.files[0];
        let File = event.target.files[0];
        // if (files) {
        //   console.log("INPUT SELECTED",index);
        //   this.inputSelected = index;
        // }

      // });

      // var input = event.target;
      // if (input.files) {
      if (File) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
      }


      // ************ DONE **********************************

    
      this.fileName = File.name

      new Compressor(File, {
        quality: 0.6,
        success(result) {
          console.log("SUCCESS COMPRESSOR", result);
          that.fileSelected = result
        },
        error(err) {
          console.log(err.message);
        },
      });

    },

    cancelFileSelected(event) {
      this.fileSelected = "";
      this.fileName = "";
      this.preview = "";
      console.log("CANCEL FILE IMAGE SELECTED", this.fileSelected, this.fileName);
    },
  },
}

</script>
<style scoped>
.img_card{
  margin:0 auto;
  width:350px;
  height:auto;
  border:1px solid blue;
  background-color: rgb(253, 165, 59);
}
</style>
