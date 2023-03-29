import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";
import { addCube } from "./viewer_cube";

const container = document.getElementById("viewer-container");
const viewer = new IfcViewerAPI({
    container,
    backgroundColor: new Color(0xffffff),
});
viewer.axes.setAxes();
viewer.grid.setGrid();

window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
viewer.clipper.active = true;

window.onkeydown = (event) => {
    if (event.code === "KeyP") {
        viewer.clipper.createPlane();
    } else if (event.code === "KeyO") {
        viewer.clipper.deletePlane();
    }
};
async function loadIfc(url) {
    const model = await viewer.IFC.loadIfcUrl(url, true);
    viewer.shadowDropper.renderShadow(model.modelID);
    const camera = viewer.context.getCamera();
    addCube(viewer, model, camera);
    document.querySelector(".loader__wrap").style.display = "none";
}

// load model from the below path in your repository
loadIfc("../models/test.ifc");
