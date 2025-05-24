System.register(["jimu-core","jimu-ui","jimu-arcgis","esri/rest/locator","esri/layers/GraphicsLayer","esri/request","esri/geometry/SpatialReference","esri/geometry/Point","esri/Graphic","esri/PopupTemplate","esri/geometry/support/webMercatorUtils","esri/rest/support/ProjectParameters","esri/rest/geometryService","esri/config","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleMarkerSymbol"],(function(e,t){var s={},i={},a={},o={},r={},l={},n={},d={},c={},h={},p={},u={},m={},g={},f={},x={};return{setters:[function(e){s.React=e.React,s.WidgetState=e.WidgetState,s.classNames=e.classNames,s.css=e.css,s.jsx=e.jsx},function(e){i.Button=e.Button,i.Checkbox=e.Checkbox,i.Icon=e.Icon,i.Label=e.Label,i.Modal=e.Modal,i.ModalBody=e.ModalBody,i.ModalFooter=e.ModalFooter,i.ModalHeader=e.ModalHeader,i.Select=e.Select,i.Tab=e.Tab,i.Tabs=e.Tabs,i.TextInput=e.TextInput},function(e){a.JimuMapViewComponent=e.JimuMapViewComponent},function(e){o.default=e.default},function(e){r.default=e.default},function(e){l.default=e.default},function(e){n.default=e.default},function(e){d.default=e.default},function(e){c.default=e.default},function(e){h.default=e.default},function(e){p.default=e.default},function(e){u.default=e.default},function(e){m.default=e.default},function(e){g.default=e.default},function(e){f.default=e.default},function(e){x.default=e.default}],execute:function(){e((()=>{var e={321:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><g fill="none" fill-rule="nonzero"><path fill="#000" d="m7.745 7 4.1 4.1a.527.527 0 0 1-.745.746L7 7.746l-4.1 4.1a.527.527 0 0 1-.746-.746l4.1-4.1-4.1-4.1a.527.527 0 0 1 .746-.746l4.1 4.1 4.1-4.1a.527.527 0 0 1 .746.746z"></path><path d="M1 1h12v12H1z"></path></g></svg>'},301:e=>{e.exports="data:image/gif;base64,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"},191:e=>{e.exports="data:image/gif;base64,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"},73:e=>{e.exports="data:image/gif;base64,R0lGODlhKAAoAPcAAPTy8/Du8MC+wLW1t9zc3QQ5eBJSoQBVtwBSrQBOqABOpwBLnQBJnABJmQBHlwBIlwBIlQBHlQBFkwBGkgBEkQFKmAJOoQNLmQRMmwRLmgVPngZQnwZPnwQxYQdQoAdPnQdOmwhUpwhTpAY/fAhOmglTowtToApLkgxXpw1WqQ5Zqgk5bQk4axBcrRBbrQxBehJerww+dBJbqg5Gggs2ZRRfsRNdrBVhsxBIhhBIhRZitBFLihZerRJOjhFKhxFHgQ8/cxlmuRljshZPjRteqRhVmBdSkRZOihpZoiFvxB1irB5jrh1epRhPiiNyxxxbnyJruh9jrBhMhCRuvhxVkx5YlyRptCRnsidwvyx80il0xCduvCNhpSdqsi14ySlttzOF3jKD2zGB1y12xTSF3C93xi52xCRcmTWF2y1xujOA0jmJ4TR9yy9wtypkpDuK3zN3wT+S6zJ0uz2M4jFvskOU6zZ4v0GO4kGL20ub8UyZ6z99wU6Y51Oe7lqn+lmi81WZ40uIyVyj72Os+1aW21SS1VKP0GWq9GOm7liT01uX126y+22v9l+Y1l+X1G6q62uk4nq19Xuy7oO9/Hqt5GCGsI3C+4m78Vt0jwFKlwNNmgVSowVQnwVPnQQ1aQdTowU8dQdOmQdIjAlUowc3agc3aA1Vnwk8cgo8bws/dQs9cg1Efg9KiA5BdxZisRdltxRWnBNKhBdWmRdVlxhZnR5svxtfpxtepR5iqSV1yiVywyJpsx5dnyVtuSl3ySRlqi17ziRipCNgoDOF2zWI4DJ+zjqN5S1usitpqzyP5zR6xEOR5EOR40aS4kGH0ESK0z17vUGAw0SFyFal+EiL0UmKzkuIx02KylCMy1ud41ya21aQzVuV0lyV0XKy9mOb1meh3Xq5+2mf13Kn3niv6Har44K69YK06ZLC9Hl6eoWGhtbV1KWhns3LyqmmpcnGxVRSUq+srKGensXCwsC9vaakpJ6cnJmXl21sbOPi4trZ2e3t7ZeXl42NjYCAgP///yH5BAEAAP8ALAAAAAAoACgAAAj/AP8JHEiwoMGDCBMqXMiwocOHEAuCMGFhwQMHECJCVNLlA4OLDx5odNgmkBIFCBZIkBAhwsiFxxptc3EAQQMKFCCIfIkw1rZy21IksBCBgoQGPA8CWeHmG6VvRBw8kEChwc6kAo00kfIDGTdI2q5ckDDBQQWsA39xEXaGSrA91ZxhUeFBwya0/7yUgSOnjZsqRWwJeRVEhwwRaMEYY9YMD5s0v6jgEAViFIoQF7AOi9PHj588b4p94XUECIsCeMPUEXRo0LQ6xsRgYTKkFQ2emjpx2JBrGSJviwblSUbGi5UnR2LwxPAJhQsndxBFCrfoTx1iwHoxMfID1ctMm2z0/9ryBpG5SeEO6VkjG9esHKp4VpBhJ5E0QpYsTWLUZ44YLVHI4kMqpfBEwhfYlEPJNehY4o0gy4Thyy609PACKUmFIkc3lKDjSCHp8YEGMFDc0sMqK6CFTDfjnHOJIc8AckcWU7g3wykd4AWNOOOQIwkhY+SiyxKysHKKJ3j9g4Q14oADySOAmMEDLDu80MEIHCRpSzTcKKJNNoCwwcMJI4BiSglJ/lMJNNJUQ80zeKiRxCs3wDBKku2sgwkdcCijzBi6JFHLKy2UkAFa6+TjDjuYGECEEK7ccEMNLqDQCV770GNPPwOBsIEIlpXAyVlY7aOPPPIYlEkFF2RyFU/57DwTTz3ppIkQAPO4o46tBxGgjzuc8lrQAAHEww8+whakzzv31JrsQAK0c48/zxKkKbXVDoQPPNl26y1CAQEAOw=="},129:e=>{"use strict";e.exports=c},37:e=>{"use strict";e.exports=h},586:e=>{"use strict";e.exports=g},294:e=>{"use strict";e.exports=d},443:e=>{"use strict";e.exports=n},809:e=>{"use strict";e.exports=p},231:e=>{"use strict";e.exports=r},831:e=>{"use strict";e.exports=l},442:e=>{"use strict";e.exports=m},724:e=>{"use strict";e.exports=o},218:e=>{"use strict";e.exports=u},719:e=>{"use strict";e.exports=f},511:e=>{"use strict";e.exports=x},826:e=>{"use strict";e.exports=a},891:e=>{"use strict";e.exports=s},726:e=>{"use strict";e.exports=i}},t={};function w(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,w),a.exports}w.d=(e,t)=>{for(var s in t)w.o(t,s)&&!w.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.p="";var v={};return w.p=window.jimuConfig.baseUrl,(()=>{"use strict";w.r(v),w.d(v,{__set_webpack_public_path__:()=>T,default:()=>M});var e,t=w(891);!function(e){e.address="address",e.coordinate="coordinate",e.reverse="reverse"}(e||(e={}));var s=w(726);const i={_widgetLabel:"Enhanced Locate",zoom2message:"Click to Zoom to Result",addresslabel:"Address",coordslabel:"Coordinates",addressinsplabel:"Inspector",resultslabel:"Results",locateDescLabel:"Enter an address:",coordDescLabel:"Enter the coordinates:",reverseDescLabel:"Use the inspect address tool to click on the map and locate the address",removeresultmessage:"Remove Result",noresultsfoundlabel:"No Results Found",resultsfoundlabel:"Results found:",clear:"Clear",widgetversion:"Enhanced Locate Widget Version Info",widgetverstr:"Widget Version",wabversionmsg:"Widget is designed to run in Experience Builder version",revgeocodetip:"Inspect Address by Point",coordUnitLbl:"Units:",example:"Example:",locate:"Locate",drawpointtooltip:"Inspect Locations Address",longitude:"Longitude (X)",latitude:"Latitude (Y)",coordinates:"Coordinates",llcoordinates:"Lat Lon Coordinates",location:"Location",address:"Address",exampleClickTooltip:"Click to add the example coordinates above",score:"Score",locatorissue:"GeocodeServer Issue",locatorissuemessage:"GeocodeServer needs to have a singleLineFieldName.",limittomapextent:"Limit address search to maps extent.",reversegeocodefailtitle:"Address Inspection Failed",reversegeocodefailmsg:"Failed to find an address at the location clicked. Please try again.",projectissue:"An Issue occured during projecting data",exampleClick:"Click to move example values into input fields"};var a=w(826);function o(e,s){const i=e.surfaces[1].bg;return t.css`
    overflow: auto;
    .widget-elocate {
      width: 100%;
      height: 100%;
      background-color: ${i};
    }
    .hintText {
      color: ${e.colors.palette.light[500]};
      margin-bottom: 0;
    }
    .label {
      display: inline-block;
      width: 110px;
      float: left;
    }
    .esri-icon-cursor {
      display: none;
    }
    .esri-sketch__section:first-child{
      padding: 0;
      margin: 0;
    }
    .pro-bar-container {
      background: #ccc;
      border: 2px solid ${e.colors.primary};
      height: 1.5em;
      overflow: hidden;
      width: 100%;
    }
    
    .pro-bar {
      background: ${e.colors.primary};
      height: inherit;
    }
    
    .pro-bar-width{
      /* Here is where you specify the width of ur progress-bar */
      width: 100%;
    }
    
    .pro-bar-candy {
      animation: progress .6s linear infinite;
      /* Don't touch this */
      background: linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.25) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 75%,
        transparent 75%,
        transparent);
      /* Don't touch this */
      background-repeat: repeat-x;
      /* The size of the bars must match the background-position in the @keyframes */
      background-size: 2em 2em;
      height: inherit;
      width: 100%;
    }
    
    @keyframes progress {
      to { background-position: 2em 0; }
    }

    .search-list-item {
      line-height: 30px;
      font-size: 12px;
      white-space: pre;
      position: relative;
      min-height: 40px;
    }
    
    .search-list-item .rlabel {
      padding-left: 40px;
      padding-right: 22px;
      padding-bottom: 3px;
      cursor: default;
      font-size: 1em;
      margin: 0;
      line-height: 1.5em;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .search-list-item ._title {
      padding-left: 40px;
      padding-right: 22px;
      padding-bottom: 3px;
      margin-right: 22px;
      cursor:default;
      font-weight: bolder;
      font-size: 1em;
      margin: 0;
      line-height: 1.5em;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .search-list-item .labellink{
      padding-left: 40px;
      padding-right: 10px;
      padding-bottom: 3px;
      cursor: pointer;
      outline: none;
    }
    
    .search-list-item .iconDiv {
      position: absolute;
      height: 100%;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
    }
    
    .search-list-item .linksdiv {
      text-align: center;
      width: 100%;
      padding-left: 40px;
      padding-right: 5px;
      padding-top: 2px;
      padding-bottom: 5px;
    }
    
    .search-list-item .linkIcon {
      display: inline-block;
      padding-right: 4px;
    }
    
    .search-list-item.alt {
      background-color: #ebebeb;
    }
    
    .search-list-item.selected {
      background-color: #d9dde0;
    }
    
    .search-list-item.selected.alt {
      background-color: #d9dde0;
    }
    
    .search-list-item:hover {
      background-color: #e3eefa;
      box-shadow:inset 0px 0px 0px 1px #89a4c8;
    }
    
    .search-list-item.alt:hover {
      background-color: #e3eefa;
      box-shadow:inset 0px 0px 0px 1px #89a4c8;
    }
    
    .search-list-item.selected:hover {
      background-color: #e3eefa;
      box-shadow:inset 0px 0px 0px 1px #89a4c8;
    }
    
    .search-list-item.selected.alt:hover {
      background-color: #e3eefa;
      box-shadow:inset 0px 0px 0px 1px #89a4c8;
    }
    
    .search-list-item .removediv:before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      margin-right: -0.25em;
    }
  
    .search-list-item .removediv {
      text-align: center;
      position: absolute;
      height: 100%;
      width: 22px;
      right: 0;
      padding-top: 4px;
    }

    .search-list-item .linksinnerdiv{
      width: 100%;
      border: thin solid #064B1F;
      border-radius: 4px;
      text-align: center;
      padding-top: 2px;
      background-color: #5A6B4D;
      color: white;
    }
    
    .search-list-item .linkIcon{
      display: inline-block;
      margin: 0 3px;
      cursor: pointer;
    }

    .search-list-item .removedivImg {
      display: inline-block;
      vertical-align: top;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    .jimu-tab {
      height: 100%;
    }

    .tab-content {
      height: calc(100% - 40px);
    }

    .tab-pane {
      width: 100%;
    }

    .elocate-list {
      overflow: auto;
      margin-top: 5px;
    }

    .search-list-container {
      height: 100%;
    }

    .hideTabs {
      display: none;
    }

    .showTabs {
      display: '';
      height: 100%;
    }

    .resultsMenu {
      cursor: pointer;
    }
  `}const r=w(321),l=w(73),n=w(191),d=w(301);class c extends t.React.Component{constructor(e){super(e),this.getAttributeElements=e=>{const s=[];if(""!==e.content){const i=e.id;let a,o,r,l,n,d,c,h,p;e.content.split("<br>").map(((e,u)=>{let m;a=e.split(": "),o=a[0].toLowerCase().indexOf("<font color='")>-1,o&&(r=a[0].toLowerCase().indexOf("<font color='")+13,l=a[0].toLowerCase().indexOf("'>",r),c=a[0].substr(r,l-r)),h=a[1].toLowerCase().indexOf("<font color='")>-1,o&&(n=a[1].toLowerCase().indexOf("<font color='")+13,d=a[1].toLowerCase().indexOf("'>",n),p=a[1].substr(n,d-n)),m="null"===a[1]?": ":a[1].replace(/<[\/]{0,1}(em|EM|strong|STRONG|font|FONT|u|U)[^><]*>/g,"");const g=(0,t.jsx)("p",{className:"rlabel",id:i,title:a[0].replace(/<[\/]{0,1}(em|EM|strong|STRONG|font|FONT|u|U)[^><]*>/g,"")+": "+m},(0,t.jsx)("font",{id:i,style:{fontStyle:a[0].toLowerCase().indexOf("<em>")>-1?"italic":"normal",fontWeight:a[0].toLowerCase().indexOf("<strong>")>-1?"bold":"normal",textDecoration:a[0].toLowerCase().indexOf("<u>")>-1?"underline":"initial",color:o?c:"initial"}},a[0].replace(/<[\/]{0,1}(em|EM|strong|STRONG|font|FONT|u|U)[^><]*>/g,"")+": "),(0,t.jsx)("font",{style:{fontStyle:a[1].toLowerCase().indexOf("<em>")>-1?"italic":"normal",fontWeight:a[1].toLowerCase().indexOf("<strong>")>-1?"bold":"normal",textDecoration:a[1].toLowerCase().indexOf("<u>")>-1?"underline":"initial",color:h?p:"initial"}},m));s.push(g)}))}else{const e=(0,t.jsx)("p",{className:"rlabel"}," ");s.push(e)}return s}}render(){return(0,t.jsx)("div",{className:"search-list-container"},this.props.items.map(((i,a)=>{const o=i.id;let c;switch(i.type){case e.address:c=n;break;case e.coordinate:c=l;break;case e.reverse:c=d}return(0,t.jsx)("div",{className:`search-list-item${i.selected?" selected":""}${a%2==0?" alt":""}`,id:o,onMouseOver:this.props.onRecordMouseOver,onMouseOut:this.props.onRecordMouseOut,onClick:this.props.onRecordClick},(0,t.jsx)("div",{className:"iconDiv"},(0,t.jsx)(s.Icon,{icon:c,width:"26px",height:"26px"})),(0,t.jsx)("div",{className:"removediv",id:o},(0,t.jsx)("div",{className:"removedivImg",id:o,title:this.props.removeResultMsg,onClick:this.props.onRecordRemoveClick},(0,t.jsx)(s.Icon,{icon:r}))),(0,t.jsx)("p",{id:o,className:"_title",title:i.title},i.title),this.getAttributeElements(i))})))}}var h=w(724),p=w(231),u=w(831),m=w(443),g=w(294),f=w(129),x=w(37),b=w(809),A=w(218),y=w(442),C=w(586),R=w(719),L=w(511);const j=w(73),S=w(191),I=w(301);class k extends t.React.PureComponent{constructor(s){var a,o,r,l;super(s),this.resultMessageDiv=t.React.createRef(),this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:i[e]}):e,this.popupMouseOverFunc=()=>{this.disableTimer()},this.popupMouseOutFunc=()=>{this.autoCloseNum!=Number.NEGATIVE_INFINITY&&this.timedClose()},this.activeViewChangeHandler=e=>{null!=e?(this.setState({jimuMapView:e}),e.whenJimuMapViewLoaded().then((()=>{const{map:t}=e.view;if(this.state.widgetInit){const e=t.findLayerById("eLocateGL");if(e){if(e.graphics.length>0){let t=e.graphics.getItemAt(0),s={title:t.attributes.title,content:t.attributes.content,type:t.attributes.type,point:t.geometry,graphic:t,id:t.attributes.type+"_id_1",selected:!0};this.resultListRecords.push(s)}this.resultListRecords.length>0&&(this.resultMessageDiv.current&&(this.resultMessageDiv.current.innerHTML=this.nls("resultsfoundlabel")+" "+this.resultListRecords.length),this.setState({resultListCnt:this.resultListRecords.length,showClear:!0,widgetInit:!1,selTab:"resultslabel"}))}}t.findLayerById("eLocateGL")||t.add(this.graphicsLayer),t.findLayerById("DrawGL")||t.add(this.drawLayer),this.setState({showBusy:!1})}))):this.setState({jimuMapView:null})},this.onRecordRemoveClick=e=>{e.stopPropagation();let t=e.currentTarget.id,s=this.resultListRecords.find(((e,s)=>{if(e.id===t)return e}));if(this.graphicsLayer.remove(s.graphic),this.state.jimuMapView.view.popup.close(),this.resultListRecords.splice(this.resultListRecords.findIndex((e=>e.id===t)),1),this.setState({resultListCnt:this.resultListRecords.length}),0===this.resultListRecords.length)return this.resultMessageDiv.current.innerHTML="",void this.setState({showClear:!1,selTab:this.defaultTabId});this.resultMessageDiv.current.innerHTML=this.nls("resultsfoundlabel")+this.resultListRecords.length},this.onRecordClick=e=>{const{view:t}=this.state.jimuMapView;let s=e.currentTarget.id;this.resultListRecords.map((e=>e.selected=!1));let i=this.resultListRecords.find(((e,t)=>{if(e.id===s)return e.selected=!0,e}));t.goTo(i.graphic),t.popup.open({fetchFeatures:!0,location:i.point}),this.autoCloseNum!=Number.NEGATIVE_INFINITY&&this.timedClose()},this.onRecordMouseOver=e=>{},this.onRecordMouseOut=e=>{},this.timedClose=()=>{clearTimeout(this.timer),this.timer=setTimeout((()=>{this.state.jimuMapView.view.popup.close()}),this.autoCloseNum)},this.disableTimer=()=>{clearTimeout(this.timer)},this.clearResultsHandler=(e,t)=>{e&&e.preventDefault(),this.graphicsLayer.removeAll(),this.resultListRecords=[],this.resultMessageDiv.current.innerHTML="",this.state.jimuMapView.view.popup.close(),this.setState({resultListCnt:0,locating:!1,showClear:!1,selTab:this.defaultTabId})},this.handleSearchBtnClick=()=>{const{config:e}=this.props,{view:t}=this.state.jimuMapView;this.clearResultsHandler(null,!1),this.graphicsLayer.removeAll(),this.setState({showProgress:!0,locating:!0});var s={address:{},outFields:["Loc_name","Score","Addr_type","X","Y","DisplayX","DisplayY","LongLabel","ExInfo"],outSpatialReference:this.state.jimuMapView.view.spatialReference};e.locator.countryCode&&(s.countryCode=e.locator.countryCode),s.address[this.geocode.singleLineFieldName]=this.state.addressInputValue,this.state.addSearchExtent&&(s.searchExtent=t.extent),h.default.addressToLocations(this.geocode.url,s).then(this.addresslocateResult,this.locateError)},this.addresslocateResult=e=>{const{config:t}=this.props,{view:s}=this.state.jimuMapView;if(e.length>0){let i=0;e.map(((e,t)=>{e.score>=this.minscore&&i++})),e.map(((e,a)=>{e.score>=this.minscore&&this.createLocateResults(e,a).then((e=>{if(this.resultListRecords.push(e),this.setState({showClear:!0,resultListCnt:this.resultListRecords.length}),this.createGraphicResult(e),this.resultMessageDiv.current.innerHTML=this.nls("resultsfoundlabel")+" "+this.resultListRecords.length,this.resultListRecords.length===i&&this.resultListRecords.length>0){const e=this.resultListRecords[0];!0===this.props.config.forcescale||s.scale>t.zoomscale?this.setScaleAndCenter(e):(s.center=e.point,setTimeout((()=>{s.popup.open({features:[e.graphic],location:e.graphic.geometry,updateLocationEnabled:!0}),this.autoCloseNum!=Number.NEGATIVE_INFINITY&&this.timedClose()}),500)),this.setState({showProgress:!1,locating:!1,selTab:"resultslabel"})}}))}))}else this.setState({showProgress:!1,locating:!1}),this.resultMessageDiv.current.innerHTML=this.nls("noresultsfoundlabel")},this.createGraphicResult=t=>{let s;var i=new f.default({geometry:t.point});switch(t.type){case e.address:s=new R.default({url:S,width:"24px",height:"24px"});break;case e.coordinate:s=new R.default({url:j,width:"24px",height:"24px"});break;case e.reverse:s=new R.default({url:I,width:"24px",height:"24px"})}i.symbol=s;var a={content:t.content,title:t.title,gid:parseInt(t.id.replace("id_","")),type:t.type};i.attributes=a,i.popupTemplate=new x.default({title:t.title,content:t.content}),this.graphicsLayer.add(i),t.graphic=i},this.createLocateResults=(t,s)=>{const{config:i}=this.props,{view:a}=this.state.jimuMapView;let o;return new Promise((r=>{let l=!1,n=new A.default,d={title:t.address?String(t.address):t.attributes.Street?String(t.attributes.Street):this.props.manifest.name};d.type=e.address,t.attributes.DisplayX&&t.attributes.DisplayY&&(o=new g.default({x:t.attributes.DisplayX,y:t.attributes.DisplayY,spatialReference:new m.default({wkid:4326})})),a.spatialReference.wkid!==i.coordinateWKID&&(l=!0,n.geometries=[o||t.location],n.outSpatialReference=new m.default({wkid:i.coordinateWKID}),l=!0,y.default.project(C.default.geometryServiceUrl,n).then((e=>{const s=e[0];4326===i.coordinateWKID?d.content="<em>"+this.nls("score")+"</em>: "+(t.score%1==0?t.score:t.score.toFixed(1))+"<br><em>"+this.nls("llcoordinates")+"</em>: "+s.y.toFixed(this.coordinatePrecision)+", "+s.x.toFixed(this.coordinatePrecision):d.content="<em>"+this.nls("score")+"</em>: "+(t.score%1==0?t.score:t.score.toFixed(1))+"<br><em>"+this.nls("coordinates")+"</em>: "+s.x.toFixed(this.coordinatePrecision)+", "+s.y.toFixed(this.coordinatePrecision),r(d)}))),4326===i.coordinateWKID?d.content="<em>"+this.nls("score")+"</em>: "+(t.score%1==0?t.score:t.score.toFixed(1))+"<br><em>"+(4326===i.coordinateWKID?this.nls("llcoordinates"):this.nls("coordinates"))+"</em>: "+t.location.y.toFixed(this.coordinatePrecision)+", "+t.location.x.toFixed(this.coordinatePrecision):d.content="<em>"+this.nls("score")+"</em>: "+(t.score%1==0?t.score:t.score.toFixed(1))+"<br><em>"+this.nls("coordinates")+"</em>: "+t.location.x.toFixed(this.coordinatePrecision)+", "+t.location.y.toFixed(this.coordinatePrecision),d.point=o||t.location,d.id=e.address+"_id_"+s,d.point.spatialReference||isNaN(this.serviceWKID)?d.point.spatialReference&&(b.default.canProject(d.point,a.spatialReference)?d.point=b.default.project(d.point,a.spatialReference):(l=!0,n.geometries=[d.point],n.outSpatialReference=a.spatialReference,y.default.project(C.default.geometryServiceUrl,n).then((e=>{d.point=e[0],r(d)}),this.geometryService_faultHandler))):(d.point.spatialReference=new m.default({wkid:this.serviceWKID}),b.default.canProject(d.point,a.spatialReference)?d.point=b.default.project(d.point,a.spatialReference):(n.geometries=[d.point],n.outSpatialReference=a.spatialReference,y.default.project(C.default.geometryServiceUrl,n).then((e=>{d.point=e[0]}),this.geometryService_faultHandler))),l||r(d)}))},this.onSearchError=e=>{this.clearResultsHandler(null,!0),this.setState({showProgress:!1,locating:!1,showClear:!1,messageBody:this.nls("searchError"),messageTitle:"",messageOpen:!0}),console.debug(e)},this.clearLayer=()=>{this.graphicsLayer.removeAll()},this.handlmessageOK=()=>{this.setState({messageOpen:!1})},this.dms_to_deg=e=>{var t=!1;e.toLowerCase().indexOf("w")>-1&&(t=!0),e.toLowerCase().indexOf("s")>-1&&(t=!0);var s=(e=e.replace(/[WwnNEeSs ]/g,"")).split("-"),i=(Number(s[2])/60+Number(s[1]))/60+Number(s[0]);return t&&(i=-Math.abs(i)),i},this.dm_to_deg=e=>{var t=!1;e.toLowerCase().indexOf("w")>-1&&(t=!0),e.toLowerCase().indexOf("s")>-1&&(t=!0);var s=(e=e.replace(/[WwnNEeSs ]/g,"")).split("-"),i=Number(s[1])/60+Number(s[0]);return t&&(i=-Math.abs(i)),i},this.prelocateCoords=()=>{this.clearResultsHandler(null,!1);const{config:e}=this.props,{view:t}=this.state.jimuMapView,s=this.state.xValue,i=this.state.yValue;if(s&&i){let l=parseFloat(s),n=parseFloat(i);const d=e.pointunits.findIndex((e=>e.name===this.state.selectedUnits)),c=e.pointunits[d];if(c.wkid===this.state.jimuMapView.view.spatialReference.wkid||"map"==c.wgs84option)this.locateCoordinates();else{var a,o;if(this.setState({showProgress:!0,resultListCnt:0}),"dms"==c.wgs84option){if(l=this.dms_to_deg(this.state.xValue),n=this.dms_to_deg(this.state.yValue),a=new g.default({longitude:l,latitude:n,spatialReference:new m.default({wkid:c.wkid})}),b.default.canProject(a.spatialReference,t.spatialReference))return o=b.default.project(a,t.spatialReference),void this.projectCompleteHandler2([o])}else if("dm"==c.wgs84option||"ddm"==c.wgs84option){if(l=this.dm_to_deg(s),n=this.dm_to_deg(i),a=new g.default({longitude:l,latitude:n,spatialReference:new m.default({wkid:c.wkid})}),b.default.canProject(a.spatialReference,t.spatialReference))return o=b.default.project(a,t.spatialReference),void this.projectCompleteHandler2([o])}else if(a=new g.default({longitude:l,latitude:n,spatialReference:new m.default({wkid:c.wkid})}),b.default.canProject(a.spatialReference,t.spatialReference))return o=b.default.project(a,t.spatialReference),void this.projectCompleteHandler2([o]);var r=new A.default;r.geometries=[a],r.outSpatialReference=t.spatialReference,c.tfwkid&&(r.transformation={wkid:c.tfwkid},r.transformForward="forward"===c.transformDirection),y.default.project(C.default.geometryServiceUrl,r).then(this.projectCompleteHandler2,this.geometryService_faultHandler)}}},this.locateCoordinates=()=>{const{view:t}=this.state.jimuMapView;this.resultListRecords=[],this.setState({resultListCnt:0});let s=this.state.xValue,i=this.state.yValue;if(s&&i){let a=Number(s),o=Number(i);if(!isNaN(a)&&!isNaN(o)){this.setState({resultListCnt:-1});let r={title:this.nls("coordslabel"),content:"<em>"+this.nls("location")+"</em>: "+s+", "+i,type:e.coordinate,point:new g.default({x:a,y:o,spatialReference:t.spatialReference}),id:e.coordinate+"_id_1"};this.resultListRecords.push(r),this.showLocation(r),this.resultMessageDiv.current.innerHTML=this.nls("resultsfoundlabel")+" "+this.resultListRecords.length,this.setState({resultListCnt:this.resultListRecords.length,showProgress:!1,showClear:!0,locating:!1,selTab:"resultslabel"}),this.forceUpdate()}}},this.showLocation=t=>{const{view:s}=this.state.jimuMapView,{config:i}=this.props;let a;this.state.jimuMapView.view.popup.close(),this.graphicsLayer.removeAll();var o=new f.default({geometry:t.point});switch(t.type){case e.address:a=new R.default({url:S,width:"24px",height:"24px"});break;case e.coordinate:a=new R.default({url:j,width:"24px",height:"24px"});break;case e.reverse:a=new R.default({url:I,width:"24px",height:"24px"})}o.symbol=a;var r={content:t.content,title:t.title,gid:parseInt(t.id.replace("id_","")),type:t.type};o.attributes=r,o.popupTemplate=new x.default({title:t.title,content:t.content}),this.graphicsLayer.add(o),t.graphic=o,!0===this.props.config.forcescale||s.scale>i.zoomscale?this.setScaleAndCenter(t):(s.center=t.point,setTimeout((()=>{s.popup.open({fetchFeatures:!0,location:t.point}),this.autoCloseNum!=Number.NEGATIVE_INFINITY&&this.timedClose()}),500)),this.setState({showClear:!0})},this.setScaleAndCenter=e=>{const{view:t}=this.state.jimuMapView,{config:s}=this.props;t.scale=s.zoomscale,t.center=e.point,setTimeout((()=>{t.popup.open({fetchFeatures:!0,location:e.point}),this.autoCloseNum!=Number.NEGATIVE_INFINITY&&this.timedClose()}),500)},this.geometryService_faultHandler=e=>{console.info(e),this.setState({showProgress:!1,locating:!1}),this.resultMessageDiv.current.innerHTML=this.nls("projectissue")},this.projectCompleteHandler2=t=>{const{view:s}=this.state.jimuMapView;this.resultListRecords&&(this.resultListRecords=[]),this.setState({resultListCnt:0});try{let s=this.state.xValue,i=this.state.yValue;if(s&&i){let a={title:this.nls("coordslabel"),content:"<em>"+this.nls("location")+"</em>: "+s+", "+i,type:e.coordinate,point:t[0],id:e.coordinate+"_id_1"};this.resultListRecords.push(a),this.showLocation(a),this.resultMessageDiv.current.innerHTML=this.nls("resultsfoundlabel")+" "+this.resultListRecords.length,this.setState({showProgress:!1,locating:!1,resultListCnt:this.resultListRecords.length,selTab:"resultslabel"})}}catch(e){console.info(e)}},this.addressValueChange=e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;this.setState({addressInputValue:s})},this.handleOnUnitsChange=e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value,{config:i}=this.props,a=i.pointunits.findIndex((e=>e.name===s)),o=i.pointunits[a];this.setState({xLabel:o.xlabel,selectedUnits:s,yLabel:o.ylabel,xValue:"",yValue:"",exampleValue:o.example})},this.getUnitsOptions=()=>{const e=[];return this.props.config.pointunits.map(((s,i)=>{e.push((0,t.jsx)("option",{key:i,value:s.name},s.name))})),e},this.xValueChange=e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;this.setState({xValue:s})},this.yValueChange=e=>{var t;const s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;this.setState({yValue:s})},this.setExample=()=>{const{config:e}=this.props,t=e.pointunits.findIndex((e=>e.name===this.state.selectedUnits)),s=e.pointunits[t].example.split(",");this.setState({xValue:s[0],yValue:s[1]})},this.handleRevGeocodeBtnClick=()=>{var e;if(this.state.revBtnActive)return this.setState({revBtnActive:!1}),document.querySelector(".widget-map.esri-view").style.cursor="default",void(null===(e=this.viewClickHandler)||void 0===e||e.remove());this.setState({revBtnActive:!0}),document.querySelector(".widget-map.esri-view").style.cursor="crosshair",this.viewClickHandler=this.state.jimuMapView.view.on("click",(e=>{var t;e.stopPropagation();var s=new f.default({geometry:e.mapPoint,symbol:this.pointSymbol});this.drawLayer.removeAll(),this.drawLayer.add(s),h.default.locationToAddress(this.geocode.url,{location:e.mapPoint,outSpatialReference:this.state.jimuMapView.view.spatialReference}).then(this.rlocateResult,this.locateError),this.props.config.keepinspectoractive||(null===(t=this.viewClickHandler)||void 0===t||t.remove(),document.querySelector(".widget-map.esri-view").style.cursor="default",this.setState({revBtnActive:!1}))}))},this.locateError=e=>{var t;console.error(e),this.props.config.keepinspectoractive||(this.setState({revBtnActive:!1}),null===(t=this.viewClickHandler)||void 0===t||t.remove()),this.setState({messageBody:this.nls("reversegeocodefailmsg"),messageTitle:this.nls("reversegeocodefailtitle"),messageOpen:!0})},this.rlocateResult=e=>{const{view:t}=this.state.jimuMapView;this.clearResultsHandler(null,!1);const s=this;this.createAddressInspectorResult(e).then((e=>{s.resultListRecords.push(e),this.setState({resultListCnt:this.resultListRecords.length}),s.resultMessageDiv.current.innerHTML=s.nls("resultsfoundlabel")+" "+s.resultListRecords.length,s.resultListRecords.length>0&&(s.drawLayer.removeAll(),s.showLocation(s.resultListRecords[0]),this.setState({selTab:"resultslabel"}))}))},this.createAddressInspectorResult=t=>{const{config:s}=this.props,{view:i}=this.state.jimuMapView;return new Promise((a=>{var o=t.address;let r={title:t.address?String(t.address):t.attributes.Street?String(t.attributes.Street):this.props.manifest.name};var l=!1;r.type=e.reverse;var n=new A.default;s.coordinateWKID&&i.spatialReference.wkid!==s.coordinateWKID&&(n.geometries=[t.location],n.outSpatialReference=new m.default({wkid:s.coordinateWKID}),l=!0,y.default.project(C.default.geometryServiceUrl,n).then((e=>{const t=e[0];4326===s.coordinateWKID?r.content="<em>"+this.nls("address")+"</em>: "+o+"<br><em>"+this.nls("llcoordinates")+"</em>: "+t.y.toFixed(this.coordinatePrecision)+", "+t.x.toFixed(this.coordinatePrecision):r.content="<em>"+this.nls("address")+"</em>: "+o+"<br><em>"+this.nls("coordinates")+"</em>: "+t.x.toFixed(this.coordinatePrecision)+", "+t.y.toFixed(this.coordinatePrecision),a(r)}))),4326===s.coordinateWKID?r.content="<em>"+this.nls("address")+"</em>: "+o+"<br><em>"+this.nls("llcoordinates")+"</em>: "+t.location.y.toFixed(this.coordinatePrecision)+", "+t.location.x.toFixed(this.coordinatePrecision):r.content="<em>"+this.nls("address")+"</em>: "+o+"<br><em>"+this.nls("coordinates")+"</em>: "+t.location.x.toFixed(this.coordinatePrecision)+", "+t.location.y.toFixed(this.coordinatePrecision),r.point=t.location,r.id=e.reverse+"_id_1",r.point.spatialReference||isNaN(this.serviceWKID)?r.point.spatialReference&&(b.default.canProject(r.point,i.spatialReference)?r.point=b.default.project(r.point,i.spatialReference):(l=!0,n.geometries=[r.point],n.outSpatialReference=i.spatialReference,y.default.project(C.default.geometryServiceUrl,n).then((e=>{r.point=e[0],a(r)}),this.geometryService_faultHandler))):(r.point.spatialReference=new m.default({wkid:this.serviceWKID}),b.default.canProject(r.point,i.spatialReference)?r.point=b.default.project(r.point,i.spatialReference):(n.geometries=[r.point],n.outSpatialReference=i.spatialReference,y.default.project(C.default.geometryServiceUrl,n).then((e=>{r.point=e[0]}),this.geometryService_faultHandler))),l||a(r)}))},this.initLocator=()=>{const{config:e}=this.props;var t=e.locator.url||this._locatorUrl;this.geocode.url=t,this.getLocatorInfo(this.geocode).then((()=>{this.geocode?this.geocode.version<10.1&&this.setState({showExtentCbx:!1}):(this.setState({messageBody:this.nls("locatorissuemessage"),messageTitle:this.nls("locatorissue"),messageOpen:!0}),this.setState({addressTabDisabled:!0}))}))},this.getLocatorInfo=e=>new Promise((t=>{(0,u.default)(e.url,{responseType:"json",query:{f:"json"},timeout:1e4,useProxy:!1}).then((s=>{s.data.singleLineAddressField&&s.data.singleLineAddressField.name?(this.geocode.singleLineFieldName=s.data.singleLineAddressField.name,this.geocode.version=s.data.currentVersion,this.serviceWKID=s.data.spatialReference.wkid,t(e)):(console.warn(e.url+"has no singleLineFieldName"),t(null))}),(e=>{console.error(e),t(null)}))})),this.onTabSelect=e=>{("resultslabel"!==e||"resultslabel"!==e&&this.state.resultListCnt>0)&&this.setState({selTab:e})},this.AddSearchExtentChange=e=>{const t=e.currentTarget;t&&this.setState({addSearchExtent:t.checked})};const{config:n}=this.props;this.initConfig=n,this.state={jimuMapView:void 0,messageOpen:!1,messageTitle:"",messageBody:"",showBusy:!0,showProgress:!1,showClear:!1,resultListCnt:0,addressInputValue:"",selectedUnits:n.pointunits[0].name,xLabel:n.pointunits[0].xlabel,yLabel:n.pointunits[0].ylabel,xValue:void 0,yValue:void 0,exampleValue:n.pointunits[0].example,revBtnActive:!1,showExtentCbx:!0,addSearchExtent:n.limitsearchtoviewextentbydefault,locating:!1,widgetInit:!1,selTab:n.initialView===e.address?"addresslabel":n.initialView===e.coordinate?"coordslabel":n.initialView===e.reverse?"addressinsplabel":"",addressTabDisabled:(null===(a=n.disabledtabs)||void 0===a?void 0:a.indexOf("address"))>-1||!1,cooridinateTabDisabled:(null===(o=n.disabledtabs)||void 0===o?void 0:o.indexOf("coordinate"))>-1||!1,reverseTabDisabled:(null===(r=n.disabledtabs)||void 0===r?void 0:r.indexOf("reverse"))>-1||!1,resultTabDisabled:(null===(l=n.disabledtabs)||void 0===l?void 0:l.indexOf("result"))>-1||!1},this.autoCloseNum=n.autoClosePopup||Number.NEGATIVE_INFINITY,this.coordinatePrecision=void 0!==n.coordinatePrecision?n.coordinatePrecision:2,this.defaultTabId=this.state.selTab,this.resultListRecords=[],this.geocode={url:"",singleLineFieldName:"",version:void 0},this.rGeoMarkerSymbol=new R.default({url:I,width:"20px",height:"20px"})}componentDidMount(){this.setState({widgetInit:!0}),document.querySelector(".widget-elocate.jimu-widget").addEventListener("click",(e=>{if(e.altKey){let e="";e+=this.nls("widgetverstr")+": "+this.props.manifest.version+"\n",e+=this.nls("wabversionmsg")+": "+this.props.manifest.exbVersion+"\n\n",e+=this.props.manifest.description,this.setState({messageBody:e,messageTitle:this.nls("widgetversion"),messageOpen:!0})}}));const{config:e}=this.props;this.initLocator(),this.graphicsLayer=new p.default({id:"eLocateGL",title:"eLocate Results"}),this.drawLayer=new p.default({id:"DrawGL",listMode:"hide"}),this.pointSymbol=new L.default({style:"cross",size:"14pt",color:"red",outline:{color:"red",width:2}}),this.minscore=Number(e.minscore)||40}componentDidUpdate(){var s,i,a,o,r;const{config:l}=this.props;if(this.state.jimuMapView){const{view:e}=this.state.jimuMapView;let i=this.props.state;i===t.WidgetState.Closed?(e.popup.close(),e.map.remove(this.graphicsLayer),e.map.remove(this.drawLayer),this.state.revBtnActive&&(null===(s=this.viewClickHandler)||void 0===s||s.remove(),document.querySelector(".widget-map.esri-view").style.cursor="default",this.setState({revBtnActive:!1})),e.popup.domNode.removeEventListener("mouseover",this.popupMouseOverFunc),e.popup.domNode.removeEventListener("mouseout",this.popupMouseOutFunc)):i===t.WidgetState.Opened&&(e.popup.domNode.addEventListener("mouseover",this.popupMouseOverFunc),e.popup.domNode.addEventListener("mouseout",this.popupMouseOutFunc),this.graphicsLayer&&!e.map.findLayerById(this.graphicsLayer.id)&&e.map.add(this.graphicsLayer),this.drawLayer&&!e.map.findLayerById(this.drawLayer.id)&&e.map.add(this.drawLayer))}if(l!==this.initConfig){const t=l.initialView===e.address?"addresslabel":l.initialView===e.coordinate?"coordslabel":l.initialView===e.reverse?"addressinsplabel":"";this.setState({selTab:t}),(null===(i=this.props.config.disabledtabs)||void 0===i?void 0:i.indexOf("address"))>-1?this.setState({addressTabDisabled:!0}):this.state.addressTabDisabled&&this.setState({addressTabDisabled:!1}),(null===(a=this.props.config.disabledtabs)||void 0===a?void 0:a.indexOf("coordinate"))>-1?this.setState({cooridinateTabDisabled:!0}):this.state.cooridinateTabDisabled&&this.setState({cooridinateTabDisabled:!1}),(null===(o=this.props.config.disabledtabs)||void 0===o?void 0:o.indexOf("reverse"))>-1?this.setState({reverseTabDisabled:!0}):this.state.reverseTabDisabled&&this.setState({reverseTabDisabled:!1}),(null===(r=this.props.config.disabledtabs)||void 0===r?void 0:r.indexOf("result"))>-1?this.setState({resultTabDisabled:!0}):this.state.resultTabDisabled&&this.setState({resultTabDisabled:!1})}}render(){var e;const{messageOpen:i,messageTitle:r,messageBody:l,showBusy:n,selectedUnits:d,xLabel:h,yLabel:p,selTab:u,xValue:m,yValue:g,exampleValue:f,revBtnActive:x,showClear:w,addressInputValue:v,showProgress:b,addSearchExtent:A,addressTabDisabled:y,cooridinateTabDisabled:C,reverseTabDisabled:R,resultTabDisabled:L}=this.state,{config:j,theme:S}=this.props;return(0,t.jsx)("div",{className:"widget-elocate jimu-widget",css:o(S)},(0,t.jsx)(s.Modal,{className:(0,t.classNames)("d-flex justify-content-center"),isOpen:i,centered:!0},(0,t.jsx)(s.ModalHeader,{toggle:this.handlmessageOK,close:{}},r),(0,t.jsx)(s.ModalBody,{className:"text-break",style:{whiteSpace:"pre-wrap"}},l),(0,t.jsx)(s.ModalFooter,null,(0,t.jsx)(s.Button,{type:"primary",onClick:this.handlmessageOK},this.nls("ok")))),n&&(0,t.jsx)("div",{className:"light-100",style:{width:"100%",height:"100%"}},(0,t.jsx)("div",{className:"jimu-secondary-loading"})),this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length&&(0,t.jsx)(a.JimuMapViewComponent,{useMapWidgetId:null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e[0],onActiveViewChange:this.activeViewChangeHandler}),(0,t.jsx)("div",{className:n?"hideTabs":"showTabs"},(0,t.jsx)(s.Tabs,{fill:!0,onChange:this.onTabSelect,type:"tabs",value:u},!y&&(0,t.jsx)(s.Tab,{id:"addresslabel",title:this.nls("addresslabel")},(0,t.jsx)("div",{style:{width:"100%",height:"100%",padding:"10px"}},(0,t.jsx)("a",{style:{float:"right",marginRight:"10px",display:w?"block":"none"},onClick:e=>this.clearResultsHandler(e,!0),href:"#"},this.nls("clear")),(0,t.jsx)("label",null,this.nls("locateDescLabel")),(0,t.jsx)("br",null),(0,t.jsx)(s.TextInput,{size:"sm",style:{width:"100%"},onChange:this.addressValueChange,value:v,onKeyPress:e=>{"Enter"===e.key&&this.handleSearchBtnClick()}}),(0,t.jsx)("div",{className:"d-flex",style:{margin:"0.5rem 0"}},(0,t.jsx)("div",{style:{flexGrow:1}},(0,t.jsx)(s.Checkbox,{id:"cbxAddSearchExtent",checked:A,style:{cursor:"pointer"},onChange:this.AddSearchExtentChange}),(0,t.jsx)(s.Label,{style:{cursor:"pointer"},for:"cbxAddSearchExtent",className:"m-2"},this.nls("limittomapextent"))),(0,t.jsx)("div",null,(0,t.jsx)(s.Button,{size:"lg",type:"primary",onClick:e=>{this.handleSearchBtnClick()}},this.nls("locate")))))),!C&&(0,t.jsx)(s.Tab,{id:"coordslabel",title:this.nls("coordslabel")},(0,t.jsx)("div",{style:{width:"100%",height:"100%",padding:"10px"}},(0,t.jsx)("a",{style:{float:"right",marginRight:"10px",display:w?"block":"none"},onClick:e=>this.clearResultsHandler(e,!0),href:"#"},this.nls("clear")),(0,t.jsx)("label",null,this.nls("coordDescLabel")),(0,t.jsx)("br",null),(0,t.jsx)("div",{className:"d-flex m-2"},(0,t.jsx)(s.Label,{style:{width:"90px",lineHeight:"32px"}},this.nls("coordUnitLbl")+" "),(0,t.jsx)(s.Select,{style:{display:"inline-block",width:"calc(100% -70px)"},onChange:this.handleOnUnitsChange,className:"top-drop",value:d},this.getUnitsOptions())),(0,t.jsx)("div",{className:"d-flex m-2"},(0,t.jsx)(s.Label,{style:{width:"90px",lineHeight:"32px"}},h),(0,t.jsx)(s.TextInput,{style:{display:"inline-block",width:"calc(100% -70px)"},value:m,onChange:this.xValueChange})),(0,t.jsx)("div",{className:"d-flex m-2"},(0,t.jsx)(s.Label,{style:{width:"90px",lineHeight:"32px"}},p),(0,t.jsx)(s.TextInput,{style:{display:"inline-block",width:"calc(100% -70px)"},value:g,onChange:this.yValueChange})),(0,t.jsx)("div",{className:"d-flex m-2"},(0,t.jsx)("label",{style:{width:"90px"}},this.nls("example")),(0,t.jsx)("label",{style:{display:"inline-block",width:"calc(100% -70px)",cursor:"pointer"},title:this.nls("exampleClick"),onClick:this.setExample},f)),(0,t.jsx)("div",{className:"d-flex m-2"},(0,t.jsx)("div",{style:{flexGrow:1}}),(0,t.jsx)("div",null,(0,t.jsx)(s.Button,{size:"lg",type:"primary",onClick:this.prelocateCoords},this.nls("locate")))))),!R&&(0,t.jsx)(s.Tab,{id:"addressinsplabel",title:this.nls("addressinsplabel")},(0,t.jsx)("div",{style:{width:"100%",height:"100%",padding:"10px"}},(0,t.jsx)("label",null,this.nls("reverseDescLabel")),(0,t.jsx)("div",{className:"revGeocodeDiv"},(0,t.jsx)(s.Button,{className:"esri-icon-map-pin",size:"sm",type:"default",active:x,onClick:this.handleRevGeocodeBtnClick,title:this.nls("revgeocodetip")})))),!L&&(0,t.jsx)(s.Tab,{id:"resultslabel",title:this.nls("resultslabel")},(0,t.jsx)("div",{className:"d-flex flex-column",style:{width:"100%",height:"100%",padding:"10px"}},(0,t.jsx)("div",{className:"pro-bar-container",style:{display:b?"block":"none"}},(0,t.jsx)("div",{className:"pro-bar pro-bar-width","data-pro-bar-percent":"100"},(0,t.jsx)("div",{className:"pro-bar-candy"}))),(0,t.jsx)("div",{className:"d-flex flew-row justify-content-between"},(0,t.jsx)("div",{style:{lineHeight:"33px"},ref:this.resultMessageDiv}),(0,t.jsx)("a",{style:{float:"right",marginRight:"10px",display:w?"block":"none"},onClick:e=>this.clearResultsHandler(e,!0),href:"#"},this.nls("clear"))),(0,t.jsx)("div",{className:"elocate-list"},(0,t.jsx)(c,{items:this.resultListRecords,removeResultMsg:this.nls("removeresultmessage"),onRecordClick:this.onRecordClick,onRecordRemoveClick:e=>{this.onRecordRemoveClick(e)},onRecordMouseOver:this.onRecordMouseOver,onRecordMouseOut:this.onRecordMouseOut})))))))}}k.mapExtraStateProps=e=>({widgetsRuntimeInfo:e.widgetsRuntimeInfo});const M=k;function T(e){w.p=e}})(),v})())}}}));