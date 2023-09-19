import React, { useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody ,MDBBadge,MDBBtn} from 'mdb-react-ui-kit';
import AdminNav from './AdminNav';
import { useContext } from 'react';
import { Mycontext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

function AdminHome() {
  const navigate=useNavigate()
  const {products,setproducts}=useContext(Mycontext)

  return (
    <div>
<div className='sticky-top'>
  <AdminNav/>
</div>

<MDBTable responsive className='caption-top'>
<caption>TOTAL PRODUCTS:{}</caption>
      <MDBTableHead>
        <tr>
          <th scope='col'>ID/</th>
          <th scope='col'>Products</th>
          <th scope='col'>Description</th>
          <th scope='col'>Availability</th>
          <th scope='col'>Type</th>
          <th scope='col'>Price</th>
          <th scope='col'>Offer Price</th>
        </tr>
      </MDBTableHead>
      {products.map((item,index)=>
     
      <MDBTableBody>
        <tr>
          <td>{item.id}</td>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={item.src}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{item.name}</p>
                {/* <p className='text-muted mb-0'>john.doe@gmail.com</p> */}
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{item.description}</p>
            {/* <p className='text-muted mb-0'>IT department</p> */}
          </td>
          <td>
            <MDBBadge color='success' pill>
              Available
            </MDBBadge>
          </td>
          <td>{item.type}</td>
          <td>{item.price}</td>
          <td>{item.price2}</td>
          <td>
            <MDBBtn 
            color='link'
            rounded size='sm'
            onClick={()=>navigate('/adminedit')}>
              Edit
            </MDBBtn>
          </td>
          <td>
            <MDBBtn 
            color='danger'
            rounded size='sm'
            onClick={()=>setproducts(p=>p.filter((a,i)=>i!=index))}
            // onClick={EditProduct}
            >
            Delete
            </MDBBtn>
          </td>
               </tr>
      </MDBTableBody>
       )}
    </MDBTable>
    </div>
  )
}

export default AdminHome