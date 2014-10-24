/**
 * The Form Builder Field Grid Component
 *
 * @module aui-form-builder
 * @submodule aui-form-builder-field-grid
 */

var CSS_FIELD_GRID = A.getClassName('form', 'builder', 'field', 'grid'),
    CSS_FIELD_GRID_ROW = A.getClassName('form', 'builder', 'field', 'row'),
    CSS_FIELD_GRID_TABLE = A.getClassName('form', 'builder', 'field', 'table'),
    CSS_FIELD_GRID_COLUMNS = A.getClassName('form', 'builder', 'field', 'columns'),

    TPL_FIELD_GRID_CELL = '<td></td>',
    TPL_FIELD_GRID_COLUMN =  '<th>{value}</th>',
    TPL_FIELD_GRID_COLUMNS =  '<tr class="' + CSS_FIELD_GRID_COLUMNS + '"><th></th></tr>',
    TPL_FIELD_GRID_ROW = '<th>{value}</th>',
    TPL_FIELD_GRID_ROWS = '<tr class="' + CSS_FIELD_GRID_ROW + '"></tr>';

/**
 * A base class for Form Builder Field Grid.
 *
 * @class A.FormBuilderFieldGrid
 * @extends A.FormBuilderFieldSentence
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 */
A.FormBuilderFieldGrid = A.Base.create('form-builder-field-grid', A.FormBuilderFieldSentence, [], {
    TPL_FIELD_CONTENT: '<table class="' + CSS_FIELD_GRID_TABLE + '">' +
        '</table>',

    /**
     * Constructor for the `A.FormBuilderFieldRow`. Lifecycle.
     *
     * @method initializer
     * @protected
     */
    initializer: function() {
        var content = this.get('content');

        content.addClass(CSS_FIELD_GRID);

        this._uiSetColumns(this.get('columns'));
        this._uiSetRows(this.get('rows'));


        this.after({
            columnsChange: this._afterColumnsChange,
            rowsChange: this._afterRowsChange
        });
    },

    /**
     * Fired after the `grids` attribute is set.
     *
     * @method _afterRowsChange
     * @protected
     */
    _afterRowsChange: function() {
        this._uiSetRows(this.get('rows'));
    },

    /**
     * Fired after the `grids` attribute is set.
     *
     * @method _afterColumnsChange
     * @protected
     */
    _afterColumnsChange: function() {
        this._uiSetColumns(this.get('columns'));
    },

    /**
     * Fills the settings array with the information for this field.
     *
     * @method _fillSettings
     * @override
     * @protected
     */
    _fillSettings: function() {
        A.FormBuilderFieldGrid.superclass._fillSettings.apply(this, arguments);

        this._settings.push(
            {
                attrName: 'columns',
                editor: new A.OptionsDataEditor({
                    label: 'Columns'
                })
            },
            {
                attrName: 'rows',
                editor: new A.OptionsDataEditor({
                    label: 'Rows'
                })
            },
            {
                attrName: 'required',
                editor: new A.BooleanDataEditor({
                    label: 'Required'
                })
            }
        );
    },

    /**
     * Updates the ui according to the value of the `columns` attribute.
     *
     * @method _uiSetColumns
     * @param {Array} columns
     * @protected
     */
    _uiSetColumns: function(columns) {
        var columnsContainer = this.get('content').one('.' + CSS_FIELD_GRID_TABLE),
            columnNode = A.Node.create(TPL_FIELD_GRID_COLUMNS);

        columnsContainer.empty();
        A.Array.each(columns, function(column) {
            columnNode.append(A.Lang.sub(TPL_FIELD_GRID_COLUMN, {
                value: column
            }));
        });
        columnsContainer.appendChild(columnNode);
    },

    /**
     * Updates the ui according to the value of the `rows` attribute.
     *
     * @method _uiSetRows
     * @param {Array} rows
     * @protected
     */
    _uiSetRows: function(rows) {
        var tableContainer = this.get('content').one('table'),
            columns = this.get('columns'),
            rowNode;

        A.Array.each(rows, function(row) {
            rowNode = A.Node.create(A.Lang.sub(TPL_FIELD_GRID_ROWS));

            rowNode.appendChild(A.Lang.sub(TPL_FIELD_GRID_ROW, {
                value: row
            }));

            A.Array.each(columns, function() {
                rowNode.appendChild(A.Lang.sub(TPL_FIELD_GRID_CELL));
            });
            tableContainer.appendChild(rowNode);
        });
    }
}, {
    /**
     * Static property used to define the default attribute configuration
     * for the `A.FormBuilderFieldGrid`.
     *
     * @property ATTRS
     * @type Object
     * @static
     */
    ATTRS: {
        /**
         * The columns that can be chosen.
         *
         * @attribute columns
         * @default []
         * @type String
         */
        columns: {
            validator: A.Lang.isArray,
            value: []
        },

        /**
         * The rows that can be chosen.
         *
         * @attribute rows
         * @default []
         * @type String
         */
        rows: {
            validator: A.Lang.isArray,
            value: []
        },

        /**
         * Flag indicating if this field is required.
         *
         * @attribute required
         * @default false
         * @type Boolean
         */
        required: {
            validator: A.Lang.isBoolean,
            value: false
        }
    }
});