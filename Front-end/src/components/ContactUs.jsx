import React from 'react'
import ContactForm from './ContactForm'
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import handIcon from '../assets/hand.avif'
function ContactUs() {
  return (
    <div>
      <ContactForm></ContactForm>
      <div className='address-div grid lg:grid-cols-3 grid-rows-3 lg:grid-rows-none justify-center gap-4 p-10 mx-auto max-w-[1000px]'>
        <div>
          <h3 className='mb-4'>Contacts</h3>
          <span>info@pvventures.in</span>
          <span>+91 9080906366, 7012013993</span>
        </div>
        <div>
          <h3 className='mb-4'>Address</h3>
          <span>Door No.1 , Ground Floor, Pragna Uptown, Doddathoguru, Electronic City Phase 1, Bangalore- 560100</span>
        </div>
        <div>
          <h3 className='mb-4'>Opening hours</h3>
          <span>Monday - Friday: 9:00 - 18:00</span>
          <span>Saturday: 9:00 - 16:00</span>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-none gap-4 p-10 mx-auto max-w-[1000px]'>
      <APIProvider apiKey={'AIzaSyAKbFcTbNkec_sDar1tMf5U-xPbnnsM1QM'} onLoad={() => console.log('Maps API has loaded.')}>
        <Map
      defaultZoom={13}
      defaultCenter={ { lat: 10.011607, lng: 76.442653 } }
>
</Map>
      </APIProvider>
      <div>
        <img src={handIcon} alt='Contact Us' className='w-full h-auto' />
      </div>
       </div>
    </div>
  )
}

export default ContactUs