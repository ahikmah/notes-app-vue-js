<template>
  <div id="app">
    <section class="left">
      <!-- note list -->
      <div class="logo">
        <a href="https://ahikmah.com">
          <h2>Aloka</h2>
          <span>Notes</span>
        </a>
      </div>

      <div class="frame-notes ">
        <button class="bg-success btn btn-new-note">+ New Note</button>
        <ListNotes :propNotes="notes" :propEditNote="editNote"/>
      </div>
    </section>

    <section class="right">
      <!-- editor -->
      <FormNotes :propSaveNote="saveNote" :propContent="dataForm"/>
    </section>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ListNotes from './components/ListNotes.vue'
import FormNotes from './components/FormNotes.vue'

export default {
  name: 'App',
  data: function() {
    return {
         notes: [],
         dataForm:{},
    }
  },
  components: {
       ListNotes,
       FormNotes
    // HelloWorld
  },
  methods: {
       newNote(){
            
       },
       saveNote(title, description) {
            const newNote = {
                 id: Math.random()*10,
                 title: title,
                 description: description
            }

            this.notes.push(newNote)
          //   console.log('props save note', title, description);
       },
       editNote(id){
            console.log(id);
            for (let i=0; i< this.notes.length; i++) {
                 if(id===this.notes[i].id)
                 this.dataForm = this.notes[i]
            }
            console.log(this.dataForm)
       }
  }
}
</script>

<style>

body{
     margin:0px;
     overflow:hidden;
}
#app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     color: #2c3e50;
     padding:0px;

     display:flex;
     width:100%;
}

.left{
     width: 400px;
     background: #f7f7f7;
     color: #616161;
}
.logo{
     padding: 25px 15px;
     border-bottom: 1px solid gainsboro;
}
.logo a{
     text-decoration:none;
}
.logo a h2{
     margin: 0px;
     display: inline;
     margin-right: 5px;
     font-size: 35px;
     text-transform: capitalize;
     color: #757575;
}
.logo a span{
     font-size: 12px;
     letter-spacing: 1px;
     text-transform: uppercase;
     color:#204051;
}
.frame-notes{
     overflow-y: scroll;
     overflow-x: hidden;
     height: 85vh;
}
.bg-success{
     background: #3B6978;
     color: white;
     outline:none;
}
.bg-success:hover{
     background:#84A9AC;
     color: white;
}
.bg-danger{
     background:#FF4848;
     color: white;
}
.bg-danger:hover{
     background:#FF6B6B;
}
.btn{
     border: none;
     font-size: 12px;
     text-align: center;
     letter-spacing: 1px;
     cursor: pointer;
     border-radius: 2px;
     padding: 7px 25px;
     outline:none;
}
.btn-new-note{
     width: 90%;
     padding: 12px 10px;
     margin: 10px 15px;
     text-align: left !important;
}

.right{
     width: 100%;
     overflow-y: scroll;
     height: 100vh;
     border-left: 1px solid gainsboro;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f7f7f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
