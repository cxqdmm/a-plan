(window.webpackJsonp=window.webpackJsonp||[]).push([["dashboard-module"],{MNMN:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),i=r("HaE+"),c=r("DSFK"),o=r("25BE"),s=r("PYwp");var u=r("a3ss"),p=r("1OyB"),d=r("vuIU"),l=r("Y65e"),b=(r("+JCI"),r("o+so")),f=r("z09t"),j=r("mw/K"),h=r.n(j),m=r("oyvS"),v=r.n(m);var y,w,O,P=h.a.realpathSync(process.cwd()),g=function(e){return v.a.resolve(P,e)};var S=f.a.createDb({filename:"store/dashboard/project",autoload:!0}),k=(y=function(){function e(){Object(p.a)(this,e),this.nedb=f.a,Object(u.a)(this,"project",w,this),Object(u.a)(this,"templates",O,this)}return Object(d.a)(e,[{key:"setEditProject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};S.find({type:"editProject"}).then(function(t){var r,n=(r=t,Object(c.a)(r)||Object(o.a)(r)||Object(s.a)()).slice(0);n.length>1?S.remove({type:"editProject"},!0).then(function(){S.insert({type:"editProject",name:e.name,dir:e.dir})}):1===n.length?S.update({type:"editProject"},{name:e.name,dir:e.dir}):S.insert({type:"editProject",name:e.name,dir:e.dir})}),this.setState({project:e})}},{key:"getEditProjectFromCache",value:function(){var e=Object(i.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.find({type:"editProject"});case 2:t=e.sent,this.setState({project:t[0]||{}});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getTemplate",value:function(){var e=h.a.readdirSync(g("src/web-template")).filter(function(e){return!/^\./.test(e)});this.setState({templates:e})}}]),e}(),w=Object(l.a)(y.prototype,"project",[b.c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),O=Object(l.a)(y.prototype,"templates",[b.c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y);t.default=new k}}]);
//# sourceMappingURL=dashboard-module.a296209e.chunk.js.map