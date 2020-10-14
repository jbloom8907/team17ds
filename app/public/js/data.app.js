var app = new Vue({
  el: '#dataPage',
  data: {
    memberList: [],
    activeMember: null,
    dataForm: {},
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
    newFormData() {
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
      console.log("Edit form submitted!");

      if (!this.activeMember) {
        alert("ERROR: No member selected!");
        return false;
      }

      fetch('api/updates/memberData.php', {
        method:'POST',
        body: JSON.stringify(this.dataForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from member data:", json);
        this.newFormData.push(json[0]);
        this.dataForm = this.newFormData();
      });
    }
  },
  created() {
    fetch("api/members/")
    .then( response => response.json() )
    .then( json => {
      this.memberList = json;

      console.log(json)}
    );

    this.newMemberForm = this.newMemberData();
  }
})
