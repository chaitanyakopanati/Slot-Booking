import {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ListPageData} from '../../InquiriesContext'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import moment from 'moment'
import {KTSVG} from '../../../../../../helpers'
import {useAuth} from '../../../../../../../app/modules/auth'

type Props = {
  category: any
}

const InquiriesFormViewModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, setViewIdForUpdate} = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()
  const {currentUser, auth} = useAuth()

  const [initialvalues, setInitialvalues] = useState<any>({
    ...category,
    id: category.data?.id,
    name: category.data?.name || '',
    address: category.data?.address || '',
    contactno: category.data?.contactno || '',
    status: category.data?.status || '',
    salesexecutiveName: category.data?.salesexecutiveName || '',
    description: category.data?.description || '',
    remark: category.data?.remark || '',
    createdby: category.data.createdByName || '',
    modifyby: category.data.modifyByName || '',
    area: category.data.area || '',
    createdAt: moment
      .utc(category.data.createdAt, 'YYYY-MM-DD,h:mm a')
      .local()
      .format('YYYY-MM-DD,h:mm a'),
    modifyAt: moment
      .utc(category.data.modifyAt, 'YYYY-MM-DD,h:mm a')
      .local()
      .format('YYYY-MM-DD,h:mm a'),
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
              <span className='svg-icon svg-icon-2x' onClick={() => navigate('/inquiries')}>
                <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
              </span>
              <h5 className='modal-title'>View Inquirie</h5>
            </div>

            {auth?.roleId != 2 &&
            auth?.roleId != 3 &&
            auth?.roleId != 5 &&
            auth?.roleId !== 6 &&
            auth?.roleId !== 7 ? (
              <div className='ms-3'>
                {/* begin::  Edit User button */}
                <button
                  // type='submit'
                  className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                  onClick={() => {
                    setViewIdForUpdate(undefined)
                    navigate(`/inquiries/inquiriesform/${category.data.id}`)
                  }}
                >
                  <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  Edit Inquirie
                </button>
                {/* end::  Edit User button */}
              </div>
            ) : (
              ''
            )}
          </div>
          {/* end:: View Modal Header */}
        </div>

        {/* begin: input username Filed */}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/*  */}
          <div className='col-lg-12'>
            <label className='fw-bold fs-6 mb-2 required'>Name</label>
            <div className='input-group'>
              <input
                placeholder='name'
                value={initialvalues.name}
                type='text'
                name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>
          </div>

          {/* begin: input lastname Filed */}
          <div className='col-lg-12'>
            <label className='form-label fw-bold required'>Address :</label>
            <textarea
              placeholder='address'
              className='form-control form-control-lg form-control-solid'
              value={initialvalues.address}
              // type='text'
              disabled
              readOnly
            />
          </div>
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-12'>
            <label className='form-label fw-bold required'>Area:</label>
            <input
              placeholder='Area'
              className='form-control form-control-lg form-control-solid'
              type='text'
              value={initialvalues.area}
              disabled
              readOnly
            />
          </div>
        </div>

        <div className='row mx-0 w-100'>
          {/* begin: input email Filed */}
          <div className='col-lg-4  mb-4 gy-4 '>
            <div className=''>
              <label className='form-label fw-bold required'>Contact No :</label>
              <input
                placeholder='contactno'
                className='form-control form-control-lg form-control-solid'
                value={initialvalues.contactno}
                type='text'
                disabled
                readOnly
              />
            </div>
          </div>

          {/* begin: input phone Filed */}
          <div className='col-lg-4 mb-4 gy-4'>
            <div className=''>
              <label className='form-label fw-bold required'>Status :</label>
              <input
                placeholder='Mobile no.'
                className='form-control form-control-lg form-control-solid'
                type='text'
                value={initialvalues.status}
                disabled
                readOnly
              />
            </div>
          </div>

          {/*begin:: Zone*/}
          <div className='col-lg-4 mb-4 gy-4'>
            <div className=''>
              <label className='form-label fw-bold required'>Sales ExecutiveName:</label>
              <input
                placeholder='Zone.'
                className='form-control form-control-lg form-control-solid'
                type='text'
                value={initialvalues.salesexecutiveName}
                disabled
                readOnly
              />
            </div>
          </div>
        </div>

        {/*begin:: role*/}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-12'>
            <label className='form-label fw-bold required'>Remark:</label>
            <input
              placeholder='Role'
              className='form-control form-control-lg form-control-solid'
              type='text'
              value={initialvalues.remark}
              disabled
              readOnly
            />
          </div>
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Assign Date</label>
            <input
              type='text'
              value={initialvalues.assignDate}
              name='assignDate'
              placeholder='Assign Date'
              className='form-control form-control-solid'
            />
          </div>

          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>End Date</label>
            <input
              type='text'
              value={initialvalues.endDate}
              name='endDate'
              placeholder='End Date'
              className='form-control form-control-solid'
            />
          </div>
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/*begin:: Created By Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Created by</label>
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
          {/*end:: Created By Filed */}

          {/*begin:: Updated By Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Updated by</label>
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
          {/*end:: Updated By Filed */}
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/* begin:: Created At Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Created at</label>
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
          {/* end:: Created At Filed */}

          {/* begin:: Updated At Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Updated at</label>
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
          {/* end:: Updated At Filed */}
        </div>
      </div>
    </>
  )
}

export default InquiriesFormViewModal
