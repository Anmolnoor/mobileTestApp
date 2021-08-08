import axios from 'axios';

// export const SignIn = FormData =>
//   axios
//     .post('https://localhost:5000/signin', FormData)
//     .then(response => {
//       //   const data = response.data.result;
//       //   localStorage.setItem('user', JSON.stringify(data));
//       console.log(response);
//       return response;
//     })
//     .catch(error => {
//       console.log(error.response);
//       return error.response;
//     });
// export const SignUp = FormData => {
//   // const history = useHistory();
//   axios
//     .post('http://localhost:5000/signup', FormData)
//     .then(response => {
//       // console.log(response);
//       return response;
//     })
//     .catch(error => {
//       console.log(error.response);
//       return error.response;
//     });
// };

export const SignIn = FormData =>
  axios
    .post('http://localhost:5000/signin', FormData)
    .then(response => {
      console.log('this is working from the Login Side');
      // const data = response.data.result;
      // localStorage.setItem('user', JSON.stringify(data));
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error.response);
      return error.response;
    });
export const SignUp = FormData => {
  // const history = useHistory();
  axios
    .post('http://localhost:5000/signup', FormData)
    .then(response => {
      // console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error.response);
      return error.response;
    });
};
