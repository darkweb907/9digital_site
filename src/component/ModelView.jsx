import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Light';
import Loader from './Loader';
import IPhone from './Iphone';
import { Suspense } from "react";

const ModelView = ({ size, item }) => {
  const scale = size === 'large' ? [17, 17, 17] : [15, 15, 15];
  const cameraPosition = size === 'large' ? [0, 0, 5] : [0, 0, 4.2];

  return (
    <>
      <PerspectiveCamera makeDefault position={cameraPosition} />
      <ambientLight intensity={0.3} />
      <Lights />
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
      />

      <group position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IPhone scale={scale} item={item} />
        </Suspense>
      </group>
    </>
  )
}

export default ModelView