link rel="stylesheet" href="//assets.squarewebsites.org/custom-filter/custom-filter.min.css"/>
<style>
/* Make filters look more grouped like Amazon */
/* MAIN FILTER CONTAINER */
.custom-filter {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: #111;
  padding: 15px;
}

/* GROUP BLOCK STYLING */
.custom-filter .cf-filter-group {
  margin-bottom: 35px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
}

/* SECTION HEADINGS */
.custom-filter .cf-filter-group label,
.custom-filter .cf-filter-group > h3 {
  display: block;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #222;
  margin-bottom: 12px;
  padding-left: 2px;
}

/* DROPDOWN SELECTS */
.custom-filter select,
.custom-filter .cf-options select {
  width: 100%;
  padding: 10px 12px;
  font-size: 15px;
  border: 1px solid #bbb;
  background-color: #f9f9f9;
  color: #111;
  margin-bottom: 10px;
  border-radius: 5px;
}

/* CHECKBOXES + LABELS */
.custom-filter .cf-options label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
  color: #222;
  font-size: 15px;
  font-weight: 500;
}

/* CHECKBOX HOVER */
.custom-filter .cf-options label:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}

/* CHECKBOX ICON SPACE */
.custom-filter input[type="checkbox"] + span {
  margin-left: 8px;
}

/* SEARCH FIELD */
.custom-filter .cf-search input {
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #bbb;
  border-radius: 5px;
  margin-bottom: 20px;
  color: #222;
}

/* PAGINATION TEXT */
.custom-filter .cf-pagination {
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  color: #555;
}


</style>
<script>
window.customFilterSettings = {
    'targets': [{
        container: '.collection-type-products.view-list .list-grid',// css selector for filter container
        items: '.hentry',// css selector for items to filter
        settings: {
            position: 'left',//set the position for filter to appear. May be: top, left, right
            align: 'left',// align filter options, may be: left, center, right, space-between
            initState: { sort: ['Date|desc']},
            showCheckboxes: true,
            showItemsCount: true, // show (true) or hide (false) Items count
            collectionUrl: '',// you need to set source collection url slug (like /blog) if your items have external links (not linked to themselves)
            closeOptionsOnSelect: false,
            wrapFilterContainer: true,// needed to prevent 7.1 Grid CSS styles for filter options
            itemsCount: {
                enabled: false, // same as showItemsCount
                text: '', // set the items text before counter, it is Items: by default and you may set your own text
                positionOrder: 1 // items counter position, higher means last
            },
            keepDropdownsOpenOnInit: true, // if set to true, dropdowns will be opened initially
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
                keepDropdownsOpenOnInit: false,
                keepDropdownsOpen: false, // if false it overrides desktop settings, if true - dropdowns opened
                closeOnSelect: false, // mobile panel closed just after user selected something
                closeOnSearch: false, // mobile panel closed if user searced something in searc field
                closeOnOutsideClick: false // if true, mobile panel will be closed if user clicks outside it
            },
            /*----Filters Section----*/
            filter: { // here you define all filters you need and name them
                category: false, // disabling default Category dropdown
                tag: false, // disabling default Tag dropdown
                items: [{
                    name: 'Season', // give the dropdown (fiter entity) name you want
                    multiple: false, // if true, allow to select multiple options
                    logic: 'and', // how to combine dropdown options with other dropdowns logic. Other value is or
                    multipleLogic: 'or',// combine each selected option with OR or AND logic within one dropdown
                    closedSubOptions: false, // works for Products 7.1 subcategories onl
                    sort: 'asc', // may be asc, desc, asAllowed (need define options list in allowedOptions), or your own custom function
                    getAttr: 'categories'// here you say Filter to look for options in items categories
                },
                {
                    name: "Products",
                    hideName: false,
                    multiple: true,

                     logic: 'or',
                     getAttr: function(el, data) {
                        const tags = data.tags || [];
                        const match = ['T-Shirt', 'Print', 'Sticker', 'Greeting Card', 'Book'];
                        return tags.filter(tag => match.includes(tag));
                    }
                },



                {
                    name: 'Artist',
                    hideName: false,
                    multiple: true,
                    logic: 'or',
                    getAttr: function(el, data) {
                        const tags = data.tags || [];
                        const match = ['Axeishguy', 'Cornfedhippo', 'Guest Artist'];
                        return tags.filter(tag => match.includes(tag));
                        }
                    },
                    {
                        name: 'Sub-Theme',
                        hideName: false,
                        multiple: true,
                        logic: 'or',
                        getAttr: 'tags'
                   },
                             {
      name: 'Collection',
      hideName: true,
      multiple: true,
      getAttr: 'tags',
      getAttr: function(el, data) {
                        const tags = data.tags || [];
                        const match = ['bloom-bone', 'fiesta'];
                        return tags.filter(tag => match.includes(tag));
                        }

    },



                  ]
            },
            sort: {// define the sorters
                enabled: true,// if false - no sorters visible/working
                //defined: 'price_desc',// select which of defined sorters will work initially
                items: [{
                    name: 'Date',
                    order: 'desc|asc',
                    orderTexts: 'Newest|Oldest',
                    hideName: true,
                    sort: '[data-publish-on] parseInt'
                },{
                    name: 'Price',// name your sorter
                    order: 'asc|desc',// define orders
                    hideName: true,// hide the Price name
                    orderTexts: '$-$$|$$-$'// define orders naming

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