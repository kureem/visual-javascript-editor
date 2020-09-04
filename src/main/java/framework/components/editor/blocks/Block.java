package framework.components.editor.blocks;

import framework.components.JSContainer;
import jsweet.lang.Object;

public class Block extends JSContainer{

	
	private JSContainer html = new JSContainer("html", "div");
	private JSContainer title = new JSContainer("title", "div");
	public Block(String name) {
		super(name, "div");
		addClass("gjs-block gjs-one-bg gjs-four-color-h");
		addChild(html);
		title.addClass("gjs-block-label");
		addChild(title);
	}
	
	public Block(Object block) {
		this((String)block.$get("name"));
		setBlock(block);
	}
	
	
	public void setBlock(Object obj) {
		String title = (String)obj.$get("title");
		this.title.setHtml(title);
		if(obj.hasOwnProperty("iconName")) {
			String iconName = (String)obj.$get("iconName");
			addClass(iconName);
		}else if(obj.hasOwnProperty("html")) {
			String html = (String)obj.$get("html");
			this.html.setHtml(html);
		}
	}

}
