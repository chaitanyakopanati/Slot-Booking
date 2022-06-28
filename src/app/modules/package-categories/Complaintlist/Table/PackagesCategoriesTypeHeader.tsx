import {Formik} from 'formik'
import {useEffect, FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {ListPageData} from '../../PackagesCategoriesContext'
import * as Yup from 'yup'

type Props = {
  category: any
}

const PackagesCategoriesTypeHeader: FC<Props> = ({category}) => {
  const {
    setItemIdForUpdate,
    setFilterShow,
    fetchAllPackagecategories,
    filterShow,
    setSearchText,
    searchText,
    pageNo,
    setPageNo,
    pageSize,
    getDataPackageCategoryDataAllType,
    createdById,
    setcreatedById,
    getDataAllTypeCreatedBy,
    getDataPackageCategory,
  } = ListPageData()

  const openAddCategoryModal = () => {
    setItemIdForUpdate(null)
  }

  const handlesearchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  const handleCreatedBychange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setcreatedById(e.target.value)
  }

  useEffect(() => {
    getDataPackageCategoryDataAllType()
    fetchAllPackagecategories()
  }, [pageNo, pageSize, searchText, createdById])

  {
    /* begin::Created by Filter Map Function */
  }
  // function uniqueBy(property: any) {
  //   let seen = Object.create(null)
  //   return function (item: any) {
  //     let key = item[property]
  //     if (seen[key] == null) {
  //       seen[key] = 1
  //       return true
  //     }
  //     return false
  //   }
  // }

  // const result = getDataPackageCategory.filter(uniqueBy('createdById')).map((product) => {
  //   return {
  //     id: product.createdById,
  //     name: product.createdByName,
  //   }
  // })
  {
    /* End::Created by Filter Map Function */
  }

  return (
    <>
      {/* begin::Formik Form */}
      <Formik
        initialValues={{
          createdById: category.data?.createdById || '',
          createdByName: category.data?.createdByName || '',
          id: category.data?.id || '',
        }}
        validationSchema={Yup.object({
          createdById: Yup.number().required('This fied is required'),
          id: Yup.string().required('This fied is required'),
        })}
        onSubmit={async (values: any, {resetForm}) => {
          console.log(values, 'values')
        }}
      >
        {(props) => (
          <form>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
              <div className='card-title d-flex  flex-md-row flex-column gap-3 align-items-center justify-content-between w-100 mx-0'>
                <div className='d-flex align-items-center position-relative my-1 col-12 col-md-3'>
                  <span className='svg-icon svg-icon-1 position-absolute ms-4'>
                    <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-3' />
                  </span>
                  {/* begin::Search */}
                  <input
                    type='text'
                    value={searchText}
                    onChange={handlesearchange}
                    className='form-control form-control-solid ps-14'
                    placeholder='Search'
                  />
                  {/* end:: Search */}
                </div>

                <div className='d-flex align-items-center'>
                  {/* begin::Download */}
                  <div className='ms-auto'>
                    <a
                      href='#'
                      className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                    >
                      <span className='svg-icon svg-icon-gray-500 me-0'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr091.svg'
                          className='svg-icon-2 me-0'
                        />
                      </span>
                      Download
                    </a>
                  </div>
                  {/* end:: Download */}

                  {/* begin::Filter */}
                  <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
                    <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                      <span className='svg-icon svg-icon-gray-500 me-0'>
                        <KTSVG
                          path='/media/icons/duotune/general/gen031.svg'
                          className='svg-icon-2 me-0'
                        />
                      </span>
                      Filter
                    </div>
                  </div>
                  {/* end:: Filter */}

                  {/* begin::Create Package-Category Button*/}
                  <div
                    className='d-flex justify-content-end ms-3'
                    data-kt-user-table-toolbar='base'
                  >
                    <div title='Click to add new category'>
                      <button
                        type='button'
                        className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                        onClick={openAddCategoryModal}
                      >
                        <span className='svg-icon svg-icon-gray-500 me-1'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr075.svg'
                            className='svg-icon-3'
                          />
                        </span>
                        Create package category
                      </button>
                    </div>
                  </div>
                  {/* end::Create Package-Category Button*/}
                </div>
              </div>

              {/* begin:: Filter:- Created By */}
              {filterShow && (
                <div className='row gy-2 w-100 mx-0 mt-5'>
                  <div className='col-lg-3 col-md-3'>
                    <label className='form-label fw-bold'>Created by:</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('id')}
                      value={createdById}
                      onChange={handleCreatedBychange}
                    >
                      <option value=''>Select Created By</option>
                      {getDataAllTypeCreatedBy.map((TypeData, index) => {
                        return (
                          <option key={index} value={TypeData?.id}>
                            {TypeData?.username}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>
              )}
              {/* end:: Filter:- Created By */}
            </div>
            {/* end::Header */}
          </form>
        )}
      </Formik>
      {/* End::Formik Form */}
    </>
  )
}
export default PackagesCategoriesTypeHeader
