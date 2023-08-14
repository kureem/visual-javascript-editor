/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace blocks {
    export class Block extends JSContainer {
        /*private*/ html: JSContainer;

        /*private*/ title: JSContainer;

        public constructor(name?: any) {
            if (((typeof name === 'string') || name === null)) {
                let __args = arguments;
                super(name, "div");
                this.html = new JSContainer("html", "div");
                this.title = new JSContainer("title", "div");
                this.addClass("gjs-block gjs-one-bg gjs-four-color-h");
                this.addChild(this.html);
                this.title.addClass("gjs-block-label");
                this.addChild(this.title);
            } else if (((name != null && name instanceof <any>Object) || name === null)) {
                let __args = arguments;
                let block: any = __args[0];
                {
                    let __args = arguments;
                    let name: any = <string>block["name"];
                    super(name, "div");
                    this.html = new JSContainer("html", "div");
                    this.title = new JSContainer("title", "div");
                    this.addClass("gjs-block gjs-one-bg gjs-four-color-h");
                    this.addChild(this.html);
                    this.title.addClass("gjs-block-label");
                    this.addChild(this.title);
                }
                this.html = new JSContainer("html", "div");
                this.title = new JSContainer("title", "div");
                (() => {
                    this.setBlock(block);
                    this.addClass("hello");
                })();
            } else throw new Error('invalid overload');
        }

        public setBlock(obj: Object) {
            const title: string = <string>obj["title"];
            this.title.setHtml(title);
            if (obj.hasOwnProperty("iconName")){
                const iconName: string = <string>obj["iconName"];
                this.addClass(iconName);
            } else if (obj.hasOwnProperty("html")){
                const html: string = <string>obj["html"];
                this.html.setHtml(html);
            }
        }
    }
    Block["__class"] = "framework.components.editor.blocks.Block";
    Block["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace blocks {
    export class BlockCategory extends JSContainer {
        /*private*/ title: JSContainer;

        /*private*/ container: JSContainer;

        static innerHTM: string = "<i class=\"gjs-caret-icon fa fa-caret-down\"></i>$title";

        public constructor(name: string) {
            super(name, "div");
            this.title = new JSContainer("title", "div");
            this.container = new JSContainer("container", "div");
            this.addClass("gjs-block-category");
            this.title.addClass("gjs-title");
            this.addChild(this.title);
            this.title.setHtml(BlockCategory.innerHTM);
            this.container.addClass("gjs-blocks-c");
            this.addChild(this.container);
            this.open();
            this.title.addEventListener(new BlockCategory.BlockCategory$0(this), "click");
        }

        public setTitle(tit: string) {
            this.title.setHtml(/* replace */BlockCategory.innerHTM.split("$title").join(tit));
            this.open();
        }

        public open() {
            this.title.setHtml(/* replace */this.title.getHtml().split("right").join("down"));
            this.addClass("gjs-open");
            this.container.setStyle("display", null);
        }

        public close() {
            this.title.setHtml(/* replace */this.title.getHtml().split("down").join("right"));
            this.removeClass("gjs-open");
            this.container.setStyle("display", "none");
        }

        public isOpen(): boolean {
            return this.hasClass("gjs-open");
        }

        public toggle() {
            if (this.isOpen()){
                this.close();
            } else {
                this.open();
            }
        }

        public addBlock$framework_components_editor_blocks_Block(block: blocks.Block) {
            this.container.addChild(block);
        }

        public addBlock(block?: any) {
            if (((block != null && block instanceof <any>blocks.Block) || block === null)) {
                return <any>this.addBlock$framework_components_editor_blocks_Block(block);
            } else if (((block != null && block instanceof <any>Object) || block === null)) {
                return <any>this.addBlock$jsweet_lang_Object(block);
            } else throw new Error('invalid overload');
        }

        public addBlock$jsweet_lang_Object(obj: Object) {
            this.container.addChild(new blocks.Block(obj));
        }
    }
    BlockCategory["__class"] = "framework.components.editor.blocks.BlockCategory";
    BlockCategory["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace BlockCategory {

        export class BlockCategory$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.toggle();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        BlockCategory$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace blocks {
    export class BlocksPanel extends JSContainer {
        /*private*/ categories: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            this.categories = new JSContainer("categories", "div");
            this.addClass("gjs-blocks-cs gjs-one-bg gjs-two-color");
            this.categories.addClass("gjs-block-categories");
            this.addChild(this.categories);
            this.addCategory("basic", "Basic");
        }

        public addCategory(name: string, title: string): blocks.BlockCategory {
            const category: blocks.BlockCategory = new blocks.BlockCategory(name);
            category.setTitle(title);
            this.categories.addChild(category);
            return category;
        }

        public getCategory(name: string): blocks.BlockCategory {
            return <blocks.BlockCategory><any>this.categories.getChild(name);
        }

        public addBlock(block: Object) {
            let category: string = <string>block["category"];
            if (category == null){
                category = "basic";
            }
            this.getCategory(category).addBlock$jsweet_lang_Object(block);
        }
    }
    BlocksPanel["__class"] = "framework.components.editor.blocks.BlocksPanel";
    BlocksPanel["__interfaces"] = ["framework.components.api.Renderable"];


}
class Editor extends JSContainer {
    /*private*/ canvas: EditorCanvas;

    /*private*/ panels: EditorPanels;

    /*private*/ blocksPanel: blocks.BlocksPanel;

    public constructor(name: string, tag: string) {
        super(name, "div");
        if (this.canvas === undefined) { this.canvas = null; }
        if (this.panels === undefined) { this.panels = null; }
        if (this.blocksPanel === undefined) { this.blocksPanel = null; }
        this.addClass("gjs-editor gjs-one-bg gjs-two-color");
        this.addClass("editor");
        this.init();
    }

    public init() {
        this.canvas = new EditorCanvas("canvas");
        this.panels = new EditorPanels("panels");
        this.addChild(this.canvas);
        this.addChild(this.panels);
        this.blocksPanel = new blocks.BlocksPanel("blocksPanel");
        this.panels.getViewsContainer().addChild(this.blocksPanel);
    }

    public addBlocks(__var_blocks: Array<Object>) {
        for(let index129=0; index129 < __var_blocks.length; index129++) {
            let block = __var_blocks[index129];
            {
                this.blocksPanel.addBlock(block);
            }
        }
    }

    public addCommand$java_lang_String$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(panelName: string, name: string, title: string, faButtonName: string, event: Function) {
        this.panels.getPanelButton(panelName).addButton(name, title, faButtonName, event);
    }

    public addCommand(panelName?: any, name?: any, title?: any, faButtonName?: any, event?: any) {
        if (((typeof panelName === 'string') || panelName === null) && ((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((typeof faButtonName === 'string') || faButtonName === null) && ((event != null && event instanceof <any>Function) || event === null)) {
            return <any>this.addCommand$java_lang_String$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(panelName, name, title, faButtonName, event);
        } else if (((typeof panelName === 'string') || panelName === null) && ((name != null && name instanceof <any>Object) || name === null) && title === undefined && faButtonName === undefined && event === undefined) {
            return <any>this.addCommand$java_lang_String$jsweet_lang_Object(panelName, name);
        } else throw new Error('invalid overload');
    }

    public addCommand$java_lang_String$jsweet_lang_Object(section: string, command: Object) {
        const name: string = <string>command["name"];
        const title: string = <string>command["title"];
        const faButtonName: string = <string>command["iconName"];
        const event: Function = <Function>command["action"];
        this.addCommand$java_lang_String$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(section, name, title, faButtonName, event);
    }

    public addCommands$java_lang_String$jsweet_lang_Array(section: string, commands: Array<Object>) {
        for(let index130=0; index130 < commands.length; index130++) {
            let command = commands[index130];
            {
                this.addCommand$java_lang_String$jsweet_lang_Object(section, command);
            }
        }
    }

    public addCommands(section?: any, commands?: any) {
        if (((typeof section === 'string') || section === null) && ((commands != null && commands instanceof <any>Array) || commands === null)) {
            return <any>this.addCommands$java_lang_String$jsweet_lang_Array(section, commands);
        } else if (((section != null && section instanceof <any>Object) || section === null) && commands === undefined) {
            return <any>this.addCommands$jsweet_lang_Object(section);
        } else throw new Error('invalid overload');
    }

    public addCommands$jsweet_lang_Object(commands: Object) {
        const sections: string[] = Object.keys(commands);
        for(let index131=0; index131 < sections.length; index131++) {
            let section = sections[index131];
            {
                const arCommands: Array<Object> = <Array<Object>>commands[section];
                this.addCommands$java_lang_String$jsweet_lang_Array(section, arCommands);
            }
        }
    }

    public addTextToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name: string, title: string, innerHtml: string, action: Function) {
        this.getTextToolbar().addAction(name, title, innerHtml, action);
    }

    public addTextToolbarAction(name?: any, title?: any, innerHtml?: any, action?: any) {
        if (((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((typeof innerHtml === 'string') || innerHtml === null) && ((action != null && action instanceof <any>Function) || action === null)) {
            return <any>this.addTextToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, innerHtml, action);
        } else if (((name != null && name instanceof <any>Object) || name === null) && title === undefined && innerHtml === undefined && action === undefined) {
            return <any>this.addTextToolbarAction$jsweet_lang_Object(name);
        } else throw new Error('invalid overload');
    }

    public addTextToolbarAction$jsweet_lang_Object(action: Object) {
        const name: string = <string>action["name"];
        const title: string = <string>action["title"];
        const innerHtml: string = <string>action["innerHtml"];
        const event: Function = <Function>action["action"];
        this.addTextToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, innerHtml, event);
    }

    public addTextToolbarActions(actions: Array<Object>) {
        for(let index132=0; index132 < actions.length; index132++) {
            let action = actions[index132];
            {
                this.addTextToolbarAction$jsweet_lang_Object(action);
            }
        }
    }

    public getTextToolbar(): tools.TextToolbar {
        return this.canvas.getCanvasTools().getSelectTools().getTextToolbar();
    }

    public addBlockToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name: string, title: string, icon: string, action: Function) {
        this.getBlockToolbar().addAction(name, title, icon, action);
    }

    public addBlockToolbarAction(name?: any, title?: any, icon?: any, action?: any) {
        if (((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((typeof icon === 'string') || icon === null) && ((action != null && action instanceof <any>Function) || action === null)) {
            return <any>this.addBlockToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, icon, action);
        } else if (((name != null && name instanceof <any>Object) || name === null) && title === undefined && icon === undefined && action === undefined) {
            return <any>this.addBlockToolbarAction$jsweet_lang_Object(name);
        } else throw new Error('invalid overload');
    }

    public addBlockToolbarAction$jsweet_lang_Object(action: Object) {
        const name: string = <string>action["name"];
        const title: string = <string>action["title"];
        const iconName: string = <string>action["iconName"];
        const event: Function = <Function>action["action"];
        this.addBlockToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, iconName, event);
    }

    public addBlockToolbarActions(actions: Array<Object>) {
        for(let index133=0; index133 < actions.length; index133++) {
            let action = actions[index133];
            {
                this.addBlockToolbarAction$jsweet_lang_Object(action);
            }
        }
    }

    public getBlockToolbar(): tools.BlockToolbar {
        return this.canvas.getCanvasTools().getSelectTools().getBlockToolbar();
    }
}
Editor["__class"] = "framework.components.editor.Editor";
Editor["__interfaces"] = ["framework.components.api.Renderable"];



class EditorCanvas extends JSContainer {
    canvasFrames: JSContainer;

    frames: JSContainer;

    framesWrapper: JSContainer;

    iframe: JSContainer;

    canvasTools: tools.CanvasTools;

    public constructor(name: string) {
        super(name, "div");
        this.canvasFrames = null;
        this.frames = null;
        this.framesWrapper = null;
        this.iframe = null;
        this.canvasTools = new tools.CanvasTools("canvasTools");
        this.addClass("gjs-cv-canvas");
        this.canvasFrames = this.addChild("canvasFrames", "div", "gjs-cv-canvas__frames");
        this.frames = this.canvasFrames.addChild("frames", "div", "gjs-frames");
        this.framesWrapper = this.frames.addChild("framesWrapper", "div", "gjs-frame-wrapper");
        this.framesWrapper.setStyle("top", "0px").setStyle("left", "0px");
        this.iframe = this.framesWrapper.addChild("iframe", "iframe", "gjs-frame");
        this.iframe.setAttribute("allowfullscreen", "allowfullscreen");
        this.addChild(this.canvasTools);
    }

    public getIframe(): JSContainer {
        return this.iframe;
    }

    public getCanvasTools(): tools.CanvasTools {
        return this.canvasTools;
    }
}
EditorCanvas["__class"] = "framework.components.editor.EditorCanvas";
EditorCanvas["__interfaces"] = ["framework.components.api.Renderable"];



class EditorPanelButton extends JSContainer {
    /*private*/ buttons: JSContainer;

    public constructor(name: string) {
        super(name, "div");
        this.buttons = new JSContainer("buttons", "div");
        this.addClass("gjs-pn-panel");
        this.addClass("gjs-pn-" + name);
        this.addClass("gjs-one-bg gjs-two-color");
        this.buttons.addClass("gjs-pn-buttons");
        this.addChild(this.buttons);
    }

    public addButton(name: string, title: string, faButtonName: string, event: Function): EditorPanelButton {
        const btn: JSContainer = new JSContainer(name, "span");
        btn.setAttribute("title", title);
        btn.addClass("gjs-pn-btn");
        this.buttons.addChild(btn);
        if (event != null){
            btn.addClass("fa");
            btn.addClass("fa-" + faButtonName);
            btn.addEventListener(new EditorPanelButton.EditorPanelButton$0(this, event), "click");
        }
        return this;
    }
}
EditorPanelButton["__class"] = "framework.components.editor.EditorPanelButton";
EditorPanelButton["__interfaces"] = ["framework.components.api.Renderable"];



namespace EditorPanelButton {

    export class EditorPanelButton$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const editor: Editor = <any>(source.getAncestorWithClass<any>("editor"));
            this.event(source, editor);
        }

        constructor(__parent: any, private event: any) {
            this.__parent = __parent;
        }
    }
    EditorPanelButton$0["__interfaces"] = ["framework.components.api.EventListener"];


}


