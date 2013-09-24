/*906b9c897a27188395418da85f829a173589fd4c*/Ext.define("ThemeApp.view.Main",{extend:"Ext.Panel",requires:["Ext.TitleBar"],config:{layout:"hbox",items:[{docked:"top",xtype:"titlebar",title:"Design Preview"},{xtype:"panel",style:"border:2px solid #444;border-left:0;",layout:"vbox",items:[{xtype:"titlebar",docked:"top",title:"Panels"},{xtype:"tabpanel",height:200,style:"border-bottom:2px solid #444;",defaults:{styleHtmlContent:true},items:[{title:"Tab 1",html:"A Panel inside a TabPanel"},{title:"Tab 2"}]},{xtype:"formpanel",height:350,style:"border-bottom:4px solid #444;border-top:2px solid #444;",items:[{xtype:"fieldset",title:"A FormPanel",instructions:"Instructions",items:[{xtype:"textfield",label:"Text"},{xtype:"selectfield",label:"Select",options:[{name:"Option1"}]},{xtype:"checkboxfield",label:"Check",checked:true},{xtype:"checkboxfield",label:"Uncheck"}]},{style:"margin-top:-15px",xtype:"button",text:"Submit Button"}]},{xtype:"tabpanel",tabBar:{layout:{pack:"center",align:"center"},docked:"bottom"},height:150,styleHtmlContent:true,items:[{title:"About",iconCls:"info",cls:"card",html:"A bottom tab page"},{title:"Favorites",iconCls:"favorites",cls:"card",badgeText:"4"},{title:"Downloads",iconCls:"download",badgeText:"Overflow",cls:"card"},{title:"Settings",iconCls:"settings",cls:"card"}]}],flex:1},{xtype:"panel",style:"border:2px solid #444",layout:"vbox",defaults:{style:"border-bottom:4px solid #444"},items:[{xtype:"titlebar",docked:"top",title:"Lists",style:""},{xtype:"list",height:202,itemTpl:"{title}",data:[{title:"Item 1"},{title:"Item 2"},{title:"Item 3"},{title:"Item 4"}]},{xtype:"list",height:250,itemTpl:"{lastName}",store:Ext.create("Ext.data.Store",{fields:["firstName","lastName"],sorters:"lastName",grouper:{groupFn:function(a){return a.get("lastName")[0]}},data:[{firstName:"Tommy",lastName:"Aristocat"},{firstName:"Rob",lastName:"Dougan"},{firstName:"Ed",lastName:"Spencer"},{firstName:"Jamie",lastName:"Avins"},{firstName:"Aaron",lastName:"Conran"},{firstName:"Dave",lastName:"Kaneda"},{firstName:"Jacky",lastName:"Nguyen"},{firstName:"Abraham",lastName:"Elias"},{firstName:"Jay",lastName:"Robinson"},{firstName:"Nigel",lastName:"White"},{firstName:"Don",lastName:"Griffin"},{firstName:"Nico",lastName:"Ferrero"},{firstName:"Jason",lastName:"Johnston"}]}),grouped:true},{xtype:"list",height:250,itemTpl:"{lastName}",store:Ext.create("Ext.data.Store",{fields:["firstName","lastName"],sorters:"lastName",grouper:{groupFn:function(a){return a.get("lastName")[0]}},data:[{firstName:"Tommy",lastName:"Avenger"},{firstName:"Rob",lastName:"Dougan"},{firstName:"Ed",lastName:"Aristocat"},{firstName:"Jamie",lastName:"Avins"},{firstName:"Aaron",lastName:"Conran"},{firstName:"Dave",lastName:"Assouly"},{firstName:"Jacky",lastName:"Nguyen"},{firstName:"Abraham",lastName:"Elias"},{firstName:"Jay",lastName:"Robinson"},{firstName:"Nigel",lastName:"White"},{firstName:"Don",lastName:"Griffin"},{firstName:"Nico",lastName:"Ferrero"},{firstName:"Jason",lastName:"Johnston"}]}),grouped:true,pinHeaders:false,ui:"round",onItemDisclosure:function(a,c,b){}}],flex:1},{xtype:"panel",style:"border:2px solid #444;border-right:none;",layout:"vbox",items:[{xtype:"panel",layout:"vbox",style:"border-bottom:2px solid #444;border-right:none;",items:[{xtype:"titlebar",docked:"top",title:"Bars",style:"margin-bottom:0;margin-top:0;"},{docked:"top",xtype:"toolbar",items:[{xtype:"searchfield",placeHolder:"Search"}]},{docked:"top",xtype:"toolbar",items:[{xtype:"textfield",placeHolder:"Text"}]},{docked:"top",xtype:"toolbar",items:[{xtype:"selectfield",options:[{text:"Select",value:"1"}]}]},{docked:"top",xtype:"toolbar",items:[{xtype:"button",text:"Button"},{xtype:"spacer"},{xtype:"button",ui:"round",badgeText:"11",text:"Rounded"},{xtype:"spacer"},{xtype:"button",ui:"action",text:"Action"}]},{docked:"top",xtype:"toolbar",title:"Navigate",items:[{xtype:"button",text:"Back",ui:"back"},{xtype:"spacer"},{xtype:"button",ui:"forward",text:"Next"}]},{xtype:"panel",styleHtmlContent:true,html:"Attached Toolbars"}]},{xtype:"panel",style:"border-top:2px solid #444;",layout:{type:"vbox",align:"center"},defaults:{xtype:"button",style:"margin-top:10px;width:90%;"},items:[{xtype:"titlebar",docked:"top",title:"Buttons",style:"margin-top:0;"},{ui:"normal",text:"normal"},{ui:"round",text:"round"},{ui:"action",text:"action"},{ui:"decline",text:"decline"},{ui:"confirm",text:"confirm"},{xtype:"segmentedbutton",allowMultiple:true,activeItem:0,items:[{text:"First"},{text:"Second"},{text:"Third"},{text:"Fourth"}]}],}],flex:1}]}});Ext.application({name:"ThemeApp",requires:["Ext.MessageBox"],views:["Main"],icon:{57:"resources/icons/Icon.png",72:"resources/icons/Icon~ipad.png",114:"resources/icons/Icon@2x.png",144:"resources/icons/Icon~ipad@2x.png"},phoneStartupScreen:"resources/loading/Homescreen.jpg",tabletStartupScreen:"resources/loading/Homescreen~ipad.jpg",launch:function(){Ext.fly("appLoadingIndicator").destroy();Ext.Viewport.add(Ext.create("ThemeApp.view.Main"))},onUpdated:function(){Ext.Msg.confirm("Application Update","This application has just successfully been updated to the latest version. Reload now?",function(){window.location.reload()})}});