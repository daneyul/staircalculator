(this.webpackJsonpstaircalculator=this.webpackJsonpstaircalculator||[]).push([[0],{33:function(e,t,a){e.exports=a(87)},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),i=a.n(l),s=(a(37),a(38),a(28)),o=a(29),c=a(31),f=a(30),u=a(32),d=(a(39),a(40),function(e){var t=Array.from({length:15},(function(e,t){return t+1}));return r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Total run"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{id:"totalRunFeet",defaultValue:e.totalRunft,onChange:e.changetotalRunft,className:"dropdown dropdown__feet"},Array.from(t,(function(e){return r.a.createElement("option",{value:12*e,key:12*e},e+"'")}))),r.a.createElement("select",{id:"totalRunInches",defaultValue:e.totalRunin,onChange:e.changetotalRunin,className:"dropdown dropdown__inch"},Array.from(Array(12),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{id:"totalRunFraction",defaultValue:e.totalRunfr,onChange:e.changetotalRunfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))))}),g=function(e){var t=Array.from({length:11},(function(e,t){return t}));return r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Total rise"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{id:"totalRiseft",defaultValue:e.totalRiseft,onChange:e.changetotalRiseft,className:"dropdown dropdown__feet"},Array.from(t,(function(e){return r.a.createElement("option",{value:12*e,key:12*e},e+"'")}))),r.a.createElement("select",{id:"totalRisein",defaultValue:e.totalRisein,onChange:e.changetotalRisein,className:"dropdown dropdown__inch"},Array.from(Array(12),(function(e,t){return r.a.createElement("option",{key:t},t+'"')}))),r.a.createElement("select",{id:"totalRiseft",defaultValue:e.totalRisefr,onChange:e.changetotalRisefr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{key:.0625*t},t+"/16")})))))},h=function(e){var t=Array.from({length:27},(function(e,t){return t+10}));return r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Ideal run"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{defaultValue:e.idealRunin,onChange:e.changeidealRunin,className:"dropdown dropdown__inch"},Array.from(t,(function(e){return r.a.createElement("option",{value:e,key:e},e+'"')}))),r.a.createElement("select",{defaultValue:e.idealRunfr,onChange:e.changeidealRunfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))))},m=function(e){var t=Array.from({length:4},(function(e,t){return t+4}));return r.a.createElement("div",{className:"select-wrapper"},r.a.createElement("label",{className:"subtitle d-flex"},"Ideal rise"),r.a.createElement("div",{className:"dropdown__parent d-flex justify-content-start"},r.a.createElement("select",{defaultValue:e.idealRisein,onChange:e.changeidealRisein,className:"dropdown dropdown__inch"},Array.from(t,(function(e){return r.a.createElement("option",{value:e,key:e},e+'"')}))),r.a.createElement("select",{defaultValue:e.idealRisefr,onChange:e.changeidealRisefr,className:"dropdown dropdown__fraction"},Array.from(Array(12),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))))},E=function(e){var t=Array.from({length:7},(function(e,t){return t+5})),a=e.details;return r.a.createElement("div",{className:"sidebar__section"},r.a.createElement("div",{className:"title"},"Details"),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Tread thickness"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{defaultValue:e.treadin,onChange:e.changetreadin,className:"dropdown dropdown__inch"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changetreadfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")}))))),r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Riser thickness"),r.a.createElement("select",{defaultValue:e.riserin,onChange:e.changeriserin,className:"dropdown dropdown__inch"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changeriserfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))),r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Nosing"),r.a.createElement("select",{defaultValue:"0",onChange:e.changenosingin,className:"dropdown dropdown__inch"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changenosingfr,className:"dropdown dropdown__fraction"},Array.from(Array(9),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))),r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Stringer Width"),r.a.createElement("select",{defaultValue:e.stringerin,onChange:e.changestringerin,className:"dropdown dropdown__inch"},Array.from(t,(function(e){return r.a.createElement("option",{value:e,key:e},e+'"')}))),r.a.createElement("select",{defaultValue:e.stringerfr,onChange:e.changestringerfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")}))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Tread thickness"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{defaultValue:e.treadin,onChange:e.changetreadin,className:"dropdown dropdown__inch disabled"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changetreadfr,className:"dropdown dropdown__fraction disabled"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")}))))),r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Riser thickness"),r.a.createElement("select",{defaultValue:e.riserin,onChange:e.changeriserin,className:"dropdown dropdown__inch disabled"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changeriserfr,className:"dropdown dropdown__fraction disabled"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))),r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Nosing"),r.a.createElement("select",{defaultValue:"0",onChange:e.changenosingin,className:"dropdown dropdown__inch disabled"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changenosingfr,className:"dropdown dropdown__fraction disabled"},Array.from(Array(9),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))),r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Stringer Width"),r.a.createElement("select",{defaultValue:e.stringerin,onChange:e.changestringerin,className:"dropdown dropdown__inch disabled"},Array.from(t,(function(e){return r.a.createElement("option",{value:e,key:e},e+'"')}))),r.a.createElement("select",{defaultValue:e.stringerfr,onChange:e.changestringerfr,className:"dropdown dropdown__fraction disabled"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")}))))))},p=function(e){var t=parseFloat(e.idealRunin)+parseFloat(e.idealRunfr),a=parseFloat(e.idealRisein)+parseFloat(e.idealRisefr),n=(Math.atan(a/t)*(180/Math.PI)).toFixed(1);return r.a.createElement("div",{className:"sidebar__section--last sidebar__section"},r.a.createElement("label",{className:"title d-flex"},"Stair Angle"),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("span",{className:"stairangle__number dropdown"},n+"\xb0"),r.a.createElement("input",{type:"range",defaultValue:n,min:"30",max:"45",className:"slider slider__angle"})))},R=function(e){var t=parseInt(e.totalRunft)+parseInt(e.totalRunin)+parseFloat(e.totalRunfr),a=parseFloat(t/2);return r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Height"),r.a.createElement("input",{type:"range",defaultValue:"0",min:"0",max:a,onChange:e.changeheadroomlength,className:"slider slider__height"}))},v=function(e){return r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Floor Thickness"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{defaultValue:e.floorft,onChange:e.changefloorft,className:"dropdown dropdown__feet"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:12*t,key:12*t},t+"'")}))),r.a.createElement("select",{defaultValue:e.floorin,onChange:e.changefloorin,className:"dropdown dropdown__inch"},Array.from(Array(12),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:e.floorfr,onChange:e.changefloorfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))))},y=a(16),_=a(7),N=function(e){var t=parseInt(e.totalRunft)+parseInt(e.totalRunin)+parseFloat(e.totalRunfr),a=parseInt(e.totalRiseft)+parseInt(e.totalRisein)+parseFloat(e.totalRisefr),n=parseFloat(e.idealRunin)+parseFloat(e.idealRunfr),l=parseFloat(e.idealRisein)+parseFloat(e.idealRisefr),i=0;!0===e.boolean?i=parseInt(t/n):!1===e.boolean&&(i=parseInt(a/l));var s=parseFloat(e.headroomLength),o=.82*window.innerWidth-15,c=(parseFloat(e.stringerin)+parseFloat(e.stringerfr))/Math.sin(Math.atan(n/l)),f=(parseFloat(e.stringerin)+parseFloat(e.stringerfr))/Math.sin(Math.atan(l/n)),u=[],d=parseFloat(e.floorft)+parseFloat(e.floorin)+parseFloat(e.floorfr);if(!0===e.boolean){for(var g=0;g<i;g++)u.push(t-n*g,l*g,t-n*(g+1),l*g,t-n*(g+1),l*(g+1));u.push(u[u.length-2]+f,u[u.length-1],u[0],c,u[0],d,u[0]+36,d,u[0]+36,0)}else if(!1===e.boolean){for(var h=0;h<i;h++)u.push(a-n*h,l*h,a-n*(h+1),l*h,a-n*(h+1),l*(h+1));u.push(u[u.length-2]+f,u[u.length-1],u[0],c,u[0],d,u[0]+36,d,u[0]+36,0)}for(var m=[u[u.length-12]-3*n,d,u[u.length-12]-3*n,0,u[u.length-12]-n+s,0,u[u.length-12]-n+s,d],E=m[0]+36+u[0],p=.75*(o/(Math.abs(m[0])+36+u[0])),R=0;R<u.length;R++)u[R]=u[R]*p;for(var v=0;v<m.length;v++)m[v]=m[v]*p;for(var N=[o/2-E*p/2,200],b=p*(parseFloat(e.treadin)+parseFloat(e.treadfr)),w=p*(parseFloat(e.riserin)+parseFloat(e.riserfr)),k=p*(parseFloat(e.nosingin)+parseFloat(e.nosingfr)),A=n*p+k+w,C=l*p-b,O=[],x=2;x<u.length;x+=6)O.push(N[0]+u[x]-k);for(var F=[],S=[],V=3;V<u.length;V+=6)F.push(N[1]+u[V]),S.push(N[1]+u[V]+b);for(var D=[],M=0;M<O.length;M++)D.push(O[M]+k);for(var j=[],I=1;I<O.length;I++)j.push(O[I]);for(var L=[],W=1;W<F.length;W++)L.push(F[W]);var U=[O[0],F[0]],J=[u[u.length-2]+40,0,u[u.length-2]+40,u[u.length-9]],T=[J[0]-5,J[1]+5,J[0],J[1],J[0]+5,J[1]+5],q=[J[2]-5,J[3]-5,J[2],J[3],J[2]+5,J[3]-5];return console.log(u),r.a.createElement(_.Stage,{width:o,height:window.innerHeight},r.a.createElement(_.Layer,null,r.a.createElement(_.Line,{x:N[0],y:N[1],points:u,stroke:"black",strokeWidth:1.5,lineCap:"sqare",lineJoin:"sqare",closed:"true"}),r.a.createElement(_.Line,{x:N[0],y:N[1],points:m,stroke:"black",strokeWidth:1.5,lineCap:"sqare",lineJoin:"sqare",closed:"true"}),e.details&&r.a.createElement(_.Rect,{x:U[0],y:U[1],width:A+36*p-w,height:b,fill:"white",stroke:"black",strokeWidth:1.5}),e.details&&Object(y.a)(Array(i-1)).map((function(e,t){return r.a.createElement(_.Rect,{key:t,x:j[t],y:L[t],width:A,height:b,fill:"white",stroke:"black",strokeWidth:1.5})})),e.details&&Object(y.a)(Array(i)).map((function(e,t){return r.a.createElement(_.Rect,{key:t,x:D[t],y:S[t],width:w,height:C,fill:"white",stroke:"black",strokeWidth:1.5})}))),r.a.createElement(_.Layer,null,e.dimensions&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.Line,{x:N[0],y:N[1],points:J,stroke:"#5541EA",strokeWidth:1.5,lineCap:"round",lineJoin:"round"}),r.a.createElement(_.Line,{x:N[0],y:N[1],points:T,stroke:"#5541EA",strokeWidth:1.5,lineCap:"round",lineJoin:"round"}),r.a.createElement(_.Line,{x:N[0],y:N[1],points:q,stroke:"#5541EA",strokeWidth:1.5,lineCap:"round",lineJoin:"round"}))))},b=function(e){var t=e.units;return r.a.createElement("div",null,r.a.createElement("div",{className:"subtitle"},"Units"),t?r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--active",onClick:e.changeUnitsIn},"IN"),r.a.createElement("button",{className:"toggle toggle__right toggle--inactive",onClick:e.changeUnitsMM},"MM")):r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--inactive",onClick:e.changeUnitsIn},"IN"),r.a.createElement("button",{className:"toggle toggle__right toggle--active",onClick:e.changeUnitsMM},"MM")))},w=function(e){var t=e.dimensions;return r.a.createElement("div",null,r.a.createElement("div",{className:"subtitle"},"Dimensions"),t?r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--active",onClick:e.changeDimensionsOn},"ON"),r.a.createElement("button",{className:"toggle toggle__right toggle--inactive",onClick:e.changeDimensionsOff},"OFF")):r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--inactive",onClick:e.changeDimensionsOn},"ON"),r.a.createElement("button",{className:"toggle toggle__right toggle--active",onClick:e.changeDimensionsOff},"OFF")))},k=function(e){var t=e.details;return r.a.createElement("div",null,r.a.createElement("div",{className:"subtitle"},"Details"),t?r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--active",onClick:e.changeDetailsOn},"ON"),r.a.createElement("button",{className:"toggle toggle__right toggle--inactive",onClick:e.changeDetailsOff},"OFF")):r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--inactive",onClick:e.changeDetailsOn},"ON"),r.a.createElement("button",{className:"toggle toggle__right toggle--active",onClick:e.changeDetailsOff},"OFF")))},A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={totalRunft:144,totalRunin:0,totalRunfr:0,totalRiseft:108,totalRisein:0,totalRisefr:0,idealRisein:7,idealRisefr:0,idealRunin:11,idealRunfr:0,stringerin:5,stringerfr:.9375,floorft:0,floorin:7,floorfr:0,headroomMax:0,headroomLength:0,treadin:1,treadfr:0,riserin:1,riserfr:0,nosingin:0,nosingfr:0,runOn:!0,dimensions:!0,units:!0,details:!0},a.changetotalRunft=function(e){a.setState({totalRunft:e.target.value,runOn:!0})},a.changetotalRunin=function(e){a.setState({totalRunin:e.target.value,runOn:!0})},a.changetotalRunfr=function(e){a.setState({totalRunfr:e.target.value,runOn:!0})},a.changetotalRiseft=function(e){a.setState({totalRiseft:e.target.value,runOn:!1})},a.changetotalRisein=function(e){a.setState({totalRisein:e.target.value,runOn:!1})},a.changetotalRisefr=function(e){a.setState({totalRisefr:e.target.value,runOn:!1})},a.changeidealRunin=function(e){a.setState({idealRunin:e.target.value})},a.changeidealRunfr=function(e){a.setState({idealRunfr:e.target.value})},a.changeidealRisein=function(e){a.setState({idealRisein:e.target.value})},a.changeidealRisefr=function(e){a.setState({idealRisefr:e.target.value})},a.changestringerin=function(e){a.setState({stringerin:e.target.value})},a.changestringerfr=function(e){a.setState({stringerfr:e.target.value})},a.changefloorft=function(e){a.setState({floorft:e.target.value})},a.changefloorin=function(e){a.setState({floorin:e.target.value})},a.changefloorfr=function(e){a.setState({floorfr:e.target.value})},a.changeheadroomlength=function(e){a.setState({headroomLength:e.target.value})},a.changetreadin=function(e){a.setState({treadin:e.target.value})},a.changetreadfr=function(e){a.setState({treadfr:e.target.value})},a.changeriserin=function(e){a.setState({riserin:e.target.value})},a.changeriserfr=function(e){a.setState({riserfr:e.target.value})},a.changenosingin=function(e){a.setState({nosingin:e.target.value})},a.changenosingfr=function(e){a.setState({nosingfr:e.target.value})},a.changeUnitsIn=function(){a.setState({units:!0})},a.changeUnitsMM=function(){a.setState({units:!1})},a.changeDimensionsOn=function(){a.setState({dimensions:!0})},a.changeDimensionsOff=function(){a.setState({dimensions:!1})},a.changeDetailsOn=function(){a.setState({details:!0})},a.changeDetailsOff=function(){a.setState({details:!1})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"sidebar",className:"col-2 "},r.a.createElement("div",{className:"sidebar__section"},r.a.createElement(b,{units:this.state.units,changeUnitsIn:this.changeUnitsIn,changeUnitsMM:this.changeUnitsMM}),r.a.createElement(w,{dimensions:this.state.dimensions,changeDimensionsOn:this.changeDimensionsOn,changeDimensionsOff:this.changeDimensionsOff}),r.a.createElement(k,{details:this.state.details,changeDetailsOn:this.changeDetailsOn,changeDetailsOff:this.changeDetailsOff})),r.a.createElement("div",{className:"sidebar__section--border"}),r.a.createElement("div",{className:"sidebar__section"},r.a.createElement("div",{className:"title"},"Rise-run"),r.a.createElement(d,{totalRunft:this.state.totalRunft,totalRunin:this.state.totalRunin,totalRunfr:this.state.totalRunfr,changetotalRunft:this.changetotalRunft,changetotalRunin:this.changetotalRunin,changetotalRunfr:this.changetotalRunfr}),r.a.createElement(g,{totalRiseft:this.state.totalRiseft,totalRisein:this.state.totalRisein,totalRisefr:this.state.totalRisefr,changetotalRiseft:this.changetotalRiseft,changetotalRisein:this.changetotalRisein,changetotalRisefr:this.changetotalRisefr}),r.a.createElement(h,{idealRunin:this.state.idealRunin,idealRunfr:this.state.idealRunfr,changeidealRunin:this.changeidealRunin,changeidealRunfr:this.changeidealRunfr}),r.a.createElement(m,{idealRisein:this.state.idealRisein,idealRisefr:this.state.idealRisefr,changeidealRisein:this.changeidealRisein,changeidealRisefr:this.changeidealRisefr})),r.a.createElement("div",{className:"sidebar__section--border"}),r.a.createElement(E,{stringerin:this.state.stringerin,stringerfr:this.state.stringerfr,treadin:this.state.treadin,treadfr:this.state.treadfr,riserin:this.state.riserin,riserfr:this.state.riserfr,nosingin:this.state.nosingin,nosingfr:this.state.nosingfr,changestringerin:this.changestringerin,changestringerfr:this.changestringerfr,changetreadin:this.changetreadin,changetreadfr:this.changetreadfr,changeriserin:this.changeriserin,changeriserfr:this.changeriserfr,changenosingin:this.changenosingin,changenosingfr:this.changenosingfr,details:this.state.details}),r.a.createElement("div",{className:"sidebar__section--border"}),r.a.createElement("div",{className:"sidebar__section"},r.a.createElement("div",{className:"title"},"Headroom"),r.a.createElement(R,{totalRunft:this.state.totalRunft,totalRunin:this.state.totalRunin,totalRunfr:this.state.totalRunfr,headroomLength:this.state.headroomLength,changeheadroomlength:this.changeheadroomlength}),r.a.createElement(v,{floorft:this.state.floorft,floorin:this.state.floorin,floorfr:this.state.floorfr,changefloorft:this.changefloorft,changefloorin:this.changefloorin,changefloorfr:this.changefloorfr})),r.a.createElement("div",{className:"sidebar__section--border"}),r.a.createElement(p,{idealRunin:this.state.idealRunin,idealRunfr:this.state.idealRunfr,idealRisein:this.state.idealRisein,idealRisefr:this.state.idealRisefr})),r.a.createElement("div",{id:"container",className:"col-10"},r.a.createElement(N,{totalRunft:this.state.totalRunft,totalRunin:this.state.totalRunin,totalRunfr:this.state.totalRunfr,totalRiseft:this.state.totalRiseft,totalRisein:this.state.totalRisein,totalRisefr:this.state.totalRisefr,idealRunin:this.state.idealRunin,idealRunfr:this.state.idealRunfr,idealRisein:this.state.idealRisein,idealRisefr:this.state.idealRisefr,boolean:this.state.runOn,runCount:this.state.runCount,riseCount:this.state.riseCount,stringerin:this.state.stringerin,stringerfr:this.state.stringerfr,floorft:this.state.floorft,floorin:this.state.floorin,floorfr:this.state.floorfr,headroomLength:this.state.headroomLength,headroomDelta:this.state.headroomDelta,treadin:this.state.treadin,treadfr:this.state.treadfr,riserin:this.state.riserin,riserfr:this.state.riserfr,nosingin:this.state.nosingin,nosingfr:this.state.nosingfr,details:this.state.details,dimensions:this.state.dimensions}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9ce602c5.chunk.js.map