import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";

import ViewCube from "./ViewCube";

const ViewCubeContainer = ({ viewer, model }) => {
    const objectRef = useRef();
    const cameraRef = useRef();
    const raycasterRef = useRef();

    useEffect(() => {
        if (viewer) {
            // stats setup

            function epsilon(value) {
                return Math.abs(value) < 1e-10 ? 0 : value;
            }

            function getCameraCSSMatrix(matrix) {
                const { elements } = matrix;

                return `matrix3d(
          ${epsilon(elements[0])},
          ${epsilon(-elements[1])},
          ${epsilon(elements[2])},
          ${epsilon(elements[3])},
          ${epsilon(elements[4])},
          ${epsilon(-elements[5])},
          ${epsilon(elements[6])},
          ${epsilon(elements[7])},
          ${epsilon(elements[8])},
          ${epsilon(-elements[9])},
          ${epsilon(elements[10])},
          ${epsilon(elements[11])},
          ${epsilon(elements[12])},
          ${epsilon(-elements[13])},
          ${epsilon(elements[14])},
          ${epsilon(elements[15])})`;
            }
            const camera = viewer.context.getCamera();
            const scene = viewer.context.getScene();
            const raycaster = viewer.context.ifcCaster.raycaster;

            function animate() {
                let cube = document.querySelector(".cube");
                const mat = new THREE.Matrix4();
                setInterval(() => {
                    if (cube && cameraRef.current) {
                        mat.extractRotation(
                            cameraRef.current.matrixWorldInverse
                        );
                        cube.style.transform = `translateZ(-500px) ${getCameraCSSMatrix(
                            mat
                        )}`;
                    }
                }, 10);
                const controls = viewer.context.ifcCamera.cameraControls;

                TWEEN.update();
                controls.update();
            }

            // trigger animation

            cameraRef.current = camera;
            raycasterRef.current = raycaster;
            animate();
            // setup mouse event handlers
        }
    }, [viewer]);

    return <ViewCube curRef={objectRef} viewer={viewer} model={model} />;
};

export default ViewCubeContainer;
