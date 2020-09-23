// ==UserScript==
// @name         leetgrail
// @namespace    https://greasyfork.org/en/users/391960
// @version      1.0
// @description  dev build 9/23/20
// @author       Ampuja Kid
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==


// AD Blocker
(function() {
    'use strict';
    const main = () => {
        const e = document.getElementsByClassName("ympb_video_skip")[0];
        if(e) e.click();
    };
    setInterval(main,500);
})();

// Replace Guest with Player in names
Object.defineProperty(Object.prototype, "name", {enumerable: false, get(){return this?.rname?.startsWith("Guest_")?"Player_"+this.rname.slice(6):this.rname}, set(v){this.rname=v}});
// Animated Billboards
Object.defineProperty(Object.prototype, "shaderId", {enumerable: false, get(){if(this.src && this.src.startsWith("pubs/")) return 1; else return this.rshaderId}, set(v){this.rshaderId = v}});
// Player Chams (WIP)
//object.defineProperty(Object.prototype,"children",{enumerable:!1,get(){return!this._ec&&this?.name?.startsWith("playermap")&&(this._ec=!0)&&(this.visible=!0)&&this.traverse(e=>{e&&"Mesh"===e.type&&(e.material.depthTest=!1,e.material.transparent=!0,e.material.fog=!1,e.material.emissive={r:1})}),this._ec=!1,this._ch},set(e){this._ch=e}});
// Unlimited AMMO
//Object.defineProperty(Object.prototype,"unlimitedAmmo",{enumerable: false,get() {return true}});

// ESP Wallhacks (broken)
Function.prototype.toString = new Proxy(Function.prototype.toString, {
    apply(target, thisArg, argArray) {
        let ret = target.apply(thisArg, argArray);
        if (ret.length > 3500000 && ret.includes("function anonymous"))
            Object.defineProperty(Object.prototype, /if\(!\w+\['(\w+)']\)continue/.exec(ret)[1], {value: true, enumerable: false});
        return ret
    }
})
