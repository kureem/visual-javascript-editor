package framework.components.editor.tools;

import framework.components.JSContainer;

public class CanvasTools extends JSContainer{

	private PlaceholderTools placeholderTools = new PlaceholderTools("placeholderTools");
	
	private SelectTools selectTools = new SelectTools("selectTools");
	
	private HighlightTools highlightTools = new HighlightTools("highlightTools");
	
	public CanvasTools(String name) {
		super(name, "div");
		addClass("gjs-cv-canvas__tools");
		
		addChild(placeholderTools).addChild(selectTools).addChild(highlightTools);
	}

	@Override
	public String getId() {
		return "gjs-cv-tools";
	}

	public PlaceholderTools getPlaceholderTools() {
		return placeholderTools;
	}

	public SelectTools getSelectTools() {
		return selectTools;
	}

	public HighlightTools getHighlightTools() {
		return highlightTools;
	}
	
	
	
	
	
	
	

}
