import React from 'react';
import Title from '../title'
import Spoon from '../../Assets/spoon.png'
import * as S from './style'

export default function about() {
    return (
        <>
            <S.Container>
                <img src={Spoon} alt="colher" />
                <S.TxtBox>
                    <h2><Title title={'About'}/></h2>
                    <p>Lorem ipsum dolor 
                        sit amet, consectetur 
                        adipiscing elit. Morbi 
                        tincidunt, tortor nec 
                        rhoncus dictum, lorem 
                        massa tempus sem, eu 
                        tincidunt libero velit 
                        sit amet velit. Nunc 
                        in euismod urna. Duis 
                        dapibus, elit eu eleifend 
                        tincidunt, nulla ipsum 
                        consectetur lorem, quis 
                        tempor lorem justo quis 
                        nisi. Nam interdum, nisi 
                        nec mollis sagittis, 
                        enim risus euismod nisi, 
                        quis rutrum quam augue id 
                        mauris. Pellentesque mattis 
                        hendrerit semper. Orci varius 
                        natoque penatibus et magnis 
                        dis parturient montes, 
                        nascetur ridiculus mus. Ut 
                        vestibulum nisl ante, et 
                        ultricies sapien facilisis 
                        aliquam.</p>
                </S.TxtBox>
            </S.Container>
        </>
    );
}