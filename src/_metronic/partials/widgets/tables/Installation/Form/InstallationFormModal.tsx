import { KTSVG } from "../../../../../helpers";

const  InstallationFormModal = () =>{
  return(
    <>
         {/* begin::create form Modal */}
   <div className='modal fade' id='create-installation-modal'>
   <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
     <div className='modal-content'>
       <div className='modal-header'>
         <h5 className='modal-title'>Create Installation</h5>
         <div
           className='btn btn-icon btn-sm btn-active-light-primary ms-2'
           data-bs-dismiss='modal'
           aria-label='Close'
         >
           <span className='svg-icon svg-icon-2x'>
             <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-3' />
           </span>
         </div>
       </div>

       <div className='modal-body'>
         <div className='container-fluid p-0'>
           <div className='row w-100 mx-0 mb-4 gy-4'>
             <div className='col-lg-3'>
               <label className='form-label fw-bold required'>Username</label>
               <input
                 className='form-control form-control-lg form-control-solid'
                 type='text'
                 autoComplete='off'
               />
             </div>

             <div className='col-lg-3'>
               <label className='form-label fw-bold'>Installer</label>
               <select className='form-select form-select-solid'>
                 <option value='1'></option>
                 <option value='2'>Amit</option>
                 <option value='3'>Ajay</option>
               </select>
             </div>

             <div className='col-lg-3'>
               <label className='form-label fw-bold'>Main point</label>
               <select className='form-select form-select-solid'>
                 <option value='1'></option>
                 <option value='2'>Not described</option>
                 <option value='3'>Angel Square</option>
                 <option value='4'>Anjani Sayan</option>
               </select>
             </div>

             <div className='col-lg-3'>
               <label className='form-label fw-bold'>Connection Type</label>
               <select className='form-select form-select-solid'>
                 <option value='1'></option>
                 <option value='2'>Not described</option>
                 <option value='3'>Cable</option>
                 <option value='4'>Wireless</option>
               </select>
             </div>
           </div>

           <div className='row w-100 mx-0 mb-4 gy-4'>
             <div className='col-lg-3'>
               <label className='form-label fw-bold'>Cable type</label>
               <select className='form-select form-select-solid'>
                 <option value='1'></option>
                 <option value='2'>2 pair - Single coating</option>
                 <option value='3'>2 pair - Double coating</option>
               </select>
             </div>

             <div className='col-lg-3'>
               <label className='form-label fw-bold'>Cable length</label>
               <div className='input-group'>
                 <span className='input-group-text border-0'>m</span>
                 <input type='number' className='form-control form-control-solid' />
               </div>
             </div>

             <div className='col-lg-3'>
               <label className='form-label fw-bold'>IP type</label>
               <select className='form-select form-select-solid'>
                 <option value='1'></option>
                 <option value='2'>Dynamic</option>
                 <option value='3'>Static</option>
               </select>
             </div>

             <div className='col-lg-3'>
               <label className='form-label fw-bold'>Acces point IP</label>
               <input
                 className='form-control form-control-lg form-control-solid'
                 type='text'
                 autoComplete='off'
               />
             </div>
           </div>

           <div className='row w-100 mx-0 mb-4 gy-4'>
             <div className='col-lg-3'>
               <label className='form-label fw-bold required'>Station IP</label>
               <input
                 className='form-control form-control-lg form-control-solid'
                 type='text'
                 autoComplete='off'
               />
             </div>

             <div className='col-lg-3'>
               <label className='form-label fw-bold required'>Station Name</label>
               <input
                 className='form-control form-control-lg form-control-solid'
                 type='text'
                 autoComplete='off'
               />
             </div>

             <div className='col-lg-3'>
               <label className='form-label fw-bold required'>Station MAC</label>
               <input
                 className='form-control form-control-lg form-control-solid'
                 type='text'
                 autoComplete='off'
               />
             </div>

             <div className='col-lg-3'>
               <label className='form-label fw-bold required'>Station Name</label>
               <select className='form-select form-select-solid'>
                 <option value='1'></option>
                 <option value='2'>Pending</option>
                 <option value='3'>Done</option>
               </select>
             </div>
           </div>

           <div className='row w-100 mx-0 mb-4 gy-4'>
             <div className='col'>
               <label className='form-label fw-bold required'>Remark</label>
               <input
                 className='form-control form-control-lg form-control-solid'
                 type='text'
                 autoComplete='off'
                 placeholder='Remark'
               />
             </div>
           </div>

           <div className='row w-100 mx-0 mb-4 gy-4'>
             <div className='col'>
               <label className='form-label fw-bold'>Notification</label>
               <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                 <input
                   className='form-check-input h-20px w-30px'
                   type='checkbox'
                   value=''
                   id='flexSwitch20x30'
                 />
                 <label className='form-check-label'>Installer</label>
               </div>
             </div>
           </div>
         </div>
       </div>

       <div className='modal-footer'>
         <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
           Close
         </button>
         <button type='button' className='btn btn-primary'>
           Create
         </button>
       </div>
     </div>
   </div>
 </div>
 {/* end::create form Modal */}
    </>
  )
}
export default InstallationFormModal
 
