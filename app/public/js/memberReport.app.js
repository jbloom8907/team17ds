var app = new Vue ({
  el: '#memberReport',
  data: {
    members: []
  },
created(){
  fetch('api/members/')
  .then (response => response.json() )
  .then( json => {
    this.members = json;
    console.log("Success")
    console.log(json)
  });
}
})
