declare namespace framework.components.opencart {
    class Boot {
        static main(args: string[]): void;
    }
}
declare namespace framework.components.opencart {
    class Button extends framework.components.JSContainer {
        constructor(name: string, icon: string, label: string);
    }
}
declare namespace framework.components.opencart {
    interface CellRenderer {
        renderCell(table: framework.components.opencart.Table, td: framework.components.api.Renderable, value: any, rowData: Object, column: framework.components.opencart.TableConfig.Column): any;
    }
}
declare namespace framework.components.opencart {
    class CloudinaryImage extends framework.components.JSContainer {
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
declare namespace framework.components.opencart {
    class CloudinaryInput extends framework.components.JSContainer implements framework.components.api.InputField<Object> {
        image: framework.components.opencart.CloudinaryImage;
        upload: framework.components.JSContainer;
        cloudinary: framework.components.opencart.CloudinaryUploader;
        imageContainer: framework.components.JSContainer;
        cloudinaryContainer: framework.components.JSContainer;
        uploadContainer: framework.components.JSContainer;
        progressBar: framework.components.opencart.ProgressBar;
        cloudinaryEntry: Object;
        required: boolean;
        btnUpload: framework.components.opencart.Button;
        constructor(name: string);
        decorateUpload(): void;
        getUploader(): framework.components.opencart.CloudinaryUploader;
        decorateCloudinary(): void;
        setDefault(defau: string): void;
        getImage(): framework.components.JSContainer;
        getCloudinary(): framework.components.opencart.CloudinaryUploader;
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
        setBinding(binding: string): framework.components.api.InputField<Object>;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setRequired(b: boolean): framework.components.api.InputField<Object>;
    }
    namespace CloudinaryInput {
        class CloudinaryInput$0 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class CloudinaryInput$1 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class CloudinaryInput$2 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class CloudinaryInput$3 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class CloudinaryInput$4 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class CloudinaryInput$5 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.components.opencart {
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
declare namespace framework.components.opencart {
    class CloudinaryUploader extends framework.components.JSContainer {
        endpoint: string;
        cloudName: string;
        unsignedUploadPreset: string;
        constructor(name: string);
        /**
         *
         * @return {java.lang.String[]}
         */
        advancedEventTypes(): string[];
        setEndpoint(ep: string): void;
        setCloudName(cn: string): void;
        setUnsignedUploadPreset(uup: string): void;
        uploadFile(file: File): void;
    }
}
declare namespace framework.components.opencart {
    class Form extends framework.components.JSContainer {
        config_: framework.components.opencart.FormConfig;
        body: framework.components.JSContainer;
        fields: Array<Form.FormGroup>;
        constructor(name: string);
        setConfig(config: framework.components.opencart.FormConfig): void;
        addField$framework_components_opencart_FormConfig_Field(field: framework.components.opencart.FormConfig.Field): void;
        addField$java_lang_String$java_lang_String$java_lang_String$boolean(name: string, label: string, type: string, required: boolean): void;
        addField(name?: any, label?: any, type?: any, required?: any): any;
        getFormData(): Object;
        setFormData(formData: Object): void;
        getFormGroup(name: string): Form.FormGroup;
        addButton(name: string, icon: string, label: string): framework.components.JSContainer;
        createBtn(act: framework.components.opencart.FormConfig.Action): framework.components.JSContainer;
    }
    namespace Form {
        class FormGroup extends framework.components.JSContainer {
            __parent: any;
            field_: framework.components.opencart.FormConfig.Field;
            uiLabel: framework.components.JSContainer;
            uiInput: framework.components.JSContainer;
            input: framework.components.api.InputField<any>;
            constructor(__parent: any, field: framework.components.opencart.FormConfig.Field, layout: string);
            setValue(value: any): void;
            getValue(): any;
            getField(): framework.components.opencart.FormConfig.Field;
            getUiLabel(): framework.components.JSContainer;
            getUiInput(): framework.components.JSContainer;
            getInput(): framework.components.api.InputField<any>;
        }
        class Form$0 implements framework.components.api.EventListener {
            private act;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any, act: any);
        }
    }
}
declare namespace framework.components.opencart {
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
declare namespace framework.components.opencart {
    class Orders extends framework.components.JSContainer {
        filter: framework.components.JSContainer;
        list: framework.components.JSContainer;
        rtable: framework.components.opencart.ResponsiveTable;
        listPanel: framework.components.opencart.Panel;
        rw: framework.components.RestWebservice;
        constructor(token: string);
        start(): void;
        createCol(name: string, label: string, numeric: boolean): framework.components.opencart.TableConfig.Column;
        createAction(name: string, label: string, icon: string): framework.components.opencart.TableConfig.Action;
    }
    namespace Orders {
        class Orders$0 implements framework.components.api.EventListener {
            private r;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any, r: any);
        }
        class Orders$1 implements framework.components.opencart.CellRenderer {
            __parent: any;
            /**
             *
             * @param {framework.components.opencart.Table} table
             * @param {*} td
             * @param {*} obj
             * @param {Object} rowData
             * @param {framework.components.opencart.TableConfig.Column} col
             */
            renderCell(table: framework.components.opencart.Table, td: framework.components.api.Renderable, obj: any, rowData: Object, col: framework.components.opencart.TableConfig.Column): void;
            constructor(__parent: any);
        }
        class Orders$2 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.components.opencart {
    class PageHeader extends framework.components.JSContainer {
        title: framework.components.JSContainer;
        buttons: framework.components.JSContainer;
        breadcrumbs: framework.components.JSContainer;
        constructor(name: string);
        setTitle(title: string): void;
        addBreadcrumb(title: string, route: string): void;
        addButton(name: string, title: string, icon: string): framework.components.opencart.Button;
    }
}
declare namespace framework.components.opencart {
    class Panel extends framework.components.JSContainer {
        heading: framework.components.JSContainer;
        title: framework.components.JSContainer;
        icon: framework.components.JSContainer;
        uititle: framework.components.JSContainer;
        body: framework.components.JSContainer;
        footer: framework.components.JSContainer;
        constructor(name: string);
        setTitle(title: string): void;
        setIcon(icon: string): void;
        getHeading(): framework.components.JSContainer;
        getBody(): framework.components.JSContainer;
        getFooter(): framework.components.JSContainer;
    }
}
declare namespace framework.components.opencart {
    class Products extends framework.components.JSContainer {
        header: framework.components.opencart.PageHeader;
        content: framework.components.JSContainer;
        table: framework.components.opencart.ResponsiveTable;
        rest: framework.components.RestWebservice;
        listPanel: framework.components.opencart.Panel;
        formPanel: framework.components.opencart.Panel;
        formTabs: framework.components.opencart.Tabs;
        generalForm: framework.components.opencart.Form;
        layout: framework.components.CardLayout;
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
        class Products$0 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Products$1 implements framework.components.api.EventListener {
            private select;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any, select: any);
        }
        class Products$2 implements framework.components.api.EventListener {
            private select;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any, select: any);
        }
        namespace Products$2 {
            class Products$2$0 implements framework.components.api.EventListener {
                __parent: any;
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source: framework.components.api.Renderable, evt: Event): void;
                constructor(__parent: any);
            }
        }
        class Products$3 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Products$4 implements framework.components.opencart.CellRenderer {
            private defrend;
            __parent: any;
            /**
             *
             * @param {framework.components.opencart.Table} table
             * @param {*} td
             * @param {*} value
             * @param {Object} rowData
             * @param {framework.components.opencart.TableConfig.Column} column
             */
            renderCell(table: framework.components.opencart.Table, td: framework.components.api.Renderable, value: any, rowData: Object, column: framework.components.opencart.TableConfig.Column): void;
            constructor(__parent: any, defrend: any);
        }
        class Products$5 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Products$6 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        namespace Products$6 {
            class Products$6$0 implements framework.components.api.EventListener {
                __parent: any;
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source: framework.components.api.Renderable, evt: Event): void;
                constructor(__parent: any);
            }
        }
    }
}
declare namespace framework.components.opencart {
    class ProgressBar extends framework.components.JSContainer {
        progressBar: framework.components.JSContainer;
        constructor(name: string);
        setProgress(percent: number): void;
    }
}
declare namespace framework.components.opencart {
    class Redemptions extends framework.components.JSContainer {
        header: framework.components.opencart.PageHeader;
        content: framework.components.JSContainer;
        table: framework.components.opencart.ResponsiveTable;
        rest: framework.components.RestWebservice;
        listPanel: framework.components.opencart.Panel;
        formPanel: framework.components.opencart.Panel;
        form: framework.components.opencart.Form;
        listRow: framework.components.JSContainer;
        tilesRow: framework.components.JSContainer;
        totalSales: framework.components.opencart.Tile;
        totalRedeems: framework.components.opencart.Tile;
        totalPosted: framework.components.opencart.Tile;
        totalCredits: framework.components.opencart.Tile;
        layout: framework.components.CardLayout;
        constructor(name: string);
        list(res: Object): void;
        start(): void;
        buildForm(): void;
        setButtons(): void;
        buildDashboard(): void;
        buildTable(): void;
        createCol(name: string, title: string, numeric: boolean): framework.components.opencart.TableConfig.Column;
    }
    namespace Redemptions {
        class Redemptions$0 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Redemptions$1 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        namespace Redemptions$1 {
            class Redemptions$1$0 implements framework.components.api.EventListener {
                __parent: any;
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source: framework.components.api.Renderable, evt: Event): void;
                constructor(__parent: any);
            }
        }
        class Redemptions$2 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Redemptions$3 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Redemptions$4 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        namespace Redemptions$4 {
            class Redemptions$4$0 implements framework.components.api.EventListener {
                __parent: any;
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source: framework.components.api.Renderable, evt: Event): void;
                constructor(__parent: any);
            }
        }
    }
}
declare namespace framework.components.opencart {
    class ResponsiveTable extends framework.components.JSContainer {
        table: framework.components.opencart.Table;
        constructor(name: string);
        getTable(): framework.components.opencart.Table;
    }
}
declare namespace framework.components.opencart {
    class ServerAction {
    }
}
declare namespace framework.components.opencart {
    class Table extends framework.components.JSContainer {
        head: framework.components.JSContainer;
        body: framework.components.JSContainer;
        headerRow: framework.components.JSContainer;
        selectHeaderCell: framework.components.JSContainer;
        headerCheckBox: framework.components.input.JSCheckBox;
        config: framework.components.opencart.TableConfig;
        data_: Array<Object>;
        cellRenderer: framework.components.opencart.CellRenderer;
        constructor(name: string);
        setSelectAll(b: boolean): void;
        getSelected(): Array<Object>;
        getCellRenderer(): framework.components.opencart.CellRenderer;
        setCellRenderer(cellRenderer: framework.components.opencart.CellRenderer): void;
        getHead(): framework.components.JSContainer;
        getBody(): framework.components.JSContainer;
        getConfig(): framework.components.opencart.TableConfig;
        setConfig(config: framework.components.opencart.TableConfig): void;
        refresh(): void;
        setData(data: Array<Object>): void;
    }
    namespace Table {
        class TableAction extends framework.components.JSContainer {
            __parent: any;
            config: framework.components.opencart.TableConfig;
            btgroup: framework.components.JSContainer;
            constructor(__parent: any, config: framework.components.opencart.TableConfig);
            createBtn(act: framework.components.opencart.TableConfig.Action, isMenu: boolean): framework.components.JSContainer;
        }
        namespace TableAction {
            class TableAction$0 implements framework.components.api.EventListener {
                private act;
                __parent: any;
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source: framework.components.api.Renderable, evt: Event): void;
                constructor(__parent: any, act: any);
            }
        }
        class TableRow extends framework.components.JSContainer {
            __parent: any;
            cb: framework.components.input.JSCheckBox;
            data_: Object;
            config_: framework.components.opencart.TableConfig;
            table_: framework.components.opencart.Table;
            constructor(__parent: any, table: framework.components.opencart.Table, data: Object, config: framework.components.opencart.TableConfig);
            setValue(field: string, value: any): void;
            getData(): Object;
            isSelected(): boolean;
            setSelected(b: boolean): void;
        }
        class TableHeaderColumn extends framework.components.JSContainer {
            __parent: any;
            column_: framework.components.opencart.TableConfig.Column;
            inside: framework.components.JSContainer;
            sortdir: number;
            constructor(__parent: any, column: framework.components.opencart.TableConfig.Column);
            clearSort(): void;
        }
        namespace TableHeaderColumn {
            class TableHeaderColumn$0 implements framework.components.api.EventListener {
                __parent: any;
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source: framework.components.api.Renderable, evt: Event): void;
                constructor(__parent: any);
            }
        }
        class DefaultCellRenderer implements framework.components.opencart.CellRenderer {
            /**
             *
             * @param {framework.components.opencart.Table} table
             * @param {*} td
             * @param {*} obj
             * @param {Object} rowData
             * @param {framework.components.opencart.TableConfig.Column} col
             */
            renderCell(table: framework.components.opencart.Table, td: framework.components.api.Renderable, obj: any, rowData: Object, col: framework.components.opencart.TableConfig.Column): void;
            constructor();
        }
        class Table$0 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.components.opencart {
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
declare namespace framework.components.opencart {
    class Tabs extends framework.components.JSContainer {
        navs: framework.components.JSContainer;
        content: framework.components.JSContainer;
        constructor(name: string);
        addTab(name: string, label: string): void;
        activate(name: string): void;
        getPane(name: string): framework.components.api.Renderable;
        doActivate(name: string, parent: framework.components.api.Renderable): void;
        getNavs(): framework.components.JSContainer;
        getContent(): framework.components.JSContainer;
    }
    namespace Tabs {
        class Tabs$0 implements framework.components.api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: framework.components.api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace framework.components.opencart {
    class Tile extends framework.components.JSContainer {
        heading: framework.components.JSContainer;
        body: framework.components.JSContainer;
        footer: framework.components.JSContainer;
        constructor(name: string);
        setHeading(left: string, right: string): void;
        setBody(icon: string, txt: string): void;
        setFooter(link: framework.components.JSContainer): void;
    }
}
declare namespace framework.components.opencart {
    class Util {
        static getToken(): string;
        static getPath(route: string): string;
    }
}
