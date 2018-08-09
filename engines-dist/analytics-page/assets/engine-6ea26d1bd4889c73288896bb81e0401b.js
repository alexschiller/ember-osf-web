define("analytics-page/application/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={Counts:"_Counts_1mhar6",CountBox:"_CountBox_1mhar6",PickDateRange:"_PickDateRange_1mhar6",DateRangeButton:"_DateRangeButton_1mhar6",DateRangeMenu:"_DateRangeMenu_1mhar6",DateRangeOption:"_DateRangeOption_1mhar6",PrivateProject:"_PrivateProject_1mhar6"}}),define("analytics-page/application/template",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"3dVqWWro",block:'{"symbols":["dd","dateRange","pr","item"],"statements":[[1,[26,"page-title",[[26,"t",["analytics.pageTitle"],[["nodeTitle"],[[22,["node","title"]]]]]],null],false],[0,"\\n"],[6,"div"],[10,"class","container"],[8],[0,"\\n    "],[6,"div"],[11,"class",[27,["row ",[26,"unbound",[[22,["__styles__","Counts"]]],null]]]],[8],[0,"\\n        "],[6,"div"],[11,"class",[27,["col-sm-4 panel panel-default ",[26,"unbound",[[22,["__styles__","CountBox"]]],null]]]],[8],[0,"\\n            "],[6,"div"],[10,"class","panel-body"],[8],[0,"\\n                "],[6,"h3"],[8],[1,[26,"t",["analytics.forks"],null],false],[9],[0,"\\n"],[4,"if",[[22,["loading"]]],null,{"statements":[[0,"                    "],[1,[26,"loading-indicator",null,[["dark"],[true]]],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                    "],[6,"h2"],[8],[1,[20,"forksCount"],false],[9],[0,"\\n"],[4,"link-to-external",[[26,"if",[[22,["node","isProject"]],"nodeForks","registrationForks"],null],[22,["model","id"]]],null,{"statements":[[0,"                        "],[1,[26,"t",["analytics.viewForks"],null],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]}],[0,"            "],[9],[0,"\\n        "],[9],[0,"\\n        "],[6,"div"],[11,"class",[27,["col-sm-4 ",[26,"unbound",[[22,["__styles__","CountBox"]]],null]]]],[8],[0,"\\n            "],[6,"div"],[10,"class","panel panel-default"],[8],[0,"\\n                "],[6,"div"],[10,"class","panel-body"],[8],[0,"\\n                    "],[6,"h3"],[8],[1,[26,"t",["analytics.links"],null],false],[9],[0,"\\n"],[4,"if",[[22,["loading"]]],null,{"statements":[[0,"                        "],[1,[26,"loading-indicator",null,[["dark"],[true]]],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                        "],[6,"h2"],[8],[1,[20,"linkedByCount"],false],[9],[0,"\\n                        "],[6,"a"],[10,"role","button"],[11,"onclick",[26,"action",[[21,0,[]],"showLinksModal"],null],null],[8],[0,"\\n                            "],[1,[26,"t",["analytics.viewLinks"],null],false],[0,"\\n                        "],[9],[0,"\\n"],[4,"if",[[22,["linksModalShown"]]],null,{"statements":[[4,"bs-modal-simple",null,[["title","closeTitle","onHide"],[[26,"t",["analytics.links"],null],[26,"t",["general.close"],null],[26,"action",[[21,0,[]],"hideLinksModal"],null]]],{"statements":[[4,"paginated-relation",null,[["model","relationshipName","queryParams"],[[22,["node"]],"linkedByNodes",[22,["linksQueryParams"]]]],{"statements":[[4,"component",[[21,3,["item"]]],null,{"statements":[[0,"                                        "],[1,[26,"node-blurb",null,[["node","blurbType"],[[21,4,[]],"generic"]]],false],[0,"\\n"]],"parameters":[4]},null],[0,"\\n"],[4,"component",[[21,3,["empty"]]],null,{"statements":[[0,"                                        "],[1,[26,"t",["analytics.noLinks"],null],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[3]},null]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[]}],[0,"                "],[9],[0,"\\n            "],[9],[0,"\\n        "],[9],[0,"\\n        "],[6,"div"],[11,"class",[27,["col-sm-4 panel panel-default ",[26,"unbound",[[22,["__styles__","CountBox"]]],null]]]],[8],[0,"\\n            "],[6,"div"],[10,"class","panel-body"],[8],[0,"\\n                "],[6,"h3"],[8],[1,[26,"t",["analytics.templateCopies"],null],false],[9],[0,"\\n"],[4,"if",[[22,["loading"]]],null,{"statements":[[0,"                    "],[1,[26,"loading-indicator",null,[["dark"],[true]]],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                    "],[6,"h2"],[8],[1,[20,"templatedByCount"],false],[9],[0,"\\n"]],"parameters":[]}],[0,"            "],[9],[0,"\\n        "],[9],[0,"\\n    "],[9],[0,"\\n\\n"],[4,"if",[[22,["nodePublic"]]],null,{"statements":[[4,"unless",[[22,["hideAdblockWarning"]]],null,{"statements":[[4,"bs-alert",null,[["type","onDismissed"],["info",[26,"action",[[21,0,[]],[22,["dismissAdblockWarning"]]],null]]],{"statements":[[0,"                "],[6,"div"],[10,"class","text-center"],[8],[0,"\\n                    "],[1,[26,"t",["analytics.adblockWarning"],null],false],[0,"\\n                "],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n        "],[6,"div"],[11,"class",[27,[[26,"unbound",[[22,["__styles__","PickDateRange"]]],null]]]],[8],[0,"\\n            "],[6,"label"],[8],[0,"\\n                "],[1,[26,"t",["analytics.showForDateRange"],null],false],[0,"\\n"],[4,"bs-dropdown",null,null,{"statements":[[4,"component",[[21,1,["button"]]],[["class","__HTML_ATTRIBUTES__"],[[26,"local-class",["DateRangeButton"],[["from"],[[26,"unbound",[[22,["__styles__"]]],null]]]],[26,"hash",null,[["aria-haspopup","aria-expanded"],[true,false]]]]],{"statements":[[0,"                        "],[1,[26,"t",[[26,"concat",["analytics.dateRanges.",[22,["activeDateRange","key"]]],null]],null],false],[0,"\\n                        "],[1,[26,"fa-icon",["caret-down"],null],false],[0,"\\n"]],"parameters":[]},null],[4,"component",[[21,1,["menu"]]],[["class"],[[26,"concat",[[26,"local-class",["DateRangeMenu"],[["from"],[[26,"unbound",[[22,["__styles__"]]],null]]]]," dropdown-menu-right"],null]]],{"statements":[[4,"each",[[22,["dateRanges"]]],null,{"statements":[[0,"                            "],[6,"li"],[10,"role","menuitem"],[8],[0,"\\n                                "],[6,"a"],[10,"role","button"],[11,"class",[27,[[26,"unbound",[[22,["__styles__","DateRangeOption"]]],null]]]],[3,"action",[[21,0,[]],"setDateRange",[21,2,[]]]],[8],[0,"\\n                                    "],[1,[26,"t",[[26,"concat",["analytics.dateRanges.",[21,2,["key"]]],null]],null],false],[0,"\\n                                "],[9],[0,"\\n                            "],[9],[0,"\\n"]],"parameters":[2]},null]],"parameters":[]},null]],"parameters":[1]},null],[0,"            "],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"        "],[6,"div"],[10,"class","row"],[8],[0,"\\n            "],[6,"div"],[11,"class",[27,["col-xs-12 ",[26,"unbound",[[22,["__styles__","PrivateProject"]]],null]]]],[8],[0,"\\n                "],[1,[26,"t",["analytics.privateProject"],null],false],[0,"\\n            "],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]}],[0,"\\n    "],[6,"div"],[10,"class","clearfix"],[8],[9],[0,"\\n    "],[6,"div"],[10,"class","row"],[8],[0,"\\n        "],[1,[26,"analytics-charts",null,[["chartsEnabled","nodeTaskInstance","startDate","endDate"],[[22,["chartsEnabled"]],[22,["model","taskInstance"]],[22,["activeDateRange","start"]],[22,["activeDateRange","end"]]]]],false],[0,"\\n    "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"analytics-page/application/template.hbs"}})}),define("analytics-page/components/analytics-charts/template",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"ERAmdixd",block:'{"symbols":["chartSpec"],"statements":[[6,"div"],[10,"class","row"],[8],[0,"\\n"],[4,"each",[[22,["charts"]]],null,{"statements":[[0,"        "],[6,"div"],[10,"class","col-sm-6 col-xs-12"],[8],[0,"\\n            "],[1,[26,"analytics-charts/x-chart-wrapper",null,[["nodeTaskInstance","startDate","endDate","chartSpec","chartEnabled"],[[22,["nodeTaskInstance"]],[22,["startDate"]],[22,["endDate"]],[21,1,[]],[22,["chartsEnabled"]]]]],false],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[1]},null],[9]],"hasEval":false}',meta:{moduleName:"analytics-page/components/analytics-charts/template.hbs"}})}),define("analytics-page/components/analytics-charts/x-chart-wrapper/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={ChartWrapper:"_ChartWrapper_1hff7g",DisabledPanel:"_DisabledPanel_1hff7g",Chart:"_Chart_1hff7g",Blurred:"_Blurred_1hff7g",ChartOverlay:"_ChartOverlay_1hff7g",ChartContainer:"_ChartContainer_1hff7g"}}),define("analytics-page/components/analytics-charts/x-chart-wrapper/template",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"H2FfWSD1",block:'{"symbols":[],"statements":[[6,"div"],[11,"class",[27,["panel panel-default ",[26,"local-class",[[26,"concat",["ChartWrapper ",[26,"unless",[[22,["chartEnabled"]],"DisabledPanel"],null]],null]],[["from"],[[26,"unbound",[[22,["__styles__"]]],null]]]]]]],[8],[0,"\\n    "],[6,"div"],[10,"class","panel-heading clearfix"],[8],[0,"\\n        "],[6,"h3"],[10,"class","panel-title"],[8],[1,[26,"t",[[22,["chartSpec","titleKey"]]],null],false],[9],[0,"\\n    "],[9],[0,"\\n    "],[6,"div"],[11,"class",[27,["panel-body ",[26,"unbound",[[22,["__styles__","ChartContainer"]]],null]]]],[8],[0,"\\n        "],[6,"div"],[11,"class",[27,[[26,"local-class",[[26,"concat",["Chart ",[26,"if",[[22,["overlayShown"]],"Blurred"],null]],null]],[["from"],[[26,"unbound",[[22,["__styles__"]]],null]]]]]]],[8],[9],[0,"\\n"],[4,"if",[[22,["overlayShown"]]],null,{"statements":[[0,"            "],[6,"div"],[11,"class",[27,[[26,"unbound",[[22,["__styles__","ChartOverlay"]]],null]]]],[8],[0,"\\n"],[4,"if",[[22,["keenError"]]],null,{"statements":[[0,"                    "],[6,"p"],[8],[1,[26,"t",["analytics.keenError"],null],false],[9],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[22,["loading"]]],null,{"statements":[[0,"                    "],[1,[26,"loading-indicator",null,[["dark"],[true]]],false],[0,"\\n                "]],"parameters":[]},null]],"parameters":[]}],[0,"            "],[9],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"analytics-page/components/analytics-charts/x-chart-wrapper/template.hbs"}})}),define.alias("ember-bootstrap/components/bs-accordion","analytics-page/components/bs-accordion"),define.alias("ember-bootstrap/components/bs-accordion/item","analytics-page/components/bs-accordion/item"),define.alias("ember-bootstrap/components/bs-accordion/item/body","analytics-page/components/bs-accordion/item/body"),define.alias("ember-bootstrap/components/bs-accordion/item/title","analytics-page/components/bs-accordion/item/title"),define.alias("ember-bootstrap/components/bs-alert","analytics-page/components/bs-alert"),define.alias("osf-components/components/bs-alert/component","analytics-page/components/bs-alert/component"),define.alias("ember-bootstrap/components/bs-button-group","analytics-page/components/bs-button-group"),define.alias("ember-bootstrap/components/bs-button-group/button","analytics-page/components/bs-button-group/button"),define.alias("ember-bootstrap/components/bs-button","analytics-page/components/bs-button"),define.alias("ember-bootstrap/components/bs-carousel","analytics-page/components/bs-carousel"),define.alias("ember-bootstrap/components/bs-carousel/slide","analytics-page/components/bs-carousel/slide"),define.alias("ember-bootstrap/components/bs-collapse","analytics-page/components/bs-collapse"),define.alias("ember-bootstrap/components/bs-dropdown","analytics-page/components/bs-dropdown"),define.alias("ember-bootstrap/components/bs-dropdown/button","analytics-page/components/bs-dropdown/button"),define.alias("ember-bootstrap/components/bs-dropdown/menu","analytics-page/components/bs-dropdown/menu"),define.alias("ember-bootstrap/components/bs-dropdown/menu/divider","analytics-page/components/bs-dropdown/menu/divider"),define.alias("ember-bootstrap/components/bs-dropdown/menu/item","analytics-page/components/bs-dropdown/menu/item"),define.alias("ember-bootstrap/components/bs-dropdown/menu/link-to","analytics-page/components/bs-dropdown/menu/link-to"),define.alias("ember-bootstrap/components/bs-dropdown/toggle","analytics-page/components/bs-dropdown/toggle"),define.alias("ember-bootstrap/components/bs-form","analytics-page/components/bs-form"),define.alias("ember-bootstrap/components/bs-form/element","analytics-page/components/bs-form/element"),define.alias("ember-bootstrap/components/bs-form/element/control","analytics-page/components/bs-form/element/control"),define.alias("ember-bootstrap/components/bs-form/element/control/checkbox","analytics-page/components/bs-form/element/control/checkbox"),define.alias("ember-bootstrap/components/bs-form/element/control/input","analytics-page/components/bs-form/element/control/input"),define.alias("ember-bootstrap/components/bs-form/element/control/textarea","analytics-page/components/bs-form/element/control/textarea")
define.alias("ember-bootstrap/components/bs-form/element/errors","analytics-page/components/bs-form/element/errors"),define.alias("ember-bootstrap/components/bs-form/element/feedback-icon","analytics-page/components/bs-form/element/feedback-icon"),define.alias("ember-bootstrap/components/bs-form/element/help-text","analytics-page/components/bs-form/element/help-text"),define.alias("ember-bootstrap/components/bs-form/element/label","analytics-page/components/bs-form/element/label"),define.alias("ember-bootstrap/components/bs-form/element/layout/horizontal","analytics-page/components/bs-form/element/layout/horizontal"),define.alias("ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox","analytics-page/components/bs-form/element/layout/horizontal/checkbox"),define.alias("ember-bootstrap/components/bs-form/element/layout/inline","analytics-page/components/bs-form/element/layout/inline"),define.alias("ember-bootstrap/components/bs-form/element/layout/inline/checkbox","analytics-page/components/bs-form/element/layout/inline/checkbox"),define.alias("ember-bootstrap/components/bs-form/element/layout/vertical","analytics-page/components/bs-form/element/layout/vertical"),define.alias("ember-bootstrap/components/bs-form/element/layout/vertical/checkbox","analytics-page/components/bs-form/element/layout/vertical/checkbox"),define.alias("ember-bootstrap/components/bs-form/group","analytics-page/components/bs-form/group"),define.alias("ember-bootstrap/components/bs-modal-simple","analytics-page/components/bs-modal-simple"),define.alias("ember-bootstrap/components/bs-modal","analytics-page/components/bs-modal"),define.alias("ember-bootstrap/components/bs-modal/body","analytics-page/components/bs-modal/body"),define.alias("ember-bootstrap/components/bs-modal/dialog","analytics-page/components/bs-modal/dialog"),define.alias("ember-bootstrap/components/bs-modal/footer","analytics-page/components/bs-modal/footer"),define.alias("ember-bootstrap/components/bs-modal/header","analytics-page/components/bs-modal/header"),define.alias("ember-bootstrap/components/bs-modal/header/close","analytics-page/components/bs-modal/header/close"),define.alias("ember-bootstrap/components/bs-modal/header/title","analytics-page/components/bs-modal/header/title"),define.alias("ember-bootstrap/components/bs-nav","analytics-page/components/bs-nav"),define.alias("ember-bootstrap/components/bs-nav/item","analytics-page/components/bs-nav/item"),define.alias("ember-bootstrap/components/bs-nav/link-to","analytics-page/components/bs-nav/link-to"),define.alias("ember-bootstrap/components/bs-navbar","analytics-page/components/bs-navbar"),define.alias("ember-bootstrap/components/bs-navbar/content","analytics-page/components/bs-navbar/content"),define.alias("ember-bootstrap/components/bs-navbar/link-to","analytics-page/components/bs-navbar/link-to"),define.alias("ember-bootstrap/components/bs-navbar/nav","analytics-page/components/bs-navbar/nav"),define.alias("ember-bootstrap/components/bs-navbar/toggle","analytics-page/components/bs-navbar/toggle"),define.alias("ember-bootstrap/components/bs-popover","analytics-page/components/bs-popover"),define.alias("ember-bootstrap/components/bs-popover/element","analytics-page/components/bs-popover/element"),define.alias("ember-bootstrap/components/bs-progress","analytics-page/components/bs-progress")
define.alias("ember-bootstrap/components/bs-progress/bar","analytics-page/components/bs-progress/bar"),define.alias("ember-bootstrap/components/bs-tab","analytics-page/components/bs-tab"),define.alias("ember-bootstrap/components/bs-tab/pane","analytics-page/components/bs-tab/pane"),define.alias("ember-bootstrap/components/bs-tooltip","analytics-page/components/bs-tooltip"),define.alias("ember-bootstrap/components/bs-tooltip/element","analytics-page/components/bs-tooltip/element"),define.alias("osf-components/components/contributor-list/component","analytics-page/components/contributor-list/component"),define.alias("osf-components/components/contributor-list/contributor/component","analytics-page/components/contributor-list/contributor/component"),define.alias("osf-components/components/dashboard-item/component","analytics-page/components/dashboard-item/component"),define.alias("osf-components/components/delete-node-modal/component","analytics-page/components/delete-node-modal/component"),define.alias("osf-components/components/dropzone-widget/component","analytics-page/components/dropzone-widget/component"),define.alias("ember-popper/components/ember-popper-targeting-parent","analytics-page/components/ember-popper-targeting-parent"),define.alias("ember-popper/components/ember-popper","analytics-page/components/ember-popper"),define.alias("ember-font-awesome/components/fa-icon","analytics-page/components/fa-icon"),define.alias("ember-font-awesome/components/fa-list","analytics-page/components/fa-list"),define.alias("ember-font-awesome/components/fa-stack","analytics-page/components/fa-stack"),define.alias("osf-components/components/feedback-button/component","analytics-page/components/feedback-button/component"),define.alias("osf-components/components/file-browser-item/component","analytics-page/components/file-browser-item/component"),define.alias("osf-components/components/file-browser/component","analytics-page/components/file-browser/component"),define.alias("osf-components/components/file-editor/component","analytics-page/components/file-editor/component"),define.alias("osf-components/components/file-icon/component","analytics-page/components/file-icon/component"),define.alias("osf-components/components/file-list-item/component","analytics-page/components/file-list-item/component"),define.alias("osf-components/components/file-list/component","analytics-page/components/file-list/component"),define.alias("osf-components/components/file-renderer/component","analytics-page/components/file-renderer/component"),define.alias("osf-components/components/file-share-button/component","analytics-page/components/file-share-button/component"),define.alias("osf-components/components/file-version/component","analytics-page/components/file-version/component"),define("analytics-page/components/head-content",["exports","analytics-page/templates/head"],function(e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:"",model:Ember.inject.service("head-data"),layout:n.default})}),define.alias("ember-cli-head/components/head-layout","analytics-page/components/head-layout"),define.alias("osf-components/components/inline-list/component","analytics-page/components/inline-list/component"),define.alias("osf-components/components/institution-carousel/component","analytics-page/components/institution-carousel/component"),define.alias("osf-components/components/join-osf-banner/component","analytics-page/components/join-osf-banner/component")
define.alias("osf-components/components/loading-indicator/component","analytics-page/components/loading-indicator/component"),define.alias("osf-components/components/maintenance-banner/component","analytics-page/components/maintenance-banner/component"),define.alias("osf-components/components/new-project-modal/component","analytics-page/components/new-project-modal/component"),define.alias("osf-components/components/node-blurb/component","analytics-page/components/node-blurb/component"),define.alias("osf-components/components/node-blurb/node-icon/component","analytics-page/components/node-blurb/node-icon/component"),define.alias("osf-components/components/node-navbar/component","analytics-page/components/node-navbar/component"),define.alias("osf-components/components/node-navbar/link/component","analytics-page/components/node-navbar/link/component"),define.alias("osf-components/components/noteworthy-and-popular-project/component","analytics-page/components/noteworthy-and-popular-project/component"),define.alias("osf-components/components/osf-footer/component","analytics-page/components/osf-footer/component"),define.alias("osf-components/components/osf-logo/component","analytics-page/components/osf-logo/component"),define.alias("osf-components/components/osf-mode-footer/component","analytics-page/components/osf-mode-footer/component"),define.alias("osf-components/components/osf-navbar/auth-dropdown/component","analytics-page/components/osf-navbar/auth-dropdown/component"),define.alias("osf-components/components/osf-navbar/component","analytics-page/components/osf-navbar/component"),define.alias("osf-components/components/osf-navbar/home-links/component","analytics-page/components/osf-navbar/home-links/component"),define.alias("osf-components/components/paginated-relation/component","analytics-page/components/paginated-relation/component"),define.alias("osf-components/components/paginated-relation/x-item/component","analytics-page/components/paginated-relation/x-item/component"),define.alias("osf-components/components/paginated-relation/x-noop/component","analytics-page/components/paginated-relation/x-noop/component"),define.alias("osf-components/components/paginated-relation/x-render/component","analytics-page/components/paginated-relation/x-render/component"),define.alias("osf-components/components/project-selector/component","analytics-page/components/project-selector/component"),define.alias("osf-components/components/quickfile-nav/component","analytics-page/components/quickfile-nav/component"),define.alias("osf-components/components/search-dropdown/component","analytics-page/components/search-dropdown/component"),define.alias("osf-components/components/sign-up-form/component","analytics-page/components/sign-up-form/component"),define.alias("osf-components/components/sign-up-policy/component","analytics-page/components/sign-up-policy/component"),define.alias("osf-components/components/simple-paginator/component","analytics-page/components/simple-paginator/component"),define.alias("osf-components/components/sort-button/component","analytics-page/components/sort-button/component"),define.alias("osf-components/components/status-banner/component","analytics-page/components/status-banner/component"),define.alias("osf-components/components/success-icon/component","analytics-page/components/success-icon/component"),define.alias("osf-components/components/test-comp/component","analytics-page/components/test-comp/component"),define.alias("osf-components/components/validated-input/component","analytics-page/components/validated-input/component"),define.alias("osf-components/components/zoom-to-route/component","analytics-page/components/zoom-to-route/component")
define("analytics-page/config/environment",["exports"],function(e){"use strict"
var n
Object.defineProperty(e,"__esModule",{value:!0})
try{var a="analytics-page/config/environment",o=document.querySelector('meta[name="'+a+'"]').getAttribute("content")
n=JSON.parse(unescape(o))}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'" due to error: '+e)}e.default=n}),define("analytics-page/engine",["exports","ember-engines/engine","ember-load-initializers","analytics-page/resolver","analytics-page/config/environment"],function(e,n,a,o,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var s=t.default.modulePrefix,l=n.default.extend({modulePrefix:s,Resolver:o.default,dependencies:{services:["i18n","route-context","cookies","store","analytics","ready","features","router","page-title-list","head-data"],externalRoutes:["nodeForks","registrationForks"]}});(0,a.default)(l,s),e.default=l}),define.alias("ember-truth-helpers/helpers/and","analytics-page/helpers/and"),define.alias("ember-bootstrap/helpers/bs-contains","analytics-page/helpers/bs-contains"),define.alias("ember-bootstrap/helpers/bs-eq","analytics-page/helpers/bs-eq"),define.alias("ember-concurrency/helpers/cancel-all","analytics-page/helpers/cancel-all"),define.alias("ember-truth-helpers/helpers/equal","analytics-page/helpers/eq"),define.alias("ember-truth-helpers/helpers/gt","analytics-page/helpers/gt"),define.alias("ember-truth-helpers/helpers/gte","analytics-page/helpers/gte"),define.alias("ember-truth-helpers/helpers/is-array","analytics-page/helpers/is-array"),define.alias("ember-truth-helpers/helpers/is-equal","analytics-page/helpers/is-equal"),define.alias("ember-css-modules/helpers/local-class","analytics-page/helpers/local-class"),define.alias("ember-truth-helpers/helpers/lt","analytics-page/helpers/lt"),define.alias("ember-truth-helpers/helpers/lte","analytics-page/helpers/lte"),define.alias("ember-truth-helpers/helpers/not-equal","analytics-page/helpers/not-eq"),define.alias("ember-truth-helpers/helpers/not","analytics-page/helpers/not"),define.alias("ember-truth-helpers/helpers/or","analytics-page/helpers/or"),define("analytics-page/helpers/page-title",["exports","ember-page-title/helpers/page-title"],function(e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define.alias("ember-concurrency/helpers/perform","analytics-page/helpers/perform"),define.alias("osf-components/helpers/range","analytics-page/helpers/range"),define.alias("ember-i18n/helper","analytics-page/helpers/t"),define.alias("ember-concurrency/helpers/task","analytics-page/helpers/task"),define.alias("ember-truth-helpers/helpers/xor","analytics-page/helpers/xor"),define.alias("ember-concurrency/initializers/ember-concurrency","analytics-page/initializers/ember-concurrency"),define("analytics-page/initializers/ember-i18n",["exports","ember-i18n/initializers/ember-i18n"],function(e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define.alias("ember-i18n-inject/initializers/i18n","analytics-page/initializers/i18n"),define("analytics-page/initializers/load-bootstrap-config",["exports","analytics-page/config/environment","ember-bootstrap/config"],function(e,n,a){"use strict"
function o(){a.default.load(n.default["ember-bootstrap"]||{})}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o,e.default={name:"load-bootstrap-config",initialize:o}}),define("analytics-page/instance-initializers/ember-i18n",["exports","ember-i18n/instance-initializers/ember-i18n"],function(e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("analytics-page/instance-initializers/head-browser",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"head-browser",initialize:function(){}}}),define("analytics-page/resolver",["exports","ember-resolver"],function(e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default})
define.alias("ember-cli-head/services/head-data","analytics-page/services/head-data"),define.alias("ember-i18n/services/i18n","analytics-page/services/i18n"),define("analytics-page/services/page-title-list",["exports","ember-page-title/services/page-title-list","analytics-page/config/environment"],function(e,n,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var o={};["separator","prepend","replace"].forEach(function(e){a.default.pageTitle&&a.default.pageTitle[e]&&(o["default"+function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(e)]=a.default.pageTitle[e])}),e.default=n.default.extend(o)}),define("analytics-page/styles/headers",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={}}),define.alias("ember-popper/templates/components/ember-popper-targeting-parent","analytics-page/templates/components/ember-popper-targeting-parent"),define.alias("ember-popper/templates/components/ember-popper","analytics-page/templates/components/ember-popper"),define.alias("ember-i18n/utils/i18n/compile-template","analytics-page/utils/i18n/compile-template"),define.alias("ember-i18n/utils/i18n/missing-message","analytics-page/utils/i18n/missing-message"),define.alias("ember-cp-validations/validators/alias","analytics-page/validators/alias"),define.alias("ember-cp-validations/validators/belongs-to","analytics-page/validators/belongs-to"),define.alias("ember-cp-validations/validators/collection","analytics-page/validators/collection"),define.alias("ember-cp-validations/validators/confirmation","analytics-page/validators/confirmation"),define.alias("ember-cp-validations/validators/date","analytics-page/validators/date"),define.alias("ember-cp-validations/validators/dependent","analytics-page/validators/dependent"),define.alias("ember-cp-validations/validators/ds-error","analytics-page/validators/ds-error"),define.alias("ember-cp-validations/validators/exclusion","analytics-page/validators/exclusion"),define.alias("ember-cp-validations/validators/format","analytics-page/validators/format"),define.alias("ember-cp-validations/validators/has-many","analytics-page/validators/has-many"),define.alias("ember-cp-validations/validators/inclusion","analytics-page/validators/inclusion"),define.alias("ember-cp-validations/validators/length","analytics-page/validators/length"),define.alias("ember-cp-validations/validators/messages","analytics-page/validators/messages"),define.alias("ember-cp-validations/validators/number","analytics-page/validators/number"),define.alias("ember-cp-validations/validators/presence","analytics-page/validators/presence")

//# sourceMappingURL=/ember-osf-web/engines-dist/analytics-page/assets/engine-736d955f73bd83f52200586bcad3e1b3.map