class EditorPanels extends JSContainer {
    /*private*/ commands: EditorPanelButton;

    /*private*/ options: EditorPanelButton;

    /*private*/ views: EditorPanelButton;

    /*private*/ devices: EditorPanelButton;

    /*private*/ viewsContainer: JSContainer;

    public constructor(name: string) {
        super(name, "div");
        this.commands = new EditorPanelButton("commands");
        this.options = new EditorPanelButton("options");
        this.views = new EditorPanelButton("views");
        this.devices = new EditorPanelButton("devices");
        this.viewsContainer = new JSContainer("view-container", "div");
        this.addClass("gjs-pn-panels");
        this.addChild(this.commands);
        this.commands.addButton("emp", "", "em", null);
        this.addChild(this.options);
        this.addChild(this.views);
        this.addChild(this.devices);
        this.viewsContainer.addClass("gjs-pn-panel gjs-pn-views-container gjs-one-bg gjs-two-color");
        this.addChild(this.viewsContainer);
    }

    public getViewsContainer(): JSContainer {
        return this.viewsContainer;
    }

    public getPanelButton(name: string): EditorPanelButton {
        return <EditorPanelButton><any>this.getChild(name);
    }
}
EditorPanels["__class"] = "framework.components.editor.EditorPanels";
EditorPanels["__interfaces"] = ["framework.components.api.Renderable"];



