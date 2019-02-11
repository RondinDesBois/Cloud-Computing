<template>
  <div class="tchat">
		<msg v-for="msg in msgs" :msg='msg'/>
		    <input class="new-messages"
      	autofocus autocomplete="off"
      	placeholder="Messages"
      	v-model="newMsg"
      	@keyup.enter="addMsg">
  </div>
</template>

<script>
import msg from './msg.vue'
export default {
  name: 'tchat',
  props: {
    msg: String
  },
   components: {
    msg
  },
  data () {
  			return  {
  				msgs: Array,
  				newMsg: String
  			}
		},
	methods: {
	  	addMsg: function () {
	      var value = this.newMsg && this.newMsg.trim()
	      if (!value) {
	        return
	      }
	      this.msgs.push(value)
	      this.newMsg = ''
	   }
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .tchat {
  background-color: yellow;
}
</style>
