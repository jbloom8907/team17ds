var app = new Vue({
  el: '#dataPage',
  data: {
    memberList: [],
    updateList: [],
    activeMember: null,
    newUpdateForm: {},
    newMemberForm: {}
  },
  computed: {
    activeMemberName() {
      return this.activeMember ? this.activeMember.lName + ', ' + this.activeMember.fName : ''
    }
  },
  methods: {
    newMemberData() {
      return {
        selection: "",
        dob: "",
        gender: "",
        phonePrimary: "",
        phoneSecondary: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        station: "",
        title: "",
        active: "",
        radioNum: ""
      }
    },
    updateMemberData() {
      return {
        dob: "",
        gender: "",
        phonePrimary: "",
        phoneSecondary: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        station: "",
        title: "",
        active: "",
        radioNum: ""
      }
    },

    handleNewMemberForm(evt) {
      fetch('api/members/newmember.php', {
        method:'POST',
        body: JSON.stringify(this.newMemberForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
    // TODO: test a result was returned!
        this.memberList.push(json[0]);
        this.newMemberForm = this.newMemberData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newMemberForm);
    },
    handleDataForm( evt ) {
      this.newUpdateForm.selection = this.activeMember.email;

      fetch('api/updates/updatemember.php', {
        method:'POST',
        body: JSON.stringify(this.newUpdateForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
    // TODO: test a result was returned!
        this.updateList.push(json[0]);
        this.newUpdateForm = this.updateMemberData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newUpdateForm);
    },
  },
  created() {
    fetch("api/members/")
    .then( response => response.json() )
    .then( json => {
      this.memberList = json;

      console.log(json)}
    );

    fetch("api/updates/")
    .then( response => response.json() )
    .then( json => {
      this.updateList = json;

      console.log(json)}
    );

    this.newMemberForm = this.newMemberData();
    this.newUpdateForm = this.updateMemberData();
  }
})
