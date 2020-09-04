package framework.components.editor.tools;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.editor.Editor;
import jsweet.dom.Event;
import jsweet.lang.Function;

public class BlockToolbar extends JSContainer{

	private JSContainer actionBar = new JSContainer("actionBar", "div");
	
	public BlockToolbar(String name) {
		super(name, "div");
		addClass("gjs-toolbar");
		addChild(actionBar);
	}
	
	
	public void addAction(String name, String title, String iconName, Function event) {
		JSContainer act = new JSContainer(name, "div").addClass("gjs-toolbar-item");
		act.setAttribute("title", title);
		act.addClass("fa").addClass("fa-" + iconName);
		actionBar.addChild(act);
		act.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Editor editor = source.getAncestorWithClass("editor");
				event.apply(source, editor);
			}
		}, "click");
	}
	
	

}
