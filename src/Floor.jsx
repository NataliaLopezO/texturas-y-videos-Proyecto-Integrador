import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Floor() {

    const PATH = "/static/photos/"

    const props = useTexture({
        map: PATH + 'img4.jpg'
    })

    return (
        <mesh receiveShadow position-y={ - 2.5 } rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[30, 18]} />
            <meshStandardMaterial {...props} side={DoubleSide}  />
        </mesh>
    )
}