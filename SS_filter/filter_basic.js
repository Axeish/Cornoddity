<link rel="stylesheet" href="//assets.squarewebsites.org/custom-filter/custom-filter.min.css"/>
<script>
window.customFilterSettings = {
    'targets': [{
        container: '.collection-type-products.view-list .list-grid',// css selector for filter container
        items: '.hentry',// css selector for items to filter
        settings: {
            position: 'left',//set the position for filter to appear. May be: top, left, right
            align: 'left',// align filter options, may be: left, center, right, space-between
            showItemsCount: false, // show (true) or hide (false) Items count
            collectionUrl: '',// you need to set source collection url slug (like /blog) if your items have external links (not linked to themselves)
            wrapFilterContainer: true,// needed to prevent 7.1 Grid CSS styles for filter options
            itemsCount: {
                enabled: false, // same as showItemsCount
                text: '', // set the items text before counter, it is Items: by default and you may set your own text
                positionOrder: 1 // items counter position, higher means last
            },
            keepDropdownsOpenOnInit: false, // if set to true, dropdowns will be opened initially
            customClasses: 'lite-dropdowns',
            /* Add any custom classes to filter container if you want to have your own to use in CSS styling,
            available: cf-sort-right (move sorting element right), cf-sort-left (move sort left), lite-dropdowns(gives lighter dropdowns stylings), cf-ctrls-inline (makes dropdowns fit one line space)*/
            view: 'dropdowns', // available: dropdowns, breadcrumbs, modern, buttons, buttons-round, buttons-pill, buttons-inline
            sticky: {// if enabled: true - trying enable sticky position of Filter to be seen on scroll
                enabled: false,
                top: '6%'
            },
            simpleFilter: {
                show: {
                    effect: 'fade',
                    transitionDuration: 300,
                    stagger: 60
                },
                hide: {
                    effect: 'fade',
                    transitionDuration: 100,
                    stagger: 18
                }
            },
            pagination: {
              enabled: true, // enable pagination
              pageSize: 40, // set the page size to 40
            },
            /*----Mobile Panel Section----*/
            mobilePanel: {// control if you want to have separate offscreen panel with filters on small screens
                enabled: true,// if set to false, no filter buttons on mobiles will be showed
                triggerButtonName: 'Filter', // trigger button text
                keepDropdownsOpen: null, // if false it overrides desktop settings, if true - dropdowns opened
                closeOnSelect: false, // mobile panel closed just after user selected something
                closeOnSearch: false, // mobile panel closed if user searced something in searc field
                closeOnOutsideClick: false // if true, mobile panel will be closed if user clicks outside it
            },
            /*----Filters Section----*/
            filter: { // here you define all filters you need and name them
                category: false, // disabling default Category dropdown
                tag: false, // disabling default Tag dropdown
                items: [{
                    name: 'Category', // give the dropdown (fiter entity) name you want
                    multiple: true, // if true, allow to select multiple options
                    logic: 'and', // how to combine dropdown options with other dropdowns logic. Other value is or
                    multipleLogic: 'or',// combine each selected option with OR or AND logic within one dropdown
                    closedSubOptions: false, // works for Products 7.1 subcategories onl
                    sort: 'asc', // may be asc, desc, asAllowed (need define options list in allowedOptions), or your own custom function
                    getAttr: 'categories'// here you say Filter to look for options in items categories
                }, {
					name: "Tags",
					multiple: true,
					getAttr: "tags"
				},
                {
					name: "Availability",
					multiple: false,
					getAttr: function(el, data){
                    	if(el.hasClass('sold-out')||el.one('.product-mark.sold-out')){
                        	return 'Sold Out';
                        } else {
                        	return 'Available';
                        }
                    }
				}
                  ]
            },
            sort: {// define the sorters
                enabled: true,// if false - no sorters visible/working
                //defined: 'price_desc',// select which of defined sorters will work initially
                items: [{
                    name: 'Alphabetical',
                    order: 'asc|desc',
                    orderTexts: 'A-Z|Z-A',
                    hideName: true,
                    sort: 'title'//.ProductList-title
                },{
                    name: 'Stock',
                    order: 'asc|desc',
                    orderTexts: 'Low Stock|High Stock',
                    hideName: true,
                    sort: '[data-in-stock] parseInt'
                },{
                    name: 'Price',// name your sorter
                    order: 'asc|desc',// define orders
                    hideName: true,// hide the Price name
                    orderTexts: '$-$$$|$$$-$'// define orders naming
                    /* If sorter named as Price, you do not need define sort selectors or function: it will work the same like you defined:
                    sort: '[data-price] parseInt'
                    */
                }]
            },
            search: {
                enabled: true,// if false, no Search input will be showed
                text: 'Search', //set the placeholder to your search field, otherwise Search will be used
            }
        }
    }]
};
</script>
<script src="//assets.squarewebsites.org/custom-filter/custom-filter.min.js"></script>