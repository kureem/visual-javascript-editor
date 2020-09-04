package framework.components.editor.blocks;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Object;

public class BlockCategory extends JSContainer{

	private JSContainer title = new JSContainer("title", "div");
	
	
	private JSContainer container =new JSContainer("container", "div");
	
	
	private static String innerHTM = "<i class=\"gjs-caret-icon fa fa-caret-down\"></i>$title";
	
	public BlockCategory(String name) {
		super(name, "div");
		addClass("gjs-block-category");
		
		title.addClass("gjs-title");
		addChild(title);
		title.setHtml(innerHTM);
		container.addClass("gjs-blocks-c");
		addChild(container);
		open();
		
		title.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				toggle();
			}
		}, "click");
	}
	
	
	public void setTitle(String tit) {
		this.title.setHtml(innerHTM.replace("$title", tit));
		open();
	}
	
	
	public void open() {
		this.title.setHtml(this.title.getHtml().replace("right", "down"));
		addClass("gjs-open");
		container.setStyle("display", null);
	}
	
	public void close() {
		this.title.setHtml(this.title.getHtml().replace("down", "right"));
		removeClass("gjs-open");
		container.setStyle("display", "none");
	}
	
	public boolean isOpen() {
		return hasClass("gjs-open");
	}
	
	public void toggle() {
		if(isOpen()) {
			close();
		}else {
			open();
		}
	}
	
	public void addBlock(Block block) {
		container.addChild(block);
	}
	
	public void addBlock(Object obj) {
		container.addChild(new Block(obj) );
	}

}
