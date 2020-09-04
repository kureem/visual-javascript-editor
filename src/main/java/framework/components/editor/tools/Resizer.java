package framework.components.editor.tools;

import framework.components.JSContainer;

public class Resizer extends JSContainer{
	
	private JSContainer resizerC = new JSContainer("c", "div");

	private static String[] POSITIONS = new String[] {"tl", "tc", "tr", "cl", "cr", "bl", "bc", "br"};
	
	public Resizer(String name) {
		super(name, "div");
		resizerC.addClass("gjs-resizer-c");
		for(String s : POSITIONS) {
			resizerC.addChild(s, "i", "gjs-resizer-h-" +s);
		}
	}
	
	

}
