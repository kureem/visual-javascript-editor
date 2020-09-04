package framework.components.editor.tools;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.editor.Editor;
import jsweet.dom.Event;
import jsweet.lang.Function;

public class TextToolbar extends JSContainer{

	private JSContainer actionBar = new JSContainer("actionBar", "div");
	
	
	
	public TextToolbar(String name) {
		super(name, "div");
		addClass("gjs-rte-toolbar gjs-one-bg");
		actionBar.addClass("gjs-rte-actionbar");
		addChild(actionBar);
	}
	
	
	public void addAction(String name, String title, String innerHtml, Function event) {
		JSContainer action = new JSContainer(name, "span").addClass("gjs-rte-action").setHtml(innerHtml);
		actionBar.addChild(action);
		action.setAttribute("title", title);
		action.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Editor editor = source.getAncestorWithClass("editor");
				event.apply(source, editor);
			}
		}, "click");
	}

}
