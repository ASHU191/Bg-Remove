import { React } from 'react'
export default function BtnIcons(props) {

  return (
    <div className='flex w-[100%] justify-between'>
        <span className='flex gap-4'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='cursor-pointer'  xmlns="http://www.w3.org/2000/svg"><path d="M19 11.25L5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25Z" fill="#CAD0D3"></path></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='cursor-pointer'  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.25V5C11.25 4.58579 11.5858 4.25 12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H12.75V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H11.25Z" fill="#CAD0D3"></path></svg>
        </span>
          <span class="text-secondary text-base h-8 w-[1px] rounded-full bg-secondary">|</span>
          <svg 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  className="cursor-pointer fill-current text-[#454545] active:text-[#CAD0D3]" 
  xmlns="http://www.w3.org/2000/svg"
  onClick={props.Toogle}
>
  <path 
    d="M12 3.75C12 3.33579 11.6642 3 11.25 3C10.8358 3 10.5 3.33579 10.5 3.75V6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H10.5V20.25C10.5 20.6642 10.8358 21 11.25 21C11.6642 21 12 20.6642 12 20.25L12 3.75Z" 
    fill="currentColor"
  ></path>
  <path 
    d="M14 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H14V7.5H19C19.2761 7.5 19.5 7.72386 19.5 8V16C19.5 16.2761 19.2761 16.5 19 16.5H14V18Z" 
    fill="currentColor"
  ></path>
</svg>

          <span class="text-secondary text-base h-8 w-[1px] rounded-full bg-secondary">|</span>
          <span className='flex gap-4'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"className='cursor-pointer'   xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.07238 8.75L8.31881 10.9964C8.6117 11.2893 8.6117 11.7642 8.31881 12.0571C8.02591 12.35 7.55104 12.35 7.25815 12.0571L4.42678 9.22572C3.74336 8.5423 3.74336 7.43426 4.42678 6.75084L7.20795 3.96967C7.50084 3.67678 7.97572 3.67678 8.26861 3.96967C8.5615 4.26256 8.5615 4.73744 8.26861 5.03033L6.04894 7.25H16C19.1756 7.25 21.75 9.82436 21.75 13C21.75 16.1756 19.1756 18.75 16 18.75H12C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25H16C18.3472 17.25 20.25 15.3472 20.25 13C20.25 10.6528 18.3472 8.75 16 8.75H6.07238Z" fill="#CAD0D3"></path></svg>
          <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" className='cursor-pointer'  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0537 16.7481L15.7581 19.0437C15.4653 19.3366 15.4653 19.8114 15.7581 20.1043C16.051 20.3972 16.5259 20.3972 16.8188 20.1043L19.6472 17.2759C20.3307 16.5925 20.3307 15.4845 19.6472 14.801L16.8159 11.9697C16.523 11.6768 16.0481 11.6768 15.7552 11.9697C15.4623 12.2626 15.4623 12.7374 15.7552 13.0303L17.9749 15.25H8C5.65279 15.25 3.75 13.3472 3.75 11C3.75 8.65279 5.65279 6.75 8 6.75H12C12.4142 6.75 12.75 6.41421 12.75 6C12.75 5.58579 12.4142 5.25 12 5.25H8C4.82436 5.25 2.25 7.82436 2.25 11C2.25 14.1756 4.82436 16.75 8 16.75H18C18.0181 16.75 18.036 16.7494 18.0537 16.7481Z" fill="#CAD0D3"></path></svg>
     
          </span>
    </div>
  )
}
