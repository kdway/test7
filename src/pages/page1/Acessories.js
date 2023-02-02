import React from 'react'
import { CCard, CCardImage, CCardTitle, CCardText, CCardBody, CButton } from '@coreui/react'
function Acessories() {
  return (
    <>
    <CCard style={{ width: '18rem', marginLeft:'5rem' }}>
  <CCardImage orientation="top" src="robe.jpg" />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CCardText>
    <CButton href="Details">Go somewhere</CButton>
  </CCardBody>
</CCard>

<CCard style={{ width: '18rem', marginLeft:'5rem' }}>
  <CCardImage orientation="top" src="robe.jpg" />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>


<div class="shadow p-3 mb-5 bg-body rounded">
       
       <div id="details">
            <img src="robe.jpg"></img>
              <div className='Des'>
                    <h3>Collectiontop Angebot</h3>
                      <p>React components are styled using @coreui/coreui CSS library, but you can use them also with bootstrap CSS library. That is possible because @coreui/coreui library is compatible with bootstrap, it just extends its functionalities. The only exception is custom CoreUI components, which don't exist in the Bootstrap ecosystem.</p>

              </div>

        </div>
</div>

    
    </>

  )
}

export default Acessories