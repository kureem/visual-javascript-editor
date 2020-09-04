declare namespace editor.blocks {
    class Block extends JSContainer {
        html: JSContainer;
        title: JSContainer;
        constructor(name?: any);
        setBlock(obj: Object): void;
    }
}
declare namespace editor.blocks {
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
        addBlock$framework_components_editor_blocks_Block(block: editor.blocks.Block): void;
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
declare namespace editor.blocks {
    class BlocksPanel extends JSContainer {
        categories: JSContainer;
        constructor(name: string);
        addCategory(name: string, title: string): editor.blocks.BlockCategory;
        getCategory(name: string): editor.blocks.BlockCategory;
        addBlock(block: Object): void;
    }
}
declare namespace editor {
    class Editor extends JSContainer {
        canvas: editor.EditorCanvas;
        panels: editor.EditorPanels;
        blocksPanel: editor.blocks.BlocksPanel;
        constructor(name: string, tag: string);
        init(): void;
        addBlocks(blocks: Array<Object>): void;
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
        getTextToolbar(): editor.tools.TextToolbar;
        addBlockToolbarAction$java_lang_String$java_lang_String$java_lang_String$jsweet_lang_Function(name: string, title: string, icon: string, action: Function): void;
        addBlockToolbarAction(name?: any, title?: any, icon?: any, action?: any): any;
        addBlockToolbarAction$jsweet_lang_Object(action: Object): void;
        addBlockToolbarActions(actions: Array<Object>): void;
        getBlockToolbar(): editor.tools.BlockToolbar;
    }
}
declare namespace editor {
    class EditorCanvas extends JSContainer {
        canvasFrames: JSContainer;
        frames: JSContainer;
        framesWrapper: JSContainer;
        iframe: JSContainer;
        canvasTools: editor.tools.CanvasTools;
        constructor(name: string);
        getIframe(): JSContainer;
        getCanvasTools(): editor.tools.CanvasTools;
    }
}
declare namespace editor {
    class EditorPanelButton extends JSContainer {
        buttons: JSContainer;
        constructor(name: string);
        addButton(name: string, title: string, faButtonName: string, event: Function): EditorPanelButton;
    }
    namespace EditorPanelButton {
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
}
declare namespace editor {
    class EditorPanels extends JSContainer {
        commands: editor.EditorPanelButton;
        options: editor.EditorPanelButton;
        views: editor.EditorPanelButton;
        devices: editor.EditorPanelButton;
        viewsContainer: JSContainer;
        constructor(name: string);
        getViewsContainer(): JSContainer;
        getPanelButton(name: string): editor.EditorPanelButton;
    }
}
declare namespace editor.tools {
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
declare namespace editor.tools {
    class CanvasTools extends JSContainer {
        placeholderTools: editor.tools.PlaceholderTools;
        selectTools: editor.tools.SelectTools;
        highlightTools: editor.tools.HighlightTools;
        constructor(name: string);
        /**
         *
         * @return {string}
         */
        getId(): string;
        getPlaceholderTools(): editor.tools.PlaceholderTools;
        getSelectTools(): editor.tools.SelectTools;
        getHighlightTools(): editor.tools.HighlightTools;
    }
}
declare namespace editor.tools {
    class HighlightTools extends JSContainer {
        badge: JSContainer;
        constructor(name: string);
        setBadgeName(name: string): void;
    }
}
declare namespace editor.tools {
    class PlaceholderTools extends JSContainer {
        placeholder: JSContainer;
        constructor(name: string);
    }
}
declare namespace editor.tools {
    class Resizer extends JSContainer {
        resizerC: JSContainer;
        static POSITIONS: string[];
        static POSITIONS_$LI$(): string[];
        constructor(name: string);
    }
}
declare namespace editor.tools {
    class SelectTools extends JSContainer {
        badge: JSContainer;
        ghost: JSContainer;
        blockToolbar: editor.tools.BlockToolbar;
        resizer: editor.tools.Resizer;
        offsetV: JSContainer;
        offsetFixedV: JSContainer;
        textToolbar: editor.tools.TextToolbar;
        constructor(name: string);
        /**
         *
         * @return {string}
         */
        getId(): string;
        getBadge(): JSContainer;
        getGhost(): JSContainer;
        getBlockToolbar(): editor.tools.BlockToolbar;
        getResizer(): editor.tools.Resizer;
        getOffsetV(): JSContainer;
        getOffsetFixedV(): JSContainer;
        getTextToolbar(): editor.tools.TextToolbar;
    }
}
declare namespace editor.tools {
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
declare namespace opencart {
    class Boot {
        static main(args: string[]): void;
    }
}
declare namespace opencart {
    class Button extends JSContainer {
        constructor(name: string, icon: string, label: string);
    }
}
declare namespace opencart {
    interface CellRenderer {
        renderCell(table: opencart.Table, td: api.Renderable, value: any, rowData: Object, column: opencart.TableConfig.Column): any;
    }
}
declare namespace opencart {
    class CloudinaryImage extends JSContainer {
        width: number;
        height: number;
        mode: string;
        serverName: string;
        static RESIZE_MODE_SCALE: string;
        static RESIZE_MODE_LIMIT: string;
        static RESIZE_MODE_FILL: string;
        static RESIZE_MODE_FIT: string;
        static RESIZE_MODE_CROP: string;
        static RESIZE_MODE_THUMB: string;
        static RESIZE_MODE_PAD: string;
        static RESIZE_MODE_LIMITED_FILL: string;
        static RESIZE_MODE_LIMIT_PAD: string;
        static RESIZE_MODE_FIT_SCALE_UP: string;
        static RESIZE_MODE_PAD_NO_SCALE: string;
        constructor(imageId: string);
        refresh(): void;
        getServerName(): string;
        setServerName(serverName: string): void;
        getWidth(): number;
        setWidth(width: number): void;
        getHeight(): number;
        setHeight(height: number): void;
        getMode(): string;
        setMode(mode: string): void;
    }
}
declare namespace opencart {
    class CloudinaryInput extends JSContainer implements api.InputField<Object> {
        image: opencart.CloudinaryImage;
        upload: JSContainer;
        cloudinary: opencart.CloudinaryUploader;
        imageContainer: JSContainer;
        cloudinaryContainer: JSContainer;
        uploadContainer: JSContainer;
        progressBar: opencart.ProgressBar;
        cloudinaryEntry: Object;
        required: boolean;
        btnUpload: opencart.Button;
        constructor(name: string);
        decorateUpload(): void;
        getUploader(): opencart.CloudinaryUploader;
        decorateCloudinary(): void;
        setDefault(defau: string): void;
        getImage(): JSContainer;
        getCloudinary(): opencart.CloudinaryUploader;
        setDisabled(b: boolean): CloudinaryInput;
        setReadOnly(b: boolean): CloudinaryInput;
        decorateImage(): void;
        /**
         *
         * @return {Object}
         */
        getValue(): Object;
        /**
         *
         * @param {Object} val
         */
        setValue(val: Object): void;
        /**
         *
         */
        validate(): void;
        /**
         *
         * @return {string}
         */
        getBinding(): string;
        /**
         *
         * @param {string} binding
         * @return {*}
         */
        setBinding(binding: string): api.InputField<Object>;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setRequired(b: boolean): api.InputField<Object>;
    }
    namespace CloudinaryInput {
        class CloudinaryInput$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class CloudinaryInput$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class CloudinaryInput$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class CloudinaryInput$3 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class CloudinaryInput$4 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class CloudinaryInput$5 implements api.EventListener {
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
declare namespace opencart {
    class CloudinaryItem extends Object {
        bytes: number;
        created_at: number;
        etag: string;
        format: string;
        height: number;
        original_filename: string;
        placeholder: boolean;
        public_id: string;
        resource_type: string;
        secure_url: string;
        signature: string;
        tags: string[];
        type: string;
        url: string;
        version: number;
        width: number;
        constructor(prox: Object);
    }
}
declare namespace opencart {
    class CloudinaryUploader extends JSContainer {
        endpoint: string;
        cloudName: string;
        unsignedUploadPreset: string;
        constructor(name: string);
        /**
         *
         * @return {Array}
         */
        advancedEventTypes(): string[];
        setEndpoint(ep: string): void;
        setCloudName(cn: string): void;
        setUnsignedUploadPreset(uup: string): void;
        uploadFile(file: File): void;
    }
}
declare namespace opencart {
    class Form extends JSContainer {
        config_: opencart.FormConfig;
        body: JSContainer;
        fields: Array<Form.FormGroup>;
        constructor(name: string);
        setConfig(config: opencart.FormConfig): void;
        addField$framework_components_opencart_FormConfig_Field(field: opencart.FormConfig.Field): void;
        addField$java_lang_String$java_lang_String$java_lang_String$boolean(name: string, label: string, type: string, required: boolean): void;
        addField(name?: any, label?: any, type?: any, required?: any): any;
        getFormData(): Object;
        setFormData(formData: Object): void;
        getFormGroup(name: string): Form.FormGroup;
        addButton(name: string, icon: string, label: string): JSContainer;
        createBtn(act: opencart.FormConfig.Action): JSContainer;
    }
    namespace Form {
        class FormGroup extends JSContainer {
            __parent: any;
            field_: opencart.FormConfig.Field;
            uiLabel: JSContainer;
            uiInput: JSContainer;
            input: api.InputField<any>;
            constructor(__parent: any, field: opencart.FormConfig.Field, layout: string);
            setValue(value: any): void;
            getValue(): any;
            getField(): opencart.FormConfig.Field;
            getUiLabel(): JSContainer;
            getUiInput(): JSContainer;
            getInput(): api.InputField<any>;
        }
        class Form$0 implements api.EventListener {
            private act;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, act: any);
        }
    }
}
declare namespace opencart {
    class FormConfig {
        name: string;
        label: string;
        layout: string;
        fields: Array<FormConfig.Field>;
        actions: Array<FormConfig.Action>;
        static TEXT_TYPE: string;
        static NUMBER_TYPE: string;
        static DATE_TYPE: string;
        static TIME_TYPE: string;
        static WEEK_TYPE: string;
        static MONTH_TYPE: string;
        static COLOR_TYPE: string;
        static LONG_TEXT_TYPE: string;
        static SELECT_TYPE: string;
        static RANGE_TYPE: string;
        static FILE_TYPE: string;
        static CHECK_BOX_TYPE: string;
        static CLOUDINARY_TYPE: string;
        constructor();
    }
    namespace FormConfig {
        class Field {
            name: string;
            label: string;
            type: string;
            defaultValue: any;
            required: boolean;
            options: Array<Object>;
            constructor();
        }
        class Action {
            name: string;
            icon: string;
            label: string;
            event: Function;
            constructor();
        }
    }
}
declare namespace opencart {
    class Orders extends JSContainer {
        filter: JSContainer;
        list: JSContainer;
        rtable: opencart.ResponsiveTable;
        listPanel: opencart.Panel;
        rw: RestWebservice;
        constructor(token: string);
        start(): void;
        createCol(name: string, label: string, numeric: boolean): opencart.TableConfig.Column;
        createAction(name: string, label: string, icon: string): opencart.TableConfig.Action;
    }
    namespace Orders {
        class Orders$0 implements api.EventListener {
            private r;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, r: any);
        }
        class Orders$1 implements opencart.CellRenderer {
            __parent: any;
            /**
             *
             * @param {opencart.Table} table
             * @param {*} td
             * @param {*} obj
             * @param {Object} rowData
             * @param {opencart.TableConfig.Column} col
             */
            renderCell(table: opencart.Table, td: api.Renderable, obj: any, rowData: Object, col: opencart.TableConfig.Column): void;
            constructor(__parent: any);
        }
        class Orders$2 implements api.EventListener {
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
declare namespace opencart {
    class PageHeader extends JSContainer {
        title: JSContainer;
        buttons: JSContainer;
        breadcrumbs: JSContainer;
        constructor(name: string);
        setTitle(title: string): void;
        addBreadcrumb(title: string, route: string): void;
        addButton(name: string, title: string, icon: string): opencart.Button;
    }
}
declare namespace opencart {
    class Panel extends JSContainer {
        heading: JSContainer;
        title: JSContainer;
        icon: JSContainer;
        uititle: JSContainer;
        body: JSContainer;
        footer: JSContainer;
        constructor(name: string);
        setTitle(title: string): void;
        setIcon(icon: string): void;
        getHeading(): JSContainer;
        getBody(): JSContainer;
        getFooter(): JSContainer;
    }
}
declare namespace opencart {
    class Products extends JSContainer {
        header: opencart.PageHeader;
        content: JSContainer;
        table: opencart.ResponsiveTable;
        rest: RestWebservice;
        listPanel: opencart.Panel;
        formPanel: opencart.Panel;
        formTabs: opencart.Tabs;
        generalForm: opencart.Form;
        layout: CardLayout;
        formHydrated: boolean;
        constructor(name: string);
        start(): void;
        openForm(): void;
        hydrateForm(): void;
        openList(data: Array<Object>): void;
        buildForm(): void;
        buildTable(): void;
        setButtons(): void;
    }
    namespace Products {
        class Products$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Products$1 implements api.EventListener {
            private select;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, select: any);
        }
        class Products$2 implements api.EventListener {
            private select;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, select: any);
        }
        namespace Products$2 {
            class Products$2$0 implements api.EventListener {
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
        class Products$3 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Products$4 implements opencart.CellRenderer {
            private defrend;
            __parent: any;
            /**
             *
             * @param {opencart.Table} table
             * @param {*} td
             * @param {*} value
             * @param {Object} rowData
             * @param {opencart.TableConfig.Column} column
             */
            renderCell(table: opencart.Table, td: api.Renderable, value: any, rowData: Object, column: opencart.TableConfig.Column): void;
            constructor(__parent: any, defrend: any);
        }
        class Products$5 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Products$6 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        namespace Products$6 {
            class Products$6$0 implements api.EventListener {
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
}
declare namespace opencart {
    class ProgressBar extends JSContainer {
        progressBar: JSContainer;
        constructor(name: string);
        setProgress(percent: number): void;
    }
}
declare namespace opencart {
    class Redemptions extends JSContainer {
        header: opencart.PageHeader;
        content: JSContainer;
        table: opencart.ResponsiveTable;
        rest: RestWebservice;
        listPanel: opencart.Panel;
        formPanel: opencart.Panel;
        form: opencart.Form;
        listRow: JSContainer;
        tilesRow: JSContainer;
        totalSales: opencart.Tile;
        totalRedeems: opencart.Tile;
        totalPosted: opencart.Tile;
        totalCredits: opencart.Tile;
        layout: CardLayout;
        constructor(name: string);
        list(res: Object): void;
        start(): void;
        buildForm(): void;
        setButtons(): void;
        buildDashboard(): void;
        buildTable(): void;
        createCol(name: string, title: string, numeric: boolean): opencart.TableConfig.Column;
    }
    namespace Redemptions {
        class Redemptions$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Redemptions$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        namespace Redemptions$1 {
            class Redemptions$1$0 implements api.EventListener {
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
        class Redemptions$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Redemptions$3 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Redemptions$4 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        namespace Redemptions$4 {
            class Redemptions$4$0 implements api.EventListener {
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
}
declare namespace opencart {
    class ResponsiveTable extends JSContainer {
        table: opencart.Table;
        constructor(name: string);
        getTable(): opencart.Table;
    }
}
declare namespace opencart {
    class ServerAction {
    }
}
declare namespace opencart {
    class Table extends JSContainer {
        head: JSContainer;
        body: JSContainer;
        headerRow: JSContainer;
        selectHeaderCell: JSContainer;
        headerCheckBox: input.JSCheckBox;
        config: opencart.TableConfig;
        data_: Array<Object>;
        cellRenderer: opencart.CellRenderer;
        constructor(name: string);
        setSelectAll(b: boolean): void;
        getSelected(): Array<Object>;
        getCellRenderer(): opencart.CellRenderer;
        setCellRenderer(cellRenderer: opencart.CellRenderer): void;
        getHead(): JSContainer;
        getBody(): JSContainer;
        getConfig(): opencart.TableConfig;
        setConfig(config: opencart.TableConfig): void;
        refresh(): void;
        setData(data: Array<Object>): void;
    }
    namespace Table {
        class TableAction extends JSContainer {
            __parent: any;
            config: opencart.TableConfig;
            btgroup: JSContainer;
            constructor(__parent: any, config: opencart.TableConfig);
            createBtn(act: opencart.TableConfig.Action, isMenu: boolean): JSContainer;
        }
        namespace TableAction {
            class TableAction$0 implements api.EventListener {
                private act;
                __parent: any;
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source: api.Renderable, evt: Event): void;
                constructor(__parent: any, act: any);
            }
        }
        class TableRow extends JSContainer {
            __parent: any;
            cb: input.JSCheckBox;
            data_: Object;
            config_: opencart.TableConfig;
            table_: opencart.Table;
            constructor(__parent: any, table: opencart.Table, data: Object, config: opencart.TableConfig);
            setValue(field: string, value: any): void;
            getData(): Object;
            isSelected(): boolean;
            setSelected(b: boolean): void;
        }
        class TableHeaderColumn extends JSContainer {
            __parent: any;
            column_: opencart.TableConfig.Column;
            inside: JSContainer;
            sortdir: number;
            constructor(__parent: any, column: opencart.TableConfig.Column);
            clearSort(): void;
        }
        namespace TableHeaderColumn {
            class TableHeaderColumn$0 implements api.EventListener {
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
        class DefaultCellRenderer implements opencart.CellRenderer {
            /**
             *
             * @param {opencart.Table} table
             * @param {*} td
             * @param {*} obj
             * @param {Object} rowData
             * @param {opencart.TableConfig.Column} col
             */
            renderCell(table: opencart.Table, td: api.Renderable, obj: any, rowData: Object, col: opencart.TableConfig.Column): void;
            constructor();
        }
        class Table$0 implements api.EventListener {
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
declare namespace opencart {
    class TableConfig {
        selectable: boolean;
        columns: Array<TableConfig.Column>;
        actions: Array<TableConfig.Action>;
    }
    namespace TableConfig {
        class Column {
            name: string;
            label: string;
            dataType: string;
            sortable: boolean;
            constructor();
        }
        class Action {
            name: string;
            icon: string;
            label: string;
            event: Function;
            constructor();
        }
    }
}
declare namespace opencart {
    class Tabs extends JSContainer {
        navs: JSContainer;
        content: JSContainer;
        constructor(name: string);
        addTab(name: string, label: string): void;
        activate(name: string): void;
        getPane(name: string): api.Renderable;
        doActivate(name: string, parent: api.Renderable): void;
        getNavs(): JSContainer;
        getContent(): JSContainer;
    }
    namespace Tabs {
        class Tabs$0 implements api.EventListener {
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
declare namespace opencart {
    class Tile extends JSContainer {
        heading: JSContainer;
        body: JSContainer;
        footer: JSContainer;
        constructor(name: string);
        setHeading(left: string, right: string): void;
        setBody(icon: string, txt: string): void;
        setFooter(link: JSContainer): void;
    }
}
declare namespace opencart {
    class Util {
        static getToken(): string;
        static getPath(route: string): string;
    }
}
