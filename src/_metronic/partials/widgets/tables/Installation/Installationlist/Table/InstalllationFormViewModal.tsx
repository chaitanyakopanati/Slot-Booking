import {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import moment from 'moment'
import {KTSVG} from '../../../../../../helpers'
import {ListPageData} from '../../InstallationContext'
import {useAuth} from '../../../../../../../app/modules/auth'

type Props = {
  category: any
}

const InstallationCustomerViewModel: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, setViewIdForUpdate} = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()
  const {currentUser, auth} = useAuth()

  const [initialvalues, setInitialvalues] = useState<any>({
    ...category,
    id: category.data?.id,
    name: category.data?.name || '',
    userName: category.data?.userName || '',
    address: category.data?.address || '',
    contactno: category.data?.contactno || '',
    status: category.data?.status || '',
    installerName: category.data?.installerName || '',
    salesexecutiveName: category.data?.salesexecutiveName || '',
    description: category.data?.description || '',
    remark: category.data?.remark || '',
    cabletypeName: category.data?.cabletypeName || '',
    iptypeName: category.data?.iptypeName || '',
    accesspointip: category.data?.accesspointip || '',
    stationip: category.data?.stationip || '',
    stationname: category.data?.stationname || '',
    stationMac: category.data?.stationMac || '',
    statusName: category.data?.statusName || '',
    companyName: category.data?.companyName || '',
    zoneName: category.data?.zoneName || '',
    mobileNo: category.data?.mobileNo || '',
    contactNo: category.data?.contactNo || '',
    email: category.data?.email || '',
    totalAmount: category.data?.totalAmount || '',
    remainingAmount: category.data?.remainingAmount || '',
    cablelength: category.data?.cablelength || '',
    zonepointName: category.data?.zonepointName || '',
    connectiontypeName: category.data?.connectiontypeName || '',
    createdByName: category.data.createdByName || '',
    wirelessTypeName: category.data.wirelessTypeName || '',
    modifyByName: category.data.modifyByName || '',
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
              <span className='svg-icon svg-icon-2x' onClick={() => navigate('/installations')}>
                <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
              </span>
              <h5 className='modal-title'>View installation</h5>
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
                    navigate(`/installations/installationsform/${category.data.id}`)
                  }}
                >
                  <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  Edit installation
                </button>
                {/* end::  Edit User button */}
              </div>
            ) : (
              ''
            )}
          </div>
          {/* end:: View Modal Header */}
          {/*  */}

          <div className='row w-100 mx-0 mb-4 gy-4'>
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>User Name</label>
              <input
                placeholder='user Name'
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
                placeholder='Name'
                value={initialvalues.name}
                type='text'
                name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Company Name</label>
              <input
                placeholder='Company Name'
                value={initialvalues.companyName}
                name='companyName'
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
                value={initialvalues.zoneName}
                name='zoneName'
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
                value={initialvalues.mobileNo}
                name='mobileNo'
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
                value={initialvalues.contactNo}
                name='contactNo'
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
                value={initialvalues.email}
                name='Email'
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
                value={initialvalues.address}
                name='address'
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
                  value={initialvalues.totalAmount}
                  name='totalAmount'
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
                  value={initialvalues.remainingAmount}
                  name='remainingAmount'
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
                value={initialvalues.installerName}
                name='installerName'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Installer'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Company</label>
              <input
                type='text'
                value={initialvalues.companyName}
                name='companyName'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Company'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Main point</label>
              <input
                type='text'
                value={initialvalues.zonepointName}
                name='zonepointName'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Main point'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Connection type</label>
              <input
                type='text'
                value={initialvalues.connectiontypeName}
                name='connectiontypeName'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Connection type'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Cable type</label>
              <input
                type='text'
                value={initialvalues.cabletypeName}
                name='cabletypeName'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Cable type'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Wireless Type</label>
              <input
                type='text'
                value={initialvalues.wirelessTypeName}
                name='wirelessTypeName'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Wireless Type'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Cable length</label>
              <div className='input-group'>
                <span className='input-group-text border-0'>m</span>
                <input
                  type='number'
                  value={initialvalues.cablelength}
                  name='cablelength'
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
                value={initialvalues.iptypeName}
                name='iptypeName'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='IP type'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Acces point IP</label>
              <input
                type='text'
                value={initialvalues.accesspointip}
                name='accesspointip'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Acces point IP'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Station IP</label>
              <input
                type='text'
                value={initialvalues.stationip}
                name='stationip'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Station IP'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Station Name</label>
              <input
                type='text'
                value={initialvalues.stationname}
                name='stationname'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Station Name'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Station MAC</label>
              <input
                type='text'
                value={initialvalues.stationMac}
                name='stationMac'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Station MAC'
              />
            </div>

            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Status</label>
              <input
                type='text'
                value={initialvalues.statusName}
                name='statusName'
                className='form-control form-control-lg form-control-solid'
                disabled
                placeholder='Status'
              />
            </div>

            <div className='col-lg-12'>
              <label className='form-label fw-bold'>Remark</label>
              <input
                className='form-control form-control-lg form-control-solid'
                type='text'
                value={initialvalues.remark}
                name='remark'
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
                value={initialvalues.createdByName}
                name='createdByName'
                placeholder='createdByName'
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
                value={initialvalues.modifyByName}
                name='modifyByName'
                placeholder='Updated By'
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
          </div>
        </div>
      </div>
    </>
  )
}

export default InstallationCustomerViewModel
