import React from "react";
import cl from "./BimatterLoader.module.scss";

const BimatterLoader = ({ isTransparent = false }) => {
    return (
        <div
            className={
                isTransparent ? cl.loader__wrap__transparent : cl.loader__wrap
            }
        >
            <div className={[cl.loading, cl.loadingAct].join(" ")}>
                <span data-text="b">b</span>
                <span data-text="i">i</span>
                <span data-text="m">m</span>
                <span data-text="a">a</span>
                <span data-text="t">t</span>
                <span data-text="t">t</span>
                <span data-text="e">e</span>
                <span data-text="r">r</span>
            </div>
        </div>
    );
};

export default BimatterLoader;
