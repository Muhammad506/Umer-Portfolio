import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import * as CANNON from "cannon-es";
import { useEffect, useRef } from "react";

/* ---------- PHYSICS ---------- */
const world = new CANNON.World();
world.gravity.set(0, -6, 0);

const material = new CANNON.Material("default");
world.defaultContactMaterial = new CANNON.ContactMaterial(material, material, {
  restitution: 0.9,
  friction: 0.1,
});

const spheres = [];

// 🔥 MORE BALLS (responsive)
const sphereCount = window.innerWidth < 768 ? 90 : 200;

function createSpheres() {
  spheres.length = 0;

  for (let i = 0; i < sphereCount; i++) {
    const r = Math.random() * 0.08 + 0.05;

    const body = new CANNON.Body({
      mass: 0.8,
      shape: new CANNON.Sphere(r),
      material,
      position: new CANNON.Vec3(
        (Math.random() - 0.5) * 14, // 🔥 wider X spawn
        Math.random() * 8 + 4,
        (Math.random() - 0.5) * 10 // 🔥 wider Z spawn
      ),
    });

    body.velocity.set(
      (Math.random() - 0.5) * 1.5,
      0,
      (Math.random() - 0.5) * 1.5
    );

    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(r, 16, 16),
      new THREE.MeshStandardMaterial({
        color: "#deacfc",
        emissive: "#6b21a8",
        emissiveIntensity: 0.4,
      })
    );

    world.addBody(body);
    spheres.push({ body, mesh });
  }
}

function Scene() {
  const group = useRef();
  const { viewport } = useThree();

  useEffect(() => {
    createSpheres();
    spheres.forEach((s) => group.current.add(s.mesh));

    // FLOOR
    const floor = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane(),
    });
    floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    floor.position.y = -3.5;
    world.addBody(floor);

    // WALLS
    const createWall = (x, y, z, rotX = 0, rotY = 0, rotZ = 0) => {
      const wall = new CANNON.Body({ mass: 0, shape: new CANNON.Plane() });
      wall.position.set(x, y, z);
      wall.quaternion.setFromEuler(rotX, rotY, rotZ);
      world.addBody(wall);
    };

    // 🔥 EXTENDED WALLS (left / right)
    const X = window.innerWidth < 768 ? 10 : 16;
    const Z = window.innerWidth < 768 ? 6 : 10;
    const Y = 0;

    createWall(-X, Y, 0, 0, Math.PI / 2, 0); // left
    createWall(X, Y, 0, 0, -Math.PI / 2, 0); // right
    createWall(0, Y, -Z, 0, 0, 0);          // front
    createWall(0, Y, Z, 0, Math.PI, 0);     // back
  }, []);

  useFrame((_, delta) => {
    world.step(1 / 60, delta);

    spheres.forEach(({ body, mesh }) => {
      mesh.position.copy(body.position);
      mesh.quaternion.copy(body.quaternion);
    });
  });

  return <group ref={group} />;
}

/* ---------- BACKGROUND ---------- */
export default function PhysicsBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "black" }}
    >
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 5, 15], fov: 65 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 10, 5]} intensity={1} />
        <Scene />
      </Canvas>
    </div>
  );
}
