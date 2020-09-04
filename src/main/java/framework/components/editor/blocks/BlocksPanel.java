package framework.components.editor.blocks;

import framework.components.JSContainer;
import jsweet.lang.Object;

public class BlocksPanel extends JSContainer{
	
	private JSContainer categories = new JSContainer("categories", "div");

	public BlocksPanel(String name) {
		super(name, "div");
		addClass("gjs-blocks-cs gjs-one-bg gjs-two-color");
		categories.addClass("gjs-block-categories");
		addChild(categories);
		addCategory("basic", "Basic");
	}
	
	public BlockCategory addCategory(String name, String title) {
		BlockCategory category = new BlockCategory(name);
		category.setTitle(title);
		categories.addChild(category);
		return category;
	}
	
	
	public BlockCategory getCategory(String name) {
		return (BlockCategory)categories.getChild(name);
	}
	
	public void addBlock(Object block) {
		String category = (String)block.$get("category");
		if(category == null) {
			category = "basic";
		}
		
		getCategory(category).addBlock(block);
	}
	
	

}
