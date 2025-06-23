import Spline from "@splinetool/react-spline";
import { Blocker } from "./Blocker";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

export const Gym = () => {
  return (
    <div className="relative w-full h-full">
      <Spline scene="https://prod.spline.design/x9AvaSbmi1rQ3uaQ/scene.splinecode" />
      <Blocker />
    </div>
  );
};

export const FiberGym = ({ ...props }) => {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/x9AvaSbmi1rQ3uaQ/scene.splinecode",
  );
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group
            name="Crown"
            position={[-39.28, 32.7, -2.52]}
            rotation={[-2.62, 0.96, 2.52]}
            scale={0}
          >
            <group
              name="Group"
              visible={false}
              position={[0.09, 98.14, 0.28]}
              rotation={[0, 0, 0]}
              scale={0.63}
            >
              <mesh
                name="Sphere"
                geometry={nodes.Sphere.geometry}
                material={materials.gold}
                castShadow
                receiveShadow
                position={[0, 0, 200.03]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group name="crown" position={[0, 46.99, 0]} scale={0.63}>
              <mesh
                name="Torus 2"
                geometry={nodes["Torus 2"].geometry}
                material={materials.gold}
                castShadow
                receiveShadow
                position={[0, -68.08, 0]}
                rotation={[-Math.PI / 2, 0, -0.4]}
              />
              <mesh
                name="Torus"
                geometry={nodes.Torus.geometry}
                material={materials.gold}
                castShadow
                receiveShadow
                position={[0, -30.36, 0]}
                rotation={[-Math.PI / 2, 0, -0.4]}
              />
              <mesh
                name="Cylinder 2"
                geometry={nodes["Cylinder 2"].geometry}
                material={materials.gold}
                castShadow
                receiveShadow
                position={[0, -49.1, 0]}
              />
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials.gold}
                castShadow
                receiveShadow
                position={[0, -18.37, -1]}
              />
            </group>
          </group>
          <OrthographicCamera
            name="Camera"
            makeDefault={true}
            zoom={6.34}
            far={100000}
            near={-100000}
            up={[0, 1, 0]}
            position={[-828.56, 287.1, 516.67]}
            rotation={[-0.44, -0.95, -0.37]}
            scale={1}
          />
          <group
            name="iPhone 14 Pro"
            position={[-32.93, 7.67, 16.92]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.01}
          >
            <group name="Dynamic Island" position={[-11.4, 260.62, 30.18]}>
              <group
                name="Group1"
                position={[11.58, -12.26, 1.28]}
                rotation={[0, 0, 0]}
                scale={1}
              >
                <mesh
                  name="Ellipse 2"
                  geometry={nodes["Ellipse 2"].geometry}
                  material={materials["Untitled Material"]}
                  castShadow
                  receiveShadow
                  position={[27.83, 0, -0.35]}
                />
                <mesh
                  name="Ellipse"
                  geometry={nodes.Ellipse.geometry}
                  material={materials["Untitled Material"]}
                  castShadow
                  receiveShadow
                  position={[27.83, 0, -0.81]}
                />
                <mesh
                  name="Rectangle"
                  geometry={nodes.Rectangle.geometry}
                  material={materials["Black Border"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.07]}
                />
              </group>
              <mesh
                name="Rectangle 5"
                geometry={nodes["Rectangle 5"].geometry}
                material={materials["Untitled Material"]}
                castShadow
                receiveShadow
                position={[11.5, 8.79, -0.01]}
              />
            </group>
            <group
              name="Camera1"
              position={[53.08, 198.93, -18.9]}
              rotation={[0, 0, 0]}
              scale={1.16}
            >
              <mesh
                name="Cube 2"
                geometry={nodes["Cube 2"].geometry}
                material={materials["camera hold inner"]}
                castShadow
                receiveShadow
                position={[0.24, -2.53, -1.13]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.86}
              />
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[0.24, -2.53, -1.81]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.86}
              />
              <group
                name="Light"
                position={[-25.87, 36.93, -1.91]}
                rotation={[0, 0, 0]}
                scale={[0.94, 0.94, 0.85]}
              >
                <mesh
                  name="Ellipse1"
                  geometry={nodes.Ellipse1.geometry}
                  material={materials["Ellipse1 Material"]}
                  castShadow
                  receiveShadow
                  position={[0.13, 0.39, -2.25]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[1, 1, 1.11]}
                />
                <mesh
                  name="Ellipse 21"
                  geometry={nodes["Ellipse 21"].geometry}
                  material={materials["Camera Lens 2"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.66]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={[0.91, 0.91, 1]}
                />
                <mesh
                  name="Ellipse2"
                  geometry={nodes.Ellipse2.geometry}
                  material={materials["Camera Lens 2"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.34]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={[0.91, 0.91, 1]}
                />
              </group>
              <mesh
                name="Ellipse 3"
                geometry={nodes["Ellipse 3"].geometry}
                material={materials["Untitled Material"]}
                castShadow
                receiveShadow
                position={[-25.87, -41.02, -1.38]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[0.86, 0.86, 0.85]}
              />
              <group
                name="Cam2 2"
                position={[25.45, -30.01, -0.78]}
                rotation={[0, 0, 0]}
                scale={0.86}
              >
                <mesh
                  name="Ellipse 7"
                  geometry={nodes["Ellipse 7"].geometry}
                  material={materials["Pink Items"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.93]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 6"
                  geometry={nodes["Ellipse 6"].geometry}
                  material={materials["Black Border"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 10"
                  geometry={nodes["Ellipse 10"].geometry}
                  material={materials["glass lenses"]}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, -2.07]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 5"
                  geometry={nodes["Ellipse 5"].geometry}
                  material={materials["Untitled Material"]}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, 1.1]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 4"
                  geometry={nodes["Ellipse 4"].geometry}
                  material={materials["Untitled Material"]}
                  castShadow
                  receiveShadow
                  position={[-0.5, -0.19, 1.6]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 9"
                  geometry={nodes["Ellipse 9"].geometry}
                  material={materials.hand}
                  castShadow
                  receiveShadow
                  position={[-3.5, 2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={0.5}
                />
                <mesh
                  name="Ellipse 8"
                  geometry={nodes["Ellipse 8"].geometry}
                  material={materials.hand}
                  castShadow
                  receiveShadow
                  position={[1.5, -2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 31"
                  geometry={nodes["Ellipse 31"].geometry}
                  material={materials["Black Border"]}
                  castShadow
                  receiveShadow
                  position={[-0.5, 0, 2.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
              </group>
              <group
                name="Cam2"
                position={[-25.3, -2.16, -0.78]}
                rotation={[0, 0, 0]}
                scale={0.86}
              >
                <mesh
                  name="Ellipse 71"
                  geometry={nodes["Ellipse 71"].geometry}
                  material={materials["Pink Items"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.93]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 61"
                  geometry={nodes["Ellipse 61"].geometry}
                  material={materials["Black Border"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 101"
                  geometry={nodes["Ellipse 101"].geometry}
                  material={materials["glass lenses"]}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, -2.07]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 51"
                  geometry={nodes["Ellipse 51"].geometry}
                  material={materials["Untitled Material"]}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, 1.1]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 41"
                  geometry={nodes["Ellipse 41"].geometry}
                  material={materials["Untitled Material"]}
                  castShadow
                  receiveShadow
                  position={[-0.5, -0.19, 1.6]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 91"
                  geometry={nodes["Ellipse 91"].geometry}
                  material={materials.hand}
                  castShadow
                  receiveShadow
                  position={[-3.5, 2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={0.5}
                />
                <mesh
                  name="Ellipse 81"
                  geometry={nodes["Ellipse 81"].geometry}
                  material={materials.hand}
                  castShadow
                  receiveShadow
                  position={[1.5, -2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 32"
                  geometry={nodes["Ellipse 32"].geometry}
                  material={materials["Black Border"]}
                  castShadow
                  receiveShadow
                  position={[-0.5, 0, 2.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
              </group>
              <group
                name="Cam1"
                position={[26.18, 23.96, -0.78]}
                rotation={[0, 0, 0]}
                scale={0.86}
              >
                <mesh
                  name="Ellipse 72"
                  geometry={nodes["Ellipse 72"].geometry}
                  material={materials["Pink Items"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.93]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 62"
                  geometry={nodes["Ellipse 62"].geometry}
                  material={materials["Black Border"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 102"
                  geometry={nodes["Ellipse 102"].geometry}
                  material={materials["glass lenses"]}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, -2.07]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 52"
                  geometry={nodes["Ellipse 52"].geometry}
                  material={materials["Untitled Material"]}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, 1.1]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 42"
                  geometry={nodes["Ellipse 42"].geometry}
                  material={materials["Untitled Material"]}
                  castShadow
                  receiveShadow
                  position={[-0.5, -0.19, 1.6]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 92"
                  geometry={nodes["Ellipse 92"].geometry}
                  material={materials.hand}
                  castShadow
                  receiveShadow
                  position={[-3.5, 2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={0.5}
                />
                <mesh
                  name="Ellipse 82"
                  geometry={nodes["Ellipse 82"].geometry}
                  material={materials.hand}
                  castShadow
                  receiveShadow
                  position={[1.5, -2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="Ellipse 33"
                  geometry={nodes["Ellipse 33"].geometry}
                  material={materials["Black Border"]}
                  castShadow
                  receiveShadow
                  position={[-0.5, 0, 2.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
              </group>
            </group>
            <group
              name="Body-Screen"
              position={[10.73, 26.77, 4.95]}
              rotation={[0, 0, 0]}
              scale={[1.02, 1.02, 1.04]}
            >
              <mesh
                name="Screen"
                geometry={nodes.Screen.geometry}
                material={materials["Untitled Material"]}
                position={[-10.45, -18.61, 21.91]}
                scale={[0.98, 0.98, 0.96]}
              />
              <mesh
                name="Screen Border"
                geometry={nodes["Screen Border"].geometry}
                material={materials["Black Border"]}
                position={[-10.45, -18.61, 16.84]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[1.08, 1.08, 1.06]}
              />
              <mesh
                name="Back Side"
                geometry={nodes["Back Side"].geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[-10.04, -18.07, -9.56]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[1.08, 1.08, 1.06]}
              />
              <group
                name="Left Buttons"
                position={[-139.66, 74.64, 0.26]}
                scale={[0.98, 0.98, 0.96]}
              >
                <mesh
                  name="Ellipse3"
                  geometry={nodes.Ellipse3.geometry}
                  material={materials["Pink Items"]}
                  castShadow
                  receiveShadow
                  position={[-0.02, -262.95, -0.09]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={1}
                />
                <mesh
                  name="Rectangle 9"
                  geometry={nodes["Rectangle 9"].geometry}
                  material={materials["Rectangle 9 Material"]}
                  castShadow
                  receiveShadow
                  position={[0.77, 61.22, -0.26]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name="Rectangle 8"
                  geometry={nodes["Rectangle 8"].geometry}
                  material={materials["Pink Items"]}
                  castShadow
                  receiveShadow
                  position={[-1.51, 61.24, 2.07]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name="Rectangle 7"
                  geometry={nodes["Rectangle 7"].geometry}
                  material={materials["Pink Items"]}
                  castShadow
                  receiveShadow
                  position={[-1.51, 11.96, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name="Rectangle 11"
                  geometry={nodes["Rectangle 11"].geometry}
                  material={materials.Metal}
                  castShadow
                  receiveShadow
                  position={[0.24, -241.12, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name="Rectangle 10"
                  geometry={nodes["Rectangle 10"].geometry}
                  material={materials["Pink Items"]}
                  castShadow
                  receiveShadow
                  position={[0.54, -241.12, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name="Rectangle 51"
                  geometry={nodes["Rectangle 51"].geometry}
                  material={materials["Pink Items"]}
                  castShadow
                  receiveShadow
                  position={[-1.51, -38.91, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
              </group>
              <group
                name="Right Buttons"
                position={[118.57, -3.06, 0.26]}
                scale={[0.98, 0.98, 0.96]}
              >
                <mesh
                  name="Button"
                  geometry={nodes.Button.geometry}
                  material={materials["Pink Items"]}
                  castShadow
                  receiveShadow
                  position={[-0.25, -60.23, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name="Button1"
                  geometry={nodes.Button1.geometry}
                  material={materials["Pink Items"]}
                  castShadow
                  receiveShadow
                  position={[-1.53, 51.46, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
              </group>
              <mesh
                name="Metal Border"
                geometry={nodes["Metal Border"].geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[-10.45, -18.61, 13.04]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[1.08, 1.08, 1.06]}
              />
            </group>
          </group>
          <mesh
            name="Pos5"
            geometry={nodes.Pos5.geometry}
            material={nodes.Pos5.material}
            position={[-69.85, 45.7, 22.3]}
            rotation={[0.61, 1.04, -1.43]}
            scale={0.23}
          />
          <mesh
            name="Pos4"
            geometry={nodes.Pos4.geometry}
            material={nodes.Pos4.material}
            position={[-21.11, 22.1, -8.07]}
            rotation={[-1.37, 1.17, 1.37]}
            scale={0.3}
          />
          <mesh
            name="Pos3"
            geometry={nodes.Pos3.geometry}
            material={nodes.Pos3.material}
            position={[-7.74, 27.04, 19.45]}
            rotation={[-1.35, 0.78, 0.73]}
            scale={0.32}
          />
          <mesh
            name="Pos2"
            geometry={nodes.Pos2.geometry}
            material={nodes.Pos2.material}
            position={[-11.76, 19.82, 1.21]}
            rotation={[-Math.PI / 2, 1.07, Math.PI / 2]}
            scale={0.32}
          />
          <mesh
            name="Pos1"
            geometry={nodes.Pos1.geometry}
            material={nodes.Pos1.material}
            position={[-1.02, 3, -4.13]}
            rotation={[-Math.PI / 2, 1.07, Math.PI / 2]}
            scale={2.73}
          />
          <group
            name="guy"
            position={[-35.92, 19.66, -2.65]}
            rotation={[0, Math.PI / 2, 0]}
            scale={15}
          >
            <mesh
              name="model"
              geometry={nodes.model.geometry}
              material={nodes.model.material}
              castShadow
              receiveShadow
            />
          </group>
          <group
            name="pouch"
            position={[-34.24, 10.58, 8.51]}
            rotation={[-Math.PI, 0.36, 3.14]}
            scale={0.01}
          >
            <mesh
              name="sticker_low"
              geometry={nodes.sticker_low.geometry}
              material={materials.stickers}
              castShadow
              receiveShadow
              position={[-1.55, -207.05, -80.07]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.76, 0.67, 0.13]}
            />
            <mesh
              name="sticker_high"
              geometry={nodes.sticker_high.geometry}
              material={materials.stickers}
              castShadow
              receiveShadow
              position={[-1.55, 72.28, -80.42]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.76, 1.75, 0.13]}
            />
            <mesh
              name="pouch1"
              geometry={nodes.pouch1.geometry}
              material={materials.pouch}
              castShadow
              receiveShadow
              position={[0, -6.79, -1.67]}
              scale={[0.98, 1, 1]}
            />
          </group>
          <pointLight
            name="Point Light 2"
            intensity={2.03}
            decay={8}
            distance={205}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            position={[-31.19, 10.33, 17.23]}
            scale={0.5}
          />
          <spotLight
            name="Backlight"
            intensity={5.1}
            angle={0.14}
            penumbra={0.6}
            distance={200}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-fov={119.99999999999999}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            color="#ca98fe"
            position={[-40.4, 20.92, -108.52]}
            rotation={[-1.6, -0.16, -0.03]}
            scale={1}
          />
          <spotLight
            name="Spot Light"
            castShadow
            intensity={1.5}
            angle={0.24}
            penumbra={0.6}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-fov={119.99999999999999}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            color="#97b2fe"
            position={[-243.22, 101.16, -62.37]}
            rotation={[0.64, -0.43, 1.5]}
            scale={1}
          />
          <mesh
            name="Cube1"
            geometry={nodes.Cube1.geometry}
            material={materials["Untitled Material"]}
            castShadow
            receiveShadow
            position={[-25.85, 3.75, -2.65]}
          />

          <OrthographicCamera
            name="1"
            makeDefault={false}
            far={10000}
            near={-50000}
          />
          <hemisphereLight name="Default Ambient Light" intensity={-1} />
        </scene>
      </group>
    </>
  );
};
