import { DoubleSide} from "three";
import { useVideoTexture } from "@react-three/drei";
import React, { useRef, useEffect, useState } from 'react';

export default function WallVideo() {

    const [pause, setPause] = useState(false)

    const props= {
        unsuspend: 'canplay',
        muted: true,
        loop: true,
        start: pause
      }

    const texture = useVideoTexture("/static/video.mp4" , props)

    const onHandleBanana = () => {
        setPause(true)
    }

    

    return (
            <mesh receiveShadow position-y={ 6.5 } position-x={-15} rotation-y={ Math.PI * 0.5 } onClick={onHandleBanana} >
          
                <planeGeometry args={[18, 18]} />
                <meshStandardMaterial side={DoubleSide} map={texture} />
           
            
            
        </mesh>
        
    )
}