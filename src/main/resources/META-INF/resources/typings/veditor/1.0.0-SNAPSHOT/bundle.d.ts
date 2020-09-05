declare namespace blocks {
    class Block extends JSContainer {
        html: JSContainer;
        title: JSContainer;
        constructor(name?: any);
        setBlock(obj: Object): void;
    }
}
declare namespace blocks {
    class BlockCategory extends JSContainer {
        title: JSContainer;
        container: JSContainer;
        static innerHTM: string;
        constructor(name: string);
        setTitle(tit: string): void;
        open(): void;
        close(): void;
        isOpen(): boolean;
        toggle(): void;
        addBlock$framework_components_editor_blocks_Block(block: blocks.Block): void;
        addBlock(block?: any): any;
        addBlock$jsweet_lang_Object(obj: Object): void;
    }
    namespace BlockCategory {
        class BlockCategory$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace blocks {
    class BlocksPanel extends JSContainer {
        categories: JSContainer;
        constructor(name: string);
        addCategory(name: string, title: string): blocks.BlockCategory;
        getCategory(name: string): blocks.BlockCategory;
        addBlock(block: Object): void;
    }
}
declare class Editor extends JSContainer {
    canvas: EditorCanvas;
    panels: EditorPanels;
    blocksPanel: blocks.BlocksPanel;
    constructor(name: string, tag: string);
    init(): void;
    addBlocks(__var_blocks: Array<Object>): void;
    addCommand$java_lang_String$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(panelName: string, name: string, title: string, faButtonName: string, event: Function): void;
    addCommand(panelName?: any, name?: any, title?: any, faButtonName?: any, event?: any): any;
    addCommand$java_lang_String$jsweet_lang_Object(section: string, command: Object): void;
    addCommands$java_lang_String$jsweet_lang_Array(section: string, commands: Array<Object>): void;
    addCommands(section?: any, commands?: any): any;
    addCommands$jsweet_lang_Object(commands: Object): void;
    addTextToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name: string, title: string, innerHtml: string, action: Function): void;
    addTextToolbarAction(name?: any, title?: any, innerHtml?: any, action?: any): any;
    addTextToolbarAction$jsweet_lang_Object(action: Object): void;
    addTextToolbarActions(actions: Array<Object>): void;
    getTextToolbar(): tools.TextToolbar;
    addBlockToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name: string, title: string, icon: string, action: Function): void;
    addBlockToolbarAction(name?: any, title?: any, icon?: any, action?: any): any;
    addBlockToolbarAction$jsweet_lang_Object(action: Object): void;
    addBlockToolbarActions(actions: Array<Object>): void;
    getBlockToolbar(): tools.BlockToolbar;
}
declare class EditorCanvas extends JSContainer {
    canvasFrames: JSContainer;
    frames: JSContainer;
    framesWrapper: JSContainer;
    iframe: JSContainer;
    canvasTools: tools.CanvasTools;
    constructor(name: string);
    getIframe(): JSContainer;
    getCanvasTools(): tools.CanvasTools;
}
declare class EditorPanelButton extends JSContainer {
    buttons: JSContainer;
    constructor(name: string);
    addButton(name: string, title: string, faButtonName: string, event: Function): EditorPanelButton;
}
declare namespace EditorPanelButton {
    class EditorPanelButton$0 implements api.EventListener {
        private event;
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any, event: any);
    }
}
declare class EditorPanels extends JSContainer {
    commands: EditorPanelButton;
    options: EditorPanelButton;
    views: EditorPanelButton;
    devices: EditorPanelButton;
    viewsContainer: JSContainer;
    constructor(name: string);
    getViewsContainer(): JSContainer;
    getPanelButton(name: string): EditorPanelButton;
}
declare namespace tools {
    class BlockToolbar extends JSContainer {
        actionBar: JSContainer;
        constructor(name: string);
        addAction(name: string, title: string, iconName: string, event: Function): void;
    }
    namespace BlockToolbar {
        class BlockToolbar$0 implements api.EventListener {
            private event;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, event: any);
        }
    }
}
declare namespace tools {
    class CanvasTools extends JSContainer {
        placeholderTools: tools.PlaceholderTools;
        selectTools: tools.SelectTools;
        highlightTools: tools.HighlightTools;
        constructor(name: string);
        /**
         *
         * @return {string}
         */
        getId(): string;
        getPlaceholderTools(): tools.PlaceholderTools;
        getSelectTools(): tools.SelectTools;
        getHighlightTools(): tools.HighlightTools;
    }
}
declare namespace tools {
    class HighlightTools extends JSContainer {
        badge: JSContainer;
        constructor(name: string);
        setBadgeName(name: string): void;
    }
}
declare namespace tools {
    class PlaceholderTools extends JSContainer {
        placeholder: JSContainer;
        constructor(name: string);
    }
}
declare namespace tools {
    class Resizer extends JSContainer {
        resizerC: JSContainer;
        static POSITIONS: string[];
        static POSITIONS_$LI$(): string[];
        constructor(name: string);
    }
}
declare namespace tools {
    class SelectTools extends JSContainer {
        badge: JSContainer;
        ghost: JSContainer;
        blockToolbar: tools.BlockToolbar;
        resizer: tools.Resizer;
        offsetV: JSContainer;
        offsetFixedV: JSContainer;
        textToolbar: tools.TextToolbar;
        constructor(name: string);
        /**
         *
         * @return {string}
         */
        getId(): string;
        getBadge(): JSContainer;
        getGhost(): JSContainer;
        getBlockToolbar(): tools.BlockToolbar;
        getResizer(): tools.Resizer;
        getOffsetV(): JSContainer;
        getOffsetFixedV(): JSContainer;
        getTextToolbar(): tools.TextToolbar;
    }
}
declare namespace tools {
    class TextToolbar extends JSContainer {
        actionBar: JSContainer;
        constructor(name: string);
        addAction(name: string, title: string, innerHtml: string, event: Function): void;
    }
    namespace TextToolbar {
        class TextToolbar$0 implements api.EventListener {
            private event;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, event: any);
        }
    }
}
