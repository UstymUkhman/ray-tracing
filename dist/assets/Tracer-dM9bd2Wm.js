import{V as i,R as w,f as u,W as m,C as g,w as f,h as y,m as p}from"./index-yIxoCysK.js";class c{constructor(t=new i,r=new i){this.orig=t,this.dir=r}color=new i(1);far=1/0;near=.001;at(t){return this.orig.clone.add(this.dir.clone.multiply(t))}getColor(t,r,o){if(!o)return this.color.reset();if(r.hit(t,this.near,this.far)){const s=new i,a=new c;return w.material.scatter(t,a,s)?this.getColor(a,r,o-1).multiply(s):this.color.reset()}const e=(t.dir.normalize.y+1)*.5;return this.color.reset(1).multiply(1-e).add(new i(.5,.7,1).multiply(e))}set direction(t){this.dir.copy(t)}get direction(){return this.dir}set origin(t){this.orig.copy(t)}get origin(){return this.orig}}class C{world=new m;color=new i;camera=new g;width=f;height=y;depth=p;createPPMImage(t){const r=new c;for(let o=0,e=this.height,s=this.width-1,a=e-1;e--;)for(let h=0;h<this.width;h++,o+=3){this.color.set(t[o],t[o+1],t[o+2]);const l=(h+Math.random())/s,d=(e+Math.random())/a;this.camera.setRay(r,l,d),this.color.add(r.getColor(r,this.world.objects,this.depth)),t[o]=this.color.x,t[o+1]=this.color.y,t[o+2]=this.color.z}return t}}const I=new C;function P(n){return I.createPPMImage(n)}function R(n,t,r){return u(n,t,r)}export{R as format,P as trace};