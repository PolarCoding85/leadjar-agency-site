import Axios from "axios";

export const getCompanyLogo = () => {
  const email = localStorage.getItem("userdata");
  return (dispatch) => {
    Axios.post(`${process.env.REACT_APP_API_URL}v1.0/agency/brandinglogo/getcompanylogo`,{ email }).then((res) => {
        if (res.data.data) {
          dispatch({
            type: "GET_COMPANY_LOGO",
            payload: res.data.data.companyLogo,
          });
        } else {
          dispatch({ 
              type: "GET_COMPANY_LOGO",
               payload: null 
            });
        }
      }).catch((err) => {
        console.log("Error", err);
      });
  };
};

// export const getCompanyLogo = () => {
//     const email = localStorage.getItem('userdata')
//     return (dispatch) => {
//         Axios.post(`${process.env.REACT_APP_API_URL}v1.0/agency/brandinglogo/getcompanylogo`, { email }).then((res) => {
//             if (res.data.data) {
//                 dispatch({ type: "GET_COMPANY_LOGO", payload: res.data.data.companyLogo })
//             } else {
//                 dispatch({ type: "GET_COMPANY_LOGO", payload: null })
//             }
//         }).catch((err) => {
//             console.log("Error", err);
//         })
//     }
// }

