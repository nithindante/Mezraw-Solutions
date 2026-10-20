import React from 'react'
import ContactForm from './ContactForm'
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import handIcon from '../assets/hand.avif'
const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function ContactUs() {
  return (
    <div>
      <ContactForm></ContactForm>
      <div className='mx-auto grid max-w-[1000px] gap-8 px-5 py-10 sm:px-8 md:grid-cols-3'>
        <div className='flex flex-col gap-1'>
          <h3 className='mb-2 text-lg font-bold'>Contacts</h3>
          <span className='break-words'>info@pvventures.in</span>
          <span>+91 9080906366, 7012013993</span>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='mb-2 text-lg font-bold'>Office Address</h3>
          <span>7/1627, Crasent House, Pereppadam Road,Vennala, Kochi, Ernakulam, Kerala, 682028</span>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='mb-2 text-lg font-bold'>Opening hours</h3>
          <span>Monday - Friday: 9:00 - 18:00</span>
          <span>Saturday: 9:00 - 16:00</span>
        </div>
      </div>
      <div className='mx-auto grid max-w-[1000px] gap-6 px-5 pb-16 sm:px-8 md:grid-cols-2'>
        <div className='h-80 overflow-hidden rounded-2xl md:h-auto md:min-h-96'>
          {mapsApiKey ? (
            <APIProvider apiKey={mapsApiKey} onLoad={() => console.log('Maps API has loaded.')}>
              <Map
                defaultZoom={13}
                defaultCenter={ { lat: 10.011607, lng: 76.442653 } }
                gestureHandling='cooperative'
              >
              </Map>
            </APIProvider>
          ) : (
            <div className='flex h-full items-center justify-center bg-tint p-6 text-center text-muted'>Map unavailable</div>
          )}
        </div>
        <img src={handIcon} alt='Contact Us' loading='lazy' className='h-full w-full rounded-2xl object-cover' />
      </div>
    </div>
  )
}

export default ContactUs
