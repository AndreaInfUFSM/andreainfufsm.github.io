// URL beginning and end, which will be used with the key
// To give Tabletop a URL

var google_docs_one = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=';
var google_docs_two = '&output=html';

// Google Docs spreadsheet key
var spreadsheet_key = '1UViHKvENF4UsQF6lw-jGBD0Wgp7AMXTws-rYt9agxQY';

// Template sources and what DIVs they will appear in
var templates = [
    {
        "templatesource": "#datatable-template",
        "templatehtml": "#searchable-table tbody",
        "sheet": "CC"
    }
];

// DataTables formatting options
// More options: http://datatables.net/plug-ins/sorting

// Formatted numbers: i.e. numbers with commas
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "formatted-num-pre": function ( a ) {
        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
        return parseFloat( a );
    },
    "formatted-num-asc": function ( a, b ) {
        return a - b;
    },
    "formatted-num-desc": function ( a, b ) {
        return b - a;
    }
});
// Currency
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "currency-pre": function ( a ) {
        a = (a==="-") ? 0 : a.replace( /[^\d\-\.]/g, "" );
        return parseFloat( a );
    },
    
    "currency-asc": function ( a, b ) {
        return a - b;
    },
    
    "currency-desc": function ( a, b ) {
        return b - a;
    }
});
// Percentages
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "percent-pre": function ( a ) {
        var x = (a == "-") ? 0 : a.replace( /%/, "" );
        return parseFloat( x );
    },
 
    "percent-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
 
    "percent-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});

// Load up the DataTable
function loadDataTable() {
    $('#searchable-table thead tr').clone(true).appendTo( '#searchable-table thead' );
    $('#searchable-table thead tr:eq(1) th').each( function (i) {
        var title = $(this).text();
        $(this).html( '<input type="text" width="10px" placeholder="Search '+title+'" />' );
 
        $( 'input', this ).on( 'keyup change', function () {
            if ( table.column(i).search() !== this.value ) {
                table
                    .column(i)
                    .search( this.value )
                    .draw();
            }
        } );
    } );
    // Load Datatables after Tabletop is loaded
    var table = $('#searchable-table').DataTable({
        "bAutoWidth": false,
        "bFilter": true,
        "paging": true,
        "oLanguage": {
            "sLengthMenu": "_MENU_ records per page"
        },
        "iDisplayLength": 40,
        "aaSorting": [[ 0, "desc" ]],
        "aoColumns": [
            {
                "sWidth": "8%"
                // "sType": "formatted-num" 
            },{
                "sWidth": "10%"
                // "sType": "formatted-num" 
            },{
                "sWidth": "9%"
                // "sType": "formatted-num" 
            },{
                "sWidth": "7%"
                // "sType": "formatted-num" 
            },{
                "sWidth": "7%"
                // "sType": "formatted-num" 
            },{
                //"sWidth": "23%"
                // "sType": "formatted-num" 
            },{
                "sWidth": "7%"
                // "sType": "formatted-num" 
            },{
                "sWidth": "7%"
                // "sType": "formatted-num" 
            },{
                "sWidth": "7%"
                // "sType": "formatted-num" 
            },{
                "sWidth": "7%"
                // "sType": "formatted-num" 
            }
        ],
        //"orderCellsTop": true,
        //"fixedHeader": true,
        // Fix thead to top of page when scrolling past it
        "initComplete": function(settings, json) {
            $('#searchable-table').show();
        }
    });
// Close loadDataTable
};

// Use Handlebars to load data from Tabletop to page
function loadToDOM(tabletop_data, tabletop) {
    // Loop through templates
    _.each(templates, function(element, num_templates) {
    	// Grab HTML of template and compile with Handlebars
    	var template_html = element['templatehtml'];    
    	var source = $(element["templatesource"] + "").html();
    	var sheet = element["sheet"];
        var handlebarscompile = Handlebars.compile(source);

		// Render the templates onto page
		$(template_html).append(handlebarscompile( tabletop.sheets(sheet) ));
	// Close each statement
    }, this);

    loadDataTable();
}


// Pull data from Google spreadsheet via Tabletop
function initializeTabletopObject(){
	Tabletop.init({
    	key: google_docs_one + spreadsheet_key + google_docs_two,
    	callback: loadToDOM,
    	simpleSheet: false,
    	debug: false
    });
}

// Load Tabletop
initializeTabletopObject();
