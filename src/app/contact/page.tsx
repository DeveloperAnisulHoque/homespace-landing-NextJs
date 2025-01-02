import Breadcrumb from '@/components/Common/Breadcrumb'
import ContactSection from '@/components/Contact/ContactSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <Breadcrumb  pageName='Contact' title='Contact Us'  />

        <ContactSection/>
    </div>
  )
}

export default page