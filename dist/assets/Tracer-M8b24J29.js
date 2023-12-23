import{V as e,R as u,d as m,f as w,W as g,w as y,h as f,m as p}from"./index-DjwTn7Dp.js";class d{constructor(t=new e,i=new e){this.orig=t,this.dir=i}color=new e(1);far=1/0;near=.001;at(t){return this.orig.clone.add(this.dir.clone.multiply(t))}getColor(t,i,o){if(!o)return this.color.reset();if(i.hit(t,this.near,this.far)){const s=new e,h=new d;return u.material.scatter(t,h,s)?this.getColor(h,i,o-1).multiply(s):this.color.reset()}const r=(t.dir.normalize.y+1)*.5;return this.color.reset(1).multiply(1-r).add(new e(.5,.7,1).multiply(r))}set direction(t){this.dir.copy(t)}get direction(){return this.dir}set origin(t){this.orig.copy(t)}get origin(){return this.orig}}class v{u;v;width;height;origin;vertical;lensRadius;horizontal;random=new e;lowerLeftCorner;constructor(t,i,o,r,s,h,n){const a=t.clone.sub(i).normalize,c=Math.tan(m(r)*.5);this.u=o.cross(a).normalize,this.v=a.clone.cross(this.u),this.origin=t,this.height=c*2,this.width=s*this.height,this.lensRadius=h*.5,this.horizontal=this.u.clone.multiply(this.width).multiply(n),this.vertical=this.v.clone.multiply(this.height).multiply(n),this.lowerLeftCorner=this.origin.clone.sub(this.horizontal.clone.divide(2)).sub(this.vertical.clone.divide(2)).sub(a.multiply(n))}setRay(t,i,o){const r=this.random.randomUnitDisk.multiply(this.lensRadius),s=this.u.clone.multiply(r.x).add(this.v.clone.multiply(r.y));t.direction=this.lowerLeftCorner.clone.add(this.horizontal.clone.multiply(i)).add(this.vertical.clone.multiply(o)).sub(this.origin).sub(s),t.origin=s.add(this.origin)}}class z{camera;world=new g;color=new e;width=y;height=f;depth=p;constructor(){const t=this.width/this.height;this.camera=new v(new e(13,2,3),new e(0,0,0),new e(0,1,0),20,t,.1,10)}createPPMImage(t){const i=new d;for(let o=0,r=this.height,s=this.width-1,h=r-1;r--;)for(let n=0;n<this.width;n++,o+=3){this.color.set(t[o],t[o+1],t[o+2]);const a=(n+Math.random())/s,c=(r+Math.random())/h;this.camera.setRay(i,a,c),this.color.add(i.getColor(i,this.world.objects,this.depth)),t[o]=this.color.x,t[o+1]=this.color.y,t[o+2]=this.color.z}return t}}const R=new z;function C(l){return R.createPPMImage(l)}function M(l,t,i){return w(l,t,i)}export{M as format,C as trace};
