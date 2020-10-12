var app = new Vue({
  el: '#dataPage',
  data: {
    memberList: [],
    activeMember: null,
  },
  methods: {
    newMemberData() {
      return {
        fName: "",
        lName: "",
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
      fetch('dummy/member-list.php', {
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
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newMemberForm);

      this.newMemberForm = this.newMemberData();
    },
    handleDataForm( evt ) {
      console.log("Form submitted!");

      this.dataForm.member = this.activeMember;
      console.log(this.dataForm);
    }
  },
  created() {
    fetch("dummy/member-list.php")
    .then( response => response.json() )
    .then( json => {
      this.memberList = json;

      console.log(json)}
    );

    this.newMemberForm = this.newMemberData();
  }
})
