import React  from 'react' 
import { GlobalStyle } from './Global/GlobalStyle'
import Header from './Pages/Header'
import Main from './Pages/Main'

export default function App (){
  return(
    <>
    <GlobalStyle/>
    <Header />
    <Main/>
    </>
  )
}
