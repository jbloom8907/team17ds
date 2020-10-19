var app = new Vue({
  el: '#dataPage',
  data: {
    memberList: [],
    memberUpdateList: [],
    activeMember: null,
    newMemberUpdateForm: {},
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
        radioNum: "",
        update: ""
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
    handleMemberDataForm( evt ) {
      this.newMemberUpdateForm.selection = this.activeMember.email;

      fetch('api/members/updatemember.php', {
        method:'POST',
        body: JSON.stringify(this.newMemberUpdateForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
    // TODO: test a result was returned!
        this.memberUpdateList.push(json[0]);
        this.newMemberUpdateForm = this.updateMemberData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newMemberUpdateForm);
    },
  },
  created() {
    fetch("api/members/")
    .then( response => response.json() )
    .then( json => {
      this.memberList = json;

      console.log(json)}
    );

    // fetch("api/updates/")
    // .then( response => response.json() )
    // .then( json => {
    //   this.memberUpdateList = json;
    //
    //   console.log(json)}
    // );

    this.newMemberForm = this.newMemberData();
    this.newMemberUpdateForm = this.updateMemberData();
  }
})
