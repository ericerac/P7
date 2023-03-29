<template >
    <div class="btn_action">


<button class="btn btn_up btn_all" @click="$emit('updateImg')">Update</button>
<button class="btn btn_cancel btn_all" @click="$emit('cancelFileSelected')">Cancel</button>
<button class="btn btn_del btn_all" @click="$emit('delImg')">Delete</button>
</div>
</template>