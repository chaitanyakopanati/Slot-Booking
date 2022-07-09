import {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import moment from 'moment'
import {KTSVG} from '../../../../../../helpers'
import {ListPageData} from '../../InstallationContext'

type Props = {
  category: any
}

const InstallationCustomerViewModel: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, setViewIdForUpdate} = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()

  const [initialvalues, setInitialvalues] = useState<any>({
    ...category,
    id: category.data?.id,
    name: category.data?.name || '',
    userName: category.data?.userName || '',
    address: category.data?.address || '',
    contactno: category.data?.contactno || '',
    status: category.data?.status || '',
    salesexecutiveName: category.data?.salesexecutiveName || '',
    description: category.data?.description || '',
    remark: category.data?.remark || '',
    createdby: category.data.createdByName || '',
    modifyby: category.data.modifyByName || '',
    createdAt: moment(category.data.createdAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
    modifyAt: moment(category.data.modifyAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
    assignDate: moment(category.data.createdAt, 'YYYY-MM-DD').format('YYYY-MM-DD'),
    endDate: moment(category.data.modifyAt, 'YYYY-MM-DD').format('YYYY-MM-DD'),
  })

  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  return (
    <>
      {/* begin::formik Add/Edit form */}

      <div className='d-flex flex-column scroll-y me-n7 pe-7'>
        {/* begin: input firstname Filed */}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/* begin:: View Modal Header */}
          <div className='modal-header'>
            <div className='d-flex align-items-center'>
              <span className='svg-icon svg-icon-2x' onClick={() => navigate(-1)}>
                <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
              </span>
              <h5 className='modal-title'>View installation</h5>
            </div>
            <div className='ms-3'>
              {/* begin::  Edit User button */}
              <button
                // type='submit'
                className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                onClick={() => {
                  setViewIdForUpdate(undefined)
                  console.log('tttttttttttttttttttttttttttt', category)
                  console.log('tttttttttttttttttttttttttttt', category.data.id)
                  navigate(`/installations/installationsform/${category.data.id}`)
                  // openEditModal(category.id)
                }}
              >
                <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                Edit installation
              </button>
              {/* end::  Edit User button */}
            </div>
          </div>
          {/* end:: View Modal Header */}
          {/*  */}

          <div className='row w-100 mx-0 mb-4 gy-4'>
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Username</label>
              <input
                placeholder='Username'
                value={initialvalues.userName}
                type='text'
                name='userName'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Name</label>
              <input
                placeholder='Username'
                value={initialvalues.name}
                type='text'
                name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Company name</label>
              <input
                placeholder='CompanyName'
                //  value={initialvalues.name}
                //  name='name'
                type='text'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Zone</label>
              <input
                placeholder='Zone'
                //  value={initialvalues.name}
                //  name='name'
                type='text'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Mobile no.</label>
              <input
                placeholder='Mobile no.'
                //  value={initialvalues.name}
                //  name='name'
                type='number'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Contact no.</label>
              <input
                placeholder='Contact no.'
                //  value={initialvalues.name}
                //  name='name'
                type='number'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Email</label>
              <input
                placeholder='Email'
                //  value={initialvalues.name}
                //  name='name'
                type='text'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Address</label>
              <input
                placeholder='Address'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
                type='text'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Total amount</label>
              <div className='input-group'>
                <span className='input-group-text border-0'>₹</span>
                <input
                  type='number'
                  //  value={initialvalues.name}
                  //  name='name'
                  className='form-control form-control-lg form-control-solid'
                  disabled
                  placeholder='Total amount'
                />
              </div>
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold text-danger'>Remaining amount</label>
              <div className='input-group'>
                <span className='input-group-text border-0'>₹</span>
                <input
                  type='number'
                  //  value={initialvalues.name}
                  //  name='name'
                  className='form-control form-control-lg form-control-solid'
                  disabled
                  placeholder='Remaining amount'
                />
              </div>
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Installer</label>
              <input
                type='text'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Installer'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Company</label>
              <input
                type='text'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Company'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Main point</label>
              <input
                type='text'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Main point'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Connection type</label>
              <input
                type='text'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Connection type'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Cable type</label>
              <input
                type='text'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Cable type'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Cable length</label>
              <div className='input-group'>
                <span className='input-group-text border-0'>m</span>
                <input
                  type='number'
                  //  value={initialvalues.name}
                  //  name='name'
                  className='form-control form-control-lg form-control-solid'
                  disabled
                  placeholder='Cable length'
                />
              </div>
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>IP type</label>
              <input
                type='number'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='IP type'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Acces point IP</label>
              <input
                type='text'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Acces point IP'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Station IP</label>
              <input
                type='text'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Station IP'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Station Name</label>
              <input
                type='text'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Station Name'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Station MAC</label>
              <input
                type='text'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Station MAC'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Status</label>
              <input
                type='text'
                //  value={initialvalues.name}
                //  name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Status'
              />
            </div>

            <div className='col-lg-6'>
              <label className='form-label fw-bold'>Remark</label>
              <input
                className='form-control form-control-lg form-control-solid'
                type='text'
                // value={initialvalues.name}
                //  name='name'
                autoComplete='off'
                placeholder='Remark'
              />
            </div>
          </div>

          <div className='row w-100 mx-0 mb-4 gy-4'>
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Created by</label>
              <input
                className='form-control form-control-lg'
                type='text'
                value={initialvalues.createdby}
                name='createdby'
                placeholder='CreatedBy'
                autoComplete='off'
                disabled
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Created at</label>
              <input
                className='form-control form-control-lg'
                type='text'
                value={initialvalues.createdAt}
                name='createdAt'
                placeholder='CreatedAt'
                autoComplete='off'
                disabled
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Updated by</label>
              <input
                className='form-control form-control-lg'
                type='text'
                value={initialvalues.modifyby}
                name='modifyby'
                placeholder='UpdatedBy'
                autoComplete='off'
                disabled
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Updated at</label>
              <input
                className='form-control form-control-lg'
                type='text'
                value={initialvalues.modifyAt}
                name='modifyAt'
                placeholder='UpdatedAt'
                autoComplete='off'
                disabled
              />
            </div>

            <div className='modal-footer'>
              <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstallationCustomerViewModel
