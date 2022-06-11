import ComplaintTypeHeader from '../../Complaintlist/Table/ComplaintTypeHeader'

const ComplaintListHeader = () => {
  return (
    <>
      {/* begin::header */}
      <div className='card-header border-0 pt-6'>
        <div className='card-toolbar'>
          <ComplaintTypeHeader />
        </div>
      </div>
      {/* end::header */}
    </>
  )
}
export {ComplaintListHeader}
