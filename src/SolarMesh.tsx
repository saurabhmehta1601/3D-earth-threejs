import React from 'react'
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const SolarMesh = () => {
    const boxRef = useRef<any>()

    useFrame(() => {
        if (boxRef.current)
            boxRef.current.rotation.x += 0.02
    })
    return (
        <mesh ref={boxRef} >
            <boxGeometry args={[1, 0.2, 1]}></boxGeometry>
            <meshBasicMaterial></meshBasicMaterial>
        </mesh>
    )
}

export default SolarMesh