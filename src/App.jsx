import {
  EffectComposer,
  Pixelation,
  ToneMapping,
} from "@react-three/postprocessing";
import "./App.css";
import {
  Stage,
  OrbitControls,
  useGLTF,
  ContactShadows,
  SoftShadows,
  Sky,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { ToneMappingMode } from "postprocessing";

function App() {
  const pcLogo = useGLTF("pc-logo.glb");
  return (
    <>
      {/* ENVIRONMENT */}
      <Sky />
      <Environment preset="city" environmentIntensity={0.2} resolution={16} />

      <PresentationControls
        global={true}
        config={{ mass: 1, tension: 170, friction: 26 }}
      >
        <primitive
          object={pcLogo.scene}
          position={[0, 0, 0]}
          intensity={0.1}
          scale={20}
          castShadow
          receiveShadow
        />
      </PresentationControls>
      <directionalLight
        castShadow
        position={[2, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1} />

      {/* POST-PROCESSING */}
      <EffectComposer>
        <Pixelation granularity={4} />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </>
  );
}

export default App;
