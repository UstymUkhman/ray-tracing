import{V as r,r as z,d as v,f as C,C as m}from"./index-8044f571.js";class R{t=0;frontFace=!1;material;point=new r;normal=new r;copy(t){this.frontFace=t.frontFace,this.normal.copy(t.normal),this.point.copy(t.point),this.t=t.t}setFaceNormal(t,e){this.frontFace=t.direction.dot(e)<0,this.normal.copy(this.frontFace?e:e.negate)}}const u=new R;class M{}class F extends M{objects=[];constructor(){super()}add(t){this.objects.push(t)}hit(t,e,i,n){let o=!1,s=i;for(let c=0,h=this.objects.length;c<h;c++)this.objects[c].hit(t,e,s,u)&&(s=u.t,n.copy(u),o=!0);return o}}class p{}class y extends p{fuzz;albedo;direction=new r;constructor(t,e){super(),this.albedo=t.clone,this.fuzz=Math.min(e,1)}scatter(t,e,i,n){const o=t.direction.unitVector.reflect(e.normal);return this.direction.randomUnitSphere.multiply(this.fuzz).add(o),i.direction=this.direction,i.origin=e.point,n.copy(this.albedo),this.direction.dot(e.normal)>0}}class f extends p{albedo;direction=new r;constructor(t){super(),this.albedo=t.clone}scatter(t,e,i,n){const o=e.normal.clone.add(this.direction.randomUnitVector);return o.nearZero&&o.copy(e.normal),i.direction=o,i.origin=e.point,n.copy(this.albedo),!0}}class b extends p{constructor(t){super(),this.refraction=t}reflectance(t,e){const i=Math.pow((1-e)/(1+e),2);return Math.pow(1-t,5)*(1-i)+i}scatter(t,e,i,n){const o=t.direction.unitVector,s=Math.min(o.clone.negate.dot(e.normal),1),c=e.frontFace?1/this.refraction:this.refraction;return Math.sqrt(1-s*s)*c>1||Math.random()<this.reflectance(s,c)?o.reflect(e.normal):o.refract(e.normal,c),i.direction=o,i.origin=e.point,n.reset(1),!0}}class V{hittables=new F;color=new r;constructor(){this.addSphere(1e3,new r(0,-1e3,0),new f(new r(.5))),this.generateSmallSpheres(),this.addSphere(1,new r(0,1,0),new b(1.5)),this.addSphere(1,new r(-4,1,0),new f(new r(.4,.2,.1))),this.addSphere(1,new r(4,1,0),new y(new r(.7,.6,.5),0))}addSphere(t,e,i){this.hittables.add(new j(t,e,i))}generateSmallSpheres(){for(let t=-11;t<11;t++)for(let e=-11;e<11;e++){const i=new r(Math.random()*.9+t,.2,Math.random()*.9+e),n=new r(4,.2,0);if(i.clone.sub(n).length>.9){const o=Math.random();if(o<.8){this.color.random().multiply(this.color.random());const s=new f(this.color);this.addSphere(.2,i,s)}else if(o<.95){this.color.random(.5);const s=z(0,.5),c=new y(this.color,s);this.addSphere(.2,i,c)}else{const s=new b(1.5);this.addSphere(.2,i,s)}}}}get objects(){return this.hittables}}class j extends M{constructor(t,e,i){super(),this.radius=t,this.center=e,this.material=i}hit(t,e,i,n){const o=t.origin.clone.sub(this.center),s=t.direction.lengthSquared,c=o.dot(t.direction),h=o.lengthSquared-this.radius*this.radius,d=c*c-s*h;if(d<0)return!1;const g=Math.sqrt(d);let l=(-c-g)/s;if((l<e||l>i)&&(l=(-c+g)/s,l<e||l>i))return!1;n.point.copy(t.at(l));const S=n.point.clone.sub(this.center).divide(this.radius);return n.setFaceNormal(t,S),n.material=this.material,n.t=l,!0}}class q{u;v;width;height;origin;vertical;lensRadius;horizontal;random=new r;lowerLeftCorner;constructor(t,e,i,n,o,s,c){const h=t.clone.sub(e).unitVector,d=Math.tan(v(n)*.5);this.u=i.cross(h).unitVector,this.v=h.clone.cross(this.u),this.origin=t,this.height=d*2,this.width=o*this.height,this.lensRadius=s*.5,this.horizontal=this.u.clone.multiply(this.width).multiply(c),this.vertical=this.v.clone.multiply(this.height).multiply(c),this.lowerLeftCorner=this.origin.clone.sub(this.horizontal.clone.divide(2)).sub(this.vertical.clone.divide(2)).sub(h.multiply(c))}setRay(t,e,i){const n=this.random.randomUnitDisk.multiply(this.lensRadius),o=this.u.clone.multiply(n.x).add(this.v.clone.multiply(n.y));t.direction=this.lowerLeftCorner.clone.add(this.horizontal.clone.multiply(e)).add(this.vertical.clone.multiply(i)).sub(this.origin).sub(o),t.origin=o.add(this.origin)}}class w{constructor(t=new r,e=new r){this.orig=t,this.dir=e}color=new r(1);far=1/0;near=.001;at(t){return this.orig.clone.add(this.dir.clone.multiply(t))}getColor(t,e,i){if(!i)return this.color.reset();if(e.hit(t,this.near,this.far,u)){const o=new r,s=new w;return u.material.scatter(t,u,s,o)?this.getColor(s,e,i-1).multiply(o):this.color.reset()}const n=(t.dir.unitVector.y+1)*.5;return this.color.reset(1).multiply(1-n).add(new r(.5,.7,1).multiply(n))}set direction(t){this.dir.copy(t)}get direction(){return this.dir}set origin(t){this.orig.copy(t)}get origin(){return this.orig}}class L{camera;world=new V;color=new r;width=m.width;height=m.height;depth=m.maxDepth;constructor(){const t=this.width/this.height;this.camera=new q(new r(13,2,3),new r(0,0,0),new r(0,1,0),20,t,.1,10)}createPPMImage(t){const e=new w;for(let i=0,n=this.height,o=this.width-1,s=n-1;n--;)for(let c=0;c<this.width;c++,i+=3){this.color.set(t[i],t[i+1],t[i+2]);const h=(c+Math.random())/o,d=(n+Math.random())/s;this.camera.setRay(e,h,d),this.color.add(e.getColor(e,this.world.objects,this.depth)),t[i]=this.color.x,t[i+1]=this.color.y,t[i+2]=this.color.z}return t}}const D=new L;function P(a){return D.createPPMImage(a)}function T(a,t,e){return C(a,t,e)}function U(){}export{U as collect,T as format,P as trace};
