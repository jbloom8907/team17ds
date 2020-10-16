var app = new Vue({
  el: '#dataPage',
  data: {
    certificationList: [],
    certificationUpdateList: [],
    activeCertification: null,
    newCertificationUpdateForm: {},
    newCertificationForm: {}
  },
  computed: {
    activeCertificationName() {
      return this.activeCertification ? this.activeCertification.name: ""
    }
  },
  methods: {
    newCertificationData() {
      return {
        selection: "",
        agency: "",
        name: "",
        standardExpiry: ""
      }
    },
    updateCertificationData() {
      return {
        agency: "",
        name: "",
        standardExpiry: "",
        update: ""
      }
    },

    handleNewCertificationForm(evt) {
      fetch('api/certifications/newCertification.php', {
        method:'POST',
        body: JSON.stringify(this.newCertificationForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
    // TODO: test a result was returned!
        this.certificationList.push(json[0]);
        this.newCertificationForm = this.newCertificationData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCertificationForm);
    },
    handleCertificationDataForm( evt ) {
      this.newCertificationUpdateForm.selection = this.activeCertification.name;

      fetch('api/updates/updateCertification.php', {
        method:'POST',
        body: JSON.stringify(this.newCertificationUpdateForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
    // TODO: test a result was returned!
        this.certificationUpdateList.push(json[0]);
        this.newCertificationUpdateForm = this.updateCertificationData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCertificationUpdateForm);
    },
  },
  created() {
    fetch("api/certifications/")
    .then( response => response.json() )
    .then( json => {
      this.certificationList = json;

      console.log(json)}
    );

    fetch("api/updates/")
    .then( response => response.json() )
    .then( json => {
      this.certificationUpdateList = json;

      console.log(json)}
    );

    this.newCertificationForm = this.newCertificationData();
    this.newCertificationUpdateForm = this.updateCertificationData();
  }
})
