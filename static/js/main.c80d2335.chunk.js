(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),s=a(10),r=a(2),o=a(3),c=a(6),l=a(5),d=a(8),u=a(1),m=a.n(u),h=(a(15),a(4)),b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],g=a(0),y=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={title:"",name:"",isTitleValid:!1,isNameSelected:!1},e.clearState=function(){e.setState({title:"",name:"",isTitleValid:!1,isNameSelected:!1})},e.handleChange=function(t){e.setState({title:t.target.value,isTitleValid:!1})},e.handleSelectChange=function(t){e.setState({name:t.target.value,isNameSelected:!1})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,i=a.title;if(i||e.setState({isTitleValid:!0}),n||e.setState({isNameSelected:!0}),i&&n){var s=e.props.users.find((function(e){return e.name===n}))||null,r=s?s.id:null;e.props.addTodo({uuid:Object(h.uuid)(),title:e.state.title,userId:r,user:s}),e.clearState()}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.todos,a=e.users,n=this.state,i=n.title,s=n.name,r=n.isNameSelected,o=n.isTitleValid;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:"w-25 mx-auto",children:[Object(g.jsx)("input",{type:"text",placeholder:"Add todo",value:i,onChange:this.handleChange,className:"w-100 mb-2 py-2 form-control"}),o&&Object(g.jsx)("p",{children:"Please enter the title"}),Object(g.jsxs)("select",{name:"name",value:s,onChange:this.handleSelectChange,className:"w-100 mb-2 py-2 form-control",children:[Object(g.jsx)("option",{value:"",disabled:!0,children:"User name"}),a.map((function(e){return Object(g.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),r&&Object(g.jsx)("p",{children:"Please choose a user"}),Object(g.jsx)("button",{type:"submit",className:"center__button btn btn-outline-success",children:"Add todo"})]}),Object(g.jsx)("ul",{className:"w-50 mx-auto list-group-flush",children:t.map((function(e){return Object(g.jsxs)("li",{className:"list-group-item",children:[Object(g.jsx)("span",{className:"text-primary",children:e.user?"".concat(e.user.name," todo:"):"No User"})," ",e.title]},e.uuid)}))})]})}}]),a}(m.a.Component),j=p.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{uuid:Object(h.uuid)(),user:(t=e.userId,b.find((function(e){return e.id===t}))||null)});var t})),f=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={usersFromServer:b,todoList:j},e.addTodo=function(t){e.setState((function(e){return{todoList:[].concat(Object(s.a)(e.todoList),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.usersFromServer,a=e.todoList;return Object(g.jsxs)("div",{className:"center",children:[Object(g.jsx)("h1",{children:"Add todo form"}),Object(g.jsx)(y,{addTodo:this.addTodo,todos:a,users:t})]})}}]),a}(u.Component);a(21);i.a.render(Object(g.jsx)(f,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c80d2335.chunk.js.map