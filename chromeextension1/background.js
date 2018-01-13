

var contextsList = ["selection","link","image","page"];

for(i=0;i<contextsList.length;i++){
	var context = contextsList[i];
	var titleX = "OpenNews Toolkit:Search this "+context+" ";
	chrome.contextMenus.create({title : titleX, contexts:[context], onclick:myfunction, id:context });
}
chrome.contextMenus.create({

	title:"Open News",
	contexts: ["selection"],
	onclick:myfunction

	});

function myfunction(data){
	
	switch(data.menuItemId){
		case 'selection':
		chrome.tabs.create({url:"https://aswanthkoleri.github.io/OpenNews/index.html"+data.selectionText});
		break;
		case 'link':
		chrome.tabs.create({url:"https://aswanthkoleri.github.io/OpenNews/index.html"+data.linkUrl}); 
		break;
		case 'image':
		chrome.tabs.create({url:"https://aswanthkoleri.github.io/OpenNews/index.html"+data.srcUrl}); 
		break;
		case 'page':
		chrome.tabs.create({url:"https://aswanthkoleri.github.io/OpenNews/index.html"+data.srcUrl});
		break;

	}

}