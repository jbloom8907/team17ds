var app = new Vue({
    el: '#dataPage',
    data: {
      memberCertificationList: [],
      memberCertificationUpdateList: [],
      activeMemberCertification: null,
      newMemberCertificationUpdateForm: {},
      newMemberCertificationForm: {}
    },
    computed: {
      activeMemberCertificationName() {
        return this.activeMemberCertification ? this.activeMemberCertification.lName + ', ' + this.activeMemberCertification.fName : ''
      }
    },
    methods: {
      newMemberCertificationData() {
        return {
          selection: "",
          fName: "",
          lName: "",
          certName: "",
          expiryDate: ""
        }
      },
      updateMemberCertificationData() {
        return {
          fName: "",
          lName: "",
          certName: "",
          expiryDate: "",
          update: ""
        }
      },
      handleNewMemberCertificationForm(evt) {
        fetch('api/memberCertifications/newmembercertification.php', {
          method:'POST',
          body: JSON.stringify(this.newMemberCertificationForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
      // TODO: test a result was returned!
          this.memberCertificationList.push(json[0]);
          this.newMemberCertificationForm = this.newMemberCertificationData();
        });
        console.log("Creating (POSTing)...!");
        console.log(this.newMemberCertificationForm);
      },
      handleMemberCertificationDataForm( evt ) {
        this.newMemberCertificationUpdateForm.selection = this.activeMemberCertification.fName + ' ' + this.activeMemberCertification.lName;
        fetch('api/memberCertifications/updatemembercertification.php', {
          method:'POST',
          body: JSON.stringify(this.newMemberCertificationUpdateForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
      // TODO: test a result was returned!
          this.memberCertificationUpdateList.push(json[0]);
          this.newMemberCertificationUpdateForm = this.updateMemberCertificationData();
        });
        console.log("Creating (POSTing)...!");
        console.log(this.newMemberCertificationUpdateForm);
      },
    },
    created() {
      fetch("api/memberCertifications/")
      .then( response => response.json() )
      .then( json => {
        this.memberCertificationList = json;
        console.log(json)}
      );
      this.newMemberCertificationForm = this.newMemberCertificationData();
      this.newMemberCertificationUpdateForm = this.updateMemberCertificationData();
    }
  })