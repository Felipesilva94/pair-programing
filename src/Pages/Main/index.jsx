import React  from 'react' 
import Recipes from '../../components/recipes'
import About from '../../components/about'
import Subs from '../../components/subs'

export default function Main (){
  return(
    <>
    <main>
        <Recipes/>
        <About />
        <Subs/>
    </main>    
    </>
  )
}