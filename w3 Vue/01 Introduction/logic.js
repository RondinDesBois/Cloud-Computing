

  function isNotNumericValue(value) {
    return isNaN(value) || !isFinite(value);
  }

	function addtext(){
		if (document.createTextNode){
			var textToAdd = localStorage.getItem('res')
			var newNode = document.createTextNode(textToAdd);
			document.getElementById("mydiv").appendChild(newNode);
		} else {
			alert("Looks like you have an old browser!");
		}
	}

var calc = new Vue({
	      el: '#app',
	      data: { x: 0, y: 0, lastResult: 0 },

	    //   watch: {
			  //   results: {
			  //     handler: function (results) {
			  //       resultStorage.save(results)
			  //     },
			  //     deep: true
			  //   }
  			// },
	      computed: {
	        result: function() {
	          // let x = parseFloat(this.x);
	          // if(isNotNumericValue(x))
	          // return this.lastResult;

	          // let y = parseFloat(this.y);
	          // if(isNotNumericValue(y))
	          // return this.lastResult;
	          //this.lastResult = x + y;
						addtext()
	          return this.lastResult;
	        }
	      },

	      methods: {
		      multiply: function () {

						let x = parseFloat(this.x);
	          if(isNotNumericValue(x))
	          return this.lastResult;

	          let y = parseFloat(this.y);
	          if(isNotNumericValue(y))
	          return this.lastResult;

	          const aResult = {
    					x: this.x,
    					y: this.y,
    					result: this.lastResult,
    					opp: "multiply"
						};
						localStorage.setItem('res', JSON.stringify(aResult));

						return this.lastResult = x*y;
					},
					divide: function () {
						let x = parseFloat(this.x);
	          if(isNotNumericValue(x))
	          return this.lastResult;

	          let y = parseFloat(this.y);
	          if(isNotNumericValue(y))
	          return this.lastResult;

	          const aResult = {
    					x: this.x,
    					y: this.y,
    					result: this.lastResult,
    					opp: "divide"
						};
						localStorage.setItem('res', JSON.stringify(aResult));


						return this.lastResult = x/y;
					}
	      }
			});