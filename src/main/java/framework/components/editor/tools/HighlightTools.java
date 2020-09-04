package framework.components.editor.tools;

import framework.components.JSContainer;

public class HighlightTools extends JSContainer{

	private JSContainer badge = null;
	
	
	public HighlightTools(String name) {
		super(name, "div");
		
		addClass("gjs-tools");
		
		addChild("gjs-highlighter", "div", "gjs-highlighter");
		
		badge = addChild("gjs-badge", "div", "gjs-badge").addChild("gjs-badge__name", "div", "gjs-badge__name");
		
		addChild("gjs-placeholder", "div", "gjs-placeholder").addChild("gjs-placeholder-int", "div", "gjs-placeholder-int");
		
		addChild("gjs-ghost", "div", "gjs-ghost");
		
		addChild("gjs-toolbar","div", "gjs-toolbar");
		
		addChild("gjs-resizer", "div", "gjs-resizer");
		
		JSContainer offset = addChild("gjs-offset-v", "div", "gjs-offset-v");
		
		JSContainer marginName = offset.addChild("gjs-marginName", "div", "gjs-marginName");
		String[] positions = new String[] {"top", "bottom", "left", "right"};
		for(String position : positions) {
			marginName.addChild(position, "div", "gjs-margin-v-el gjs-margin-v-" + position);
		}
		
		JSContainer paddingName = offset.addChild("gjs-paddingName", "div", "gjs-paddingName");
		for(String position : positions) {
			paddingName.addChild(position, "div", "gjs-padding-v-el gjs-padding-v-" + position);
		}
		
		addChild("gjs-offset-fixed-v", "div", "gjs-offset-fixed-v");
		
	}
	
	
	public void setBadgeName(String name) {
		badge.setHtml(name);
	}
	
	

}
