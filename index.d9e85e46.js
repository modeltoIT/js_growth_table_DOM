function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var i=Object.prototype.toString.call(t).slice(8,-1);if("Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=document.querySelector(".append-column"),i=document.querySelector(".remove-column"),n=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),d=document.querySelector(".field"),o=document.querySelector("tr"),a=d.firstElementChild.children.length,c=d.firstElementChild.children[0].children.length;n.addEventListener("click",function(){if(a<10){var e=o.cloneNode("deep");d.firstElementChild.append(e)}(a=d.firstElementChild.children.length)>2&&l.hasAttribute("disabled")&&l.removeAttribute("disabled"),10!==a||n.hasAttribute("disabled")||n.setAttribute("disabled","disabled")}),l.addEventListener("click",function(){d.firstElementChild.lastElementChild.remove(),(a=d.firstElementChild.children.length)<10&&n.hasAttribute("disabled")&&n.removeAttribute("disabled"),2!==a||l.hasAttribute("disabled")||l.setAttribute("disabled","disabled")}),r.addEventListener("click",function(){c<10&&t(d.firstElementChild.children).forEach(function(e){var t=document.createElement("td");e.appendChild(t),c=d.firstElementChild.children[0].children.length}),c>2&&i.hasAttribute("disabled")&&i.removeAttribute("disabled"),10!==c||r.hasAttribute("disabled")||r.setAttribute("disabled","disabled")}),i.addEventListener("click",function(){t(d.firstElementChild.children).forEach(function(e){e.lastElementChild.remove()}),(c=d.firstElementChild.children[0].children.length)<10&&r.hasAttribute("disabled")&&r.removeAttribute("disabled"),2!==c||i.hasAttribute("disabled")||i.setAttribute("disabled","disabled")});
//# sourceMappingURL=index.d9e85e46.js.map
