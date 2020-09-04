package framework.components.editor;

import framework.components.JSContainer;
import framework.components.editor.blocks.BlocksPanel;
import framework.components.editor.tools.BlockToolbar;
import framework.components.editor.tools.TextToolbar;
import jsweet.lang.Array;
import jsweet.lang.Function;
import jsweet.lang.Object;

public class Editor extends JSContainer{
	
	private EditorCanvas canvas;
	
	private EditorPanels panels ;
	
	private BlocksPanel blocksPanel;

	public Editor(String name, String tag) {
		super(name, "div");
		addClass("gjs-editor gjs-one-bg gjs-two-color");
		addClass("editor");
		init();
	}
	
	
	public void init() {
		canvas = new EditorCanvas("canvas");
		panels = new EditorPanels("panels");
		addChild(canvas);
		addChild(panels);
		blocksPanel = new BlocksPanel("blocksPanel");
		panels.getViewsContainer().addChild(blocksPanel);
	}
	
	
	
	public void addBlocks(Array<Object> blocks) {
		for(Object block : blocks) {
			blocksPanel.addBlock(block);
		}
	}
	
	public void addCommand(String panelName, String name, String title, String faButtonName, Function event) {
		panels.getPanelButton(panelName).addButton(name, title, faButtonName, event);
		
	}
	
	public void addCommand(String section,Object command) {
		String name = (String)command.$get("name");
		String title = (String)command.$get("title");
		String faButtonName = (String)command.$get("iconName");
		Function event = (Function)command.$get("action");
		addCommand(section, name, title, faButtonName, event);
	}
	
	
	public void addCommands(String section, Array<Object> commands) {
		for(Object command : commands) {
			addCommand(section,command);
		}
	}
	
	@SuppressWarnings("unchecked")
	public void addCommands(Object commands) {
		String[] sections = Object.keys(commands);
		for(String section : sections) {
			Array<Object> arCommands = (Array<Object>)commands.$get(section);
			addCommands(section,arCommands);
		}
	}
	
	
	public void addTextToolbarAction(String name, String title, String innerHtml, Function action) {
		getTextToolbar().addAction(name, title, innerHtml, action);
	}
	
	public void addTextToolbarAction(Object action) {
		String name = (String)action.$get("name");
		String title = (String)action.$get("title");
		String innerHtml = (String)action.$get("innerHtml");
		Function event = (Function)action.$get("action");
		addTextToolbarAction(name, title, innerHtml, event);
	}
	
	public void addTextToolbarActions(Array<Object> actions) {
		for(Object action : actions) {
			addTextToolbarAction(action);
		}
	}
	
	public TextToolbar getTextToolbar() {
		return canvas.getCanvasTools().getSelectTools().getTextToolbar();
	}
	
	
	public void addBlockToolbarAction(String name, String title, String icon, Function action) {
		getBlockToolbar().addAction(name, title, icon, action);
	}
	
	
	public void addBlockToolbarAction(Object action) {
		String name = (String)action.$get("name");
		String title = (String)action.$get("title");
		String iconName = (String)action.$get("iconName");
		Function event = (Function)action.$get("action");
		addBlockToolbarAction(name, title, iconName, event);
	}
	
	public void addBlockToolbarActions(Array<Object> actions) {
		for(Object action : actions) {
			addBlockToolbarAction(action);
		}
	}
	
	public BlockToolbar getBlockToolbar() {
		return canvas.getCanvasTools().getSelectTools().getBlockToolbar();
	}
	

}
