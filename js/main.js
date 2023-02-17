// TRACCIA
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// BONUS
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

// VUE
const { createApp } = Vue;

createApp({
  data() {
    return {
      randomEmails: [],
    };
  },

  methods: {
    printInPage() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            // console.log(resp.data.response);
            if (this.randomEmails.length < 10) {
              // console.log(randomEmails);
              this.randomEmails.push(resp.data.response);
            }
          });
      }
    },
  },
}).mount("#root");

// AXIOS
// randomEmails = [];

// for (let i = 0; i < 10; i++) {
//   axios
//     .get("https://flynn.boolean.careers/exercises/api/random/mail")
//     .then((resp) => {
//       // console.log(resp.data.response);
//       randomEmails.push(resp.data.response);

//       if (randomEmails.length >= 10) {
//         console.log(randomEmails);
//       }
//     });
// }
