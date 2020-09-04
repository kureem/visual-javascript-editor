package framework.components.editor.tools;

import framework.components.JSContainer;

public class PlaceholderTools extends JSContainer{

	private JSContainer placeholder;
	
	public PlaceholderTools(String name) {
		super(name, "div");
		addClass("gjs-tools gjs-tools-gl");
		placeholder = addChild("placeholder", "div", "gjs-placeholder vertical");
		placeholder.setHtml("<div class=\"gjs-placeholder-int\"></div>");
	}
	
	

}
