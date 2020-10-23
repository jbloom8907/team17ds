var app = new Vue ({
  el: '#certificationDetailed',
  data: {
    certifications: [],
    newMemberCertificationForm: {},
    memberCertifications: []
  },
  methods: {
    newMemberCertificationData() {
      return {
        selected: ""
      }
    },
      createView() {
        fetch('api/memberCertifications/certificationDetailed.php', {
        method: "POST",
        body: JSON.stringify(this.newMemberCertificationForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then (response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.memberCertifications =json;
        this.newMemberCertificationForm = this.newMemberCertificationData();
      });
      console.log(this.newMemberCertificationForm);
    },
},
created(){
  fetch('api/certifications/')
  .then (response => response.json() )
  .then( json => {
    this.certifications = json;
    console.log("Success")
    console.log(json)
  });
  this.newMemberCertificationForm = this.newMemberCertificationData();
}
})
