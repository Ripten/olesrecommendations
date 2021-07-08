(this.webpackJsonpolesrecommendations=this.webpackJsonpolesrecommendations||[]).push([[0],{10:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},30:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),a=n(9),r=n.n(a),o=n(2),l=n(3),c=n(5),d=n(4),u=(n(30),n(8)),m=(n(10),n(0)),h=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"questionnaire-content",children:[Object(m.jsx)("div",{className:"question-div",children:"Are you OK with foreign language films?"}),Object(m.jsx)("div",{className:"choice-div",onClick:this.props.setNoLanguagePreference,children:"Yes"}),Object(m.jsx)("div",{className:"choice-div",onClick:this.props.setEnglishOnly,children:"No, only I want films in English"}),Object(m.jsxs)("div",{className:"choice-div",onClick:this.props.setForeignOnly,children:["Actually, I ",Object(m.jsx)("i",{children:"only"})," want foreign language films!"]})]})}}]),n}(i.Component),g=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"questionnaire-content",children:[Object(m.jsx)("div",{className:"question-div",children:"Are you OK with black and white films?"}),Object(m.jsx)("div",{className:"choice-div",onClick:this.props.setNoColorPreference,children:"Yes"}),Object(m.jsx)("div",{className:"choice-div",onClick:this.props.setColorsOnly,children:"No, I just want color films"}),Object(m.jsxs)("div",{className:"choice-div",onClick:this.props.setBlackAndWhiteOnly,children:["Actually, I ",Object(m.jsx)("i",{children:"only"})," want black and white films!"]})]})}}]),n}(i.Component),b=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"questionnaire-content",children:[Object(m.jsx)("div",{className:"question-div",children:"Are you OK with animated films?"}),Object(m.jsx)("div",{className:"choice-div",onClick:this.props.setNoStylePreference,children:"Yes"}),Object(m.jsx)("div",{className:"choice-div",onClick:this.props.setLiveActionOnly,children:"No, I just want live action films"}),Object(m.jsxs)("div",{className:"choice-div",onClick:this.props.setAnimationOnly,children:["Actually, I ",Object(m.jsx)("i",{children:"only"})," want animated films!"]})]})}}]),n}(i.Component),w=n(12),p=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).toggle=function(t){var e=document.getElementById(t),n=i.state[t];!0===n?(r.a.findDOMNode(e).style["background-color"]="#f5ebd0",r.a.findDOMNode(e).style.color="black"):(r.a.findDOMNode(e).style["background-color"]="green",r.a.findDOMNode(e).style.color="white"),i.setState(Object(w.a)({},t,!n))},i.addAllTags=function(){var t=[];!0===i.state.action&&t.push("ACTION"),!0===i.state.adventure&&t.push("ADVENTURE"),!0===i.state.biography&&t.push("BIOGRAPHY"),!0===i.state.classic&&t.push("CLASSIC"),!0===i.state.comedy&&t.push("COMEDY"),!0===i.state.crime&&t.push("CRIME"),!0===i.state.dark&&t.push("DARK"),!0===i.state.deep&&t.push("DEEP"),!0===i.state.documentary&&t.push("DOCUMENTARY"),!0===i.state.horror&&t.push("HORROR"),!0===i.state.kidfriendly&&t.push("KID_FRIENDLY"),!0===i.state.romance&&t.push("ROMANCE"),!0===i.state.sad&&t.push("SAD"),!0===i.state.samurai&&t.push("SAMURAI"),!0===i.state.scifi&&t.push("SCIFI"),!0===i.state.sports&&t.push("SPORTS"),!0===i.state.thriller&&t.push("THRILLER"),!0===i.state.war&&t.push("WAR"),!0===i.state.western&&t.push("WESTERN"),!0===i.state.zombie&&t.push("ZOMBIE"),i.props.createFilmRecommendations(t)},i.state={no_preference:!1,action:!1,adventure:!1,biography:!1,classic:!1,comedy:!1,crime:!1,deep:!1,dark:!1,documentary:!1,horror:!1,kidfriendly:!1,romance:!1,sad:!1,samurai:!1,scifi:!1,sports:!1,thriller:!1,war:!1,western:!1,zombie:!1},i}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"questionnaire-content",children:[Object(m.jsx)("div",{className:"question-div",children:"What are you in the mood for?"}),Object(m.jsx)("div",{className:"recommendation-button-row",children:Object(m.jsx)("button",{className:"recommendation-button",onClick:this.addAllTags,children:"Get recommendations!"})}),Object(m.jsxs)("div",{className:"genre-row",children:[Object(m.jsx)("button",{className:"genre-button",id:"action",onClick:function(){return t.toggle("action")},children:"Action"}),Object(m.jsx)("button",{className:"genre-button",id:"adventure",onClick:function(){return t.toggle("adventure")},children:"Adventure"}),Object(m.jsx)("button",{className:"genre-button",id:"biography",onClick:function(){return t.toggle("biography")},children:"Biography"}),Object(m.jsx)("button",{className:"genre-button",id:"classic",onClick:function(){return t.toggle("classic")},children:"Classic"})]}),Object(m.jsxs)("div",{className:"genre-row",children:[Object(m.jsx)("button",{className:"genre-button",id:"comedy",onClick:function(){return t.toggle("comedy")},children:"Comedy"}),Object(m.jsx)("button",{className:"genre-button",id:"crime",onClick:function(){return t.toggle("crime")},children:"Crime"}),Object(m.jsx)("button",{className:"genre-button",id:"dark",onClick:function(){return t.toggle("dark")},children:"Dark"}),Object(m.jsx)("button",{className:"genre-button",id:"deep",onClick:function(){return t.toggle("deep")},children:"Deep"})]}),Object(m.jsxs)("div",{className:"genre-row",children:[Object(m.jsx)("button",{className:"genre-button",id:"documentary",onClick:function(){return t.toggle("documentary")},children:"Documentary"}),Object(m.jsx)("button",{className:"genre-button",id:"horror",onClick:function(){return t.toggle("horror")},children:"Horror"}),Object(m.jsx)("button",{className:"genre-button",id:"kidfriendly",onClick:function(){return t.toggle("kidfriendly")},children:"Kid friendly"}),Object(m.jsx)("button",{className:"genre-button",id:"romance",onClick:function(){return t.toggle("romance")},children:"Romance"})]}),Object(m.jsxs)("div",{className:"genre-row",children:[Object(m.jsx)("button",{className:"genre-button",id:"sad",onClick:function(){return t.toggle("sad")},children:"Sad"}),Object(m.jsx)("button",{className:"genre-button",id:"samurai",onClick:function(){return t.toggle("samurai")},children:"Samurai"}),Object(m.jsx)("button",{className:"genre-button",id:"scifi",onClick:function(){return t.toggle("scifi")},children:"Scifi"}),Object(m.jsx)("button",{className:"genre-button",id:"sports",onClick:function(){return t.toggle("sports")},children:"Sports"})]}),Object(m.jsxs)("div",{className:"genre-row",children:[Object(m.jsx)("button",{className:"genre-button",id:"thriller",onClick:function(){return t.toggle("thriller")},children:"Thriller"}),Object(m.jsx)("button",{className:"genre-button",id:"war",onClick:function(){return t.toggle("war")},children:"War"}),Object(m.jsx)("button",{className:"genre-button",id:"western",onClick:function(){return t.toggle("western")},children:"Western"}),Object(m.jsx)("button",{className:"genre-button",id:"zombie",onClick:function(){return t.toggle("zombie")},children:"Zombie"})]})]})}}]),n}(i.Component),O=n(7),j=n.n(O),f=n(11),y=(n(16),n(15),n.p+"static/media/star.3f026a8c.png"),A=[{title:"127 Hours",star:!1,language:"English",year:2010,imdbLink:"https://www.imdb.com/title/tt1542344/",tags:["BIOGRAPHY"]},{title:"28 Days Later",star:!1,language:"English",year:2002,imdbLink:"https://www.imdb.com/title/tt0289043/",tags:["HORROR","ZOMBIE"]},{title:"5 Centimeters Per Second",star:!1,language:"Japanese",year:2007,imdbLink:"https://www.imdb.com/title/tt0983213/",tags:["ROMANCE","ANIMATION"]},{title:"A Dirty Carnival",star:!1,language:"Korean",year:2006,imdbLink:"https://www.imdb.com/title/tt0821442/",tags:["THRILLER","CRIME"]},{title:"A Tale Of Two Sisters",star:!1,language:"Korean",year:2003,imdbLink:"https://www.imdb.com/title/tt0365376/",tags:["HORROR"]},{title:"Alien",star:!1,language:"English",year:1979,imdbLink:"https://www.imdb.com/title/tt0078748/",tags:["HORROR","SCIFI","CLASSIC"]},{title:"Burning",star:!1,language:"Korean",year:2018,imdbLink:"https://www.imdb.com/title/tt7282468/",tags:["DEEP"]},{title:"Citizen Kane",star:!1,language:"English",year:1941,imdbLink:"https://www.imdb.com/title/tt0033467/",tags:["BLACK_AND_WHITE","CLASSIC"]},{title:"Coraline",star:!1,language:"English",year:2009,imdbLink:"https://www.imdb.com/title/tt0327597/",tags:["HORROR","ANIMATION"]},{title:"Django Unchained",star:!1,language:"English",year:2012,imdbLink:"https://www.imdb.com/title/tt1853728/",tags:["WESTERN","COMEDY"]},{title:"Full Metal Jacket",star:!1,language:"English",year:1987,imdbLink:"https://www.imdb.com/title/tt0093058/",tags:["CLASSIC","WAR"]},{title:"Get Out",star:!1,language:"English",year:2017,imdbLink:"https://www.imdb.com/title/tt5052448/",tags:["HORROR"]},{title:"Grave of the Fireflies",star:!1,language:"Japanese",year:1988,imdbLink:"https://www.imdb.com/title/tt0095327/",tags:["SAD","CLASSIC","ANIMATION","WAR","DARK"]},{title:"In The Mood For Love",star:!0,language:"Cantonese",year:2e3,imdbLink:"https://www.imdb.com/title/tt0118694/",tags:["ROMANCE","DEEP"]},{title:"Inglourious Basterds",star:!1,language:"English",year:2009,imdbLink:"https://www.imdb.com/title/tt0361748/",tags:["WAR","COMEDY"]},{title:"Jiro Dreams of Sushi",star:!1,language:"Japanese",year:2011,imdbLink:"https://www.imdb.com/title/tt1772925/",tags:["DOCUMENTARY","BIOGRAPHY"]},{title:"Joint Security Area",star:!1,language:"Korean",year:2e3,imdbLink:"https://www.imdb.com/title/tt0260991/",tags:["WAR"]},{title:"Kikujiro",star:!0,language:"Japanese",year:1999,imdbLink:"https://www.imdb.com/title/tt0199683/",tags:["SAD","COMEDY"]},{title:"Lost in Translation",star:!1,language:"English",year:2003,imdbLink:"https://www.imdb.com/title/tt0335266/",tags:["ROMANCE"]},{title:"Millennium Actress",star:!0,language:"Japanese",year:2001,imdbLink:"https://www.imdb.com/title/tt0291350/",tags:["DEEP","ANIMATION"]},{title:"Nightcrawler",star:!1,language:"English",year:2014,imdbLink:"https://www.imdb.com/title/tt2872718/",tags:["THRILLER"]},{title:"Office Space",star:!1,language:"English",year:1999,imdbLink:"https://www.imdb.com/title/tt0151804/",tags:["COMEDY"]},{title:"Okuribito",star:!1,language:"Japanese",year:2008,imdbLink:"https://www.imdb.com/title/tt1069238/",tags:["SAD"]},{title:"Oldboy",star:!0,language:"Korean",year:2003,imdbLink:"https://www.imdb.com/title/tt0364569/",tags:["DEEP","THRILLER","CRIME","DARK"]},{title:"Paprika",star:!0,language:"Japanese",year:2006,imdbLink:"https://www.imdb.com/title/tt0851578/",tags:["DEEP","ANIMATION","SCIFI"]},{title:"Parasite",star:!1,language:"Korean",year:2019,imdbLink:"https://www.imdb.com/title/tt6751668/",tags:["DEEP"]},{title:"Perfect Blue",star:!1,language:"Japanese",year:1997,imdbLink:"https://www.imdb.com/title/tt0156887/",tags:["DEEP","THRILLER","ANIMATION","CRIME"]},{title:"Persona",star:!1,language:"Swedish",year:1966,imdbLink:"https://www.imdb.com/title/tt0060827/",tags:["DEEP","BLACK_AND_WHITE","CLASSIC"]},{title:"Porco Rosso",star:!0,language:"Japanese",year:1992,imdbLink:"https://www.imdb.com/title/tt0104652/",tags:["ANIMATION","KID_FRIENDLY"]},{title:"Princess Mononoke",star:!1,language:"Japanese",year:1997,imdbLink:"https://www.imdb.com/title/tt0119698/",tags:["ANIMATION","ADVENTURE"]},{title:"Reservoir Dogs",star:!1,language:"English",year:1992,imdbLink:"https://www.imdb.com/title/tt0105236/",tags:["THRILLER","CLASSIC","CRIME"]},{title:"Rocky",star:!1,language:"English",year:1976,imdbLink:"https://www.imdb.com/title/tt0075148/",tags:["CLASSIC","SPORTS"]},{title:"Rocky II",star:!1,language:"English",year:1979,imdbLink:"https://www.imdb.com/title/tt0079817/",tags:["CLASSIC","SPORTS"]},{title:"The Babadook",star:!1,language:"English",year:2014,imdbLink:"https://www.imdb.com/title/tt2321549/",tags:["HORROR"]},{title:"Spirited Away",star:!0,language:"Japanese",year:2001,imdbLink:"https://www.imdb.com/title/tt0245429/",tags:["DEEP","ADVENTURE","ANIMATION","KID_FRIENDLY"]},{title:"The Empire Strikes Back",star:!1,language:"English",year:1980,imdbLink:"https://www.imdb.com/title/tt0080684/",tags:["SCIFI","CLASSIC"]},{title:"The Fellowship Of The Ring",star:!0,language:"English",year:2001,imdbLink:"https://www.imdb.com/title/tt0120737/",tags:["ADVENTURE"]},{title:"The Good, the Bad and the Ugly",star:!1,language:"English",year:1966,imdbLink:"https://www.imdb.com/title/tt0060196/",tags:["CLASSIC","WESTERN"]},{title:"The Shawshank Redemption",star:!0,language:"English",year:1994,imdbLink:"https://www.imdb.com/title/tt0111161/",tags:["CLASSIC"]},{title:"The Spy Who Loved Me",star:!1,language:"English",year:1977,imdbLink:"https://www.imdb.com/title/tt0076752/",tags:["CLASSIC","ACTION"]},{title:"The Thing",star:!1,language:"English",year:1982,imdbLink:"https://www.imdb.com/title/tt0084787/",tags:["HORROR","SCIFI","CLASSIC"]},{title:"The Truman Show",star:!1,language:"English",year:1998,imdbLink:"https://www.imdb.com/title/tt0120382/",tags:["COMEDY"]},{title:"The Wind Rises",star:!1,language:"Japanese",year:2014,imdbLink:"https://www.imdb.com/title/tt2013293/",tags:["ANIMATION","SAD","WAR"]},{title:"To Kill A Mockingbird",star:!1,language:"English",year:1962,imdbLink:"https://www.imdb.com/title/tt0056592/",tags:["CLASSIC","BLACK_AND_WHITE"]},{title:"Tokyo Godfathers",star:!1,language:"Japanese",year:2003,imdbLink:"https://www.imdb.com/title/tt0388473/",tags:["ANIMATION"]},{title:"Unbreakable",star:!1,language:"English",year:2e3,imdbLink:"https://www.imdb.com/title/tt0217869/",tags:["THRILLER"]},{title:"Wild Strawberries",star:!1,language:"Swedish",year:1957,imdbLink:"https://www.imdb.com/title/tt0050986/",tags:["CLASSIC","BLACK_AND_WHITE","DEEP"]}],k=[{title:"12 Angry Men",star:!1,language:"English",year:1957,imdbLink:"https://www.imdb.com/title/tt0050083/",tags:["CLASSIC","BLACK_AND_WHITE"]},{title:"Casino Royale",star:!1,language:"English",year:2006,imdbLink:"https://www.imdb.com/title/tt0381061/",tags:["ACTION"]},{title:"Castaway On The Moon",star:!1,language:"Korean",year:2009,imdbLink:"https://www.imdb.com/title/tt1499666/",tags:["ROMANCE"]},{title:"Children Of Men",star:!1,language:"English",year:2006,imdbLink:"https://www.imdb.com/title/tt0206634/",tags:["SCIFI"]},{title:"Coco",star:!1,language:"English",year:2017,imdbLink:"https://www.imdb.com/title/tt2380307/",tags:["ANIMATION","SAD","ADVENTURE","KID_FRIENDLY"]},{title:"Dunkirk",star:!1,language:"English",year:2017,imdbLink:"https://www.imdb.com/title/tt5013056/",tags:["WAR"]},{title:"Edge Of Tomorrow",star:!1,language:"English",year:2014,imdbLink:"https://www.imdb.com/title/tt1631867/",tags:["SCIFI","ACTION"]},{title:"Hana-bi",star:!1,language:"Japanese",year:1997,imdbLink:"https://www.imdb.com/title/tt0119250/",tags:["SAD","CRIME"]},{title:"Inception",star:!1,language:"English",year:2010,imdbLink:"https://www.imdb.com/title/tt1375666/",tags:["SCIFI","ACTION"]},{title:"Jagten",star:!1,language:"Danish",year:2012,imdbLink:"https://www.imdb.com/title/tt2106476/",tags:["SAD","DARK"]},{title:"L\xe5t den r\xe4tte komma in",star:!1,language:"Swedish",year:2008,imdbLink:"https://www.imdb.com/title/tt1139797/",tags:["HORROR"]},{title:"Pulp Fiction",star:!1,language:"English",year:1994,imdbLink:"https://www.imdb.com/title/tt0110912/",tags:["CRIME","CLASSIC","THRILLER"]},{title:"Ran",star:!1,language:"Japanese",year:1985,imdbLink:"https://www.imdb.com/title/tt0089881/",tags:["CLASSIC","WAR","SAMURAI"]},{title:"Rush Hour",star:!1,language:"English",year:1998,imdbLink:"https://www.imdb.com/title/tt0120812/",tags:["COMEDY"]},{title:"Rush Hour 2",star:!1,language:"English",year:2001,imdbLink:"https://www.imdb.com/title/tt0266915/",tags:["COMEDY"]},{title:"Step Brothers",star:!1,language:"English",year:2008,imdbLink:"https://www.imdb.com/title/tt0838283/",tags:["COMEDY"]},{title:"The 40 Year-Old Virgin",star:!1,language:"English",year:2005,imdbLink:"https://www.imdb.com/title/tt0405422/",tags:["COMEDY"]},{title:"The Hangover",star:!1,language:"English",year:2009,imdbLink:"https://www.imdb.com/title/tt1119646/",tags:["COMEDY"]},{title:"The Prince Of Egypt",star:!1,language:"English",year:1998,imdbLink:"https://www.imdb.com/title/tt0120794/",tags:["ANIMATION"]},{title:"The Return of the King",star:!1,language:"English",year:2003,imdbLink:"https://www.imdb.com/title/tt0167260/",tags:["ADVENTURE"]},{title:"The Seventh Seal",star:!1,language:"Swedish",year:1957,imdbLink:"https://www.imdb.com/title/tt0050976/",tags:["CLASSIC","BLACK_AND_WHITE","DEEP"]},{title:"The Shining",star:!1,language:"English",year:1980,imdbLink:"https://www.imdb.com/title/tt0081505/",tags:["HORROR","CLASSIC"]},{title:"The Silence Of The Lambs",star:!1,language:"English",year:1991,imdbLink:"https://www.imdb.com/title/tt0102926/",tags:["CRIME","CLASSIC"]},{title:"The Two Towers",star:!1,language:"English",year:2002,imdbLink:"https://www.imdb.com/title/tt0167261/",tags:["ADVENTURE"]},{title:"Train To Busan",star:!1,language:"Korean",year:2016,imdbLink:"https://www.imdb.com/title/tt5700672/",tags:["HORROR","ZOMBIE"]},{title:"Yojimbo",star:!1,language:"Japanese",year:1961,imdbLink:"https://www.imdb.com/title/tt0055630/",tags:["BLACK_AND_WHITE","CLASSIC","SAMURAI"]},{title:"Vertigo",star:!1,language:"English",year:1958,imdbLink:"https://www.imdb.com/title/tt0052357/",tags:["CLASSIC","CRIME","DEEP","ROMANCE"]},{title:"WALL-E",star:!1,language:"English",year:2008,imdbLink:"https://www.imdb.com/title/tt0910970/",tags:["ANIMATION","SCIFI","KID_FRIENDLY"]},{title:"Whiplash",star:!1,language:"English",year:2014,imdbLink:"https://www.imdb.com/title/tt2582802/",tags:["SPORTS"]}];function v(t){var e=A.concat(k).sort((function(t,e){return t.title>e.title?1:-1}));if(null==t)return e;switch(t.englishOnly){case!0:e=e.filter(N);break;case!1:e=e.filter(C)}switch(t.colorsOnly){case!0:e=e.filter(R);break;case!1:e=e.filter(L)}switch(t.liveActionOnly){case!0:e=e.filter(E);break;case!1:e=e.filter(I)}return t.tags.length>0&&(e=e.filter((function(e){return n=e.tags,i=t.tags,n.some((function(t){return i.includes(t)}));var n,i}))),e}function N(t){return"English"===t.language}function C(t){return"English"!==t.language}function R(t){return!t.tags.includes("BLACK_AND_WHITE")}function L(t){return t.tags.includes("BLACK_AND_WHITE")}function E(t){return!t.tags.includes("ANIMATION")}function I(t){return t.tags.includes("ANIMATION")}function S(t){return String(t).slice(27).replace("/","")}function x(t){var e="";return null!=t&&t.forEach((function(t){"Internet Movie Database"===t.Source&&(e=t.Value.substring(0,3))})),e}function T(t){return"N/A"!==t.Director?"Directed by "+t.Director:"N/A"!==t.Writer?"Written by "+t.Writer:""}function D(t,e){var n=e+" - "+t,i="";return i="BLACK_AND_WHITE"===t?"BlackAndWhite":"KID_FRIENDLY"===t?"Kid friendly":t.charAt(0)+t.substring(1).toLowerCase(),Object(m.jsx)("button",{className:"tag-button",children:i},n)}n(17);var M=n(13),F=n.n(M),Q=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).fetchRecommendations=i.fetchRecommendationsAsync,i.state={isFetching:!1,data:null},i}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"loading-message",children:this.state.isFetching?"Fetching metadata...":""}),function(){if(null!==t.state.data&&!1===t.state.isFetching){var e=t.state.data;return Object(m.jsxs)("div",{className:"recommendation-div",children:[Object(m.jsx)("h1",{className:"header",children:t.props.props.title}),Object(m.jsx)("div",{className:"poster-div",children:Object(m.jsx)("a",{href:t.props.props.imdbLink,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{className:"poster",src:e.Poster,alt:"poster"})})}),Object(m.jsxs)("div",{className:"information-div",children:[Object(m.jsx)("p",{className:"info",children:T(e)}),Object(m.jsxs)("p",{className:"info",children:["IMDb Rating: ",x(e.Ratings)]}),Object(m.jsxs)("p",{className:"info",children:["Language: ",t.props.props.language]}),Object(m.jsxs)("p",{className:"info",children:["Runtime: ",e.Runtime]}),Object(m.jsx)("p",{className:"tags-header",children:"Tags:"}),t.props.props.tags.map((function(e){return D(e,t.props.props.title)}))]})]})}}()]})}},{key:"componentDidMount",value:function(){this.fetchRecommendations()}},{key:"fetchRecommendationsAsync",value:function(){var t=Object(f.a)(j.a.mark((function t(){var e,n,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=S(this.props.props.imdbLink),n={method:"get",url:"https://www.omdbapi.com/?i=".concat(e,"&apiKey=15d1860"),headers:{"Content-Type":"application/json"},transformRequest:[function(t){return t}]},t.prev=2,this.setState({isFetching:!0}),t.next=6,F()(n);case 6:i=t.sent,this.setState({data:i.data,isFetching:!1}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0),this.setState(Object(u.a)(Object(u.a)({},this.state),{},{isFetching:!1}));case 14:case"end":return t.stop()}}),t,this,[[2,10]])})));return function(){return t.apply(this,arguments)}}()}]),n}(i.Component),P=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).fetchRecommendations=i.fetchRecommendationsAsync,i.state={isFetching:!1,data:null},i}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"loadingmessage",children:this.state.isFetching?"Fetching metadata...":""}),function(){if(null!==t.state.data&&!1===t.state.isFetching){var e=t.state.data;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"header",children:t.props.props.title}),Object(m.jsx)("div",{className:"poster-div",children:Object(m.jsx)("a",{href:t.props.props.imdbLink,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{className:"poster",src:e.Poster,alt:"poster"})})}),Object(m.jsxs)("div",{className:"information-div",children:[Object(m.jsx)("p",{className:"info",children:T(e)}),Object(m.jsxs)("p",{className:"info",children:["IMDb Rating: ",x(e.Ratings)]}),Object(m.jsxs)("p",{className:"info",children:["Language: ",t.props.props.language]}),Object(m.jsxs)("p",{className:"info",children:["Runtime: ",e.Runtime]}),Object(m.jsx)("p",{className:"tags-header",children:"Tags:"}),t.props.props.tags.map((function(e){return D(e,t.props.props.title)}))]})]})}}()]})}},{key:"componentDidMount",value:function(){this.fetchRecommendations()}},{key:"fetchRecommendationsAsync",value:function(){var t=Object(f.a)(j.a.mark((function t(){var e,n,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=S(this.props.props.imdbLink),n={method:"get",url:"https://www.omdbapi.com/?i=".concat(e,"&apiKey=15d1860"),headers:{"Content-Type":"application/json"},transformRequest:[function(t){return t}]},t.prev=2,this.setState({isFetching:!0}),t.next=6,F()(n);case 6:i=t.sent,this.setState({data:i.data,isFetching:!1}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0),this.setState(Object(u.a)(Object(u.a)({},this.state),{},{isFetching:!1}));case 14:case"end":return t.stop()}}),t,this,[[2,10]])})));return function(){return t.apply(this,arguments)}}()}]),n}(i.Component),K=function(t){var e=t.handleClose,n=t.show,i=t.data,s=n?"modal display-block":"modal display-none",a=n?Object(m.jsx)(P,{props:i,handleClose:e}):Object(m.jsx)("div",{});return Object(m.jsx)("div",{className:s,onClick:e,children:Object(m.jsx)("section",{className:"modal-main",children:a})})},H=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).showModal=function(t){i.setState({show:!0,data:t})},i.hideModal=function(){i.setState({show:!1,data:""})},i.fetchRecommendations=i.fetchRecommendationsAsync,i.state={isFetching:!1,show:!1,films:[]},i}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(K,{show:this.state.show,handleClose:this.hideModal,data:this.state.data}),t.state.films.length>0&&t.state.films.length<21?Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"result",children:[Object(m.jsxs)("div",{children:[t.state.films.length," suitable recommendation(s) found!"]}),Object(m.jsx)("div",{children:"Refresh the page or click on the banner to start over"})]}),t.state.films.map((function(t){return Object(m.jsx)("div",{children:Object(m.jsx)(Q,{props:t})},t.title)}))]}):t.state.films.length>20?Object(m.jsxs)("div",{className:"table-content",children:[Object(m.jsxs)("div",{className:"result-table",children:[Object(m.jsxs)("div",{children:[t.state.films.length," suitable recommendation(s) found!"]}),Object(m.jsx)("div",{children:"Refresh the page or click on the banner to start over"})]}),Object(m.jsxs)("table",{align:"center",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Title"}),Object(m.jsx)("th",{children:"Year"}),Object(m.jsx)("th",{children:"Language"})]})}),Object(m.jsx)("tbody",{children:t.state.films.map((function(e){return Object(m.jsxs)("tr",{className:"tr-clickable",onClick:function(){return t.showModal(e)},children:[(n=e,!0===n.star?Object(m.jsx)("td",{className:"title-td",children:Object(m.jsxs)("div",{className:"stars",children:[n.title," ",Object(m.jsx)("img",{className:"star-icon",src:y,alt:"star"})]})}):Object(m.jsx)("td",{className:"title-td",children:n.title})),Object(m.jsx)("td",{children:e.year}),Object(m.jsx)("td",{children:e.language})]},e.title);var n}))})]})]}):Object(m.jsxs)("div",{className:"result",children:[Object(m.jsx)("div",{children:"No suitable recommendations found with your filters."}),Object(m.jsx)("div",{children:"Refresh the page or click on the banner to start over"})]}),Object(m.jsx)("p",{children:this.state.isFetching?"Loading...":""})]})}},{key:"componentDidMount",value:function(){this.fetchRecommendations()}},{key:"fetchRecommendationsAsync",value:function(){var t=Object(f.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=v(this.props.filmRequest),this.setState({films:e});case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),n}(i.Component),W=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).showLanguageQuestion=function(){var t=i.state.languageQuestion;i.setState({languageQuestion:!t,colorQuestion:!1,liveActionQuestion:!1,genreQuestion:!1,showRecommendations:!1})},i.showColorQuestion=function(){var t=i.state.colorQuestion;i.setState({languageQuestion:!1,colorQuestion:!t,liveActionQuestion:!1,genreQuestion:!1,showRecommendations:!1})},i.showLiveActionQuestion=function(){var t=i.state.liveActionQuestion;i.setState({languageQuestion:!1,colorQuestion:!1,liveActionQuestion:!t,genreQuestion:!1,showRecommendations:!1})},i.showGenreQuestion=function(){var t=i.state.genreQuestion;i.setState({languageQuestion:!1,colorQuestion:!1,liveActionQuestion:!1,genreQuestion:!t,showRecommendations:!1})},i.showRecommendations=function(){var t=i.state.showRecommendations;i.setState({languageQuestion:!1,colorQuestion:!1,liveActionQuestion:!1,genreQuestion:!1,showRecommendations:!t})},i.setEnglishOnly=function(){i.setState({englishOnly:!0}),i.showColorQuestion()},i.setForeignOnly=function(){i.setState({englishOnly:!1}),i.showColorQuestion()},i.setNoLanguagePreference=function(){i.setState({englishOnly:null}),i.showColorQuestion()},i.setColorsOnly=function(){i.setState({colorsOnly:!0}),i.showLiveActionQuestion()},i.setBlackAndWhiteOnly=function(){i.setState({colorsOnly:!1}),i.showLiveActionQuestion()},i.setNoColorPreference=function(){i.setState({colorsOnly:null}),i.showLiveActionQuestion()},i.setLiveActionOnly=function(){i.setState({liveActionOnly:!0}),i.showGenreQuestion()},i.setAnimationOnly=function(){i.setState({liveActionOnly:!1}),i.showGenreQuestion()},i.setNoStylePreference=function(){i.setState({liveActionOnly:null}),i.showGenreQuestion()},i.setTags=function(t){i.createFilmRecommendations(t)},i.createFilmRequest=function(t){var e={englishOnly:i.state.englishOnly,colorsOnly:i.state.colorsOnly,liveActionOnly:i.state.liveActionOnly,tags:t};i.setState({filmRequest:e})},i.createFilmRecommendations=function(t){i.createFilmRequest(t),i.showRecommendations()},i.state={languageQuestion:!0,colorQuestion:!1,liveActionQuestion:!1,genreQuestion:!1,showRecommendations:!1,englishOnly:null,colorsOnly:null,liveActionOnly:null,filmRequest:null,recommendations:null},i}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsx)("div",{className:"questionnaire-content",children:t.state.languageQuestion?Object(m.jsx)(h,{setEnglishOnly:t.setEnglishOnly,setForeignOnly:t.setForeignOnly,setNoLanguagePreference:t.setNoLanguagePreference}):t.state.colorQuestion?Object(m.jsx)(g,{setColorsOnly:t.setColorsOnly,setBlackAndWhiteOnly:t.setBlackAndWhiteOnly,setNoColorPreference:t.setNoColorPreference}):t.state.liveActionQuestion?Object(m.jsx)(b,{setLiveActionOnly:t.setLiveActionOnly,setAnimationOnly:t.setAnimationOnly,setNoStylePreference:t.setNoStylePreference}):t.state.genreQuestion?Object(m.jsx)(p,{createFilmRecommendations:t.createFilmRecommendations}):t.state.showRecommendations?Object(m.jsx)(H,Object(u.a)({},t.state)):null})}}]),n}(i.Component),B=n.p+"static/media/Kon.19a21553.png",_=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).reload=function(){window.location.reload()},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"banner",children:Object(m.jsxs)("div",{className:"banner-content",onClick:this.reload,children:["Ole's Recommendations",Object(m.jsx)("img",{className:"banner-image",src:B,alt:"kon"})]})}),Object(m.jsx)("div",{className:"mainpage",children:Object(m.jsx)(W,{})})]})}}]),n}(i.Component);r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.0f5d43eb.chunk.js.map