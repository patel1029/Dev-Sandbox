import{_ as e,j as a,e as i,y as d,J as l,n as r}from"./main-22e4648c.js";import"./c.1ab96ebe.js";import"./c.35d79203.js";import"./c.fa63af8a.js";import"./c.8e28b461.js";import"./c.8e1ed6df.js";let o=e([r("ha-selector-navigation")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[i()],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"selector",value:void 0},{kind:"field",decorators:[i()],key:"value",value:void 0},{kind:"field",decorators:[i()],key:"label",value:void 0},{kind:"field",decorators:[i()],key:"helper",value:void 0},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return d`
      <ha-navigation-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value}
        .required=${this.required}
        .disabled=${this.disabled}
        .helper=${this.helper}
        @value-changed=${this._valueChanged}
      ></ha-navigation-picker>
    `}},{kind:"method",key:"_valueChanged",value:function(e){l(this,"value-changed",{value:e.detail.value})}}]}}),a);export{o as HaNavigationSelector};
