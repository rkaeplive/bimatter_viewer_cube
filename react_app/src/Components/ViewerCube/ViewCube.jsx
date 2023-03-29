import React from "react";
import { Vector3 } from "three";
import "./ViewCube.css";

const ViewCube = ({ curRef, viewer, model }) => {
    function switchPick(name) {
        // radius of model
        const two = 3;
        const zero = 0;
        var r = 20;
        var c = new Vector3(zero, zero, zero);
        if (model) {
            r = model.geometry.boundingSphere.radius * two;
            c = model.geometry.boundingSphere.center;
        }
        const coords = new Vector3(zero, zero, zero);
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
        for (let el of e.target.parentElement.children) {
            el.style.background = "#7d7d7d";
            el.style.color = "#fff";
        }
    };
    const unHoverFunc = (e) => {
        for (let el of e.target.parentElement.children) {
            el.style.background = "#ddd";
            el.style.color = "#7d7d7d";
        }
    };
    return (
        <div className="cube__wrap" ref={curRef}>
            <div className="cube">
                <div
                    className="cube__face cube__face--bottom"
                    onClick={() => switchPick("bottom")}
                >
                    bot
                </div>

                <div
                    className="cube__face cube__face--top"
                    onClick={() => switchPick("top")}
                >
                    top
                </div>
                <div
                    className="cube__face cube__face--right"
                    onClick={() => switchPick("right")}
                >
                    right
                </div>
                <div
                    className="cube__face cube__face--left"
                    onClick={() => switchPick("left")}
                >
                    left
                </div>
                <div
                    className="cube__face cube__face--front"
                    onClick={() => switchPick("front")}
                >
                    front
                </div>
                <div
                    className="cube__face cube__face--back"
                    onClick={() => switchPick("back")}
                >
                    back
                </div>
                <div
                    onClick={() => switchPick("top_left")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--top--left"></div>
                    <div className="cube__face__face__edge cube__face--left--top"></div>
                </div>
                <div
                    onClick={() => switchPick("top_right")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--top--right"></div>
                    <div className="cube__face__face__edge cube__face--right--top"></div>
                </div>
                <div
                    onClick={() => switchPick("bottom_left")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--bottom--left"></div>
                    <div className="cube__face__face__edge cube__face--left--bottom"></div>
                </div>
                <div
                    onClick={() => switchPick("bottom_right")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--bottom--right"></div>
                    <div className="cube__face__face__edge cube__face--right--bottom"></div>
                </div>
                <div
                    onClick={() => switchPick("bottom_front")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--front--bottom"></div>
                    <div className="cube__face__face__edge cube__face--bottom--front"></div>
                </div>
                <div
                    onClick={() => switchPick("bottom_back")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--back--bottom"></div>
                    <div className="cube__face__face__edge cube__face--bottom--back"></div>
                </div>
                <div
                    onClick={() => switchPick("top_front")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--front--top"></div>
                    <div className="cube__face__face__edge cube__face--top--front"></div>
                </div>
                <div
                    onClick={() => switchPick("top_back")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--back--top"></div>
                    <div className="cube__face__face__edge cube__face--top--back"></div>
                </div>
                <div
                    onClick={() => switchPick("left_back")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--back--left"></div>
                    <div className="cube__face__face__edge cube__face--left--back"></div>
                </div>
                <div
                    onClick={() => switchPick("right_back")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--back--right"></div>
                    <div className="cube__face__face__edge cube__face--right--back"></div>
                </div>
                <div
                    onClick={() => switchPick("right_front")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge cube__face--front--right"></div>
                    <div className="cube__face__face__edge cube__face--right--front"></div>
                </div>

                <div
                    onClick={() => switchPick("left_front")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge  cube__face--front--left"></div>
                    <div className="cube__face__face__edge cube__face--left--front"></div>
                </div>

                <div
                    onClick={() => switchPick("top_left_front")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge  cube__edge--left--front--top"></div>
                    <div className="cube__face__face__edge cube__edge--front--left--top"></div>
                    <div className="cube__face__face__edge cube__edge--top--left--front"></div>
                </div>
                <div
                    onClick={() => switchPick("top_right_front")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge  cube__edge--right--front--top"></div>
                    <div className="cube__face__face__edge cube__edge--front--right--top"></div>
                    <div className="cube__face__face__edge cube__edge--top--right--front"></div>
                </div>
                <div
                    onClick={() => switchPick("top_left_back")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge  cube__edge--back--left--top"></div>
                    <div className="cube__face__face__edge cube__edge--left--back--top"></div>
                    <div className="cube__face__face__edge cube__edge--top--left--back"></div>
                </div>
                <div
                    onClick={() => switchPick("top_right_back")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge  cube__edge--back--right--top"></div>
                    <div className="cube__face__face__edge cube__edge--right--back--top"></div>
                    <div className="cube__face__face__edge cube__edge--top--right--back"></div>
                </div>

                <div
                    onClick={() => switchPick("bottom_left_front")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge  cube__edge--left--front--bottom"></div>
                    <div className="cube__face__face__edge cube__edge--front--left--bottom"></div>
                    <div className="cube__face__face__edge cube__edge--bottom--left--front"></div>
                </div>
                <div
                    onClick={() => switchPick("bottom_right_front")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge  cube__edge--right--front--bottom"></div>
                    <div className="cube__face__face__edge cube__edge--front--right--bottom"></div>
                    <div className="cube__face__face__edge cube__edge--bottom--right--front"></div>
                </div>
                <div
                    onClick={() => switchPick("bottom_right_back")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge  cube__edge--back--left--bottom"></div>
                    <div className="cube__face__face__edge cube__edge--left--back--bottom"></div>
                    <div className="cube__face__face__edge cube__edge--bottom--left--back"></div>
                </div>
                <div
                    onClick={() => switchPick("bottom_left_back")}
                    onMouseEnter={hoverFunc}
                    onMouseLeave={unHoverFunc}
                    className="cube__face__face__edge__wrap"
                >
                    <div className="cube__face__face__edge  cube__edge--back--right--bottom"></div>
                    <div className="cube__face__face__edge cube__edge--right--back--bottom"></div>
                    <div className="cube__face__face__edge cube__edge--bottom--right--back"></div>
                </div>
            </div>
        </div>
    );
};

export default ViewCube;
