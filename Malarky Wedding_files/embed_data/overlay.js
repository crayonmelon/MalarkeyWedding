google.maps.__gjsload__('overlay', function(_){var pw=_.oa("g"),qw=_.n(),rw=function(a){a.Vf=a.Vf||new qw;return a.Vf},sw=function(a){this.Z=new _.ch(function(){var b=a.Vf;if(a.getPanes()){if(a.getProjection()){if(!b.g&&a.onAdd)a.onAdd();b.g=!0;a.draw()}}else{if(b.g)if(a.onRemove)a.onRemove();else a.remove();b.g=!1}},0)},tw=function(a,b){function c(){return _.dh(e.Z)}var d=rw(a),e=d.Ce;e||(e=d.Ce=new sw(a));_.B(d.Y||[],_.N.removeListener);var f=d.ha=d.ha||new _.Cn,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",g,"projectionCenterQ");
f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Nh=d.Nh||new pw(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Y=[_.N.addListener(a,"panes_changed",c),_.N.addListener(g,"zoom_changed",c),_.N.addListener(g,"offset_changed",c),_.N.addListener(b,"projection_changed",c),_.N.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.Xe&&(_.Fi(b,"Ox"),_.$n("Ox","-p",a))},
ww=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.cg()}if(b&&b instanceof _.Xe){var d=b.__gm;d.overlayLayer?a.__gmop=new uw(b,a,d.overlayLayer):d.g.then(function(e){e=e.va;var f=new vw(b,e);e.ta(f);d.overlayLayer=f;ww(a)})}}},uw=function(a,b,c){this.map=a;this.sa=b;this.Hl=c;this.pe=!1;_.Fi(this.map,"Ox");_.$n("Ox","-p",this.sa);c.h.push(this);c.g&&xw(this,c.g);c.i.Lf()},xw=function(a,b){a.sa.get("projection")!=b&&(a.sa.bindTo("panes",a.map.__gm),a.sa.set("projection",
b))},vw=function(a,b){this.j=a;this.i=b;this.g=null;this.h=[]};_.A(pw,_.O);pw.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.rd(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.g:null))};_.A(sw,_.O);uw.prototype.draw=function(){this.pe||(this.pe=!0,this.sa.onAdd&&this.sa.onAdd());this.sa.draw&&this.sa.draw()};uw.prototype.cg=function(){_.ao("Ox","-p",this.sa);this.sa.unbindAll();this.sa.set("panes",null);this.sa.set("projection",null);_.ib(this.Hl.h,this);this.pe&&(this.pe=!1,this.sa.onRemove?this.sa.onRemove():this.sa.remove())};vw.prototype.dispose=_.n();
vw.prototype.Sa=function(a,b,c,d,e,f){var g=this.g=this.g||new _.vo(this.j,this.i,_.n());g.Sa(a,b,c,d,e,f);a=_.Ca(this.h);for(b=a.next();!b.done;b=a.next())b=b.value,xw(b,g),b.draw()};_.pf("overlay",{Cg:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.Xe||a.__gmop)ww(a);else{b=a.getMap();var c=rw(a),d=c.Yk;c.Yk=b;d&&(c=rw(a),(d=c.ha)&&d.unbindAll(),(d=c.Nh)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.B(c.Y,_.N.removeListener),c.Y=null,c.Ce&&(c.Ce.Z.Qa(),c.Ce=null),_.ao("Ox","-p",a));b&&tw(a,b)}}},preventMapHitsFrom:function(a){_.kp(a,{onClick:function(b){return _.Do(b.event)},Ka:function(b){return _.Ao(b)},nc:function(b){return _.Bo(b)},Za:function(b){return _.Bo(b)},
Pa:function(b){return _.Co(b)}}).Jc(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.oe);a.addEventListener("contextmenu",_.oe);a.addEventListener("dblclick",_.oe);a.addEventListener("mousedown",_.oe);a.addEventListener("mousemove",_.oe);a.addEventListener("MSPointerDown",_.oe);a.addEventListener("pointerdown",_.oe);a.addEventListener("touchstart",_.oe);a.addEventListener("wheel",_.oe)}});});
