package framework.components.editor;

import framework.components.JSContainer;
import framework.components.editor.tools.CanvasTools;

public class EditorCanvas extends JSContainer{

	JSContainer canvasFrames = null;
	JSContainer frames = null;
	JSContainer framesWrapper = null;
	JSContainer iframe = null;
	CanvasTools canvasTools = new CanvasTools("canvasTools");
	
	public EditorCanvas(String name) {
		super(name, "div");
		addClass("gjs-cv-canvas");
		canvasFrames = addChild("canvasFrames", "div", "gjs-cv-canvas__frames");
		frames = canvasFrames.addChild("frames", "div", "gjs-frames");
		framesWrapper = frames.addChild("framesWrapper", "div", "gjs-frame-wrapper");
		framesWrapper.setStyle("top", "0px").setStyle("left", "0px");
		iframe = framesWrapper.addChild("iframe", "iframe", "gjs-frame");
		iframe.setAttribute("allowfullscreen", "allowfullscreen");
		addChild(canvasTools);
	}

	public JSContainer getIframe() {
		return iframe;
	}

	public CanvasTools getCanvasTools() {
		return canvasTools;
	}
	
	
	
	
	

}
