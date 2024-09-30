import React from 'react'
import Photos from '../components/home/photo/Photos'
import Feauture from '../components/home/feauture/Feauture'
import About from '../components/home/about/About'

import Cards from '../components/blogg/cards/Cards'
import Started from '../components/home/started/Started'
import List from '../components/home/list/List'
import Testimonials from '../components/home/teatimonials/Testimonials'
import Join from '../components/blogg/join/Join'

function Home() {
  return (
 <>
 <Photos/>
 <Feauture/>
 <About/>
<Cards/>
<Started/>
<List/>
<Testimonials/>
<Join/>
 </>
  )
}

export default Home