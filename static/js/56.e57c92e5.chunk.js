(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1220:function(e,a,t){"use strict";t.r(a);t(118);var s,r=t(53),n=(t(147),t(88)),o=(t(146),t(22)),l=(t(187),t(121)),i=t(5),c=t(6),m=t(8),d=t(7),u=(t(495),t(493)),p=t(0),E=t.n(p),w=t(12),f=t(119),v=t(50),g=t(19),h=t(127),b=t(967),k=t.n(b),N=t(58),y=t(188),_=u.a.create()(s=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=a.call.apply(a,[this].concat(r))).state={tokenLoad:!0,loading:!1,token:!0},e.onSubmit=function(a){a.preventDefault();var t=e.props.form,s=e.state.user;t.validateFields(function(a,t){a||(e.setState({loading:!0}),s.password=t.password,N.b.resetPassword(s).then(function(){e.setState({loading:!1,valid:!1,success:!0})}).catch(function(a){l.a.error({message:"Failed",description:a}),e.setState({loading:!1})}))})},e.compareToFirstPassword=function(a,t,s){var r=e.props,n=r.form,o=r.intl;t&&t!==n.getFieldValue("password")?s(o.formatMessage({id:"user.password.reset.confirmationError"})):s()},e.validateToNextPassword=function(a,t,s){var r=e.props.form,n=e.state.confirmDirty;t&&n&&r.validateFields(["confirm"],{force:!0}),s()},e.handleConfirmBlur=function(a){var t=a.target.value,s=e.state.confirmDirty;e.setState({confirmDirty:s||!!t})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=new URLSearchParams(this.props.location.search).get("token");a?N.b.confirmPasswordResetToken(a).then(function(a){e.setState({user:a,tokenLoad:!1,valid:!0})}).catch(function(a){e.setState({tokenLoad:!1,invalid:!0,message:a})}):this.setState({token:!1})}},{key:"render",value:function(){var e=this.props,a=e.form,t=e.intl,s=this.state,l=s.loading,i=s.valid,c=s.invalid,m=s.token,d=s.tokenLoad,p=s.message,b=s.user,N=s.success;return m?E.a.createElement("div",null,E.a.createElement(f.Helmet,{title:t.formatMessage({id:"user.password.reset"})}),E.a.createElement("div",{className:k.a.block},E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-xl-12"},d&&E.a.createElement(h.a,null),N&&E.a.createElement("div",{className:k.a.inner},E.a.createElement("div",null,E.a.createElement("h4",{className:"text-uppercase"},E.a.createElement(w.a,{id:"user.password.reset.updated"})),E.a.createElement("p",{className:"mb-3"},E.a.createElement(w.a,{id:"user.password.reset.updatedMessage"})),E.a.createElement(g.a,{to:"/user/login",className:"btn"},"\u2190 ",E.a.createElement(w.a,{id:"user.password.reset.continue"})))),i&&E.a.createElement("div",{className:k.a.inner},E.a.createElement("div",{className:k.a.form},E.a.createElement("h4",{className:"text-uppercase"},E.a.createElement("strong",null,E.a.createElement(w.a,{id:"user.password.reset"}))),E.a.createElement("p",{className:"mb-3"},E.a.createElement(w.a,{id:"user.password.reset.hi"})," ".concat(b.name,", "),E.a.createElement(w.a,{id:"user.password.reset.resetPassword"})),E.a.createElement("br",null),E.a.createElement(u.a,{layout:"vertical",hideRequiredMark:!0,onSubmit:this.onSubmit},E.a.createElement(u.a.Item,{hasFeedback:!0},a.getFieldDecorator("password",{rules:[{required:!0,message:t.formatMessage({id:"user.password.reset.newPasswordMessage"})},{validator:this.validateToNextPassword}]})(E.a.createElement(n.a,{prefix:E.a.createElement(o.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:t.formatMessage({id:"user.password.reset.newPassword"})}))),E.a.createElement(u.a.Item,{hasFeedback:!0},a.getFieldDecorator("confirm",{rules:[{required:!0,message:t.formatMessage({id:"user.password.reset.confirmPasswordMessage"})},{validator:this.compareToFirstPassword}]})(E.a.createElement(n.a,{type:"password",onBlur:this.handleConfirmBlur,placeholder:t.formatMessage({id:"user.password.reset.confirmPassword"})}))),E.a.createElement("div",{className:"mb-2"},E.a.createElement(g.a,{to:"/user/login",className:"utils__link--blue utils__link--underlined"},E.a.createElement(w.a,{id:"user.password.reset.back"}))),E.a.createElement("div",{className:"form-actions"},E.a.createElement(r.a,{type:"primary",className:"width-150 mr-4",htmlType:"submit",loading:l},E.a.createElement(w.a,{id:"user.password.reset"})))))),c&&E.a.createElement("div",{className:k.a.inner},E.a.createElement("div",null,E.a.createElement("h4",null,E.a.createElement("strong",null,E.a.createElement(w.a,{id:"user.password.reset.invalidLink"}))),E.a.createElement("p",{className:"mb-3"},E.a.createElement(w.a,{id:"user.password.reset.invalidLinkMessage"})),E.a.createElement("p",{className:"mb-3"},p),E.a.createElement(g.a,{to:"/user/login",className:"btn"},"\u2190 ",E.a.createElement(w.a,{id:"user.password.reset.continue"})))))))):E.a.createElement(v.b,{component:y.a})}}]),t}(p.Component))||s;a.default=Object(w.d)(_)},967:function(e,a,t){e.exports={login:"style_login__IWqGl",block:"style_block__1yHL1",inner:"style_inner__3o7oX",form:"style_form__1l7vp"}}}]);
//# sourceMappingURL=56.e57c92e5.chunk.js.map