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
/*(function() {
    'use strict';
    const main = () => {
        const e = document.getElementsByClassName("ympb_video_skip")[0];
        if(e) e.click();
    };
    setInterval(main,500);
})*/();

// Replace Guest with Player in names
//Object.defineProperty(Object.prototype, "name", {enumerable: false, get(){return this?.rname?.startsWith("Guest_")?"Player_"+this.rname.slice(6):this.rname}, set(v){this.rname=v}});
// Animated Billboards
//Object.defineProperty(Object.prototype, "shaderId", {enumerable: false, get(){if(this.src && this.src.startsWith("pubs/")) return 1; else return this.rshaderId}, set(v){this.rshaderId = v}});
// Player Chams (WIP)
//object.defineProperty(Object.prototype,"children",{enumerable:!1,get(){return!this._ec&&this?.name?.startsWith("playermap")&&(this._ec=!0)&&(this.visible=!0)&&this.traverse(e=>{e&&"Mesh"===e.type&&(e.material.depthTest=!1,e.material.transparent=!0,e.material.fog=!1,e.material.emissive={r:1})}),this._ec=!1,this._ch},set(e){this._ch=e}});
// Unlimited AMMO
//Object.defineProperty(Object.prototype,"unlimitedAmmo",{enumerable: false,get() {return true}});

// ESP Wallhacks (broken)
/*Function.prototype.toString = new Proxy(Function.prototype.toString, {
    apply(target, thisArg, argArray) {
        let ret = target.apply(thisArg, argArray);
        if (ret.length > 3500000 && ret.includes("function anonymous"))
            Object.defineProperty(Object.prototype, /if\(!\w+\['(\w+)']\)continue/.exec(ret)[1], {value: true, enumerable: false});
        return ret
    }
}*/
setTimeout(() => {

    var sendQueue = [];

    var nasaFreeze = false;
    var nasaPeek = false;

    var lastPitch;
    var lastYaw;

    window.WebSocket = class extends WebSocket {
        constructor() {
            super(...arguments);
        }
        send(message) {
            if (nasaPeek) return sendQueue.push(message);

            while (sendQueue.length) {
                var data = sendQueue.shift();
                super.send.apply(this, [data]);
            }

            return super.send.apply(this, arguments);
        }
    }

    var push = Array.prototype.push;
    Array.prototype.push = function (data, ...rest) {
        if (data instanceof Array && data.length === 13) {

            var isn = data[0];
            var delta = data[1];
            var pitch = data[2];
            var yaw = data[3];
            var move = data[4];
            var mouseDownL = data[5];
            var mouseDownR = data[6];
            var jump = data[7];
            var crouch = data[8];
            var reload = data[9];

            if (nasaFreeze) {
                if (pitch === lastPitch || yaw === lastYaw) {
                    delta = 0;
                } else {
                    delta = 0.1;
                }
            }

            if (nasaPeek && mouseDownL && !(nasaPeek = false)) {
                var nasa = document.getElementById('nasa');
                nasa.style.color = '#FF0000';
                nasa.innerText = 'OFF';
            }

            lastPitch = pitch;
            lastYaw = yaw;

            data[0] = isn;
            data[1] = delta;
            data[2] = pitch;
            data[3] = yaw;
            data[4] = move;
            data[5] = mouseDownL;
            data[6] = mouseDownR;
            data[7] = jump;
            data[8] = crouch;
            data[9] = reload;
        }

        return push.apply(this, [data, ...rest]);
    }

    var menuHTML = '';
    menuHTML += '<div style="background-color: rgba(0, 0, 0, 0.2); padding: 10px; border-radius: 10px; position: absolute; left: 10%; top: 25%; z-index: 999999; color: #FFFFFF;">';
    menuHTML += 'NasaPeek (F): <b style="color: #FF0000;" id="nasa">OFF</b>';
    menuHTML += '<br>';
    menuHTML += 'Freeze (V): <b style="color: #FF0000;" id="freeze">OFF</b>';
    menuHTML += '</div>';

    var div = document.createElement('div');
    div.innerHTML = menuHTML;
    document.body.appendChild(div);

    window.addEventListener('keydown', (event) => {

        if (document.activeElement !== document.body) return;

        var char = event.key.toUpperCase();

        switch (char) {
            case 'F':
                var nasa = document.getElementById('nasa');
                nasa.innerText = (nasaPeek = !nasaPeek) ? 'ON' : 'OFF';
                nasa.style.color = nasaPeek ? '#00FF00' : '#FF0000';
                break;

            case 'V':
                var freeze = document.getElementById('freeze');
                freeze.innerText = (nasaFreeze = !nasaFreeze) ? 'ON' : 'OFF';
                freeze.style.color = nasaFreeze ? '#00FF00' : '#FF0000';
                break;
        }
    });

}, 750);)
