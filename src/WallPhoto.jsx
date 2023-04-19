import { useTexture } from "@react-three/drei";
import { useState } from "react";
import { DoubleSide } from "three";


export default function WallPhoto() {
    
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    var idImage = 0;
    
    const [textureUrl, setTextureUrl] = useState(images[idImage]);
    const PATH = "/static/photos/"

    const props = useTexture({
        map: PATH + textureUrl
    })


    const onHandleBanana = () => {
        let idAnterior = textureUrl
        do{
            idImage = Math.floor(Math.random() * images.length);
        } while ( idAnterior == images[idImage] );

        setTextureUrl(images[idImage])           
    }

    return (
        <mesh receiveShadow position-z={ -9 } position-y={ 6.5 } rotation-z = { Math.PI*2 } onPointerEnter={onHandleBanana}>
            <planeGeometry args={[30, 18]} />
            <meshStandardMaterial {...props} side={DoubleSide}  />
        </mesh>
    )
}