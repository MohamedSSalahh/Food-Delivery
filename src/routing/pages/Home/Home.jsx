import React, { useState } from 'react'
import Header from '../../../components/Header/Header'
import ExploreMenu from '../../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../../components/AppDownload/AppDownload'


export default function Home() {



  return (
  <>
  <Header/>
    <ExploreMenu/>
    <FoodDisplay/>
    <AppDownload/>
  </>
  )
}
