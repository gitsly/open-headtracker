YAHOO.util.Event.onDOMReady(function() {
	var cn = {
		'com' : '711-53200-19255-0',
		'at' : '5221-53469-19255-0',
		'com.au' : '705-53470-19255-0',
		'be' : '1553-53471-19255-0',
		'ca' : '706-53473-19255-0',
		'ch' : '5222-53480-19255-0',
		'de' : '707-53477-19255-0',
		'es' : '1185-53479-19255-0',
		'fr' : '709-53476-19255-0',
		'com.hk' : '3422-53475-19255-0',
		'ie' : '5282-53468-19255-0',
		'in' : '4686-53472-19255-0',
		'it' : '724-53478-19255-0',
		'nl' : '1346-53482-19255-0',
		'com.sg' : '3423-53474-19255-0',
		'co.uk' : '710-53481-19255-0'
	}
	var domainre = new RegExp("^http:\/\/(www|compare|feedback|cgi|shop|myworld|stores|members|pages|reviews|item\.mobileweb|search|r|offer|stores\.shop|desc\.shop|forums|contact|toys\.shop|toys\.search|global|cgi6)\.ebay\.([^\/]+)\/", "i");
	var a = document.getElementsByTagName("a");
	var m;

	for(i=0; i<a.length; i++)
	{
		if(a[i].getAttribute("href") && (m = a[i].getAttribute("href").match(domainre)) && cn[m[2]])
		{
			a[i].onmousedown = function ()
			{
				var m;

				try
				{
					if ((m = this.getAttribute("href").match(domainre)) && cn[m[2]])
					{
						var custom = rwt_adsource ? "&customid=" + rwt_adsource : "";
						var u = ["http://rover.ebay.com/rover/1/",cn[m[2]],"/1?ff3=4&pub=5574898371&campid=",rwt_campid,"&toolid=10001",custom,"&mpre=",escape(this.getAttribute("href"))].join("");
						var text = YAHOO.env.ua.ie > 0 ? this.innerHTML : undefined
						this.setAttribute("href", u);
						if (text != undefined)
						{
							// stupid IE changes text, too
							this.innerHTML = text;
						}
					}
					this.onmousedown = "";
				}
				catch(o) {}
				return true;
			}
		}
	}

});
