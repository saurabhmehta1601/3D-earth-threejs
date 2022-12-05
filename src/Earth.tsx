import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const EarthMesh = () => {
    const colorMap = useLoader(TextureLoader, 'earth_daymap.jpg')
    const [clicked, setClicked] = useState(false)
    const earthRef = useRef<any>()
    useFrame(() => {
        if (earthRef.current)
            earthRef.current.rotation.x += 0.001
        earthRef.current.rotation.y += 0.005
    })

    return (
        <mesh ref={earthRef} position={[0, 0, -18]} scale={clicked ? 2 : 1}
            onClick={() => setClicked(!clicked)}>
            <sphereBufferGeometry args={[2.4]} />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    )
}

export default EarthMesh