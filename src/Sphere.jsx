import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";
import React, { useRef} from "react";


export default function Sphere() {

    const sphereRef = useRef(null)

    const PATH = "/static/textures/sphere/"

    useFrame((state, delta)=>{
        
            sphereRef.current.rotation.y += 1 * delta
           
    })


    const props = useTexture({
        map: PATH + "material1.jpg",
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        opacityMap: PATH + 'opacity.jpg'
    })
    return (
        <mesh ref= {sphereRef} castShadow position-y={5} rotation-y={Math.PI / 12} scale ={2}>
            <sphereGeometry args={[2, 110, 110]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}