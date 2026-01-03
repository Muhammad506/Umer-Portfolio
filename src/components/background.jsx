import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import * as CANNON from "cannon-es";
import { useEffect, useRef } from "react";

/* ---------------- PHYSICS WORLD ---------------- */
const world = new CANNON.World();
world.gravity.set(0, -6, 0); // softer gravity for background

const material = new CANNON.Material("default");
world.defaultContactMaterial = new CANNON.ContactMaterial(material, material, {
    restitution: 0.9,
    friction: 0.1,
});

/* ---------------- SPHERES ---------------- */
const spheres = [];

function createSpheres(count = 80) {
    for (let i = 0; i < count; i++) {
        const r = Math.random() * 0.08 + 0.05; // 🔹 tiny spheres

        const body = new CANNON.Body({
            mass: 0.8,
            shape: new CANNON.Sphere(r),
            material,
            position: new CANNON.Vec3(
                (Math.random() - 0.5) * 8,
                Math.random() * 8 + 5,
                (Math.random() - 0.5) * 6
            ),
        });

        body.linearDamping = 0.02;

        const mesh = new THREE.Mesh(
            new THREE.SphereGeometry(r, 16, 16),
            new THREE.MeshStandardMaterial({
                color: "#deacfc", // 💜 purple
                emissive: "#6b21a8",
                emissiveIntensity: 0.4,
            })
        );

        // random initial movement
        body.velocity.set(
            (Math.random() - 0.5) * 2,
            0,
            (Math.random() - 0.5) * 2
        );

        world.addBody(body);
        spheres.push({ body, mesh });
    }
}
createSpheres();

/* ---------------- SCENE ---------------- */
function Scene() {
    const { scene } = useThree();
    const clock = useRef(0);

    useEffect(() => {
        // FLOOR
        const floor = new CANNON.Body({
            mass: 0,
            shape: new CANNON.Plane(),
            material,
        });
        floor.position.y = -3.5; // 🔻 lower floor
        floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

        world.addBody(floor);

        // WALLS (keep spheres inside screen)
        const createWall = (x, z, rotY = 0) => {
            const wall = new CANNON.Body({
                mass: 0,
                shape: new CANNON.Plane(),
            });
            wall.position.set(x, 0, z);
            wall.quaternion.setFromEuler(0, rotY, 0);
            world.addBody(wall);
        };

        createWall(0, -7, 0);
        createWall(0, 7, Math.PI);
        createWall(-10, 0, Math.PI / 2);
        createWall(10, 0, -Math.PI / 2);


        spheres.forEach((s) => scene.add(s.mesh));
    }, [scene]);

    useFrame((_, delta) => {
        world.step(1 / 60, delta);
        clock.current += delta;

        spheres.forEach(({ body, mesh }) => {
            // smooth random drifting
            body.applyForce(
                new CANNON.Vec3(
                    Math.sin(clock.current + body.id) * 0.2,
                    0,
                    Math.cos(clock.current + body.id) * 0.2
                ),
                body.position
            );

            mesh.position.copy(body.position);
            mesh.quaternion.copy(body.quaternion);
        });
    });

    return null;
}

/* ---------------- MAIN BACKGROUND ---------------- */
export default function PhysicsBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <Canvas camera={{ position: [0, 4, 10], fov: 65 }}>
                <ambientLight intensity={0.6} />
                <pointLight position={[5, 10, 5]} intensity={1} />
                <Scene />
            </Canvas>
        </div>
    );
}
