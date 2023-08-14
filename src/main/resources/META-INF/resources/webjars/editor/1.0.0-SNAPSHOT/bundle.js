/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var blocks;
(function (blocks) {
    class Block extends JSContainer {
        constructor(name) {
            if (((typeof name === 'string') || name === null)) {
                let __args = arguments;
                super(name, "div");
                this.html = new JSContainer("html", "div");
                this.title = new JSContainer("title", "div");
                this.addClass("gjs-block gjs-one-bg gjs-four-color-h");
                this.addChild(this.html);
                this.title.addClass("gjs-block-label");
                this.addChild(this.title);
            }
            else if (((name != null && name instanceof Object) || name === null)) {
                let __args = arguments;
                let block = __args[0];
                {
                    let __args = arguments;
                    let name = block["name"];
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
            }
            else
                throw new Error('invalid overload');
        }
        setBlock(obj) {
            const title = obj["title"];
            this.title.setHtml(title);
            if (obj.hasOwnProperty("iconName")) {
                const iconName = obj["iconName"];
                this.addClass(iconName);
            }
            else if (obj.hasOwnProperty("html")) {
                const html = obj["html"];
                this.html.setHtml(html);
            }
        }
    }
    blocks.Block = Block;
    Block["__class"] = "framework.components.editor.blocks.Block";
    Block["__interfaces"] = ["framework.components.api.Renderable"];
})(blocks || (blocks = {}));
(function (blocks) {
    class BlockCategory extends JSContainer {
        constructor(name) {
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
        setTitle(tit) {
            this.title.setHtml(/* replace */ BlockCategory.innerHTM.split("$title").join(tit));
            this.open();
        }
        open() {
            this.title.setHtml(/* replace */ this.title.getHtml().split("right").join("down"));
            this.addClass("gjs-open");
            this.container.setStyle("display", null);
        }
        close() {
            this.title.setHtml(/* replace */ this.title.getHtml().split("down").join("right"));
            this.removeClass("gjs-open");
            this.container.setStyle("display", "none");
        }
        isOpen() {
            return this.hasClass("gjs-open");
        }
        toggle() {
            if (this.isOpen()) {
                this.close();
            }
            else {
                this.open();
            }
        }
        addBlock$framework_components_editor_blocks_Block(block) {
            this.container.addChild(block);
        }
        addBlock(block) {
            if (((block != null && block instanceof blocks.Block) || block === null)) {
                return this.addBlock$framework_components_editor_blocks_Block(block);
            }
            else if (((block != null && block instanceof Object) || block === null)) {
                return this.addBlock$jsweet_lang_Object(block);
            }
            else
                throw new Error('invalid overload');
        }
        addBlock$jsweet_lang_Object(obj) {
            this.container.addChild(new blocks.Block(obj));
        }
    }
    BlockCategory.innerHTM = "<i class=\"gjs-caret-icon fa fa-caret-down\"></i>$title";
    blocks.BlockCategory = BlockCategory;
    BlockCategory["__class"] = "framework.components.editor.blocks.BlockCategory";
    BlockCategory["__interfaces"] = ["framework.components.api.Renderable"];
    (function (BlockCategory) {
        class BlockCategory$0 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.toggle();
            }
        }
        BlockCategory.BlockCategory$0 = BlockCategory$0;
        BlockCategory$0["__interfaces"] = ["framework.components.api.EventListener"];
    })(BlockCategory = blocks.BlockCategory || (blocks.BlockCategory = {}));
})(blocks || (blocks = {}));
(function (blocks) {
    class BlocksPanel extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.categories = new JSContainer("categories", "div");
            this.addClass("gjs-blocks-cs gjs-one-bg gjs-two-color");
            this.categories.addClass("gjs-block-categories");
            this.addChild(this.categories);
            this.addCategory("basic", "Basic");
        }
        addCategory(name, title) {
            const category = new blocks.BlockCategory(name);
            category.setTitle(title);
            this.categories.addChild(category);
            return category;
        }
        getCategory(name) {
            return this.categories.getChild(name);
        }
        addBlock(block) {
            let category = block["category"];
            if (category == null) {
                category = "basic";
            }
            this.getCategory(category).addBlock$jsweet_lang_Object(block);
        }
    }
    blocks.BlocksPanel = BlocksPanel;
    BlocksPanel["__class"] = "framework.components.editor.blocks.BlocksPanel";
    BlocksPanel["__interfaces"] = ["framework.components.api.Renderable"];
})(blocks || (blocks = {}));
class Editor extends JSContainer {
    constructor(name, tag) {
        super(name, "div");
        if (this.canvas === undefined) {
            this.canvas = null;
        }
        if (this.panels === undefined) {
            this.panels = null;
        }
        if (this.blocksPanel === undefined) {
            this.blocksPanel = null;
        }
        this.addClass("gjs-editor gjs-one-bg gjs-two-color");
        this.addClass("editor");
        this.init();
    }
    init() {
        this.canvas = new EditorCanvas("canvas");
        this.panels = new EditorPanels("panels");
        this.addChild(this.canvas);
        this.addChild(this.panels);
        this.blocksPanel = new blocks.BlocksPanel("blocksPanel");
        this.panels.getViewsContainer().addChild(this.blocksPanel);
    }
    addBlocks(__var_blocks) {
        for (let index129 = 0; index129 < __var_blocks.length; index129++) {
            let block = __var_blocks[index129];
            {
                this.blocksPanel.addBlock(block);
            }
        }
    }
    addCommand$java_lang_String$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(panelName, name, title, faButtonName, event) {
        this.panels.getPanelButton(panelName).addButton(name, title, faButtonName, event);
    }
    addCommand(panelName, name, title, faButtonName, event) {
        if (((typeof panelName === 'string') || panelName === null) && ((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((typeof faButtonName === 'string') || faButtonName === null) && ((event != null && event instanceof Function) || event === null)) {
            return this.addCommand$java_lang_String$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(panelName, name, title, faButtonName, event);
        }
        else if (((typeof panelName === 'string') || panelName === null) && ((name != null && name instanceof Object) || name === null) && title === undefined && faButtonName === undefined && event === undefined) {
            return this.addCommand$java_lang_String$jsweet_lang_Object(panelName, name);
        }
        else
            throw new Error('invalid overload');
    }
    addCommand$java_lang_String$jsweet_lang_Object(section, command) {
        const name = command["name"];
        const title = command["title"];
        const faButtonName = command["iconName"];
        const event = command["action"];
        this.addCommand$java_lang_String$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(section, name, title, faButtonName, event);
    }
    addCommands$java_lang_String$jsweet_lang_Array(section, commands) {
        for (let index130 = 0; index130 < commands.length; index130++) {
            let command = commands[index130];
            {
                this.addCommand$java_lang_String$jsweet_lang_Object(section, command);
            }
        }
    }
    addCommands(section, commands) {
        if (((typeof section === 'string') || section === null) && ((commands != null && commands instanceof Array) || commands === null)) {
            return this.addCommands$java_lang_String$jsweet_lang_Array(section, commands);
        }
        else if (((section != null && section instanceof Object) || section === null) && commands === undefined) {
            return this.addCommands$jsweet_lang_Object(section);
        }
        else
            throw new Error('invalid overload');
    }
    addCommands$jsweet_lang_Object(commands) {
        const sections = Object.keys(commands);
        for (let index131 = 0; index131 < sections.length; index131++) {
            let section = sections[index131];
            {
                const arCommands = commands[section];
                this.addCommands$java_lang_String$jsweet_lang_Array(section, arCommands);
            }
        }
    }
    addTextToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, innerHtml, action) {
        this.getTextToolbar().addAction(name, title, innerHtml, action);
    }
    addTextToolbarAction(name, title, innerHtml, action) {
        if (((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((typeof innerHtml === 'string') || innerHtml === null) && ((action != null && action instanceof Function) || action === null)) {
            return this.addTextToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, innerHtml, action);
        }
        else if (((name != null && name instanceof Object) || name === null) && title === undefined && innerHtml === undefined && action === undefined) {
            return this.addTextToolbarAction$jsweet_lang_Object(name);
        }
        else
            throw new Error('invalid overload');
    }
    addTextToolbarAction$jsweet_lang_Object(action) {
        const name = action["name"];
        const title = action["title"];
        const innerHtml = action["innerHtml"];
        const event = action["action"];
        this.addTextToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, innerHtml, event);
    }
    addTextToolbarActions(actions) {
        for (let index132 = 0; index132 < actions.length; index132++) {
            let action = actions[index132];
            {
                this.addTextToolbarAction$jsweet_lang_Object(action);
            }
        }
    }
    getTextToolbar() {
        return this.canvas.getCanvasTools().getSelectTools().getTextToolbar();
    }
    addBlockToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, icon, action) {
        this.getBlockToolbar().addAction(name, title, icon, action);
    }
    addBlockToolbarAction(name, title, icon, action) {
        if (((typeof name === 'string') || name === null) && ((typeof title === 'string') || title === null) && ((typeof icon === 'string') || icon === null) && ((action != null && action instanceof Function) || action === null)) {
            return this.addBlockToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, icon, action);
        }
        else if (((name != null && name instanceof Object) || name === null) && title === undefined && icon === undefined && action === undefined) {
            return this.addBlockToolbarAction$jsweet_lang_Object(name);
        }
        else
            throw new Error('invalid overload');
    }
    addBlockToolbarAction$jsweet_lang_Object(action) {
        const name = action["name"];
        const title = action["title"];
        const iconName = action["iconName"];
        const event = action["action"];
        this.addBlockToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, iconName, event);
    }
    addBlockToolbarActions(actions) {
        for (let index133 = 0; index133 < actions.length; index133++) {
            let action = actions[index133];
            {
                this.addBlockToolbarAction$jsweet_lang_Object(action);
            }
        }
    }
    getBlockToolbar() {
        return this.canvas.getCanvasTools().getSelectTools().getBlockToolbar();
    }
}
Editor["__class"] = "framework.components.editor.Editor";
Editor["__interfaces"] = ["framework.components.api.Renderable"];
class EditorCanvas extends JSContainer {
    constructor(name) {
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
    getIframe() {
        return this.iframe;
    }
    getCanvasTools() {
        return this.canvasTools;
    }
}
EditorCanvas["__class"] = "framework.components.editor.EditorCanvas";
EditorCanvas["__interfaces"] = ["framework.components.api.Renderable"];
class EditorPanelButton extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.buttons = new JSContainer("buttons", "div");
        this.addClass("gjs-pn-panel");
        this.addClass("gjs-pn-" + name);
        this.addClass("gjs-one-bg gjs-two-color");
        this.buttons.addClass("gjs-pn-buttons");
        this.addChild(this.buttons);
    }
    addButton(name, title, faButtonName, event) {
        const btn = new JSContainer(name, "span");
        btn.setAttribute("title", title);
        btn.addClass("gjs-pn-btn");
        this.buttons.addChild(btn);
        if (event != null) {
            btn.addClass("fa");
            btn.addClass("fa-" + faButtonName);
            btn.addEventListener(new EditorPanelButton.EditorPanelButton$0(this, event), "click");
        }
        return this;
    }
}
EditorPanelButton["__class"] = "framework.components.editor.EditorPanelButton";
EditorPanelButton["__interfaces"] = ["framework.components.api.Renderable"];
(function (EditorPanelButton) {
    class EditorPanelButton$0 {
        constructor(__parent, event) {
            this.event = event;
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const editor = (source.getAncestorWithClass("editor"));
            this.event(source, editor);
        }
    }
    EditorPanelButton.EditorPanelButton$0 = EditorPanelButton$0;
    EditorPanelButton$0["__interfaces"] = ["framework.components.api.EventListener"];
})(EditorPanelButton || (EditorPanelButton = {}));
class EditorPanels extends JSContainer {
    constructor(name) {
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
    getViewsContainer() {
        return this.viewsContainer;
    }
    getPanelButton(name) {
        return this.getChild(name);
    }
}
EditorPanels["__class"] = "framework.components.editor.EditorPanels";
EditorPanels["__interfaces"] = ["framework.components.api.Renderable"];
var tools;
(function (tools) {
    class BlockToolbar extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.actionBar = new JSContainer("actionBar", "div");
            this.addClass("gjs-toolbar");
            this.addChild(this.actionBar);
        }
        addAction(name, title, iconName, event) {
            const act = new JSContainer(name, "div").addClass("gjs-toolbar-item");
            act.setAttribute("title", title);
            act.addClass("fa").addClass("fa-" + iconName);
            this.actionBar.addChild(act);
            act.addEventListener(new BlockToolbar.BlockToolbar$0(this, event), "click");
        }
    }
    tools.BlockToolbar = BlockToolbar;
    BlockToolbar["__class"] = "framework.components.editor.tools.BlockToolbar";
    BlockToolbar["__interfaces"] = ["framework.components.api.Renderable"];
    (function (BlockToolbar) {
        class BlockToolbar$0 {
            constructor(__parent, event) {
                this.event = event;
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                const editor = (source.getAncestorWithClass("editor"));
                this.event(source, editor);
            }
        }
        BlockToolbar.BlockToolbar$0 = BlockToolbar$0;
        BlockToolbar$0["__interfaces"] = ["framework.components.api.EventListener"];
    })(BlockToolbar = tools.BlockToolbar || (tools.BlockToolbar = {}));
})(tools || (tools = {}));
(function (tools) {
    class CanvasTools extends JSContainer {
        constructor(name) {
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
        getId() {
            return "gjs-cv-tools";
        }
        getPlaceholderTools() {
            return this.placeholderTools;
        }
        getSelectTools() {
            return this.selectTools;
        }
        getHighlightTools() {
            return this.highlightTools;
        }
    }
    tools.CanvasTools = CanvasTools;
    CanvasTools["__class"] = "framework.components.editor.tools.CanvasTools";
    CanvasTools["__interfaces"] = ["framework.components.api.Renderable"];
})(tools || (tools = {}));
(function (tools) {
    class HighlightTools extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.badge = null;
            this.addClass("gjs-tools");
            this.addChild("gjs-highlighter", "div", "gjs-highlighter");
            this.badge = this.addChild("gjs-badge", "div", "gjs-badge").addChild("gjs-badge__name", "div", "gjs-badge__name");
            this.addChild("gjs-placeholder", "div", "gjs-placeholder").addChild("gjs-placeholder-int", "div", "gjs-placeholder-int");
            this.addChild("gjs-ghost", "div", "gjs-ghost");
            this.addChild("gjs-toolbar", "div", "gjs-toolbar");
            this.addChild("gjs-resizer", "div", "gjs-resizer");
            const offset = this.addChild("gjs-offset-v", "div", "gjs-offset-v");
            const marginName = offset.addChild("gjs-marginName", "div", "gjs-marginName");
            const positions = ["top", "bottom", "left", "right"];
            for (let index134 = 0; index134 < positions.length; index134++) {
                let position = positions[index134];
                {
                    marginName.addChild(position, "div", "gjs-margin-v-el gjs-margin-v-" + position);
                }
            }
            const paddingName = offset.addChild("gjs-paddingName", "div", "gjs-paddingName");
            for (let index135 = 0; index135 < positions.length; index135++) {
                let position = positions[index135];
                {
                    paddingName.addChild(position, "div", "gjs-padding-v-el gjs-padding-v-" + position);
                }
            }
            this.addChild("gjs-offset-fixed-v", "div", "gjs-offset-fixed-v");
        }
        setBadgeName(name) {
            this.badge.setHtml(name);
        }
    }
    tools.HighlightTools = HighlightTools;
    HighlightTools["__class"] = "framework.components.editor.tools.HighlightTools";
    HighlightTools["__interfaces"] = ["framework.components.api.Renderable"];
})(tools || (tools = {}));
(function (tools) {
    class PlaceholderTools extends JSContainer {
        constructor(name) {
            super(name, "div");
            if (this.placeholder === undefined) {
                this.placeholder = null;
            }
            this.addClass("gjs-tools gjs-tools-gl");
            this.placeholder = this.addChild("placeholder", "div", "gjs-placeholder vertical");
            this.placeholder.setHtml("<div class=\"gjs-placeholder-int\"></div>");
        }
    }
    tools.PlaceholderTools = PlaceholderTools;
    PlaceholderTools["__class"] = "framework.components.editor.tools.PlaceholderTools";
    PlaceholderTools["__interfaces"] = ["framework.components.api.Renderable"];
})(tools || (tools = {}));
(function (tools) {
    class Resizer extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.resizerC = new JSContainer("c", "div");
            this.resizerC.addClass("gjs-resizer-c");
            for (let index136 = 0; index136 < Resizer.POSITIONS_$LI$().length; index136++) {
                let s = Resizer.POSITIONS_$LI$()[index136];
                {
                    this.resizerC.addChild(s, "i", "gjs-resizer-h-" + s);
                }
            }
        }
        static POSITIONS_$LI$() { if (Resizer.POSITIONS == null) {
            Resizer.POSITIONS = ["tl", "tc", "tr", "cl", "cr", "bl", "bc", "br"];
        } return Resizer.POSITIONS; }
    }
    tools.Resizer = Resizer;
    Resizer["__class"] = "framework.components.editor.tools.Resizer";
    Resizer["__interfaces"] = ["framework.components.api.Renderable"];
})(tools || (tools = {}));
(function (tools) {
    class SelectTools extends JSContainer {
        constructor(name) {
            super(name, "div");
            if (this.badge === undefined) {
                this.badge = null;
            }
            if (this.ghost === undefined) {
                this.ghost = null;
            }
            if (this.blockToolbar === undefined) {
                this.blockToolbar = null;
            }
            if (this.resizer === undefined) {
                this.resizer = null;
            }
            if (this.offsetV === undefined) {
                this.offsetV = null;
            }
            if (this.offsetFixedV === undefined) {
                this.offsetFixedV = null;
            }
            if (this.textToolbar === undefined) {
                this.textToolbar = null;
            }
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
        getId() {
            return "gjs-tools";
        }
        getBadge() {
            return this.badge;
        }
        getGhost() {
            return this.ghost;
        }
        getBlockToolbar() {
            return this.blockToolbar;
        }
        getResizer() {
            return this.resizer;
        }
        getOffsetV() {
            return this.offsetV;
        }
        getOffsetFixedV() {
            return this.offsetFixedV;
        }
        getTextToolbar() {
            return this.textToolbar;
        }
    }
    tools.SelectTools = SelectTools;
    SelectTools["__class"] = "framework.components.editor.tools.SelectTools";
    SelectTools["__interfaces"] = ["framework.components.api.Renderable"];
})(tools || (tools = {}));
(function (tools) {
    class TextToolbar extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.actionBar = new JSContainer("actionBar", "div");
            this.addClass("gjs-rte-toolbar gjs-one-bg");
            this.actionBar.addClass("gjs-rte-actionbar");
            this.addChild(this.actionBar);
        }
        addAction(name, title, innerHtml, event) {
            const action = new JSContainer(name, "span").addClass("gjs-rte-action").setHtml(innerHtml);
            this.actionBar.addChild(action);
            action.setAttribute("title", title);
            action.addEventListener(new TextToolbar.TextToolbar$0(this, event), "click");
        }
    }
    tools.TextToolbar = TextToolbar;
    TextToolbar["__class"] = "framework.components.editor.tools.TextToolbar";
    TextToolbar["__interfaces"] = ["framework.components.api.Renderable"];
    (function (TextToolbar) {
        class TextToolbar$0 {
            constructor(__parent, event) {
                this.event = event;
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                const editor = (source.getAncestorWithClass("editor"));
                this.event(source, editor);
            }
        }
        TextToolbar.TextToolbar$0 = TextToolbar$0;
        TextToolbar$0["__interfaces"] = ["framework.components.api.EventListener"];
    })(TextToolbar = tools.TextToolbar || (tools.TextToolbar = {}));
})(tools || (tools = {}));
tools.Resizer.POSITIONS_$LI$();
