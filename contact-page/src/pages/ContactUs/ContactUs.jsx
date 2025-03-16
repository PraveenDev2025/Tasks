import React from 'react'
import NormalContact from '../../components/Contact/NormalContact'
import FormikContact from '../../components/Contact/NormalContact'
import EmailJSContact from '../../components/Contact/EmailJSContact'
import ResendContact from '../../components/Contact/ResendContact'






export default function ContactUs() {
  
  return (
    <section className='w-full h-full flex justify-center items-center py-10'>
      {/* <NormalContact />
      <FormikContact /> */}
      {/* <EmailJSContact /> */}
      <ResendContact />
    </section>
  )
}
