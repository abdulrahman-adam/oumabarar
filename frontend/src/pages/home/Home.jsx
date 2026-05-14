import React from 'react'
import CategoryDrillDown from '../../components/categoryDrillDown/CategoryDrillDown'
import LatestFeatured from '../../components/latestFeatured/LatestFeatured'
import CategoryHeroSlider from '../../components/categoryHeroSlider/CategoryHeroSlider'
import Hero from '../../components/hero/Hero'


const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryHeroSlider />
      <CategoryDrillDown />
      {/* <Slider /> */}
      <LatestFeatured />
    </div>
  )
}

export default Home