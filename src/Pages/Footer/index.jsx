import React  from 'react' 
import * as S from "./style"

export default function Subs (){
  return(
    <>
        <S.Container>
            <h2>SUBSCRIBE</h2>
            <p>Sign up for newsletter</p>
            <S.Form>
              <input type='email' placeholder='Your Email'/>
            
              <button>SUBMIT</button>
              
            </S.Form>
        </S.Container>
    </>
  )
}