package framework.components.editor;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Function;

public class EditorPanelButton extends JSContainer{

	private JSContainer buttons = new JSContainer("buttons", "div");
	public EditorPanelButton(String name) {
		super(name, "div");
		addClass("gjs-pn-panel");
		addClass("gjs-pn-" + name);
		addClass("gjs-one-bg gjs-two-color");
		
		buttons.addClass("gjs-pn-buttons");
		addChild(buttons);
		
	}
	
	
	public EditorPanelButton addButton(String name, String title, String faButtonName, Function event) {
		
		
		JSContainer btn = new JSContainer(name, "span");
		btn.setAttribute("title", title);
		btn.addClass("gjs-pn-btn");
		buttons.addChild(btn);
		
		
		if(event != null) {
			btn.addClass("fa");
			btn.addClass("fa-" + faButtonName);
			btn.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					Editor editor = source.getAncestorWithClass("editor");
					event.apply(source, editor);
				}
			}, "click");
		}
		return this;
	}

}
