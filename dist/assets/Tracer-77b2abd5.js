import{V as e,d as m,R as w,f as g,W as y,C as d}from"./worker-7a0e2a66.js";class f{u;v;width;height;origin;vertical;lensRadius;horizontal;random=new e;lowerLeftCorner;constructor(t,i,o,r,s,h,n){const a=t.clone.sub(i).normalize,c=Math.tan(m(r)*.5);this.u=o.cross(a).normalize,this.v=a.clone.cross(this.u),this.origin=t,this.height=c*2,this.width=s*this.height,this.lensRadius=h*.5,this.horizontal=this.u.clone.multiply(this.width).multiply(n),this.vertical=this.v.clone.multiply(this.height).multiply(n),this.lowerLeftCorner=this.origin.clone.sub(this.horizontal.clone.divide(2)).sub(this.vertical.clone.divide(2)).sub(a.multiply(n))}setRay(t,i,o){const r=this.random.randomUnitDisk.multiply(this.lensRadius),s=this.u.clone.multiply(r.x).add(this.v.clone.multiply(r.y));t.direction=this.lowerLeftCorner.clone.add(this.horizontal.clone.multiply(i)).add(this.vertical.clone.multiply(o)).sub(this.origin).sub(s),t.origin=s.add(this.origin)}}class u{constructor(t=new e,i=new e){this.orig=t,this.dir=i}color=new e(1);far=1/0;near=.001;at(t){return this.orig.clone.add(this.dir.clone.multiply(t))}getColor(t,i,o){if(!o)return this.color.reset();if(i.hit(t,this.near,this.far)){const s=new e,h=new u;return w.material.scatter(t,h,s)?this.getColor(h,i,o-1).multiply(s):this.color.reset()}const r=(t.dir.normalize.y+1)*.5;return this.color.reset(1).multiply(1-r).add(new e(.5,.7,1).multiply(r))}set direction(t){this.dir.copy(t)}get direction(){return this.dir}set origin(t){this.orig.copy(t)}get origin(){return this.orig}}class p{camera;world=new y;color=new e;width=d.width;height=d.height;depth=d.maxDepth;constructor(){const t=this.width/this.height;this.camera=new f(new e(13,2,3),new e(0,0,0),new e(0,1,0),20,t,.1,10)}createPPMImage(t){const i=new u;for(let o=0,r=this.height,s=this.width-1,h=r-1;r--;)for(let n=0;n<this.width;n++,o+=3){this.color.set(t[o],t[o+1],t[o+2]);const a=(n+Math.random())/s,c=(r+Math.random())/h;this.camera.setRay(i,a,c),this.color.add(i.getColor(i,this.world.objects,this.depth)),t[o]=this.color.x,t[o+1]=this.color.y,t[o+2]=this.color.z}return t}}const v=new p;function z(l){return v.createPPMImage(l)}function R(l,t,i){return g(l,t,i)}export{R as format,z as trace};