namespace tools {
    export class BlockToolbar extends JSContainer {
        /*private*/ actionBar: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            this.actionBar = new JSContainer("actionBar", "div");
            this.addClass("gjs-toolbar");
            this.addChild(this.actionBar);
        }

        public addAction(name: string, title: string, iconName: string, event: Function) {
            const act: JSContainer = new JSContainer(name, "div").addClass("gjs-toolbar-item");
            act.setAttribute("title", title);
            act.addClass("fa").addClass("fa-" + iconName);
            this.actionBar.addChild(act);
            act.addEventListener(new BlockToolbar.BlockToolbar$0(this, event), "click");
        }
    }
    BlockToolbar["__class"] = "framework.components.editor.tools.BlockToolbar";
    BlockToolbar["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace BlockToolbar {

        export class BlockToolbar$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const editor: Editor = <any>(source.getAncestorWithClass<any>("editor"));
                this.event(source, editor);
            }

            constructor(__parent: any, private event: any) {
                this.__parent = __parent;
            }
        }
        BlockToolbar$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace tools {
    export class CanvasTools extends JSContainer {
        /*private*/ placeholderTools: tools.PlaceholderTools;

        /*private*/ selectTools: tools.SelectTools;

        /*private*/ highlightTools: tools.HighlightTools;

        public constructor(name: string) {
            super(name, "div");
            this.placeholderTools = new tools.PlaceholderTools("placeholderTools");
            this.selectTools = new tools.SelectTools("selectTools");
            this.highlightTools = new tools.HighlightTools("highlightTools");
            this.addClass("gjs-cv-canvas__tools");
            this.addChild(this.placeholderTools).addChild(this.selectTools).addChild(this.highlightTools);
        }

        /**
         * 
         * @return {string}
         */
        public getId(): string {
            return "gjs-cv-tools";
        }

        public getPlaceholderTools(): tools.PlaceholderTools {
            return this.placeholderTools;
        }

        public getSelectTools(): tools.SelectTools {
            return this.selectTools;
        }

        public getHighlightTools(): tools.HighlightTools {
            return this.highlightTools;
        }
    }
    CanvasTools["__class"] = "framework.components.editor.tools.CanvasTools";
    CanvasTools["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace tools {
    export class HighlightTools extends JSContainer {
        /*private*/ badge: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            this.badge = null;
            this.addClass("gjs-tools");
            this.addChild("gjs-highlighter", "div", "gjs-highlighter");
            this.badge = this.addChild("gjs-badge", "div", "gjs-badge").addChild("gjs-badge__name", "div", "gjs-badge__name");
            this.addChild("gjs-placeholder", "div", "gjs-placeholder").addChild("gjs-placeholder-int", "div", "gjs-placeholder-int");
            this.addChild("gjs-ghost", "div", "gjs-ghost");
            this.addChild("gjs-toolbar", "div", "gjs-toolbar");
            this.addChild("gjs-resizer", "div", "gjs-resizer");
            const offset: JSContainer = this.addChild("gjs-offset-v", "div", "gjs-offset-v");
            const marginName: JSContainer = offset.addChild("gjs-marginName", "div", "gjs-marginName");
            const positions: string[] = ["top", "bottom", "left", "right"];
            for(let index134=0; index134 < positions.length; index134++) {
                let position = positions[index134];
                {
                    marginName.addChild(position, "div", "gjs-margin-v-el gjs-margin-v-" + position);
                }
            }
            const paddingName: JSContainer = offset.addChild("gjs-paddingName", "div", "gjs-paddingName");
            for(let index135=0; index135 < positions.length; index135++) {
                let position = positions[index135];
                {
                    paddingName.addChild(position, "div", "gjs-padding-v-el gjs-padding-v-" + position);
                }
            }
            this.addChild("gjs-offset-fixed-v", "div", "gjs-offset-fixed-v");
        }

        public setBadgeName(name: string) {
            this.badge.setHtml(name);
        }
    }
    HighlightTools["__class"] = "framework.components.editor.tools.HighlightTools";
    HighlightTools["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace tools {
    export class PlaceholderTools extends JSContainer {
        /*private*/ placeholder: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            if (this.placeholder === undefined) { this.placeholder = null; }
            this.addClass("gjs-tools gjs-tools-gl");
            this.placeholder = this.addChild("placeholder", "div", "gjs-placeholder vertical");
            this.placeholder.setHtml("<div class=\"gjs-placeholder-int\"></div>");
        }
    }
    PlaceholderTools["__class"] = "framework.components.editor.tools.PlaceholderTools";
    PlaceholderTools["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace tools {
    export class Resizer extends JSContainer {
        /*private*/ resizerC: JSContainer;

        static POSITIONS: string[]; public static POSITIONS_$LI$(): string[] { if (Resizer.POSITIONS == null) { Resizer.POSITIONS = ["tl", "tc", "tr", "cl", "cr", "bl", "bc", "br"]; }  return Resizer.POSITIONS; }

        public constructor(name: string) {
            super(name, "div");
            this.resizerC = new JSContainer("c", "div");
            this.resizerC.addClass("gjs-resizer-c");
            for(let index136=0; index136 < Resizer.POSITIONS_$LI$().length; index136++) {
                let s = Resizer.POSITIONS_$LI$()[index136];
                {
                    this.resizerC.addChild(s, "i", "gjs-resizer-h-" + s);
                }
            }
        }
    }
    Resizer["__class"] = "framework.components.editor.tools.Resizer";
    Resizer["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace tools {
    export class SelectTools extends JSContainer {
        /*private*/ badge: JSContainer;

        /*private*/ ghost: JSContainer;

        /*private*/ blockToolbar: tools.BlockToolbar;

        /*private*/ resizer: tools.Resizer;

        /*private*/ offsetV: JSContainer;

        /*private*/ offsetFixedV: JSContainer;

        /*private*/ textToolbar: tools.TextToolbar;

        public constructor(name: string) {
            super(name, "div");
            if (this.badge === undefined) { this.badge = null; }
            if (this.ghost === undefined) { this.ghost = null; }
            if (this.blockToolbar === undefined) { this.blockToolbar = null; }
            if (this.resizer === undefined) { this.resizer = null; }
            if (this.offsetV === undefined) { this.offsetV = null; }
            if (this.offsetFixedV === undefined) { this.offsetFixedV = null; }
            if (this.textToolbar === undefined) { this.textToolbar = null; }
            this.addClass("se-gjs-tools");
            this.badge = this.addChild("badge", "div", "gjs-badge");
            this.ghost = this.addChild("ghost", "div", "gjs-ghost");
            this.blockToolbar = new tools.BlockToolbar("blockToolbar");
            this.addChild(this.blockToolbar);
            this.resizer = new tools.Resizer("resizer");
            this.addChild(this.resizer);
            this.offsetV = this.addChild("offsetv", "div", "gjs-offset-v");
            this.offsetFixedV = this.addChild("offsetFixedV", "div", "gjs-offset-fixed-v");
            this.textToolbar = new tools.TextToolbar("textToolbar");
            this.addChild(this.textToolbar);
        }

        /**
         * 
         * @return {string}
         */
        public getId(): string {
            return "gjs-tools";
        }

        public getBadge(): JSContainer {
            return this.badge;
        }

        public getGhost(): JSContainer {
            return this.ghost;
        }

        public getBlockToolbar(): tools.BlockToolbar {
            return this.blockToolbar;
        }

        public getResizer(): tools.Resizer {
            return this.resizer;
        }

        public getOffsetV(): JSContainer {
            return this.offsetV;
        }

        public getOffsetFixedV(): JSContainer {
            return this.offsetFixedV;
        }

        public getTextToolbar(): tools.TextToolbar {
            return this.textToolbar;
        }
    }
    SelectTools["__class"] = "framework.components.editor.tools.SelectTools";
    SelectTools["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace tools {
    export class TextToolbar extends JSContainer {
        /*private*/ actionBar: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            this.actionBar = new JSContainer("actionBar", "div");
            this.addClass("gjs-rte-toolbar gjs-one-bg");
            this.actionBar.addClass("gjs-rte-actionbar");
            this.addChild(this.actionBar);
        }

        public addAction(name: string, title: string, innerHtml: string, event: Function) {
            const action: JSContainer = new JSContainer(name, "span").addClass("gjs-rte-action").setHtml(innerHtml);
            this.actionBar.addChild(action);
            action.setAttribute("title", title);
            action.addEventListener(new TextToolbar.TextToolbar$0(this, event), "click");
        }
    }
    TextToolbar["__class"] = "framework.components.editor.tools.TextToolbar";
    TextToolbar["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace TextToolbar {

        export class TextToolbar$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const editor: Editor = <any>(source.getAncestorWithClass<any>("editor"));
                this.event(source, editor);
            }

            constructor(__parent: any, private event: any) {
                this.__parent = __parent;
            }
        }
        TextToolbar$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}


tools.Resizer.POSITIONS_$LI$();
