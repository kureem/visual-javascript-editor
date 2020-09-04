package framework.components.editor;

import framework.components.JSContainer;

public class EditorPanels extends JSContainer{

	private EditorPanelButton commands = new EditorPanelButton("commands");
	
	private EditorPanelButton options = new EditorPanelButton("options");
	
	private EditorPanelButton views = new EditorPanelButton("views");
	
	private EditorPanelButton devices = new EditorPanelButton("devices");
	
	private JSContainer viewsContainer = new JSContainer("view-container", "div");
	
	public EditorPanels(String name) {
		super(name, "div");
		addClass("gjs-pn-panels");
		addChild(commands);
		commands.addButton("emp", "", "em", null);
		addChild(options);
		addChild(views);
		addChild(devices);
		
		viewsContainer.addClass("gjs-pn-panel gjs-pn-views-container gjs-one-bg gjs-two-color");
		addChild(viewsContainer);		
		
		
	}
	
	
	public JSContainer getViewsContainer() {
		return viewsContainer;
	}
	
	
	public EditorPanelButton getPanelButton(String name) {
		return (EditorPanelButton)getChild(name);
	}
	
	

}
