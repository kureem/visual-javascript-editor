/* Generated from Java with JSweet 2.3.0 - http://www.jsweet.org */
var editor;
(function (editor) {
    var blocks;
    (function (blocks) {
        class Block extends JSContainer {
            constructor(name) {
                if (((typeof name === 'string') || name === null)) {
                    let __args = arguments;
                    super(name, "div");
                    this.html = new JSContainer("html", "div");
                    this.title = new JSContainer("title", "div");
                    (() => {
                        this.addClass("gjs-block gjs-one-bg gjs-four-color-h");
                        this.addChild(this.html);
                        this.title.addClass("gjs-block-label");
                        this.addChild(this.title);
                    })();
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
                        (() => {
                            this.addClass("gjs-block gjs-one-bg gjs-four-color-h");
                            this.addChild(this.html);
                            this.title.addClass("gjs-block-label");
                            this.addChild(this.title);
                        })();
                    }
                    (() => {
                        this.setBlock(block);
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            setBlock(obj) {
                let title = obj["title"];
                this.title.setHtml(title);
                if (obj.hasOwnProperty("iconName")) {
                    let iconName = obj["iconName"];
                    this.addClass(iconName);
                }
                else if (obj.hasOwnProperty("html")) {
                    let html = obj["html"];
                    this.html.setHtml(html);
                }
            }
        }
        blocks.Block = Block;
        Block["__class"] = "framework.components.editor.blocks.Block";
        Block["__interfaces"] = ["framework.components.api.Renderable"];
    })(blocks = editor.blocks || (editor.blocks = {}));
})(editor || (editor = {}));
(function (editor) {
    var blocks;
    (function (blocks) {
        class BlockCategory extends JSContainer {
            constructor(name) {
                super(name, "div");
                /*private*/ this.title = new JSContainer("title", "div");
                /*private*/ this.container = new JSContainer("container", "div");
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
                if (((block != null && block instanceof editor.blocks.Block) || block === null)) {
                    return this.addBlock$framework_components_editor_blocks_Block(block);
                }
                else if (((block != null && block instanceof Object) || block === null)) {
                    return this.addBlock$jsweet_lang_Object(block);
                }
                else
                    throw new Error('invalid overload');
            }
            addBlock$jsweet_lang_Object(obj) {
                this.container.addChild(new editor.blocks.Block(obj));
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
    })(blocks = editor.blocks || (editor.blocks = {}));
})(editor || (editor = {}));
(function (editor) {
    var blocks;
    (function (blocks) {
        class BlocksPanel extends JSContainer {
            constructor(name) {
                super(name, "div");
                /*private*/ this.categories = new JSContainer("categories", "div");
                this.addClass("gjs-blocks-cs gjs-one-bg gjs-two-color");
                this.categories.addClass("gjs-block-categories");
                this.addChild(this.categories);
                this.addCategory("basic", "Basic");
            }
            addCategory(name, title) {
                let category = new editor.blocks.BlockCategory(name);
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
    })(blocks = editor.blocks || (editor.blocks = {}));
})(editor || (editor = {}));
(function (editor) {
    class Editor extends JSContainer {
        constructor(name, tag) {
            super(name, "div");
            if (this.canvas === undefined)
                this.canvas = null;
            if (this.panels === undefined)
                this.panels = null;
            if (this.blocksPanel === undefined)
                this.blocksPanel = null;
            this.addClass("gjs-editor gjs-one-bg gjs-two-color");
            this.addClass("editor");
            this.init();
        }
        init() {
            this.canvas = new editor.EditorCanvas("canvas");
            this.panels = new editor.EditorPanels("panels");
            this.addChild(this.canvas);
            this.addChild(this.panels);
            this.blocksPanel = new editor.blocks.BlocksPanel("blocksPanel");
            this.panels.getViewsContainer().addChild(this.blocksPanel);
        }
        addBlocks(blocks) {
            for (let index149 = 0; index149 < blocks.length; index149++) {
                let block = blocks[index149];
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
            let name = command["name"];
            let title = command["title"];
            let faButtonName = command["iconName"];
            let event = command["action"];
            this.addCommand$java_lang_String$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(section, name, title, faButtonName, event);
        }
        addCommands$java_lang_String$jsweet_lang_Array(section, commands) {
            for (let index150 = 0; index150 < commands.length; index150++) {
                let command = commands[index150];
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
            let sections = Object.keys(commands);
            for (let index151 = 0; index151 < sections.length; index151++) {
                let section = sections[index151];
                {
                    let arCommands = commands[section];
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
            let name = action["name"];
            let title = action["title"];
            let innerHtml = action["innerHtml"];
            let event = action["action"];
            this.addTextToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, innerHtml, event);
        }
        addTextToolbarActions(actions) {
            for (let index152 = 0; index152 < actions.length; index152++) {
                let action = actions[index152];
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
            let name = action["name"];
            let title = action["title"];
            let iconName = action["iconName"];
            let event = action["action"];
            this.addBlockToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name, title, iconName, event);
        }
        addBlockToolbarActions(actions) {
            for (let index153 = 0; index153 < actions.length; index153++) {
                let action = actions[index153];
                {
                    this.addBlockToolbarAction$jsweet_lang_Object(action);
                }
            }
        }
        getBlockToolbar() {
            return this.canvas.getCanvasTools().getSelectTools().getBlockToolbar();
        }
    }
    editor.Editor = Editor;
    Editor["__class"] = "framework.components.editor.Editor";
    Editor["__interfaces"] = ["framework.components.api.Renderable"];
})(editor || (editor = {}));
(function (editor) {
    class EditorCanvas extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.canvasFrames = null;
            this.frames = null;
            this.framesWrapper = null;
            this.iframe = null;
            this.canvasTools = new editor.tools.CanvasTools("canvasTools");
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
    editor.EditorCanvas = EditorCanvas;
    EditorCanvas["__class"] = "framework.components.editor.EditorCanvas";
    EditorCanvas["__interfaces"] = ["framework.components.api.Renderable"];
})(editor || (editor = {}));
(function (editor_1) {
    class EditorPanelButton extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.buttons = new JSContainer("buttons", "div");
            this.addClass("gjs-pn-panel");
            this.addClass("gjs-pn-" + name);
            this.addClass("gjs-one-bg gjs-two-color");
            this.buttons.addClass("gjs-pn-buttons");
            this.addChild(this.buttons);
        }
        addButton(name, title, faButtonName, event) {
            let btn = new JSContainer(name, "span");
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
    editor_1.EditorPanelButton = EditorPanelButton;
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
                let editor = (source.getAncestorWithClass("editor"));
                this.event(source, editor);
            }
        }
        EditorPanelButton.EditorPanelButton$0 = EditorPanelButton$0;
        EditorPanelButton$0["__interfaces"] = ["framework.components.api.EventListener"];
    })(EditorPanelButton = editor_1.EditorPanelButton || (editor_1.EditorPanelButton = {}));
})(editor || (editor = {}));
(function (editor) {
    class EditorPanels extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.commands = new editor.EditorPanelButton("commands");
            /*private*/ this.options = new editor.EditorPanelButton("options");
            /*private*/ this.views = new editor.EditorPanelButton("views");
            /*private*/ this.devices = new editor.EditorPanelButton("devices");
            /*private*/ this.viewsContainer = new JSContainer("view-container", "div");
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
    editor.EditorPanels = EditorPanels;
    EditorPanels["__class"] = "framework.components.editor.EditorPanels";
    EditorPanels["__interfaces"] = ["framework.components.api.Renderable"];
})(editor || (editor = {}));
(function (editor) {
    var tools;
    (function (tools) {
        class BlockToolbar extends JSContainer {
            constructor(name) {
                super(name, "div");
                /*private*/ this.actionBar = new JSContainer("actionBar", "div");
                this.addClass("gjs-toolbar");
                this.addChild(this.actionBar);
            }
            addAction(name, title, iconName, event) {
                let act = new JSContainer(name, "div").addClass("gjs-toolbar-item");
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
                    let __var_editor = (source.getAncestorWithClass("editor"));
                    this.event(source, __var_editor);
                }
            }
            BlockToolbar.BlockToolbar$0 = BlockToolbar$0;
            BlockToolbar$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(BlockToolbar = tools.BlockToolbar || (tools.BlockToolbar = {}));
    })(tools = editor.tools || (editor.tools = {}));
})(editor || (editor = {}));
(function (editor) {
    var tools;
    (function (tools) {
        class CanvasTools extends JSContainer {
            constructor(name) {
                super(name, "div");
                /*private*/ this.placeholderTools = new editor.tools.PlaceholderTools("placeholderTools");
                /*private*/ this.selectTools = new editor.tools.SelectTools("selectTools");
                /*private*/ this.highlightTools = new editor.tools.HighlightTools("highlightTools");
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
    })(tools = editor.tools || (editor.tools = {}));
})(editor || (editor = {}));
(function (editor) {
    var tools;
    (function (tools) {
        class HighlightTools extends JSContainer {
            constructor(name) {
                super(name, "div");
                /*private*/ this.badge = null;
                this.addClass("gjs-tools");
                this.addChild("gjs-highlighter", "div", "gjs-highlighter");
                this.badge = this.addChild("gjs-badge", "div", "gjs-badge").addChild("gjs-badge__name", "div", "gjs-badge__name");
                this.addChild("gjs-placeholder", "div", "gjs-placeholder").addChild("gjs-placeholder-int", "div", "gjs-placeholder-int");
                this.addChild("gjs-ghost", "div", "gjs-ghost");
                this.addChild("gjs-toolbar", "div", "gjs-toolbar");
                this.addChild("gjs-resizer", "div", "gjs-resizer");
                let offset = this.addChild("gjs-offset-v", "div", "gjs-offset-v");
                let marginName = offset.addChild("gjs-marginName", "div", "gjs-marginName");
                let positions = ["top", "bottom", "left", "right"];
                for (let index154 = 0; index154 < positions.length; index154++) {
                    let position = positions[index154];
                    {
                        marginName.addChild(position, "div", "gjs-margin-v-el gjs-margin-v-" + position);
                    }
                }
                let paddingName = offset.addChild("gjs-paddingName", "div", "gjs-paddingName");
                for (let index155 = 0; index155 < positions.length; index155++) {
                    let position = positions[index155];
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
    })(tools = editor.tools || (editor.tools = {}));
})(editor || (editor = {}));
(function (editor) {
    var tools;
    (function (tools) {
        class PlaceholderTools extends JSContainer {
            constructor(name) {
                super(name, "div");
                if (this.placeholder === undefined)
                    this.placeholder = null;
                this.addClass("gjs-tools gjs-tools-gl");
                this.placeholder = this.addChild("placeholder", "div", "gjs-placeholder vertical");
                this.placeholder.setHtml("<div class=\"gjs-placeholder-int\"></div>");
            }
        }
        tools.PlaceholderTools = PlaceholderTools;
        PlaceholderTools["__class"] = "framework.components.editor.tools.PlaceholderTools";
        PlaceholderTools["__interfaces"] = ["framework.components.api.Renderable"];
    })(tools = editor.tools || (editor.tools = {}));
})(editor || (editor = {}));
(function (editor) {
    var tools;
    (function (tools) {
        class Resizer extends JSContainer {
            constructor(name) {
                super(name, "div");
                /*private*/ this.resizerC = new JSContainer("c", "div");
                this.resizerC.addClass("gjs-resizer-c");
                for (let index156 = 0; index156 < Resizer.POSITIONS_$LI$().length; index156++) {
                    let s = Resizer.POSITIONS_$LI$()[index156];
                    {
                        this.resizerC.addChild(s, "i", "gjs-resizer-h-" + s);
                    }
                }
            }
            static POSITIONS_$LI$() { if (Resizer.POSITIONS == null)
                Resizer.POSITIONS = ["tl", "tc", "tr", "cl", "cr", "bl", "bc", "br"]; return Resizer.POSITIONS; }
            ;
        }
        tools.Resizer = Resizer;
        Resizer["__class"] = "framework.components.editor.tools.Resizer";
        Resizer["__interfaces"] = ["framework.components.api.Renderable"];
    })(tools = editor.tools || (editor.tools = {}));
})(editor || (editor = {}));
(function (editor) {
    var tools;
    (function (tools) {
        class SelectTools extends JSContainer {
            constructor(name) {
                super(name, "div");
                if (this.badge === undefined)
                    this.badge = null;
                if (this.ghost === undefined)
                    this.ghost = null;
                if (this.blockToolbar === undefined)
                    this.blockToolbar = null;
                if (this.resizer === undefined)
                    this.resizer = null;
                if (this.offsetV === undefined)
                    this.offsetV = null;
                if (this.offsetFixedV === undefined)
                    this.offsetFixedV = null;
                if (this.textToolbar === undefined)
                    this.textToolbar = null;
                this.addClass("se-gjs-tools");
                this.badge = this.addChild("badge", "div", "gjs-badge");
                this.ghost = this.addChild("ghost", "div", "gjs-ghost");
                this.blockToolbar = new editor.tools.BlockToolbar("blockToolbar");
                this.addChild(this.blockToolbar);
                this.resizer = new editor.tools.Resizer("resizer");
                this.addChild(this.resizer);
                this.offsetV = this.addChild("offsetv", "div", "gjs-offset-v");
                this.offsetFixedV = this.addChild("offsetFixedV", "div", "gjs-offset-fixed-v");
                this.textToolbar = new editor.tools.TextToolbar("textToolbar");
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
    })(tools = editor.tools || (editor.tools = {}));
})(editor || (editor = {}));
(function (editor) {
    var tools;
    (function (tools) {
        class TextToolbar extends JSContainer {
            constructor(name) {
                super(name, "div");
                /*private*/ this.actionBar = new JSContainer("actionBar", "div");
                this.addClass("gjs-rte-toolbar gjs-one-bg");
                this.actionBar.addClass("gjs-rte-actionbar");
                this.addChild(this.actionBar);
            }
            addAction(name, title, innerHtml, event) {
                let action = new JSContainer(name, "span").addClass("gjs-rte-action").setHtml(innerHtml);
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
                    let __var_editor = (source.getAncestorWithClass("editor"));
                    this.event(source, __var_editor);
                }
            }
            TextToolbar.TextToolbar$0 = TextToolbar$0;
            TextToolbar$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(TextToolbar = tools.TextToolbar || (tools.TextToolbar = {}));
    })(tools = editor.tools || (editor.tools = {}));
})(editor || (editor = {}));
var opencart;
(function (opencart) {
    class Boot {
        static main(args) {
            console.info("hello world");
            let href = window.location.href;
            let rout = "";
            if ((href.indexOf("?route") != -1)) {
                let sec = href.split("route=")[1];
                console.info(sec);
                if ((sec.indexOf("&user_token=") != -1)) {
                    let parts = sec.split("&user_token=");
                    rout = parts[0];
                    console.info(rout);
                    let token = parts[1];
                    console.info(token);
                    if (rout === "myspace/order") {
                        let orders = new opencart.Orders(token);
                        orders.render(document.getElementById("myorders"));
                        orders.start();
                    }
                    else if (rout === "myspace/redemptions") {
                        let red = new opencart.Redemptions("red");
                        red.render(document.getElementById("myredemptions"));
                        red.start();
                    }
                    else if (rout === "myspace/product") {
                        let red = new opencart.Products("red");
                        red.render(document.getElementById("myproducts"));
                        red.start();
                    }
                }
            }
        }
    }
    opencart.Boot = Boot;
    Boot["__class"] = "framework.components.opencart.Boot";
})(opencart || (opencart = {}));
(function (opencart) {
    class Button extends JSContainer {
        constructor(name, icon, label) {
            super(name, "button");
            this.addClass("btn");
            this.addClass("btn-primary");
            let html = "<i class=\"fa " + icon + "\"></i> " + label;
            this.setHtml(html);
        }
    }
    opencart.Button = Button;
    Button["__class"] = "framework.components.opencart.Button";
    Button["__interfaces"] = ["framework.components.api.Renderable"];
})(opencart || (opencart = {}));
(function (opencart) {
    class CloudinaryImage extends JSContainer {
        constructor(imageId) {
            super(imageId, "img");
            /*private*/ this.width = 200;
            /*private*/ this.height = 200;
            /*private*/ this.mode = CloudinaryImage.RESIZE_MODE_PAD;
            /*private*/ this.serverName = "dtpreqd3y";
        }
        refresh() {
            let url = "https://res.cloudinary.com/" + this.serverName + "/image/upload/c_" + this.mode + ",h_" + this.height + ",w_" + this.width + "/" + this.getName() + ".png";
            this.setAttribute("src", url);
        }
        getServerName() {
            return this.serverName;
        }
        setServerName(serverName) {
            this.serverName = serverName;
        }
        getWidth() {
            return this.width;
        }
        setWidth(width) {
            this.width = width;
        }
        getHeight() {
            return this.height;
        }
        setHeight(height) {
            this.height = height;
        }
        getMode() {
            return this.mode;
        }
        setMode(mode) {
            this.mode = mode;
        }
    }
    CloudinaryImage.RESIZE_MODE_SCALE = "scale";
    CloudinaryImage.RESIZE_MODE_LIMIT = "limit";
    CloudinaryImage.RESIZE_MODE_FILL = "fill";
    CloudinaryImage.RESIZE_MODE_FIT = "fit";
    CloudinaryImage.RESIZE_MODE_CROP = "crop";
    CloudinaryImage.RESIZE_MODE_THUMB = "thumb";
    CloudinaryImage.RESIZE_MODE_PAD = "pad";
    CloudinaryImage.RESIZE_MODE_LIMITED_FILL = "lfill";
    CloudinaryImage.RESIZE_MODE_LIMIT_PAD = "lpad";
    CloudinaryImage.RESIZE_MODE_FIT_SCALE_UP = "mfit";
    CloudinaryImage.RESIZE_MODE_PAD_NO_SCALE = "mpad";
    opencart.CloudinaryImage = CloudinaryImage;
    CloudinaryImage["__class"] = "framework.components.opencart.CloudinaryImage";
    CloudinaryImage["__interfaces"] = ["framework.components.api.Renderable"];
})(opencart || (opencart = {}));
(function (opencart) {
    class CloudinaryInput extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.image = new opencart.CloudinaryImage("img");
            /*private*/ this.upload = new JSContainer("input", "input");
            /*private*/ this.cloudinary = new opencart.CloudinaryUploader("cloudinary");
            /*private*/ this.imageContainer = new JSContainer("div");
            /*private*/ this.cloudinaryContainer = new JSContainer("div");
            /*private*/ this.uploadContainer = new JSContainer("div");
            /*private*/ this.progressBar = new opencart.ProgressBar("progress");
            /*private*/ this.cloudinaryEntry = null;
            /*private*/ this.required = false;
            /*private*/ this.btnUpload = new opencart.Button("upl", "fa-upload", "Upload");
            this.setAttribute("identifier", "cloudinary:image-input");
            this.addClass("slds-image-input");
            this.addChild(this.imageContainer);
            this.addChild(this.cloudinaryContainer);
            this.addChild(this.uploadContainer);
            this.addChild(this.btnUpload);
            this.imageContainer.addChild(this.image);
            this.cloudinaryContainer.addChild(this.cloudinary);
            this.uploadContainer.addChild(this.upload);
            this.upload.setStyle("display", "none");
            this.decorateImage();
            this.decorateUpload();
            this.decorateCloudinary();
            this.setStyle("position", "relative");
            this.addChild(this.progressBar);
            this.setStyle("background", "none").setStyle("box-shadow", "none").setStyle("border", "none").setStyle("height", "auto").setStyle("width", "auto");
            this.progressBar.setStyle("display", "none");
        }
        decorateUpload() {
            this.btnUpload.addEventListener(new CloudinaryInput.CloudinaryInput$0(this), "click");
            this.upload.setVisible(false);
            this.upload.setAttribute("type", "file");
            this.upload.setAttribute("accept", "image/*");
            this.upload.addEventListener(new CloudinaryInput.CloudinaryInput$1(this), "change");
        }
        getUploader() {
            return this.cloudinary;
        }
        decorateCloudinary() {
            this.cloudinary.addEventListener(new CloudinaryInput.CloudinaryInput$2(this), "completed");
            this.cloudinary.addEventListener(new CloudinaryInput.CloudinaryInput$3(this), "start");
            this.cloudinary.addEventListener(new CloudinaryInput.CloudinaryInput$4(this), "progress");
        }
        setDefault(defau) {
            this.image.setAttribute("src", defau);
        }
        getImage() {
            return this.image;
        }
        getCloudinary() {
            return this.cloudinary;
        }
        setDisabled(b) {
            if (b) {
                this.setAttribute("disabled", "true");
            }
            else {
                this.setAttribute("disabled", null);
            }
            return this;
        }
        setReadOnly(b) {
            if (b) {
                this.setAttribute("readonly", "true");
            }
            else {
                this.setAttribute("readonly", null);
            }
            return this;
        }
        decorateImage() {
            this.image.addEventListener(new CloudinaryInput.CloudinaryInput$5(this), "click");
        }
        /**
         *
         * @return {Object}
         */
        getValue() {
            return this.cloudinaryEntry;
        }
        /**
         *
         * @param {Object} val
         */
        setValue(val) {
            this.cloudinaryEntry = val;
            if (val == null) {
                this.image.setAttribute("src", this.getAttribute("default"));
            }
            else {
                this.image.setName(val.public_id);
                this.image.refresh();
            }
        }
        /**
         *
         */
        validate() {
        }
        /**
         *
         * @return {string}
         */
        getBinding() {
            return this.getAttribute("binding");
        }
        /**
         *
         * @param {string} binding
         * @return {*}
         */
        setBinding(binding) {
            this.setAttribute("binding", binding);
            return this;
        }
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setRequired(b) {
            this.required = b;
            return this;
        }
    }
    opencart.CloudinaryInput = CloudinaryInput;
    CloudinaryInput["__class"] = "framework.components.opencart.CloudinaryInput";
    CloudinaryInput["__interfaces"] = ["framework.components.api.InputField", "framework.components.api.Renderable"];
    (function (CloudinaryInput) {
        class CloudinaryInput$0 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                let ninput = this.__parent.upload.getNative();
                ninput.click();
            }
        }
        CloudinaryInput.CloudinaryInput$0 = CloudinaryInput$0;
        CloudinaryInput$0["__interfaces"] = ["framework.components.api.EventListener"];
        class CloudinaryInput$1 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                let ninput = this.__parent.upload.getNative();
                let files = ninput.files;
                if (files != null && files.length > 0) {
                    for (let index157 = 0; index157 < files.length; index157++) {
                        let f = files[index157];
                        {
                            this.__parent.cloudinary.uploadFile(f);
                        }
                    }
                }
            }
        }
        CloudinaryInput.CloudinaryInput$1 = CloudinaryInput$1;
        CloudinaryInput$1["__interfaces"] = ["framework.components.api.EventListener"];
        class CloudinaryInput$2 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                let response = new opencart.CloudinaryItem(evt["data"]);
                this.__parent.setValue(response);
                this.__parent.image.setName(response.public_id);
                this.__parent.image.refresh();
                this.__parent.image.render();
                this.__parent.progressBar.setStyle("display", "none");
                this.__parent.progressBar.render();
                this.__parent.btnUpload.setStyle("display", null);
                this.__parent.btnUpload.render();
            }
        }
        CloudinaryInput.CloudinaryInput$2 = CloudinaryInput$2;
        CloudinaryInput$2["__interfaces"] = ["framework.components.api.EventListener"];
        class CloudinaryInput$3 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.btnUpload.setStyle("display", "none");
                this.__parent.btnUpload.render();
                this.__parent.progressBar.setStyle("display", null);
                this.__parent.progressBar.render();
            }
        }
        CloudinaryInput.CloudinaryInput$3 = CloudinaryInput$3;
        CloudinaryInput$3["__interfaces"] = ["framework.components.api.EventListener"];
        class CloudinaryInput$4 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                let pro = evt["data"];
                this.__parent.progressBar.setProgress(pro);
                this.__parent.progressBar.render();
            }
        }
        CloudinaryInput.CloudinaryInput$4 = CloudinaryInput$4;
        CloudinaryInput$4["__interfaces"] = ["framework.components.api.EventListener"];
        class CloudinaryInput$5 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.upload.getNative().click();
            }
        }
        CloudinaryInput.CloudinaryInput$5 = CloudinaryInput$5;
        CloudinaryInput$5["__interfaces"] = ["framework.components.api.EventListener"];
    })(CloudinaryInput = opencart.CloudinaryInput || (opencart.CloudinaryInput = {}));
})(opencart || (opencart = {}));
(function (opencart) {
    class CloudinaryItem extends Object {
        constructor(prox) {
            super();
            if (this.bytes === undefined)
                this.bytes = null;
            if (this.created_at === undefined)
                this.created_at = null;
            if (this.etag === undefined)
                this.etag = null;
            if (this.format === undefined)
                this.format = null;
            if (this.height === undefined)
                this.height = null;
            if (this.original_filename === undefined)
                this.original_filename = null;
            if (this.placeholder === undefined)
                this.placeholder = null;
            if (this.public_id === undefined)
                this.public_id = null;
            if (this.resource_type === undefined)
                this.resource_type = null;
            if (this.secure_url === undefined)
                this.secure_url = null;
            if (this.signature === undefined)
                this.signature = null;
            if (this.tags === undefined)
                this.tags = null;
            if (this.type === undefined)
                this.type = null;
            if (this.url === undefined)
                this.url = null;
            if (this.version === undefined)
                this.version = null;
            if (this.width === undefined)
                this.width = null;
            {
                let array159 = Object.keys(prox);
                for (let index158 = 0; index158 < array159.length; index158++) {
                    let key = array159[index158];
                    {
                        this[key] = prox[key];
                    }
                }
            }
        }
    }
    opencart.CloudinaryItem = CloudinaryItem;
    CloudinaryItem["__class"] = "framework.components.opencart.CloudinaryItem";
})(opencart || (opencart = {}));
(function (opencart) {
    class CloudinaryUploader extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.endpoint = "https://api.cloudinary.com/v1_1/";
            if (this.cloudName === undefined)
                this.cloudName = null;
            if (this.unsignedUploadPreset === undefined)
                this.unsignedUploadPreset = null;
        }
        /**
         *
         * @return {Array}
         */
        advancedEventTypes() {
            return ["start", "progress", "completed"];
        }
        setEndpoint(ep) {
            this.endpoint = ep;
        }
        setCloudName(cn) {
            this.cloudName = cn;
        }
        setUnsignedUploadPreset(uup) {
            this.unsignedUploadPreset = uup;
        }
        uploadFile(file) {
            if (this.cloudName == null || this.cloudName.length <= 0) {
                throw new Error("You need to configure the service for the cloudname");
            }
            if (this.endpoint == null || this.endpoint.length <= 0) {
                this.endpoint = "https://api.cloudinary.com/v1_1/";
                console.warn("Cloudinary endpoint not configured. Using default endpoint:https://api.cloudinary.com/v1_1/");
            }
            else if (!((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(this.endpoint, "/")) {
                this.endpoint = this.endpoint + "/";
            }
            let url = this.endpoint + this.cloudName + "/upload";
            console.log("Cloudinary URL:" + url);
            let xhr = new XMLHttpRequest();
            let fd = new FormData();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.upload.addEventListener("progress", (pe) => {
                let e = pe;
                let progress = Math.round((e.loaded * 100.0) / e.total);
                e["progress"] = progress;
                e["data"] = progress;
                this.fireListener("progress", e);
            });
            xhr.onreadystatechange = ((xhr) => {
                return (e) => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        let response = JSON.parse(xhr.responseText);
                        e["data"] = response;
                        e["response"] = response;
                        this.fireListener("completed", e);
                    }
                    return e;
                };
            })(xhr);
            if (this.unsignedUploadPreset != null && this.unsignedUploadPreset.length > 0)
                fd.append("upload_preset", this.unsignedUploadPreset);
            fd.append("tags", "browser_upload");
            fd.append("file", file);
            xhr.send(fd);
            let startUpload = new CustomEvent("start");
            startUpload["data"] = file;
            startUpload["file"] = file;
            this.fireListener("start", startUpload);
        }
    }
    opencart.CloudinaryUploader = CloudinaryUploader;
    CloudinaryUploader["__class"] = "framework.components.opencart.CloudinaryUploader";
    CloudinaryUploader["__interfaces"] = ["framework.components.api.Renderable"];
})(opencart || (opencart = {}));
(function (opencart) {
    class Form extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.body = new JSContainer("body", "div");
            /*private*/ this.fields = (new Array());
            if (this.config_ === undefined)
                this.config_ = null;
            this.addClass("form");
            this.addChild(this.body);
        }
        setConfig(config) {
            if (this.config_ != null) {
                this.removeClass("form-" + this.config_.layout);
                this.fields = (new Array());
                this.body.clearChildren();
            }
            this.config_ = config;
            this.addClass("form-" + this.config_.layout);
            for (let index160 = 0; index160 < this.config_.fields.length; index160++) {
                let field = this.config_.fields[index160];
                {
                    let fg = new Form.FormGroup(this, field, this.config_.layout);
                    this.body.addChild(fg);
                    this.fields.push(fg);
                }
            }
        }
        addField$framework_components_opencart_FormConfig_Field(field) {
            if (this.config_ == null) {
                this.config_ = new opencart.FormConfig();
            }
            this.config_.fields.push(field);
            let fg = new Form.FormGroup(this, field, this.config_.layout);
            this.body.addChild(fg);
            this.fields.push(fg);
        }
        addField$java_lang_String$java_lang_String$java_lang_String$boolean(name, label, type, required) {
            let field = new opencart.FormConfig.Field();
            field.name = name;
            field.label = label;
            field.type = type;
            field.required = required;
            this.addField$framework_components_opencart_FormConfig_Field(field);
        }
        addField(name, label, type, required) {
            if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && ((typeof type === 'string') || type === null) && ((typeof required === 'boolean') || required === null)) {
                return this.addField$java_lang_String$java_lang_String$java_lang_String$boolean(name, label, type, required);
            }
            else if (((name != null && name instanceof opencart.FormConfig.Field) || name === null) && label === undefined && type === undefined && required === undefined) {
                return this.addField$framework_components_opencart_FormConfig_Field(name);
            }
            else
                throw new Error('invalid overload');
        }
        getFormData() {
            let data = new Object();
            for (let index161 = 0; index161 < this.fields.length; index161++) {
                let fg = this.fields[index161];
                {
                    data[fg.getName()] = fg.getValue();
                }
            }
            return data;
        }
        setFormData(formData) {
            for (let index162 = 0; index162 < this.fields.length; index162++) {
                let fg = this.fields[index162];
                {
                    fg.setValue(formData[fg.getName()]);
                }
            }
        }
        getFormGroup(name) {
            for (let index163 = 0; index163 < this.fields.length; index163++) {
                let fg = this.fields[index163];
                {
                    if (fg.getName() === name) {
                        return fg;
                    }
                }
            }
            return null;
        }
        addButton(name, icon, label) {
            let btn = new JSContainer(name, "a");
            btn.setAttribute("href", "javascript:void(0);");
            let html = "<i class=\"fa " + icon + "\"></i>" + label;
            btn.setHtml(html);
            btn.addClass("btn btn-primary");
            return btn;
        }
        createBtn(act) {
            let btn = new JSContainer(act.name, "a");
            btn.setAttribute("href", "javascript:void(0);");
            let html = "<i class=\"fa " + act.icon + "\"></i>" + act.label;
            btn.setHtml(html);
            btn.addEventListener(new Form.Form$0(this, act), "click");
            return btn;
        }
    }
    opencart.Form = Form;
    Form["__class"] = "framework.components.opencart.Form";
    Form["__interfaces"] = ["framework.components.api.Renderable"];
    (function (Form) {
        class FormGroup extends JSContainer {
            constructor(__parent, field, layout) {
                super(field.name, "div");
                this.__parent = __parent;
                if (this.field_ === undefined)
                    this.field_ = null;
                this.uiLabel = new JSContainer("uilabel", "label").addClass("control-label");
                this.uiInput = new JSContainer("uiinput", "div");
                if (this.input === undefined)
                    this.input = null;
                this.field_ = field;
                this.addChild(this.uiLabel);
                this.addChild(this.uiInput);
                if (layout === "horizontal") {
                    this.uiLabel.addClass("col-sm-2");
                    this.uiInput.addClass("col-sm-10");
                }
                this.addClass("form-group");
                if (this.field_.required) {
                    this.addClass("required");
                }
                this.uiLabel.setHtml(this.field_.label);
                let type = this.field_.type;
                let name = this.field_.name;
                if (type === opencart.FormConfig.TEXT_TYPE) {
                    this.input = new input.JSStringInput(name);
                }
                else if (type === opencart.FormConfig.CHECK_BOX_TYPE) {
                    this.input = new input.JSCheckBox(name);
                }
                else if (type === opencart.FormConfig.COLOR_TYPE) {
                    this.input = new input.JSStringInput(name);
                    this.input.setAttribute("type", "color");
                }
                else if (type === opencart.FormConfig.DATE_TYPE) {
                    this.input = new input.JSDateInput(name);
                }
                else if (type === opencart.FormConfig.FILE_TYPE) {
                    this.input = new JSUpload(name, "");
                }
                else if (type === opencart.FormConfig.LONG_TEXT_TYPE) {
                    this.input = new input.JSTextArea(name);
                }
                else if (type === opencart.FormConfig.MONTH_TYPE) {
                    this.input = new input.JSDateInput(name).setType(input.DateInputTypes.month);
                }
                else if (type === opencart.FormConfig.NUMBER_TYPE) {
                    this.input = new input.JSNumericInput(name);
                }
                else if (type === opencart.FormConfig.RANGE_TYPE) {
                    this.input = new input.JSNumericInput(name).setType(input.NumericInputTypes.range);
                }
                else if (type === opencart.FormConfig.SELECT_TYPE) {
                    this.input = new input.JSSelect(name);
                    this.input.setOptions(this.field_.options);
                }
                else if (type === opencart.FormConfig.TIME_TYPE) {
                    this.input = new input.JSTimeInput(name);
                }
                else if (type === opencart.FormConfig.WEEK_TYPE) {
                    this.input = new input.JSDateInput(name).setType(input.DateInputTypes.week);
                }
                else if (type === opencart.FormConfig.CLOUDINARY_TYPE) {
                    this.input = new opencart.CloudinaryInput(name);
                }
                else {
                    this.input = new input.JSStringInput(name);
                }
                this.input.setRequired(this.field_.required);
                this.input.addClass("form-control");
                this.uiInput.addChild(this.input);
            }
            setValue(value) {
                this.input.setValue(value);
            }
            getValue() {
                return this.input.getValue();
            }
            getField() {
                return this.field_;
            }
            getUiLabel() {
                return this.uiLabel;
            }
            getUiInput() {
                return this.uiInput;
            }
            getInput() {
                return this.input;
            }
        }
        Form.FormGroup = FormGroup;
        FormGroup["__class"] = "framework.components.opencart.Form.FormGroup";
        FormGroup["__interfaces"] = ["framework.components.api.Renderable"];
        class Form$0 {
            constructor(__parent, act) {
                this.act = act;
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                let fn = this.act.event;
                let ro = (source.getAncestorWithClass("form-group"));
                fn.call(source, (source.getAncestorWithClass("form")), ro);
            }
        }
        Form.Form$0 = Form$0;
        Form$0["__interfaces"] = ["framework.components.api.EventListener"];
    })(Form = opencart.Form || (opencart.Form = {}));
})(opencart || (opencart = {}));
(function (opencart) {
    class FormConfig {
        constructor() {
            this.layout = "vertical";
            this.fields = (new Array());
            this.actions = (new Array());
            if (this.name === undefined)
                this.name = null;
            if (this.label === undefined)
                this.label = null;
        }
    }
    FormConfig.TEXT_TYPE = "text";
    FormConfig.NUMBER_TYPE = "number";
    FormConfig.DATE_TYPE = "date";
    FormConfig.TIME_TYPE = "time";
    FormConfig.WEEK_TYPE = "week";
    FormConfig.MONTH_TYPE = "month";
    FormConfig.COLOR_TYPE = "color";
    FormConfig.LONG_TEXT_TYPE = "textarea";
    FormConfig.SELECT_TYPE = "select";
    FormConfig.RANGE_TYPE = "range";
    FormConfig.FILE_TYPE = "file";
    FormConfig.CHECK_BOX_TYPE = "checkbox";
    FormConfig.CLOUDINARY_TYPE = "cloudinary";
    opencart.FormConfig = FormConfig;
    FormConfig["__class"] = "framework.components.opencart.FormConfig";
    (function (FormConfig) {
        class Field {
            constructor() {
                this.options = (new Array());
                if (this.name === undefined)
                    this.name = null;
                if (this.label === undefined)
                    this.label = null;
                if (this.type === undefined)
                    this.type = null;
                if (this.defaultValue === undefined)
                    this.defaultValue = null;
                if (this.required === undefined)
                    this.required = false;
            }
        }
        FormConfig.Field = Field;
        Field["__class"] = "framework.components.opencart.FormConfig.Field";
        class Action {
            constructor() {
                if (this.name === undefined)
                    this.name = null;
                if (this.icon === undefined)
                    this.icon = null;
                if (this.label === undefined)
                    this.label = null;
                if (this.event === undefined)
                    this.event = null;
            }
        }
        FormConfig.Action = Action;
        Action["__class"] = "framework.components.opencart.FormConfig.Action";
    })(FormConfig = opencart.FormConfig || (opencart.FormConfig = {}));
})(opencart || (opencart = {}));
(function (opencart) {
    class Orders extends JSContainer {
        constructor(token) {
            super("orders", "div");
            /*private*/ this.filter = new JSContainer("filter", "div");
            /*private*/ this.list = new JSContainer("list", "div");
            /*private*/ this.rtable = new opencart.ResponsiveTable("table");
            /*private*/ this.listPanel = new opencart.Panel("listpanel");
            this.rw = new RestWebservice();
            this.addClass("row");
            this.addChild(this.filter);
            this.addChild(this.list);
            this.filter.addClass("col-md-3 col-md-push-9 col-sm-12 hidden-sm hidden-xs");
            this.list.addClass("col-md-9 col-md-pull-3 col-sm-12");
            let tc = new opencart.TableConfig();
            let invoice_no = new opencart.TableConfig.Column();
            invoice_no.dataType = "numeric";
            invoice_no.label = "Inv.";
            invoice_no.name = "invoice_no";
            invoice_no.sortable = true;
            tc.columns.push(invoice_no);
            tc.columns.push(this.createCol("username", "Name", false));
            tc.columns.push(this.createCol("email", "Email", false));
            tc.columns.push(this.createCol("telephone", "Tel", false));
            tc.columns.push(this.createCol("name", "Product", false));
            tc.columns.push(this.createCol("model", "Model", false));
            tc.columns.push(this.createCol("price", "Price", true));
            tc.columns.push(this.createCol("status", "Status", false));
            tc.actions.push(this.createAction("view", "View", "fa-eye"));
            let redeem = this.createAction("redeem", "Request Redeem", "fa-adjust");
            redeem.event = (a, b, c) => {
                let r = b;
                let data = r.getData();
                let id = data["order_product_id"].toString();
                let query = "UPDATE oc_order_product set status = \'toredeem\' WHERE order_product_id=" + id;
                let quey = new Object();
                quey["query"] = query;
                this.rw.setData(quey);
                delete this.rw.getListeners()["success"];
                this.rw.addEventListener(new Orders.Orders$0(this, r), "success");
                this.rw.setUrl(/* replace */ this.rw.getUrl().split("/order/query").join("/order/update"));
                this.rw.execute();
            };
            tc.actions.push(redeem);
            tc.selectable = true;
            this.listPanel.setTitle("Orders");
            this.listPanel.setIcon("fa-list");
            this.listPanel.getBody().addChild(this.rtable);
            this.list.addChild(this.listPanel);
            this.rtable.getTable().setConfig(tc);
            this.rtable.getTable().setCellRenderer(new Orders.Orders$1(this));
            this.rtable.addChild(this.rw);
            this.rw.setUrl("http://localhost/cart/admin/index.php?route=myspace/order/query&user_token=" + token);
            let quey = new Object();
            quey["query"] = "select op.order_product_id, op.order_id, o.invoice_no, o.firstname, o.lastname, concat(o.firstname,\' \',  o.lastname) as username, o.email,o.telephone, op.product_id, op.name, op.model, op.quantity, op.price, op.total, op.tax, op.reward, p.vendor_id, op.status FROM oc_order_product op, oc_product p, oc_order o WHERE op.product_id = p.product_id AND op.order_id = o.order_id AND p.vendor_id=%vendor_id%";
            this.rw.setData(quey);
            this.rw.addEventListener(new Orders.Orders$2(this), "success");
        }
        start() {
            this.rw.execute();
        }
        /*private*/ createCol(name, label, numeric) {
            let col = new opencart.TableConfig.Column();
            col.dataType = numeric ? "numeric" : "text";
            col.label = label;
            col.name = name;
            col.sortable = true;
            return col;
        }
        /*private*/ createAction(name, label, icon) {
            let act = new opencart.TableConfig.Action();
            act.label = label;
            act.name = name;
            act.icon = icon;
            return act;
        }
    }
    opencart.Orders = Orders;
    Orders["__class"] = "framework.components.opencart.Orders";
    Orders["__interfaces"] = ["framework.components.api.Renderable"];
    (function (Orders) {
        class Orders$0 {
            constructor(__parent, r) {
                this.r = r;
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.r.setValue("status", "Ask Redeem");
            }
        }
        Orders.Orders$0 = Orders$0;
        Orders$0["__interfaces"] = ["framework.components.api.EventListener"];
        class Orders$1 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {opencart.Table} table
             * @param {*} td
             * @param {*} obj
             * @param {Object} rowData
             * @param {opencart.TableConfig.Column} col
             */
            renderCell(table, td, obj, rowData, col) {
                if (obj != null) {
                    td.setHtml(obj.toString());
                    if (col.name === "status") {
                        if (obj === "new") {
                            td.setHtml("New");
                        }
                        else if (obj === "toredeem") {
                            td.setHtml("Ask Redeem");
                        }
                    }
                }
                else {
                    td.setHtml("");
                }
                if (col.dataType === "numeric") {
                    td.addClass("text-right");
                }
                else {
                    td.addClass("text-left");
                }
            }
        }
        Orders.Orders$1 = Orders$1;
        Orders$1["__interfaces"] = ["framework.components.opencart.CellRenderer"];
        class Orders$2 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                let dat = evt["data"];
                this.__parent.rtable.getTable().setData(dat);
                this.__parent.rtable.getTable().refresh();
                this.__parent.rtable.setRendered(false);
                source.getRoot().render();
            }
        }
        Orders.Orders$2 = Orders$2;
        Orders$2["__interfaces"] = ["framework.components.api.EventListener"];
    })(Orders = opencart.Orders || (opencart.Orders = {}));
})(opencart || (opencart = {}));
(function (opencart) {
    class PageHeader extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.title = new JSContainer("title", "h1");
            /*private*/ this.buttons = new JSContainer("buttons", "div").addClass("pull-right");
            /*private*/ this.breadcrumbs = new JSContainer("breadcrumbs", "ul").addClass("breadcrumb");
            this.addClass("page-header");
            let fluid = new JSContainer("fluid", "div").addClass("container-fluid");
            this.addChild(fluid);
            fluid.addChild(this.buttons);
            fluid.addChild(this.title);
            fluid.addChild(this.breadcrumbs);
            let hmme = new JSContainer("home", "a").setAttribute("href", opencart.Util.getPath("common/dashboard"));
            hmme.setHtml("Home");
            this.breadcrumbs.addChild(new JSContainer("li").addChild(hmme));
        }
        setTitle(title) {
            this.title.setHtml(title);
        }
        addBreadcrumb(title, route) {
            let hmme = new JSContainer("", "a").setAttribute("href", opencart.Util.getPath(route));
            hmme.setHtml(title);
            this.breadcrumbs.addChild(new JSContainer("li").addChild(hmme));
        }
        addButton(name, title, icon) {
            let btn = new opencart.Button(name, icon, title);
            this.buttons.addChild(btn);
            return btn;
        }
    }
    opencart.PageHeader = PageHeader;
    PageHeader["__class"] = "framework.components.opencart.PageHeader";
    PageHeader["__interfaces"] = ["framework.components.api.Renderable"];
})(opencart || (opencart = {}));
(function (opencart) {
    class Panel extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.heading = new JSContainer("heading", "div");
            /*private*/ this.title = new JSContainer("title", "h3");
            /*private*/ this.icon = new JSContainer("icon", "i");
            /*private*/ this.uititle = new JSContainer("uititle", "span");
            /*private*/ this.body = new JSContainer("body", "div");
            /*private*/ this.footer = new JSContainer("footer", "div");
            this.addClass("panel");
            this.addClass("panel-default");
            this.heading.addClass("panel-heading");
            this.title.addClass("panel-title");
            this.title.addChild(this.icon);
            this.title.addChild(this.uititle);
            this.heading.addChild(this.title);
            this.addChild(this.heading);
            this.body.addClass("panel-body");
            this.addChild(this.body);
            this.footer.addClass("panel-footer");
            this.addChild(this.footer);
        }
        setTitle(title) {
            this.uititle.setHtml(title);
        }
        setIcon(icon) {
            this.icon.setAttribute("class", "fa " + icon);
        }
        getHeading() {
            return this.heading;
        }
        getBody() {
            return this.body;
        }
        getFooter() {
            return this.footer;
        }
    }
    opencart.Panel = Panel;
    Panel["__class"] = "framework.components.opencart.Panel";
    Panel["__interfaces"] = ["framework.components.api.Renderable"];
})(opencart || (opencart = {}));
(function (opencart) {
    class Products extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.header = new opencart.PageHeader("header");
            /*private*/ this.content = new JSContainer("conten", "div").addClass("container-fluid");
            /*private*/ this.table = new opencart.ResponsiveTable("list");
            /*private*/ this.rest = new RestWebservice();
            /*private*/ this.listPanel = new opencart.Panel("listPanel");
            /*private*/ this.formPanel = new opencart.Panel("formPanel");
            /*private*/ this.formTabs = new opencart.Tabs("formTabs");
            /*private*/ this.generalForm = new opencart.Form("form");
            /*private*/ this.layout = new CardLayout("layout", "div");
            /*private*/ this.formHydrated = false;
            this.addChild(this.header);
            this.addChild(this.content);
            this.header.setTitle("Courses");
            this.header.addBreadcrumb("Courses", "myspace/product");
            this.content.addChild(this.layout);
            let listItem = new CardLayoutItem("list", "div");
            this.layout.addItem(listItem);
            listItem.addChild(this.listPanel);
            this.listPanel.setTitle("Product List");
            this.listPanel.setIcon("fa-list");
            this.listPanel.getBody().addChild(this.table);
            this.buildTable();
            let formItem = new CardLayoutItem("form", "div");
            this.layout.addItem(formItem);
            this.formPanel.setTitle("Products");
            this.formPanel.getBody().addChild(this.formTabs);
            formItem.addChild(this.formPanel);
            this.buildForm();
            this.addChild(this.rest);
            this.rest.setUrl(opencart.Util.getPath("myspace/product/restlist"));
            this.rest.addEventListener(new Products.Products$0(this), "success");
            this.setButtons();
        }
        start() {
            this.rest.execute();
        }
        openForm() {
            this.layout.activate("form");
            if (!this.formHydrated) {
                this.hydrateForm();
                this.formHydrated = true;
            }
        }
        hydrateForm() {
            this.rest.setUrl(opencart.Util.getPath("myspace/product/getcategories"));
            delete this.rest.getListeners()["success"];
            let select = this.generalForm.getFormGroup("model").getInput();
            this.rest.addEventListener(new Products.Products$1(this, select), "success");
            this.rest.execute();
        }
        openList(data) {
            this.table.getTable().setData(data);
            this.table.getTable().refresh();
            this.layout.activate("list");
        }
        buildForm() {
            this.formTabs.addTab("general", "General");
            this.formTabs.addTab("image", "Image");
            this.generalForm.addField$java_lang_String$java_lang_String$java_lang_String$boolean("name", "Product Name", "text", true);
            this.generalForm.addField$java_lang_String$java_lang_String$java_lang_String$boolean("description", "Description", "textarea", false);
            this.generalForm.addField$java_lang_String$java_lang_String$java_lang_String$boolean("price", "Price", opencart.FormConfig.NUMBER_TYPE, true);
            this.generalForm.addField$java_lang_String$java_lang_String$java_lang_String$boolean("model", "Model", opencart.FormConfig.SELECT_TYPE, true);
            this.generalForm.addField$java_lang_String$java_lang_String$java_lang_String$boolean("category", "Category", opencart.FormConfig.SELECT_TYPE, true);
            this.generalForm.addField$java_lang_String$java_lang_String$java_lang_String$boolean("image", "Image", opencart.FormConfig.CLOUDINARY_TYPE, false);
            let clin = this.generalForm.getFormGroup("image").getInput();
            clin.getUploader().setCloudName("dtpreqd3y");
            clin.getUploader().setUnsignedUploadPreset("yx0uopqx");
            let select = this.generalForm.getFormGroup("model").getInput();
            select.addEventListener(new Products.Products$2(this, select), "change");
            this.formTabs.getPane("general").addChild(this.generalForm);
        }
        buildTable() {
            let image = new opencart.TableConfig.Column();
            image.label = "Image";
            image.name = "image";
            let name = new opencart.TableConfig.Column();
            name.label = "Product Name";
            name.name = "name";
            let model = new opencart.TableConfig.Column();
            model.label = "Model";
            model.name = "model";
            let price = new opencart.TableConfig.Column();
            price.label = "Price";
            price.name = "price";
            price.dataType = "currency";
            let status = new opencart.TableConfig.Column();
            status.label = "Status";
            status.name = "status";
            let config = new opencart.TableConfig();
            config.columns.push(image, name, model, price, status);
            let action = new opencart.TableConfig.Action();
            action.icon = "fa-pencil";
            action.label = "Edit";
            action.name = "edit";
            action.event = (a, b, c) => {
                let r = b;
                let data = r.getData();
                let id = data["product_id"].toString();
                let quey = new Object();
                quey["product_id"] = id;
                this.rest.setData(quey);
                this.rest.setUrl(opencart.Util.getPath("myspace/product/restget"));
                delete this.rest.getListeners()["success"];
                this.rest.addEventListener(new Products.Products$3(this), "success");
                this.rest.execute();
            };
            config.actions.push(action);
            this.table.getTable().setConfig(config);
            let defrend = new opencart.Table.DefaultCellRenderer();
            this.table.getTable().setCellRenderer(new Products.Products$4(this, defrend));
        }
        setButtons() {
            let addNew = this.header.addButton("addNew", "Add New", "fa-plus");
            addNew.addEventListener(new Products.Products$5(this), "click");
            addNew.setStyle("margin-right", "1rem");
            let __delete = this.header.addButton("delete", "Delete", "fa-trash-o");
            __delete.addEventListener(new Products.Products$6(this), "click");
        }
    }
    opencart.Products = Products;
    Products["__class"] = "framework.components.opencart.Products";
    Products["__interfaces"] = ["framework.components.api.Renderable"];
    (function (Products) {
        class Products$0 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                let res = evt["data"];
                this.__parent.openList(res);
            }
        }
        Products.Products$0 = Products$0;
        Products$0["__interfaces"] = ["framework.components.api.EventListener"];
        class Products$1 {
            constructor(__parent, select) {
                this.select = select;
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                let data = evt["data"];
                this.select.setOptions(data);
            }
        }
        Products.Products$1 = Products$1;
        Products$1["__interfaces"] = ["framework.components.api.EventListener"];
        class Products$2 {
            constructor(__parent, select) {
                this.select = select;
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.rest.setUrl(opencart.Util.getPath("myspace/product/getsubcategories"));
                let catId = this.select.getValue();
                let params = new Object();
                params["category_id"] = catId;
                this.__parent.rest.setData(params);
                delete this.__parent.rest.getListeners()["success"];
                this.__parent.rest.addEventListener(new Products$2.Products$2$0(this), "success");
                this.__parent.rest.execute();
            }
        }
        Products.Products$2 = Products$2;
        Products$2["__interfaces"] = ["framework.components.api.EventListener"];
        (function (Products$2) {
            class Products$2$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    let cat = this.__parent.__parent.generalForm.getFormGroup("category").getInput();
                    let data = evt["data"];
                    cat.setOptions(data);
                }
            }
            Products$2.Products$2$0 = Products$2$0;
            Products$2$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(Products$2 = Products.Products$2 || (Products.Products$2 = {}));
        class Products$3 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                alert(JSON.stringify(evt["data"]));
            }
        }
        Products.Products$3 = Products$3;
        Products$3["__interfaces"] = ["framework.components.api.EventListener"];
        class Products$4 {
            constructor(__parent, defrend) {
                this.defrend = defrend;
                this.__parent = __parent;
            }
            /**
             *
             * @param {opencart.Table} table
             * @param {*} td
             * @param {*} value
             * @param {Object} rowData
             * @param {opencart.TableConfig.Column} column
             */
            renderCell(table, td, value, rowData, column) {
                if (column.name === "image") {
                    if (value != null) {
                        td.setHtml("");
                        let img = new JSContainer("img");
                        if ((value.toString().indexOf("cloudinary:") != -1)) {
                            img = new opencart.CloudinaryImage(/* replace */ value.toString().split("cloudinary:").join(""));
                            img.setWidth(40);
                            img.setHeight(40);
                            img.refresh();
                        }
                        else {
                            let url = window.location.origin + window.location.pathname;
                            url = url.split("/admin/index.php").join("/image/cache/") + value.toString().split(".jpg").join("-40x40.jpg");
                            img.setAttribute("src", url);
                        }
                        img.addClass("img-thumbnail");
                        td.addChild(img);
                    }
                }
                else if (column.name === "status") {
                    if (value.toString() === "1") {
                        td.setHtml("Online");
                    }
                    else {
                        td.setHtml("Offline");
                    }
                }
                else {
                    this.defrend.renderCell(table, td, value, rowData, column);
                }
            }
        }
        Products.Products$4 = Products$4;
        Products$4["__interfaces"] = ["framework.components.opencart.CellRenderer"];
        class Products$5 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.openForm();
            }
        }
        Products.Products$5 = Products$5;
        Products$5["__interfaces"] = ["framework.components.api.EventListener"];
        class Products$6 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                if (confirm("Are you sure you want to delete the selected items?")) {
                    let selected = this.__parent.table.getTable().getSelected();
                    let selectedIds = (new Array());
                    for (let index164 = 0; index164 < selected.length; index164++) {
                        let item = selected[index164];
                        {
                            let status = item["status"].toString();
                            if (status === "requested") {
                                selectedIds.push(item["redemption_id"]);
                            }
                        }
                    }
                    if (selectedIds.length > 0) {
                        let data = new Object();
                        data["items"] = selectedIds;
                        this.__parent.rest.setData(data);
                        this.__parent.rest.setUrl(opencart.Util.getPath("myspace/product/delete"));
                        this.__parent.rest.setMethod("POST");
                        delete this.__parent.rest.getListeners()["success"];
                        this.__parent.rest.addEventListener(new Products$6.Products$6$0(this), "success");
                        this.__parent.rest.execute();
                    }
                }
            }
        }
        Products.Products$6 = Products$6;
        Products$6["__interfaces"] = ["framework.components.api.EventListener"];
        (function (Products$6) {
            class Products$6$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    let res = evt["data"];
                    this.__parent.__parent.openList(res);
                }
            }
            Products$6.Products$6$0 = Products$6$0;
            Products$6$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(Products$6 = Products.Products$6 || (Products.Products$6 = {}));
    })(Products = opencart.Products || (opencart.Products = {}));
})(opencart || (opencart = {}));
(function (opencart) {
    class ProgressBar extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.progressBar = new JSContainer("div").addClass("progress-bar");
            this.addClass("progress");
            this.addChild(this.progressBar);
            this.setAttribute("identifier", "bootstrap:progress-bar");
            this.setAttribute("aria-valuemin", "0").setAttribute("aria-valuemax", "100").setAttribute("aria-valuenow", "0");
        }
        setProgress(percent) {
            this.progressBar.setStyle("width", percent + "%");
            this.progressBar.setHtml(percent + "%");
            this.progressBar.setAttribute("aria-valuenow", percent + "");
        }
    }
    opencart.ProgressBar = ProgressBar;
    ProgressBar["__class"] = "framework.components.opencart.ProgressBar";
    ProgressBar["__interfaces"] = ["framework.components.api.Renderable"];
})(opencart || (opencart = {}));
(function (opencart) {
    class Redemptions extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.header = new opencart.PageHeader("header");
            /*private*/ this.content = new JSContainer("conten", "div").addClass("container-fluid");
            /*private*/ this.table = new opencart.ResponsiveTable("list");
            /*private*/ this.rest = new RestWebservice();
            /*private*/ this.listPanel = new opencart.Panel("listPanel");
            /*private*/ this.formPanel = new opencart.Panel("formPanel");
            /*private*/ this.form = new opencart.Form("form");
            /*private*/ this.listRow = new JSContainer("div").addClass("row");
            /*private*/ this.tilesRow = new JSContainer("div").addClass("row");
            /*private*/ this.totalSales = new opencart.Tile("totalSales");
            /*private*/ this.totalRedeems = new opencart.Tile("totalRedeems");
            /*private*/ this.totalPosted = new opencart.Tile("totalPosted");
            /*private*/ this.totalCredits = new opencart.Tile("totalCredits");
            /*private*/ this.layout = new CardLayout("layout", "div");
            this.addChild(this.header);
            this.addChild(this.content);
            this.header.setTitle("Redemptions");
            this.header.addBreadcrumb("Redemptions", "myspace/redemptions");
            this.setButtons();
            this.content.addChild(this.tilesRow).addChild(this.listRow);
            this.buildDashboard();
            this.listRow.addChild(this.layout);
            let listItem = new CardLayoutItem("list", "div");
            this.layout.addItem(listItem);
            listItem.addChild(this.listPanel);
            this.listPanel.setTitle("Redemption List");
            this.listPanel.setIcon("fa-list");
            this.listPanel.getBody().addChild(this.table);
            this.buildTable();
            let formItem = new CardLayoutItem("form", "div");
            this.layout.addItem(formItem);
            this.formPanel.setTitle("Redemption");
            this.formPanel.getBody().addChild(this.form);
            formItem.addChild(this.formPanel);
            this.buildForm();
            this.addChild(this.rest);
            this.rest.setUrl(opencart.Util.getPath("myspace/redemptions/query"));
            this.rest.addEventListener(new Redemptions.Redemptions$0(this), "success");
        }
        list(res) {
            let totals = res["totals"];
            this.totalSales.setBody("fa-shopping-cart", totals["sales"].toFixed(2));
            this.totalRedeems.setBody("fa-credit-card", totals["redeem"].toFixed(2));
            this.totalCredits.setBody("fa-credit-card", totals["credit"].toFixed(2));
            this.totalPosted.setBody("fa-credit-card", totals["posted"].toFixed(2));
            let data = res["list"];
            this.table.getTable().setData(data);
            this.table.setRendered(false);
            this.table.getTable().refresh();
        }
        start() {
            this.layout.activate("list");
            this.rest.execute();
        }
        buildForm() {
            let config = new opencart.FormConfig();
            config.label = "Redemption";
            this.form.setConfig(config);
            this.form.addField$java_lang_String$java_lang_String$java_lang_String$boolean("amount", "Amount", opencart.FormConfig.NUMBER_TYPE, true);
            this.form.addField$java_lang_String$java_lang_String$java_lang_String$boolean("accountName", "Name on check", opencart.FormConfig.TEXT_TYPE, true);
            this.formPanel.getFooter().addChild(new opencart.Button("save", "fa-save", "Save").setStyle("margin-right", "1rem").addEventListener(new Redemptions.Redemptions$1(this), "click"));
            this.formPanel.getFooter().addChild(new opencart.Button("cancel", "fa-reply", "Cancel").addEventListener(new Redemptions.Redemptions$2(this), "click"));
        }
        setButtons() {
            let addNew = this.header.addButton("addNew", "Add New", "fa-plus");
            addNew.addEventListener(new Redemptions.Redemptions$3(this), "click");
            addNew.setStyle("margin-right", "1rem");
            let __delete = this.header.addButton("delete", "Delete", "fa-trash-o");
            __delete.addEventListener(new Redemptions.Redemptions$4(this), "click");
        }
        /*private*/ buildDashboard() {
            let cell1 = new JSContainer("div").addClass("col-lg-3 col-md-3 col-sm-6");
            let cell2 = new JSContainer("div").addClass("col-lg-3 col-md-3 col-sm-6");
            let cell3 = new JSContainer("div").addClass("col-lg-3 col-md-3 col-sm-6");
            let cell4 = new JSContainer("div").addClass("col-lg-3 col-md-3 col-sm-6");
            this.tilesRow.addChild(cell1.addChild(this.totalSales)).addChild(cell2.addChild(this.totalRedeems)).addChild(cell3.addChild(this.totalPosted)).addChild(cell4.addChild(this.totalCredits));
            this.totalSales.setHeading("Sales", "");
            this.totalSales.setBody("fa-shopping-cart", "500");
            this.totalRedeems.setHeading("Total Redeem Requested", "");
            this.totalRedeems.setBody("fa-credit-card", "200");
            this.totalPosted.setHeading("Total Redeem Posted", "");
            this.totalPosted.setBody("fa-credit-card", "200");
            this.totalCredits.setHeading("Total Credits", "");
            this.totalCredits.setBody("fa-credit-card", "200");
        }
        /*private*/ buildTable() {
            let con = new opencart.TableConfig();
            con.selectable = true;
            con.columns.push(this.createCol("redemption_id", "Id", true));
            con.columns.push(this.createCol("account_name", "Name on check", false));
            con.columns.push(this.createCol("amount", "Amount", true));
            con.columns.push(this.createCol("status", "Status", false));
            this.table.getTable().setConfig(con);
        }
        /*private*/ createCol(name, title, numeric) {
            let col = new opencart.TableConfig.Column();
            col.label = title;
            col.name = name;
            col.dataType = numeric ? "numeric" : "text";
            if (name === "amount") {
                col.dataType = "currency";
            }
            return col;
        }
    }
    opencart.Redemptions = Redemptions;
    Redemptions["__class"] = "framework.components.opencart.Redemptions";
    Redemptions["__interfaces"] = ["framework.components.api.Renderable"];
    (function (Redemptions) {
        class Redemptions$0 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                let res = evt["data"];
                this.__parent.list(res);
            }
        }
        Redemptions.Redemptions$0 = Redemptions$0;
        Redemptions$0["__interfaces"] = ["framework.components.api.EventListener"];
        class Redemptions$1 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                let data = this.__parent.form.getFormData();
                this.__parent.rest.setData(data);
                this.__parent.rest.setMethod("POST");
                this.__parent.rest.setUrl(opencart.Util.getPath("myspace/redemptions/add"));
                delete this.__parent.rest.getListeners()["success"];
                this.__parent.rest.addEventListener(new Redemptions$1.Redemptions$1$0(this), "success");
                this.__parent.rest.execute();
            }
        }
        Redemptions.Redemptions$1 = Redemptions$1;
        Redemptions$1["__interfaces"] = ["framework.components.api.EventListener"];
        (function (Redemptions$1) {
            class Redemptions$1$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    let res = evt["data"];
                    this.__parent.__parent.list(res);
                    this.__parent.__parent.layout.activate("list");
                    this.__parent.__parent.tilesRow.setStyle("display", null);
                }
            }
            Redemptions$1.Redemptions$1$0 = Redemptions$1$0;
            Redemptions$1$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(Redemptions$1 = Redemptions.Redemptions$1 || (Redemptions.Redemptions$1 = {}));
        class Redemptions$2 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.layout.activate("list");
                this.__parent.tilesRow.setStyle("display", null);
            }
        }
        Redemptions.Redemptions$2 = Redemptions$2;
        Redemptions$2["__interfaces"] = ["framework.components.api.EventListener"];
        class Redemptions$3 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.layout.activate("form");
                this.__parent.tilesRow.setStyle("display", "none");
            }
        }
        Redemptions.Redemptions$3 = Redemptions$3;
        Redemptions$3["__interfaces"] = ["framework.components.api.EventListener"];
        class Redemptions$4 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                if (confirm("Are you sure you want to delete the selected items?")) {
                    let selected = this.__parent.table.getTable().getSelected();
                    let selectedIds = (new Array());
                    for (let index165 = 0; index165 < selected.length; index165++) {
                        let item = selected[index165];
                        {
                            let status = item["status"].toString();
                            if (status === "requested") {
                                selectedIds.push(item["redemption_id"]);
                            }
                        }
                    }
                    if (selectedIds.length > 0) {
                        let data = new Object();
                        data["items"] = selectedIds;
                        this.__parent.rest.setData(data);
                        this.__parent.rest.setUrl(opencart.Util.getPath("myspace/redemptions/delete"));
                        this.__parent.rest.setMethod("POST");
                        delete this.__parent.rest.getListeners()["success"];
                        this.__parent.rest.addEventListener(new Redemptions$4.Redemptions$4$0(this), "success");
                        this.__parent.rest.execute();
                    }
                }
            }
        }
        Redemptions.Redemptions$4 = Redemptions$4;
        Redemptions$4["__interfaces"] = ["framework.components.api.EventListener"];
        (function (Redemptions$4) {
            class Redemptions$4$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    let res = evt["data"];
                    this.__parent.__parent.list(res);
                }
            }
            Redemptions$4.Redemptions$4$0 = Redemptions$4$0;
            Redemptions$4$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(Redemptions$4 = Redemptions.Redemptions$4 || (Redemptions.Redemptions$4 = {}));
    })(Redemptions = opencart.Redemptions || (opencart.Redemptions = {}));
})(opencart || (opencart = {}));
(function (opencart) {
    class ResponsiveTable extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.table = new opencart.Table("table");
            this.addChild(this.table);
        }
        getTable() {
            return this.table;
        }
    }
    opencart.ResponsiveTable = ResponsiveTable;
    ResponsiveTable["__class"] = "framework.components.opencart.ResponsiveTable";
    ResponsiveTable["__interfaces"] = ["framework.components.api.Renderable"];
})(opencart || (opencart = {}));
(function (opencart) {
    class ServerAction {
    }
    opencart.ServerAction = ServerAction;
    ServerAction["__class"] = "framework.components.opencart.ServerAction";
})(opencart || (opencart = {}));
(function (opencart) {
    class Table extends JSContainer {
        constructor(name) {
            super(name, "table");
            /*private*/ this.head = new JSContainer("head", "thead");
            /*private*/ this.body = new JSContainer("body", "tbody");
            /*private*/ this.headerRow = new JSContainer("header-row", "tr");
            /*private*/ this.selectHeaderCell = new JSContainer("select-head-cell", "td");
            /*private*/ this.headerCheckBox = new input.JSCheckBox("header-checkbox");
            /*private*/ this.data_ = (new Array());
            /*private*/ this.cellRenderer = new Table.DefaultCellRenderer();
            if (this.config === undefined)
                this.config = null;
            this.addClass("table");
            this.addClass("table-bordered");
            this.addClass("table-hover");
            this.addChild(this.head);
            this.addChild(this.body);
            this.selectHeaderCell.addClass("text-center").setStyle("width", "1px");
            this.selectHeaderCell.addChild(this.headerCheckBox);
            this.headerCheckBox.addEventListener(new Table.Table$0(this), "change");
        }
        setSelectAll(b) {
            {
                let array167 = this.body.getChildren();
                for (let index166 = 0; index166 < array167.length; index166++) {
                    let r = array167[index166];
                    {
                        let row = r;
                        row.setSelected(b);
                    }
                }
            }
        }
        getSelected() {
            let result = (new Array());
            {
                let array169 = this.body.getChildren();
                for (let index168 = 0; index168 < array169.length; index168++) {
                    let r = array169[index168];
                    {
                        let row = r;
                        if (row.isSelected()) {
                            result.push(row.getData());
                        }
                    }
                }
            }
            return result;
        }
        getCellRenderer() {
            return this.cellRenderer;
        }
        setCellRenderer(cellRenderer) {
            this.cellRenderer = cellRenderer;
        }
        getHead() {
            return this.head;
        }
        getBody() {
            return this.body;
        }
        getConfig() {
            return this.config;
        }
        setConfig(config) {
            this.config = config;
        }
        refresh() {
            this.head.clearChildren();
            this.body.clearChildren();
            this.headerRow.clearChildren();
            this.head.addChild(this.headerRow);
            if (this.config.selectable) {
                this.headerRow.addChild(this.selectHeaderCell);
            }
            for (let index170 = 0; index170 < this.config.columns.length; index170++) {
                let col = this.config.columns[index170];
                {
                    let hcol = new Table.TableHeaderColumn(this, col);
                    this.headerRow.addChild(hcol);
                }
            }
            if (this.config.actions.length > 0) {
                let tdact = new JSContainer("td").addClass("text-right").setHtml("Action");
                this.headerRow.addChild(tdact);
            }
            for (let index171 = 0; index171 < this.data_.length; index171++) {
                let row = this.data_[index171];
                {
                    let r = new Table.TableRow(this, this, row, this.config);
                    this.body.addChild(r);
                }
            }
        }
        setData(data) {
            this.data_ = data;
        }
    }
    opencart.Table = Table;
    Table["__class"] = "framework.components.opencart.Table";
    Table["__interfaces"] = ["framework.components.api.Renderable"];
    (function (Table) {
        class TableAction extends JSContainer {
            constructor(__parent, config) {
                super("td");
                this.__parent = __parent;
                if (this.config === undefined)
                    this.config = null;
                this.btgroup = new JSContainer("btns", "div").addClass("btn-group");
                this.addClass("text-right");
                this.config = config;
                this.addChild(this.btgroup);
                let firstAct = this.createBtn(this.config.actions[0], false);
                this.btgroup.addChild(firstAct);
                if (this.config.actions.length === 2) {
                    let secondAct = this.createBtn(this.config.actions[1], false);
                    this.btgroup.addChild(secondAct);
                }
                if (this.config.actions.length > 2) {
                    let btn = new JSContainer("mnu", "button");
                    btn.addClass("btn btn-primary dropdown-toggle");
                    btn.setAttribute("data-toggle", "button");
                    btn.setHtml("<span class=\"caret\"></span>");
                    this.btgroup.addChild(btn);
                    let ul = new JSContainer("mn", "ul");
                    ul.addClass("dropdown-menu dropdown-menu-right");
                    this.btgroup.addChild(ul);
                    for (let i = 2; i < this.config.actions.length; i++) {
                        {
                            let li = new JSContainer("li");
                            ul.addChild(li);
                            let item = this.createBtn(this.config.actions[i], true);
                            li.addChild(item);
                        }
                        ;
                    }
                }
            }
            createBtn(act, isMenu) {
                let btn = new JSContainer(act.name, "a");
                if (!isMenu) {
                    btn.addClass("btn btn-primary");
                }
                btn.setAttribute("href", "javascript:void(0);");
                let html = "<i class=\"fa " + act.icon + "\"></i>";
                if (isMenu) {
                    html = html + act.label;
                }
                btn.setHtml(html);
                btn.addEventListener(new TableAction.TableAction$0(this, act), "click");
                return btn;
            }
        }
        Table.TableAction = TableAction;
        TableAction["__class"] = "framework.components.opencart.Table.TableAction";
        TableAction["__interfaces"] = ["framework.components.api.Renderable"];
        (function (TableAction) {
            class TableAction$0 {
                constructor(__parent, act) {
                    this.act = act;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    let fn = this.act.event;
                    let ro = (source.getAncestorWithClass("trow"));
                    fn.call(source, (source.getAncestorWithClass("table")), ro);
                }
            }
            TableAction.TableAction$0 = TableAction$0;
            TableAction$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(TableAction = Table.TableAction || (Table.TableAction = {}));
        class TableRow extends JSContainer {
            constructor(__parent, table, data, config) {
                super("", "tr");
                this.__parent = __parent;
                this.cb = new input.JSCheckBox("cb");
                if (this.data_ === undefined)
                    this.data_ = null;
                if (this.config_ === undefined)
                    this.config_ = null;
                if (this.table_ === undefined)
                    this.table_ = null;
                this.addClass("trow");
                this.config_ = config;
                this.data_ = data;
                this.table_ = table;
                if (this.config_.selectable) {
                    let firstcol = new JSContainer("td").addClass("text-center");
                    firstcol.addChild(this.cb);
                    firstcol.setStyle("width", "1px");
                    this.addChild(firstcol);
                }
                for (let index172 = 0; index172 < this.config_.columns.length; index172++) {
                    let col = this.config_.columns[index172];
                    {
                        let td = new JSContainer(col.name, "td");
                        this.addChild(td);
                        let name = col.name;
                        let obj = data[name];
                        if (__parent.cellRenderer != null) {
                            __parent.cellRenderer.renderCell(table, td, obj, this.data_, col);
                        }
                    }
                }
                if (this.config_.actions.length > 0) {
                    let act = new Table.TableAction(this.__parent, this.config_);
                    this.addChild(act);
                }
            }
            setValue(field, value) {
                if (value != null) {
                    this.data_[field] = value;
                }
                else {
                    delete this.data_[field];
                }
                for (let index173 = 0; index173 < this.config_.columns.length; index173++) {
                    let col = this.config_.columns[index173];
                    {
                        if (col.name === field) {
                            if (this.table_.cellRenderer != null) {
                                let td = this.getChild(field);
                                this.table_.cellRenderer.renderCell(this.table_, td, value, this.data_, col);
                            }
                        }
                    }
                }
            }
            getData() {
                return this.data_;
            }
            isSelected() {
                return this.cb.isChecked();
            }
            setSelected(b) {
                this.cb.setChecked(b);
            }
        }
        Table.TableRow = TableRow;
        TableRow["__class"] = "framework.components.opencart.Table.TableRow";
        TableRow["__interfaces"] = ["framework.components.api.Renderable"];
        class TableHeaderColumn extends JSContainer {
            constructor(__parent, column) {
                super(column.name, "td");
                this.__parent = __parent;
                if (this.column_ === undefined)
                    this.column_ = null;
                this.inside = new JSContainer("inside", "a");
                this.sortdir = 0;
                this.column_ = column;
                this.addChild(this.inside);
                this.inside.setAttribute("href", "javascript:void(0);");
                this.inside.setHtml(this.column_.label);
                if (this.column_.dataType === "numeric" || this.column_.dataType === "currency") {
                    this.addClass("text-right");
                }
                else {
                    this.addClass("text-left");
                }
                if (this.column_.sortable) {
                    this.inside.addEventListener(new TableHeaderColumn.TableHeaderColumn$0(this), "click");
                }
            }
            clearSort() {
                this.sortdir = 0;
                this.inside.removeClass("asc").removeClass("desc");
            }
        }
        Table.TableHeaderColumn = TableHeaderColumn;
        TableHeaderColumn["__class"] = "framework.components.opencart.Table.TableHeaderColumn";
        TableHeaderColumn["__interfaces"] = ["framework.components.api.Renderable"];
        (function (TableHeaderColumn) {
            class TableHeaderColumn$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.inside.removeClass("asc").removeClass("desc");
                    let renders = this.__parent.__parent.headerRow.getChildren();
                    for (let index174 = 0; index174 < renders.length; index174++) {
                        let r = renders[index174];
                        {
                            if (r != null && r instanceof opencart.Table.TableHeaderColumn) {
                                if (r.getName() !== this.__parent.getName())
                                    r.clearSort();
                            }
                        }
                    }
                    let table = (source.getAncestorWithClass("table"));
                    let sortEvent = new CustomEvent("sort");
                    sortEvent["source"] = source.getParent();
                    sortEvent["column"] = source.getParent();
                    sortEvent["table"] = table;
                    if (this.__parent.sortdir === 0 || this.__parent.sortdir === -1) {
                        this.__parent.sortdir = 1;
                        this.__parent.inside.addClass("asc");
                        sortEvent["direction"] = "asc";
                    }
                    else {
                        this.__parent.sortdir = -1;
                        this.__parent.inside.addClass("desc");
                        sortEvent["direction"] = "desc";
                    }
                    table.fireListener("sort", sortEvent);
                }
            }
            TableHeaderColumn.TableHeaderColumn$0 = TableHeaderColumn$0;
            TableHeaderColumn$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(TableHeaderColumn = Table.TableHeaderColumn || (Table.TableHeaderColumn = {}));
        class DefaultCellRenderer {
            constructor() {
            }
            /**
             *
             * @param {opencart.Table} table
             * @param {*} td
             * @param {*} obj
             * @param {Object} rowData
             * @param {opencart.TableConfig.Column} col
             */
            renderCell(table, td, obj, rowData, col) {
                if (obj != null) {
                    if (col.dataType === "currency") {
                        let l = parseInt(obj.toString());
                        let n = new Number(l);
                        td.setHtml(n.toFixed(2));
                    }
                    else {
                        td.setHtml(obj.toString());
                    }
                }
                else {
                    td.setHtml("");
                }
                if (col.dataType === "numeric" || col.dataType === "currency") {
                    td.addClass("text-right");
                }
                else {
                    td.addClass("text-left");
                }
            }
        }
        Table.DefaultCellRenderer = DefaultCellRenderer;
        DefaultCellRenderer["__class"] = "framework.components.opencart.Table.DefaultCellRenderer";
        DefaultCellRenderer["__interfaces"] = ["framework.components.opencart.CellRenderer"];
        class Table$0 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.setSelectAll(this.__parent.headerCheckBox.isChecked());
            }
        }
        Table.Table$0 = Table$0;
        Table$0["__interfaces"] = ["framework.components.api.EventListener"];
    })(Table = opencart.Table || (opencart.Table = {}));
})(opencart || (opencart = {}));
(function (opencart) {
    class TableConfig {
        constructor() {
            this.selectable = true;
            this.columns = (new Array());
            this.actions = (new Array());
        }
    }
    opencart.TableConfig = TableConfig;
    TableConfig["__class"] = "framework.components.opencart.TableConfig";
    (function (TableConfig) {
        class Column {
            constructor() {
                if (this.name === undefined)
                    this.name = null;
                if (this.label === undefined)
                    this.label = null;
                if (this.dataType === undefined)
                    this.dataType = null;
                if (this.sortable === undefined)
                    this.sortable = false;
            }
        }
        TableConfig.Column = Column;
        Column["__class"] = "framework.components.opencart.TableConfig.Column";
        class Action {
            constructor() {
                if (this.name === undefined)
                    this.name = null;
                if (this.icon === undefined)
                    this.icon = null;
                if (this.label === undefined)
                    this.label = null;
                if (this.event === undefined)
                    this.event = null;
            }
        }
        TableConfig.Action = Action;
        Action["__class"] = "framework.components.opencart.TableConfig.Action";
    })(TableConfig = opencart.TableConfig || (opencart.TableConfig = {}));
})(opencart || (opencart = {}));
(function (opencart) {
    class Tabs extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.navs = new JSContainer("navs", "ul").addClass("nav nav-tabs");
            /*private*/ this.content = new JSContainer("content", "div").addClass("tab-content");
            this.addChild(this.navs);
            this.addChild(this.content);
        }
        addTab(name, label) {
            let tab = new JSContainer(name, "li");
            let atab = new JSContainer(name, "a").setAttribute("href", "javascript:void(0);").setHtml(label);
            tab.addChild(atab);
            atab.addEventListener(new Tabs.Tabs$0(this), "click");
            this.navs.addChild(tab);
            let pane = new JSContainer(name, "div").addClass("tab-pane");
            this.content.addChild(pane);
        }
        activate(name) {
            this.doActivate(name, this.navs);
            this.doActivate(name, this.content);
        }
        getPane(name) {
            return this.content.getChild(name);
        }
        /*private*/ doActivate(name, parent) {
            {
                let array176 = parent.getChildren();
                for (let index175 = 0; index175 < array176.length; index175++) {
                    let li = array176[index175];
                    {
                        if (li.getName() !== name) {
                            if (li.hasClass("active"))
                                li.removeClass("active");
                        }
                        else {
                            if (!li.hasClass("active")) {
                                li.addClass("active");
                            }
                        }
                    }
                }
            }
        }
        getNavs() {
            return this.navs;
        }
        getContent() {
            return this.content;
        }
    }
    opencart.Tabs = Tabs;
    Tabs["__class"] = "framework.components.opencart.Tabs";
    Tabs["__interfaces"] = ["framework.components.api.Renderable"];
    (function (Tabs) {
        class Tabs$0 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.activate(source.getName());
            }
        }
        Tabs.Tabs$0 = Tabs$0;
        Tabs$0["__interfaces"] = ["framework.components.api.EventListener"];
    })(Tabs = opencart.Tabs || (opencart.Tabs = {}));
})(opencart || (opencart = {}));
(function (opencart) {
    class Tile extends JSContainer {
        constructor(name) {
            super(name, "div");
            /*private*/ this.heading = new JSContainer("heading", "div").addClass("tile-heading");
            /*private*/ this.body = new JSContainer("body", "div").addClass("tile-body");
            /*private*/ this.footer = new JSContainer("foot", "div").addClass("tile-footer");
            this.addClass("tile tile-primary");
            this.addChild(this.heading);
            this.addChild(this.body);
            this.addChild(this.footer);
        }
        setHeading(left, right) {
            this.heading.setHtml(left + " <span class=\"pull-right\">" + right + "</span>");
        }
        setBody(icon, txt) {
            this.body.setHtml("<i class=\"fa " + icon + "\"></i><h2 class=\"pull-right\">" + txt + "</h2>");
        }
        setFooter(link) {
            this.footer.addChild(link);
        }
    }
    opencart.Tile = Tile;
    Tile["__class"] = "framework.components.opencart.Tile";
    Tile["__interfaces"] = ["framework.components.api.Renderable"];
})(opencart || (opencart = {}));
(function (opencart) {
    class Util {
        static getToken() {
            let href = window.location.href;
            let rout = "";
            if ((href.indexOf("?route") != -1)) {
                let sec = href.split("route=")[1];
                console.info(sec);
                if ((sec.indexOf("&user_token=") != -1)) {
                    let parts = sec.split("&user_token=");
                    rout = parts[0];
                    console.info(rout);
                    let token = parts[1];
                    return token;
                }
            }
            return null;
        }
        static getPath(route) {
            let token = Util.getToken();
            let url = window.location.origin + window.location.pathname + "?route=" + route + "&user_token=" + token;
            return url;
        }
    }
    opencart.Util = Util;
    Util["__class"] = "framework.components.opencart.Util";
})(opencart || (opencart = {}));
editor.tools.Resizer.POSITIONS_$LI$();
opencart.Boot.main(null);
