import { React ,useContext}from 'react';
import { DarkModeContext } from './Context/UseContext'
export default function Svg() {
  const {DarkMode}=useContext(DarkModeContext)
const Links=[
  {name:'Background',icon:(<svg data-v-928ccbd9="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.25V5C11.25 4.58579 11.5858 4.25 12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H12.75V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H11.25Z" fill="currentColor"></path></svg>)},
  {name:'Erase/Restore',icon:(<svg data-v-928ccbd9="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3739 3.43643C17.713 3.2791 18.0803 3.19194 18.4539 3.18018C19.2072 3.17152 19.9333 3.4615 20.4735 3.98672C20.742 4.25215 20.9537 4.56951 21.0955 4.91944C21.2374 5.26929 21.3065 5.64437 21.2986 6.02179C21.2877 6.39455 21.2015 6.76125 21.0453 7.09987C20.8889 7.43874 20.6656 7.74248 20.3888 7.99281L12.2883 15.2908L12.2927 15.4077C12.2951 15.4718 12.299 15.524 12.3025 15.571C12.3049 15.6028 12.3071 15.6323 12.3085 15.6615C12.3099 15.6941 12.3105 15.7269 12.3099 15.76C12.3097 15.7664 12.3094 15.7729 12.3091 15.7795C12.2284 16.5697 11.991 17.336 11.6108 18.0335C11.2295 18.7329 10.7123 19.349 10.0896 19.8458L10.0865 19.8483C9.27645 20.5159 8.24871 20.8622 7.19979 20.8214C5.78367 20.7688 4.39356 20.4251 3.11616 19.8115C3.0102 19.7589 2.9182 19.6819 2.84768 19.5868C2.7769 19.4914 2.72978 19.3806 2.71023 19.2634C2.69068 19.1462 2.69924 19.0261 2.73521 18.9128C2.77022 18.8027 2.83021 18.7021 2.91046 18.619C3.30405 18.2811 3.62429 17.8662 3.85139 17.3997C4.0796 16.931 4.20885 16.4203 4.23114 15.8995C4.29057 15.0811 4.52903 14.2857 4.92965 13.5695C5.26569 13.0528 5.71262 12.6174 6.238 12.295C6.76563 11.9712 7.359 11.7696 7.97466 11.7049L7.97636 11.7047C8.46692 11.6497 8.96349 11.6905 9.4385 11.8248L9.60144 11.8709L9.70468 11.7367C9.71896 11.7181 9.72901 11.7004 9.73544 11.6879L16.4799 4.09686C16.7303 3.81864 17.0344 3.59398 17.3739 3.43643ZM11.8213 13.6866L19.3858 6.87804C19.5118 6.76452 19.6135 6.62648 19.6845 6.47244C19.7555 6.31839 19.7944 6.1515 19.7988 5.98194C19.8033 5.81237 19.7732 5.64368 19.7103 5.48612C19.6478 5.32933 19.5542 5.18683 19.4351 5.06722C19.3143 4.94207 19.169 4.84311 19.0083 4.77653C18.8469 4.70964 18.6729 4.67688 18.4982 4.68028C18.3282 4.68391 18.1607 4.72247 18.0062 4.79358C17.8517 4.86469 17.7129 4.96741 17.5996 5.09421L10.9229 12.6112L11.1309 12.806C11.2157 12.8853 11.292 12.9566 11.3653 13.037C11.4739 13.1633 11.5732 13.2971 11.6627 13.4375L11.8213 13.6866ZM7.11801 19.3221C7.83253 19.331 8.55385 19.1855 9.08994 18.7218C9.55921 18.3592 9.95252 17.9078 10.2474 17.3933C10.5435 16.8766 10.7348 16.3065 10.8097 15.7157L10.8105 15.7063C10.8369 15.409 10.8023 15.1095 10.7087 14.8261C10.6157 14.5442 10.4663 14.2842 10.2696 14.0618C10.0153 13.7533 9.68831 13.5128 9.31806 13.3617C8.94647 13.21 8.54297 13.1533 8.14399 13.1966C7.76968 13.2359 7.40775 13.3531 7.08152 13.5408C6.75515 13.7286 6.47177 13.9827 6.24965 14.2868L6.24063 14.2991L6.23318 14.3125C5.92629 14.8627 5.75031 15.4763 5.71889 16.1055C5.66649 16.9871 5.38061 17.8388 4.89054 18.5735L4.70543 18.851L5.02374 18.9508C5.6493 19.1469 6.3976 19.313 7.11801 19.3221Z" fill="currentColor"></path><path fill="currentColor" d="M8.072 2.048c-.013-.064-.13-.064-.144 0-.115.543-.38 1.51-.875 2.005-.495.496-1.462.76-2.005.875-.064.013-.064.13 0 .144.543.115 1.51.38 2.005.875.496.495.76 1.462.875 2.005.013.064.13.064.144 0 .115-.543.38-1.51.875-2.005.495-.496 1.462-.76 2.006-.875.063-.013.063-.13 0-.144-.544-.115-1.51-.38-2.006-.875-.496-.495-.76-1.462-.875-2.005Zm-4.12 5.984c.009-.043.087-.043.096 0 .077.362.253 1.007.583 1.337.33.33.975.506 1.337.583.043.009.043.087 0 .096-.362.077-1.007.253-1.337.583-.33.33-.506.975-.583 1.337-.009.043-.087.043-.096 0-.077-.362-.253-1.007-.583-1.337-.33-.33-.975-.506-1.337-.583-.043-.009-.043-.087 0-.096.362-.077 1.007-.253 1.337-.583.33-.33.506-.975.583-1.337Zm15.12 7.015c-.013-.063-.13-.063-.144 0-.115.544-.38 1.51-.875 2.006-.495.496-1.462.76-2.006.875-.063.013-.063.13 0 .144.544.115 1.51.38 2.006.875.496.495.76 1.462.875 2.006.013.063.13.063.144 0 .115-.544.38-1.51.875-2.006.495-.496 1.462-.76 2.006-.875.063-.013.063-.13 0-.144-.544-.115-1.51-.38-2.006-.875-.496-.495-.76-1.462-.875-2.006Z"></path></svg>)},
  {name:"Effetcs",icon:(<svg data-v-928ccbd9="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3946 3.94635C13.4013 3.88629 13.4047 3.84291 13.4047 3.81622C13.4047 3.74948 13.3946 3.68608 13.3746 3.62602C13.3546 3.56595 13.3246 3.51924 13.2845 3.48587C13.2445 3.44582 13.1711 3.40578 13.0643 3.36574C12.9642 3.3257 12.8441 3.29233 12.7039 3.26563C12.5704 3.23226 12.4236 3.20891 12.2634 3.19556C12.1033 3.17554 11.9498 3.16553 11.803 3.16553C11.3558 3.16553 10.9454 3.23226 10.5717 3.36574C10.2046 3.49254 9.87759 3.68942 9.59062 3.95636C9.31032 4.22331 9.07006 4.56367 8.86985 4.97745C8.66964 5.38454 8.51614 5.86172 8.40936 6.40896L8.1591 7.66029H6.89776C6.83103 7.66029 6.7743 7.68031 6.72758 7.72035C6.68754 7.75372 6.6475 7.80044 6.60746 7.8605C6.56741 7.92056 6.53405 7.9873 6.50735 8.06071C6.48066 8.13412 6.4573 8.21087 6.43728 8.29096C6.42393 8.37104 6.41392 8.45113 6.40724 8.53121C6.40057 8.60462 6.39723 8.66802 6.39723 8.72141C6.39723 8.84154 6.41392 8.92496 6.44729 8.97168C6.48733 9.01172 6.54072 9.03174 6.60746 9.03174H7.88881L6.24707 17.2204C6.16699 17.6142 6.07689 17.9512 5.97679 18.2315C5.88336 18.5118 5.76323 18.742 5.61641 18.9222C5.47626 19.1091 5.30608 19.2459 5.10587 19.3327C4.89898 19.4194 4.65539 19.4628 4.37509 19.4628C4.26831 19.4628 4.18155 19.4561 4.11482 19.4428C4.04141 19.4361 3.98134 19.4261 3.93463 19.4127C3.88124 19.4061 3.83452 19.3961 3.79448 19.3827C3.74776 19.376 3.70104 19.3727 3.65433 19.3727C3.60761 19.3727 3.56757 19.3927 3.5342 19.4328C3.50083 19.4728 3.4708 19.5262 3.44411 19.5929C3.41741 19.6597 3.39405 19.7297 3.37403 19.8031C3.35401 19.8832 3.33733 19.9566 3.32398 20.0234C3.31063 20.0968 3.30062 20.1635 3.29395 20.2236C3.2806 20.2903 3.27393 20.337 3.27393 20.3637C3.27393 20.4305 3.2806 20.4839 3.29395 20.5239C3.30729 20.564 3.32732 20.6007 3.35401 20.634C3.40073 20.6741 3.52085 20.7174 3.71439 20.7642C3.90126 20.8109 4.14485 20.8342 4.44517 20.8342C4.90565 20.8342 5.31943 20.7675 5.68648 20.634C6.05354 20.5072 6.37721 20.307 6.65751 20.0334C6.93781 19.7664 7.17472 19.4261 7.36826 19.0123C7.5618 18.6052 7.7153 18.1214 7.82875 17.5608L9.54056 9.03174H13.4443L14.8862 12.3052L11.1423 16.7499C11.0755 16.8433 11.0388 16.9201 11.0321 16.9802C11.0188 17.0402 11.0422 17.0903 11.1022 17.1303C11.1556 17.1704 11.2424 17.1971 11.3625 17.2104C11.4826 17.2304 11.6395 17.2404 11.833 17.2404C12.0332 17.2404 12.1934 17.2338 12.3135 17.2204C12.4403 17.2071 12.5437 17.1904 12.6238 17.1704C12.7039 17.1503 12.764 17.1236 12.804 17.0903C12.8507 17.0502 12.8941 17.0069 12.9342 16.9601L15.7672 13.4064L17.2687 16.9601C17.2888 17.0069 17.3088 17.0502 17.3288 17.0903C17.3488 17.1236 17.3889 17.1537 17.4489 17.1804C17.509 17.2004 17.5924 17.2137 17.6992 17.2204C17.806 17.2338 17.9528 17.2404 18.1397 17.2404C18.3466 17.2404 18.5134 17.2304 18.6402 17.2104C18.7737 17.1971 18.8771 17.1704 18.9505 17.1303C19.0239 17.0903 19.064 17.0402 19.0707 16.9802C19.084 16.9134 19.0707 16.8333 19.0306 16.7399L17.0685 12.3352L20.5823 8.08073C20.669 7.9873 20.7157 7.91055 20.7224 7.85049C20.7358 7.78375 20.7124 7.7337 20.6523 7.70033C20.5923 7.66696 20.4988 7.6436 20.372 7.63026C20.2452 7.61691 20.0817 7.61024 19.8815 7.61024C19.7013 7.61024 19.5545 7.61691 19.441 7.63026C19.3343 7.63693 19.2442 7.65361 19.1708 7.68031C19.0974 7.70033 19.0406 7.72703 19.0006 7.76039C18.9605 7.79376 18.9205 7.83047 18.8805 7.87051L16.1776 11.2341L14.7461 7.87051C14.7261 7.82379 14.7027 7.78375 14.676 7.75038C14.656 7.71701 14.6159 7.69032 14.5559 7.6703C14.5463 7.6667 14.5358 7.66332 14.5245 7.66016L9.82086 7.66029L9.99104 6.75933C10.0645 6.37893 10.1512 6.04858 10.2513 5.76828C10.3514 5.48799 10.4749 5.25774 10.6217 5.07755C10.7685 4.89069 10.942 4.75388 11.1423 4.66712C11.3491 4.58036 11.5961 4.53698 11.883 4.53698C12.0365 4.53698 12.1767 4.55033 12.3035 4.57702C12.4303 4.60372 12.5404 4.63375 12.6338 4.66712C12.7273 4.69381 12.8074 4.72051 12.8741 4.7472C12.9475 4.7739 13.0076 4.78724 13.0543 4.78724C13.0943 4.78724 13.131 4.76722 13.1644 4.72718C13.1978 4.68714 13.2278 4.63375 13.2545 4.56701C13.2812 4.50027 13.3045 4.4302 13.3246 4.35679C13.3446 4.2767 13.3579 4.20329 13.3646 4.13656C13.378 4.06314 13.388 3.99974 13.3946 3.94635Z" fill="currentColor"></path></svg>)},
  {name:"Create design",icon:(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#7D2AE7"></path><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#jw3tyjviy)"></path><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#jaguvhldc)"></path><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#9afybio09)"></path><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#lyq1ovl49)"></path><path d="M17.1807 14.4617C17.0817 14.4617 16.9945 14.5453 16.9038 14.7279C15.8797 16.8047 14.1107 18.2741 12.0637 18.2741C9.69683 18.2741 8.23107 16.1375 8.23107 13.1857C8.23107 8.18573 11.0169 5.29483 13.4639 5.29483C14.6073 5.29483 15.3055 6.01338 15.3055 7.15685C15.3055 8.51397 14.5345 9.23252 14.5345 9.71116C14.5345 9.92601 14.6682 10.0561 14.9332 10.0561C15.9979 10.0561 17.2475 8.83267 17.2475 7.10433C17.2475 5.42851 15.789 4.19672 13.3421 4.19672C9.29816 4.19672 5.70422 7.94582 5.70422 13.1332C5.70422 17.1485 7.99713 19.8019 11.535 19.8019C15.29 19.8019 17.4613 16.0659 17.4613 14.8532C17.4613 14.5847 17.324 14.4617 17.1807 14.4617Z" fill="white"></path><defs><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.63579 21.2716) rotate(-49.4156) scale(18.562)" id="jw3tyjviy"><stop stop-color="#6420FF"></stop><stop offset="1" stop-color="#6420FF" stop-opacity="0"></stop></radialGradient><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.35369 2.72842) rotate(54.7035) scale(20.932)" id="jaguvhldc"><stop stop-color="#00C4CC"></stop><stop offset="1" stop-color="#00C4CC" stop-opacity="0"></stop></radialGradient><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.63579 21.2716) rotate(-45.1954) scale(18.3373 8.43355)" id="9afybio09"><stop stop-color="#6420FF"></stop><stop offset="1" stop-color="#6420FF" stop-opacity="0"></stop></radialGradient><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.81474 3.23368) rotate(66.5198) scale(18.8951 31.6535)" id="lyq1ovl49"><stop stop-color="#00C4CC" stop-opacity="0.725916"></stop><stop offset="0.0001" stop-color="#00C4CC"></stop><stop offset="1" stop-color="#00C4CC" stop-opacity="0"></stop></radialGradient></defs></svg>)}

]
  return (
      <div className='w-[100%]'>
        {Links.map((val,ind)=>{
          return(
            <div className='flex items-center scale-100 py-2 hover:scale-105 cursor-pointer'>
            <span className={`border-[3px]  ${DarkMode==="light"?"border-[#ECF0F2]":'border-[#886316]'} px-2 py-2 rounded-full`}>{val.icon}</span>
            <a  className='font-semibold text-[#7B868E] ml-1' > {val.name}</a>
            </div>
          )
        })}
      </div>
  );
}
