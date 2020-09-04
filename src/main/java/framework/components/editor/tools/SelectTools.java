package framework.components.editor.tools;

import framework.components.JSContainer;

public class SelectTools extends JSContainer{

	private JSContainer badge;
	
	private JSContainer ghost;
	
	private BlockToolbar blockToolbar;
	
	private Resizer resizer;
	
	private JSContainer offsetV;
	
	private JSContainer offsetFixedV;
	
	private TextToolbar textToolbar;
	
	public SelectTools(String name) {
		super(name, "div");
		addClass("se-gjs-tools");
		
		badge = addChild("badge", "div", "gjs-badge");
		
		ghost = addChild("ghost", "div", "gjs-ghost");
		
		blockToolbar = new BlockToolbar("blockToolbar");
		addChild(blockToolbar);
		
		resizer = new Resizer("resizer");
		addChild(resizer);
		
		offsetV = addChild("offsetv", "div", "gjs-offset-v");
		
		offsetFixedV = addChild("offsetFixedV", "div", "gjs-offset-fixed-v");
		
		textToolbar = new TextToolbar("textToolbar");
		addChild(textToolbar);
	}
	
	

	@Override
	public String getId() {
		return "gjs-tools";
	}



	public JSContainer getBadge() {
		return badge;
	}

	public JSContainer getGhost() {
		return ghost;
	}

	public BlockToolbar getBlockToolbar() {
		return blockToolbar;
	}

	public Resizer getResizer() {
		return resizer;
	}

	public JSContainer getOffsetV() {
		return offsetV;
	}

	public JSContainer getOffsetFixedV() {
		return offsetFixedV;
	}

	public TextToolbar getTextToolbar() {
		return textToolbar;
	}
	
	
	
	
	

}
