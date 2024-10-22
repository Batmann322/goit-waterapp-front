"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[739],{398:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ve});var s=t(5043);const n={textBlue:"DailyNormaModal_textBlue__kszgp",descriptionContainer:"DailyNormaModal_descriptionContainer__D4qCO",descriptionText:"DailyNormaModal_descriptionText__h1r-I",btnSave:"DailyNormaModal_btnSave__WLCXD",modalContent:"DailyNormaModal_modalContent__KvIF8"},l="GenderRadioGroup_wrapper__-G7Jj",o="GenderRadioGroup_label__QG9Qc",r="GenderRadioGroup_input__sfFUZ";var i=t(579);const d=e=>{let{gender:a,setGender:t}=e;return(0,i.jsxs)("div",{className:l,children:[(0,i.jsxs)("label",{className:o,children:[(0,i.jsx)("input",{className:r,type:"radio",name:"gender",value:"women",checked:"woman"===a,onChange:()=>t("woman")}),"For women"]}),(0,i.jsxs)("label",{className:o,children:[(0,i.jsx)("input",{className:r,type:"radio",name:"gender",value:"man",checked:"man"===a,onChange:()=>t("man")}),"For man"]})]})},c="InputField_wrapper__UfLBm",m="InputField_input__hTWEH",h="InputField_label__0H+3O",u=e=>{let{label:a,value:t,setValue:s}=e;return(0,i.jsx)("div",{className:c,children:(0,i.jsxs)("label",{className:h,children:[a,(0,i.jsx)("input",{className:m,type:"text",value:t,onChange:e=>s(e.target.value)})]})})},x="WaterResult_textBlue__x5APB",v=e=>{let{result:a}=e;return(0,i.jsxs)("p",{children:["The required amount of water in liters per day: ",(0,i.jsxs)("span",{className:x,children:[a.toFixed(1)," L"]})]})},p={label:"InputResult_label__6T0SE",input:"InputResult_input__xn7gT"},_=e=>{let{value:a,setValue:t}=e;return(0,i.jsx)("div",{className:p.wrapper,children:(0,i.jsxs)("label",{className:p.label,children:["Write down how much water you will drink:",(0,i.jsx)("input",{className:p.input,type:"text",value:a,onChange:e=>t(e.target.value)})]})})},j=(e,a,t)=>{const s=parseFloat(a)||0,n=parseFloat(t)||0;return"woman"===e?.03*s+.4*n:.04*s+.6*n};function g(e){let{onClose:a,onSave:t}=e;const[l,o]=(0,s.useState)("woman"),[r,c]=(0,s.useState)(""),[m,h]=(0,s.useState)(""),[x,p]=(0,s.useState)(0),[g,N]=(0,s.useState)("");(0,s.useEffect)((()=>{p(j(l,r,m))}),[l,r,m]);return(0,i.jsx)("div",{className:n.modalBackdrop,onClick:a,children:(0,i.jsxs)("div",{className:n.modalContent,onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)("p",{children:["For girl: ",(0,i.jsx)("span",{className:n.textBlue,children:"V=(M*0,03) + (T*0,4)"})]}),(0,i.jsxs)("p",{children:["For man: ",(0,i.jsx)("span",{className:n.textBlue,children:"V=(M*0,04) + (T*0,6)"})]}),(0,i.jsx)("div",{className:n.descriptionContainer,children:(0,i.jsxs)("p",{className:n.descriptionText,children:[(0,i.jsx)("span",{className:n.textBlue,children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),(0,i.jsx)("h2",{children:"Calculate your rate:"}),(0,i.jsx)(d,{gender:l,setGender:o}),(0,i.jsx)(u,{label:"Your weight in kilograms:",value:r,setValue:c}),(0,i.jsx)(u,{label:"The time of active participation in hours:",value:m,setValue:h}),(0,i.jsx)(v,{result:x}),(0,i.jsx)(_,{value:g,setValue:N}),(0,i.jsx)("button",{className:n.btnSave,onClick:e=>{e.preventDefault(),""===g.trim()?t(x):t(g)},children:"Save"})]})})}const N={normaContainer:"DailyNorma_normaContainer__yAGrT",title:"DailyNorma_title__X4SZH",normWater:"DailyNorma_normWater__8+Ruh",editBtn:"DailyNorma_editBtn__S8zub"},C={modalOverlay:"Modal_modalOverlay__ZrB5u",modalContent:"Modal_modalContent__axM59",modalHeader:"Modal_modalHeader__ipZSv",modalClose:"Modal_modalClose__KyeEC"};var f=t(4924);const y=e=>{let{title:a,children:t,onClose:n}=e;(0,s.useEffect)((()=>{const e=e=>{"Escape"===e.key&&n()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[n]);return(0,i.jsx)("div",{className:C.modalOverlay,onClick:e=>{e.target===e.currentTarget&&n()},children:(0,i.jsxs)("div",{className:C.modalContent,children:[(0,i.jsxs)("div",{className:C.modalHeader,children:[(0,i.jsx)("h2",{children:a}),(0,i.jsx)("button",{className:C.modalClose,onClick:n,children:(0,i.jsx)("svg",{className:"icon-x",width:"24",height:"24",children:(0,i.jsx)("use",{href:`${f.A}#icon-x`})})})]}),(0,i.jsx)("div",{className:C.modalBody,children:t})]})})};function w(){const[e,a]=(0,s.useState)(2),[t,n]=(0,s.useState)(!1),l=()=>{n(!1)};return(0,i.jsxs)("div",{className:N.normaContainer,children:[(0,i.jsx)("h2",{className:N.title,children:"My daily norma"}),(0,i.jsxs)("div",{className:N.normWater,children:[e,"L"," ",(0,i.jsx)("button",{onClick:()=>{n(!0)},className:N.editBtn,children:"Edit"})]}),t&&(0,i.jsx)(y,{title:"My daily norma",onClose:l,children:(0,i.jsx)(g,{onClose:l,setDailyNorm:a})})]})}const M={listItem:"TodayWaterList_listItem__Nh9Nv",listContainer:"TodayWaterList_listContainer__fkpQ-",emptyState:"TodayWaterList_emptyState__XFFvX",addButtonContainer:"TodayWaterList_addButtonContainer__kq8D5",addButton:"TodayWaterList_addButton__gMK19",icon:"TodayWaterList_icon__DQseE",addText:"TodayWaterList_addText__ZTnc8",buttonContainer:"TodayWaterList_buttonContainer__QAcLm",scrollContainer:"TodayWaterList_scrollContainer__lZQxd"},S=[{id:1,volume:"200",time:"14:00"},{id:2,volume:"200",time:"14:00"},{id:3,volume:"200",time:"14:00"},{id:4,volume:"200",time:"14:00"},{id:5,volume:"200",time:"14:00"},{id:6,volume:"200",time:"14:00"},{id:7,volume:"200",time:"14:00"},{id:8,volume:"200",time:"14:00"}];var b=t(184),P=t(5051);const A={listItem:"WaterListRow_listItem__Rqg7k",icon:"WaterListRow_icon__840Ty",volume:"WaterListRow_volume__QFv6s",time:"WaterListRow_time__wsOxW",editButton:"WaterListRow_editButton__xrjVE",deleteButton:"WaterListRow_deleteButton__Wna6o",editIcon:"WaterListRow_editIcon__wspvH",deleteIcon:"WaterListRow_deleteIcon__SLLS8"};function T(e){let{rowData:a,onDelete:t}=e;return(0,i.jsxs)("div",{className:A.listItem,children:[(0,i.jsx)("svg",{className:A.icon,children:(0,i.jsx)("use",{href:`${f.A}#icon-water-icon`})}),(0,i.jsxs)("p",{className:A.volume,children:[a.volume," ml"]}),(0,i.jsx)("p",{className:A.time,children:a.time}),(0,i.jsx)("button",{className:A.editButton,"aria-label":"Edit",children:(0,i.jsx)(b.uO9,{className:A.editIcon})}),(0,i.jsx)("button",{className:A.deleteButton,"aria-label":"Delete",onClick:()=>t(a.id),children:(0,i.jsx)(P.leD,{className:A.deleteIcon})})]})}const k={deleteBtn:"DeleteEntryModal_deleteBtn__GsMIO",cancelBtn:"DeleteEntryModal_cancelBtn__pMKik",textAreYou:"DeleteEntryModal_textAreYou__ywBMI",deleteTextEntry:"DeleteEntryModal_deleteTextEntry__Aac-v",btnContainer:"DeleteEntryModal_btnContainer__VaA-b",modalOverlay:"DeleteEntryModal_modalOverlay__HdVbh",modalContent:"DeleteEntryModal_modalContent__3feVs",modalHeader:"DeleteEntryModal_modalHeader__NnDo0",modalClose:"DeleteEntryModal_modalClose__igTGY"},W=e=>{let{onCancel:a,onDelete:t}=e;(0,s.useEffect)((()=>{const e=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[a]);return(0,i.jsx)("div",{className:k.modalOverlay,onClick:e=>{e.target===e.currentTarget&&a()},children:(0,i.jsxs)("div",{className:k.modalContent,children:[(0,i.jsxs)("div",{className:k.modalHeader,children:[(0,i.jsx)("h2",{className:k.deleteTextEntry,children:"Delete Entry"}),(0,i.jsx)("button",{className:k.modalClose,onClick:a,children:(0,i.jsx)("svg",{className:"icon-x",width:"24",height:"24",children:(0,i.jsx)("use",{href:`${f.A}#icon-x`})})})]}),(0,i.jsxs)("div",{className:k.modalBody,children:[(0,i.jsx)("p",{className:k.textAreYou,children:"Are you sure you want to delete the entry?"}),(0,i.jsxs)("div",{className:k.btnContainer,children:[(0,i.jsx)("button",{className:k.cancelBtn,onClick:a,children:"Cancel"}),(0,i.jsx)("button",{className:k.deleteBtn,onClick:t,children:"Delete"})]})]})]})})};function B(){const[e,a]=(0,s.useState)(S),[t,n]=(0,s.useState)(!1),[l,o]=(0,s.useState)(null),r=e=>{o(e),n(!0)},d=()=>{n(!1),o(null)};return(0,i.jsxs)("div",{className:`${M.listContainer} ${M.todayWaterList}`,children:[(0,i.jsx)("div",{className:M.scrollContainer,children:(0,i.jsx)("ul",{className:M.waterList,children:e.map((e=>(0,i.jsx)("li",{className:M.waterItem,children:(0,i.jsx)(T,{rowData:e,onDelete:r})},e.id)))})}),0===e.length?(0,i.jsx)("div",{className:M.emptyState,children:(0,i.jsx)("div",{className:M.addButtonContainer,children:(0,i.jsxs)("button",{className:M.addButton,children:[(0,i.jsx)(b.OiG,{className:"icon"}),(0,i.jsx)("span",{className:M.addText,children:"Add water"})]})})}):(0,i.jsx)("div",{className:M.addButtonContainer,children:(0,i.jsxs)("button",{className:M.addButton,children:[(0,i.jsx)(b.OiG,{className:"icon"}),(0,i.jsx)("span",{className:M.addText,children:"Add water"})]})}),t&&(0,i.jsx)(W,{onCancel:d,onDelete:()=>{a((e=>e.filter((e=>e.id!==l)))),d()}})]})}const V={box:"WaterRatioPanel_box__T11qP",panelContainer:"WaterRatioPanel_panelContainer__vZX7H",label:"WaterRatioPanel_label__GUYqK",sliderContainer:"WaterRatioPanel_sliderContainer__CR4Xr",slider:"WaterRatioPanel_slider__+PTSK",valueContainer:"WaterRatioPanel_valueContainer__gRrgy",borderWrapper:"WaterRatioPanel_borderWrapper__A7Cc5",percent:"WaterRatioPanel_percent__O1bFg",percentToday:"WaterRatioPanel_percentToday__Kzhcz",addWaterButton:"WaterRatioPanel_addWaterButton__kqCNJ",icon:"WaterRatioPanel_icon__ZAI64"};function L(e){let{dailyNorm:a=2e3}=e;const[t,n]=(0,s.useState)(!1),[l,o]=(0,s.useState)(0),r=()=>{n(!1)},d=Math.min(Math.round(l/a*100),100);return(0,i.jsxs)("div",{className:V.box,children:[(0,i.jsxs)("div",{className:V.panelContainer,children:[(0,i.jsxs)("div",{className:V.sliderContainer,children:[(0,i.jsx)("label",{className:V.label,htmlFor:"waterRange",children:"Today"}),(0,i.jsx)("input",{type:"range",id:"waterRange",min:"0",max:"100",value:d,className:V.slider,style:{background:`linear-gradient(to right, #9ebbff ${d}%, #d7e3ff ${d}%)`},readOnly:!0})]}),(0,i.jsx)("div",{className:V.valueContainer,children:(0,i.jsxs)("div",{className:V.borderWrapper,children:[(0,i.jsxs)("span",{className:V.percent,children:[(0,i.jsx)("span",{className:"devider",children:"|"}),(0,i.jsx)("span",{className:"waterPercent",children:"0%"})]}),l>0&&(0,i.jsxs)("span",{className:`${V.percent} ${V.percentToday}`,children:[(0,i.jsx)("span",{className:"devider",children:"|"}),(0,i.jsxs)("span",{className:"waterPercent",children:[d,"%"]})]}),(0,i.jsxs)("span",{className:V.percent,children:[(0,i.jsx)("span",{className:"devider",children:"|"}),(0,i.jsx)("span",{className:"waterPercent",children:"100%"})]})]})})]}),(0,i.jsxs)("button",{className:V.addWaterButton,onClick:()=>{n(!0)},children:[(0,i.jsx)("svg",{className:V.icon,width:"24",height:"24",children:(0,i.jsx)("use",{href:`${f.A}#icon-plus-circle`})}),"Add Water"]}),t&&(0,i.jsx)(y,{title:"Add Water",onClose:r,children:(0,i.jsx)(B,{onClose:r,onAddWater:e=>{o((a=>a+Number(e))),r()}})})]})}const F={container:"HomePage_container__uNu-e",pageBackground:"HomePage_pageBackground__hiddn",title:"HomePage_title__UFLA3",box:"HomePage_box__Vq-hE",imageModal:"HomePage_imageModal__NmJ5u"},R=t.p+"static/media/botle_home_screen.99c8569fc33ae2bb841f.png",E=t.p+"static/media/botle_home_screen@2x.362d98d6199e03dc996a.png",I=t.p+"static/media/bottle_home_screen_tablet.a49098681a2b673dda5a.png",J=t.p+"static/media/bottle_home_screen_tablet@2x.6027984ea4a592ca63d8.png",D="data:image/png;base64,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",K=t.p+"static/media/bottle_home_screen_mob@2x.6b36e9cdb5541e6cad63.png";var U=t(423);const G="MonthStatsTable_calendarContainer__HR632",q="MonthStatsTable_containerDay__ZMKic",O="MonthStatsTable_navigation__fWySF",Y="MonthStatsTable_selectedDay__KoS7B",Q="MonthStatsTable_loadingContainer__QyIHi",z="MonthStatsTable_monthYear__Rscm4",H="MonthStatsTable_month__q8RdM",Z="MonthStatsTable_year__tOvLM",X="MonthStatsTable_prevButton__Mcu34",$="MonthStatsTable_nextButton__+Grzl",ee="MonthStatsTable_daysList__uEEAv",ae="MonthStatsTable_dayItem__lh8AI",te="MonthStatsTable_calendarDay__AB7l+",se="MonthStatsTable_percentageText__dojsM",ne="MonthStatsTable_dayWrapper__07vNg",le="MonthStatsTable_lowPercentage__OuM9b",oe="MonthStatsTable_fullPercentage__8Ku-+",re="MonthStatsTable_zeroPercentage__Ld7QF";var ie=t(8387),de=t(6506);const ce=e=>{let{day:a,onClose:t}=e;return(0,i.jsx)("div",{className:"modalBackdrop",onClick:t,children:(0,i.jsxs)("div",{className:"modalContent",onClick:e=>e.stopPropagation(),children:[(0,i.jsx)("h3",{children:a.id}),(0,i.jsxs)("p",{children:["Daily norma: ",(0,i.jsxs)("strong",{children:[a.dailyNorm," L"]})]}),(0,i.jsxs)("p",{children:["Fulfillment of the daily norm: ",(0,i.jsxs)("strong",{children:[a.percentage,"%"]})]}),(0,i.jsxs)("p",{children:["How many servings of water: ",(0,i.jsx)("strong",{children:a.servings})]}),(0,i.jsx)("button",{className:"modalBtn",onClick:t,children:"Close"})]})})},me=e=>{let{selectedDayData:a,onClose:t}=e;return console.log(a),(0,i.jsx)("div",{className:"calendar",children:(0,i.jsx)("div",{className:"day-details",children:a?(0,i.jsx)(ce,{day:a,onClose:t}):(0,i.jsx)("div",{children:"No data available"})})})},he=()=>{const e=new Date,[a,t]=(0,s.useState)(e.getFullYear()),[n,l]=(0,s.useState)(e.getMonth()),[o,r]=(0,s.useState)([]),[d,c]=(0,s.useState)(!0),[m,h]=(0,s.useState)(null);(0,s.useEffect)((()=>{var e,t;c(!0),(e=a,t=n,new Promise((a=>{setTimeout((()=>{const s=new Date(e,t+1,0).getDate(),n=Array.from({length:s},((a,s)=>({id:s+1,percentage:Math.floor(101*Math.random()),date:`${s+1}/${t+1}/${e}`,dailyNorm:2,servings:Math.floor(10*Math.random())})));a(n)}),1e3)}))).then((e=>{r(e),c(!1)}))}),[a,n]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:O,children:[(0,i.jsx)("h3",{className:Y,children:"Month"}),(0,i.jsxs)("div",{className:z,children:[(0,i.jsx)("button",{className:X,onClick:()=>{l((e=>{const a=0===e?11:e-1;return 0===e&&t((e=>e-1)),a}))},children:(0,i.jsx)(U.m6W,{})}),(0,i.jsx)("p",{className:H,children:new Date(a,n).toLocaleString("en-US",{month:"long"})}),(0,i.jsx)("p",{className:Z,children:a}),a<e.getFullYear()||a===e.getFullYear()&&n<e.getMonth()?(0,i.jsx)("button",{className:$,onClick:()=>{(a<e.getFullYear()||a===e.getFullYear()&&n<e.getMonth())&&l((e=>{const a=11===e?0:e+1;return 11===e&&t((e=>e+1)),a}))},children:(0,i.jsx)(U.OQo,{})}):(0,i.jsx)("div",{style:{width:"14px"}})]})]}),(0,i.jsx)("div",{className:G,children:(0,i.jsx)("div",{className:(0,ie.A)(q,{[Q]:d}),children:d?(0,i.jsx)(de.A,{}):(0,i.jsx)("ul",{className:ee,children:o.map((e=>{const a=(0,ie.A)(ae,{[le]:e.percentage>0&&e.percentage<100,[oe]:e.percentage>=100,[re]:0===e.percentage});return(0,i.jsxs)("li",{className:ne,onClick:()=>(e=>{h(e)})(e),children:[(0,i.jsx)("div",{className:a,children:(0,i.jsx)("p",{className:te,children:e.id})}),(0,i.jsxs)("p",{className:se,children:[e.percentage,"%"]})]},e.id)}))})})}),m&&(0,i.jsx)(me,{selectedDayData:m,onClose:()=>{h(null)}})]})},ue={container:"WaterListWithCalendar_container__ouRwP",todayText:"WaterListWithCalendar_todayText__moxdA",waterList:"WaterListWithCalendar_waterList__tdKao"},xe=()=>(0,i.jsxs)("div",{className:ue.container,children:[(0,i.jsx)("h2",{className:ue.todayText,children:"Today"}),(0,i.jsx)("div",{className:ue.waterList,children:(0,i.jsx)(B,{})}),(0,i.jsx)("div",{className:ue.calendar,children:(0,i.jsx)(he,{})})]});function ve(){return(0,i.jsxs)("div",{className:`${F.container} ${F.pageBackground} mainContainer`,children:[(0,i.jsxs)("div",{className:F.box,children:[(0,i.jsxs)("div",{className:F.imageModal,children:[(0,i.jsx)("h1",{className:F.title,children:"HomePage"}),(0,i.jsx)(w,{}),(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:`${R} 1x, ${E} 2x`,media:"(min-width: 1440px)"}),(0,i.jsx)("source",{srcSet:`${I} 1x, ${J} 2x`,media:"(min-width: 768px) and (max-width: 1439px)"}),(0,i.jsx)("source",{srcSet:`${D} 1x, ${K} 2x`,media:"(max-width: 767px)"}),(0,i.jsx)("img",{className:F.photo,src:R,alt:"foto"})]})]}),(0,i.jsx)(L,{})]}),(0,i.jsx)(xe,{})]})}}}]);
//# sourceMappingURL=739.0f031d20.chunk.js.map