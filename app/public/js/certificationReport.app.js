var app = new Vue ({
  el: '#expiryReport',
  data: {
    memberCertifications: []
  },
created(){
  fetch('api/memberCertifications/expired.php')
  .then (response => response.json() )
  .then( json => {
    this.memberCertifications = json;
    console.log("Success")
    console.log(json)
  });
}
})
