// const initialState={
//     companyLogo : null,
//     SquareLogo : null,
//     Favicon : null,
// }

// export const brandingLogo = (state = initialState, action) => {
//     switch(action.type)
//     {
//         case "GET_COMPANY_LOGO":
//             return {
//                 ...state,
//                 companyLogo:action.payload
//             }
//         default :
//             return {
//                 ...state
//             }
//     }
// }

const initialState = {
    companyLogo: null,
    SquareLogo: null,
    Favicon: null
}

export const brandingLogo = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COMPANY_LOGO": return {
            ...state,
            companyLogo: action.payload
        }
        default: return {
            ...state
        }
    }
}