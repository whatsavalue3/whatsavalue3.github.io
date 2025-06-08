documentlist = @DOCUMENTLIST;
namelist = @NAMELIST;

function toggleTree(element)
{
    nested = element.parentNode.childNodes[3];
    if(nested.className.indexOf("active",0) != -1)
    {
        nested.className = "sidebar nested";
        element.parentNode.childNodes[0].innerHTML = "+";
    }
    else
    {
        nested.className = "sidebar nested active";
        element.parentNode.childNodes[0].innerHTML = "-";
    }
    if(element.className.indexOf("active",0) != -1)
    {
        element.className = "spanactive"
    }
    else
    {
        element.className = "spanactive active"
    }
}

function Press(element)
{
    if(element.className.indexOf("active",0) != -1)
    {
        element.className = "spanactive active"
    }
    else
    {
        element.className = "spanactive"
    }
}

function unPress(element)
{
    if(element.className.indexOf("active",0) != -1)
    {
        element.className = "active"
    }
    else
    {
        element.className = ""
    }
}

function updateSearch()
{
    searchtext = document.getElementById("searchbox").value.toLowerCase();
    var res = [];
    var searchresults = document.getElementById("searchresults")
    searchresults.innerHTML = ""
    if(searchtext === "")
    {
        document.getElementById("filetree").style.display = "block"
        return;
    }
    else
    {
        document.getElementById("filetree").style.display = "none"
    }
    for (var i = 0; i < namelist.length; i++)
    {
        if(namelist[i].toLowerCase().indexOf(searchtext) == -1) continue;
        var searchelement = document.createElement("li");
        searchelement.className = "sidebar"
        var link = document.createElement("a");
        searchelement.appendChild(link);
        link.setAttribute("href", documentlist[i]);
        link.innerHTML = namelist[i];
        searchresults.appendChild(searchelement);
    }



}
