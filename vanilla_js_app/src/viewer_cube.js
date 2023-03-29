import * as THREE from "three";

function switchPick(viewer, model, name) {
    // radius of model
    const two = 3;
    const zero = 0;
    var r = 20;
    var c = new THREE.Vector3(zero, zero, zero);
    if (model) {
        r = model.geometry.boundingSphere.radius * two;
        c = model.geometry.boundingSphere.center;
    }
    const coords = new THREE.Vector3(zero, zero, zero);
    switch (name) {
        case "left":
            coords.x = -r + c.x;
            coords.y = c.y;
            coords.z = c.z;

            break;
        case "right":
            coords.x = r + c.x;
            coords.y = c.y;
            coords.z = c.z;

            break;
        case "top":
            // tween.to({pos: {x: zero, y: pos, z: zero}}, speedTween)
            coords.x = c.x;
            coords.y = r + c.y;
            coords.z = c.z;
            break;
        case "bottom":
            // tween.to({pos: {x: zero, y: -pos, z: zero}}, speedTween)
            coords.x = c.x;
            coords.y = -r + c.y;
            coords.z = c.z;
            break;
        case "front":
            // tween.to({pos: {x: pos, y: zero, z: zero}}, speedTween)
            coords.x = c.x;
            coords.y = c.y;
            coords.z = r + c.z;
            break;
        case "back":
            // tween.to({pos: {x: -pos, y: zero, z: zero}}, speedTween)
            coords.x = c.x;
            coords.y = c.y;
            coords.z = -r + c.z;

            break;
        case "left_front":
            // tween.to({pos: {x: pos, y: zero, z: pos}}, speedTween)

            coords.x = -r + c.x;
            coords.y = c.y;
            coords.z = r + c.z;
            break;
        case "left_back":
            // tween.to({pos: {x: -pos, y: zero, z: pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = c.y;
            coords.z = -r + c.z;
            break;
        case "right_front":
            // tween.to({pos: {x: pos, y: zero, z: -pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = c.y;
            coords.z = r + c.z;
            break;
        case "right_back":
            // tween.to({pos: {x: -pos, y: zero, z: -pos}}, speedTween)
            coords.x = -r + c.x;
            coords.y = c.y;
            coords.z = -r + c.z;
            break;
        case "top_left":
            // tween.to({pos: {x: zero, y: pos, z: pos}}, speedTween)
            coords.x = -r + c.x;
            coords.y = r + c.y;
            coords.z = c.z;
            break;
        case "top_right":
            // tween.to({pos: {x: zero, y: pos, z: -pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = r + c.y;
            coords.z = c.z;

            break;
        case "top_front":
            // tween.to({pos: {x: pos, y: pos, z: zero}}, speedTween)
            coords.x = c.x;
            coords.y = r + c.y;
            coords.z = r + c.z;

            break;
        case "top_back":
            // tween.to({pos: {x: -pos, y: pos, z: zero}}, speedTween)
            coords.x = c.x;
            coords.y = r + c.y;
            coords.z = -r + c.z;

            break;
        case "bottom_left":
            // tween.to({pos: {x: zero, y: -pos, z: pos}}, speedTween)

            coords.x = -r + c.x;
            coords.y = -r + c.y;
            coords.z = c.z;
            break;
        case "bottom_right":
            // tween.to({pos: {x: zero, y: -pos, z: -pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = -r + c.y;
            coords.z = c.z;
            break;
        case "bottom_front":
            // tween.to({pos: {x: pos, y: -pos, z: zero}}, speedTween)
            coords.x = c.x;
            coords.y = -r + c.y;
            coords.z = r + c.z;
            break;
        case "bottom_back":
            // tween.to({pos: {x: -pos, y: -pos, z: zero}}, speedTween)
            coords.x = c.x;
            coords.y = -r + c.y;
            coords.z = -r + c.z;

            break;
        case "front_left":
            // tween.to({pos: {x: pos, y: zero, z: pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = c.y;
            coords.z = r + c.z;

            break;
        case "right_left":
            // tween.to({pos: {x: pos, y: zero, z: pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = c.y;
            coords.z = r + c.z;

            break;
        case "left_right":
            // tween.to({pos: {x: pos, y: zero, z: pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = c.y;
            coords.z = -r + c.z;
            break;
        case "back_left":
            // tween.to({pos: {x: -pos, y: zero, z: pos}}, speedTween)
            coords.x = -r + c.x;
            coords.y = c.y;
            coords.z = r + c.z;
            break;
        case "front_right":
            // tween.to({pos: {x: pos, y: zero, z: -pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = c.y;
            coords.z = -r + c.z;
            break;
        case "back_right":
            // tween.to({pos: {x: -pos, y: zero, z: -pos}}, speedTween)

            coords.x = r + c.x;
            coords.y = c.y;
            coords.z = -r + c.z;

            break;
        case "left_top":
            // tween.to({pos: {x: zero, y: pos, z: pos}}, speedTween)
            coords.x = c.x;
            coords.y = r + c.y;
            coords.z = r + c.z;
            break;
        case "right_top":
            // tween.to({pos: {x: zero, y: pos, z: -pos}}, speedTween)
            coords.x = c.x;
            coords.y = r + c.y;
            coords.z = -r + c.z;
            break;
        case "front_top":
            // tween.to({pos: {x: pos, y: pos, z: zero}}, speedTween)
            coords.x = r + c.x;
            coords.y = r + c.y;
            coords.z = c.z;
            break;
        case "back_top":
            // tween.to({pos: {x: -pos, y: pos, z: zero}}, speedTween)
            coords.x = -r + c.x;
            coords.y = r + c.y;
            coords.z = c.z;
            break;
        case "left_bottom":
            // tween.to({pos: {x: zero, y: -pos, z: pos}}, speedTween)
            coords.x = c.x;
            coords.y = -r + c.y;
            coords.z = r + c.z;
            break;
        case "right_bottom":
            // tween.to({pos: {x: zero, y: -pos, z: -pos}}, speedTween)

            coords.x = r + c.x;
            coords.y = -r + c.y;
            coords.z = c.z;

            break;
        case "front_bottom":
            // tween.to({pos: {x: pos, y: -pos, z: zero}}, speedTween)
            coords.x = r + c.x;
            coords.y = -r + c.y;
            coords.z = c.z;
            break;
        case "back_bottom":
            // tween.to({pos: {x: -pos, y: -pos, z: zero}}, speedTween)
            coords.x = -r + c.x;
            coords.y = -r + c.y;
            coords.z = c.z;
            break;
        case "top_left_front":
            // tween.to({pos: {x: pos, y: pos, z: pos}}, speedTween)
            coords.x = -r + c.x;
            coords.y = r + c.y;
            coords.z = r + c.z;
            break;
        case "top_left_back":
            // tween.to({pos: {x: -pos, y: pos, z: pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = r + c.y;
            coords.z = -r + c.z;

            break;
        case "top_right_front":
            // tween.to({pos: {x: pos, y: pos, z: -pos}}, speedTween)

            coords.x = r + c.x;
            coords.y = r + c.y;
            coords.z = r + c.z;
            break;
        case "top_right_back":
            // tween.to({pos: {x: -pos, y: pos, z: -pos}}, speedTween)

            coords.x = -r + c.x;
            coords.y = r + c.y;
            coords.z = -r + c.z;
            break;
        case "bottom_left_front":
            // tween.to({pos: {x: pos, y: -pos, z: pos}}, speedTween)

            coords.x = -r + c.x;
            coords.y = -r + c.y;
            coords.z = r + c.z;
            break;
        case "bottom_left_back":
            // tween.to({pos: {x: -pos, y: -pos, z: pos}}, speedTween)
            coords.x = -r + c.x;
            coords.y = -r + c.y;
            coords.z = -r + c.z;
            break;
        case "bottom_right_front":
            // tween.to({pos: {x: pos, y: -pos, z: -pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = -r + c.y;
            coords.z = r + c.z;
            break;
        case "bottom_right_back":
            // tween.to({pos: {x: -pos, y: -pos, z: -pos}}, speedTween)
            coords.x = r + c.x;
            coords.y = -r + c.y;
            coords.z = -r + c.z;

            break;
        default:
            break;
    }
    const controls = viewer.context.ifcCamera.cameraControls;
    controls.setPosition(coords.x, coords.y, coords.z, true);
    controls.setLookAt(coords.x, coords.y, coords.z, c.x, c.y, c.z, true);
}
const hoverFunc = (e) => {
    for (let el of e.target.children) {
        el.style.background = "#7d7d7d";
        el.style.color = "#fff";
    }
};
const unHoverFunc = (e) => {
    for (let el of e.target.children) {
        el.style.background = "#ddd";
        el.style.color = "#7d7d7d";
    }
};
const click_handle = (e, viewer, model) => {
    let id = e.target.id;
    if (!id) {
        id = e.target.parentElement.id;
    }
    switchPick(viewer, model, id);
};
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

export function addCube(viewer, model, camera) {
    let cube = document.querySelector(".cube");
    const mat = new THREE.Matrix4();
    setInterval(() => {
        if (cube && camera) {
            mat.extractRotation(camera.matrixWorldInverse);
            cube.style.transform = `translateZ(-500px) ${getCameraCSSMatrix(
                mat
            )}`;
        }
    }, 10);
    for (let edges of document.querySelectorAll(
        ".cube__face__face__edge__wrap"
    )) {
        edges.addEventListener("mouseenter", hoverFunc);
        edges.addEventListener("mouseleave", unHoverFunc);
        edges.addEventListener("click", (e) => click_handle(e, viewer, model));
    }
    for (let fase of document.querySelectorAll(".cube__face")) {
        fase.addEventListener("mouseenter", hoverFunc);
        fase.addEventListener("click", (e) => click_handle(e, viewer, model));
    }
    // const controls = viewer.context.ifcCamera.cameraControls;

    // TWEEN.update();
    // controls.update();
}
