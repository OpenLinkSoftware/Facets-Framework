//var json = JSON.parse(fs.readFileSync('./content.json').toString());
/*
var fs = require('fs');
var json = JSON.parse(fs.readFileSync('./content.json').toString());
*/
/*
var json = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "/DAV/home/sdmonroe/lod.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();*/
    
//console.log(json);
//console.log(count());

/*
function count(){
var total = 0;
var triples = 0;
var rows = '';

jQuery.each(json, function(i, val) {
  triples = parseInt(val.triples) ;
  if(triples) total+=triples;
  rows += ('<tr><td>'+val._id+'</td><td>'+triples+'</td></tr>');
});

  $('table tbody').append(rows);
  $('table tbody').append('<tr><td><b>Total</b></td><td>'+total+'</td></tr>');
  return total;

}
*/


function Rainbow(){"use strict";var e=null,r=0,F=100,t=["ff0000","ffff00","00ff00","0000ff"];function n(n){if(n.length<2)throw new Error("Rainbow must have two or more colours.");var a=(F-r)/(n.length-1),i=new ColourGradient;i.setGradient(n[0],n[1]),i.setNumberRange(r,r+a),e=[i];for(var o=1;o<n.length-1;o++){var l=new ColourGradient;l.setGradient(n[o],n[o+1]),l.setNumberRange(r+a*o,r+a*(o+1)),e[o]=l}t=n}n(t),this.setSpectrum=function(){return n(arguments),this},this.setSpectrumByArray=function(e){return n(e),this},this.colourAt=function(t){if(isNaN(t))throw new TypeError(t+" is not a number");if(1===e.length)return e[0].colourAt(t);var n=(F-r)/e.length,a=Math.min(Math.floor((Math.max(t,r)-r)/n),e.length-1);return e[a].colourAt(t)},this.colorAt=this.colourAt,this.setNumberRange=function(e,a){if(!(a>e))throw new RangeError("maxNumber ("+a+") is not greater than minNumber ("+e+")");return r=e,F=a,n(t),this}}function ColourGradient(){"use strict";var e="ff0000",r="0000ff",F=0,t=100;function n(e,r,n){var a=e;a<F&&(a=F),a>t&&(a=t);var i,o=t-F,l=parseInt(r,16),u=(parseInt(n,16)-l)/o,s=Math.round(u*(a-F)+l);return 1===(i=s.toString(16)).length?"0"+i:i}function a(e){if(/^#?[0-9a-fA-F]{6}$/i.test(e))return e.substring(e.length-6,e.length);var r=e.toLowerCase();if(i.hasOwnProperty(r))return i[r];throw new Error(e+" is not a valid colour.")}this.setGradient=function(F,t){e=a(F),r=a(t)},this.setNumberRange=function(e,r){if(!(r>e))throw new RangeError("maxNumber ("+r+") is not greater than minNumber ("+e+")");F=e,t=r},this.colourAt=function(F){return n(F,e.substring(0,2),r.substring(0,2))+n(F,e.substring(2,4),r.substring(2,4))+n(F,e.substring(4,6),r.substring(4,6))};var i={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000000",blanchedalmond:"FFEBCD",blue:"0000FF",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkgrey:"A9A9A9",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"FF00FF",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",grey:"808080",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgray:"D3D3D3",lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",magenta:"FF00FF",maroon:"800000",mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370DB",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"DB7093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",slategrey:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"}}"undefined"!=typeof module&&(module.exports=Rainbow);


//** FILE: fct.js **/


var VIEW_TYPE_LIST = "list";
var VIEW_TYPE_LIST_COUNT = "list-count";
var VIEW_TYPE_PROPVAL_LIST = "propval-list";
var VIEW_TYPE_PROPERTIES = "properties"; 
var VIEW_TYPE_PROPERTIES_IN = "properties-in";
var VIEW_TYPE_TEXT_PROPERTIES = "text-properties";
var VIEW_TYPE_CLASSES = "classes";
var VIEW_TYPE_TEXT = "text";
var VIEW_TYPE_TEXT_D = "text-d";
var VIEW_TYPE_ALPHABET = "alphabet";
var VIEW_TYPE_GEO = "geo";
var VIEW_TYPE_GEO_LIST = "geo-list";
var VIEW_TYPE_YEARS = "years";
var VIEW_TYPE_MONTHS = "months";
var VIEW_TYPE_WEEKS = "weeks";
var VIEW_TYPE_ENTITIES_LIST = "entities-list";
var VIEW_TYPE_GRAPHS = "graphs";
var VIEW_TYPE_DESCRIBE = "describe";

var NODE_TYPE_PROPERTY = "property";
var NODE_TYPE_PROPERTY_OF = "property-of";
var NODE_TYPE_CLASS = "class";
var NODE_TYPE_TEXT = "text";
var NODE_TYPE_VIEW = "view";
var NODE_TYPE_VALUE = "value";

var ID_QUERY = "0";
var ID_TEXT = "1";
var ID_VIEW = "2";

var ATTR_GRAPH_LABEL = "graphLabel";

// lifespan of query cache item, in hours
var POLICY_CACHE_REFRESH = 0; // TODO: not yet implemented


/* xml root element - because html() does not include the root element and we want to 
 * include <report /> in the output. There may be a better way to do this.
 */
var _root = $('<vios />');

var query, text, view;

var fct_isDebug = true;

var fct_getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

var fct_isPermalink = false;
var fct_queryTimeout = '5000';

function fct_init(){

  // Simple helper function creates a new element from a name, so you don't have to add the brackets etc.
  $.createElement = function(name)
  {
      return $('<'+name+' />');
  };

  // JQ plugin appends a new element created from 'name' to each matched element.
  $.fn.appendNewElement = function(name)
  {
      this.each(function(i)
      {
          $(this).append('<'+name+' />');
      });
      return this;
  }

  $.fn.appendNewAttribute = function(name, value)
  {
      this.each(function(i)
      {
          $(this).attr(name, value);
      });
      return this;
  }


  var qxml = fct_getUrlParameter('qxml');

  if(qxml && qxml.length > 0){
    idct = fct_getUrlParameter('idCt');
    fct_isPermalink = true;
    _root.append($.parseHTML(qxml));

  }
  else {
    _root.append
    (
        // one method of adding a basic structure
        $('<query/>').attr('class', ID_QUERY).append
        // (
        //     $('<text class="'+ID_TEXT+'"/>')
        // ).append
        (
            $('<view class="'+ID_VIEW+'"/>')
                .appendNewAttribute('limit', '')
                .appendNewAttribute('type', '')
                .appendNewAttribute('offset', '')
        )
        // example of our plugin
        //.appendNewElement('property')
        //.appendNewAttribute('', '')
    );
  }

  // get a reference to query
  query = _root.find('query');

  text = query.find('text');
  view = query.find('view');


    //setQueryText('VIOS');
    //test();
    //setViewType(VIEW_TYPE_CLASSES);
    setViewLimit(SIZE_RESULT_SET);
    setViewOffset(0);
}

function getQuery(){
  return $(_root.children('query')); //TODO: this code needs to be refactored to use getter/setters in place of the calls to _root, also, need to replace the string concats with more efficient routines
}

function setQueryText(str){
  if(str == VALUE_DEFAULT_KEYWORDS_TEXT) {
    str = '';
    $('#keywords').val('');
  }
  query = getQuery();
  if( (!str || str.length <= 0) && $(_root.find('query > view')).attr('type') != 'list-count') return;
  if(_root.find('text').length <= 0) {
    query.append('<text class="'+ID_TEXT+'"/>');
    //text = _root.find('text');
  }
  query.find('text').text(str);
  if(!isExpandSearch) {
    query.find('text').attr('property', 'http://www.w3.org/2000/01/rdf-schema#label');
    $('#showMeMenu > option[value=text-properties]').remove();
  }
  else {
    query.find('text').removeAttr('property');
    var textOption =  $.createElement('option');
    textOption.attr('class', $('#showMeMenu > option[value='+VIEW_TYPE_PROPERTIES+']').attr('class'));
    textOption.val(VIEW_TYPE_TEXT_PROPERTIES);
    textOption.text('Text');
    $('#showMeMenu > option[value='+VIEW_TYPE_PROPERTIES+']').after(textOption);
  }
  query.find('text').attr('label', str.split('  ').join(' ').split(' ').join(' + '));

  var clearKeywords = $('span.clear-data').filter(function() {return $(this).text().indexOf('Keywords') >= 0;});
  clearKeywords.parent().removeClass('hide');
}

function getQueryGraph(){
  var g = _root.find('query').attr('graph');
  //if(!g || g.length <= 0) g = LABEL_ROOT;
  return g;
}

function getQueryGraphLabel(){
  var g = _root.find('query').attr(ATTR_GRAPH_LABEL); 
  //if(!g || g.length <= 0) g = LABEL_ROOT;
  return g;
}

function setQueryGraph(g, label){
  _root.find('query').attr('graph', g);
  _root.find('query').attr(ATTR_GRAPH_LABEL, label);
  var clearLibrary = $('span.clear-data').filter(function() {return $(this).text().indexOf('Library') >= 0;});
  clearLibrary.parent().removeClass('hide');
}

function clearQueryGraph(){
  _root.find('query').removeAttr('graph');
  _root.find('query').removeAttr(ATTR_GRAPH_LABEL);
  var clearLibrary = $('span.clear-data').filter(function() {return $(this).text().indexOf('Library') >= 0;});
  clearLibrary.parent().addClass('hide');
}

function getQueryText(){
  return _root.find('query text').text();
}

function setViewType(type, q){
  $(q).find('view').attr('type', type);
}

function setMutex(mtx, type, isCount){
  if(isCount) {
    if(type == 'showMeMenu'){
      $('#showMeCount').attr('mutex', mtx);
    }
    else if(type == 'groupByMenu'){
      $('#groupByCount').attr('mutex', mtx);
    }
    else if(type == 'table'){
      $('#tableCount').attr('mutex', mtx);
    }
  }
  else if(type == 'record'){
    $('#angular_recordViewer').attr('mutex', mtx);
  }
  else if(type == VIEW_TYPE_PROPERTIES || type == VIEW_TYPE_CLASSES || type == VIEW_TYPE_PROPERTIES_IN || type == VIEW_TYPE_GRAPHS || type == VIEW_TYPE_TEXT_PROPERTIES){
    $('#showMeColumn').attr('mutex', mtx);
  }
  else if(type == VIEW_TYPE_LIST || type == VIEW_TYPE_LIST_COUNT || type == VIEW_TYPE_TEXT){
    $('#recordsListWidgetContainer').attr('mutex', mtx);
  }
}

function getMutex(type, isCount){
  if(isCount) {
    if(type == 'showMeMenu'){
      return $('#showMeCount').attr('mutex');
    }
    else if(type == 'groupByMenu'){
      return $('#groupByCount').attr('mutex');
    }
    else if(type == 'table'){
      return $('#tableCount').attr('mutex');
    }
  }
  else if(type == 'record'){
    return $('#angular_recordViewer').attr('mutex');
  }
  else if(type == VIEW_TYPE_PROPERTIES || type == VIEW_TYPE_CLASSES || type == VIEW_TYPE_PROPERTIES_IN || type == VIEW_TYPE_GRAPHS || type == VIEW_TYPE_TEXT_PROPERTIES){
    return $('#showMeColumn').attr('mutex');
  }
  else if(type == VIEW_TYPE_LIST || type == VIEW_TYPE_LIST_COUNT || type == VIEW_TYPE_TEXT){
    return $('#recordsListWidgetContainer').attr('mutex');
  }
}

function setViewLimit(lim){
  _root.find('view').attr('limit', lim);
}

function setViewOffset(offset){
  _root.find('view').attr('offset', offset);
}

function getViewType(type){
  return _root.find('view').attr('type');
}

function getViewLimit(lim){
  return parseInt(_root.find('view').attr('limit'));
}

function getViewOffset(lim){
  return parseInt(_root.find('view').attr('offset'));
}


function getSparql(xml){
  return $($(xml).find("fct\\:sparql")[0]).text();
}

function getTime(xml){
  return $($(xml).find("fct\\:time")[0]).text();
}

function getComplete(xml){
  return $($(xml).find("fct\\:complete")[0]).text();
}

function getTimeout(xml){
  return $($(xml).find("fct\\:timeout")[0]).text();
}

function getDbActivity(xml){
  return $($(xml).find("fct\\:db-activity")[0]).text();
}

//var fct_sparql, fct_time, fct_complete, fct_timeout, fct_dbActivity;

var dataspace = 'http://lod.openlinksw.com';
var service_fct = getProxyEndpoint(dataspace) + "/fct/service";
var service_sparql = getProxyEndpoint(dataspace) + "/sparql";
var service_fct_label = "LOD";
var dataspaceAdded = false;

//var service_fct = "http://myopenlink.net/fct/service";

// returns a Java hashCode, see here: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
String.prototype.hashCode = function(){
  var hash = 0;
  if (this.length == 0) return hash;
  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

// TODO: need to implement a super-fast server-side cache as a fallback if the local cache does not contain the query
// the last resort is to execute the query against the cluster
// save the remote cached value locally
var fct_cache = {}; // results will be cached in this object
var fct_isCache = true;

function removeCacheItem(id){
try{
    resp = localStorage.removeItem(id);
  }
  catch(err){ // TODO: what if localstorage is available, but something else went wrong on this try
    delete cache.id;
  }
}

function fct_removeVariableData(query){
  query.removeAttr('label');
  query.removeAttr('varname');
  query.removeAttr('class');


  query.find('*').removeAttr('class');
  query.find('*').removeAttr('label');
  query.find('*').removeAttr('varname');
  query.find('*').removeAttr('isGroupBy');
  query.removeAttr('timeout');
  return query;
}

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

function getProxyEndpoint(url){
//  if(url == 'http://lod.openlinksw.com') url = 'http://dbpedia.org';
  if(url == 'http://localhost' || url == 'http://localhost/') return url;
  if(url.startsWith('http://127.0.0.1')) return url;
  url = url.replace('http://', 'http/');
  url = url.replace('https://', 'https/');
//  return 'http://poc.vios.network/proxy/-start-'+url+'-end-';
  return 'http://poc.vios.network/proxy/'+url;
  //return url;
}

function getGGGURL(url){
  if(url.startsWith('http://dbpedia.org/')) return url;
  if(url.startsWith('http://localhost/')) return url;
  if(url.startsWith('http://127.0.0.1/')) return url;
  url = url.replace('http://', 'http/');
  url = url.replace('https://', 'https/');
  //url = url.replace('http://', 'http/');
  //url = url.replace('https://', 'https/');
//  return 'http://poc.vios.network/proxy/-start-'+url+'-end-';
  return 'http://linkeddata.uriburner.com/about/html/'+url;
  //return url;
}


var mainSparql = '';
function fct_query(q, viewType, opt){
  var tstamp = new Date().getTime();
  if(!opt) opt = new Object();
  opt.focusId = getFocus(q).attr('class');
  $('[data-toggle="tooltip"]').tooltip('hide');
  fct_queryTimeout = getQueryTimeout();
  q = q.clone();
  fct_isCache = $('#isCache').is(':checked');
  fct_isDebug = $('#isDebug').is(':checked');
  //console.clear();
  setViewType(viewType, q);
  //q = _root.find('query *').removeAttr('class'); // be sure semantically equivalent queries are non-unique
  //console.log('query: ' + _root.find('query').prop('outerHTML'));
  if(fct_isDebug) console.log("Query: " + $(q).prop('outerHTML') );
  if(q.children.length == 2 && q.find('text').text() == '') q.find('text').remove(); // POI: root query should  have missing text element rather than blank text node, the /fct returns distinct results for each
  q = fct_removeVariableData(q);
  var qstr = q.prop('outerHTML');
  var id = (qstr) ? (service_fct+qstr).hashCode() : 0;
  setMutex(id, viewType);
  ha.push(id);
  q.attr('timeout', fct_queryTimeout); // add all neccessary variable data back to the query
  var resp;
  if(fct_isCache){
    try{
      resp = localStorage.getItem(id);
      if(!resp || resp.length == 0) resp = fct_cache[id];
    }
    catch(err){ // TODO: what if localstorage *is* available, but something else went wrong on this try
      resp = fct_cache[id];
      if(fct_isDebug) console.log('Cache failed: ' + err);
    }
  }
  $('#dataSpaceLabel').removeClass('text-danger');
  $('#dataSpaceLabel').parent().children('i').removeClass('text-danger');

  if (resp != null) { // if exist on cache
        switch(viewType){
          case VIEW_TYPE_LIST: {
            mainSparql = getSparql(resp);
            fct_handleListResults(resp, opt);
          } break;
          case VIEW_TYPE_LIST_COUNT: {
            mainSparql = getSparql(resp);
            fct_handleListCountResults(resp, opt);
          } break;
          case VIEW_TYPE_TEXT: {
            fct_handleTextResults(resp, opt);
          }; break;
          case VIEW_TYPE_CLASSES: {
            fct_handleClassesResults(resp, opt);
          }; break;
          case VIEW_TYPE_PROPERTIES: {
            fct_handlePropertiesResults(resp, opt);
          }; break;
          case VIEW_TYPE_PROPERTIES_IN: {
            fct_handlePropertiesInResults(resp, opt);
          }; break;
          case VIEW_TYPE_TEXT_PROPERTIES: {
            fct_handleTextPropertiesResults(resp, opt);
          }; break;
          case VIEW_TYPE_GRAPHS: {
            fct_handleGraphResults(resp, opt);
          }; break;
          case VIEW_TYPE_GEO_LIST: {
            fct_handleGeoListResults(resp, opt);
          }; break;
    }
  $('[data-toggle="tooltip"]').tooltip();
    updatePermalink();
    return;
  }
  var req = $.ajax({
      url: service_fct,
      headers: {'X-VIOS-Type': 'fct', 'X-VIOS-QID': createId()},
      data: $(q).prop('outerHTML'), 
      type: 'POST',
      contentType: "text/xml",
      dataType: "text", // POI: can't do dataType: xml, since the service sometimes returns malformed XML
      cache: fct_isCache,
      beforeSend: function(jqXHR, settings) {
          jqXHR.url = settings.url;
          jqXHR.data = settings.data;
      },
            success : function(xml) {

        var filter = '';
        if(!xml.startsWith('<')) {
          filter = xml.substring(0, xml.indexOf('<fct:facets'));
          xml = xml.substring(xml.indexOf('<fct:facets'));
          //xml = xml.replace('fct:facets ', 'fct:facets sparql="' + sparql + '" ');
        }
        xml = xml.replace('fct:facets ', 'fct:facets timestampResp="' + new Date().getTime() + '" ');
        xml = xml.replace('fct:facets ', 'fct:facets timestampReq="' + tstamp + '" ');
        xml = xml.replaceAll('xml:lang', 'lang');
        //xml = xml.replace('fct:','');

        /* there's a bug that causes "filter ..." to appear at the beginning of the response body, sometimes
        for example, this query

        <query class='0'><text class="1">Sherman</text><property iri="http://www.openlinksw.com/schema/attribution#providedBy"><value iri="http://www.linkedin.com#this" datatype="uri"></value></property><view class="2" limit="30" type="list-count" offset="0"></view></query>

        */

          //console.log("it works");

          //if(!opt) opt = new Object();
          var sparql = getSparql(xml);
          sparql = sparql.replace('} group', filter + '} group');

          var time = getTime(xml);
          var complete = getComplete(xml);
          var timeout = getTimeout(xml);
          var dbActivity = getDbActivity(xml);
        /**/
        if(fct_isDebug){
          console.log("Sparql: " + sparql );
          console.log("Time: " + time );
          console.log("Complete: " + complete );
          console.log("Timeout: " + timeout );
          console.log("Db Activity: " + dbActivity );
          console.log("View Type: " + viewType);
        }

        $('#reportQueryTime').text(time + ' ms');
        $('#reportQueryTimeout').text(timeout + ' ms');
        $('#reportQueryComplete').text(complete);

        if(complete === 'no') {
            fct_handleIncompleteResults($("fct\\:row", xml).length, opt, viewType, sparql, time, complete, timeout, dbActivity);
            if(fct_isDebug) console.log('Results incomplete! Cache id: ' + id); // TODO: need to handle this by asking the user to increase the timeout of this query
        }
        if(complete === 'yes' || isCachable($("fct\\:row", xml).length)) { // POI: don't cache incomplete results, should this be the policy? I clicked phone on the below link, and got no results and incomplete error, but it cached the results
          // so I had to turn cache off (or increase timeout) to get the actual list, but when I turn cache back on, I get the empty results that were cached on the timeout response
        // http://myopenlink.net/DAV/home/sdmonroe/poc_draft.html?groupBy=GROUPBY-NONE&showMe=properties&qxml=%3Cquery%20class%3D%220%22%20graph%3D%22%22%20graphlabel%3D%22%22%3E%3Cclass%20class%3D%22-589865979%22%20iri%3D%22http%3A%2F%2Flinkedgeodata.org%2Fontology%2FShop%22%20label%3D%22Shop%22%3E%3C%2Fclass%3E%3Ctext%20class%3D%221%22%20label%3D%22%22%3E%3C%2Ftext%3E%3Cview%20class%3D%222%22%20limit%3D%2230%22%20type%3D%22properties%22%20offset%3D%220%22%3E%3C%2Fview%3E%3C%2Fquery%3E

          if(fct_isCache){
            try{
              localStorage.setItem(id, xml);
            }
            catch(err){
              fct_cache[id] = xml;
              if(fct_isDebug) console.log('Cache failed: ' + err);
            }
          }
        }
              if(getMutex(viewType) != id){ // POI: make sure to cache the results always!, i.e. place this after the cache above
                return;
              }
        
        switch(viewType){
          case VIEW_TYPE_LIST: {
            mainSparql = sparql;
            fct_handleListResults(xml, opt);
          } break;
          case VIEW_TYPE_LIST_COUNT: {
            mainSparql = sparql;
            fct_handleListCountResults(xml, opt);
          } break;
          case VIEW_TYPE_TEXT: {
            fct_handleTextResults(xml, opt);
          }; break;
          case VIEW_TYPE_CLASSES: {
            fct_handleClassesResults(xml, opt);
          }; break;
          case VIEW_TYPE_PROPERTIES: {
            fct_handlePropertiesResults(xml, opt);
          }; break;
          case VIEW_TYPE_PROPERTIES_IN: {
            fct_handlePropertiesInResults(xml, opt);
          }; break;
          case VIEW_TYPE_TEXT_PROPERTIES: {
            fct_handleTextPropertiesResults(xml, opt);
          }; break;
          case VIEW_TYPE_GRAPHS: {
            fct_handleGraphResults(xml, opt);
          }; break;
          case VIEW_TYPE_GEO_LIST: {
            fct_handleGeoListResults(xml, opt);
          }; break;
        }
                
  $('[data-toggle="tooltip"]').tooltip();
      },
      error : function (xhr, ajaxOptions, thrownError){  
        if(fct_isDebug){
          console.log(xhr.status);          
          console.log(thrownError);
          if(xhr.status == 500) alert('Server error: ' + thrownError + ' from ' + xhr.url);
          if(xhr.status == 400) alert('Server error: ' + thrownError + ' from ' + xhr.url);
        }
        var currentdataspace = $('#dataSpaceMenu :selected').attr('value');
        var currentdataspacelabel = $('#dataSpaceMenu :selected').text();
        /*
        window.open(
          'mailto:sdmonroe@gmail.com?subject=Data%20server%20error&body=' +
                'The server '+currentdataspacelabel+' ('+currentdataspace+') threw this error: ' + 
                '%0A%0AError message: ' + thrownError + 
                '%0ADate: '+formatDate(new Date()) +
                '%0AUrl: ' + xhr.url + 
                '%0AStatus: ' + xhr.status + 
                '%0APOST data: %0A'+ encodeURIComponent( xhr.data )+
                ''
        );
        */
        fct_handleError(xhr, ajaxOptions, thrownError);
        if(xhr.url == service_fct){
          $('#dataSpaceLabel').addClass('text-danger');
          $('#dataSpaceLabel').parent().children('i').addClass('text-danger');
        }
      } 
  });
  updatePermalink();
  return req;
}

function fct_sparql(sparql, opt){
  var tstamp = new Date().getTime();
  if(!opt) opt = new Object();
  fct_isCache = $('#isCache').is(':checked');
  fct_isDebug = $('#isDebug').is(':checked');
  fct_queryTimeout = $('#queryTimeout :selected').attr('value');
  //console.clear();
  //setViewType(viewType, q);
  //q = _root.find('query *').removeAttr('class'); // be sure semantically equivalent queries are non-unique
  //console.log('query: ' + _root.find('query').prop('outerHTML'));
  //q = q.clone();
  if(fct_isDebug) console.log("Sparql: " + sparql);
  //if(q.children.length == 2 && q.find('text').text() == '') q.find('text').remove(); // POI: root query should  have missing text element rather than blank text node, the /fct returns distinct results for each
  //q = fct_removeVariableData(q);
  //var qstr = q.prop('outerHTML');
  //var qstr = q.prop('outerHTML');
  var sparqlSvr = (opt.srv) ? opt.srv : service_sparql;
  var id = sparql ? (sparqlSvr + sparql).hashCode() : 0;
  setMutex(id, opt.tar, true);
  //q.attr('timeout', fct_queryTimeout);
  var resp;
  if(fct_isCache){
    try{
      resp = localStorage.getItem(id);
      if(!resp || resp.length == 0) resp = fct_cache[id];
    }
    catch(err){ // TODO: what if localstorage *is* available, but something else went wrong on this try
      resp = fct_cache[id];
    }
  }

  $('#dataSpaceLabel').removeClass('text-danger');
  $('#dataSpaceLabel').parent().children('i').removeClass('text-danger');

  if (resp != null) { // if exist on cache
    //console.log('sparql results: ' + resp);

            if(!opt.tar){
                mainSparql = sparql;
               fct_handleSparqlResults(resp, opt);
            }
            else {
              if(opt.tar == 'showMeMenu'){
                if(getMutex(opt.tar, true) != id){
                  return;
                }
                fct_handleSparqlShowMeCount(resp, opt);
              }
              else if(opt.tar == 'groupByMenu'){
                if(getMutex(opt.tar, true) != id){
                  return;
                }
                fct_handleSparqlGroupByCount(resp, opt);
              }
              else if(opt.tar == 'table'){
                if(getMutex(opt.tar, true) != id){
                  return;
                }
                fct_handleSparqlTableCount(resp, opt);
              }
              else if(opt.tar == 'subject'){
                fct_handleSparqlSubject(resp, opt);
              }
              else if(opt.tar == 'record'){
                if(getMutex(opt.tar, true) != id){
                  //return;
                }
                fct_handleSparqlDescribe(resp, opt);
              }
            }

    updatePermalink();
    return;
  }

  var accept = 'application/sparql-results+xml';
  if(opt.tar == 'record') accept = 'application/rdf+xml';
  var req = $.ajax({
      url: sparqlSvr + "?query=" + encodeURIComponent(sparql),
      type: 'GET',
      headers: {'Accept': accept, 'X-VIOS-Type': 'sparql', 'X-VIOS-QID': createId()},
      dataType: "text", // POI: can't do dataType: xml, since the service sometimes returns malformed XML
      beforeSend: function(jqXHR, settings) {
          jqXHR.url = settings.url;
      },
          success : function(xml) {
        xml = xml.replace('sparql ', 'sparql timestampResp="' + new Date().getTime() + '" ');
        xml = xml.replace('sparql ', 'sparql timestampReq="' + tstamp + '" ');

            xml = xml.replaceAll('xml:lang', 'lang');

            if(!opt.tar){
              mainSparql = sparql;
              fct_handleSparqlResults(xml, opt);
            }
            else {
              if(opt.tar == 'showMeMenu'){
                if(getMutex(opt.tar, true) != id){
                  return;
                }
                fct_handleSparqlShowMeCount(xml, opt);

              }
              else if(opt.tar == 'groupByMenu'){
                if(getMutex(opt.tar, true) != id){
                  return;
                }
                fct_handleSparqlGroupByCount(xml, opt);
              }
              else if(opt.tar == 'table'){
                if(getMutex(opt.tar, true) != id){
                  return;
                }
                fct_handleSparqlTableCount(xml, opt);
              }
              else if(opt.tar == 'subject'){
                fct_handleSparqlSubject(xml, opt);
              }
              else if(opt.tar == 'record'){
                if(getMutex(opt.tar, true) != id){
                  //return;
                }
                fct_handleSparqlDescribe(xml, opt);
              }
            }
          //console.log('sparql results: ' + xml);
          if(fct_isCache){
            try{
              localStorage.setItem(id, xml);
            }
            catch(err){
              fct_cache[id] = xml;
            }
          }
                
      },
      error : function (xhr, ajaxOptions, thrownError){  
        if(fct_isDebug){
          console.log(xhr.status);          
          console.log(thrownError);
          if(xhr.status == 500) alert('Server error' + thrownError + " from " + xhr.url);
        }
        fct_handleError(xhr, ajaxOptions, thrownError);
        if(xhr.url == service_fct){
          $('#dataSpaceLabel').addClass('text-danger');
          $('#dataSpaceLabel').parent().children('i').addClass('text-danger');
        }
      } 
  });
  updatePermalink();
  return req;  
}

function save(title){
  var s = 'INSERT into <http://www.vios.network/l/SmartFolders> {<'+$('#permalink').attr('href')+'> <http://www.w3.org/2000/01/rdf-schema#label> "' + title + '"}';
  var opt = new Object();
  opt.srv = 'http://data.vios.network/sparql';
  fct_sparql(s);
}

function fct_handleSparqlShowMeCount(xml, opt){
  var results = $(xml).find('results');
  $('result', results).each(function(i){
    var ct = $(this).text().trim();
    var x = showMePage+1;
    x = x * SIZE_RESULT_SET;
    if(x > ct) x = ct;
    $('#showMeCount').text( x + ' / ' + ct);
  });
}

function fct_handleSparqlGroupByCount(xml, opt){
  var results = $(xml).find('results');
  $('result', results).each(function(i){
    var ct = $(this).text().trim();
    var x = page+1;
    x = x * SIZE_RESULT_SET;
    if(x > ct) x = ct;
    $('#groupByCount').text( x + ' / ' + ct);
  });
}

function fct_handleSparqlTableCount(xml, opt){
  var results = $(xml).find('results');
  $('result', results).each(function(i){
    var ct = $(this).text().trim();
    var x = pageTable+1;
    x = x * SIZE_TABLE_RESULT_SET;
    if(x > ct) x = ct;
    $('#tableCount').text( x + ' / ' + ct);
  });
  tablePage();
}

/*
function fct_handleSparqlSubject(xml, opt){
  var seen = new Array();

  var results = $(xml).find('results');
  $('result', results).each(function(i){
    if(i == 0){
      $('#'+opt.id).append('&nbsp;&nbsp;');
    }
    var o = $($(this).children('binding[name="o"]'));
    var l = $($(this).children('binding[name="lab"]'));
    var p = $($(this).children('binding[name="pLab"]'));
    var objIRI =  o.text().trim();
    var objLabel = (l && l.length > 0) ? l.text().trim() : processLabel(objIRI);
    var subPropIRI = opt.propIRI;//$($(this).children('binding')[2]).text().trim();
    var subPropIRILabel = (p && p.length > 0) ? p.text().trim() : processLabel(subPropIRI);
    if(seen.indexOf(objLabel) >= 0){
      return;
    }
    seen.push(objLabel);
    var badge = $.createElement('span');
    badge.addClass('badge');
    badge.addClass('badge-pill');
    badge.addClass('badge-primary');
//&nbsp;&nbsp;&nbsp;<span  class="hide badge badge-pill badge-primary" >subject</span>    
    badge.text(objLabel);
    badge.removeClass('hide');
    badge.on('click', function(e){
      addPropertyFacet(opt.id, subPropIRI, subPropIRILabel, objIRI, objLabel, 'uri', '', true);
      doQuery(getQueryText());
    });
    $('#'+opt.id).append(badge);
  });
}
*/

function fct_handleSparqlSubject(xml, opt){
  var seen = new Array();
  var subs = getMainFocus().children('property[iri="http://purl.org/dc/terms/subject"], property[iri="http://www.w3.org/1999/02/22-rdf-syntax-ns#subject"]');
  if(subs){
    subs.each(function(i){
      var vals = $(this).children('value');
      if(vals && vals.length > 0){
        seen.push(vals.text());
      }
    });
  }

  var subs = getMainFocus().parent('property[iri="http://purl.org/dc/terms/subject"], property[iri="http://www.w3.org/1999/02/22-rdf-syntax-ns#subject"]');
  if(subs && getMainFocus().prop('nodeName').toLowerCase() == 'property-of'){
    subs.each(function(i){
      var vals = $(this).children('value');
      if(vals && vals.length > 0){
        seen.push(vals.text());
      }
    });
  }  

  var results = $(xml).find('results');
  $('result', results).each(function(i){
    if($('#'+opt.id).children().length > 0) return;
    if(i == 0){
      $('#'+opt.id).append('&nbsp;&nbsp;');
    }
    var sub = $($(this).children('binding')[0]).text().trim();
    var subLabel = $($(this).children('binding')[1]).text().trim();
    if(!subLabel || subLabel.length < 0) subLabel =  processLabel(sub);
    var subPropIRI = $($(this).children('binding')[2]).text().trim();
    if(seen.indexOf(sub) >= 0){
      return;
    }
    seen.push(sub);
    var badge = $.createElement('span');
    badge.addClass('badge');
    badge.addClass('badge-pill');
    badge.addClass('badge-primary');
    //badge.css('font-weight', 'normal');
    var len = subLabel.length + $('#'+opt.id).parent().children('h6').text().length;
    if(subLabel.length < 45) badge.addClass('badge-subject');
//&nbsp;&nbsp;&nbsp;<span  class="hide badge badge-pill badge-primary" >subject</span>    
    badge.text(subLabel);
    badge.removeClass('hide');
    badge.on('click', function(e){
      addPropertyFacet(opt.id, subPropIRI, processLabel(subPropIRI), sub, subLabel, 'uri', '', true);
      doQuery(getQueryText());
    });
    $('#'+opt.id).append(badge);
  });
}

function fct_handleSparqlDescribe(xml, opt){
  loadDescribeResults(xml, opt);
}

function fct_handleGeoListResults(xml, opt){
    loadGeoListResults(xml);
    $('#showMeMenu').removeClass('loading');
}

function toggleChartHeaders(){
  setVerticalChartHeaders(!isVerticalChartHeaders());
  doQuery(getQueryText());
}

function isChart(){
  return showChart;
}
function setChart(b){
  showChart = b;
  updatePermalink();
}
function getChartProperty(){
  return chartProperty;
}
function setChartProperty(prop){
  chartProperty = prop;
}

function isRollup(){
  return showRollup;
}
function setRollup(b){
  showRollup = b;
  updatePermalink();

}
function toggleRollup(){
  setChart(!isChart());
}

function buildResultTableHeaders(r1, r2, varNames, varCt, node){
  // the SPARQL projection items are listed in depth-first order, starting from the focus
  
  /*
if(!$(varNames[varCt]).attr('name')){
  console.log('ct: ' + varCt + ' node: ' + $(node).prop('nodeName'));
  return;
}*/
  //console.log('ct: ' + varCt + ' node: ' + $(node).prop('nodeName'));



  if(!node) node = getMainFocus();
  var id = node.attr('class');
  var label = node.attr('label');
  var iri = node.attr('iri');
  var col = $.createElement('th');
  col.attr('iri', iri);
  col.attr('label', label);
 col.attr('contextId', id);

  var action = 'remove';
  var outline = '';
  var val = node.children('value');
  var classes = node.children('class');
  var isPropOf = node.prop('nodeName').toUpperCase() == 'property-of'.toUpperCase();

  col.attr('isReverse', isPropOf);
try{
      node.attr('varname', $(varNames[varCt]).attr('name').replace('?', ''));
    }
    catch(e){
      console.log('err: ' + e + ', ' + varNames);
    }
      varCt++;

var valStr = VALUE_ANON_NODE;

          if(!val || val.length <= 0) {
            if(!classes || classes.length <= 0) action = "removeValue";
            if(id == ID_QUERY) valStr = label;

            else{
                if(classes && classes.length > 0){
                  valStr = classes.attr('label');
                }
                else {
                  valStr = VALUE_ANON_NODE;
                }
            }
        }
        else {
          valStr = val.text();
        }

        outline = ((!val || val.length <= 0)) ? 'outline-': '';

          //var ret = '<div style="padding: 0px; background-color:transparent;" class="row" title="'+tooltip+'" id="nav'+id+'" '+focus+'>';
          var colStr = '';
          //col += '<div onclick="javascript:'+action+'(\''+id+'\')" class="via text-ellipsis">';
          //colStr += '<h3 class="fw-semi-bold" style="padding-bottom:4px">';
          colStr += label;
          colStr += ((isPropOf)?'&nbsp;of&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>':'');
          //colStr += '</h3>';
          //colStr += '</div>';

var color = '000000';// colourNames[getRandomKey(colourNames)];
var rainbow = new Rainbow(); 
rainbow.setNumberRange(1, node.parents().length +1);
rainbow.setSpectrum('#'+color, '#ffffff'); //'#e9ecef', d7daddff //'#e9ecef'
col.css('color', '#' + rainbow.colourAt( (node.parents().length <= 2) ? 1 : node.parents().length - 1));

rainbow = new Rainbow(); 
rainbow.setNumberRange(1, node.parents().length +1);
rainbow.setSpectrum('#e9ecef', '#ffffff'); //'#e9ecef', d7daddff //'#e9ecef'
col.css('background-color', '#ffffff');
//col.css('background-color', '#' + rainbow.colourAt( (node.parents().length <= 2) ? 1 : node.parents().length - 1));


  col.html(colStr);
//  row.append(col);
  r1.value += col.prop('outerHTML');


    col = $.createElement('td');
          colStr = '<button id="focusTableValue'+id+'" class="btn-rounded-f btn btn-'+outline+'default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">';
          colStr += processLabel(valStr);
          colStr += '</button>';
  col.html(colStr);
//  row2.append(col);
  r2.value += col.prop('outerHTML');
          //ret += '</div>';



  node.children('property, property-of').each(function (i){
    buildResultTableHeaders(r1, r2, varNames, varCt, $(this));
  });

  r1.count++;
}

function tablePage(){
//if(true) return;
        if(pageTable == 0){
          $("#leftTableButton").attr('disabled', 'true');
          $("#leftTableButton").addClass('disabled');
          $('#leftTableButton').removeAttr('title');
        }
        else{

          $("#leftTableButton").removeAttr('disabled');
          $("#leftTableButton").removeClass('disabled');
          //$('#leftButton').attr('title', 'page ' + (page));
          setTitle('leftButton', 'page ' + (pageTable), 'bottom');

        }
      if(tableResultsCt < SIZE_TABLE_RESULT_SET) {
        $("#rightTableButton").attr('disabled', 'true');
        $("#rightTableButton").addClass('disabled');
        $('#rightTableButton').removeAttr('title');
      }
      else {
        $("#rightTableButton").removeAttr('disabled');
        $("#rightTableButton").removeClass('disabled');
       // $('#rightButton').attr('title', 'page ' + (page+2));
          setTitle('rightTableButton', 'page ' + (pageTable+2), 'bottom');

      }
}


function fct_handleSparqlResults(xml, opt) {
    $('#resultsTable > thead').empty();
    $('#resultsTable > tbody').empty();
    $('#resultsTable').removeClass('table-header-rotated');
    //console.log('xml' + $(xml).html());
    var results = $(xml).find('results');
    if (isChart()) {
        var headerPrefix = (getMainFocus().children('property, property-of') && getMainFocus().children('property, property-of').length > 0) ? $(getMainFocus().children('property, property-of')[0]).attr('label') : '';
        headerPrefix = spaceCamelCase(headerPrefix);
        headerPrefix = headerPrefix.replace(/\b\w/g, function(l) {
            return l.toUpperCase()
        });
        headerPrefix = (getMainFocus().children('property, property-of') && getMainFocus().children('property, property-of').length > 0 && $(getMainFocus().children('property, property-of')[0]).prop('nodeName').toLowerCase() == 'property-of' && !headerPrefix.toLowerCase().endsWith('of')) ? headerPrefix + ' Of' : headerPrefix;
        $('#tableType').text(headerPrefix + ' ' + TABLE_HEADER_LABEL_CHART);
    } 
    else if(isRollup()){
        var headerPrefix = (getMainFocus().children('property, property-of') && getMainFocus().children('property, property-of').length > 0) ? $(getMainFocus().children('property, property-of')[0]).attr('label') : '';
        headerPrefix = spaceCamelCase(headerPrefix);
        headerPrefix = headerPrefix.replace(/\b\w/g, function(l) {
            return l.toUpperCase()
        });
        headerPrefix = (getMainFocus().children('property, property-of') && getMainFocus().children('property, property-of').length > 0 && $(getMainFocus().children('property, property-of')[0]).prop('nodeName').toLowerCase() == 'property-of' && !headerPrefix.toLowerCase().endsWith('of')) ? headerPrefix + ' Of' : headerPrefix;
        $('#tableType').text(headerPrefix + ' ' + TABLE_HEADER_LABEL_TREE);
    }
    else {
        var headerPrefix = spaceCamelCase(getMainFocus().attr('label'));
        if(getMainFocus().attr('class') == ID_QUERY && (headerPrefix.toLowerCase() == 'name' || headerPrefix.toLowerCase() == 'keywords')) headerPrefix = getQueryText();
        headerPrefix = spaceCamelCase(headerPrefix);
        headerPrefix = headerPrefix.replace(/\b\w/g, function(l) {
            return l.toUpperCase()
        });
        headerPrefix = (getMainFocus().prop('nodeName').toLowerCase() == 'property-of' && !headerPrefix.toLowerCase().endsWith('of')) ? headerPrefix + ' Of' : headerPrefix;       
        $('#tableType').text(headerPrefix + ' ' + TABLE_HEADER_LABEL_DETAILS);
    }

    //tableResultsCt = $("result", results).length;
    //fct_handleSparqlTableCount(xml, opt);


    var row, row2, col;
    row = $.createElement('tr');
    row2 = $.createElement('tr');
    var variables = $("variable", xml);

    //labels={};

    var varCt = 0;
    var r1 = new Object();
    var r2 = new Object();
    r1.value = '';
    r1.count = 0;
    r2.value = '';
    r2.count = 0;
    buildResultTableHeaders(r1, r2, variables, varCt);
    if (!isChart()) row.append(r1.value);
    if (!isChart()) row2.append(r2.value);
    var colCount = r1.count; // row.children('th').length;

    tableResultsCt = $("result", results).length;
    /*
        variables.each(function(j) {
            col = $.createElement('th');
            var label = $(this).attr('name');
            label = $(_root.find(    '[varname=' +    label   + ']'  )[0]).attr('label') ;
            col.text(label);
            col.addClass('resultTableHeader');

            var recordView = $.createElement('span');
            recordView.text('Record View');
            recordView.on('click', function (e){
              undoTable();
            });
            col.append(recordView);
            if($(this).attr('name').indexOf('o1') == -1){
                row.append(col);
            }
        });

    */


    var matrixMap = {};
    var matrixKeys = new Array();
    var matrixValues = new Array();
    //var matrixColumnIndex = 0;

    if (!isChart()) $('#resultsTable > thead').append(row);
    if (!isChart()) $('#resultsTable > thead').append(row2);
    //if(!isChart()) $('#resultsTableFocus > thead').append(row);
    //if(!isChart()) $('#resultsTableFocus > thead').append(row2);


    var rows = '';
    $("result", results).each(function(i) {
        row = $.createElement('tr');
        var cols = {};
        variables.each(function(j) {
            col = $.createElement('td');
            var header = $(this).attr('name');
            //if(header.indexOf('?o')==-1) col.addClass('resultTableCell');
            if (header.indexOf('o1') == -1) { // make text results optional
                cols[header] = col;
            }
            //console.log('fcthsr: header: ' + header);
        });
        //console.log($(this).html());

        var matrixKey;
        $("binding", this).each(function(j) {
            if (j >= colCount) return; // POI: this only works because the resultset is listed properly, and this is due to the structure of the SPARQL returned from FCT


            $(this).attr('label', $($('#resultsTable > thead > tr > th')[j]).attr('label'));
            // char logic
            if (isChart()) {
                if (j == 0) {
                    matrixKey = $(this);
                    if (matrixKeys.indexOfText(matrixKey.text()) < 0) {
                        matrixKeys.push(matrixKey);
                        matrixMap[matrixKey.text()] = new Array();
                    }
                } else if (j == 1) { // POI: the compare table compares the first property listed for the focus
                    if (matrixMap[matrixKey.text()].indexOfText($(this).text()) < 0) matrixMap[matrixKey.text()].push($(this));
                    if (matrixValues.indexOfText($(this).text()) < 0) matrixValues.push($(this));
                }
            }

            var header = $(this).attr("name");
            var value = $(this).text();
            var datatype = $($(this).children()[0]).prop('nodeName').toLowerCase();
            if (datatype == 'literal') datatype = 'http://www.openlinksw.com/schemas/facets/dtp/plainstring';
            var lang = $($(this).children()[0]).attr('lang');
            var label = value;
            if (datatype == 'uri') {
                label = getLabel(value);
                if (!label) label = processLabel(value);
                //label = getFavicon(value) + '&nbsp;<h6 class="text-ellipsis m-0" >' + label + '</h6>';
                value = label;
            }


            //console.log('fcthsr: header2: ' + header);
            col = cols[header];
            if (col) {
                //                col.append("<span>"+value+"</span>");

                var id = createId();
                var str = '';

                //str += '<a data-target="#">';


                if(j == 0 && isRollup()) str += '<i class="la la-bars expand float-right"></i>';
                //str += '<span class="thumb-sm float-left mr">';
                var onclick = 'onclick="javascript:setValue(\'' + id + '\', \'' + value + '\', \'' + label + '\', \'' + datatype + '\', \'' + lang + '\')"';
                if(isRollup() && j == 0) onclick = 'onclick="javascript: addClassFacet(\''+id+'\', \''+sanitizeLabel($(this).text())+'\', \''+sanitizeLabel(label)+'\')"';

                if (j > 0) {
                    var propCol = $($('<tr>' + r1.value + '</tr>').children('th')[j]);
                    var propIRI = propCol.attr('iri');
                    var propLabel = propCol.attr('label');
                    var contextId = propCol.attr('contextId');

                    var nodePropType = (propCol.attr('isReverse') == 'true') ? NODE_TYPE_PROPERTY_OF : NODE_TYPE_PROPERTY;

                    onclick = 'onclick="javascript:setPropertyValue(\'' + id + '\', \'' + nodePropType + '\', \'' + contextId + '\', \'' + sanitizeLabel(propIRI) + '\', \'' + sanitizeLabel(propLabel) + '\', \'' + sanitizeLabel($(this).text()) + '\', \'' + sanitizeLabel(label) + '\', \'' + datatype + '\', \'' + lang + '\')"';
                }

                if (j == 0) {

                    if (datatype == 'uri') {
                        //str += '<img class="pull-right" style="cursor:pointer" onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" ' + onclick + ' alt="..." class="rounded-circle" src="' + getFaviconUrl($(this).text()) + '"/>&nbsp;';
                        //str += '<i class="status status-bottom bg-success"></i>';
                    } else {
                        str += '<span onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" ' + onclick + ' class="pull-right icon-literal glyphicon glyphicon-tag"></span>';
                    }

                } // if j == 0


                //str += '</span>';




                label = deSanitizeLabel(label);
                if(datatype == 'uri') label = '<a href="#">' + label + '</a>';
                var labelLink = (datatype == 'uri') ? '' + buildTitle($(this).text()) : '';
                //str += '<h6 >';
                str += '<span ' + onclick + ' ' + labelLink + '>' + label + '</span>';

                //str += '</h6>';
                //str += '</a>';

                if(j == 0) col.attr('nowrap', 'true');
                col.append(str);
                if(isRollup() && j > 0) col.css('text-align', 'right');

                if (!isChart()) row.append(col);
            }
        });

        if (!isChart()) rows += row.prop('outerHTML');

    });
    if (!isChart()) $('#resultsTable > tbody').append(rows);


    // chart logic
    if (isChart()) {
        $('#resultsTable > thead').empty();
        $('#resultsTable > tbody').empty();
        //$('#resultsTableFocus > thead').empty();
        //$('#resultsTableFocus > tbody').empty();
        if (isVerticalChartHeaders()) $('#resultsTable').addClass('table-header-rotated');
        //$('#resultsTableFocus').addClass('table-header-rotated');

        // build headers
        row = $.createElement('tr');
        r1 = new Object();
        r1.value = '';
        r1.value += '<tr>';
        //r2.value = '';
        //r2.value += '<tr >';
        for (i = 0; i < matrixValues.length; i++) {
            if (i == 0) {
                r1.value += '<th  style="vertical-align:bottom;text-align:center;cursor:pointer;" class="rotate"><div></div></th>';
            }
            var value = matrixValues[i].text();
            var label = (value) ? getLabel(value) : '';
            if (!label) label = processLabel(value);
            var h = matrixValues[i].attr("name");
            var v = matrixValues[i].text();
            var d = (matrixValues[i].children().length > 0) ? $(matrixValues[i].children()[0]).prop('nodeName').toLowerCase() : '';
            var str = '';
            if (getMainFocus().children('property, property-of').length > 0) {
                var propIRI = $(getMainFocus().children('property, property-of')[0]).attr('iri');
                var propLabel = $(getMainFocus().children('property, property-of')[0]).attr('label');
                var rand = Math.random(); //createId(); // 'mtxhd' + i;
                var contextId = undefined; // $( getMainFocus().children('property, property-of')[0] ).attr('class');
                str = ' onclick="javascript: setPropertyValue(\'' + rand + '\', \'' + NODE_TYPE_PROPERTY + '\', ' + ((contextId) ? '\'' + contextId + '\'' : 'undefined') + ', \'' + propIRI + '\', \'' + propLabel + '\', \'' + v + '\', \'' + sanitizeLabel(label) + '\', \'' + d + '\', \'\')" ';
            }
            //if(label.length >= 40) label = label.substring(0, 23) + ' ...';
            r1.value += '<th style="vertical-align:middle;text-align:center;cursor:pointer;" ' + str + ' class="rotate"><div><span>' + label + '</span></div></th>';
        }
        r1.value += '</tr>';
        //r2.value += '</tr>';
        $('#resultsTable > thead').append(r1.value);
        //$('#resultsTableFocus > thead').append(r2.value);

        // add rows
        r1 = new Object();
        r1.value = '';
        //r2 = new Object();
        //r2.value = '';
        for (i = 0; i < matrixKeys.length; i++) {
            //var valueComp = (matrixMap[matrixKeys[i].attr('id')]) ? matrixMap[matrixKeys[i].attr('id')].text() : '';
            //var labelComp = (valueComp) ? labels[valueComp] : '';
            //if(!labelComp) labelComp = processLabel(valueComp);


            r1.value += '<tr>';
            //r2.value += '<tr>';
            var valueKey = matrixKeys[i].text();
            var labelKey = (valueKey) ? getLabel(valueKey) : '';
            if (!labelKey) {
                labelKey = processLabel(valueKey);
            }
            for (j = 0; j < matrixValues.length; j++) {
                var h = matrixKeys[i].attr("name");
                var v = matrixKeys[i].text();
                var d = (matrixKeys[i].children().length > 0) ? $(matrixKeys[i].children()[0]).prop('nodeName').toLowerCase() : '';
                if (j == 0) {
                    //var mcolId = createId();
                    //r1.value += '<td '+buildTitle(v)+' style="text-align:left;" class="text-nowrap" onclick="javascript:setValue(\'mtxcola-' + i + '-' + j + '\', \'' + v + '\', \'' + sanitizeLabel(labelKey) + '\', \'' + d + '\', \'\')"><span class="thumb-sm float-left mr"><img class="rounded-circle" src="' + getFaviconUrl(v) + '"/><i class="status status-bottom bg-success"></i></span> ' + labelKey + '</td>';
                  r1.value += '<td style="vertical-align:middle;text-align:left;cursor:pointer;" class="text-nowrap" onclick="javascript:setValue(\'mtxcola-'+i+'-'+j+'\', \''+v+'\', \''+sanitizeLabel(labelKey)+'\', \''+d+'\', \'\')"><span>'+labelKey+'</span></td>';//<img class="pull-right" src="'+getFaviconUrl(v)+'">&nbsp;
                    //            var str = '<td onclick="javascript:setValue(\''+createId()+'\', \''+v+'\', \''+labelKey+'\', \''+d+'\', \'\')">'+labelKey+'</td>';
                    //row.append('<td>'+labelKey+'</td>');
                }
                var value = matrixValues[j].text();
                var label = (value) ? getLabel(value) : '';
                //var sanitizedLabel = label;
                if (!label) {
                    label = processLabel(value);
                    //sanitizedLabel = sanitizeLabel(sanitizedLabel);
                }

                var cellVal = (matrixMap[matrixKeys[i].text()] && matrixMap[matrixKeys[i].text()].indexOfText(value) >= 0) ? '<span class="glyphicon glyphicon-ok"></span>' : ''; // la la-check glyphicon glyphicon-ok
                var noLeftBorder = '';
                if (j == 0) noLeftBorder = 'border-left:0px solid transparent; ';
                r1.value += '<td style="' + noLeftBorder + 'vertical-align:middle;text-align:center;cursor:pointer;" onclick="javascript:setValue(\'mtxcolb-' + i + '-' + j + '\', \'' + sanitizeLabel(v) + '\', \'' + sanitizeLabel(labelKey) + '\', \'' + d + '\', \'\')">' + cellVal + '</td>';
            }
            r1.value += '</tr>';
            //r2.value += '</tr>';
        }
        $('#resultsTable > tbody').append(r1.value);
        //$('#resultsTableFocus > tbody').append(r2.value);
    }

    if ($('#resultsTable > tbody').children().length <= 0 || $('#resultsTable > tbody > tr').children().length <= 0) {
        if(isChart()) $($('#resultsTable > tbody > tr')[0]).append('<td style="vertical-align:middle;text-align:left;cursor:pointer;" ><i class="text-danger fa fa-exclamation-circle p-2"></i>The focus must be assigned a Field or Role in order to activate this view</td>');
        else if(isRollup()) $($('#resultsTable > tbody')[0]).append('<tr><td style="vertical-align:middle;text-align:left;cursor:pointer;" ><i class="text-danger fa fa-exclamation-circle p-2"></i>The focus must be assigned a Category in order to activate this view</td></t>');
    }




    $('#tableSaveOptions').empty();
    var saveOptions = '';
    saveOptions += '<li><a class="dropdown-item" onclick="exportTableToCSV(\'results.csv\')">CSV</a></li>';
    saveOptions += '<li><a class="dropdown-item" href="#">XML</a></li>';
    saveOptions += '<li><a class="dropdown-item" href="#">JSON</a></li>';
    if (inbox || storage) saveOptions += '<li class="dropdown-divider"></li>';
    if (inbox) saveOptions += '<li><a class="dropdown-item" href="' + getInbox() + '" ' + buildTitle(getInbox(), 'right') + '>Save to Inbox</a></li>';
    if (storage) saveOptions += '<li><a class="dropdown-item" href="' + getStorage() + '" ' + buildTitle(getStorage(), 'right') + '>Save to Storage</a></li>';
    $('#tableSaveOptions').append(saveOptions);
    $('[data-toggle="tooltip"]').tooltip();
    $('#groupByTableHeader').removeClass('loading');
}

function isCachable(sz){
  return sz >= 0.7 * SIZE_RESULT_SET;
}

function fct_handleIncompleteResults(resultSize, opt, viewType, fct_sparql, fct_time, fct_complete, fct_timeout, fct_dbActivity){
  if(resultSize > 0) return;
   beep();
   $('.slider-handle').addClass('incompleteAlert');

   var componentId;
        switch(viewType){
          case VIEW_TYPE_LIST: {
            componentId = 'recordsListWidgetContainer';
          } break;
          case VIEW_TYPE_LIST_COUNT: {
            if(!opt.tag) {
                componentId = 'recordsListWidgetContainer';
            }
            else {
              if(opt.tag == TAG_PROPERTY){
                  componentId = 'showMeColumn';
              }
              else if(opt.tag == TAG_PROPERTY_OF){
                  componentId = 'showMeColumn';
              }
              else if(opt.tag == TAG_CLASS){
                  componentId = 'showMeColumn';
              }
              else{
                componentId = 'recordsListWidgetContainer';
              }
            }
            
          } break;
          case VIEW_TYPE_TEXT: {
            componentId = 'recordsListWidgetContainer';
          }; break;
          case VIEW_TYPE_CLASSES: {
            componentId = 'showMeColumn';
          }; break;
          case VIEW_TYPE_PROPERTIES: {
            if(opt == OPT_SEND_TO_GROUP_BY){
              componentId = 'recordsListWidgetContainer';
            }
          }; break;
          case VIEW_TYPE_PROPERTIES_IN: {
            componentId = 'showMeColumn';
          }; break;
          case VIEW_TYPE_TEXT_PROPERTIES: {
            componentId = 'showMeColumn';
          }; break;
          case VIEW_TYPE_GRAPHS: {
            componentId = 'showMeColumn';
          }; break;
        }

   $('#'+componentId).addClass('incompleteComponentAlert');
   setTimeout(function(){
        $('.slider-handle').removeClass('incompleteAlert');
        $('#'+componentId).removeClass('incompleteComponentAlert');
   }, 2000);
}


function fct_handleError(xhr, ajaxOptions, thrownError){
  $('.loading').removeClass('loading');
}

function fct_handleListResults(xml, opt){
          loadInstances(xml, opt);
          $('#' + opt.parentId).removeClass('loading');
          $('#groupByHeader').removeClass('loading');



}

function fct_handleListCountResults(xml, opt){
  var showme = $('#showMeMenu :selected').attr('value');
  if(opt && opt.tag){
    //console.log('opt:'+opt)
      if(opt.tag == TAG_PROPERTY){
          if(showme === VIEW_TYPE_PROPERTIES || showme === VIEW_TYPE_TEXT_PROPERTIES){
            loadPropertyValues(xml, opt);
          }
          $('#' + opt.parentId).removeClass('loading'); 
          $('#groupByHeader').removeClass('loading');
      }
      else if(opt.tag == TAG_PROPERTY_OF){
          if(showme === VIEW_TYPE_PROPERTIES_IN){
            loadPropertyOfValues(xml, opt);
          }
          $('#' + opt.parentId).removeClass('loading'); 
          $('#groupByHeader').removeClass('loading');
      }
      else if(opt.tag == TAG_CLASS){
          if(showme === VIEW_TYPE_CLASSES){
            loadClassInstances(xml, opt);
          }
          $('#' + opt.parentId).removeClass('loading'); 
          $('#groupByHeader').removeClass('loading');
      }
    
  }
      else {
        $('#angular_recordViewer').attr('src', '');
      //  $('#'+viewType+'').empty();


        if(!$('#recordFormColumn').hasClass('hide')) {
          if(!$('#recordFormColumn').hasClass('dont-touch')){
          buildForm();
          }
          else {
            $('#recordFormColumn').removeClass('dont-touch');
          }
        }
        if(!opt || !opt.isTablePaging) pageTable = 0;

        var sparql = processSparql(xml, true); // POI: for now, let the table share the Record's list limit and offset
        var focus = getSparqlFocus(sparql);
        if(!opt) opt = new Object();
        opt.tar = 'groupByMenu';
//        opt.tar = 'showMeMenu';
        sparqlMap[opt.focusId] = sparql;
        fct_sparql(getSparqlCount(sparql, VIEW_TYPE_PROPERTIES), opt);

        loadGroupByResults(xml, focus);
        $('#groupByHeader').removeClass('loading');
        //$('#focusHeader').removeClass('loading');


        //console.log('focus: ' + focus);

        if(isTableShowing() && !isRollup()) loadTable();

        //fct_query(query, VIEW_TYPE_GEO_LIST);

          
      }
}

var sparqlMap = {};
var sparqlCategoryMap = {};
//var mainQuerySparql;
//var mainQueryCategoriesSparql;

function loadTable(){


if(isRollup()){

  var sparql = sparqlCategoryMap[getMainFocus().attr('class')];
  if(!sparql) return;
          var focus = getSparqlFocus(sparql);
          //console.log('focus: ' + focus);
          var vars = getSparqlSumVars(sparql);
          vars = vars.substring(vars.indexOf('sum(' + focus + ') as ' + focus + 'sum') + ('sum(' + focus + ') as ' + focus + 'sum' ).length );
          /*
          (sparql.match(/\s+\?([s|p|o|c]\d)|\?g\s+/mgi).sort()
             .filter(function(element, index, array) {
                 return index == array.indexOf(element) && array[index].indexOf('?c') == -1 && array[index].indexOf('?g'); // don't return duplicates and remove count vars 
             }) + '').replaceAll(',', ' ');
             */
          //vars = vars.substring(vars.indexOf(focus)); // limit the view to the focus and its children, the sort above ensures the vars are listed in the order they are listed in the query
          //console.log("sparql vars: "+vars);
          //console.log("Sparql: " + sparql );
          sparql = setSparqlProjection(sparql, focus + ' ' + vars);

//        sparql = sparql.substring(0, sparql.lastIndexOf('}')) + sparql.substring(sparql.lastIndexOf('}') + 1);
        sparql += 'limit ' + SIZE_TABLE_RESULT_SET;
        sparql += ' offset ' + pageTable * SIZE_TABLE_RESULT_SET;

        if(isChart()){
          sparql = sparql.replace(/limit\s+\d+/gi, 'limit ' + SIZE_MATRIX_RESULT_SET);
          sparql = sparql.replace(/offset\s+\d+/gi, 'offset ' + pageTable * SIZE_MATRIX_RESULT_SET);
          //sparql = sparql.replace(/offset\s+\d+/gi, '');
        }


        if(!sparql.match(/select\s+distinct/gi)){
          sparql = sparql.replace('select ', 'select distinct ');
        }

        // only root classes
        sparql = sparql.replace('a ' + focus + ' .', 'a ' + focus + ' . FILTER NOT EXISTS {'+focus+' a '+focus+'class. FILTER('+focus+'class != <http://www.w3.org/2000/01/rdf-schema#Class>)}');


        $('#groupByTableHeader').addClass('loading');
        fct_sparql(sparql);

        opt = new Object();
        opt.tar = 'table';
        //var sparql = processSparql(xml);
        sparql = sparqlCategoryMap[getMainFocus().attr('class')]; // undo alterations
        sparql = sparql.replace(/limit\s+\d+/gi, '');
        sparql = sparql.replace(/offset\s+\d+/gi, '');
        fct_sparql(getSparqlCount(sparql), opt);
}


else {

    var sparql = sparqlMap[getMainFocus().attr('class')];
  if(!sparql) return;
        var focus = getSparqlFocus(sparql);
        var vars = getSparqlVars(sparql);
        /*
        (sparql.match(/\s+\?([s|p|o|c]\d)|\?g\s+/mgi).sort()
           .filter(function(element, index, array) {
               return index == array.indexOf(element) && array[index].indexOf('?c') == -1 && array[index].indexOf('?g'); // don't return duplicates and remove count vars 
           }) + '').replaceAll(',', ' ');
           */
        vars = vars.substring(vars.indexOf(focus)); // limit the view to the focus and its children, the sort above ensures the vars are listed in the order they are listed in the query
        //console.log("sparql vars: "+vars);
        //console.log("Sparql: " + sparql );
        sparql = setSparqlProjection(sparql, vars);

        sparql = sparql.substring(0, sparql.lastIndexOf('}')) + sparql.substring(sparql.lastIndexOf('}') + 1);
        sparql = sparql.replace(/offset\s+\d+/gi, 'offset ' + pageTable * SIZE_TABLE_RESULT_SET);
        sparql = sparql.replace(/limit\s+\d+/gi, 'limit ' + SIZE_TABLE_RESULT_SET);
        sparql += '}';

        if(isChart()){
          sparql = sparql.replace(/limit\s+\d+/gi, 'limit ' + SIZE_MATRIX_RESULT_SET);
          sparql = sparql.replace(/offset\s+\d+/gi, 'offset ' + pageTable * SIZE_MATRIX_RESULT_SET);
          //sparql = sparql.replace(/offset\s+\d+/gi, '');
        }

        //sparqlMap[opt.focusId] = sparql;
        $('#groupByTableHeader').addClass('loading');
        fct_sparql(sparql);

        opt = new Object();
        opt.tar = 'table';
        //var sparql = processSparql(xml);
        sparql = sparqlMap[getMainFocus().attr('class')]; // undo alterations
        sparql = sparql.replace(/limit\s+\d+/gi, '');
        sparql = sparql.replace(/offset\s+\d+/gi, '');
        fct_sparql(getSparqlCount(sparql), opt);
}


}

function processSparql(xml, retainLimit){
  var sparql = $($(xml).find("fct\\:sparql")[0]).text().trim();
  while(sparql.indexOf('  ') > 0) sparql = sparql.replaceAll('  ', ' ');
  if(sparql.indexOf('group')>0) {
    var limit = '';
    if(sparql.indexOf('limit')>0){
      limit = sparql.substring(sparql.indexOf('limit'));
    }
    sparql = sparql.substring(0, sparql.indexOf('group')) + ((retainLimit) ? limit : '');
  }
  return sparql;

}

function getSparqlFocus(sparql){
  var focus = sparql.match(/select\s*\?(s|p|ip|o|c)\d+(p|o|c|ip|textp)?\s+/mgi)[0]; // POI: the ?o1 var must be part of the projection, or the SPARQL engine will complain, it is referenced in the ORDER clause
  focus = focus.substring(focus.indexOf('select ')+'select '.length);
  return focus.trim();
}

function getSparqlVars(sparql){
  var vars = (sparql.match(/\s+\?((s|p|ip|o|c)\d+(p|o|c|ip|textp)?)|\?g\s+/mgi).sort()
             .filter(function(element, index, array) {
                 return index == array.indexOf(element) && array[index].indexOf('?c') == -1 && array[index].indexOf('?g') == -1 && array[index].indexOf('textp') == -1; // don't return duplicates and remove count vars 
             }) + '').replaceAll(',', ' ');
  if(vars.indexOf('?o1')==-1)vars = '?o1 ' + vars; // ?o1 is required for text match
  return vars;
}

function getSparqlSumVars(sparql){
  var vars = sparql.match(/\s+\?([s]\d+)\s+/mgi).sort().filter(function(element, index, array) {
                 return index == array.indexOf(element); // don't return duplicates and remove count vars 
             });
  var varStr = '';
  vars.forEach(function (v){
    v = v.trim();
    varStr += ' sum(' + v + ') as ' + v + 'sum ';
  });
  //if(vars.indexOf('?o1')==-1)vars = '?o1 ' + vars; // ?o1 is required for text match
  return varStr;
}

function setSparqlProjection(sparql, projection){
    sparql = sparql.replace(/select.*where/gi, 'select ' + projection + ' where');
    sparql = sparql.replace(/{\s*select.*distinct.*?{/gi, '{ select distinct ' + projection + ' {'); // besure to use .*? non-greedy match to match only the first curly brace
    return sparql;
}

function getSparqlCount(sparql, type){
  var ctVar = (type==VIEW_TYPE_GRAPHS) ? '?g' : getSparqlFocus(sparql);
  var distinctStr = 'distinct ';
  switch(type) {
//    case VIEW_TYPE_CLASSES: ctVar = ctVar + 'c'; break;
//    case VIEW_TYPE_PROPERTIES: ctVar = ctVar + 'p'; break;
//    case VIEW_TYPE_PROPERTIES_IN: ctVar = ctVar + 'ip'; break;
//    case VIEW_TYPE_TEXT_PROPERTIES: ctVar = ctVar + 'textp'; break;
    case VIEW_TYPE_GRAPHS: ctVar = '?g'; break; // redundant
    case VIEW_TYPE_TEXT: distinctStr=''; break; //ctVar = '?o1'
    default: ctVar = getSparqlFocus(sparql); break;
  }
  if(VIEW_TYPE_TEXT != type && sparql.indexOf('group')>0) sparql = sparql.substring(0, sparql.indexOf('group'));
  sparql = setSparqlProjection(sparql, 'count('+distinctStr+ctVar+') as ?c1');
  if(sparql.match(/{\s*select.*distinct.*?{/gi)){
    sparql = sparql.substring(sparql.indexOf('select')+6);
    sparql = sparql.substring(sparql.indexOf('select'), sparql.lastIndexOf('}'));
  }
  //if(sparql.indexOf('distinct') < 0) sparql = sparql.replace('select ', 'select distinct ');
  if(type == VIEW_TYPE_TEXT) {
    if(sparql.indexOf('order') > 0) sparql = sparql.substring(0, sparql.lastIndexOf('order'));
    if(sparql.indexOf('limit') > 0) sparql = sparql.substring(0, sparql.lastIndexOf('limit'));
    sparql = sparql.replace('define input:storage virtrdf:IRI_Rank_Storage', '');
  }
  return sparql;
}


function getSPARQLDescribe(uri, isURIBurner){
  if(isURIBurner || dataspace == 'http://linkeddata.uriburner.com'){
    var doc = uri;
    if(doc.indexOf('#') > 0) {
      doc = doc.substring(0, doc.lastIndexOf('#'));
    }
    //return 'define get:soft "soft" describe <' + uri + '> from <'+doc+'>';
    return 'describe <' + uri + '>';
  }
  return 'describe <' + uri + '>';
}


function fct_handleTextResults(xml, opt){
    var groupby = $('#groupByMenu :selected').attr('value');
    loadTextResults(xml);
    $('#groupByHeader').removeClass('loading');
    //$('#focusHeader').removeClass('loading');
    $('#groupByCount').text('0/0');
        var sparql = processSparql(xml, true); // POI: for now, let the table share the Record's list limit and offset
        var focus = getSparqlFocus(sparql);
        if(!opt) opt = new Object();
        opt.tar = 'groupByMenu';
//        opt.tar = 'showMeMenu';
        //sparqlMap[opt.focusId] = sparql;
        fct_sparql(getSparqlCount(sparql, VIEW_TYPE_TEXT), opt);

    /*
    var opt = new Object();
    opt.tar = 'groupByMenu';
    var sparql = processSparql(xml);
    fct_sparql(getSparqlCount(sparql, VIEW_TYPE_TEXT), opt);
    */

    //updatePermalink();
}

function fct_handleClassesResults(xml, opt){
    var showme = $('#showMeMenu :selected').attr('value');
    if(showme === VIEW_TYPE_CLASSES){
      loadCategoriesResults(xml);
    }
    $('#showMeHeader').removeClass('loading');
//    if(!opt) opt = new Object();





/*
        if(!$('#recordFormColumn').hasClass('hide')) {
          if(!$('#recordFormColumn').hasClass('dont-touch')){
          buildForm();
          }
          else {
            $('#recordFormColumn').removeClass('dont-touch');
          }
        }
        if(!opt || !opt.isTablePaging) pageTable = 0;
*/
        //loadGroupByResults(xml, focus);
        //$('#groupByHeader').removeClass('loading');
        //$('#focusHeader').removeClass('loading');
        //if(!opt) opt = new Object();
        //opt.tar = 'groupByMenu';
        var sparql = processSparql(xml);
        sparqlCategoryMap[opt.focusId] = sparql;
        opt.tar = 'showMeMenu';
        fct_sparql(getSparqlCount(sparql, VIEW_TYPE_CLASSES), opt);

        //sparqlMap[opt.focusId] = sparql;

        if(isTableShowing() && isRollup()) loadTable();

        //fct_query(query, VIEW_TYPE_GEO_LIST);


}

function fct_handlePropertiesResults(xml, opt){
    var showme = $('#showMeMenu :selected').attr('value');
    /*if(opt == OPT_SEND_TO_GROUP_BY){
      // $('#'+viewType+'').empty();
        //loadGroupByMenu(xml);
        //$('#groupByHeader').removeClass('loading');

        if(qGroupBy && qGroupBy.length > 0){
            var qgb = decodeURIComponent(qGroupBy);
            //if(qgb.endsWith(DELIMIT_GROUP_BY_REVERSE_PROPERTY)){
              //qgb = GROUP_BY_NONE_VALUE;
            //}
            var gbjson = JSON.parse(qgb);
            //selectMenuItem('groupByMenu', qgb.iri);
            doGroup(gbjson.iri, gbjson.label, gbjson.isReverse);
            //selectGroupBy(true);
            //if(isDebug) console.log('groupByLoaded: ' + qgb + ', old value:' + qGroupBy);
            //doQuery(keywords);
            //selectGroupBy();
        }
        else {
            //if(isDebug) console.log('groupByNotLoaded: ' + qgb + ', old value:' + qGroupBy);
        }

    }*/
    //else {
      if(showme === VIEW_TYPE_PROPERTIES){
        loadPropertiesResults(xml);
      }
      $('#showMeHeader').removeClass('loading');
      var opt = new Object();
      opt.tar = 'showMeMenu';
      var sparql = processSparql(xml);
      fct_sparql(getSparqlCount(sparql, VIEW_TYPE_PROPERTIES), opt);
    //}
}

function fct_handlePropertiesInResults(xml, opt){
    var showme = $('#showMeMenu :selected').attr('value');
    if(showme === VIEW_TYPE_PROPERTIES_IN){
      loadPropertiesInResults(xml);
    }
    $('#showMeHeader').removeClass('loading');
    var opt = new Object();
    opt.tar = 'showMeMenu';
    var sparql = processSparql(xml);
    fct_sparql(getSparqlCount(sparql, VIEW_TYPE_PROPERTIES_IN), opt);
}

function fct_handleTextPropertiesResults(xml, opt){
    var showme = $('#showMeMenu :selected').attr('value');
    if(showme === VIEW_TYPE_TEXT_PROPERTIES){
      loadPropertiesResults(xml);
    }
    $('#showMeHeader').removeClass('loading');
    var opt = new Object();
    opt.tar = 'showMeMenu';
    var sparql = processSparql(xml);
    fct_sparql(getSparqlCount(sparql, VIEW_TYPE_TEXT_PROPERTIES), opt);
}

function fct_handleGraphResults(xml, opt){
    var showme = $('#showMeMenu :selected').attr('value');
    if(showme === VIEW_TYPE_GRAPHS){
      loadGraphResults(xml);
    }
    $('#showMeHeader').removeClass('loading');
    var opt = new Object();
    opt.tar = 'showMeMenu';
    var sparql = processSparql(xml);
    fct_sparql(getSparqlCount(sparql, VIEW_TYPE_GRAPHS), opt);
}

function hasMainFocus(id){
  //if(id == ID_TEXT) id = ID_QUERY;
  var test = $(_root.find('.'+ID_QUERY+ ' view')).parent();
  var ret = test.attr('class');
  /*if($(test).attr('class') == ID_TEXT){
    ret = q.find('view');
    //console.log('query ('+ret+'): ' + query.html());
  }*/
  return ret == id;
}

function getMainFocus(){
  return $(_root.find('.'+ID_QUERY + ' view')).parent();
}

function getFocus(q){
  return q.find('view').parent();
}

function takeFocus(tar, q){
  //console.log('tarid: ' + $(tar).attr('class') + ' qId: ' + $(q).attr('class'));
  $(q).find('view').appendTo(tar);
}

function takeMainFocus(id, silent, lastFocus){

  // POI: clicking the root node if the focus is already root takes user back to default view type
  /*if(isTableShowing() || isFormShowing()){
    if(lastFocus == id){
      if(isTableShowing()) undoTable();
      else if(isFormShowing()) hideForm(); 
    }
  }*/

  //if(id == ID_TEXT) id = ID_QUERY;
  var query = getQuery();
  takeFocus( _root.find('.'+id), getFocus(query));
  //console.log('query after take focus: ' + $('query').html());

  resetPaging();
  //pageTable = 0;


  if(!silent) doQuery(getQueryText());
  //$('#breadcrumbs').find('td').removeClass('focus');
  //$('#facetCollector').find('td').removeClass('focus');
  //$('#nav'+((id == ID_QUERY) ? ID_TEXT : id) ).addClass('focus');

}

function remove(id, silent){
    exitGroupBy(id);

  // give focus to parent if hasFocus
  // remove from the query
  // remove from breadcrumbs and facetCollector
  // re-run the query
    //query = _root.find('query');

    if(!id || id.length <= 0) return;

  if(id == ID_QUERY) {
    if(!_root.find('query').attr('graph') || _root.find('query').attr('graph').length <= 0){ // POI: in the directory structure, the graph is below the keywords, and repository is above the keywords, and root is root
      $(_root.find('query text')).remove(); // POI: the /fct API returns different results depending on if <text> has empty string value, or if <text> is missing
      clearKeywords();
    }
    else{
      clearQueryGraph();
    }
  }
  else {
    takeMainFocus($(_root.find('.'+id )).parent().attr('class'), silent);
    $(_root.find('.'+id )).remove();
  }

  if(!silent) doQuery(getQueryText());

}

function removeValue(id){
    exitGroupBy(id);

  var tar = _root.find('.'+id + ' > value')
  if(tar.length > 0) tar.remove();
  else{
    tar = _root.find('.'+id + ' > class')
    if(tar.length > 0) tar[0].remove();
  }
  //query = _root.find('query');
  doQuery(getQueryText());
}

function removeFacet(id){
  if(hasMainFocus(id)){
    takeMainFocus($(_root.find('.'+id )).parent().attr('class'), true);
  }
 // console.log('removeFacet: ' + id);
  _root.find('.'+id).remove();
  doQuery(getQueryText());
}

function setValue(id, val, valLabel, datatype, lang){
    exitGroupBy(id);

  val = deSanitizeLabel(val);
  valLabel = deSanitizeLabel(valLabel);
  var p = getMainFocus();

  //if(p.attr('id') == ID_QUERY) clearKeywords();
  
  var v_found = false;
  var v = _root.find('.'+p.attr('class') + ' > value');
  if(v.length <= 0) {
    v = $.createElement('value');
  }
  else v_found = true;
  v.attr('label', valLabel);
  v.text(val);
  if(datatype && datatype.length > 0 && datatype !== 'undefined') v.attr('datatype', datatype);
  if(lang && lang.length > 0 && lang !== 'undefined') v.attr('lang', lang);
  //v.attr('same_as', 'yes');
  _root.find('.'+p.attr('class')).append(v);
  

  //getMainFocus().find('view').attr('offset', 0);
  resetPaging();
  //pageTable = 0;

  //if(fct_isDebug) console.log('setView query: ' + query.html());
  //query = _root.find('query');

  doQuery(getQueryText());

  //getFocus(query).append(p);
}

function setPropertyValue(id, nodeName, contextId, propIRI, propLabel, val, valLabel, datatype, lang){
    exitGroupBy(id);

  if(propIRI) propIRI = deSanitizeLabel(propIRI);
  if(val) val = deSanitizeLabel(val);
  valLabel = deSanitizeLabel(valLabel);
  var p = $.createElement(nodeName); // nodeName is property or property-of
  if(contextId) remove(_root.find('.'+contextId).attr('class'), true);
  else contextId = createId();
  p.attr('class', contextId);
  p.attr('iri', deSanitizeLabel(propIRI));
  p.attr('label', propLabel);

  if(contextId == ID_QUERY) clearKeywords();
  
  var v = $.createElement('value');
  v.attr('class', id);
  v.attr('label', valLabel);
  v.text(val);
  if(datatype && datatype.length > 0 && datatype !== 'undefined') v.attr('datatype', datatype);
  if(lang && lang.length > 0 && lang !== 'undefined') v.attr('lang', lang);
  p.append(v);
  getMainFocus().append(p);

  //getFocus(query).find('view').attr('offset', 0);
  resetPaging();
  //pageTable = 0;

  //if(fct_isDebug) console.log('setView query: ' + query.html());
  //query = _root.find('query');

  doQuery(getQueryText());

  //getFocus(query).append(p);
}

function addPropertyFacet(id, prop, propLabel, val, valLabel, datatype, lang, silent){
  exitGroupBy(id);
  if(prop) prop = deSanitizeLabel(prop);
  if(val) val = deSanitizeLabel(val);
  var p = $.createElement('property');
  p.attr('class', id);
  p.attr('iri', prop);
  p.attr('label', propLabel);
  if(val){
      var v = $.createElement('value');
      v.attr('label', valLabel);
      v.text(val);
      if(datatype && datatype.length > 0 && datatype !== 'undefined') v.attr('datatype', datatype);
      if(lang && lang.length > 0 && lang !== 'undefined') v.attr('lang', lang);
      //v.attr('same_as', 'yes');
      p.append(v);
  }
  //prop.attr('exclude', 'yes');
  //console.log('focus: ' + getFocus().attr('label'));

  //getFocus(query).find('view').attr('offset', 0);
  resetPaging();
  //pageTable = 0;

  if(isOneKeyDown()) getMainFocus().prepend(p);
  else getMainFocus().append(p);
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  if(!silent) doQuery(getQueryText());
}

function addPropertyOfFacet(id, prop, propLabel, val, valLabel, datatype, lang, silent){
    exitGroupBy(id);

  if(prop) prop = deSanitizeLabel(prop);
  if(val) val = deSanitizeLabel(val);
  var p = $.createElement('property-of');
  p.attr('class', id);
  p.attr('iri', prop);
  p.attr('label', propLabel);
  if(val){
      var v = $.createElement('value');
      v.attr('label', valLabel);
      v.text(val);
      if(datatype && datatype.length > 0 && datatype !== 'undefined') v.attr('datatype', datatype);
      if(lang && lang.length > 0 && lang !== 'undefined') v.attr('lang', lang);
      //v.attr('same_as', 'yes');
      p.append(v);
  }
  //prop.attr('exclude', 'yes');
  //console.log('focus: ' + getFocus().attr('label'));

  //getFocus(query).find('view').attr('offset', 0);
  resetPaging();
  //pageTable = 0;

  if(isOneKeyDown()) getMainFocus().prepend(p);
  else getMainFocus().append(p);
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  if(!silent) doQuery(getQueryText());
}

function addClassFacet(id, clazz, label, silent){
    exitGroupBy(id);

  //clazz = deSanitizeLabel(clazz);
  if(clazz) val = deSanitizeLabel(clazz);
  var c = $.createElement('class');
  c.attr('class', id);
  c.attr('iri', clazz);
  c.attr('label', label);
  //prop.attr('exclude', 'yes');
  //console.log('focus: ' + getFocus().attr('label'));

  //getFocus(query).find('view').attr('offset', 0);
  resetPaging();
  //pageTable = 0;

  getMainFocus().prepend(c); // POI: 'prepend' to ensure the last one added is the first returned by $.find() 
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  if(!silent) doQuery(getQueryText());
}

function setGraphFacet(graph, graphLabel){
  setQueryGraph(graph, graphLabel);
  doQuery(getQueryText());
}

function removeGraphFacet(){
  clearQueryGraph();
  doQuery(getQueryText());
}


//** FILE: main.js **/

var LABEL_ROOT = "Root";
var LABEL_RECORD_NAME = 'name';
var LABEL_KEYWORDS = 'keywords';

var GROUP_BY_NONE_LABEL = "Contents";
var GROUP_BY_NONE_VALUE = "GROUPBY-NONE";

var GROUP_BY_TEXT_LABEL = "Text Matches";
var GROUP_BY_TEXT_VALUE = "GROUPBY-TEXT";

var ID_SHOW_ME = "showMe";
var ID_GROUP_BY = "groupBy";
var ID_RECORD = "record";
var ID_MY_RECORDS = "myRecords";

var VALUE_MANAGED_RECORD = "Managed Record";
var VALUE_RECORD_MANAGER = "Record Manager";

var VALUE_ANON_NODE = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';//"[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]";
var VALUE_DEFAULT_KEYWORDS_TEXT = "Click 'Explore' to view root"
//var VALUE_ROOT = 'root';

var DELIMIT_GROUP_BY_VALUE_AND_LABEL = '<:::>';
var DELIMIT_GROUP_BY_REVERSE_PROPERTY = '.vios.network.reserved.groupby';

var OPT_SEND_TO_GROUP_BY = 1;

var TAG_PROPERTY = 'p';
var TAG_PROPERTY_OF = 'q';
var TAG_CLASS = 'c';
var TAG_LIST = 'l';
var TAG_GRAPH = 'g';

//var this_endpoint = (window.location.href.indexOf('dev-team') > 0) ? 'http://vios.dev-team.com/' : "http://myopenlink.net/DAV/home/sdmonroe/poc_draft.html";
//var this_endpoint = (window.location.href.indexOf('dev-team') > 0) ? 'http://vios.dev-team.com/' : "http://poc.vios.network";
var this_endpoint = 'http://poc.vios.network';

var qGroupBy, qShowMe, qdataSpace, qdataSpaceLabel, qSearchAllFields, qPage, qshowMePage, qTimeout, qNavType, qSubjectBadges, qVerticalChartHeaders, qViewType, qIsChart, qIsRollup, qFilterRecordViewFields;

var icon_folder_black = 'http://icon-park.com/imagefiles/folder_icon_black.png';
var icon_file = 'http://myopenlink.net/DAV/home/sdmonroe/img/blank-file-xxl.png';
var icon_expand = "http://myopenlink.net/DAV/home/sdmonroe/img/expand.png";

var TABLE_HEADER_LABEL_CHART = 'Chart';
var TABLE_HEADER_LABEL_DETAILS = 'Details';
var TABLE_HEADER_LABEL_TREE = 'Rollup Table';

var preInitialized = false;

var screenSz = screen.width;
var SIZE_GROUP_BY = (screenSz < 1500) ? "3" : "2";
var SIZE_SHOW_ME = (screenSz < 1500) ? "3" : "2";
var SIZE_RECORD_VIEWER = (screenSz < 1500) ? "6" : "6";

var SIZE_GROUP_BY_DETAIL_RESULTS = (screenSz < 1500) ? "9" : "5";
var SIZE_SHOW_ME_DETAIL_RESULTS = (screenSz < 1500) ? "3" : "2";
var SIZE_RECORD_VIEWER_DETAIL_RESULTS = (screenSz < 1500) ? "0" : "5";


var groupByColumnWidth = SIZE_GROUP_BY;
var showMeColumnWidth = SIZE_SHOW_ME;
var recordViewerColumnWidth = SIZE_RECORD_VIEWER;

var SIZE_RECORD_FORM = (screenSz < 1500) ? "6" : "6";
var SIZE_LABEL = (screenSz < 1500) ? 22 : 30; // TODO: this constant is deprecated, using text-ellipsis now
var SIZE_RESULT_SET = (screenSz < 1500) ? 15: 30;
var SIZE_TABLE_RESULT_SET = (screenSz < 1500) ? 150: 75;
var SIZE_MATRIX_RESULT_SET = (screenSz < 1500) ? 150: 75;
var SIZE_MIN_DIGITS = 7;
var SIZE_MAX_DIGITS = 20;

var isExpandSearch = $('#isSearchAllFields').parent().hasClass('active');

var labels = {};

    const NAV_TYPE_1 = 1;
    const NAV_TYPE_2 = 2;
    const NAV_TYPE_3 = 3;
    var nav_type = NAV_TYPE_2;

    var tooltipShowDelay = 1500;
    var tooltipHideDelay = 0;


  var storage;
  var inbox;
  var email = '';
  var fullName = '';

var showSubjectBadges = false;

var showChart = false;
var chartProperty;
var verticalChartHeaders = false;
var showRollup = false;
var showIDN = false;

function toggleIDN(){
  showIDN = !showIDN;
  if(showIDN){
    $('#idnButton').text('Record');
    detailResultsColumnWidths();
  }
  else {
    $('#idnButton').text('IDN');
    resetColumnWidths();
  }
  //describe( $('#angular_recordViewer').attr(iri) );
  doQuery(getQueryText());
}

function setLabel(iri, label){
  if(!iri) return;
  labels[iri.toLowerCase()] = label;
}

function getLabel(iri){
  if(!iri) return;
  return labels[iri.toLowerCase()];
}


  function getStorage(){
    return storage.value;
  }

  function getInbox(){
    return inbox.value;
  }


var version = 'alpha 1.8';

var ha = new Array();
var historyIndex = 0;

function historyForward(){
  historyIndex++;
}

function historyBackward(){
  historyIndex--;
}

var ds = new Array();

var record;

function detailResultsColumnWidths(){
  $('#groupByColumn').removeClass('col-lg-'+groupByColumnWidth);
  $('#showMeColumn').removeClass('col-lg-'+showMeColumnWidth);
  $('#recordViewerColumn').removeClass('col-lg-'+recordViewerColumnWidth);

  groupByColumnWidth = SIZE_GROUP_BY_DETAIL_RESULTS;
  showMeColumnWidth = SIZE_SHOW_ME_DETAIL_RESULTS;
  recordViewerColumnWidth = SIZE_RECORD_VIEWER_DETAIL_RESULTS;

  $('#groupByColumn').addClass('col-lg-'+groupByColumnWidth);
  $('#showMeColumn').addClass('col-lg-'+showMeColumnWidth);
  $('#recordViewerColumn').addClass('col-lg-'+recordViewerColumnWidth);
}

function resetColumnWidths(){
  $('#groupByColumn').removeClass('col-lg-'+groupByColumnWidth);
  $('#showMeColumn').removeClass('col-lg-'+showMeColumnWidth);
  $('#recordViewerColumn').removeClass('col-lg-'+recordViewerColumnWidth);

  groupByColumnWidth = SIZE_GROUP_BY;
  showMeColumnWidth = SIZE_SHOW_ME;
  recordViewerColumnWidth = SIZE_RECORD_VIEWER;

  $('#groupByColumn').addClass('col-lg-'+groupByColumnWidth);
  $('#showMeColumn').addClass('col-lg-'+showMeColumnWidth);
  $('#recordViewerColumn').addClass('col-lg-'+recordViewerColumnWidth);
}

var orientationLeft = false;

const ORIENTATION_TYPE_1 = 1;
const ORIENTATION_TYPE_2 = 2;
const ORIENTATION_TYPE_3 = 3;

var orientationType = ORIENTATION_TYPE_1;

function init(){
    fct_init(); // this method must be the first method called by the implementation of the fct_ framework




      try{
        orientationType = localStorage.getItem('orientationType');
//        orientationLeft = localStorage.getItem('orientationLeft') == 'true';
if(!orientationType) orientationType = ORIENTATION_TYPE_2;
        localStorage.setItem('orientationType', orientationType); // attempt to claim memory before cache uses it all
      }
      catch(e){

      }


//************************************//

    if(!document.getElementById('id2')) { 
        /*var link = document.createElement('link');
        link.id = 'id2';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'http://myopenlink.net/DAV/home/sdmonroe/css/vios.css';
        document.head.appendChild(link);*/

        link = document.createElement('link');
        link.id = 'id2';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://fonts.googleapis.com/css?family=Source+Code+Pro';
        //document.head.appendChild(link);



        $('link[src="http://myopenlink.net/DAV/home/sdmonroe/css/vios.css"]').remove();
        link = document.createElement('link');
        link.id = 'id2';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'http://data.vios.network/DAV/home/vios/css/vios.css';
        document.head.appendChild(link);
    }  

        link = document.createElement('script');
        link.type = 'text/javascript';
        link.src = 'http://data.vios.network/DAV/home/vios/js/solid-auth-client.bundle.js';
        document.head.appendChild(link);

        link = document.createElement('script');
        link.type = 'text/javascript';
        link.src = 'http://data.vios.network/DAV/home/vios/js/rdflib.min.js';
        document.head.appendChild(link);

        link = document.createElement('script');
        link.type = 'text/javascript';
        link.src = 'http://data.vios.network/DAV/home/vios/js/rdflib.min.js.map';
        document.head.appendChild(link);

        link = document.createElement('script');
        link.type = 'text/javascript';
        link.src = 'http://data.vios.network/DAV/home/vios/js/md5.min.js';
        document.head.appendChild(link);

        link = document.createElement('script');
        link.type = 'text/javascript';
        link.src = 'http://data.vios.network/DAV/home/vios/js/jquery.capslockstate.js';
        document.head.appendChild(link);

        link = document.createElement('script');
        link.type = 'text/javascript';
        link.src = 'https://demo.flatlogic.com/sing-app/angular/profile-profile-module.js';
        document.head.appendChild(link);



        https://demo.flatlogic.com/sing-app/angular/profile-profile-module.js


//alert('init() screen width: ' + screen.width);

  //startDictation();

  if(window.location.href.startsWith('http://myopenlink') > 0) {
    $('body').empty();
    $('body').append('<div></div>');
    return;
  }


// Q&D data canvas ******************//


  //$('body').attr('oncontextmenu', 'return false;');

  //$('#showMeMenu').remove();
  $('#leftButton').remove();
  $('#rightButton').remove();
  $('#showMeLeftButton').remove();
  $('#showMeRightButton').remove();
  //$('#keywords').remove();
  $('.search-area').remove();

  $('#isDebug').prop('checked', false);

  $('select#groupByMenu').parent().removeClass('hidden');

  $('.input-group-text > i').removeClass('la-search');
  $('.input-group-text > i').removeClass('text-warning');
  $('.input-group-text > i').addClass('la-refresh');
  $('.input-group-text > i').addClass('text-info');

  $('#dataSpaceMenu > i').removeClass('la');
  $('#dataSpaceMenu > i').removeClass('la-hdd-o');
  $('#dataSpaceMenu > i').removeClass('la-lg');
  $('#dataSpaceMenu > i').removeClass('fs-largest');
  $('#dataSpaceMenu > i').addClass('glyphicon');
  $('#dataSpaceMenu > i').addClass('glyphicon-chevron-down');
  $('#dataSpaceMenu > i').addClass('fs-largest');

  // **** TODO: comment out these lines
  //$('#lod').addClass('hide');
  //$($('.vios-body').children('div')[0]).addClass('hide');
  //$($('.vios-body').children('div')[1]).addClass('hide');
  //$('#isSearchAllFields').remove();
  //$('#isCache').remove();
  //$('#isDebug').remove();
  //$('#keywords').remove();
  // ***** END TODO

//$('#isSearchAllFields').parent().append('to <span class="badge badge-info">34523</span>');
  isExpandSearch = $('#isSearchAllFields').parent().hasClass('active');
  $('#isSearchAllFields').parent().click(function(e){
    isExpandSearch = !$('#isSearchAllFields').parent().hasClass('active');
    doQuery(getQueryText());
  });

  var fastForwardButton = '';
  fastForwardButton += '<span '+buildTitle('find connections between this and the focus')+' class="input-group-append" style="cursor:pointer;">';
        fastForwardButton += '<span class="input-group-text">';
          fastForwardButton += '<i class="fw-bold la la-angle-double-right text-default"></i>';
        fastForwardButton += '</span>';
      fastForwardButton += '</span>';
      $('.input-group-text').parent().parent().append(fastForwardButton);

  var glossaryButton = '';
  glossaryButton += '<span id="glossaryButton" '+buildTitle('open glossary')+' class="hide input-group-append" onclick="javascript: isExpandSearch = true; var cid = createId(); setQueryText($(\'#keywords\').val()); addClassFacet(cid, \'http://dbpedia.org/class/yago/Glossary106420781\', \'Glossary\', true);  var pid = createId(); addPropertyFacet(pid, \'http://dbpedia.org/property/content\', \'content\'); takeMainFocus(pid);" style="cursor:pointer;">';
        glossaryButton += '<span class="input-group-text">';
          glossaryButton += '<i class="fw-bold glyphicon glyphicon-book text-info"></i>';
        glossaryButton += '</span>';
      glossaryButton += '</span>';
      

      var favButton = '<li class="nav-item d-none d-md-block"><a rel="sidebar" onclick="javascript:save($(\'#keywords\').text()); $(\'keywords\').text(\'\');" class="nav-link pl-2 text-info" id="favButton" ><i class="la la-save la-lg text-default"></i></a></li>'; //la-heart-o

      $('.page-controls > .navbar-nav .la-chain').parent().parent().after(favButton);

      /*
      $('#favButton').click(function(e) {
    e.preventDefault();
    var bookmarkURL = $('#favButton').attr('href');
    var bookmarkTitle = $('#keywords').text();
    $('#keywords').text('');
    $('#favButton').attr('title', bookmarkTitle);

    if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
        // Mobile browsers
        addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
    } else if (window.sidebar && window.sidebar.addPanel) {
        // Firefox version < 23
        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
        // Firefox version >= 23 and Opera Hotlist
        $(this).attr({
            href: bookmarkURL,
            title: bookmarkTitle,
            rel: 'sidebar'
        }).off(e);
        return true;
    } else if (window.external && ('AddFavorite' in window.external)) {
        // IE Favorite
        window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else {
        // Other browsers (mainly WebKit - Chrome/Safari)
        alert('Please press ' + (/Mac/i.test(navigator.userAgent) ? 'CMD' : 'Strg') + ' + D to add this page to your favorites.');
    }

    return false;
});
*/


/*

      .click(function(e){
    e.preventDefault(); // this will prevent the anchor tag from going the user off to the link

    if (window.sidebar) { // For Mozilla Firefox Bookmark
        //window.sidebar.addPanel(bookmarkTitle, bookmarkUrl,"");
    } else if( window.external || document.all) { // For IE Favorite
        window.external.AddFavorite( bookmarkUrl, bookmarkTitle);
    } else { // for other browsers which does not support
         alert('Your browser does not support this bookmark action');
         return false;
    }
  });
*/

      var copyButton = '<li class="nav-item d-none d-md-block"><a class="nav-link pl-2 text-info" ><i id="copySPARQL" onmouseout="$(\'#copySPARQL\').tooltip(\'hide\');$(\'#copySPARQL\').attr(\'data-original-title\', \'Copy SPARQL to clipboard\');$(\'#copySPARQL\').tooltip();" '+buildTitle('Copy SPARQL to clipboard')+' onclick="javascript:$(\'#copySPARQL\').tooltip(\'hide\');copySPARQL(); $(\'#copySPARQL\').attr(\'data-original-title\', \'Copied\');$(\'#copySPARQL\').tooltip(\'show\');" style="cursor:pointer;" class="la la-copy fa-lg"></i></a></li>'; //la-heart-o

      $('.page-controls > .navbar-nav .la-chain').parent().parent().after(copyButton);



  //$('#queryTimeout').unbind('click');  
  //$('#isSearchAllFields').click(function(e){doQuery(getQueryText());});

  //$('a#dataSpaceMenu').parent().children('.dropdown-menu').prepend('<li><a id="dataspace-lod" class="dropdown-item" onclick="selectDataspace(\'http://poc.vios.network/proxy/-start-http://lod.openlinksw.com-end-\', \'LOD Cloud\'">LOD Cloud Cache</a></li>');
  //$('a#dataSpaceMenu').parent().children('.dropdown-menu').prepend('<li><a id="dataspace-odsd" class="dropdown-item" onclick="selectDataspace(\'http://poc.vios.network/proxy/-start-https://id.myopenlink.net-end-\', \'ODS Demo\')">OpenLink ODS (.net)</a></li>');
  //$('a#dataSpaceMenu').parent().children('.dropdown-menu').prepend('<li><a id="dataspace-urib" class="dropdown-item" onclick="selectDataspace(\'http://poc.vios.network/proxy/-start-http://uriburner.com-end-\', \'URI Burner\')">URI Burner</a></li>');
  //$('a#dataSpaceMenu').parent().children('.dropdown-menu').prepend('<li><a id="dataspace-olodsd" class="dropdown-item" onclick="selectDataspace(\'http://poc.vios.network/proxy/-start-http://id.myopenlink.com-end-\', \'myopenlink\')">OpenLink ODS</a></li>');
  //$('a#dataSpaceMenu').parent().children('.dropdown-menu').prepend('<li><a id="dataspace-oplkdemo" class="dropdown-item" onclick="selectDataspace(\'http://poc.vios.network/proxy/-start-http://demo.openlinksw.com-end-\', \'openlinksw\')">OpenLink Demo</a></li>');
  //$('a#dataSpaceMenu').parent().children('.dropdown-menu').prepend('<li><a id="dataspace-dbp" class="dropdown-item" onclick="selectDataspace(\'http://poc.vios.network/proxyDBPedia\', \'dbpedia\')">Dbpedia</a></li>');
  //$('a#dataSpaceMenu').parent().children('.dropdown-menu').prepend('<li><a id="dataspace-vios" class="dropdown-item" onclick="selectDataspace(\'http://poc.vios.network/proxy/-start-http://data.vios.network-end-\', \'vios\')">VIOS</a></li>');

  $('#permalink').on('mouseover', function(e){
    get_short_url($('#permalink').attr('href'), function(short_url) {
      $('#permalink').attr('href',  short_url); //+ '&idCt=' + idCt
/*
      $('#permalink').unbind('click');
      $('#permalink').on('click', function(e){
        linkOut(short_url);
      });
      */
    });
  });

  selectMenuItem('queryTimeout', '30000');

  $('dashboard').append('<div class="row" id="angular_breadcrumbs"></div>');
  $('dashboard').append('<div class="row" id="angular_facets"></div>');
  $('dashboard').append('<div class="row" id="dataCanvas"></div>');
  $('#queryTimeout').val('30000');


  $('a#dataSpaceMenu').parent().children('.dropdown-menu').append('<li><a class="dropdown-item" onclick="doFindDataspaces()">Find Dataspaces</a></li>');
  $('a#dataSpaceMenu').parent().children('.dropdown-menu').append('<li><a class="dropdown-item" onclick="doRemoveDataspace()">Remove Dataspace</a></li>');



  $('#keywords').css('padding-left', '10px');

    var clearKeywords = $('span.clear-data').filter(function() {return $(this).text().indexOf('Keywords') >= 0;});
    var clearLibrary = $('span.clear-data').filter(function() {return $(this).text().indexOf('Library') >= 0;});

    clearKeywords.parent().addClass('hide');
    clearLibrary.parent().addClass('hide');

    clearKeywords.css('text-decoration', 'none');
    clearLibrary.css('text-decoration', 'none');
/*
    $('span.input-group-append > span.input-group-text > i.la-refresh').addClass('glyphicon');
    $('span.input-group-append > span.input-group-text > i.la-refresh').addClass('glyphicon-retweet');
    $('span.input-group-append > span.input-group-text > i.la-refresh').removeClass('la');
    $('span.input-group-append > span.input-group-text > i.la-refresh').removeClass('la-refresh');
*/
    //var ict = $.createElement('span');
    //var icl = $.createElement('span');

    //clearKeywords.replaceWith(ict);
    //clearLibrary.replaceWith(icl);

    //ict.addClass('fa');
    //icl.addClass('fa');


    //ict.addClass('fa-times-circle');
    //icl.addClass('fa-times-circle');

    clearKeywords.text('Clear Keywords');
    clearLibrary.text('Clear Library');

    //ict.css('font-family', 'Montserrat, sans-serif');
    //icl.css('font-family', 'Montserrat, sans-serif');

//$('[data-toggle="tooltip"]').tooltip();

var newDataspacePicker = '';

newDataspacePicker += '<div _ngcontent-c2="" class="btn-group dropdown" dropdown="">';
            newDataspacePicker += '<button _ngcontent-c2="" class="btn btn-default" id="dropdown-btn-three">LOD</button>';
            newDataspacePicker += '<button _ngcontent-c2="" class="btn btn-default dropdown-toggle" dropdowntoggle="" aria-haspopup="true" aria-expanded="false">';
              newDataspacePicker += '<i _ngcontent-c2="" class="fa fa-caret-down"></i>';
            newDataspacePicker += '</button>';
            newDataspacePicker += '<!----><ul _ngcontent-c2="" aria-labelledby="dropdown-btn-three" class="dropdown-menu" role="menu" style="left: 0px; right: auto; top: 100%; transform: translateY(0px);">';
              newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://lod.openlinksw.com" class="dropdown-item">LOD</a></li>';
              newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://id.myopenlinksw.net" class="dropdown-item">MyOpenLink</a></li>';
              newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://uriburner.net" class="dropdown-item">URIBurner</a></li>';
              newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://demo.openlinksw.net" class="dropdown-item">OpenLink Demo</a></li>';
              newDataspacePicker += '<li _ngcontent-c2="" class="dropdown-divider"></li>';
              newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a value="localhost:8890" _ngcontent-c2="" class="dropdown-item">Local Dataspace</a></li>';
            newDataspacePicker += '</ul>';
          newDataspacePicker += '</div>';


          var ndsp = $(newDataspacePicker);

         //$('#dataSpaceMenu').parent().replaceWith(ndsp);



          //$('#mr-4').append(ndsp);
          //ndsp.attr('id', 'dataSpaceMenu2');

var gbcol = '';

gbcol += '<app-navbar class="page-controls navbar navbar-dashboard"><ul class="navbar-nav flex-row">';
//gbcol += '<form class="navbar-form d-none d-md-block mr-auto ng-untouched ng-pristine ng-valid" novalidate="" role="search" _lpchecked="1">';
  gbcol += '<div class="form-group">';
    gbcol += '<div class="input-group input-group-no-border">';
      gbcol += '<input size="35" onfocus="javascript:doFirstKeywords()" id="keywords" class="keywordsDefault form-control" placeholder="'+VALUE_DEFAULT_KEYWORDS_TEXT+'" type="text" >';
        gbcol += '<span style="cursor:pointer;" onclick="javascript:doExplore($(\'#keywords\').val())" class="input-group-append">';
        gbcol += '<span class="input-group-text">';
          gbcol += '<i  class="la la-search"></i>';
        gbcol += '</span>';
      gbcol += '</span>';
  //gbcol += '<button _ngcontent-c4="" class="btn btn-secondary width-100 mb-xs" role="button" value="Submit" type="submit" onclick="javascript:doExplore($(\'#keywords\').val())" >Explore</button>';      

      
    gbcol += '</div>';
  gbcol += '</div>';


 gbcol += '&nbsp;&nbsp;&nbsp;';

//** NAV BAR CODE
gbcol += '<div _ngcontent-c4="" class="mb-sm">';
          gbcol += '<div _ngcontent-c4="" class="btn-group" data-toggle="buttons">'; 
            gbcol += '<label id="isSearchAllFields" _ngcontent-c4="" btncheckbox="" class="btn btn-gray ng-untouched ng-pristine ng-valid" >';
              gbcol += 'Expand Search';
            gbcol += '</label>';
            gbcol += '<label id="isCache" _ngcontent-c4="" btncheckbox="" class="btn btn-gray ng-untouched ng-valid ng-dirty active">';
             gbcol += ' Cache';
            gbcol += '</label>';
            gbcol += '<label id="isDebug" _ngcontent-c4="" btncheckbox="" class="btn btn-gray ng-untouched ng-valid ng-dirty">';
             gbcol += ' Debug';
            gbcol += '</label>';
          gbcol += '</div>';



        gbcol += '</div>';

gbcol += '<div _ngcontent-c4="" class="mb-sm">';
          gbcol += '<div _ngcontent-c4="" class="btn-group">';


 gbcol += '&nbsp;&nbsp;&nbsp;';

gbcol += '<button _ngcontent-c4="" class="btn btn-gray" onclick="javascript:clearKeywords();doQuery($(\'#keywords\').val())">';
            /*gbcol += '<i _ngcontent-c4="" class="fa fa-ban text-danger"></i>';
            gbcol += ' <i _ngcontent-c4="" class="fa fa-font text"></i>';*/
            gbcol += 'Clear keywords';
          gbcol += '</button>';
 gbcol += '&nbsp;&nbsp;&nbsp;';

gbcol += '<button _ngcontent-c4="" class="btn btn-gray" onclick="javascript:clearQueryGraph();doQuery($(\'#keywords\').val())">';
            /*gbcol += '<i _ngcontent-c4="" class="fa fa-ban text-danger"></i>';
            gbcol += ' <i _ngcontent-c4="" class="fa fa-bank text"></i>';*/
            gbcol += 'Clear libraries';
          gbcol += '</button>';

          gbcol += '</div>';



        gbcol += '</div>';



//gbcol += '</form>';
gbcol += '</app-navbar>';

// TODO: comment out this line
//$('app-layout').prepend(gbcol);



gbcol = '<div class="col-lg-12 col-12"><ul class="steps" id="angular_breadcrumbBar">';


/*
  gbcol += '<li><a  title=""><em>keywords</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-primary btn-block text-ellipsis" onclick="javascript:takeMainFocus(\'0\')">Et nequ a quam turpis duisi</button></li>';
  gbcol += '<li><a  title=""><em>distributor</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-outline-default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\'0\')">'+VALUE_ANON_NODE+'</button></li>';
//  gbcol += '<li><a  title=""><em>Step 2: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li>';
  gbcol += '<li class="current"><a  title=""><em>Step 3: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li>';
  gbcol += '<li><a  title=""><em>keywords</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\'0\')">metropolis</button></li>';
  gbcol += '<li><a  title=""><em>distributor</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-outline-default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\'0\')">'+VALUE_ANON_NODE+'</button></li>';

*/

gbcol += '</ul></div>';
$('#angular_breadcrumbs').append(gbcol);


if(orientationType == ORIENTATION_TYPE_3){

gbcol = '<div id="recordViewerColumn" class="hide col-lg-'+recordViewerColumnWidth+' col-12"><section class="widget" widget>';

        gbcol += '<div class="widget-body  p-0 ">';
       // gbcol += '<div class="widget-body p-0">';


gbcol += '<nav id="recordNavBar" class="navbar navbar-expand-lg navbar-light bg-light">';
  gbcol += '<a  style="margin-left: 7px;" class="navbar-brand" data-target="#" onclick="javascript:buildForm()">Compose</a>';
  gbcol += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    gbcol += '<i class="glyphicon glyphicon-tree-conifer"></i>';
    gbcol += '<i _ngcontent-c10="" class="glyphicon glyphicon-tree-conifer text-success"></i>';
  gbcol += '</button>';

  gbcol += '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
    gbcol += '<ul class="navbar-nav mr-auto">';
      gbcol += '<li class="nav-item active">';
        gbcol += '<a id="ggg" class="nav-link" data-target="#">Edit</a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#" onclick="javascript:doTable()">Interact</a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a id="ggg" class="nav-link" '+buildTitle('Fetch record from the Giant Global Graph using URIBurner service')+' data-target="#" onclick="describe( $(undefined, \'#angular_recordViewer\').attr(\'iri\'), true )"><i></i>GGG</a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a id="www" '+buildTitle('Fetch document from the World Wide Web')+' class="nav-link" data-target="#" onclick="linkOut()">WWW</a>';
      gbcol += '</li>';
      /*
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#">Charts</a>';
      gbcol += '</li>';

      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#">Map</a>';
      gbcol += '</li>';
      */
      gbcol += '<li class="nav-item dropdown">';
        gbcol += '<a class="nav-link dropdown-toggle" data-target="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
          gbcol += 'Pair';
        gbcol += '</a>';
        gbcol += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
          gbcol += '<a class="dropdown-item" data-target="#">Browser Window</a>';
          gbcol += '<a class="dropdown-item" data-target="#">Device</a>';
          gbcol += '<div class="dropdown-divider"></div>';
          gbcol += '<a class="dropdown-item" data-target="#">New Data Canvas</a>';
        gbcol += '</div>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item dropdown">';
        gbcol += '<a class="nav-link dropdown-toggle" data-target="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
          gbcol += 'Subscribe';
        gbcol += '</a>';
        gbcol += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
          gbcol += '<a class="dropdown-item" data-target="#">Record</a>';
          gbcol += '<a class="dropdown-item" data-target="#">Folder</a>';
        gbcol += '</div>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link disabled" data-target="#">Edit</a>';
      gbcol += '</li>';
    gbcol += '</ul>';
      gbcol += '<button id="idnButton" style="margin-right:1em" class="btn btn-secondary my-2 my-sm-0" onclick="javascript:toggleIDN();">IDN</button>';
//    gbcol += '<form class="form-inline my-2 my-lg-0">';
      //gbcol += '<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">';
//    gbcol += '</form>';
  gbcol += '</div>';
gbcol += '</nav>';


            gbcol += '<div id="angular_recordViewer" class="embed-responsive">'; //embed-responsive-1by1


//gbcol += '<iframe id="describe" class="iframe embed-responsive-item" src="" height="100%"></iframe>';
            gbcol += '</div>';



          //  gbcol += '</div>';
            gbcol += '</div>';        


                        gbcol += '</section></div>';


gbcol += '<div id="recordFormColumn" class="hide col-lg-'+SIZE_RECORD_FORM+' col-12">'

gbcol += '<div class="widget-body  p-0"></div>';
                        gbcol += '</div>';





gbcol += '<div id="mapResults" class="short-div hide"><section class="widget" widget>';

gbcol += '<header id="mapResultsHeader">';
        gbcol += '<div class="widget-controls">';
          //gbcol += '<a href="#"><i class="glyphicon glyphicon-cog"></i></a>';
         // gbcol += '<a data-target="#" class="leftButton" onclick="javascript:pageLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
         // gbcol += '<a data-target="#" class="rightButton" onclick="javascript:pageRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
          gbcol += '<a data-widgster="close" onclick="hideMap()" class="btn-gray"><i class="glyphicon glyphicon-remove"></i></a>';
        gbcol += '</div>';
      gbcol += '</header>';
        gbcol += '<div class="widget-body">';


//var apiKey = 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE';

//gbcol += '<script async defer src="https://maps.googleapis.com/maps/api/js?key='+apiKey+'"> </script>';
gbcol += '<div id="map"></div>';

            gbcol += '</div>'; // widget-body



gbcol += '</section></div>';

$('#dataCanvas').append(gbcol);

}


gbcol = '<div id="groupByColumn" class="hide col-lg-'+groupByColumnWidth+' col-12">';
gbcol += '<div id="facetCollectorWidgetContainer" class="short-div"><section class="widget bg-info text-white focusHeaderSec" widget>';
gbcol += '<header id="focusHeader">';
        gbcol += '<h3 id="angular_focusCollector" class="fw-semi-bold">'+LABEL_ROOT+'</h3>';

/*gbcol += '<div class="widget-controls">';
            gbcol += '<a data-widgster="expand" data-target="#" title="Expand" style="display: none;"><i class="glyphicon glyphicon-chevron-up"></i></a>';
            gbcol += '<a data-widgster="collapse" data-target="#" title="Collapse"><i class="glyphicon glyphicon-chevron-down"></i></a>';
            gbcol += '<a data-widgster="close" data-target="#"><i class="glyphicon glyphicon-remove"></i></a>';
          gbcol += '</div>';*/

        gbcol += '</header>';

        gbcol += '<div class="widget-body">';
       // gbcol += '<div class="widget-body p-0">';
            gbcol += '<div id="angular_facetCollector" class="list-group list-group-lg">';
/*
gbcol += '<div class="row"><span style="padding-right:3em">thisIsAFacet</span><button class="btn-rounded-f width-100 mb-xs mr-xs btn btn-outline-default">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div>';
gbcol += '<div class="row"><span style="padding-right:3em">thisIsAFacet</span><button class="btn-rounded-f width-100 mb-xs mr-xs btn btn-default">Default</button></div>';
gbcol += '<div class="row"><span style="padding-right:3em">thisIsAFacet</span><button class="btn-rounded-f width-100 mb-xs mr-xs btn btn-default">Default</button></div>';
*/
            gbcol += '</div>';
          //  gbcol += '</div>';
            gbcol += '</div>';        

                        gbcol += '</section></div>';

gbcol += '<div id="recordsListWidgetContainer" class="short-div"><section class="widget" widget>';
gbcol += '<header id="groupByHeader" style="cursor:pointer;">';
        gbcol += '<h4><span id="groupByCount" class="badge badge-info">0/0</span> '+GROUP_BY_NONE_LABEL+'</h4>';
        gbcol += '<div class="widget-controls">';
          gbcol += '<a data-target="#" class="hide " '+buildTitle('')+' id="leftButton" onclick="javascript:pageLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
          gbcol += '<a data-target="#" class="hide " '+buildTitle('')+' id="rightButton" onclick="javascript:pageRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
          //gbcol += '<a data-widgster="close" data-target="#"><i class="glyphicon glyphicon-remove"></i></a>';
        gbcol += '</div>';
        gbcol += '</header>';

        gbcol += '<div class="widget-body  p-0">';
      //  gbcol += '<div class="widget-body p-0">';
            gbcol += '<div id="angular_recordsList" class="list-group list-group-lg ">'; //fs-mini



            gbcol += '</div>';
          //  gbcol += '</div>';
            gbcol += '</div>';        
            gbcol += '<footer class="bg-body-light mt">';
            gbcol += '<input class="form-control form-control-sm" placeholder="Filter" type="search">';
            gbcol += '</footer>';

                        gbcol += '</section></div>';





gbcol += '<div id="tabularResults" class="short-div hide"><section class="widget" widget>';

gbcol += '<header id="groupByTableHeader">';
        gbcol += '<h5>';
          gbcol += '<h4><span id="tableCount" class="badge badge-info">0/0</span> '+GROUP_BY_NONE_LABEL+' - <span id="tableType" class="fw-semi-bold">'+((isChart()) ? TABLE_HEADER_LABEL_CHART : TABLE_HEADER_LABEL_DETAILS)+'</span></h4>';
        gbcol += '</h5>';
        gbcol += '<div class="widget-controls">';
          //gbcol += '<a href="#"><i class="glyphicon glyphicon-cog"></i></a>';
          gbcol += '<a data-target="#" onclick="setRollup(false); setChart(false); doQuery(getQueryText());" class="text-secondary" id="tableButton"><i class="glyphicon glyphicon-th-list"></i></a>';
          gbcol += '<a data-target="#" onclick="setRollup(false); setChart(true); doQuery(getQueryText());" class="text-secondary" id="chartTableButton"><i class="fa fa-check"></i></a>';
          gbcol += '<a data-target="#" onclick="setRollup(true); setChart(false); selectMenuItem(\'showMeMenu\', VIEW_TYPE_CLASSES);" class="text-secondary" id="rollupTableButton"><i class="fa fa-sitemap"></i></a>';
          gbcol += '<a data-target="#" disabled="true" class="disabled" id="leftTableButton" onclick="javascript:pageTableLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
          gbcol += '<a data-target="#" disabled="true" class="disabled" id="rightTableButton" onclick="javascript:pageTableRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
          gbcol += '<a data-target="#" data-widgster="close" onclick="undoTable()" class="text-secondary"><i class="glyphicon glyphicon-remove"></i></a>';
        gbcol += '</div>';
      gbcol += '</header>';
        gbcol += '<div class="widget-body table-responsive" >';

/*
gbcol += '<table width="100%"><tr><td style="padding:0px" align="right">';
gbcol += '<table width="100%" id="resultsTableFocus" class=" table table-hover table-bordered table-sm mb-0" style="display:inline;" width="100%">';
gbcol += '<thead>';
gbcol += '<tr>';
gbcol += '<th>';
gbcol += '</th>';
gbcol += '</tr>';
gbcol += '</thead>';

gbcol += '<tbody>';
gbcol += '<tr>';
gbcol += '<td >';
gbcol += '</td>';
gbcol += '</tr>';

gbcol += '</tbody>';
gbcol += '</table>';
gbcol += '</td><td style="padding:0px">';

gbcol += '<div class="table-responsive" ><table id="resultsTable" class="table table-hover table-bordered table-sm mb-0" style="display:inline;">';
gbcol += '<thead>';
gbcol += '<tr>';
gbcol += '<th>';
gbcol += '</th>';
gbcol += '</tr>';
gbcol += '</thead>';

gbcol += '<tbody>';
gbcol += '<tr>';
gbcol += '<td>';
gbcol += '</td>';
gbcol += '</tr>';

gbcol += '</tbody>';
gbcol += '</table></div>';
gbcol += '</td></tr></table>';

*/

gbcol += '<table id="resultsTable" class="table table-hover table-bordered table-striped table-sm mt-sm mb-0" width="100%">';
gbcol += '<thead>';
gbcol += '<tr>';
gbcol += '<th>';
gbcol += '</th>';
gbcol += '</tr>';
gbcol += '</thead>';

gbcol += '<tbody>';
gbcol += '<tr>';
gbcol += '<td>';
gbcol += '</td>';
gbcol += '</tr>';

gbcol += '</tbody>';
gbcol += '</table>';


gbcol += '<br/>';



gbcol += '<div class="clearfix" style="padding-bottom:2em; padding-top:2em;">';
          gbcol += '<div class="pull-right">';
            gbcol += '<button onclick="toggleChartHeaders();" class="btn btn-default btn-sm">';
              gbcol += 'Toggle Headers';
            gbcol += '</button>&nbsp;';
            gbcol += '<button onclick="undoTable(); buildForm()" class="btn btn-default btn-sm">';
              gbcol += 'Compose ...';
            gbcol += '</button>&nbsp;';
            gbcol += '<div class="btn-group" data-dropdown="">';
              gbcol += '<button class="btn btn-sm btn-inverse dropdown-toggle" data-toggle="dropdown" aria-expanded="false">';
                gbcol += '&nbsp; Export... &nbsp;';
                gbcol += '<i class="fa fa-caret-down"></i>';
              gbcol += '</button>';
              gbcol += '<ul id="tableSaveOptions" class="dropdown-menu dropdown-menu-right" x-placement="top-end" style="position: absolute; transform: translate3d(-97px, -145px, 0px); top: 0px; left: 0px; will-change: transform;">';
                gbcol += '<li><a class="dropdown-item" onclick="exportTableToCSV(\'results.csv\')">CSV</a></li>';
                gbcol += '<li><a class="dropdown-item" href="#">XML</a></li>';
                gbcol += '<li><a class="dropdown-item" href="#">JSON</a></li>';
                gbcol += '<li class="dropdown-divider"></li>';
                gbcol += '<li><a class="dropdown-item" href="#">Save to Data Space</a></li>';
              gbcol += '</ul>';
            gbcol += '</div>';
          gbcol += '</div>';
          gbcol += '<p id="resultsReport">query time: <span id="reportQueryTime"></span>, timeout: <span id="reportQueryTimeout"></span>, complete: <span id="reportQueryComplete"></span></p>';
        gbcol += '</div>';

            gbcol += '</div>';



gbcol += '</section></div>';




// CHARTS



gbcol += '<div id="chartsResults" class="short-div hide"><section class="widget" widget>';

gbcol += '<header id="chartsHeader">';
        gbcol += '<h5>';
          gbcol += '<h4><span id="chartsCount" class="badge badge-info">0/0</span> '+GROUP_BY_NONE_LABEL+' - <span id="tableType" class="fw-semi-bold">'+((isChart()) ? TABLE_HEADER_LABEL_CHART : TABLE_HEADER_LABEL_DETAILS)+'</span></h4>';
        gbcol += '</h5>';
        gbcol += '<div class="widget-controls">';
          //gbcol += '<a href="#"><i class="glyphicon glyphicon-cog"></i></a>';
          gbcol += '<a data-target="#" onclick="setRollup(false); setChart(false); doQuery(getQueryText());" class="text-secondary" id="tableButton"><i class="glyphicon glyphicon-th-list"></i></a>';
          gbcol += '<a data-target="#" onclick="setRollup(false); setChart(true); doQuery(getQueryText());" class="text-secondary" id="chartTableButton"><i class="fa fa-check"></i></a>';
          gbcol += '<a data-target="#" onclick="setRollup(true); setChart(false); selectMenuItem(\'showMeMenu\', VIEW_TYPE_CLASSES);" class="text-secondary" id="rollupTableButton"><i class="fa fa-sitemap"></i></a>';
          gbcol += '<a data-target="#" disabled="true" class="disabled" id="leftTableButton" onclick="javascript:pageTableLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
          gbcol += '<a data-target="#" disabled="true" class="disabled" id="rightTableButton" onclick="javascript:pageTableRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
          gbcol += '<a data-target="#" data-widgster="close" onclick="undoTable()" class="text-secondary"><i class="glyphicon glyphicon-remove"></i></a>';
        gbcol += '</div>';
      gbcol += '</header>';
        gbcol += '<div class="widget-body" >';


gbcol += '<br/>';



gbcol += '<div class="clearfix" style="padding-bottom:2em; padding-top:2em;">';
          gbcol += '<div class="pull-right">';
            gbcol += '<button onclick="toggleChartHeaders();" class="btn btn-default btn-sm">';
              gbcol += 'Toggle Headers';
            gbcol += '</button>&nbsp;';
            gbcol += '<button onclick="undoTable(); buildForm()" class="btn btn-default btn-sm">';
              gbcol += 'Compose ...';
            gbcol += '</button>&nbsp;';
            gbcol += '<div class="btn-group" data-dropdown="">';
              gbcol += '<button class="btn btn-sm btn-inverse dropdown-toggle" data-toggle="dropdown" aria-expanded="false">';
                gbcol += '&nbsp; Export... &nbsp;';
                gbcol += '<i class="fa fa-caret-down"></i>';
              gbcol += '</button>';
              gbcol += '<ul id="tableSaveOptions" class="dropdown-menu dropdown-menu-right" x-placement="top-end" style="position: absolute; transform: translate3d(-97px, -145px, 0px); top: 0px; left: 0px; will-change: transform;">';
                gbcol += '<li><a class="dropdown-item" onclick="exportTableToCSV(\'results.csv\')">CSV</a></li>';
                gbcol += '<li><a class="dropdown-item" href="#">XML</a></li>';
                gbcol += '<li><a class="dropdown-item" href="#">JSON</a></li>';
                gbcol += '<li class="dropdown-divider"></li>';
                gbcol += '<li><a class="dropdown-item" href="#">Save to Data Space</a></li>';
              gbcol += '</ul>';
            gbcol += '</div>';
          gbcol += '</div>';
          gbcol += '<p id="resultsReport">query time: <span id="reportQueryTime"></span>, timeout: <span id="reportQueryTimeout"></span>, complete: <span id="reportQueryComplete"></span></p>';
        gbcol += '</div>';

            gbcol += '</div>';



gbcol += '</section></div>';



gbcol += '</div>';



$('#dataCanvas').append(gbcol);







if(orientationType == ORIENTATION_TYPE_2){

gbcol = '<div id="recordViewerColumn" class="hide col-lg-'+recordViewerColumnWidth+' col-12"><section class="widget" widget>';

        gbcol += '<div class="widget-body  p-0 ">';
       // gbcol += '<div class="widget-body p-0">';


gbcol += '<nav id="recordNavBar" class="navbar navbar-expand-lg navbar-light bg-light">';
  gbcol += '<a  style="margin-left: 7px;" class="navbar-brand" data-target="#" onclick="javascript:buildForm()">Compose</a>';
  gbcol += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    gbcol += '<i class="glyphicon glyphicon-tree-conifer"></i>';
    gbcol += '<i _ngcontent-c10="" class="glyphicon glyphicon-tree-conifer text-success"></i>';
  gbcol += '</button>';

  gbcol += '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
    gbcol += '<ul class="navbar-nav mr-auto">';
      gbcol += '<li class="nav-item active">';
        gbcol += '<a id="ggg" class="nav-link" data-target="#">Edit</a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#" onclick="javascript:doTable()">Interact</a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a id="ggg" class="nav-link" '+buildTitle('Fetch record from the Giant Global Graph using URIBurner service')+' data-target="#" onclick="describe( $(undefined, \'#angular_recordViewer\').attr(\'iri\'), true )"><i></i>GGG</a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a id="www" '+buildTitle('Fetch document from the World Wide Web')+' class="nav-link" data-target="#" onclick="linkOut()">WWW</a>';
      gbcol += '</li>';
      /*
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#">Charts</a>';
      gbcol += '</li>';

      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#">Map</a>';
      gbcol += '</li>';
      */
      gbcol += '<li class="nav-item dropdown">';
        gbcol += '<a class="nav-link dropdown-toggle" data-target="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
          gbcol += 'Pair';
        gbcol += '</a>';
        gbcol += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
          gbcol += '<a class="dropdown-item" data-target="#">Browser Window</a>';
          gbcol += '<a class="dropdown-item" data-target="#">Device</a>';
          gbcol += '<div class="dropdown-divider"></div>';
          gbcol += '<a class="dropdown-item" data-target="#">New Data Canvas</a>';
        gbcol += '</div>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item dropdown">';
        gbcol += '<a class="nav-link dropdown-toggle" data-target="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
          gbcol += 'Subscribe';
        gbcol += '</a>';
        gbcol += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
          gbcol += '<a class="dropdown-item" data-target="#">Record</a>';
          gbcol += '<a class="dropdown-item" data-target="#">Folder</a>';
        gbcol += '</div>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link disabled" data-target="#">Edit</a>';
      gbcol += '</li>';
    gbcol += '</ul>';
      gbcol += '<button id="idnButton" style="margin-right:1em" class="btn btn-secondary my-2 my-sm-0" onclick="javascript:toggleIDN();">IDN</button>';
//    gbcol += '<form class="form-inline my-2 my-lg-0">';
      //gbcol += '<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">';
//    gbcol += '</form>';
  gbcol += '</div>';
gbcol += '</nav>';


            gbcol += '<div id="angular_recordViewer" class="embed-responsive">'; //embed-responsive-1by1


//gbcol += '<iframe id="describe" class="iframe embed-responsive-item" src="" height="100%"></iframe>';
            gbcol += '</div>';



          //  gbcol += '</div>';
            gbcol += '</div>';        


                        gbcol += '</section></div>';


gbcol += '<div id="recordFormColumn" class="hide col-lg-'+SIZE_RECORD_FORM+' col-12">'

gbcol += '<div class="widget-body  p-0"></div>';
                        gbcol += '</div>';





gbcol += '<div id="mapResults" class="short-div hide"><section class="widget" widget>';

gbcol += '<header id="mapResultsHeader">';
        gbcol += '<div class="widget-controls">';
          //gbcol += '<a href="#"><i class="glyphicon glyphicon-cog"></i></a>';
         // gbcol += '<a data-target="#" class="leftButton" onclick="javascript:pageLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
         // gbcol += '<a data-target="#" class="rightButton" onclick="javascript:pageRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
          gbcol += '<a data-widgster="close" onclick="hideMap()" class="btn-gray"><i class="glyphicon glyphicon-remove"></i></a>';
        gbcol += '</div>';
      gbcol += '</header>';
        gbcol += '<div class="widget-body">';


//var apiKey = 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE';

//gbcol += '<script async defer src="https://maps.googleapis.com/maps/api/js?key='+apiKey+'"> </script>';
gbcol += '<div id="map"></div>';

            gbcol += '</div>'; // widget-body



gbcol += '</section></div>';

$('#dataCanvas').append(gbcol);

}




gbcol = '<div id="showMeColumn" class="hide col-lg-'+showMeColumnWidth+' col-12"><section class="widget" widget>';
gbcol += '<header id="showMeHeader">';
        gbcol += '<h4><span id="showMeCount" class="badge badge-info">0/0</span>&nbsp;<span id="showMeMenuSelectLabel">Categories</span></h4>';



        gbcol += '<div class="widget-controls">';
          //gbcol += '<a data-target="#"><i class="fa fa-refresh"></i></a>';
          gbcol += '<a data-target="#" id="alignButton" class="disabled" ><i class="glyphicon glyphicon-filter text-secondary" '+buildTitle('Align this subject to its parent smart folders')+'></i></a>';
          gbcol += '<a data-target="#" id="showMeLeftButton" '+buildTitle('')+' class="hide" onclick="javascript:showMePageLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
          gbcol += '<a data-target="#" id="showMeRightButton" '+buildTitle('')+' class="hide" onclick="javascript:showMePageRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
//          gbcol += '<a data-widgster="close" data-target="#"><i class="glyphicon glyphicon-remove"></i></a>';
        gbcol += '</div>';
        gbcol += '</header>';


/*


gbcol += '<select onchange="javascript: selectShowMe()" id="showMeMenu">';
    gbcol += '<option value="classes">Categories</option>';
    gbcol += '<option class="disabled" value="properties">Fields</option>';
    gbcol += '<option class="disabled" value="text-properties">Text</option>';
    gbcol += '<option class="disabled" value="properties-in">Used as</option>';
    gbcol += '<option class="disabled" value="graphs">Libraries</option>';
  gbcol += '</select>';


*/

        gbcol += '<div class="widget-body  p-0">';
      //  gbcol += '<div class="widget-body p-0">';
            gbcol += '<div id="angular_showMeList" class="list-group fs-mini">';



            gbcol += '</div>';
           // gbcol += '</div>';
            gbcol += '</div>';        
            gbcol += '<footer class="bg-body-light mt">';
            gbcol += '<input class="form-control form-control-sm" placeholder="Filter" type="search">';
            gbcol += '</footer>';

                        gbcol += '</section></div>';
$('#dataCanvas').append(gbcol);




/// was here

if(orientationType == ORIENTATION_TYPE_1){

gbcol = '<div id="recordViewerColumn" class="hide col-lg-'+recordViewerColumnWidth+' col-12"><section class="widget" widget>';

        gbcol += '<div class="widget-body  p-0 ">';
       // gbcol += '<div class="widget-body p-0">';


gbcol += '<nav id="recordNavBar" class="navbar navbar-expand-lg navbar-light bg-light">';
  gbcol += '<a  style="margin-left: 7px;" class="navbar-brand" data-target="#" onclick="javascript:buildForm()">Compose</a>';
  gbcol += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    gbcol += '<i class="glyphicon glyphicon-tree-conifer"></i>';
    gbcol += '<i _ngcontent-c10="" class="glyphicon glyphicon-tree-conifer text-success"></i>';
  gbcol += '</button>';

  gbcol += '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
    gbcol += '<ul class="navbar-nav mr-auto">';
      gbcol += '<li class="nav-item active">';
        gbcol += '<a id="ggg" class="nav-link" data-target="#">Edit</a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#" onclick="javascript:doTable()">Interact</a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a id="ggg" class="nav-link" '+buildTitle('Fetch record from the Giant Global Graph using URIBurner service')+' data-target="#" onclick="describe( $(undefined, \'#angular_recordViewer\').attr(\'iri\'), true )"><i></i>GGG</a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a id="www" '+buildTitle('Fetch document from the World Wide Web')+' class="nav-link" data-target="#" onclick="linkOut()">WWW</a>';
      gbcol += '</li>';
      /*
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#">Charts</a>';
      gbcol += '</li>';

      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#">Map</a>';
      gbcol += '</li>';
      */
      gbcol += '<li class="nav-item dropdown">';
        gbcol += '<a class="nav-link dropdown-toggle" data-target="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
          gbcol += 'Pair';
        gbcol += '</a>';
        gbcol += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
          gbcol += '<a class="dropdown-item" data-target="#">Browser Window</a>';
          gbcol += '<a class="dropdown-item" data-target="#">Device</a>';
          gbcol += '<div class="dropdown-divider"></div>';
          gbcol += '<a class="dropdown-item" data-target="#">New Data Canvas</a>';
        gbcol += '</div>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item dropdown">';
        gbcol += '<a class="nav-link dropdown-toggle" data-target="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
          gbcol += 'Subscribe';
        gbcol += '</a>';
        gbcol += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
          gbcol += '<a class="dropdown-item" data-target="#">Record</a>';
          gbcol += '<a class="dropdown-item" data-target="#">Folder</a>';
        gbcol += '</div>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link disabled" data-target="#">Edit</a>';
      gbcol += '</li>';
    gbcol += '</ul>';
      gbcol += '<button id="idnButton" style="margin-right:1em" class="btn btn-secondary my-2 my-sm-0" onclick="javascript:toggleIDN();">IDN</button>';
//    gbcol += '<form class="form-inline my-2 my-lg-0">';
      //gbcol += '<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">';
//    gbcol += '</form>';
  gbcol += '</div>';
gbcol += '</nav>';


            gbcol += '<div id="angular_recordViewer" class="embed-responsive">'; //embed-responsive-1by1


//gbcol += '<iframe id="describe" class="iframe embed-responsive-item" src="" height="100%"></iframe>';
            gbcol += '</div>';



          //  gbcol += '</div>';
            gbcol += '</div>';        


                        gbcol += '</section></div>';


gbcol += '<div id="recordFormColumn" class="hide col-lg-'+SIZE_RECORD_FORM+' col-12">'

gbcol += '<div class="widget-body  p-0"></div>';
                        gbcol += '</div>';





gbcol += '<div id="mapResults" class="short-div hide"><section class="widget" widget>';

gbcol += '<header id="mapResultsHeader">';
        gbcol += '<div class="widget-controls">';
          //gbcol += '<a href="#"><i class="glyphicon glyphicon-cog"></i></a>';
         // gbcol += '<a data-target="#" class="leftButton" onclick="javascript:pageLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
         // gbcol += '<a data-target="#" class="rightButton" onclick="javascript:pageRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
          gbcol += '<a data-widgster="close" onclick="hideMap()" class="btn-gray"><i class="glyphicon glyphicon-remove"></i></a>';
        gbcol += '</div>';
      gbcol += '</header>';
        gbcol += '<div class="widget-body">';


//var apiKey = 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE';

//gbcol += '<script async defer src="https://maps.googleapis.com/maps/api/js?key='+apiKey+'"> </script>';
gbcol += '<div id="map"></div>';

            gbcol += '</div>'; // widget-body



gbcol += '</section></div>';

$('#dataCanvas').append(gbcol);
}


gbcol += '</div>';



$('#dataCanvas').append(gbcol);


var hideHelpOnEnter = localStorage.getItem('hideHelpOnEnter');
var storedVersion = localStorage.getItem('version');
localStorage.setItem('version', version);
var newLabel = "";
//if(storedVersion!=version) newLabel = '&nbsp;<span class="badge badge-danger">New!</span>&nbsp;';

gbcol += '<div class="modal fade" id="helpModal" tabindex="-1" role="dialog" aria-labelledby="helpModalLabel" aria-hidden="true">';
  gbcol += '<div class="modal-dialog" role="document">';
    gbcol += '<div class="modal-content">';
      gbcol += '<div class="modal-header">';
        gbcol += '<h5 class="modal-title" id="helpModalLabel">Quick Reference</h5>';
        gbcol += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
          gbcol += '<span aria-hidden="true">&times;</span>';
        gbcol += '</button>';
      gbcol += '</div>';
      gbcol += '<div class="modal-body">';
      gbcol += '  <p><i>Group-by</i>: Click the pinch icon <i class="la la-compress"></i> to group contents by <a href="http://bit.ly/2tRFCX8">Field</a> or <a href="http://bit.ly/2tQ29DZ">Role</a></p>';
      gbcol += '  <p><i>Preview</i>: Click the expand icon <i class="la la-bars"></i> to preview the smart folder contents</p>';
      gbcol += '  <p><i>UI Modes</i>: Press the <i>Ctrl</i> key to toggle Command and Edit Modes';
      gbcol += '  </p><p>';
      gbcol += '  In Commmand Mode:';
      gbcol += '  <ul><li>';
      gbcol += '  Press <i>N</i> key to toggle navigation type';
      gbcol += '  </li><li>'; 
      gbcol += '  Press <i>O</i> key to change orientation';
      gbcol += '  </li><li>';
      gbcol += '  Press <i>S</i> key to toggle Subject badges';
      gbcol += '  </li><li>';
      gbcol += '  Press <i>C</i>, <i>T</i>, <i>F</i>, <i>R</i> or <i>L</i> keys to switch CTRL lists';
      gbcol += '  </li><li>';
      gbcol += '  Use <i>&lt;</i>, <i>&gt;</i>, <i>left arrow</i>, and <i>right arrow</i> to page through list';
      gbcol += '  </li><li>';
      gbcol += '  Use <i>K</i> or <i>L</i> keys to move up lists';
      gbcol += '  </li><li>';
      gbcol += '  Use <i>M</i> or <i>/</i> to move down lists';
      gbcol += '  </li><li>';
      gbcol += '  Hold down <i>1</i> (number one) key, then click Field checkbox to prepend Field to filter collector';
      gbcol += '  </li><li>';
      gbcol += '  Press <i>H</i> key to view this menu';
      gbcol += '  </li></ul>';
      gbcol += '  <p>';
      gbcol += '  '+newLabel+'See <a href="https://medium.com/@sdmonroe/vios-network-99488f5bf29d">this article</a> for more tips';
      gbcol += '  </p>';

      
      gbcol += '</div>';
      gbcol += '<div class="modal-footer">';
        gbcol += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
        gbcol += '<button data-dismiss="modal" onclick="javascript:try{localStorage.setItem(\'hideHelpOnEnter\', true);}catch(e){}" type="button" class="btn btn-primary">Don\'t show again</button>';
      gbcol += '</div>';
    gbcol += '</div>';
  gbcol += '</div>';
gbcol += '</div>';

$('#dataCanvas').append(gbcol);

if(!hideHelpOnEnter){
  //if(!hideHelpOnEnter || storedVersion!=version){
  $('#helpModal').modal({});
}



gbcol = '<app-notifications class="dropdown-menu dropdown-menu-right animated animated-last ladeInUp" _nghost-c1="" style="left: auto; right: 0px;">';
gbcol += '<section _ngcontent-c1="" class="card notifications">';
gbcol += '<header _ngcontent-c1="" class="card-header">';
gbcol += '<div _ngcontent-c1="" class="text-center mb-sm">';
gbcol += '<strong _ngcontent-c1="">You have 13 notifications</strong>';
gbcol += '</div>';
gbcol += '<div _ngcontent-c1="" class="btn-group btn-group-sm" data-toggle="buttons" id="notifications-toggle">';
gbcol += '<label _ngcontent-c1="" class="btn btn-default active">';
gbcol += '<input _ngcontent-c1="" data-ajax-load="assets/demo/notifications/notifications.html" data-ajax-target="#notifications-list" data-ajax-trigger="change" notification-load="" type="radio"> Solid </label>';
gbcol += '<label _ngcontent-c1="" class="btn btn-default">';
gbcol += '<input _ngcontent-c1="" data-ajax-load="assets/demo/notifications/messages.html" data-ajax-target="#notifications-list" data-ajax-trigger="change" notification-load="" type="radio"> Arkane </label>';
gbcol += '<label _ngcontent-c1="" class="btn btn-default">';
gbcol += '<input _ngcontent-c1="" data-ajax-load="assets/demo/notifications/progress.html" data-ajax-target="#notifications-list" data-ajax-trigger="change" notification-load="" type="radio"> Others </label>';
gbcol += '</div>';
gbcol += '</header>';
gbcol += '<div _ngcontent-c1="" class="list-group thin-scroll" id="notifications-list">';
gbcol += '<div _ngcontent-c1="" class="list-group-item"><span _ngcontent-c1="" class="thumb-sm float-left mr clearfix"><img _ngcontent-c1="" alt="..." class="rounded-circle" src="assets/img/people/a3.jpg">';
gbcol += '</span>';
gbcol += '<p _ngcontent-c1="" class="m-0 overflow-hidden"> 1 new user just signed up! Visit <a _ngcontent-c1="" href="#">Monica Smith</a>\'s dataspace. <time _ngcontent-c1="" class="help-block m-0"> 2 mins ago </time></p>';
gbcol += '</div>';
gbcol += '<a _ngcontent-c1="" class="list-group-item" href="#">';
gbcol += '<span _ngcontent-c1="" class="thumb-sm float-left mr"><i _ngcontent-c1="" class="glyphicon glyphicon-upload fa-lg"></i>';
gbcol += '</span>';
gbcol += '<p _ngcontent-c1="" class="text-ellipsis m-0"> 2.1.0-pre-alpha just released. </p><time _ngcontent-c1="" class="help-block m-0"> 5h ago </time>';
gbcol += '</a>';
gbcol += '<a _ngcontent-c1="" class="list-group-item" href="#">';
gbcol += '<span _ngcontent-c1="" class="thumb-sm float-left mr"><i _ngcontent-c1="" class="fa fa-bolt fa-lg"></i></span><p _ngcontent-c1="" class="text-ellipsis m-0"> Server load limited. </p><time _ngcontent-c1="" class="help-block m-0"> 7h ago </time>';
gbcol += '</a>';
gbcol += '<div _ngcontent-c1="" class="list-group-item"><span _ngcontent-c1="" class="thumb-sm float-left mr clearfix"><img _ngcontent-c1="" alt="..." class="rounded-circle" src="assets/img/people/a5.jpg">';
gbcol += '</span>';
gbcol += '<p _ngcontent-c1="" class="m-0 overflow-hidden">User <a _ngcontent-c1="" href="#">Jeff</a> added you &nbsp;&nbsp; <button _ngcontent-c1="" class="btn btn-xs btn-success">Allow</button>&nbsp;<button _ngcontent-c1="" class="btn btn-xs btn-danger">Deny</button><time _ngcontent-c1="" class="help-block m-0"> 12:18 AM </time>';
gbcol += '</p>';
gbcol += '</div>';
gbcol += '<div _ngcontent-c1="" class="list-group-item">';
gbcol += '<span _ngcontent-c1="" class="thumb-sm float-left mr"><i _ngcontent-c1="" class="fa fa-shield fa-lg"></i></span>';
gbcol += '<p _ngcontent-c1="" class="m-0 overflow-hidden"> Instructions for changing your OpenLink POD password. Please check your account <a _ngcontent-c1="" href="#">security page</a>. <time _ngcontent-c1="" class="help-block m-0"> 12:18 AM </time></p>';
gbcol += '</div>';
gbcol += '<a _ngcontent-c1="" class="list-group-item" href="#"><span _ngcontent-c1="" class="thumb-sm float-left mr"><span _ngcontent-c1="" class="rounded bg-primary rounded-lg"><i _ngcontent-c1="" class="fa fa-facebook text-white"></i>';
gbcol += '</span>';
gbcol += '</span>';
gbcol += '<p _ngcontent-c1="" class="text-ellipsis m-0"> New <strong _ngcontent-c1="">76</strong> facebook likes received.</p><time _ngcontent-c1="" class="help-block m-0"> 15 Apr 2014 </time></a>';
gbcol += '<a _ngcontent-c1="" class="list-group-item" href="#"><span _ngcontent-c1="" class="thumb-sm float-left mr"><span _ngcontent-c1="" class="circle circle-lg bg-gray-dark"><i _ngcontent-c1="" class="fa fa-circle-o text-white"></i>';
gbcol += '</span>';
gbcol += '</span>';
gbcol += '<p _ngcontent-c1="" class="text-ellipsis m-0"> Dark matter detected.</p><time _ngcontent-c1="" class="help-block m-0"> 15 Apr 2014 </time></a>';
gbcol += '</div>';
gbcol += '<footer _ngcontent-c1="" class="card-footer text-sm"><button _ngcontent-c1="" appnotificationsload="" class="btn btn-xs btn-link float-right btn-notifications-reload" data-ajax-load="assets/demo/notifications/notifications.php" data-ajax-target="#notifications-list" data-loading-text="<i class=\'fa fa-refresh fa-spin mr-xs\'></i> Loading..." id="load-notifications-btn"><i _ngcontent-c1="" class="fa fa-refresh"></i></button>';
gbcol += '<span _ngcontent-c1="" class="fs-mini">Synced at: 21 Feb 2019 18:36</span>';
gbcol += '</footer>';
gbcol += '</section>';
gbcol += '</app-notifications>';
$('.avatar').parent().parent().append(gbcol);

//widget shadows interfer with the breadcrumbs
$('.widget').css('box-shadow', '');
$('.widget').css('-webkit-box-shadow', '');
$('.avatar').parent().children('.small').css('padding-left', '8px');
    $('.avatar').parent().children('.small').text('Sign In');
    $('.avatar').children('img').attr('src', 'https://solid.inrupt.com/themes/custom/solid/logo.svg');// 'http://www.gravatar.com/avatar/' + ('info@vios.network'));
    //$('.avatar').children('img').attr('width', '24');
    $('.avatar').children('img').addClass('rounded-circle');
//    $('.avatar').children('img').attr('height', '24');
    $('.avatar').parent().children('.circle').addClass('hide');
    $('.avatar').removeClass('mr-2');
$('.avatar').parent().children('.small').attr('id', 'profileName');
$('.avatar').parent().children('.circle').attr('id', 'profileManagerPreview');
$('.avatar').parent().children('.circle').text('8');
$('.avatar').parent().children('.circle').after('<b class="caret hide"></b>');
$('.avatar').parent().children('.circle').on('click', function(e){

  showProfileManagerPreview();

});
$('.avatar').parent().children('.caret').on('click', function(e){

  showProfileManagerPreview();

});

$('#profileName').on('click', function(e){
  //solid.auth.popupLogin({ "popupUri":"http://data.vios.network/DAV/home/vios/popup.html" });
  solid.auth.popupLogin({ "popupUri":"https://solid.github.io/solid-auth-client/dist/popup.html" });



const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
const PIM = $rdf.Namespace('http://www.w3.org/ns/pim/space#');
const LDP = $rdf.Namespace('http://www.w3.org/ns/ldp#');


// Update components to match the user's login status
solid.auth.trackSession(session => {
  const loggedIn = !!session;
  //$('#login').toggle(!loggedIn);
  //$('#logout').toggle(loggedIn);
  if (loggedIn) {

    $('.avatar').parent().children('.small').empty();


$('.avatar').parent().children('.circle').each(async (i) => {
  if(i > 0) return;
  // Set up a local data store and associated data fetcher
  const store = $rdf.graph();
  const fetcher = new $rdf.Fetcher(store);

  // Load the person's data into the store
  const person = session.webId;
  await fetcher.load(person);

  // Display their details
  fullName = store.any($rdf.sym(person), FOAF('name'));
  email = store.any($rdf.sym(person), FOAF('mbox'));
  storage = store.any($rdf.sym(person), PIM('storage'));
  inbox = store.any($rdf.sym(person), LDP('inbox'));
  //alert('inbox: ' + inbox.value + ' storage: ' + storage.value);
  //$('#fullName').text(fullName && fullName.value);



    //$('.avatar').parent().children('.small').text(session.webId);
    $('.avatar').parent().children('.small').text(fullName.value);

    //alert('email: ' + email);

    $('.avatar').children('img').attr('src', 'http://www.gravatar.com/avatar/' + md5(email));

        $('.avatar').parent().children('.circle').removeClass('hide');
        $('.avatar').parent().children('.caret').removeClass('hide');

    $('.avatar').parent().parent().removeClass('open');
    $('.avatar').parent().parent().removeClass('show');

  });
    // Use the user's WebID as default profile
    //if (!$('#profile').val())
    //  $('#profile').val(session.webId);
  } // is logged in



});

});


//    $('#keywords').val(VALUE_DEFAULT_KEYWORDS_TEXT);
    $('#dsroot').attr('title', service_fct);
    getQuery().attr('label', LABEL_ROOT);

    qGroupBy = fct_getUrlParameter('groupBy'); // the loading of gGroupBy is done in doQuery
    qShowMe = fct_getUrlParameter('showMe');
    qdataSpace = fct_getUrlParameter('dataSpace');
    qdataSpaceLabel = fct_getUrlParameter('dataSpaceLabel');
    qSearchAllFields = fct_getUrlParameter('searchAllFields');
    qTimeout = fct_getUrlParameter('timeout');
    qNavType = fct_getUrlParameter('navType');
    qPage = fct_getUrlParameter('page');
    qshowMePage = fct_getUrlParameter('ctrlPage');
    qViewType = fct_getUrlParameter('viewType');
    qIsChart = fct_getUrlParameter('isChart');
    qSubjectBadges = fct_getUrlParameter('subjectBadges');
    qFilterRecordViewFields = fct_getUrlParameter('filterRecordViewFields');

    qVerticalChartHeaders = fct_getUrlParameter('verticalChartHeaders');

    qIsRollup = fct_getUrlParameter('isRollup');

    if(qShowMe && qShowMe.length > 0) {
      selectMenuItem('showMeMenu', qShowMe, true);
      qShowMe = null;
    }
    if(qTimeout && qTimeout.length > 0) {
      setQueyTimeout(qTimeout);
      qTimeout = null;
    }
    if(qNavType && qNavType.length > 0) {
      setNavType(qNavType);
      qNavType = null;
    }
    if(qSearchAllFields && qSearchAllFields.length > 0 && qSearchAllFields.toLowerCase() == 'true'){
      isExpandSearch = true;
      $('#isSearchAllFields').prop('checked', true);
      $('#isSearchAllFields').parent().addClass('active');
      $('#isSearchAllFields').parent().attr('aria-pressed','true');
      qSearchAllFields = null;
    }
    if(qSubjectBadges && qSubjectBadges.length > 0) {
      setShowSubjectBadges(qSubjectBadges == 'true');
      qSubjectBadges = null;
    }
    if(qVerticalChartHeaders && qVerticalChartHeaders.length > 0) {
      setVerticalChartHeaders(qVerticalChartHeaders == 'true');
      qVerticalChartHeaders = null;
    }

    if(qFilterRecordViewFields && qFilterRecordViewFields.length > 0) {
      filterRecordViewFields = qFilterRecordViewFields == 'true';
      qFilterRecordViewFields = null;
    }

    //POI:
    // ********************** IMPORTANT ****************************** //
    // be sure to load the dataspace last, so that all the above configuration is 
    // applied when selectDataspace() is called, since this function calls doQuery()
    var idx = localStorage.getItem('dataspaceIndex'); // grab the cached dataspaceIndex before the setDataspace() calls below update the index

    try{
      ds = JSON.parse(localStorage.getItem('dataspaces'));
      if(!ds) ds = [];
      ds.sort(function(a, b){
        var x = a[1].toLowerCase();
        var y = b[1].toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }
    catch(err){
      if(fct_isDebug) console.log('Dataspace cache retrieve failed: ' + err);
    }
    for(i=0; i<ds.length; i++){
        if(i==0) $('a#dataSpaceMenu').parent().children('.dropdown-menu').append('<li class="dropdown-divider"></li>');
        $('a#dataSpaceMenu').parent().children('.dropdown-menu').append('<li><a url="'+ds[i][0]+'" class="dropdown-item" onclick="selectDataspace(\''+ds[i][0]+'\', \''+ds[i][1]+'\')">'+ds[i][1]+'</a></li>');
        dataspaceAdded = true;

        if(i + 1 == ds.length){
          if(!qdataSpace || qdataSpace.length <= 0){
            selectDataspace(ds[i][0], ds[i][1], true);
          }
        }
    }

    addDataspace('dbpedia.org','DBPedia',false,true); // try to add DBPedia
    addDataspace('lod.openlinksw.com','LOD',false,true); // try to add LOD Cloud Cache
    addDataspace('demo.openlinksw.com','OpenLink Demo',false,true); // try to add OpenLink Demo
    addDataspace('linkeddata.uriburner.com','URIBurner',false,true); // try to add URI Burner
    addDataspace('data.vios.network','VIOS',false,true); // try to add VIOS

    try{
      if(idx){
        var idxInt = parseInt(idx);
        selectDataspace(ds[idxInt][0], ds[idxInt][1], true);
      }
    }
    catch(err){
      if(fct_isDebug) console.log('Dataspace cache index retrieve failed: ' + err);
    }

    if(qdataSpace && qdataSpace.length > 0){
      var dropdownItem = $('a#dataSpaceMenu').parent().children('.dropdown-menu').children('li').children('a[url="'+dataspace+'"]');
      if((!dropdownItem || dropdownItem.length) <= 0 && ds.indexOfDataspace(qdataSpace) == -1){
          addDataspace(qdataSpace, qdataSpaceLabel, true);
          dataspaceAdded = true;
      }
      else {
        selectDataspace(qdataSpace, qdataSpaceLabel, true);
      }
      qdataSpace = null;
      qdataSpaceLabel = null;
    }


    if(getQueryText()){
      $('#keywords').val(getQueryText());
      $('#keywords').focus(); 
      $('#keywords').select();
    }

    $('#dataSpaceMenu').prepend('&nbsp;<span id="dataSpaceLabel">'+getDataspaceLabel()+'</span>');
    
    loadGroupByMenuDefaults();

    try{
      setNavType(localStorage.getItem('navType'));
    }
    catch(e){

    }

    preInitialized = true;
    if(fct_isPermalink) doQuery(getQueryText());    

    if(qPage && qPage.length > 0) {
      page = parseInt(qPage);
      selectMenuItem('groupByMenu', $('#groupByMenu').val(), true);
      selectGroupBy(true);
      qPage = null;
    }
    if(qshowMePage && qshowMePage.length > 0) {
      showMePage = parseInt(qshowMePage);
      selectMenuItem('showMeMenu', $('#showMeMenu').val(), true);
      selectShowMe(true);
      qshowMePage = null;
    }

    if(qViewType && qViewType.length > 0) {
      if(qViewType == 'table') {
        if(qIsChart && qIsChart.length > 0) {
          setChart(qIsChart == 'true');
        }
        if(qIsRollup && qIsRollup.length > 0) {
          setRollup(qIsRollup == 'true');
        }
        doTable();
      }
      else if(qViewType == 'form') buildForm();
      qViewType = null;
      qIsChart = null;
      qIsRollup = null;
    }


    /* TODO: use qTip for tooltips
    var api = $('[title!=""]').qtip('api');
    api.timers = {
        show: timerObject, // Value of the setTimeout call for showing the tooltip (if show.delay is set)
        hide: timerObject // Value of the setTimeout call for hiding the tooltip (if hide.delay is set)
    }    
    */

    $('#keywords').focus();


$('[data-toggle="tooltip"]').tooltip(); // activate facet tooltips


}

function doRemoveDataspace(){
  var idx = ds.indexOfDataspace(dataspace);
  $('a#dataSpaceMenu').parent().children('.dropdown-menu').children('li').children('a[url="'+dataspace+'"]').remove();
  ds.splice(idx, 1);
  if(idx >= ds.length) idx = ds.length - 1;
  if(idx < 0) idx = 0;  
  if(ds.length > 0) {
    selectDataspace(ds[idx][0], ds[idx][1]);
  }
  else {
    addDataspace('lod.openlinksw.com','LOD',false,false); // try to add LOD Cloud Cache
  }
}

function showProfileManagerPreview(){
  var isProfileManagerOpen = $('.avatar').parent().parent().hasClass('open');
  if(isProfileManagerOpen){
    $('.avatar').parent().parent().removeClass('open');
    $('.avatar').parent().parent().removeClass('show');
    $('.avatar').parent().attr('aria-expanded', 'false');
    $('app-notifications').removeClass('show');
    $('app-notifications').css('top', '');
    $('app-notifications').css('transform', '');
    $('app-notifications').css('bottom', '');
  }
  else {
    $('.avatar').parent().parent().addClass('open');
    $('.avatar').parent().parent().addClass('show');
    $('.avatar').parent().attr('aria-expanded', 'true');
    $('app-notifications').addClass('show');
    $('app-notifications').css('left', 'auto');
    $('app-notifications').css('right', '0px');
    $('app-notifications').css('top', '100%');
    $('app-notifications').css('transform', 'traslateY(0px)');
    $('app-notifications').css('bottom', 'auto');
  }
}
//const popupUri = 'http://myopenlink.net/DAV/home/sdmonroe/popup.html';
function buildForm(){
  addTab(getMainFocus().attr('class'), 0);
  $('#recordViewerColumn').addClass('hide');
  $('#recordFormColumn').removeClass('hide');
  updatePermalink();
  //doQuery(getQueryText());
}

function hideForm(){
  $('#recordFormColumn').addClass('hide');
  $('#recordViewerColumn').removeClass('hide');
}

  function isFormShowing(){
    return !$('#recordFormColumn').hasClass('hide');
  }

function showMap(){
  //addTab(getMainFocus().attr('class'), 0);
  $('#recordViewerColumn').addClass('hide');
  $('#mapResults').removeClass('hide');  
}

function hideMap(){
  $('#mapResults').addClass('hide');
  $('#recordViewerColumn').removeClass('hide');
}




var formRDF = '';//$.createElement('rdf\\:RDF');
var formNamespaceCt = 0;
var formNamespaceMap = {};

function createURI(){
  return 'http://www.vios.network/i#' + createId();
}


function addTab(fctId, tabCounter) {
    // tabCounter++;
    //var label = tabTitle.val() || "Tab " + tabCounter;
    var id = "tabs-" + tabCounter;
    var tabTitle = $("#tab_title");
    var tabContent = $("#tab_content");
    var uri = createURI();
    var uriDesc = $.createElement('rdf:Description');
    uriDesc.attr('rdf:about', uri);

    if (tabCounter == 0) {
        $('.tab-content').empty();
        $('ul[role="tablist"]').empty();
        formRDF = $.createElement('rdf:RDF');
        formRDF.append(uriDesc);
        formNamespaceCt = 0;
        formNamespaceMap = {};
    }




    var form = $.createElement('form');
    form.attr('id', 'tabs-1');
    form.addClass('form-horizontal');
    form.addClass('ng-untouched');
    form.addClass('ng-pristine');
    form.addClass('ng-valid');
    form.attr('novalidate', '');
    form.attr('role', 'form');
    form.attr('_lpchecked', '1');
    var fieldset = $.createElement('fieldset');

    //var table = $.createElement('table');
    var buttonPanel = $.createElement('div');
    buttonPanel.addClass('form-actions');

    var rows = '';

    var buttonblock = $.createElement('div');
    buttonblock.addClass('btn-block');
    buttonblock.addClass('text-center');



    var classes = $(_root.find('.' + fctId + ' > class'));
    var tabLabel = _root.find('.' + fctId).attr('label');


    if (classes && classes.length > 0) {
        rows += '<legend class="m-2"><strong>General</strong> Categories</legend>';

        rows += '<div class="form-group row">';
        rows += '<label class="col-md-4  col-form-label text-md-right" for="normal-field">';
        rows += 'Categories';
        rows += '</label>';
        rows += '<div class="col-md-7 ">';
        var clazz = '';
        classes.each(function(i) {
            //tabTemplate.replace('class="nav-item', 'class="nav-item drop');
            //var  ddli = $( tabTemplate.replace( /#\{id\}/g, id ).replace( /#\{label\}/g,    ( (fctId == ID_QUERY) ? (tabTitle.val() || "Record " + tabCounter) : getQuery().attr('label') )     ) );
            //tabList.append(ddli);
            if (i == 0) tabLabel = processLabel($(this).attr('label')); // POI: take the latest added class as the tab label
            clazz += ((i > 0) ? ', ' : '') + processLabel($(this).attr('label'));

            var type = $.createElement('rdf:type');
            type.attr('rdf:Resource', $(this).attr('iri'));
            uriDesc.append(type);

        });
        rows += '<input class="form-control" id="normal-field" disabled="disabled" placeholder="Enter category value" value="' + clazz + '" type="text" id="' + createId() + '"/>';
        rows += '</div>';
        rows += '</div>';
    }




    var hasLegend = false;


    $(_root.find('.' + fctId + ' > property')).each(function(i) {
        /*var children = $(this).has('property');
        var tar = (children) ? breadcrumbs : facetCollector ;*/

        var label = $(this).attr('label');
        var len = $(this).find('property').length;
        len += $(this).find('property-of').length;
        len += $(this).find('class').length;
        //if(len > 0) label += ' [' + len + ']';
        var value = $(this).find('value').text();
        var valueLabel = $(this).find('value').attr('label');
        var iri = $(this).attr('iri');
        var subId = $(this).attr('class');

        var ns = iri;
        var propFrag = iri;
        var nsQName = '';
        if (iri.indexOf('#') > 0) {
            ns = iri.substring(0, iri.lastIndexOf('#') + 1);
            propFrag = iri.substring(iri.lastIndexOf('#') + 1);
        }
        else {
            ns = iri.substring(0, iri.lastIndexOf('/') + 1);
            propFrag = iri.substring(iri.lastIndexOf('/') + 1);
        }
        if(formNamespaceMap[ns]){
          nsQName = formNamespaceMap[ns];
        }
        else {
          nsQName = 'ns' + formNamespaceCt;
          formNamespaceMap[ns] = nsQName;
          formNamespaceCt++;
        }
        formRDF.attr('xmlns:' + nsQName, ns);
        var triple = $.createElement(nsQName + ':' + propFrag);
        if (value) {
            var datatype = $(this).find('value').attr('datatype');
            if (datatype == 'uri') triple.attr('rdf:Resource', value);
            else {
              var lang = $(this).find('value').attr('lang');
              if (lang) triple.attr('xml:lang', lang);
              triple.text((value) ? value : '');
            }
        }
        else{
            //triple.text(createId());
        }
        uriDesc.append(triple);

        if ($(this).children('property, property-of').length <= 0) {

            if (!hasLegend) {
                rows += '<legend class="m-2"><strong>General</strong> Fields</legend>';
                hasLegend = true;

            }
            rows += '<div class="form-group row">';
            rows += '<label class="col-md-4  col-form-label text-md-right" for="normal-field">';
            rows += label;




            var cls = $(_root.find('.' + fctId + ' > property[iri="' + iri + '"]')).children('class');


            if (cls && cls.length > 0) {
                rows += '<span class="help-block">';

                cls.each(function(j) {
                    rows += ((j > 0) ? ', ' : '') + processLabel($(this).attr('label'));


                });
                rows += '</span>';
            }




            rows += '</label>';
            rows += '<div class="col-md-7 ">';
            var disabled = (value) ? ' disabled="disabled"' : '';
            if (valueLabel) valueLabel = processLabel(valueLabel);
            else valueLabel = '';
            rows += '<input class="form-control" id="normal-field"' + disabled + ' placeholder="Enter field value" value="' + valueLabel + '" type="text" id="' + createId() + '"/>';
            rows += '</div>';
            rows += '</div>';
        }
        else {
            //var subTab = $(this);
            var b = $.createElement('button');
            b.addClass('btn');
            b.addClass('btn-info');
            b.attr('type', 'button');

            // AddTab button: just opens the dialog
            b.button().on("click", function() {
                //$('#tab_title').attr('value', );        
                //buildForm();

                addTab(subId, createId());
                $('#recordFormColumn').addClass('dont-touch');
                takeMainFocus(subId);
                //$('#recordFormColumn').remmoveClass('dont-touch');
                //$('#tabs').removeClass('hide');
                b.remove();
                if (buttonblock.children('button').length <= 0) {
                    buttonblock.parent().remove();
                }
                //        dialog.dialog( "open" );
            });

            b.text(label);

            buttonblock.append(b);
            buttonblock.append('&nbsp;');

        }

    });




    hasLegend = false;


    $(_root.find('.' + fctId + ' > property-of')).each(function(i) {
        /*var children = $(this).has('property');
        var tar = (children) ? breadcrumbs : facetCollector ;*/

        var label = $(this).attr('label');
        var len = $(this).find('property').length;
        len += $(this).find('property-of').length;
        len += $(this).find('class').length;
        //if(len > 0) label += ' [' + len + ']';
        var value = $(this).find('value').text();
        var valueLabel = $(this).find('value').attr('label');
        var iri = $(this).attr('iri');
        var subId = $(this).attr('class');


        var ns = iri;
        var propFrag = iri;
        var nsQName = '';
        if (iri.indexOf('#') > 0) {
            ns = iri.substring(0, iri.lastIndexOf('#') + 1);
            propFrag = iri.substring(iri.lastIndexOf('#') + 1);
        }
        else {
            ns = iri.substring(0, iri.lastIndexOf('/') + 1);
            propFrag = iri.substring(iri.lastIndexOf('/') + 1);
        }
        if(formNamespaceMap[ns]){
          nsQName = formNamespaceMap[ns];
        }
        else {
          nsQName = 'ns' + formNamespaceCt;
          formNamespaceMap[ns] = nsQName;
          formNamespaceCt++;
        }
        formRDF.attr('xmlns:' + nsQName, ns);
        var triple = $.createElement(nsQName + ':' + propFrag);
        if ($(this).find('value')) {
            var datatype = $(this).find('value').attr('datatype');
            if (datatype == 'uri') triple.attr('rdf:Resource', value);
            else {
              var lang = $(this).find('value').attr('lang');
              if (lang) triple.attr('xml:lang', lang);
              triple.text((value) ? value : '');
            }
        }
        else{
            //triple.text(createId());
        }
        uriDesc.append(triple);


        if ($(this).children('property, property-of').length <= 0) {
            if (!hasLegend) {
                rows += '<legend class="m-2"><strong>General</strong> Roles</legend>';
                hasLegend = true;
            }
            rows += '<div class="form-group row">';
            rows += '<label class="col-md-4  col-form-label text-md-right" for="normal-field">';
            rows += label + ' of';




            var cls = $(_root.find('.' + fctId + ' > property-of[iri="' + iri + '"]')).children('class');


            if (cls && cls.length > 0) {
                rows += '<span class="help-block">';

                cls.each(function(j) {
                    rows += ((j > 0) ? ', ' : '') + processLabel($(this).attr('label'));


                });
                rows += '</span>';
            }




            rows += '</label>';
            rows += '<div class="col-md-7 ">';
            var disabled = (value) ? ' disabled="disabled"' : '';
            if (valueLabel) valueLabel = processLabel(valueLabel);
            else valueLabel = '';
            rows += '<input class="form-control" id="normal-field"' + disabled + ' placeholder="Enter rolee value" value="' + valueLabel + '" type="text" id="' + createId() + '"/>';
            rows += '</div>';
            rows += '</div>';
        }
        else {
            //var subTab = $(this);
            var b = $.createElement('button');
            b.addClass('btn');
            b.addClass('btn-info');
            b.attr('type', 'button');

            // AddTab button: just opens the dialog
            b.button().on("click", function() {
                //$('#tab_title').attr('value', );        
                //takeMainFocus(subId);
                //buildForm();

                addTab(subId, createId());
                $('#recordFormColumn').addClass('dont-touch');
                takeMainFocus(subId);
                //$('#recordFormColumn').remmoveClass('dont-touch');
                //$('#tabs').removeClass('hide');
                b.remove();
                if (buttonblock.children('button').length <= 0) {
                    buttonblock.parent().remove();
                }

                //        dialog.dialog( "open" );
            });

            b.text(label);

            buttonblock.append(b);
            buttonblock.append('&nbsp;');
        }

    });

    //table.append(rows);
    if (rows && rows != undefined) {
        fieldset.append(rows);
        form.append(fieldset);
    }
    form.append("<br/>");
    if (buttonblock.children('button').length > 0) {
        buttonPanel.append(buttonblock);
        form.append(buttonPanel);
    }
    //var tabs = $.createElement('ul');
    //tabs.append('<li><a href="#tabs-1">'+getQuery().attr('label')+'</a></li>');


    var tabTemplate = '<li class="nav-item"><a aria-controls="' + id + '" onclick="selectTab(' + tabCounter + ')" aria-expanded="false" class="nav-link' + ((tabCounter == 0) ? ' active' : '') + '" data-toggle="tab" id="profile-tab" role="tab">' + tabLabel + '</a></li>';
    var tabDropDownTemplate = '<a aria-controls="' + id + '" aria-expanded="true" class="dropdown-item show" data-toggle="tab" id="' + id + '-tab" role="tab" aria-selected="true">' + _root.find('.' + fctId).attr('label') + '</a>';
    $(_root.find('.' + fctId + ' > class')).each(function(i) {
        //tabTemplate.replace('class="nav-item', 'class="nav-item drop');
        //var  ddli = $( tabTemplate.replace( /#\{id\}/g, id ).replace( /#\{label\}/g,    ( (fctId == ID_QUERY) ? (tabTitle.val() || "Record " + tabCounter) : getQuery().attr('label') )     ) );
        //tabList.append(ddli);
    });

    /*
          var  li = $( tabTemplate.replace( /#\{id\}/g, id ).replace( /#\{label\}/g,    ( (fctId == ID_QUERY) ? (tabTitle.val() || "Record " + tabCounter) : getQuery().attr('label') )     ) );
          var  tabContentHtml = form.prop('outerHTML') || "Tab " + tabCounter + " content.";
     

    */


    $('ul[role="tablist"]').append(tabTemplate);


    var tabPanel = $.createElement('div');
    tabPanel.attr('aria-labelledby', id + '-tab');
    tabPanel.attr('role', 'tabpanel');
    tabPanel.addClass('tab-pane');
    tabPanel.attr('id', id);
    if (tabCounter == 0 && false) {
        tabPanel.attr('aria-expanded', 'true');
        tabPanel.addClass('active');
        tabPanel.addClass('in');
        tabPanel.addClass('clearfix');


    }



    tabPanel.append(form);
    /*
    tabPanel.append('<div class="float-right">');
              tabPanel.append('<button onclick="hideForm()" class="btn btn-inverse">Cancel</button>');
              tabPanel.append('&nbsp;');
              tabPanel.append('<button class="btn btn-primary">Save to localhost</button>');
            tabPanel.append('</div>');
    */

    var footer = '';

    footer += '<br/>';
    footer += '<div class="clearfix">';
    footer += '<div _ngcontent-c4="" class="btn-group dropdown" dropdown="">';
    footer += '<button _ngcontent-c4="" class="btn btn-default btn-sm" id="dropdown-btn-three">Vocabularies</button>';
    footer += '<button _ngcontent-c4="" class="btn btn-default dropdown-toggle btn-sm" dropdowntoggle="" aria-haspopup="true">';
    footer += '<i _ngcontent-c4="" class="fa fa-caret-down"></i>';
    footer += '</button>';
    footer += '<button _ngcontent-c4="" '+buildTitle('Vocabulary Search')+ ' onclick="javascript:window.open(\'https://lov.linkeddata.es\', \'vios.vocab\', \'width=\\\''+window.outerWidth+'\\\' height=\\\''+window.outerHeight+'\\\'\')" class="btn btn-default btn-sm">';
    footer += '<i _ngcontent-c4="" class="fa fa-search"></i>';
    footer += '</button>&nbsp;';
    footer += '<!---->';
    footer += '</div>';
    footer += '<div class="pull-right">';

    footer += '<button class="btn btn-default btn-sm">';
    footer += 'Category&nbsp;<i class="fa fa-plus-square text-info"></i>';
    footer += '</button>&nbsp;';
    footer += '<button class="btn btn-default btn-sm">';
    footer += 'Field&nbsp;<i class="fa fa-plus-square text-info"></i>';
    footer += '</button>&nbsp;';
    footer += '<button class="btn btn-default btn-sm">';
    footer += 'Role&nbsp;<i class="fa fa-plus-square text-info"></i>';
    footer += '</button>&nbsp;';
    footer += '&nbsp;&nbsp;&nbsp;&nbsp;';

    footer += '<button onclick="hideForm()" class="btn btn-default btn-sm">';
    footer += 'Cancel';
    footer += '</button>&nbsp;';

    footer += '<div class="btn-group" data-dropdown="">';
    footer += '<button class="btn btn-sm btn-inverse dropdown-toggle" data-toggle="dropdown" aria-expanded="false">';
    footer += '&nbsp; Save To... &nbsp;';
    footer += '<i class="fa fa-caret-down"></i>';
    footer += '</button>';

    footer += '<ul class="dropdown-menu dropdown-menu-right" x-placement="top-end" style="position: absolute; transform: translate3d(-97px, -145px, 0px; top: 0px; left: 0px; will-change: transform;">';
    if (inbox) footer += '<li><a href="' + getInbox() + '" ' + buildTitle(getInbox(), 'right') + ' class="dropdown-item" >Inbox</a></li>';
    if (storage) footer += '<li><a href="' + getStorage() + '" ' + buildTitle(getStorage(), 'right') + ' class="dropdown-item" >Storage</a></li>';
    //footer += '<li><a class="dropdown-item" href="#">vios.network</a></li>';
    //footer += '<li><a class="dropdown-item" href="#">Solid POD</a></li>';
    if (!inbox && !storage) {
        //                  footer += '<li class="dropdown-divider"></li>';
        footer += '<li><a class="dropdown-item" href="#">Save to Data Space...</a></li>';
    }
    else {
        footer += '<li class="dropdown-divider"></li>';
    }
    footer += '<li><a onclick="downloadDataFile(formRDF.prop(\'outerHTML\'), \'rdf_' + createId() + '.rdf\');" class="dropdown-item" href="#">Export</a></li>';
    footer += '</ul>';
    footer += '</div>';


    footer += '</div>';
    footer += '</div>';

    tabPanel.append(footer);



    $('.tab-content').append(tabPanel);



    selectTab(tabCounter);
    $('[data-toggle="tooltip"]').tooltip();
}


function selectTab(tabct){

      var tab = $('a.nav-link[aria-expanded="true"]');
        tab.attr('aria-expanded', 'false');
     tab.removeClass('active');
  var tabPanel = $('div.tab-pane[aria-expanded="true"]');
        tabPanel.attr('aria-expanded', 'false');
     tabPanel.removeClass('active');
      tabPanel.removeClass('in');
      tabPanel.removeClass('clearfix');

      tab = $('a.nav-link[aria-controls="tabs-'+tabct+'"]');
        tab.attr('aria-expanded', 'true');
     tab.addClass('active');

  tabPanel = $('div#tabs-'+tabct);
        tabPanel.attr('aria-expanded', 'true');
     tabPanel.addClass('active');
      tabPanel.addClass('in');
      tabPanel.addClass('clearfix');

}


var isActivated = false;
function activate(){

  $('#groupByColumn').removeClass('hide');
  $('#showMeColumn').removeClass('hide');
  $('#recordViewerColumn').removeClass('hide');

     var tabs = $( "#recordFormColumn > .widget-body" );

      var tabList = $.createElement('ul');
      tabList.addClass('nav');
      tabList.addClass('nav-tabs');
            tabList.addClass('float-left');
            tabList.attr('role', 'tablist');

//      $( '.nav-tabs' ).append( li );
      //tabs.tabs( "load" , 1);
      //$('#'+id).tabs( "option", "show", { effect: "blind", duration: 800 });
      //tabs.tabs( "refresh" );
      var tabBarParent = $.createElement('div');
      tabBarParent.addClass('clearfix');

      
      tabBarParent.append(tabList);
      tabs.append( tabBarParent );


      var widget = $.createElement('div');
      widget.addClass('tab-content');
      widget.addClass('mb-lg');


            //tabPanel.append( form );
      //widget.append(tabPanel);
      tabs.append( widget );

}

  function doTable(){
    setNavType(NAV_TYPE_2);
    doQuery(getQueryText());
    $('#recordViewerColumn').addClass('hide');
    $('#groupByColumn').removeClass('col-lg-'+SIZE_GROUP_BY);
    $('#groupByColumn').addClass('col-lg-'+(parseInt(SIZE_GROUP_BY)+parseInt(SIZE_RECORD_VIEWER)));
    $('#tabularResults').removeClass('hide');
    $('#recordsListWidgetContainer').addClass('hide');
    if(nav_type == NAV_TYPE_3) $('#facetCollectorWidgetContainer').addClass('hide');

    selectMenuItem('showMeMenu', VIEW_TYPE_PROPERTIES); // POI: be sure to load the fields menu after 'hide' class logic is applied to table, since this controls the visibility of group-by 'pinch' icon
    loadTable();

  }

  function undoTable(){
    $('#recordViewerColumn').removeClass('hide');
    $('#groupByColumn').removeClass('col-lg-'+(parseInt(SIZE_GROUP_BY)+parseInt(SIZE_RECORD_VIEWER)));
    $('#groupByColumn').addClass('col-lg-'+SIZE_GROUP_BY);
    $('#tabularResults').addClass('hide');
    $('#recordsListWidgetContainer').removeClass('hide');
    if(nav_type == NAV_TYPE_3) $('#facetCollectorWidgetContainer').removeClass('hide');

    doQuery(getQueryText());
  }

  function isTableShowing(){
    return !$('#tabularResults').hasClass('hide');
  }



function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table#resultsTable thead tr, table#resultsTable tbody tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("th, td");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }

    // Download CSV file
    downloadDataFile(csv.join("\n"), filename.replace('.cvs', + '_' + createId() + '.cvs'));
}

function downloadDataFile(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    downloadLink.target = '_blank';

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}
// **** TODO: implement speech selection of facets from list
/*
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

// let p = document.createElement('p');
//  const words = document.querySelector('body');
//  words.appendChild(p);

  recognition.addEventListener('results', e => {
console.log(e);
  });

  recognition.start();


  function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {


      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
        document.getElementById('transcript').value
                                 = e.results[0][0].transcript;
        recognition.stop();
        document.getElementById('labnol').submit();
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }

    }
  }
  */


  function showFacetCollector(){
    $('#facetCollectorWidgetContainer').removeClass('hide');
  }
  function hideFacetCollector(){
    $('#facetCollectorWidgetContainer').addClass('hide');
  }
  function showRecordsList(){
    $('#recordsListWidgetContainer').removeClass('hide');
  }
  function hideRecordsList(){
    $('#recordsListWidgetContainer').addClass('hide');
  }
  function showControlList(){
    $('#showMeColumn').removeClass('hide');
  }
  function hideControlList(){
    $('#showMeColumn').addClass('hide');
  }
  function isFacetCollectorVisible(){
    return !$('#facetCollectorWidgetContainer').hasClass('hide');
  }
  function isRecordsListVisible(){
    return !$('#recordsListWidgetContainer').hasClass('hide');
  }
  function setRecordListVisable(b){
    if(b) $('#recordsListWidgetContainer').removeClass('hide');
    else $('#recordsListWidgetContainer').addClass('hide');
  }

  function isControlListVisible(){
    return !$('#showMeColumn').hasClass('hide');
  }

document.onkeydown = checkKey;
document.onkeyup = checkKeyRelease;

var ctrlDown = false;
var oneKeyDown = false;
function isCTRLKeyDown(){
  return ctrlDown;
}
function isOneKeyDown(){
  return oneKeyDown;
}

function checkKeyRelease(e) {
      e = e || window.event;
    if (e.keyCode == '17') { // control key
        ctrlDown = false;
    }
    else if (e.keyCode == '49') { // 1 KEY
        oneKeyDown = false;
    }
}

function checkKey(e) {


    e = e || window.event;

    if (e.keyCode == '116') { // F5 key
       doExplore($('#keywords').val());
    }


if(!$('input[type="text"], input[type="search"]').is(":focus")){
    if (e.keyCode == '49') {
      oneKeyDown = true;
    }
    else if (e.keyCode == '188') { // period key
        if(page > 0 && !$('#leftButton').hasClass('hide')) pageLeft();
        else beep2();
    }
    else if (e.keyCode == '190') { // comma key
        if(!$('#rightButton').hasClass('hide')) pageRight();
        else beep2();
    }
    else if (e.keyCode == '37') { // left arrow key
       if(showMePage > 0 && !$('#showMeLeftButton').hasClass('hide')) showMePageLeft();
        else beep2();
    }
    else if (e.keyCode == '39') { // right arrow key
       if(!$('#showMeRightButton').hasClass('hide')) showMePageRight();
        else beep2();
    }
  if(ctrlDown && false){ // turn this off for now
    if (e.keyCode == '67') { // Delete key or C key
      if(isControlListVisible()) hideControlList();
      else showControlList();
    }
    else if (e.keyCode == '70') { // | key or P key
      if(isControlListVisible()) hideControlList();
      else showControlList();
    }
    else if (e.keyCode == '82') { // Return key or R key
      if(isControlListVisible()) hideControlList();
      else showControlList();
    }
    else if (e.keyCode == '84') { // T key
      if(isControlListVisible()) hideControlList();
      else showControlList();
    }
    else if (e.keyCode == '76' || e.keyCode == '71') { // Shift key or L key or G key
      if(isControlListVisible()) hideControlList();
      else showControlList();
    }
    else if (e.keyCode == '68') { // Shift key or L key or G key
      if(isFacetCollectorVisible()) hideFacetCollector();
      else showFacetCollector();
    }
    else if (e.keyCode == '88') { // Shift key or L key or G key
      if(isRecordsListVisible()) hideRecordsList();
      else showRecordsList();
    }
  }
  else {
    if (e.keyCode == '8') { // Delete key
        clearKeywords();
        doQuery($('#keywords').val());
        //$('#keywords').removeAttr('disabled');
        //$('#keywords').removeClass('disabled');
        //$('#keywords').focus(); 
    }
    else if (e.keyCode == '16') { // Shift key
    }
    else if (e.keyCode == '13') { // Return key
        window.location = this_endpoint;
    }
    else if (e.keyCode == '220') { // | key
    }
    else if (e.keyCode == '67') { // C key
        selectMenuItem('showMeMenu', VIEW_TYPE_CLASSES);
        describe(undefined, $('#angular_recordViewer').attr('iri'));
    }
    else if (e.keyCode == '70') { // F key
        selectMenuItem('showMeMenu', VIEW_TYPE_PROPERTIES);
        showRecordRoles == false;
        describe(undefined, $('#angular_recordViewer').attr('iri'));
    }
    else if (e.keyCode == '82') { // R key
        selectMenuItem('showMeMenu', VIEW_TYPE_PROPERTIES_IN);
        showRecordRoles == true;
        describe(undefined, $('#angular_recordViewer').attr('iri'));
    }
    else if (e.keyCode == '65') { // A key
      var dsidx = ds.indexOfDataspace(dataspace);
      if(dsidx == 0) dsidx = ds.length - 1;
      else dsidx--;
      selectDataspace(ds[dsidx][0], ds[dsidx][1]);
    }
    else if (e.keyCode == '90') { // Z key
      var dsidx = ds.indexOfDataspace(dataspace);
      if(dsidx == ds.length - 1) dsidx = 0;
      else dsidx++;
      selectDataspace(ds[dsidx][0], ds[dsidx][1]);
    }
    else if (e.keyCode == '84') { // T key
      isExpandSearch = true;
      takeMainFocus(ID_QUERY);
      selectMenuItem('showMeMenu', VIEW_TYPE_TEXT_PROPERTIES);
      selectMenuItem('groupByMenu', GROUP_BY_TEXT_VALUE);
      showRecordRoles == false;
      describe(undefined, $('#angular_recordViewer').attr('iri'));
    }
    else if (e.keyCode == '71' || e.keyCode == '76') { // G key or L key
        selectMenuItem('showMeMenu', VIEW_TYPE_GRAPHS);
        describe(undefined, $('#angular_recordViewer').attr('iri'));
    }  
/*    else if (e.keyCode == '88') { // X key
        if(isExpandSearch) {
          selectMenuItem('groupByMenu', GROUP_BY_TEXT_VALUE);
        }
    }  */
    else if(e.keyCode == '17') { // Control key
      ctrlDown = true;
    }

    else if(e.keyCode == '83') { // S key
      setShowSubjectBadges(!isShowSubjectBadges());

      //page--;
      selectGroupBy(true);
    }

    else if(e.keyCode == '72') { // H key
    $('#helpModal').modal({});
    }

    else if(e.keyCode == '74' || e.keyCode == '75' || e.keyCode == '186' || e.keyCode == '222') { // J key or K key or : key or ' key
      var rec = $('.record-active');
      if(rec.prop('nodeName').toLowerCase() == 'td'){
        if(!rec.parent().prev() || rec.parent().prev().length <= 0 || rec.parent().prev().prop('nodeName').toLowerCase() != 'tr') return;
        //rec.removeClass('record-active');
        //rec.parent().prev().children('td').addClass('record-active');
        describe(rec.parent().prev().children('td').attr('id'), rec.parent().prev().children('td').children('h6').attr('data-original-title'));
      }
      else if(rec.prop('nodeName').toLowerCase() == 'a'){
        if(!rec.prev() || rec.prev().length <= 0 || rec.prev().prop('nodeName').toLowerCase() != 'a') return;
        //rec.removeClass('record-active');
        //rec.prev().addClass('record-active');
        describe(rec.prev().attr('id'), rec.prev().find('h6 > span').attr('data-original-title'));
      }
    }
    else if(e.keyCode == '77' || e.keyCode == '191') { // M key or ? key
      var rec = $('.record-active');
      if(rec.prop('nodeName').toLowerCase() == 'td'){
        if(!rec.parent().next() || rec.parent().next().length <=0 || rec.parent().next().prop('nodeName').toLowerCase() != 'tr') return;
        //rec.removeClass('record-active');
        //rec.parent().next().children('td').addClass('record-active');
        describe(rec.parent().next().children('td').attr('id'), rec.parent().next().children('td').children('h6').attr('data-original-title'));
      }
      else if(rec.prop('nodeName').toLowerCase() == 'a'){
        if(!rec.next() || rec.next().length <= 0 || rec.next().prop('nodeName').toLowerCase() != 'a') return;
        //rec.removeClass('record-active');
        //rec.next().addClass('record-active');
        describe(rec.next().attr('id'), rec.next().find('h6 > span').attr('data-original-title'));
      }
    }


    else if(e.keyCode == '78') { // N key
        if(nav_type == NAV_TYPE_2) nav_type = NAV_TYPE_3;
        else if(nav_type == NAV_TYPE_3) nav_type = NAV_TYPE_2;
        if(nav_type == NAV_TYPE_3 && isTableShowing()) undoTable();
        try{
          localStorage.setItem('navType', nav_type);
        }
        catch(e){

        }
        doQuery(getQueryText());
      
    }    

    else if(e.keyCode == '79') { // O key
        if(orientationType == ORIENTATION_TYPE_1) orientationType = ORIENTATION_TYPE_2;
        else if(orientationType == ORIENTATION_TYPE_2) orientationType = ORIENTATION_TYPE_3;
        else if(orientationType == ORIENTATION_TYPE_3) orientationType = ORIENTATION_TYPE_1;

      //orientationLeft = !orientationLeft;
      try{
        //localStorage.setItem('orientationLeft', orientationLeft);
        localStorage.setItem('orientationType', orientationType);
      }
      catch(e){

      }
      window.location = window.location;
    }


  }
}
if(e.keyCode == '17'){
      if($('#keywords').hasClass('disabled')){// Control key
        $('#keywords').removeAttr('disabled');
        $('#keywords').removeClass('disabled');
        $('#keywords').focus(); 
        $('#keywords').select();
      }
      else{
        document.getSelection().removeAllRanges();
        $('#keywords').blur();
        $('#keywords').attr('disabled', 'true');
        $('#keywords').addClass('disabled');
      }
}
else {
  if(e.keyCode == '13') {// Enter key
       $('#keywords').blur();
        $('#keywords').attr('disabled', 'true');
        $('#keywords').addClass('disabled');
      doExplore($('#keywords').val()); 
  }
}
    

}

document.onclick = doCtrlMode;

function doCtrlMode(e){
  e = e || window.event;
  var target = e.target || e.srcElement;
  if($('input[type="text"], input[type="search"]').is(":focus") || (target.tagName.toUpperCase() == 'INPUT' && target.getAttribute('type') == 'text') || (target.tagName.toUpperCase() == 'INPUT' && target.getAttribute('type') == 'search')){
      $('#keywords').removeAttr('disabled');
      $('#keywords').removeClass('disabled');

if(target.id == 'keywords'){
      $('#keywords').focus(); 
      $('#keywords').select();
}

  }
  else{
      $('#keywords').blur();
      $('#keywords').attr('disabled', 'true');
      $('#keywords').addClass('disabled');
  }
}

function isVerticalChartHeaders(){
  return verticalChartHeaders;
}

function setVerticalChartHeaders(b){
  verticalChartHeaders = b;
  updatePermalink();
}

function isShowSubjectBadges(){
  return showSubjectBadges;
}

function setShowSubjectBadges(b){
  showSubjectBadges = b;
  if(showSubjectBadges) {
    $('#groupByCount').removeClass('badge-info');
    $('#groupByCount').addClass('badge-primary');
    $('#groupByHeader > h4').addClass('text-primary');
  }
  else {
    $('#groupByCount').removeClass('badge-primary');
    $('#groupByHeader > h4').removeClass('text-primary');
    $('#groupByCount').addClass('badge-info');
  }  
  updatePermalink();
}

function clearKeywords(){
  $("#keywords").val('');
  _root.find('text').remove();
  var clearKeywords = $('span.clear-data').filter(function() {return $(this).text().indexOf('Keywords') >= 0;});
  clearKeywords.parent().addClass('hide');
  //text=undefined;
}

function sanitizeLabel(label){
  label = label.split('\'').join("&amp;apos;");
  label = label.split('&#39;').join("&amp;apos;");
  label = label.replaceAll('"', '&amp;quot;');
  label = label.replaceAll('\\', '\\\\');
  //label = label.split('_').join(" ");
  return label;
}

function deSanitizeLabel(label){
  label = label.split('&amp;').join("&");
    label = label.split('&amp;apos;').join("\'");
    label = label.split('&amp;quot;').join("\"");
  //label = label.split('&amp;apos;').join("&#39;");
  label = label.split('&Apos;').join("\'");
  label = label.split('&apos;').join("\'");
//  label = label.split('&apos;').join("&#39;");
  label = label.split('&#39;').join("\'");
  label = label.split('&amp;Apos;').join("\'");
//  label = label.split('&Apos;').join("&#39;");
  return label;
}

function deSanitizeIRI(iri){
iri = deSanitizeLabel(iri);
iri = decodeURIComponent(iri);
return iri;
}

function processLabel(label, value, datatype, lang, labelSize){
    if(value == 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type') label = 'category'; //POI: type is named Category across the UI
    if(!labelSize) labelSize = SIZE_LABEL;
    label = label.trim();

    label = label.replaceAll('&#39;', '&apos;');

    if(label.length <= 0){
      label = value;
    }

    if(!label) return ''; 

    while(label.indexOf('/') >= 0){
      if(label.endsWith("/")){
        label = label.substring(0, label.length-1);
      }
      else{
        label = label.substring(label.lastIndexOf("/")+1);
      }
    }
      if(label.lastIndexOf("#") == label.length - 1){
        label = label.substring(0, label.length-1);
      }
      else{
        label = label.substring(label.lastIndexOf("#")+1);
      }


    // *** business Category processing - TODO: this need to be removed
      label = label.replace('WikiCat', '');
      label = label.replace('Wikicat', '');
      label = label.replace('YagoLegal', '');
      label = label.replace('Wiki Cat', '');
      label = label.replace('Wiki cat', '');
      label = label.replace('Yago Legal', '');


    if(label.length > 1) {
      if(label.length > labelSize){
       // label = label.substring(0, labelSize) + '...'; // use text-ellipsis class instead
      }
      label = label.split('_').join(" ");
      // POI: remove reserved chars, these will change in PoC
      //label = label.replaceAll('/', ' - ');
      label = label.replaceAll('[', ' - ');
      label = label.replaceAll(']', ' - ');
      try{
          label = decodeURIComponent((label + '').replace(/\+/g, '%20'));
      }
      catch(err){

      }
    }



    var re = /[^0-9](?=[0-9])/g; 
    label = label.replace(re, '$& ');
    try{
      var varInt = parseInt(label.trim());
      if(!varInt){
        label = label.replace('\\d{'+SIZE_MIN_DIGITS+','+SIZE_MAX_DIGITS+'}/g', '');
        label = label.replace(/\d{5,20}/g, '');
      }
    }
    catch(e){
      label = label.replace('\\d{'+SIZE_MIN_DIGITS+','+SIZE_MAX_DIGITS+'}/g', '');
      label = label.replace(/\d{5,20}/g, '');
    }

    
    return label.trim();
}

//var beep1Str = '//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=';
//var snd = new Audio("data:audio/wav;base64,"+beep1Str);  

var snd = new Audio('http://www.soundjay.com/button/beep-24.wav');
var snd2 = new Audio('http://www.soundjay.com/button/beep-07.wav');

function beep() {
    try{
      snd.play();
    }
    catch(e){

    }
}
function beep2() {
    try{
      snd2.play();
    }
    catch(e){

    }
}

var mouseOnPermalink = false;

function updatePermalink(){

    var canvasViewType = 'default';
    if(isTableShowing()) canvasViewType = 'table';
    else if(isFormShowing()) canvasViewType = 'form';

    var long_url = this_endpoint + '?' + 
      '&dataSpace=' + encodeURIComponent( dataspace ) + 
      '&dataSpaceLabel=' + encodeURIComponent( getDataspaceLabel() ) + 
      '&groupBy=' + encodeURIComponent( $('#groupByMenu :selected').attr('json') ) + 
      '&showMe=' + $('#showMeMenu :selected').attr('value') + 
      '&searchAllFields=' + isExpandSearch + 
      '&timeout=' + getQueryTimeout() + 
      '&navType=' + getNavType() + 
      '&page=' + page + 
      '&ctrlPage=' + showMePage + 
      '&viewType=' + canvasViewType + 
      '&subjectBadges=' + isShowSubjectBadges() + 
      '&verticalChartHeaders=' + isVerticalChartHeaders() + 
      '&isRollup=' + isRollup() + 
      '&isChart=' + isChart() + 
      '&filterRecordViewFields=' + filterRecordViewFields + 
      '&qxml=' + encodeURIComponent(_root.find('query').prop('outerHTML'));
  
    $('#permalink').attr('href',  long_url); // use long url by default in case of rate limit
    $('#permalink').unbind('mouseover');
    $('#permalink').unbind('mouseout');

  $('#permalink').on('mouseover', function(e){
    if(!mouseOnPermalink){
      get_short_url(long_url, function(short_url) {
        $('#permalink').attr('href',  short_url); //+ '&idCt=' + idCt
  /*
        $('#permalink').removeAttr('href');
        $('#permalink').unbind('click');
        $('#permalink').on('click', function(e){
          linkOut(short_url);
        });
        */
      });
    }
        mouseOnPermalink = true;

  });

  $('#permalink').on('mouseout', function(e){
    mouseOnPermalink = false;
  });

    // TODO: this only works in HTML5 compatible browsers, need to support older browsers also

    if(!fct_isDebug){
      
      history.pushState(
        {}, 
        'VIOS: ' + _root.find('query text').text(), 
        $('#permalink').attr('href')
      );
      
    }
}

function spaceCamelCase(label){
    // insert a space before all caps
    if(label.toUpperCase() != label){
    label = label.replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); });
    }
    return label.trim();
}


function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}

function getLibraryLabel(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return (match[2] !== url) ? match[2] + "" : match[2];
    }
    else {
        return url;
    }
}

function test(){
    // create 'Alice'
    var newProperty = $.createElement('property');
    // add 'name' element using standard jQuery
    newProperty.append($('<property />').text('Alice'));
    // add 'grade' element using our helper
    newProperty.append($.createElement('view').text(''));

    // add 'Alice' to <text />
    query.append(newProperty);

    // create 'Bob'
    newProperty = $.createElement('property-of');
    newProperty.append($('<value />').text('Bob'));
    newProperty.append($.createElement('value').text('Bob'));

    // add 'Bob' to <students />
    query.append(newProperty);

    // display the markup as text
    if(fct_isDebug) console.log(_root.html());
}


var idCt = 11; // numbers 1 - 10 are reserved
function createId(){
    //return idCt++;
    return uuid().hashCode(); // TODO: is there a less expensive way?
}

function uuid() {
    return crypto.getRandomValues(new Uint32Array(4)).join('-');
    //return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    //(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    //);
}

function doFirstKeywords(){
    if($('#keywords').val() == VALUE_DEFAULT_KEYWORDS_TEXT) {
        $('#keywords').val('');
    }
    $('#keywords').removeClass('keywordsDefault');
}

function isUri(str){
  return /\w+:(\/?\/?)[^\s]+/gm.test(str);
}

function doExplore(keywords, isGGGLookup){
      if(isUri(keywords)){
      //if(keywords.startsWith('http://') || keywords.startsWith('https://')){
          //addPropertyFacet(createId(), '[rdf:type]', 'type');

          if(keywords.endsWith('/sparql')){
            //Messenger().post("Thanks for checking out Messenger!");
          }

          var p = $.createElement('property');
          p.attr('class', createId());
          p.attr('iri', '[rdf:type]');
          p.attr('label', 'type');
          //getQuery().append(p);
          setValue(0, keywords, processLabel(keywords), 'uri');

          if(isGGGLookup) {
            clearKeywords();
            getQuery().children('property, property-of, class').remove();
            takeMainFocus(ID_QUERY);
          }
      }
      else {
        doQuery(keywords);
      }
      $('#keywords').blur();

}

function exitGroupBy(id){
// TODO: controller logic must not depend on viewer state, as is implemented here
// need to properly manage groupby state


  if(id){
    if(   $('#smr_' + id  ).find('span.badge-primary').length > 0    ) return; // if the CTRL is in groupby mode, do nothing
  }
   if(_root.find('[isGroupBy="true"]') && _root.find('[isGroupBy="true"]').length > 0){
    takeMainFocus(_root.find('[isGroupBy="true"]').parent().attr('class'), true);
    _root.find('[isGroupBy="true"]').removeAttr('isGroupBy');
   }


}

var dqct = 0;
function doQuery(keywords) {
    if (!isActivated) {
        activate();
        isActivated = true;
    }
    //console.log("keywords:" + keywords);
    setQueryText(keywords);

    resetPaging();

    $('#groupByHeader > p.gbsub').text('');
    $('#groupByHeader > p.gbbadge').text('');

    // POI: groupby is now done via the Show Me menu, items are added to the Group by menu on-demand by user
    //$('#groupByHeader').addClass('loading');
    //fct_query(query, VIEW_TYPE_PROPERTIES, OPT_SEND_TO_GROUP_BY);
    //console.log('query 1: ' + getQuery().prop('outerHTML'));

    //console.log('query 2: ' + getQuery().prop('outerHTML'));


    // POI: load the groupby list concurrently except if this is the first
    // load of the page, and the 'groupBy' parameter is present, in this case
    // load the groupby list after the groupByMenu has finished loading, to
    // ensure the value of the 'groupBy' parameter is availiable in the drop-down
    //console.log('ct doQuery: ' + dqct);
    //var chk = qdataSpace == null && qShowMe == null && qSearchAllFields == null;
    //if (!fct_isPermalink) { //dqct = 3 || 

        //console.log('query 1: ' + getQuery().prop('outerHTML'));

        //var q = query.clone();

        if (!fct_isPermalink) {
            selectShowMe(false);

            $('#groupByHeader').addClass('loading');
            $('#groupByTableHeader').addClass('loading');
            // POI: always exit groupby mode on each smart folder refresh/execute
            selectMenuItem('groupByMenu', GROUP_BY_NONE_VALUE, true);

            // POI: groupby does not persist between canvas updates
            // TODO: this removal of the groupBy property might not be needed anymore, since the new logic
            // requires the user to add the field before the groupBy icon appears, selectGroupBy
            // always pulls the property from the facet collector
            //remove(     _root.find('[isGroupBy="true"]').attr('class') , true);
            exitGroupBy();
            //if(!fct_isPermalink || preInitialized){// POI: the initial load sequence is over after three calls to doQuery (one call for each menu: showme, expand search, data space), if this fact ever changes, the groupby load from the permalink will break
            qGroupBy = undefined;

            //query.attr('same-as', 'true');
            fct_query(query, VIEW_TYPE_LIST_COUNT);
            //console.log('query 3: ' + getQuery().prop('outerHTML'));
        } 
        else {

            if (qGroupBy && qGroupBy.length > 0 && qGroupBy !== 'undefined') {
                selectShowMe(true);


                var qgb = qGroupBy; //decodeURIComponent(qGroupBy);
                /* if(qgb.endsWith(DELIMIT_GROUP_BY_REVERSE_PROPERTY)){
                   qgb = GROUP_BY_NONE_VALUE;
                 }*/
                var gbjson = JSON.parse(qgb);
                //selectMenuItem('groupByMenu', qgb.iri);
                doGroup(gbjson.iri, gbjson.label, gbjson.isReverse);
                //selectGroupBy(true);
                //if(isDebug) console.log('groupByLoaded: ' + qgb + ', old value:' + qGroupBy);
                //doQuery(keywords);
                //selectGroupBy();
            } else {
                //if(isDebug) console.log('groupByNotLoaded: ' + qgb + ', old value:' + qGroupBy);
            }

            document.getSelection().removeAllRanges();
            $('#keywords').blur();
            $('#keywords').attr('disabled', 'true');
            $('#keywords').addClass('disabled');


            fct_isPermalink = false;
        }
    //} 
    //else {
    //    dqct++;
    //} 

    //clearKeywords();

    buildNavPath();
    //console.log('query 4: ' + getQuery().prop('outerHTML'));

    var isLiteralValue = false;
    var v = getMainFocus().children('value');
    if (v && v.text() && v.text().length > 0 && v.attr('datatype') != 'uri' && getMainFocus().attr('class') != ID_QUERY) {
        isLiteralValue = true;
    }
    if (isLiteralValue) selectMenuItem('showMeMenu', VIEW_TYPE_PROPERTIES_IN);

    checkTextProperties();
    checkGlossaryButton();

    /* TODO: use qTip for tooltips, see http://qtip2.com/api
    $('[title!=""]').qtip();
    */
}

function checkGlossaryButton(){
  if( ( dataspace == 'http://dbpedia.org' || dataspace == 'http://data.vios.network' || dataspace == 'http://lod.openlinksw.com')  && (
    !_root.children('query').children('class[iri="http://dbpedia.org/class/yago/Glossary106420781"]') || 
    _root.children('query').children('class[iri="http://dbpedia.org/class/yago/Glossary106420781"]').length <= 0
    )
    ){
    $('#glossaryButton').removeClass('hide');
  }
  else if( !$('#glossaryButton').hasClass('hide') ){
    $('#glossaryButton').addClass('hide');
  }
}

function checkTextProperties(){
  if(!isExpandSearch || getMainFocus() != ID_QUERY){
    if($('#showMeMenu').val()==VIEW_TYPE_TEXT_PROPERTIES) selectMenuItem('showMeMenu', VIEW_TYPE_PROPERTIES);;
  }
}

function selectMenuItem(id, value, silent){
//  $('#'+id+' option[value=\''+ value +'\']').prop('selected', true); // POI: use escapeSelector if id=groupByMenu, since the values are URIs, which contain special chars
  var menu = $('#'+id).val(value);
  if(id == 'showMeMenu'){
    $('#showMeMenuSelectLabel').text($('#showMeMenu :selected').text());
  }
  if(!silent) menu.change(); // POI: use escapeSelector if id=groupByMenu, since the values are URIs, which contain special chars
}

function savePermalink(name){

}

function doFindDataspaces(){}

function addDataspace(url, label, secure, silent){  
  var protocol = (secure) ? 'https://' : 'http://';
  if(url.startsWith('http')) protocol = '';
  if(ds.indexOfDataspace(protocol+url) >= 0) return;
  var lis = $('a#dataSpaceMenu').parent().children('.dropdown-menu > li');
  if(!dataspaceAdded){
    $('a#dataSpaceMenu').parent().children('.dropdown-menu').append('<li class="dropdown-divider"></li>');  
  }
  $('a#dataSpaceMenu').parent().children('.dropdown-menu').append('<li><a url="'+(protocol+url)+'" class="dropdown-item" onclick="selectDataspace(\''+protocol+url+'\', \''+label+'\')">'+label+'</a></li>');


  if(!fct_isPermalink && false){
      const VIOS = $rdf.Namespace('http://vios.network/ns/');
      const RDFS = $rdf.Namespace('http://www.w3.org/2000/01/rdf-schema#');
      const RDF = $rdf.Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
      var store = $rdf.graph();
      var storj = store.sym(getStorage());
      var storjDoc = storj.doc();
      var updater = new $rdf.UpdateManager(store);

      var dsIRI = VIOS(createId());
      //var inserts = [];
      var inserts = $rdf.st(dsIRI, RDFS('label'), label, storjDoc);
      //inserts.push($rdf.st(dsIRI, RDF('type'), VIOS('Dataspace'), storjDoc));
      //inserts.push($rdf.st(dsIRI, VIOS('domain'), url, storjDoc));
      //inserts.push($rdf.st(dsIRI, VIOS('url'), protocol + url, storjDoc));

      updater.update([], inserts, (uri, ok, message) => {
        if (ok) console.log('Added dataspace '+ url);
        else console.log('Could not add dataspace: ' + url + ', message:'+message);
      });
  }

  selectDataspace(protocol+url, label, silent);

    ds.push([protocol+url, label]);
    try{
      localStorage.setItem('dataspaces', JSON.stringify(ds));
    }
    catch(err){
      if(fct_isDebug) console.log('Dataspace cache failed: ' + err);
    }
        
    dataspaceAdded = true;
}

function selectDataspace(url, label, silent){

  //console.log('datasapce selected: ' + uri);
//  uri = 'http://52.34.77.62:8890';
//  label = 'LOV Dataspace';
  //service_fct = uri;

  dataspace = url;
  //if(dataspace.indexOf('poc.vios.network/proxy') >= 0) dataspace = dataspace.substring(dataspace.indexOf('-start-') + 7, dataspace.indexOf('-end-'));
  service_fct_label = label;
  //service_fct = $('#dataSpaceMenu :selected').attr('value') + '/fct/service';
  //service_sparql = $('#dataSpaceMenu :selected').attr('value') + '/sparql';
  service_fct = getProxyEndpoint(url) + '/fct/service';
  service_sparql = getProxyEndpoint(url) + '/sparql';
  LABEL_ROOT = getDataspaceLabel();//.toUpperCase(); //<i class="fa fa-home" style="padding-bottom:4px;padding-right:2px;"></i>

  //if(url.indexOf('data.vios.network') >= 0) LABEL_ROOT = 'VIOS';

  $('#dataSpaceLabel').text(LABEL_ROOT );
  if(!silent) doQuery(getQueryText());

  try{
    localStorage.setItem('dataspaceIndex', ds.indexOfDataspace(url));
  }
  catch(err){
    if(fct_isDebug) console.log('Dataspace cache index failed: ' + err);
  }

}

function getDataspaceLabel(){
  //if(service_fct.indexOf('data.vios.network') >= 0) LABEL_ROOT = 'VIOS';

  if(!service_fct_label || service_fct_label.length <= 0) return LABEL_ROOT;
  return service_fct_label;
}

function getQueryTimeout(){
//  return $('#queryTimeout :selected').attr('value');
  return $('.slider-handle').attr('aria-valuenow'); // TODO: need to access the slider via id
}

function setQueyTimeout(timeout){
  $('.slider-handle').attr('aria-valuenow', timeout); // TODO: need to access the slider via id
  try{
    $('.slider-handle').slider('setValue', timeout); // TODO: need to access the slider via id
  }
  catch(e){
    if(fct_isDebug){
      console.log('error: ' + e);
    }
  }
}

//** FILE: groupby.js *****************************************************************************************************************************************************************************************/
var pageTable = 0;
var tableResultsCt = 0;


function resetTablePaging(){
  pageTable = 0;
}

function pageTableRight(){
  //setViewOffset(getViewOffset() + SIZE_RESULT_SET);
  pageTable++;
  tableResultsCt = 0;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  //selectGroupBy(true);
  var opt = new Object();
  opt.isTablePaging = true;
  fct_query(getQuery(), VIEW_TYPE_LIST_COUNT, opt);
  tablePage();
}

function pageTableLeft(){
  //setViewOffset(getViewOffset() - SIZE_RESULT_SET);
  pageTable--;
  tableResultsCt = 0;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  //selectGroupBy(true);
  var opt = new Object();
  opt.isTablePaging = true;
  fct_query(getQuery(), VIEW_TYPE_LIST_COUNT, opt);
  tablePage();
}

var page = 0;

var groupByResultsCt = 0;

//query.append(view);
//doQuery();

function resetPaging(){
  page = 0;
  //groupByResultsCt = 0;
  getMainFocus().find('view').attr('offset', 0);
}

function pageRight(){
  //setViewOffset(getViewOffset() + SIZE_RESULT_SET);
  page++;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  selectGroupBy(true);
}

function pageLeft(){
  //setViewOffset(getViewOffset() - SIZE_RESULT_SET);
  page--;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  selectGroupBy(true);
}

function setPage(p){
  page = p;
  selectGroupBy(true);
}

function loadTextResults(xml){
      $('#angular_recordsList').empty();

      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      groupByResultsCt = $("fct\\:row", result).length;
        if(page == 0){
          $("#leftButton").addClass('hide');
          $('#leftButton').removeAttr('title');
        }
        else{

          $("#leftButton").removeClass('hide');
         //$('#leftButton').attr('title', 'page ' + (page));
          setTitle('leftButton', 'page ' + (page), 'bottom');

        }
      if(groupByResultsCt < SIZE_RESULT_SET) {
        $("#rightButton").addClass('hide');
        $('#rightButton').removeAttr('title');
      }
      else {
        $("#rightButton").removeClass('hide');
//        $('#rightButton').attr('title', 'page ' + (page+2));
        setTitle('rightButton', 'page ' + (page+2), 'bottom');

      }


      var loadedUri = false;


      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");

          // shortform can be used in lieu of the label for URI values
          var value, datatype, shortform, label, lang, ct, trank, erank, g, text; // TODO: need to utilize the lang property for filtering results for the user
          
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              val = val.replace("&lt;![CDATA[","").replace("]]&gt;","");
              //console.log(val);
              switch(j){
                //case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); lang = $(this).attr('lang'); break;
                case 0: trank = val; break;
                case 1: erank = val; break;
                case 2: g = val; break;
                case 3: value = val; datatype = $(this).attr('datatype'); lang = $(this).attr('lang'); break;
                case 4: label = val; break;
                case 5: text = htmlDecode(val); break;
              }
          });



















          if(!datatype) datatype = '';

          if(value.length <= 0 && label.length <= 0 && ct<= 1){
              //rows += '<tr><td class="up" id="gbr_'+id+'"><span style="font-size:smaller;font-family:Consolas,Courier New; color: #000" id="'+id+'">';
              //rows += 'Too many results. Please filter them.';
              //rows += '</span></td></tr>';
          }
          else {
              var id = createId();

              var opts = new Object();
              opts.tag = TAG_LIST;
              opts.parentId = 'gbr_'+id;
              opts.childrenId = opts.tag + opts.parentId;

            var rowId = opts.parentId;
            var recordActive = false;

              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(rowId, value);
                    recordActive = true;
                    $('.record-active').removeClass('record-active');
                  } 
              }
              var propIRI = getGroupByValue();
              var propLabel = getGroupByLabel();
              var facet = false;

              //var groupByCriteria = getMainFocus();
              var isGroupByCriteria = isGrouped(); // POI: For now, "Used As" fields are not treated as "group by", since they are not "added" from the Group by menu, but are instead added from the Used As menu
              //if(isGroupByCriteria){
                //propIRI = groupByCriteria.attr('iri');
                //propLabel = groupByCriteria.attr('label');
    //var l = $('#groupByMenu :selected').attr('l');

    //propIRI = (l) ? l.split(DELIMIT_GROUP_BY_VALUE_AND_LABEL)[0] : $('#groupByMenu :selected').val();
    //propLabel = (l) ? l.split(DELIMIT_GROUP_BY_VALUE_AND_LABEL)[1]: $('#groupByMenu :selected').text();

              //}

              _root.find('.' + getMainFocus().attr('class') + ' > property[iri=\''+propIRI+'\'] > value').each(function(k){
                if(!facet && $(this).text() === value) {
                  facet = true;
                }
              });
              var checked = (facet) ? ' checked="checked"': '';
              var active = (facet) ? 'active': '';

              label = processLabel(label, value, datatype, lang);
              setLabel(value, label);

              // POI: the label and values need to have the apostrophe (') char removed before insertion into the javascript functions below
              // but they need to be desanitized by the respective javascript methods before being used in a query (or else the query will fail due to value mismatch)
              // also, a double encoding is used by the sanitize function, so we have to desanitize the label before displaying it in the data canvas
              label = sanitizeLabel(label);
              value = sanitizeLabel(value);
              //console.log($(col[0]));

var color = 'success';
var badgeColor = ($('#groupByMenu :selected').val() != GROUP_BY_NONE_VALUE) ? 'primary' : 'info';

/*

              rows +=  '<button id="'+opts.parentId+'" class="up list-group-item text-left">';
                rows += '<span class="thumb-sm float-left mr"><img class="rounded-circle" src="'+getFaviconUrl(value)+'" alt="...">';
                rows += '<i class="status status-bottom bg-success"></i>';
                rows += '</span>';
                rows += '<div>';
                rows += '<h6 class="m-0">'+label+'</h6>';
                rows += '<p class="help-block text-ellipsis m-0"></p>';
                rows += '</div>';
                rows += '</button>';
*/
rows +=  '<a id="'+opts.parentId+'" class="up list-group-item'+((recordActive)?' record-active':'')+'" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr-1">';

/*

                                    rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                    rows +=  '<i class="status status-bottom bg-success"></i>';
                                rows +=  '</span>';



            rows +=  '<div>';
              rows +=  '<h6 class="m-0">'+label+'</h6>';
              rows +=  '<p class="help-block text-ellipsis m-0"></p>';
            rows +=  '</div>';


rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';
                                    //rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                    rows +=  '<span _ngcontent-c9="" class="badge badge-pill badge-info" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</span>';
                                    //rows +=  '<i class="status status-bottom bg-success"></i>';
                                rows +=  '</span>';
            rows +=  '<div>';
              rows +=  '<h6 class="m-0">'+label+'</h6>';
              rows +=  '<p class="help-block text-ellipsis m-0"></p>';
            rows +=  '</div>';
          rows +=  '</a>';
*/

if(true){

              //rows += '<tr><td class="up" id="'+opts.parentId+'"><span id="'+id+'">';

              if(datatype=='uri') {
                rows += '<img style="cursor:pointer" onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                  rows +=  '<i class="status status-bottom bg-'+color+'"></i>';
              }
              else {
                rows += '<span onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" class="icon-literal glyphicon glyphicon-tag"></span>';
              }
                                rows +=  '</span>';

            //rows +=  '<div>';



              label = deSanitizeLabel(label);
              var labelLink = (datatype=='uri') ? ' onclick="javascript:describe(\''+rowId+'\', \''+value+'\');"' : '';
              rows +=  '<h6 class="row-result text-ellipsis m-0" '+labelLink+'>';
              rows+='<span '+buildTitle(value)+'>'+label+'</span>';
              if(text.indexOf('<b>') > 30) text = text.substring(text.indexOf('<b>') - 10);
              var kwa = getQueryText().split(' ');
              for(k = 0; k < kwa.length; k++){
                var clz = '';
                if(k == 0) clz = 'style="padding: 2px 5px"';
                var offset = 1;
                //if(kwa[k].length == 4) offset = 1;
                //if(kwa[k].length == 5) offset = 2;
                var krgx = new RegExp('<b>('+kwa[k]+')</b>','gi');
                var match = krgx.exec(text);
                if(match){
                  var seen = [];
                  for(l = 1; l < match.length; l++) {
                    var substitute = (match[l].length <= 2) ? match[l] : match[l].substring(0, 1)+'\''+match[l].substring(match[l].length - offset);
                    seen.push(substitute);
                    text = text.replace(krgx, '<b '+buildTitle(match[l])+' >'+substitute+'</b>');
                  }
                }
              }
              rows +=  '<p class="help-block text-ellipsis m-0">'+text+'</p>';


rows+='</h6>';

if(!isGroupByCriteria){
              var badgeId = createId();
              var childProp = getMainFocus().children('property, property-of');
//              if(childProp.length > 0) rows +=  '<p class="text-ellipsis m-0" id="'+badgeId+'"></p><script type="text/javascript">loadSubjectBadge(\''+value+'\', \''+$(childProp[0]).attr('iri')+'\', \''+badgeId+'\', '+($(childProp[0]).prop('nodeName').toLowerCase() == 'property-of')+');</script><!--'+$(childProp[0]).prop('nodeName')+'-->'; //
              rows +=  '<p class="text-ellipsis m-0 text-match-subject" id="'+badgeId+'"></p><script type="text/javascript">loadSubjectBadge(\''+value+'\', \''+badgeId+'\');</script>'; //

}
            //rows +=  '</div>';

          rows +=  '</a>';

          }
}          























/*


          if(value.length <= 0 && label.length <= 0 && ct<= 1){
              //rows += '<tr><td class="up" id="gbr_'+id+'"><span style="font-size:smaller;font-family:Consolas,Courier New; color: #000" id="'+id+'">';
              //rows += 'Too many results. Please filter them.';
              //rows += '</span></td></tr>';
          }
          else {
              label = processLabel(label, value, datatype, lang);

              // POI: the label and values need to have the apostrophe (') char removed before insertion into the javascript functions below
              // but they need to be desanitized by the respective javascript methods before being used in a query (or else the query will fail due to value mismatch)
              // also, a double encoding is used by the sanitize function, so we have to desanitize the label before displaying it in the data canvas
              label = sanitizeLabel(label);
              value = sanitizeLabel(value);
              //console.log($(col[0]));
              var id = createId();
              rows += '<tr><td class="up" id="txt1_'+id+'"><span id="'+id+'">';
              rows += '<a onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')">&nbsp;'+getFavicon(value)+'</a>&nbsp;';
              label = deSanitizeLabel(label);
              rows += '<a '+buildTitle(value)+' onclick="javascript:describe(\''+value+'\');">'+label+'</a>';
              rows += '</span></td></tr>';
              rows += '<tr><td class="txt" id="txt2_'+id+'"><span id="'+id+'">';
              rows += text;
              rows += '</span></td></tr>';
          }

*/



      });
      //console.log(rows);
          $('#angular_recordsList').append(rows);

        //$('#groupby').append(rows);
        //return total;




} // loadTextResults

function getFavicon(value){
return '<img class="rounded-circle" height="16" width="16" src="http://www.google.com/s2/favicons?domain='+getHostName(value)+'" />';
}

function getFaviconUrl(value){
return 'http://www.google.com/s2/favicons?domain='+getHostName(value);
}


function toJSONString(json){
  return htmlEncode(JSON.stringify(json).replaceAll('\"','&quot;'));
}

function toJSONObject(str){
  try{
  return JSON.parse(htmlDecode(str));
  }
  catch(e){
    console.log('error with json: ' + str + ', err: ' + e);
  }
}

function htmlDecode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function htmlEncode(value){
  // Create a in-memory div, set its inner text (which jQuery automatically encodes)
  // Then grab the encoded contents back out. The div never exists on the page.
  return $('<div/>').text(value).html();
}

function htmlDecode(value){
  return $('<div/>').html(value).text();
}

// TODO: regex approach might be faster, see here https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

Array.prototype.indexOfText = function(txt) {
    for (var i = 0; i < this.length; i++)
        if (this[i].text() === txt)
            return i;
    return -1;
}

Array.prototype.indexOfDataspace = function(url) {
    for (var i = 0; i < this.length; i++)
        if (this[i][0] === url)
            return i;
    return -1;
}
/*
function htmlEncode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
*/

function isGrouped(){
  return $('#groupByMenu :selected').attr('value')!==GROUP_BY_NONE_VALUE && $('#groupByMenu :selected').attr('value')!==GROUP_BY_TEXT_VALUE; 
}

function getGroupByValue(){
  var gbjStr = $('#groupByMenu :selected').attr('json');
  if(!gbjStr) return GROUP_BY_NONE_VALUE;
  var gbjson = JSON.parse( gbjStr ) ;
  return gbjson.iri;
}

function getGroupByLabel(){
  var gbjStr = $('#groupByMenu :selected').attr('json');
  if(!gbjStr) return GROUP_BY_NONE_LABEL;
  var gbjson = JSON.parse( gbjStr ) ;
  return gbjson.label;
}

function loadGroupByResults(xml, focusVarName){
      $('#'+ID_GROUP_BY+'').empty();
      $('#angular_recordsList').empty();

      // associate the focus with its corresponding SPARQL variable
      getMainFocus().attr('varname', focusVarName.replace('?', ''));

      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      groupByResultsCt = $("fct\\:row", result).length;
/*      
        if(page == 0){
          $("#leftButton").attr('disabled', 'true');
          $("#leftButton").addClass('disabled');
          $('#leftButton').removeAttr('title');
        }
        else{

          $("#leftButton").removeAttr('disabled');
          $("#leftButton").removeClass('disabled');
          $('#leftButton').attr('title', 'page ' + (page));

        }
      if(groupByResultsCt < SIZE_RESULT_SET) {
        $("#rightButton").attr('disabled', 'true');
        $("#rightButton").addClass('disabled');
        $('#rightButton').removeAttr('title');
      }
      else {
        $("#rightButton").removeAttr('disabled');
        $("#rightButton").removeClass('disabled');
        $('#rightButton').attr('title', 'page ' + (page+2));

      }

*/
        if(page == 0){
          $("#leftButton").addClass('hide');
          $('#leftButton').removeAttr('title');
        }
        else{

          $("#leftButton").removeClass('hide');
         //$('#leftButton').attr('title', 'page ' + (page));
          setTitle('leftButton', 'page ' + (page), 'bottom');

        }
      if(groupByResultsCt < SIZE_RESULT_SET) {
        $("#rightButton").addClass('hide');
        $('#rightButton').removeAttr('title');
      }
      else {
        $("#rightButton").removeClass('hide');
//        $('#rightButton').attr('title', 'page ' + (page+2));
        setTitle('rightButton', 'page ' + (page+2), 'bottom');

      }


      var loadedUri = false;


      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");

          // shortform can be used in lieu of the label for URI values
          var value, datatype, shortform, label, lang, ct; // TODO: need to utilize the lang property for filtering results for the user
          
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              val = val.replace("&lt;![CDATA[","").replace("]]&gt;","");
              //console.log(val);
              switch(j){
                case 0: value = val; shortform = $(this).attr('shortform'); datatype = $(this).attr('datatype'); lang = $(this).attr('lang'); break;
                case 1: label = val; break;
                case 2: ct = val; break;
              }
          });

          if(!datatype) datatype = '';

          if(value.length <= 0 && label.length <= 0 && ct<= 1){
              //rows += '<tr><td class="up" id="gbr_'+id+'"><span style="font-size:smaller;font-family:Consolas,Courier New; color: #000" id="'+id+'">';
              //rows += 'Too many results. Please filter them.';
              //rows += '</span></td></tr>';
          }
          else {
              var id = createId();

              var opts = new Object();
              opts.tag = TAG_LIST;
              opts.parentId = 'gbr_'+id;
              opts.childrenId = opts.tag + opts.parentId;

            var rowId = opts.parentId;
            var recordActive = false;

              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(rowId, value);
                    recordActive = true;
                    $('.record-active').removeClass('record-active');


    if(showIDN){

detailResultsColumnWidths();


rows += '<section class="search-result-item">';
rows += '<a class="image-link" >';
rows += '<img class="image" src="https://demo.flatlogic.com/sing-app/angular/assets/img/pictures/3.jpg">';
rows += '</a>';
rows += '<div class="search-result-item-body">';
rows += '<div class="row">';
rows += '<div class="col-md-9 col-12">';
rows += '<h5 class="search-result-item-heading"><a href="#">Digital Camera</a></h5>';
rows += '<p class="info"> Device </p>';
rows += '<p class="description"> A digital camera is a device that records images electronically, as opposed to a conventional camera that records images by chemical and mechanical processes. </p>';
rows += '</div>';
rows += '<div class="col-md-3 col-12 text-center">';
rows += '<p class="value3 mt-sm">9, 700 AVI</p>';
rows += '<p class="fs-mini text-muted"> PER WEEK </p><a class="btn btn-primary btn-info btn-sm" href="#">Buy Now</a>';
rows += '</div>';
rows += '</div>';
rows += '</div>';
rows += '</section>';
rows += '<section class="search-result-item">';
rows += '<a class="image-link" >';
rows += '<img class="image" src="https://demo.flatlogic.com/sing-app/angular/assets/img/pictures/5.jpg">';
rows += '</a>';
rows += '<div class="search-result-item-body">';
rows += '<div class="row">';
rows += '<div class="col-md-9 col-12">';
rows += '<h5 class="search-result-item-heading"><a href="#">Saint Martin</a></h5>';
rows += '<p class="info"> Populated Place </p>';
rows += '<p class="description"> St. Martin\'s history shares many commonalities with other Caribbean islands. Its earliest inhabitants were Amerindians, followed by Europeans who brought slavery to exploit commercial interests. </p>';
rows += '</div>';
rows += '<div class="col-md-3 col-12 text-center">';
rows += '<p class="value3 mt-sm"> 1, 700 AVI </p>';
rows += '<p class="fs-mini text-muted"> PER WEEK </p><a class="btn btn-primary btn-info btn-sm" href="#">Buy Now</a>';
rows += '</div>';
rows += '</div>';
rows += '</div>';
rows += '</section>';
rows += '<section class="search-result-item">';
rows += '<a class="image-link" >';
rows += '<img class="image" src="https://demo.flatlogic.com/sing-app/angular/assets/img/pictures/13.jpg">';
rows += '</a>';
rows += '<div class="search-result-item-body">';
rows += '<div class="row">';
rows += '<div class="col-md-9 col-12">';
rows += '<h5 class="search-result-item-heading"><a href="#">REM Sleep</a></h5>';
rows += '<p class="info"> Cognition </p>';
rows += '<p class="description"> Rapid eye movement sleep (REM sleep, REMS) is a unique phase of mammalian sleep characterized by random movement of the eyes, low muscle tone throughout the body, and the propensity of the sleeper to dream vividly. </p>';
rows += '</div>';
rows += '<div class="col-md-3 col-12 text-center">';
rows += '<p class="value3 mt-sm"> 250 AVI </p>';
rows += '<p class="fs-mini text-muted"> PER WEEK </p><a class="btn btn-primary btn-info btn-sm" href="#">Buy Now</a>';
rows += '</div>';
rows += '</div>';
rows += '</div>';
rows += '</section>';




/*
rows += '<section class="search-result-item">';
rows += '<a class="image-link" >';
rows += '<img class="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ehxSliMhXtH-Anppcd-gkFFpfGWLkFMhPEuGEtq4D0RGkURx_w">';
rows += '</a>';
rows += '<div class="search-result-item-body">';
rows += '<div class="row">';
rows += '<div class="col-md-9 col-12">';
rows += '<h5 class="search-result-item-heading"><a href="#">Pizza chains that deliver, by country</a></h5>';
rows += '<p class="info"> Smart Folder Request </p>';
rows += '<p class="description"> I need a list of delivery Pizza chains, for each country, and grouped by country, and here are the other fields I need... </p>';
rows += '</div>';
rows += '<div class="col-md-3 col-12 text-center">';
rows += '<p class="value3 mt-sm">20 VIOS</p>';
rows += '<p class="fs-mini text-muted"> ON DELIVERY </p><a class="btn btn-success btn-sm" href="#">Accept</a>';
rows += '</div>';
rows += '</div>';
rows += '</div>';
rows += '</section>';
rows += '<section class="search-result-item">';
rows += '<a class="image-link" >';
rows += '<img class="image" src="http://i.imgur.com/RmZIumM.jpg">';
rows += '</a>';
rows += '<div class="search-result-item-body">';
rows += '<div class="row">';
rows += '<div class="col-md-9 col-12">';
rows += '<h5 class="search-result-item-heading"><a href="#">GOT Family Lineages and Factions</a></h5>';
rows += '<p class="info"> Dataspace Request </p>';
rows += '<p class="description"> I would like a complete dataspace for all bloodlines of the Game of Thrones series, by George R.R. Martin. The dataspace should include the following ...</p>';
rows += '</div>';
rows += '<div class="col-md-3 col-12 text-center">';
rows += '<p class="value3 mt-sm"> 1.541 BTC </p>';
rows += '<p class="fs-mini text-muted"> IN INCREMENTS </p><a class="btn btn-success btn-sm" href="#">Accept</a>';
rows += '</div>';
rows += '</div>';
rows += '</div>';
rows += '</section>';
rows += '<section class="search-result-item">';
rows += '<a class="image-link" >';
rows += '<img class="image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMRERUSEBIVExUWGBkSEhcSFRIQFRUWFRoZGBcXGBUYHCggGRslGxUVIzEhJSorLy4uFx8zODMsNygtLi0BCgoKDg0OGhAQGyslHx83Ny8tNS0wNy0tLS0rLTctLy0tLS0tLSstLTctLS0tLS0tKystLS0tLSstLS0tLS0rLf/AABEIAQUAwQMBEQACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAwQIAgH/xABFEAABAgIEBwwHCAICAwAAAAABAAIDEQQGBxIFITE0crGyEyIyMzVBUWFxc4GzF1R0gpGhwSNSYpKT0dLwJEIU4VOi8f/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQIDBgEH/8QALxEBAAECBAQEBgMBAQEAAAAAAAECBAMyM3EFETGxEjRRgRQVIUFSwRNC8JEj8f/aAAwDAQACEQMRAD8A3FAQEBBw0iOGCZQVnB1b91pT4JaGta4sacd4lplPokeZBbAgICAgICAgICAgICAgICAgICAgICAgIIzDkMlhkgynCJdCj7pkM5O7RkP96Ag1SreEhHgtdPGMRQSqAgICAgICAgICAgICAgICAgICAgICD4jMvCSDOq24LkSZYig6dRsLmDF3N5xE3Sg1MGaD9QEBAQEBAQEBAQEBAQEBAQEBAQEBAQQ+H6CIjCgyvCkEwogeMUjI/Q/3qQafVHCojwRM75uI9iCdQEBAQEBAQEBAQEBAQEBAQEBAQEBAQfERkxJBn9bcGSJMsRyoIWp2FDRo91xxTkesFBrjHAgEZDjCD9QEBAQEBAQEBAQEBAQEBAQEBAQEBAQRWHKEIjCgynDVGMN94ZWmR7P7rQaNUjC+7QbhO+bqQWVAQEBAQEBAQEBAQEBAQEBBnGC7W4EePCgCjRWmLEZCBLmSBe4NmfitEXETPLktsThOJRRNc1R9I5/8XjD2ExRKPEpDmlwhtvlokCeya21T4Y5q3Bw5xa4oj7s99NFH9Vi/mYtHxNPotfkuL+UHpoo/qsX8zE+Jp9D5Li/lC2VKrezCbYjocJ0MQy1pvlpneBOKXYtuHiRX0Qbu0qtpiKp580fXC0SFg6kCBEgPiEsESbXNAk4kSx6KxrxoonlLba8OruKPHTMR9kE+2ajkS/4sX8zFh8TT6JPyXF/KFUw7aDR4pJbR4gnlm5iyjHiWrE4ViUdZhM1ZwiaLSACcU5doP/S3qte8F1ybGpDaPuL2OcXNmXNIBa1zubR+axir68kSi7irE/j5TEpjD2FRRIJjOaXgECQIB3xlzr2Z5N2NixhUeKXRq3WdtNc9rYbmXAHG8QZzMuZeRVza8C5jGmYiOXJw1vrezB7oYfCdE3QOIuloldu5Z6SlYNvOLz5T0Li5pweXOOqvelmD6tE/MxbvgKvWEb5nh+knpZg+rRPzMT4Cr1g+Z4fpK+4MpgjwYUYAtERjIoBxkB7Q6R+Kh10+GqY9FhRV4qYq9VHodqcKJEYwUeIC9zWAlzMV4gT+al1WVURM84QaeIUVVRTyn6rnhvCQo1HiR3NLhDF4gSBOOXP2qLh0eOqKfVNxK/BTNU/ZR/SzB9WifmYpfwFXrCB8zw/ST0swfVon5mJ8BV6wfM8P0lZqo1pZhBsRzIboe5kNN4gzvAnm7FHxsGcKYiZ6pVvcRjRMxHR9VlrM2hOY10Nz74JF0gSuyHP2qPM8nmPcxgzETHPm7mAMLilwd1a0sF4tkSCcXYvYnm2YOLGLT4oQ+Gq6so0d8EwXuLLsyHNAN5odz6S8mrkj4t7Th1zTMT9HU9IcP/wP/M1eeNj8fT6SxKqPKNE9pg+a1QKM8Pod15evaezf7ReTKV3Z1hTsXJLlbHzFG7zQq52Yg2awTiaVps2XKZbdJc7xrUp2Vq2/lJvcM2oi13GZM4NoTv8AqGfKOtnxFbMLKmWrFp5w1WsFDMN94ZWn5f36qzcOlap/aUyjRRlm5kT9J913wxeAWMx9eaHiYP8A70Yke/8AyVttEzF2mzaCVdHt9oz7d0BZdx0bQbrKxoReHZqnQtq4dF0YutitrDpU84p/X3ZqrBUiD0TVTMaJ7PB8tqocbUq3l0+Bp07R2YDgPOIHew9tqu8TJOzncHVp3bpX3k6k6H1CprfVpdBdaNWzAFeOaEGrWLcVSdNmoqsv80LnhmSpy2pcZA0X62qtrY8RzU+6bs5zIab9a9p6JNjoqTXrP4/ueUxYVdVdd61Xt2hELxqVKqPKNE9pg+a1Q6M8Pq115evaezf7ReTKV3Z1hTsXJLlbHzFG7zQq52Yg2awTiaVps2XKZbdJc7xrUp2Vq2/lJvcM2oi13GZM4NoTv+oZ8o62fhR5Lfa94PlDiPbzNcfkVay4Gr6UypNUsMmFEZEHTjGsLyHmHX46ebSq9RxEweXtxhzoZHi4Lyroj32jPt3Qll3HRtBusrGhF4dmqdC2rh0XRi62K2sOlTzin9fdmqsFSIPRNVMxons8Hy2qhxtSreXT4GnTtHZgOA84gd7D22q7xMk7OdwdWndulfeTqTofUKmt9Wl0F1o1bMAV45oQatYtxVJ02aiqy/zQueGZKnLalxkDRfraq2tjxHNT7puznMhpv1r2nok2OipNes/j+55TFhV1V13rVe3aEQvGpUqo8o0T2mD5rVDozw+rXXl69p7N/tF5MpXdnWFOxckuVsfMUbvNCrnZiDZrBOJpWmzZcplt0lzvGtSnZWrb+Um9wzaiLXcZkzg2hO/6hnyjrYQeoq1UYPosbu37JVpPR8/xMksBoDiyJd6ZkdoE9QPwWNModrifXl6r2zDG6YOfBccYcxzey8Jj+9a9q6Nl9oz7d0tZdx0bQbrKxoReHZqnQtq4dF0YutitrDpU84p/X3ZqrBUiD0TVTMaJ7PB8tqocbUq3l0+Bp07R2YDgPOIHew9tqu8TJOzncHVp3bpX3k6k6H1CprfVpdBdaNWzAFeOaEGrWLcVSdNmoqsv80LnhmSpy2pcZA0X62qtrY8RzU+6bs5zIab9a9p6JNjoqTXrP4/ueUxYVdVdd61Xt2hELxqVKqPKNE9pg+a1Q6M8Pq115evaezf7ReTKV3Z1hTsXJLlbHzFG7zQq52Yg2awTiaVps2XKZbdJc7xrUp2Vq2/lJvcM2oi13GZM4NoTv+oZ8o62EHq3DY/xo/dRNkq0no+f4uSdmFUKizpMOX4thywp6qqzq/8ASI/3R3YP2UQtPBdi8D/fkti2qpiqJpn7rlZpDux47TzMbj6RMyPwWFMcpV9nRNGJXTP2R1tXDoujF1sVrYdKmvin9fdmqsFSIPRNVMxons8Hy2qhxtSreXT4GnTtHZgOA84gd7D22q7xMk7OdwdWndulfeTqTofUKmt9Wl0F1o1bMAV45oQatYtxVJ02aiqy/wA0LnhmSpy2pcZA0X62qtrY8RzU+6bs5zIab9a9p6JNjoqTXrP4/ueUxYVdVdd61Xt2hELxqVKqPKNE9pg+a1Q6M8Pq115evaezf7ReTKV3Z1hTsXJLlbHzFG7zQq52Yg2awTiaVps2XKZbdJc7xrUp2Vq2/lJvcM2oi13GZM4NoTv+oZ8o62EHq3DebRu6ibJVpPR8+xclWzI6sQL9Lgjpv+W9a6eqmtJ/9qf99pfVbKLuRmcW+AB0sX7LavJmI6rBZrTm7q5rsTnMujrumctaPPBHi8X3dK2rh0XRi62KysOlSr4p/X3ZqrBUiD0TVTMaJ7PB8tqocbUq3l0+Bp07R2YDgPOIHew9tqu8TJOzncHVp3bpX3k6k6H1CprfVpdBdaNWzAFeOaEGrWLcVSdNmoqsv80LnhmSpy2pcZA0X62qtrY8RzU+6bs5zIab9a9p6JNjoqTXrP4/ueUxYVdVdd61Xt2hELxqVKqPKNE9pg+a1Q6M8Pq115evaezf7ReTKV3Z1hTsXJLlbHzFG7zQq52Yg2awTiaVps2XKZbdJc7xrUp2Vq2/lJvcM2oi13GZM4NoTv8AqGfKOthB6tw3m0buomyVaT0fPsXJVsyypI/z4Ha/y3rXT1UtprU/77SmbVqB/jF4+83Wtk9Fvczyw1Dq/hJzHNiAyc0ifaOdIllhV+OnmslqtObHbQ4rf9mRJjoM2THxVnYdKldxT+vuoCsFSIPRNVMxons8Hy2qhxtSreXT4GnTtHZgOA84gd7D22q7xMk7OdwdWndulfeTqTofUKmt9Wl0F1o1bMAV45oQatYtxVJ02aiqy/zQueGZKnLalxkDRfraq2tjxHNT7puznMhpv1r2nok2OipNes/j+55TFhV1V13rVe3aEQvGpUqo8o0T2mD5rVDozw+rXXl69p7N/tF5MpXdnWFOxckuVsfMUbvNCrnZiDZrBOJpWmzZcplt0lzvGtSnZWrb+Um9wzaiLXcZkzg2hO/6hnyjrYQercN5tG7qJslWk9Hz7FyVbMtqRn8Dtf5b1rp6qW01qf8AfaV0tMhToLtJm0s6ui0vJ5YU+3dj2C6IS6LLKACPiUpa7OefN2cIAxYAxkmESZfhdK8f/VvhNTrLE8Nfhn7seIYM14fij+vZCK2UYg9E1UzGiezwfLaqHG1Kt5dPgadO0dmA4DziB3sPbarvEyTs53B1ad26V95OpOh9Qqa31aXQXWjVswBXjmhBq1i3FUnTZqKrL/NC54ZkqctqXGQNF+tqra2PEc1Pum7OcyGm/WvaeiTY6Kk16z+P7nlMWFXVXXetV7doRC8alSqjyjRPaYPmtUOjPD6tdeXr2ns3+0Xkyld2dYU7FyS5Wx8xRu80KudmINmsE4mlabNlymW3SXO8a1Kdlatv5Sb3DNqItdxmTODaE7/qGfKOthB6tw3m0buomyVaT0fPsXJVsy2pGfwO1/lvWunqpbTWp/32lebRMxdps2gs6uizvtGfbuzurtCvmMRzNafmV5Qj8Pn61OjSG7lF6jlHblH96VnH0WUxz+iBwhRtzeWjJwmnpacn7eCvMHE/koipzdzg/wAWJNP2+zrrc0PRNVMxons8Hy2qhxtSreXT4GnTtHZgOA84gd7D22q7xMk7OdwdWndulfeTqTofUKmt9Wl0F1o1bMAV45oQatYtxVJ02aiqy/zQueGZKnLalxkDRfraq2tjxHNT7puznMhpv1r2nok2OipNes/j+55TFhV1V13rVe3aEQvGpUqo8o0T2mD5rVDozw+rXXl69p7N/tF5MpXdnWFOxckuVsfMUbvNCrnZiDZrBOJpWmzZcplt0lzvGtSnZWrb+Um9wzaiLXcZkzg2hO/6hnyjrYQercN5tG7qJslWk9Hz7FyVbMtqRn8Dtf5b1rp6qW01qf8AfaV5tEzF2mzaCzq6LO+0Z9u6sWdwb744/A3aKxoReHZqlWtDH/GpUGeJrg8O7Jtx+H7qVh0eKmU7ExPBXS6FLh7pC/FDxjrb/sPr4FbbPF8FfhnpPdov8Hx4fijrT2Qyt1C9E1UzGiezwfLaqHG1Kt5dPgadO0dmA4DziB3sPbarvEyTs53B1ad26V95OpOh9Qqa31aXQXWjVswBXjmhBq1i3FUnTZqKrL/NC54ZkqctqXGQNF+tqra2PEc1Pum7OcyGm/WvaeiTY6Kk16z+P7nlMWFXVXXetV7doRC8alSqjyjRPaYPmtUOjPD6tdeXr2ns3+0Xkyld2dYU7FyS5Wx8xRu80KudmINmsE4mlabNlymW3SXO8a1Kdlatv5Sb3DNqItdxmTODaE7/AKhnyjrYQercN5tG7qJslWk9Hz7FyVbMtqRn8Dtf5b1rp6qW01qf99pXm0TMXabNoLOros77Rn27q/ZfxsbQbrKxoReHZqkDblRvtKOelsTWxWNrHOKm29q5TSqFX6dNoB4TMR6xzH+9C0Y1Hhq5pNvieOj6/Z84Ro9x+LgnfN7DzeGRWtvi/wAlET9/uo7vB/ixJj7T0egKqZjRPZ4PltVRjalW8r7A06do7MBwHnEDvYe21XeJknZzuDq07t0r7ydSdD6hU1vq0ugutGrZgCvHNCDVrFuKpOmzUVWX+aFzwzJU5bUuMgaL9bVW1seI5qfdN2c5kNN+te09Emx0VJr1n8f3PKYsKuquu9ar27QiF41KlVHlGie0wfNaodGeH1a68vXtPZv9ovJlK7s6wp2Lklytj5ijd5oVc7MQbNYJxNK02bLlMtukud41qU7K1bfyk3uGbURa7jMmcG0J3/UM+UdbCD1bhvNo3dRNkq0no+fYuSrZltSM/gdr/LetdPVS2mtT/vtK82iZi7TZtBZ1dFnfaM+3dAWXcdG0G6ysaEXh2apHW2tm+jaMXWxWtjH0qOJTymn3ZRAjbjFDubI7sP8AZrLHw+ccmFrjeGeazx2bpDkMbm75vWOcfDUo1ri+CvlPSUy9wf5MPnHWPq3GqeY0T2eD5bVpxtSreW/A06do7MBwHnEDvYe21XeJknZzuDq07t0r7ydSdD6hU1vq0ugutGrZgCvHNCDVrFuKpOmzUVWX+aFzwzJU5bUuMgaL9bVW1seI5qfdN2c5kNN+te09Emx0VJr1n8f3PKYsKuquu9ar27QiF41KlVHlGie0wfNaodGeH1a68vXtPZv9ovJlK7s6wp2Lklytj5ijd5oVc7MQbNYJxNK02bLlMtukud41qU7K1bfyk3uGbURa7jMmcG0J3/UM+UdbCD1bhvNo3dRNkq0no+fYuSrZltSM/gdr/LetdPVS2mtT/vtK82iZi7TZtBZ1dFnfaM+3dAWXcdG0G6ysaEXh2ap0LauHRdGLrYraw6VPOKf192VUyFMKXiU80DCq5Skav0w3bpO+Zs837fBVOPR4aufqvLbE8VPL0bzUjCLY1EhhsgYTRCIHNcADfi2XzWmZmZ5ykRERHKGF4DziB3sPbar7EyTs5nB1ad26V95OpOh9Qqa31aXQXWjVswBXjmhBq1i3FUnTZqKrL/NC54ZkqctqXGQNF+tqra2PEc1Pum7OcyGm/WvaeiTY6Kk16z+P7nlMWFXVXXetV7doRC8alSqjyjRPaYPmtUOjPD6tdeXr2ns3+0Xkyld2dYU7FyS5Wx8xRu80KudmINmsE4mlabNlymW3SXO8a1Kdlatv5Sb3DNqItdxmTODaE7/qGfKOthB6tw3m0buomyVaT0fPsXJVsy2pGfwO1/lvWunqpbTWp/32lebRMxdps2gs6uizvtGfbugLLuOjaDdZWNCLw7NU6FtXDoujF1sVtYdKnnFP6+7M3ianyqonk6LIhhRA8ZMh6wcqhY+HzjksbbF8MxLTbP8ADm4R2gn7OLJrujHwXeBPwJVWuo+qm4DziB3sPbar/EyTs5jB1ad26V95OpOh9Qqa31aXQXWjVswBXjmhBq1i3FUnTZqKrL/NC54ZkqctqXGQNF+tqra2PEc1Pum7OcyGm/WvaeiTY6Kk16z+P7nlMWFXVXXetV7doRC8alSqjyjRPaYPmtUOjPD6tdeXr2ns3+0Xkyld2dYU7FyS5Wx8xRu80KudmINmsE4mlabNlymW3SXO8a1Kdlatv5Sb3DNqItdxmTODaE7/AKhnyjrYQercN5tG7qJslWk9Hz7FyVbMtqRn8Dtf5b1rp6qW01qf99pXm0TMXabNoLOros77Rn27oCy7jo2g3WVjQi8OzVOhbVw6LoxdbFbWHSp5xT+vuzVWCpdalwphasSnnDdhVcpWRkAshQHjnhw59twaxqVLiZpdHh5I2cdGgypcBwyOiwyOo32zH96VZYOL48GYnrEKjHwf47mmY6TP/wBbRX3k6k6H1CgW+rSs7rRq2YArxzQg1axbiqTps1FVl/mhc8MyVOW1LjIGi/W1VtbHiOan3TdnOZDTfrXtPRJsdFSa9Z/H9zymLCrqrrvWq9u0IheNS1YKsjhwKRCjilvcYURkUAw2i9ccHSnexTksabeInnzd1i8Xqromjwx9Y5f9XusGCxS6NFo5dcERtwuAvEdcudbqqfFHJWYOL/FiRX6M59CsP1x/6Tf5LR8NHqtvndf4R/09CsP1x/6Tf5J8NHqfO6/wj/q31Gqe3BjIrWxjF3QtdvmhkroI5iZ5Vtw8PwIF5eTczEzHLkjq52dMwjSBHdSHQyGNh3QwO4JcZzJH3ljiYMVzz5ttpxGq3o8EU8/ugfQrD9cf+k3+Sw+Gj1Svndf4R/09CsP1x/6Tf5J8NHqfOq/wj/rUKbA3SG+HOV9rmTyyvAicvFSVFVT4omPVV8C1IFGjsjCOXXJm7cDZzaW5Z/iWMU8kPCsow64q59E5WDBIpcEwS+5MtdMC9wTPJNezHNJxsL+Wjw83QqzVcUJ73CKYl8Bsi0NlIz6SvIp5NVvbRgzMxPPm4K5VPbhF0IujGFuYcMTA+d671iXBUrAuJwufKOpc2sY/LnPLkrvokZ6279IfyW/4+fxRvllP5S+X2SMlnbv0m/ySb6fxI4bTH9pdfD2AhBhMhTmGsbDvSlO4AA6XhNQqp8UzPqsaafDTEeitYLa3d4bYxLA2KxxMplpa4HJzhZYeJNEzy+/0Y4mFGJEc/tPNs+F6E2mUV8Jr5NitkHgXpY+jwXmHX4Koq9HuJR46Jp9VH9EjPW3fpN/kpnx8/ir/AJZT+UnokZ6279Jv8k+Pn8T5ZT+UrRU6qwwe2I1sUxN0IdjaGSugjpM8qj4+POLMTy6JdvbxgxMRPPm+qz1YFNcxximHcBGJodO8QekdCjTTzY3FtGNMTM8uTu1ewQKJB3IPv74umRd4XVNexHJswML+Kjw80LhupIpMd8Yxyy/d3oYHSuta3LP8K8mnm0YtlGJXNfPq6no7b6wf0x/JeeBh8BH5Lws1gICAgICAgICAgICAgEoIrCmHoUDE4zdzNbjKCjVhw1uxAIuT4LRv4jvDI3tKCOj4PhxSHO3r3AHE6RMgObIZYsckE9gusLqMWw5boDjkXSI6Tk50FpodYYbxvgWSynhgaUsbe0gIJdrgRMGYOMEYwUH6gICAgICAgICAgICAgICAgICCCrJhbcm3WcM5OrpJ6kGdvpRiPuwjeOWJFOOXTd/fJ2oOjTKXj3Gji84kB7sZmTkmZzJ6BOfOZDKEfTIRiEMv3xBlBvYhOJzgS6JfEdSCboUIQ3nHO6N+4kkm6N9j6jIeCCQodKJDXt3j5TEuvm/cILdVSnl7nNlJsr0uZrpyMhzA5ZdIKCzICAgICAgICAgICAgICAgICDipMUMaSeZBllYaaYzukRCR7jcUveJ+CCKpziwbjCkCTv3a/Bo+eXrDrk7jDAh4okSYhzyta7hRXfiOOX/1B2qLRRC3NnNDaYz+txyDtQckYG4G88R109g30Q/RB3YAxTyTk0e9+zQEFhqlEO7CXODe6MXP8QPigvKAgICAgICAgICAgICAgICD8JQVOtmE5jcWHGeEegIKMyOHRHRAJshi6z8R4LR4uJ+SDpsexofGib5rSITQMsRwxlo6Zun4BB2aLR3OiB0XhEAu6BPGQOoAAIOSCb953PFfi0GZPog/CQ6IT/q37JnXLHEd4nEg7MSZdDaMt4PeOj/aXgA0e8gudUaPjc+WLgjWdYQWpAQEBAQEBAQEBAQEHDGpTGCbnASQVyNXJkzucMuHTj+gQR9KrhGliayGOl5A1n6II11ZaQ/JFe7umTH5yA1B1o2GIv8AvFLep8XffkZl+KCKdhFj7zL8SK52I7kzcxLovOOQ85nNB9xGgC4JMazHEcMYaZYg085AOLr7Cgj6KBHjBwbdgQAdyb0nnJ6STIfFBMYRfda4jK77NsuzfH6IOvGducmt4QaITdN2MnwGPwQctAgASDcgxT6GjGfFxynoKDuQHze5reYzcelxxyHUMSC9VWZKG7TcPhIIJtAQEBAQEBAQEBAQROG6S5rDdxGSDO6bT4oJMSZb+HfO6uEZIIiJhw4yYTw0cJ0SIWgdADWDGT0IOOjRqTF38KFChA427wPiS6S4mQ/uNBzvosd3G0kdYvMaPgMSDiNEgtk18ZpJxBodfLuxjcqDs0qkw6PvWtvxZb2G3FIdLz/qP6EHQ3OPSQGlzWsBm4tF2G3R+8esz6sqCcokCHDa1kPfYwcWQyyY+ieNB1Y1JaYhc5wLIeJoBBLjlJ6gTz9SDrUYuiExDzksh6TuE7wH7IJNzg3etyMF6Kezgsn0nn/7Qd+r1GJILspN93j/AH5ILzV1v2IP3i53xcZfJBKoCAgICAgICAgICDgpNGDxjQV7CuBmgGQQU2mYOh3vtDiHBBk0Dp8T05UHUpcLIzgQ/usGN/h++JBxNoF43Q0Qp5MkSI4dXM0ZEHRpNIbCcWUNoMTJEjvMwzpAccrvl9A5qBgdrBejOL3Ox3cc3HpIOM9rkElFhSF58gOa+brG+7zlB1aTSiWFrZydvS4C65w+7DbzDrPyyoOtAozZSLQ1gxNhskXE8152QHqQS0CCWSLgC+V2G0ZGjs6Ok8/wkHHDhXjubcbQb0R2W8/o6wNaCz0Bl1m94T963xxfLKguVAhXGNaMgAHwQdhAQEBAQEBAQEBAQEHFSIV4IKHh7BMQuLoZkccjIOlPnE+dBW2YNiQ70w6I4kFofMgu+892UgdHZ4BwUvBtKDLrXXb2OI9rQHv6AT0CcgBzIPiG5tHIDIWQH7SIZumOqWIdQkg69Bp0eKftIggTmQGtEyB0vdMk5cnQg5IUdj3ygTjPyGJELi0dnO7wkOtB2RRmsM475uPMcZPUIbMgQSMItaL7m3ABJl6U/dYMmsoOtTIxOK9ud7mumJFeNEcFqDkoTS2QAf1bpdDvCGwa5ILtgKgkkPcMcpAfdHQgs7RJB+oCAgICAgICAgICAgIOKJAByhB1hg1k5yQfsXBzCMiCMpFW2O5ggh6dVFp5sSCs4Wwa6BJt54hjK2GQwn3hI5etB+UZkMSdcax5bNoc45Om6cgnLmmUHagYPiRDeZMu++8cGf3GHJ4/NBNUOrjzw3uM8spMn+UBBNYOq8yHjDQOlBOwYIaMSDkQEBAQEBAQEBAQEBAQEBAQEBB+EIITDWCBFGRBH0Cq7Q4udjJyk4ziyILFR6C1gxBB2A0IPpAQEBAQEBAQEBAQEBAQEBAQEBAQECSAgICAgICAgICAgIP/2Q==">';
rows += '</a>';
rows += '<div class="search-result-item-body">';
rows += '<div class="row">';
rows += '<div class="col-md-9 col-12">';
rows += '<h5 class="search-result-item-heading"><a href="#">Wikidata Label Fixes</a></h5>';
rows += '<p class="info"> Data Repair </p>';
rows += '<p class="description"> There are many labels missing for Classes and Properties for Wikidata URIs in the LOD Cloud Cache, for example, this list of attributes. I also notice that the label is declared indirectly, like on the describe of this producer attribute. Is there a way this can be remedied from the data loading end, perhaps using inference rules? </p>';
rows += '</div>';
rows += '<div class="col-md-3 col-12 text-center">';
rows += '<p class="value3 mt-sm"> 15 ETH </p>';
rows += '<p class="fs-mini text-muted"> IN INCREMENTS </p><a class="btn btn-success btn-sm" href="#">Accept</a>';
rows += '</div>';
rows += '</div>';
rows += '</div>';
rows += '</section>';

*/

}

                  } 
              }
              var propIRI = getGroupByValue();
              var propLabel = getGroupByLabel();
              var facet = false;

              //var groupByCriteria = getMainFocus();
              var isGroupByCriteria = isGrouped(); // POI: For now, "Used As" fields are not treated as "group by", since they are not "added" from the Group by menu, but are instead added from the Used As menu
              //if(isGroupByCriteria){
                //propIRI = groupByCriteria.attr('iri');
                //propLabel = groupByCriteria.attr('label');
    //var l = $('#groupByMenu :selected').attr('l');

    //propIRI = (l) ? l.split(DELIMIT_GROUP_BY_VALUE_AND_LABEL)[0] : $('#groupByMenu :selected').val();
    //propLabel = (l) ? l.split(DELIMIT_GROUP_BY_VALUE_AND_LABEL)[1]: $('#groupByMenu :selected').text();

              //}

              _root.find('.' + getMainFocus().attr('class') + ' > property[iri=\''+propIRI+'\'] > value').each(function(k){
                if(!facet && $(this).text() === value) {
                  facet = true;
                }
              });
              var checked = (facet) ? ' checked="checked"': '';
              var active = (facet) ? 'active': '';

              label = processLabel(label, value, datatype, lang);
              setLabel(value, label);

              // POI: the label and values need to have the apostrophe (') char removed before insertion into the javascript functions below
              // but they need to be desanitized by the respective javascript methods before being used in a query (or else the query will fail due to value mismatch)
              // also, a double encoding is used by the sanitize function, so we have to desanitize the label before displaying it in the data canvas
              label = sanitizeLabel(label);
              value = sanitizeLabel(value);
              //console.log($(col[0]));

var color = 'success';
var badgeColor = ($('#groupByMenu :selected').val() != GROUP_BY_NONE_VALUE) ? 'primary' : 'info';

/*

              rows +=  '<button id="'+opts.parentId+'" class="up list-group-item text-left">';
                rows += '<span class="thumb-sm float-left mr"><img class="rounded-circle" src="'+getFaviconUrl(value)+'" alt="...">';
                rows += '<i class="status status-bottom bg-success"></i>';
                rows += '</span>';
                rows += '<div>';
                rows += '<h6 class="m-0">'+label+'</h6>';
                rows += '<p class="help-block text-ellipsis m-0"></p>';
                rows += '</div>';
                rows += '</button>';
*/
rows +=  '<a id="'+opts.parentId+'" class="up list-group-item'+((recordActive)?' record-active':'')+'" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left m-0 mr-1">';

/*

                                    rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                    rows +=  '<i class="status status-bottom bg-success"></i>';
                                rows +=  '</span>';



            rows +=  '<div>';
              rows +=  '<h6 class="m-0">'+label+'</h6>';
              rows +=  '<p class="help-block text-ellipsis m-0"></p>';
            rows +=  '</div>';


rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';
                                    //rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                    rows +=  '<span _ngcontent-c9="" class="badge badge-pill badge-info" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</span>';
                                    //rows +=  '<i class="status status-bottom bg-success"></i>';
                                rows +=  '</span>';
            rows +=  '<div>';
              rows +=  '<h6 class="m-0">'+label+'</h6>';
              rows +=  '<p class="help-block text-ellipsis m-0"></p>';
            rows +=  '</div>';
          rows +=  '</a>';
*/

if(true){

              //rows += '<tr><td class="up" id="'+opts.parentId+'"><span id="'+id+'">';

              if(isGroupByCriteria) {
                var gbjson = JSON.parse( $('#groupByMenu :selected').attr('json') ) ;
                var isReverse = (!gbjson) ? false :  gbjson.isReverse;
              //if(propIRI != GROUP_BY_NONE_VALUE && propIRI != GROUP_BY_TEXT_VALUE) {
                var addPropOrPropOf = (isReverse) ? "addPropertyOfFacet" : "addPropertyFacet";
                var propOrPropOf = (isReverse) ? "property-of" : "property";
                //rows += '<a class="count" onclick="javascript: remove(\''+getMainFocus().attr('class')+'\', true); '+propOrPropOf+'(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\', \''+sanitizeLabel(value)+'\', \''+sanitizeLabel(label)+'\', \''+datatype+'\'); selectMenuItem(\''+id+'\', \''+propIRI+'\');">'+ct+'</a>&nbsp;-&nbsp;';
                rows +=  '<span style="cursor:pointer" _ngcontent-c9="" class="badge badge-pill badge-'+badgeColor+'" onclick="javascript: removeEmptyFacet(\''+propOrPropOf+'\',\''+propIRI+'\', true); '+addPropOrPropOf+'(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\', \''+sanitizeLabel(value)+'\', \''+sanitizeLabel(label)+'\', \''+datatype+'\', \''+lang+'\'); selectMenuItem(\''+id+'\', \''+propIRI+'\');">'+ct+'</span>';
              }
              else {
                if(datatype=='uri') {
                  rows += '<img style="cursor:pointer" onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                    //rows +=  '<i class="status status-bottom bg-'+color+'"></i>';
                }
                else {
                  rows += '<span onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" class="icon-literal glyphicon glyphicon-tag"></span>';
                }
              }
                                rows +=  '</span>';

            rows +=  '<div>';



              label = deSanitizeLabel(label);
              var labelLink = (datatype=='uri') ? ' onclick="javascript:describe(\''+rowId+'\', \''+value+'\');"' : '';
              rows +=  '<h6 class="row-result text-ellipsis m-0" >';
              rows+='<span '+buildTitle(value)+' '+labelLink+'>'+label+'</span>';
              //rows +=  '<p class="help-block text-ellipsis m-0"></p>';


              //rows += '</span></td><td style="white-space:nowrap; vertical-align:top;">';          

              if(isGroupByCriteria){
                  //rows += '<label _ngcontent-c6="" btncheckbox="" class="btn btn-default ng-untouched ng-valid '+active+' ng-dirty">';
                 // rows += 'Right way'
                  //rows += '</label>';
          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-primary">';
          rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: removeEmptyFacet(\''+propOrPropOf+'\',\''+propIRI+'\', true); '+addPropOrPropOf+'(\''+createId()+'\', \''+propIRI+'\', \''+propLabel+'\', \''+sanitizeLabel(value)+'\', \''+sanitizeLabel(label)+'\', \''+datatype+'\', \''+lang+'\')" />&nbsp;';
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';
//                 rows += '<img title="click to drop-down" class="count" onclick="javascript:expand(\''+value+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
                 // rows += '<a title="click to drop-down" class="count" onclick="javascript:expand(\''+value+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"><img width="16" height="16"/>&nbsp;&nbsp;</a>&nbsp;';
          rows += '<i '+buildTitle('acts as \''+propLabel+'\' of these things')+' class="expand la la-bars" onclick="javascript:expand(\''+value+'\', \''+datatype+'\', \''+lang+'\', \''+toJSONString(opts)+'\')"></i>' + ((i==0) ? '<script type="text/javascript">expand(\''+value+'\', \''+datatype+'\', \''+lang+'\', \''+toJSONString(opts)+'\');</script>' :'');
              }
             // rows += '</td></tr>';

rows+='</h6>';

if(!isGroupByCriteria){
              var badgeId = createId();
              var childProp = getMainFocus().children('property, property-of');
//              if(childProp.length > 0) rows +=  '<p class="text-ellipsis m-0" id="'+badgeId+'"></p><script type="text/javascript">loadSubjectBadge(\''+value+'\', \''+$(childProp[0]).attr('iri')+'\', \''+badgeId+'\', '+($(childProp[0]).prop('nodeName').toLowerCase() == 'property-of')+');</script><!--'+$(childProp[0]).prop('nodeName')+'-->'; //
              rows +=  '<p class="text-ellipsis m-0" id="'+badgeId+'"></p><script type="text/javascript">loadSubjectBadge(\''+value+'\', \''+badgeId+'\');</script>'; //

}
            rows +=  '</div>';

          rows +=  '</a>';

          }
}          
      });

      //console.log(rows);
          //$('#'+ID_GROUP_BY+'').append(rows);
          $('#angular_recordsList').append(rows);

        //$('#groupby').append(rows);
        //return total;



} // loadGroupByResults

/*
function loadSubjectBadge(iri, propIRI, id, isReverse){
  var opt = new Object();
  opt.tar = 'subject';
  opt.id = id;
  opt.propIRI = propIRI;
  fct_sparql('select distinct ?o ?lab ?pLab WHERE { {<'+iri+'> <'+propIRI+'> ?o. OPTIONAL{?o <http://www.w3.org/2000/01/rdf-schema#label> ?lab. <'+iri+'> ?p ?o. FILTER langMatches( lang(?lab), "EN" )}  OPTIONAL{<'+propIRI+'> <http://www.w3.org/2000/01/rdf-schema#label> ?pLab. FILTER langMatches( lang(?pLab), "EN" )}} } limit 1', opt);
  //if(isReverse) fct_sparql('select distinct ?o ?lab ?pLab WHERE { {?o <'+propIRI+'> <'+iri+'> . OPTIONAL{?o <http://www.w3.org/2000/01/rdf-schema#label> ?lab. FILTER langMatches( lang(?lab), "EN" )}  OPTIONAL{<'+propIRI+'> <http://www.w3.org/2000/01/rdf-schema#label> ?pLab. FILTER langMatches( lang(?pLab), "EN" )}} } limit 1', opt);
  //else fct_sparql('select distinct ?o ?lab ?pLab WHERE { {<'+iri+'> <'+propIRI+'> ?o. OPTIONAL{?o <http://www.w3.org/2000/01/rdf-schema#label> ?lab. <'+iri+'> ?p ?o. FILTER langMatches( lang(?lab), "EN" )}  OPTIONAL{<'+propIRI+'> <http://www.w3.org/2000/01/rdf-schema#label> ?pLab. FILTER langMatches( lang(?pLab), "EN" )}} } limit 1', opt);
}
*/
function loadSubjectBadge(iri, id){
  if(!isShowSubjectBadges()) return;
  var opt = new Object();
  opt.tar = 'subject';
  opt.id = id;
//  fct_sparql('select distinct ?o ?lab ?p WHERE { {<'+iri+'> <http://www.w3.org/1999/02/22-rdf-syntax-ns#subject> ?o. OPTIONAL{?o <http://www.w3.org/2000/01/rdf-schema#label> ?lab. <'+iri+'> ?p ?o. FILTER langMatches( lang(?lab), "EN" )}} UNION {<'+iri+'> <http://purl.org/dc/terms/subject> ?o. OPTIONAL{?o <http://www.w3.org/2000/01/rdf-schema#label> ?lab. <'+iri+'> ?p ?o. FILTER langMatches( lang(?lab), "EN" )}}  } limit 1', opt);
  fct_sparql('select distinct ?o ?lab ?p WHERE { {<'+iri+'> <http://www.w3.org/1999/02/22-rdf-syntax-ns#subject> ?o. OPTIONAL{?o <http://www.w3.org/2000/01/rdf-schema#label> ?lab. <'+iri+'> ?p ?o. FILTER langMatches( lang(?lab), "EN" )}} UNION {<'+iri+'> <http://purl.org/dc/terms/subject> ?o. OPTIONAL{?o <http://www.w3.org/2000/01/rdf-schema#label> ?lab. <'+iri+'> ?p ?o. FILTER langMatches( lang(?lab), "EN" )}}  } limit 2', opt);
}



function addSubResults(opt){
    var table = $.createElement('table');
    table.attr('id', opt.childrenId);
    table.attr('width', '100%');
    table.addClass('table');
    table.addClass('table-striped');
    table.css('margin-bottom', '0px');
    var tbody = $.createElement('tbody');
    table.append(tbody);
    //col.append(table);
    //row.append(col);
    $('#'+opt.parentId+'').after(table);
}

function expand(propVal, datatype, lang, optsStr){
    optsStr = deSanitizeLabel(optsStr);
    var opts = toJSONObject(optsStr);
    var childrenId = opts.childrenId;
    var parentId = opts.parentId;
    propVal = deSanitizeLabel(propVal);
    if($('#'+parentId+'').hasClass('up')){
        $('#'+parentId+'').removeClass('up');
        $('#'+parentId+'').addClass('down');
    }
    else{
        collapse(opts);
        return;
    }
    //console.log('user expanded: ' + childrenId);
/*
    var children = $.createElement('table').attr('id', childrenId);
    children.attr('width', '100%');
    $('#'+parentId+'').append(children);
*/

    //var row = $.createElement('tr').attr('id', childrenId);
    //var col = $.createElement('td');
    //col.attr('colspan', '2');




    var q = _root.find('query').clone();
    setViewType(VIEW_TYPE_LIST, q);
    getFocus(q).find('view').attr('offset', 0);

    //var id = $('#groupByMenu :selected').attr('id');
    var propIRI = getGroupByValue();
                var gbjson = JSON.parse( $('#groupByMenu :selected').attr('json') ) ;
                var isReverse = (!gbjson) ? false :  gbjson.isReverse;


    // POI: need to investigate this more, but basically, when a field is selected in the Group by list, it becomes the focus of the main query
    // but the URI does not update, instead, the fact that the group field is selected indicates the result set is the field's result set and
    // the focus (as asserted by the UI) is under each of those smart folders, thus, the groupby query criteria is never displayed in the facet
    // collector, it is only displayed in the groupby menu. If the groupby criteria is no longer present in the Group by list, then it is removed
    // from the query criteria on loadGroupByMenu()
    //var prop = getFocus(q); // = (isReverse) ? q.find('.'+getFocus(q).attr('class') + ' > property-of[class="' +id+ '"]') : q.find('.'+getFocus(q).attr('class') + ' > property[class="' +id+ '"]');
    //takeFocus(prop.parent(), q);
    //prop.attr('iri', groupByIRI);

    if(isReverse) prop = q.find('.'+getFocus(q).attr('class') + ' > property-of[iri="' +propIRI+ '"]');
    else {
      prop = q.find('.'+getFocus(q).attr('class') + ' > property[iri="' +propIRI+ '"]');
      if(!prop || prop.length == 0){
        prop = $.createElement('property');
        //prop.attr('class', id);
        prop.attr('iri', propIRI);
        prop.attr('label', 'test');
        //prop.attr('isGroupBy', 'true');
        getFocus(q).append(prop);
      }
    }



    var val = $.createElement('value');
    val.text(propVal);
    if(datatype && datatype.length > 0 && datatype !== 'undefined') val.attr('datatype', datatype);
    if(lang && lang.length > 0 && lang !== 'undefined') val.attr('lang', lang);
    //val.attr('op', '=');
    //val.attr('same_as', 'yes');
    prop.append(val);
    //getFocus(q).append(prop);

    $('#'+parentId+'').addClass('loading');
    //takeFocus(q, q);
    fct_query(q, VIEW_TYPE_LIST,opts);

}

function collapse(opts){
    $('#'+opts.childrenId).remove();
    $('#'+opts.parentId).removeClass('down');
    $('#'+opts.parentId).addClass('up');
}



function loadGroupByMenuDefaults(){

/*


      $(_root.find('.'+getMainFocus().attr('class') + ' > property-of')).each(function(i) {
          label = $(this).attr('label');
          value = $(this).attr('iri');
          var id = $(this).attr('class');
          opts += '<option defaultLabel="'+label+'" isReverse="true" l="'+value+DELIMIT_GROUP_BY_VALUE_AND_LABEL+label+'" value="'+value+DELIMIT_GROUP_BY_REVERSE_PROPERTY+'" id="'+id+'">'+label+'*</option>'; //POI: the DELIMIT_GROUP_BY_REVERSE_PROPERTY signifies a role in the permalink query parameter also
      });



      $("fct\\:row", result).each(function(i) {
          val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
          if(i == 0) defaultVal = val;
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              // seems like jquery is commenting out the CDATA
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              //console.log(val);
              switch(j){
                case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
                case 1: label = val; break;
                case 2: ct = val; break;
              }
          });
          label = processLabel(label, value, datatype, 14);
          //console.log($(col[0]));
          opts += '<option defaultLabel="'+label+'" l="'+value+DELIMIT_GROUP_BY_VALUE_AND_LABEL+label+'" value="'+value+'" id="'+createId()+'">'+label+'</option>';
      });
      */
      //console.log(rows);

      
          //var previousGroupBy = $('#groupByMenu :selected').attr('value');
          $('#groupByMenu').empty();

    var opt = '';
    var json = new Object();
    json.label = GROUP_BY_NONE_LABEL;
    json.iri = GROUP_BY_NONE_VALUE;
    json.isReverse = false;
    var v = $('#groupByMenu > option[value="'+GROUP_BY_NONE_VALUE+'"]');
    if(!v || v.length <= 0){ // add the property if is does not exist in the groupby menu
      opt = '<option json=\''+JSON.stringify(json)+'\' value="'+GROUP_BY_NONE_VALUE+'" id="'+createId()+'">'+GROUP_BY_NONE_LABEL+'</option>';
      $('#groupByMenu').append(opt);
    }


    json = new Object();
    json.label = GROUP_BY_TEXT_LABEL;
    json.iri = GROUP_BY_TEXT_VALUE;
    json.isReverse = false;
    var v = $('#groupByMenu > option[value="'+GROUP_BY_TEXT_VALUE+'"]');
    if(!v || v.length <= 0){ // add the property if is does not exist in the groupby menu
      opt = '<option json=\''+JSON.stringify(json)+'\' value="'+GROUP_BY_TEXT_VALUE+'" id="'+createId()+'">'+GROUP_BY_TEXT_LABEL+'</option>';
      $('#groupByMenu').append(opt);
    }



/*          if(opts.length > 1) {
              //$('#groupByMenu').val(defaultVal);
              //selectGroupBy();
          }*/


        //$('#groupby').append(rows);
        //return total;


} // loadCategoriesResults




function selectGroupBy(isPaging){
      $('#groupByHeader > p.gbsub').text('');
      $('#groupByHeader > p.gbbadge').text('');
    // update the Group By list
    var q = _root.find('query').clone();
    var gbjsonStr = $('#groupByMenu :selected').attr('json');
    var gbjson = (gbjsonStr) ? JSON.parse(gbjsonStr) : {};
    var iri = gbjson.iri;
    var label = gbjson.label;
    if(!iri) iri = $('#groupByMenu :selected').val();
    if(!label) label = $('#groupByMenu :selected').text();
    if(iri == GROUP_BY_NONE_VALUE){
        //takeFocus(q, q);
      //$('#groupByHeader').text('Records');
    }
    else if(iri == GROUP_BY_TEXT_VALUE){
      //$('#groupByHeader').text('Text Matches');
    }
    else{
        //$('#groupByMenu :selected').text('Records (by ' + label + ')');
                //var gbjson = JSON.parse( $('#groupByMenu :selected').attr('json') ) ;
                var isReverse = (!gbjson) ? false :  gbjson.isReverse;
        //var prop = (isReverse) ? $.createElement('property-of') : $.createElement('property');
        var prop;

        // POI: user is not allowed to "add" a property-of facet (for now), instead, user must
        // manually add a field from the Roles menu, after that, the Roles field will 
        // appear in the Group by menu, if the focus has one
        if(isReverse) prop = $( getFocus(q).children('property-of[iri="' +iri+ '"]')[0] );
        else {
          prop = $( getFocus(q).children('property[iri="' +iri+ '"]')[0] );
          if(!prop || prop.length == 0){
            prop = $.createElement('property');
            prop.attr('class', $('#groupByMenu :selected').attr('id'));
            prop.attr('iri', iri);
            prop.attr('label', label);
            getFocus(q).append(prop);
          }
        }
        prop.attr('isGroupBy', 'true');
        takeFocus(prop, getFocus(q));
        //takeMainFocus(prop.attr('class'), true);
        var sub = $.createElement('p');
        sub.addClass('help-block');
        //sub.css('margin-top', '.55rem');
        sub.addClass('m-0');
        sub.addClass('text-dark');
        sub.addClass('text-ellipsis');
        sub.addClass('gbsub');
        sub.text('Grouped by ');
        $('#groupByHeader > h4').after(sub);

var badge;
if(isReverse){
        badge = $.createElement('p');
        badge.addClass('badge');
        //badge.addClass('badge-pill');
        badge.addClass('badge-default');
        badge.addClass('gbbadge');
        badge.css('display', 'inline');
        badge.text( 'role' );
        //var removeLink = $.createElement('a');
        //removeLink.text('x');
        //badge.append(removeLink);
        badge.on('click', function (e){
          selectMenuItem('groupByMenu', GROUP_BY_NONE_VALUE);
        });
        //sub.addClass('float-right');
       //<p class="help-block text-ellipsis m-0"></p>
        sub.append(badge);
        sub.append('&nbsp;');
}

        badge = $.createElement('p');
        badge.addClass('badge');
        badge.addClass('badge-pill');
        badge.addClass('badge-primary');
        badge.addClass('gbbadge');
        badge.css('display', 'inline');
        badge.text( label +  ( (isReverse) ? ' of' : '') );
        //var removeLink = $.createElement('a');
        //removeLink.text('x');
        //badge.append(removeLink);
        badge.on('click', function (e){
          selectMenuItem('groupByMenu', GROUP_BY_NONE_VALUE);
        });
        //sub.addClass('float-right');
       //<p class="help-block text-ellipsis m-0"></p>
        sub.append(badge);


    }


    if(!isPaging){
      page = 0;
    }
    getFocus(q).find('view').attr('offset', page * SIZE_RESULT_SET);


    $('#groupByHeader').addClass('loading');
    if(getQueryText().length > 0 && iri == GROUP_BY_TEXT_VALUE){
        fct_query(q, VIEW_TYPE_TEXT);
    }
    else fct_query(q, VIEW_TYPE_LIST_COUNT);

    // update the Show Me list
    // POI: no need to update the show me during paging
    // need to check whether its ok not to update when a filter is 
    // selected from the groupByMenu, in theory, the groupByMenu
    // should only list bound fields, but need to make sure
    // for now, we skip the showMe update when an item is 
    // selected from the groupByMenu
   //if(!isPaging) selectShowMe();
}


//** FILE: showme.js **/
var showMePage = 0;

var showMeResultsCt = 0;

//query.append(view);
//doQuery();

function showMeResetPaging(){
  showMePage = 0;
  showMeResultsCt = 0;
}

function showMePageRight(){
  setViewOffset(getViewOffset() + SIZE_RESULT_SET);
  showMePage++;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  selectShowMe(true);
}

function showMePageLeft(){
  setViewOffset(getViewOffset() - SIZE_RESULT_SET);
  showMePage--;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  selectShowMe(true);
}

function setShowMePage(p){
  showMePage = p;
  selectShowMe(true);
}

function hideAlignButton(){
      $('#alignButton').addClass('disabled');
      $('#alignButton').attr('disabled', 'true');
      $('#alignButton').unbind('click');
}

function loadCategoriesResults(xml){
      $('#'+ID_SHOW_ME+'').empty();
      $('#angular_showMeList').empty();

      var reverse = getMainFocus().prop('nodeName').toLowerCase();
      if(reverse == 'property') reverse = 'property-of';
      else reverse = 'property';

      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      showMeResultsCt = $("fct\\:row", result).length;


      /*
        if(showMePage == 0){
          $("#showMeLeftButton").attr('disabled', 'true');
          $("#showMeLeftButton").addClass('disabled');
          $('#showMeLeftButton').removeAttr('title');
        }
        else{

          $("#showMeLeftButton").removeAttr('disabled');
          $("#showMeLeftButton").removeClass('disabled');
          $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

        }
      if(showMeResultsCt < SIZE_RESULT_SET) {
        $("#showMeRightButton").attr('disabled', 'true');
        $("#showMeRightButton").addClass('disabled');
        $('#showMeRightButton').removeAttr('title');
      }
      else {
        $("#showMeRightButton").removeAttr('disabled');
        $("#showMeRightButton").removeClass('disabled');
        $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

      }


*/

        if(showMePage == 0){
          $("#showMeLeftButton").addClass('hide');
          $('#showMeLeftButton').removeAttr('title');
        }
        else{

          $("#showMeLeftButton").removeClass('hide');
//          $('#showMeLeftButton').attr('title', 'page ' + (showMePage));
          setTitle('showMeLeftButton', 'page ' + (showMePage), 'bottom');

        }
      if(showMeResultsCt < SIZE_RESULT_SET) {
        $("#showMeRightButton").addClass('hide');
        $('#showMeRightButton').removeAttr('title');
      }
      else {
        $("#showMeRightButton").removeClass('hide');
//        $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

          setTitle('showMeRightButton', 'page ' + (showMePage+2), 'bottom');
      }


      // POI: custom logic for demo of MyVios Record category
      /*if(showMePage==0 && $('#nav0 > table > tbody > tr > td.via').text() == VALUE_ROOT) rows += '<tr><td><div class="up" id="'+ID_MY_RECORDS+'"><a href="#'+id+'" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')"><img src="http://icon-park.com/imagefiles/folder_icon_purple.png" width="16" height="16"/></a>&nbsp;<a title="'+VALUE_MANAGED_RECORD+'" href="#'+id+'">'+VALUE_MANAGED_RECORD+'</a> <span class="disabled">'+(Math.floor(Math.random() * 10000) + 1)+'<span></div></td></tr>';*/
      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");
          var value, datatype, shortform, label, ct;
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              // seems like jquery is commenting out the CDATA
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              //console.log(val);
              switch(j){
                case 0: uri = val; break;
                case 1: label = val; break;
                case 2: ct = val; break;
              }
          });
          label = processLabel(label, uri, datatype);
          label = spaceCamelCase(label);
              setLabel(uri, label);
          var id = createId();
          //console.log($(col[0]));
          var opts = new Object();
          opts.tag = TAG_CLASS;
          opts.parentId = 'smr_'+id;
          opts.childrenId = opts.tag + opts.parentId;
          opts.contextId = id;


rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';
                                    //rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
//                                    rows +=  '<span _ngcontent-c9="" class="badge badge-pill badge-info" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</span>';
                                    //rows +=  '<i class="status status-bottom bg-success"></i>';
          //                      rows +=  '</span>';
        //    rows +=  '<div>';
      //        rows +=  '<h6 class="m-0">'+label+'</h6>';
    //          rows +=  '<p class="help-block text-ellipsis m-0"></p>';
  //          rows +=  '</div>';
//          rows +=  '</a>';


  var ckcolor = 'primary';
var badgeColor = ($('#groupByMenu :selected').val() != GROUP_BY_NONE_VALUE) ? 'info' : 'info';

var rowId = opts.parentId;

if(true){



          //console.log('test parent: ' + getMainFocus().parent(reverse + '[iri='+getMainFocus().attr('iri')+']').parent().attr('class'));
          var align = getMainFocus().parent(reverse + '[iri='+getMainFocus().attr('iri')+']').parent().children('class[iri=\''+uri+'\']');
          var facet = getMainFocus().children('class[iri=\''+uri+'\']');
          if((!facet || facet.length) <= 0 && getMainFocus().children('value') && getMainFocus().children('value').length > 0) facet = align;
          var checked = (facet && facet.length > 0) ? ' checked="checked"': '';
          var focusTarget = (getMainFocus().attr('class') == ID_QUERY+"") ? 'focusHeader' : 'focusValue';
          var focusTargetClass = (getMainFocus().attr('class') == ID_QUERY+"") ? 'queryFocus' : 'queryFocusValue';
          //rows += '<tr  id="rw'+id+'" onmouseover="javascript:showControls(\''+id+'\')" onmouseout="javascript:hideControls(\''+id+'\')"><td class="up" id="'+opts.parentId+'">';

          rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-'+badgeColor+'" onmouseover="javascript:$(\'#'+focusTarget+'\').addClass(\''+focusTargetClass+'\')" onmouseout="javascript:$(\'#'+focusTarget+'\').removeClass(\''+focusTargetClass+'\')" onclick="javascript: $(\'#'+focusTarget+'\').removeClass(\''+focusTargetClass+'\'); var cid = createId(); addClassFacet(cid, \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</span>';
//          rows += '<a class="count" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</a>&nbsp;-&nbsp;';
          //rows += '<a title="'+uri+'" onclick="javascript:describe(\''+uri+'\');">'+ spaceCamelCase(label) +'</a>&nbsp;';
                                rows +=  '</span>';
            rows +=  '<div>';
          rows +=  '<h6 class="row-result text-ellipsis m-0" >';
          rows += '<span '+buildTitle(uri)+' onclick="javascript:describe(\''+rowId+'\', \''+uri+'\');">' + label + '</span>';
              //rows +=  '<p class="help-block text-ellipsis m-0"></p>';

          //rows += '</td><td id="ctrl'+id+'" class="hideCtrl" style="white-space:nowrap; vertical-align:top;">';
          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+ckcolor+'">';
          rows += '<input class="form-check-input" id="ckbx'+id+'" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: if(!$(this).is(\':checked\')) {removeFacet(\''+facet.attr('class')+'\')}else{var cid = createId(); addClassFacet(cid, \''+uri+'\', \''+sanitizeLabel(label)+'\')}" />&nbsp;';
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';
          //rows += '<img title="view instances" class="count" onclick="javascript:expandShowMe(\''+uri+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
//          rows += '<a title="view instances" class="count" onclick="javascript:expandShowMe(\''+uri+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')">&nbsp;<img width="16" height="16"/></a>';
          //rows += '</td></tr>';
          rows += '<i '+buildTitle('preview category members')+' class="expand la la-bars" onclick="javascript:expandShowMe(\''+uri+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"></i>';

          rows +='</h6>';
            rows +=  '</div>';
          rows +=  '</a>';

} // if false          
      });
      //console.log(rows);

         // $('#'+ID_SHOW_ME+'').append(rows);
          $('#angular_showMeList').append(rows);

if(getMainFocus().attr('class') != ID_QUERY && (!getMainFocus().children('value') || getMainFocus().children('value').length == 0)){
          var focusCategories = getMainFocus().children('class');
          var alignArray = getMainFocus().parent(reverse + '[iri='+getMainFocus().attr('iri')+']').parent().children('class').clone(true);
          ///focusCategoriesArray.push(focusCategories);

          var d = diff(getIRIs(alignArray, true), getIRIs(focusCategories));
          //console.log('align length: ' + alignArray.length);
          //console.log('diff[' +d.length+']: '+d+' prop: ' +getMainFocus().prop('nodeName'));
          if(d.length > 0) {
            $('#alignButton').removeClass('disabled');
            $('#alignButton').removeAttr('disabled');
            $('#alignButton').click(function(e){
              focusCategories.remove(); // clear all class criteria
              alignArray.appendTo(getMainFocus()); // add the new class criteria
              doQuery(getQueryText());
            });
          }
          else { 
          }  
}

        //$('#groupby').append(rows);
        //return total;
} // loadCategoriesResults

function getIRIs(ele, changeIds){
  var a = [];
  ele.each(function(i){
    if(changeIds) $(this).attr('class', createId());
    a.push($(this).attr('iri'));
    //console.log('id: ' + $(this).prop('nodeName'));
  });
  //console.log('iris: ' + a);
  return a;
}

function diff(a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

function showControls(id){
  $('#'+id).removeClass('rowActive');
}

function hideControls(id){
  $('#'+id).addClass('rowActive');
}


function loadPropertiesResults(xml){
      $('#'+ID_SHOW_ME+'').empty();
      $('#angular_showMeList').empty();

      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      showMeResultsCt = $("fct\\:row", result).length;

      /*
        if(showMePage == 0){
          $("#showMeLeftButton").attr('disabled', 'true');
          $("#showMeLeftButton").addClass('disabled');
          $('#showMeLeftButton').removeAttr('title');
        }
        else{

          $("#showMeLeftButton").removeAttr('disabled');
          $("#showMeLeftButton").removeClass('disabled');
          $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

        }
      if(showMeResultsCt < SIZE_RESULT_SET) {
        $("#showMeRightButton").attr('disabled', 'true');
        $("#showMeRightButton").addClass('disabled');
        $('#showMeRightButton').removeAttr('title');
      }
      else {
        $("#showMeRightButton").removeAttr('disabled');
        $("#showMeRightButton").removeClass('disabled');
        $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

      }
*/


        if(showMePage == 0){
          $("#showMeLeftButton").addClass('hide');
          $('#showMeLeftButton').removeAttr('title');
        }
        else{

          $("#showMeLeftButton").removeClass('hide');
//          $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

          setTitle('showMeRightButton', 'page ' + (showMePage), 'bottom');
        }
      if(showMeResultsCt < SIZE_RESULT_SET) {
        $("#showMeRightButton").addClass('hide');
        $('#showMeRightButton').removeAttr('title');
      }
      else {
        $("#showMeRightButton").removeClass('hide');
//        $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

          setTitle('showMeRightButton', 'page ' + (showMePage+2), 'bottom');
      }

      // POI: demo code
      /*if(showMePage==0 && $('#nav0 > table > tbody > tr > td.via').text() == VALUE_ROOT) rows += '<tr><td><div class="up" id="'+ID_MY_RECORDS+'"><a href="#'+id+'" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')"><img src="http://icon-park.com/imagefiles/folder_icon_purple.png" width="16" height="16"/></a>&nbsp;<a title="'+VALUE_RECORD_MANAGER+'" href="#'+id+'">'+VALUE_RECORD_MANAGER+'</a> <span class="disabled">'+(Math.floor(Math.random() * 10000) + 1)+'<span></div></td></tr>';*/

      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");

          // shortform can be used in lieu of the label for URI values
          var propIRI, datatype, shortform, propLabel, ct;
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              val = val.replace("&lt;![CDATA[","").replace("]]&gt;","");
              //console.log(val);
              switch(j){
                case 0: propIRI = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
                case 1: propLabel = val; break;
                case 2: ct = val; break;
              }
          });
          //label = processLabel(label, uri, datatype);
          //var id = createId();
          //console.log($(col[0]));
          isCategory = (propIRI == 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
          var holdRows = '';
          if(isCategory && false){
            holdRows = rows;
            rows = '';
          }

          propLabel = processLabel(propLabel, propIRI, datatype, undefined);
              setLabel(propIRI, propLabel);
          //console.log($(col[0]));
          var id = createId();
          var opts = new Object();
          opts.tag = TAG_PROPERTY;
          opts.parentId = 'smr_'+id;
          opts.childrenId = opts.tag + opts.parentId;
          opts.contextId = id;
          opts.propIRI = propIRI;
          opts.propLabel = propLabel;


          //var color = ( $('#showMeMenu :selected').attr('value') == VIEW_TYPE_TEXT_PROPERTIES ) ? 'warning' : 'info';
          var ckcolor = 'primary';
var badgeColor = ($('#groupByMenu :selected').val() != GROUP_BY_NONE_VALUE) ? 'info' : 'info';
if(isCategory && false) {
  badgeColor = 'warning';
  ckcolor = 'warning';
}


rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';
                                    //rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                   // rows +=  '<span _ngcontent-c9="" class="badge badge-pill badge-info" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\');">'+ct+'</span>';
                                    //rows +=  '<i class="status status-bottom bg-success"></i>';


//rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
                                //rows +=  '<span class="thumb-sm float-left mr">';
                                    //rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                    /*
                                    rows +=  '<span _ngcontent-c9="" class="badge badge-pill badge-info" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\');">'+ct+'</span>';
                                    //rows +=  '<i class="status status-bottom bg-success"></i>';
                                rows +=  '</span>';
            rows +=  '<div>';
              rows +=  '<h6 class="m-0">'+propLabel+'</h6>';
              rows +=  '<p class="help-block text-ellipsis m-0"></p>';
            rows +=  '</div>';
          rows +=  '</a>';
*/

if(true){

var rowId = opts.parentId;

          var facet = _root.find('.' + getMainFocus().attr('class') + ' > property[iri=\''+opts.propIRI+'\']');
          var checked = (facet && facet.length > 0) ? ' checked="checked"': '';
          //rows += '<tr id="'+id+'" onmouseover="javascript:showControls(\''+id+'\')" onmouseout="javascript:hideControls(\''+id+'\')"><td class="up" id="'+opts.parentId+'"><span id="'+id+'">';
          //var propIRI = $('#groupByMenu :selected').attr('value');
          //var propLabel = $('#groupByMenu :selected').text();
          rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-'+badgeColor+'" onclick="javascript: var pid = createId(); addPropertyFacet(pid, \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(pid);">'+ct+'</span>';
                                rows +=  '</span>';
            rows +=  '<div>';
//          rows += '<a class="count" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\');">'+ct+'</a>&nbsp;-&nbsp;';
//          if(datatype=='uri') {
          rows +=  '<h6 class="row-result text-ellipsis m-0" >';
            //rows += '<a title="'+propIRI+'" onclick="javascript:describe(\''+propIRI+'\');">';
            rows += '<span '+buildTitle(propIRI)+' onclick="javascript:describe(\''+rowId+'\', \''+propIRI+'\');">'+propLabel+'</span>';
            //rows += '</a>&nbsp;';
//          }
          //rows += '</span></td><td id="ctrl'+id+'" style="white-space:nowrap; vertical-align:top;">';          
          if(propIRI != GROUP_BY_NONE_VALUE){
          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+ckcolor+'">';
          rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: if(!$(this).is(\':checked\')) {removeFacet(\''+facet.attr('class')+'\')}else{var pid = createId(); addPropertyFacet(pid, \''+propIRI+'\', \''+propLabel+'\'); }" />&nbsp;'; //generate pid here, in case user clicks this badge multiple times, otherwise, we get duplicate ids added to the nav path, and thus, multiple <view> elements in the query
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';
              //rows += '<img title="view values" class="count" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
          rows += '<i '+buildTitle('preview field values')+' class="expand la la-bars" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"></i>';
//              rows += '<a title="view values" class="count" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')">&nbsp;<img width="16" height="16"/></a>&nbsp;';
          if((facet && facet.length > 0) && !isTableShowing())rows += '<i '+buildTitle('group the contents list by \''+propLabel+'\'')+' class="group la la-compress" onclick="javascript:doGroup(\''+propIRI+'\', \''+propLabel+'\')" ></i>';
          }
          rows +='</h6>';
            rows +=  '</div>';
          rows +=  '</a>';
          /*else {
            if(datatype=='uri') rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="'+icon_file+'" width="16" height="16" /></a>&nbsp;';
            else rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/tag-512.png" width="16" height="16" /></a>&nbsp;';
          }*/
          // a property is always a uri datatype
          //else 
          //rows += propLabel;

         // rows += '</td></tr>';

         if(isCategory && false) {
            rows += holdRows;
         }

}

      });
      //console.log(rows);
//           $('#'+ID_SHOW_ME+'').append(rows);
           
           $('#angular_showMeList').append(rows);

        //$('#groupby').append(rows);
        //return total;
} // loadPropertiesResults

function doGroup(iri, label, isPropOf){
  //exitGroupBy(id);

    var opt = '';
    var appendIri = iri;
    var json = new Object();
    json.label = label;
    json.iri = iri;
    json.isReverse = isPropOf;
    var v = $('#groupByMenu > option[value="'+iri+'"]');
    if(!v || v.length <= 0){ // add the property if is does not exist in the groupby menu
      opt = '<option json=\''+JSON.stringify(json)+'\' value="'+iri+'" id="'+createId()+'">'+label+'</option>';
      $('#groupByMenu').append(opt);
    }
    selectMenuItem('groupByMenu', iri);
    //selectGroupBy();
}


function loadPropertiesInResults(xml){
      $('#'+ID_SHOW_ME+'').empty();
      $('#angular_showMeList').empty();

      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      showMeResultsCt = $("fct\\:row", result).length;
        /*if(showMePage == 0){
          $("#showMeLeftButton").attr('disabled', 'true');
          $("#showMeLeftButton").addClass('disabled');
          $('#showMeLeftButton').removeAttr('title');
        }
        else{

          $("#showMeLeftButton").removeAttr('disabled');
          $("#showMeLeftButton").removeClass('disabled');
          $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

        }
      if(showMeResultsCt < SIZE_RESULT_SET) {
        $("#showMeRightButton").attr('disabled', 'true');
        $("#showMeRightButton").addClass('disabled');
        $('#showMeRightButton').removeAttr('title');
      }
      else {
        $("#showMeRightButton").removeAttr('disabled');
        $("#showMeRightButton").removeClass('disabled');
        $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

      }*/
        if(showMePage == 0){
          $("#showMeLeftButton").addClass('hide');
          $('#showMeLeftButton').removeAttr('title');
        }
        else{

          $("#showMeLeftButton").removeClass('hide');
         // $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

          setTitle('showMeLeftButton', 'page ' + (showMePage), 'bottom');
        }
      if(showMeResultsCt < SIZE_RESULT_SET) {
        $("#showMeRightButton").addClass('hide');
        $('#showMeRightButton').removeAttr('title');
      }
      else {
        $("#showMeRightButton").removeClass('hide');
        //$('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

          setTitle('showMeRightButton', 'page ' + (showMePage+2), 'bottom');
      }

      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");

          // shortform can be used in lieu of the label for URI values
          var propIRI, datatype, shortform, propLabel, ct;
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              val = val.replace("&lt;![CDATA[","").replace("]]&gt;","");
              //console.log(val);
              switch(j){
                case 0: propIRI = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
                case 1: propLabel = val; break;
                case 2: ct = val; break;
              }
          });
          //label = processLabel(label, uri, datatype);
          //var id = createId();
          //console.log($(col[0]));
          propLabel = processLabel(propLabel, propIRI, datatype);
              setLabel(propIRI, propLabel);
          //console.log($(col[0]));
          var id = createId();
          var opts = new Object();
          opts.tag = TAG_PROPERTY_OF;
          opts.parentId = 'smr_'+id;
          opts.childrenId = opts.tag + opts.parentId;
          //opts.propIRI = propIRI;
          //opts.propLabel = propLabel;
          opts.contextId = id;
          opts.propIRI = propIRI;
          opts.propLabel = propLabel;

          var rowId = opts.parentId;


rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';



          var facet = _root.find('.' + getMainFocus().attr('class') + ' > property-of[iri=\''+opts.propIRI+'\']');
          var checked = (facet && facet.length > 0) ? ' checked="checked"': '';
  //        rows += '<tr id="'+id+'" onmouseover="javascript:showControls(\''+id+'\')" onmouseout="javascript:hideControls(\''+id+'\')"><td class="up" id="'+opts.parentId+'"><span id="'+id+'">';
          //var propIRI = $('#groupByMenu :selected').attr('value');
          //var propLabel = $('#groupByMenu :selected').text();
//          rows += '<a class="count" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addPropertyOfFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\')">'+ct+'</a>&nbsp;-&nbsp;';
var badgeColor = ($('#groupByMenu :selected').val() != GROUP_BY_NONE_VALUE) ? 'info' : 'info';

var ckcolor = 'primary';
 
          rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-'+badgeColor+'" onclick="javascript: var pid = createId(); addPropertyOfFacet(pid, \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(pid)">'+ct+'</span>';
                                rows +=  '</span>';
            rows +=  '<div>';
          rows +=  '<h6 class="row-result text-ellipsis m-0" >';



            rows += '<span '+buildTitle(propIRI)+' onclick="javascript:describe(\''+rowId+'\', \''+propIRI+'\');">' + propLabel + '</span>';
          //rows += '</span></td><td id="ctrl'+id+'" class="hideCtrl" style="white-space:nowrap; vertical-align:top;">';          
          if(propIRI != GROUP_BY_NONE_VALUE){
          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+ckcolor+'">';
          rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: if(!$(this).is(\':checked\')) {removeFacet(\''+facet.attr('class')+'\')}else{var pid = createId(); addPropertyOfFacet(pid, \''+propIRI+'\', \''+propLabel+'\');}"/>&nbsp;';//generate pid here, in case user clicks this badge multiple times, otherwise, we get duplicate ids added to the nav path, and thus, multiple <view> elements in the query
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';
          rows += '<i '+buildTitle('preview rolees')+' class="expand la la-bars" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"></i>';
              //rows += '<img title="shows up in the \''+propLabel+'\' field of these records" class="count" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
          if((facet && facet.length > 0) && !isTableShowing())rows += '<i '+buildTitle('group the contents list by role: \''+propLabel+'\'')+' class="group la la-compress" onclick="javascript:doGroup(\''+propIRI+'\', \''+propLabel+'\', true)" ></i>';
          }

          rows +='</h6>';
            rows +=  '</div>';
          rows +=  '</a>';

          /*else {
            if(datatype=='uri') rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="'+icon_file+'" width="16" height="16" /></a>&nbsp;';
            else rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/tag-512.png" width="16" height="16" /></a>&nbsp;';
          }*/
          // a property-of is always a uri datatype
          //else 
          //rows += propLabel;
          //rows += '</td></tr>';
      });
      //console.log(rows);
          // $('#'+ID_SHOW_ME+'').append(rows);
           $('#angular_showMeList').append(rows);

        //$('#groupby').append(rows);
        //return total;
} // loadPropertiesResults


function loadGraphResults(xml){
      $('#'+ID_SHOW_ME+'').empty();
      $('#angular_showMeList').empty();

      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      showMeResultsCt = $("fct\\:row", result).length;
        /*if(showMePage == 0){
          $("#showMeLeftButton").attr('disabled', 'true');
          $("#showMeLeftButton").addClass('disabled');
          $('#showMeLeftButton').removeAttr('title');
        }
        else{

          $("#showMeLeftButton").removeAttr('disabled');
          $("#showMeLeftButton").removeClass('disabled');
          $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

        }
      if(showMeResultsCt < SIZE_RESULT_SET) {
        $("#showMeRightButton").attr('disabled', 'true');
        $("#showMeRightButton").addClass('disabled');
        $('#showMeRightButton').removeAttr('title');
      }
      else {
        $("#showMeRightButton").removeAttr('disabled');
        $("#showMeRightButton").removeClass('disabled');
        $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

      }*/
        if(showMePage == 0){
          $("#showMeLeftButton").addClass('hide');
          $('#showMeLeftButton').removeAttr('title');
        }
        else{

          $("#showMeLeftButton").removeClass('hide');
          //$('#showMeLeftButton').attr('title', 'page ' + (showMePage));

          setTitle('showMeLeftButton', 'page ' + (showMePage), 'bottom');
        }
      if(showMeResultsCt < SIZE_RESULT_SET) {
        $("#showMeRightButton").addClass('hide');
        $('#showMeRightButton').removeAttr('title');
      }
      else {
        $("#showMeRightButton").removeClass('hide');
        //$('#showMeRightButton').attr('title', 'page ' + (showMePage+2));
          setTitle('showMeRightButton', 'page ' + (showMePage+2), 'bottom');

      }

      // POI: demo code
      /*if(showMePage==0 && $('#nav0 > table > tbody > tr > td.via').text() == VALUE_ROOT) rows += '<tr><td><div class="up" id="'+ID_MY_RECORDS+'"><a href="#'+id+'" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')"><img src="http://icon-park.com/imagefiles/folder_icon_purple.png" width="16" height="16"/></a>&nbsp;<a title="'+VALUE_RECORD_MANAGER+'" href="#'+id+'">'+VALUE_RECORD_MANAGER+'</a> <span class="disabled">'+(Math.floor(Math.random() * 10000) + 1)+'<span></div></td></tr>';*/

      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");

          // shortform can be used in lieu of the label for URI values
          var graphIRI, datatype, shortform, graphLabel, ct;
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              //console.log(val);
              switch(j){
                case 0: graphIRI = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
                case 1: graphLabel = val; break;
                case 2: ct = val; break;
              }
          });
          //label = processLabel(label, uri, datatype);
          //var id = createId();
          //console.log($(col[0]));
          if(!graphIRI || graphIRI.length == 0) return; // continue the loop
          graphLabel = processLabel(graphLabel, graphIRI, datatype);
          graphLabel = getLibraryLabel(graphLabel);
              setLabel(graphIRI, graphLabel);

          //console.log($(col[0]));
          var id = createId();
          var opts = new Object();
          opts.tag = TAG_GRAPH;
          opts.parentId = 'smr_'+id;
          opts.childrenId = opts.tag + opts.parentId;
          opts.contextId = id;
          opts.propIRI = graphIRI;
          opts.propLabel = graphLabel;


rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
                               // rows +=  '<span class="thumb-sm float-left mr">';





          var facet = _root.find('.' + ID_QUERY + '[graph=\''+graphIRI+'\']');
          var checked = (facet && facet.length > 0) ? ' checked="checked" ': '';
          //rows += '<tr><td class="up" id="'+opts.parentId+'"><span id="'+id+'">';
          //var propIRI = $('#groupByMenu :selected').attr('value');
          //var propLabel = $('#groupByMenu :selected').text();
 /*          if(graphIRI != GROUP_BY_NONE_VALUE){
              //rows += '<a onclick="javascript:setGraphFacet(\''+graphIRI+'\', \''+graphLabel+'\')">'+getFavicon(graphIRI)+'</a>&nbsp;';
                  //rows += '<img onclick="javascript:setGraphFacet(\''+graphIRI+'\', \''+graphLabel+'\')" src="'+getFaviconUrl(graphIRI)+'">';
                 
          rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-info" onclick="javascript:setGraphFacet(\''+graphIRI+'\', \''+graphLabel+'\')" src="'+getFaviconUrl(graphIRI)+'">'+ct+'</span>';
                                rows +=  '</span>';
            //rows +=  '<div>';
//                                    rows +=  '<i class="status status-bottom bg-success"></i>';
          }
                                rows +=  '</span>';

            rows +=  '<div>';
*/

                                rows +=  '<span class="thumb-sm float-left mr">';

                  rows += '<img onclick="javascript:setGraphFacet(\''+graphIRI+'\', \''+graphLabel+'\')" src="'+getFaviconUrl(graphIRI)+'">';
                                    //rows +=  '<i class="status status-bottom bg-success"></i>';
rows += '</span>';

var ckcolor = 'primary';

var rowId = opts.parentId;



          /*else {
            if(datatype=='uri') rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="'+icon_file+'" width="16" height="16" /></a>&nbsp;';
            else rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/tag-512.png" width="16" height="16" /></a>&nbsp;';
          }*/
          // a property is always a uri datatype
          rows +=  '<h6 class="row-result text-ellipsis m-0" '+buildTitle(graphIRI)+' onclick="javascript:describe(\''+rowId+'\', \''+graphIRI+'\');">';
          //if(datatype=='uri') {
            //rows += '<a title="'+graphIRI+'" onclick="javascript:describe(\''+graphIRI+'\');">'
            rows+=graphLabel;
            //rows+='</a>';
          //}
          //else 
          //rows += propLabel;
//          rows += '</span></td><td id="ctrl'+id+'" class="hideCtrl" style="white-space:nowrap; vertical-align:top;">';          
          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+ckcolor+'">';
          rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' onclick="javascript: if(!$(this).is(\':checked\')) {removeGraphFacet();}else{setGraphFacet(\''+graphIRI+'\', \''+graphLabel+'\')}"/>&nbsp;';
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';


          rows +='</h6>';
            rows +=  '</div>';
          rows +=  '</a>';

          //rows += '&nbsp;&nbsp;<a title="view values" class="count" href="#'+id+'" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')">'+ct+'</a>';
//          rows += '</td></tr>';
      });
      //console.log(rows);
          // $('#'+ID_SHOW_ME+'').append(rows);
           $('#angular_showMeList').append(rows);

        //$('#groupby').append(rows);
        //return total;
} // loadPropertiesResults

var showRecordRoles = false;
var filterRecordViewFields = true;

function loadDescribeResults(xml, opt){
      $('#angular_recordViewer').empty();

    if(showIDN){

      /*
content += '<section class="search-result-item">';
content += '<a class="image-link" >';
content += '<img class="image" src="https://demo.flatlogic.com/sing-app/angular/assets/img/pictures/1.jpg">';
content += '</a>';
content += '<div class="search-result-item-body">';
content += '<div class="row">';
content += '<div class="col-md-9 col-12">';
content += '<h5 class="search-result-item-heading"><a href="#">Next generation admin template</a></h5>';
content += '<p class="info"> New York, NY 20188 </p>';
content += '<p class="description"> Not just usual Metro. But something bigger. Not just usual widgets, but real widgets. Not just yet another admin template, but next generation admin template. </p>';
content += '</div>';
content += '<div class="col-md-3 col-12 text-center">';
content += '<p class="value3 mt-sm"> $9, 700 </p>';
content += '<p class="fs-mini text-muted"> PER WEEK </p><a class="btn btn-primary btn-info btn-sm" href="#">Learn More</a>';
content += '</div>';
content += '</div>';
content += '</div>';
content += '</section>';
*/

//    content += '<section class="widget">';
//    content += '<div class="widget-body">';

    content += '<div class="widget-top-overflow text-white">';
    content += '<div class="height-250 overflow-hidden">';
    content += '<img class="img-fluid" src="https://demo.flatlogic.com/sing-app/angular/assets/img/pictures/3.jpg">';//assets/img/pictures/19.jpg
    content += '</div>';
    content += '<div class="btn-toolbar">';
    content += '<a class="btn btn-outline btn-sm pull-right" href="#">';
    content += '<i class="glyphicon glyphicon-glyph-bell mr-xs"></i> Subscribe ';
    content += '</a>';
    content += '</div>';
    content += '</div>';

    content += '<div class="row">';
    content += '<div class="col-md-5 col-12 text-center">';
    content += '<div class="post-user post-user-profile">';
    content += '<span class="thumb-xl"><img alt="..." class="rounded-circle" src="assets/img/people/a5.jpg"></span>';
    content += '<h5 class="fw-normal">Digital <span class="fw-semi-bold">Camera</span></h5>';
    content += '<p>Owner: jnash</p>';
    content += '<a class="btn btn-danger btn-sm mt-sm" href="#"> &nbsp;Private Message <i class="fa fa-envelope ml-xs"></i>&nbsp; </a>';
    content += '<ul class="contacts">';
/*    content += '<li><i class="fa fa-lg fa-phone fa-fw mr-xs"></i><a href="#"> +375 29 555-55-55</a></li>';
    content += '<li><i class="fa fa-lg fa-envelope fa-fw mr-xs"></i><a href="#"> psmith@example.com</a></li>';*/
    
    content += '<li><i class="fa fa-lg fa-map-marker fa-fw mr-xs"></i><a href="#"> Minsk, Belarus</a></li>';
    content += '</ul>';
    content += '</div>';
    content += '</div>';
    content += '<div class="col-md-7 col-12">';
    content += '<div class="stats-row stats-row-profile mt text-left">';
    content += '<div class="stat-item">';
    content += '<p class="value text-left">9, 700</p>';
    content += '<h6 class="name">AVI</h6>';
    content += '</div>';
    content += '<div class="stat-item">';
    content += '<p class="value text-left">9.38%</p>';
    content += '<h6 class="name">Prevelance</h6>';
    content += '</div>';
    content += '<div class="stat-item">';
    content += '<p class="value text-left">842</p>';
    content += '<h6 class="name">Performance</h6>';
    content += '</div>';
    content += '</div>';
    content += '<p class="text-left mt-lg">';
    content += '<a class="badge badge-warning rounded-0" href="#"> Device </a>';
    content += '<a class="badge badge-danger rounded-0 ml-xs" href="#"> Class </a>';
    content += '<a class="badge badge-default rounded-0 ml-xs" href="#"> Artifact </a>';
    content += '</p>';
    content += '<p class="lead mt-lg"> Digital and movie cameras share an optical system, typically using a lens with a variable diaphragm to focus light onto an image pickup device. </p>';
    content += '<p> The history of the digital camera began with Eugene F. Lally of the Jet Propulsion Laboratory, who was thinking about how to use a mosaic photosensor to capture digital images. His 1961 idea was to take pictures of the planets and stars while travelling through space to give information about the astronauts\' position. </p>';
    content += '</div>';
    content += '</div>';



/*

    content += '<div class="widget-top-overflow text-white">';
    content += '<div class="height-250 overflow-hidden bg-info">';
    content += '<!--<img class="img-responsive" src="assets/img/pictures/19.jpg">-->';//assets/img/pictures/19.jpg
    content += '</div>';
    content += '<div class="btn-toolbar">';
    content += '<a class="btn btn-outline btn-sm pull-right" href="#">';
    content += '<i class="glyphicon glyphicon-glyph-bell mr-xs"></i> Subscribe ';
    content += '</a>';
    content += '</div>';
    content += '</div>';

    content += '<div class="row">';
    content += '<div class="col-md-5 col-12 text-center">';
    content += '<div class="post-user post-user-profile">';
    content += '<span class="thumb-xl"><img alt="..." class="rounded-circle" src="assets/img/people/a5.jpg"></span>';
    content += '<h5 class="fw-normal">Smart Folder <span class="fw-semi-bold">Request</span></h5>';
    content += '<p>Sponsor: jnash</p>';
    content += '<a class="btn btn-danger btn-sm mt-sm" href="#"> &nbsp;Private Message <i class="fa fa-envelope ml-xs mr-2"></i>&nbsp; </a>';
    content += '<ul class="contacts">';
    */
/*    content += '<li><i class="fa fa-lg fa-phone fa-fw mr-xs"></i><a href="#"> +375 29 555-55-55</a></li>';
    content += '<li><i class="fa fa-lg fa-envelope fa-fw mr-xs"></i><a href="#"> psmith@example.com</a></li>';*/
    /*
    content += '<li><i class="fa fa-lg fa-map-marker fa-fw mr-xs"></i><a href="#"> Minsk, Belarus</a></li>';
    content += '</ul>';
    content += '</div>';
    content += '</div>';
    content += '<div class="col-md-7 col-12">';
    content += '<div class="stats-row stats-row-profile mt text-left">';
    content += '<div class="stat-item">';
    content += '<p class="value text-left">34</p>';
    content += '<h6 class="name">Views</h6>';
    content += '</div>';
    content += '<div class="stat-item">';
    content += '<p class="value text-left">2 days</p>';
    content += '<h6 class="name">Time Remaining</h6>';
    content += '</div>';
    content += '<div class="stat-item">';
    content += '<p class="value text-left">2</p>';
    content += '<h6 class="name">Subscribes</h6>';
    content += '</div>';
    content += '</div>';
    content += '<p class="text-left mt-lg">';
    content += '<a class="badge badge-warning rounded-0" href="#"> Bounty </a>';
    content += '<a class="badge badge-danger rounded-0 ml-xs" href="#"> Smart Folder Request </a>';
    content += '<a class="badge badge-default rounded-0 ml-xs" href="#"> Service Request </a>';
    content += '</p>';
    content += '<p class="lead mt-lg"> Pizza chains that deliver, by country </p>';
    content += '<p> I need a list of delivery Pizza chains, for each country, and grouped by country, and here are the other fields I need. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis eget tortor nec tristique. Pellentesque bibendum faucibus augue vitae vestibulum. Sed nulla sem, luctus non maximus eu, ornare dapibus nisi. Ut luctus dui nisl, tempus volutpat dolor tempus id. Phasellus at lacinia ipsum, quis semper lorem. Suspendisse turpis lacus, vehicula sed elementum ut, auctor ac sem. Nunc egestas risus sit amet leo luctus vehicula. Proin fringilla ante eu metus finibus gravida. Suspendisse nec nunc eros. Etiam et nisl ac elit eleifend semper vel non nisi. </p>';
    content += '</div>';
    content += '</div>';
*/

    $('#angular_recordViewer').removeClass('embed-responsive-1by1');
    $('#angular_recordViewer').append(content);

//    content += '</div>';
//    content += '</section>';

    } //

    else {
      xml = xml.replaceAll('xml\\:lang', 'lang');
      xml = xml.substring(xml.indexOf('<rdf:'));
      xml = '<t>' + xml + '</t>';

      var uri = $('#angular_recordViewer').attr('iri');
      var uriLabel = uri;
      if(getLabel(uri)) uriLabel = getLabel(uri);
      uriLabel = processLabel(uriLabel).replace(/\b\w/g, function(l){ return l.toUpperCase() }) ;    

    //xml = xml.replaceAll('rdf\\:RDF', 'rdf');
      showRecordRoles = $('#showMeMenu').val() == VIEW_TYPE_PROPERTIES_IN;
      var content = "";
      //var description = $(xml).children('rdf\\:Description')[0];
      //var triples = description.children();
      var table = $.createElement('table');
      table.addClass('table');
      table.addClass('table-hover');
      table.addClass('table-striped');

      var header = $.createElement('thead');
      var body = $.createElement('tbody');
      table.append(header);
      var row = $.createElement('tr');
      var col = $.createElement('th');
      col.addClass('d-none');
      col.addClass('d-md-table-cell');
      col.css('cursor', 'pointer');

      col.append((showRecordRoles ? '... Is A' : 'Field')); //&nbsp;<i style="cursor:pointer" onclick="javascript:filterRecordViewFields = !filterRecordViewFields; describe(\''+ sanitizeLabel(uri)+'\')" class="pull-right glyphicon glyphicon-filter text-'+((filterRecordViewFields)?'info':'secondary')+'"></i>
      row.append(col);

      col = $.createElement('th');
      col.addClass('d-none');
      col.addClass('d-md-table-cell');
      col.text((showRecordRoles ? 'Of This' : 'Content'));
      row.append(col);

      //header.append(row);
      var namespaces = {};

      $('rdf\\:RDF', xml).each(function() {
        // this.attributes is not a plain object, but an array
        // of attribute nodes, which contain both the name and value
        for(i=0; i < this.attributes.length; i++){
          var att = this.attributes[i];
          if(att && att.specified) {
            var name = att.name;
            var val = att.value;
            name = name.replace('xmlns:', '');
            namespaces[name] = val;

          }
        }

      });


      var desc;
      var categoryBadges = '';
      var actions;
      var long;
      var lat;
      var isMovie = false;
      var isMusic = false;
      var isAlbum = false;
      var name;
      var title;
      var headerAdded = false;
      var hasClass = false;
      var hasImage = false;
      var isOddClass = false;
      var img;
      $('rdf\\:Description', xml).each(function(i){
        var subject = $(this).attr('rdf:about');
        var subLabel = subject;
        if(getLabel(subject)) subLabel = getLabel(subject);
        $('*', this).each(function(j){

          var objectIRI = $(this).attr('rdf:resource');
          var objLabel = objectIRI;
          if(getLabel(objectIRI)) objLabel = getLabel(objectIRI);
          var objectValue = $(this).text();
          var propLabel = $(this).prop('nodeName').toLowerCase();
          var qname = propLabel.substring(0, propLabel.indexOf(':'));
          var fragId = propLabel.substring(propLabel.indexOf(':') + 1);
          var lang = ( $(this).attr('lang') && $(this).attr('lang').length > 0 ) ? $(this).attr('lang') : undefined ;
          if(lang && lang != 'en') return;

          var isRole = objectIRI == uri; //propLabel.trim().toLowerCase().endsWith('of') || 

          var proplink = $.createElement('a');
          proplink.attr('href', $(this).prop('nodeName'));
          if(propLabel == 'rdf:type'){
            if(categoryBadges.length > 0) categoryBadges += '&nbsp;';//;'<strong class="text-dark">&middot;</strong>';

            var focusTarget = (getMainFocus().attr('class') == ID_QUERY+"") ? 'focusHeader' : 'focusValue';
            var focusTargetClass = (getMainFocus().attr('class') == ID_QUERY+"") ? 'queryFocus' : 'queryFocusValue';
            categoryBadges += '<a class="link-category'+((isOddClass)? '-odd' :'')+'" onclick="javascript: $(\'#'+focusTarget+'\').removeClass(\''+focusTargetClass+'\'); var cid = createId(); addClassFacet(cid, \''+objectIRI+'\', \''+sanitizeLabel(processLabel(objLabel))+'\')"> '+processLabel(objLabel)+' </a>'; //class="badge badge-inverse fw-semi-bold rounded-0" 
            propLabel = 'category';
            isOddClass = !isOddClass;
            if(objectIRI == 'http://dbpedia.org/class/yago/Movie106613686') isMovie = true;
            else if(objectIRI == 'http://schema.org/Movie')  isMovie = true;
            else if(objectIRI == 'http://dbpedia.org/ontology/Film')  isMovie = true;
            else if(objectIRI == 'http://www.wikidata.org/entity/Q11424')  isMovie = true;
            else if(objectIRI == 'http://schema.org/TVEpisode')  isMovie = true;
            else if(objectIRI == 'http://www.wikidata.org/entity/Q1983062')  isMovie = true;


            else if(objectIRI == 'http://dbpedia.org/ontology/Album')  {isMusic = true; isAlbum=true;}
            else if(objectIRI == 'http://dbpedia.org/ontology/MusicalWork')  isMusic = true;
            else if(objectIRI == 'http://www.wikidata.org/entity/Q482994')  isMusic = true;
            else if(objectIRI == 'http://dbpedia.org/class/yago/Album106591815')  {isMusic = true; isAlbum=true;}
          }
          if((namespaces[qname]+fragId) == 'http://www.w3.org/2000/01/rdf-schema#label' && !isRole) uriLabel = processLabel(  deSanitizeLabel(objectValue)).replace(/\b\w/g, function(l){ return l.toUpperCase() }) ;
          if((namespaces[qname]+fragId) == 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' && objectIRI == 'http://www.w3.org/2002/07/owl#Class') hasClass = true;
          if((namespaces[qname]+fragId) == 'http://xmlns.com/foaf/0.1/depiction' ) { //|| (namespaces[qname]+fragId) == 'http://dbpedia.org/property/logo'
            hasImage = true;
            img = '<div class="pull-right"><img onclick="javascript:linkOut(\''+objectIRI+'\');" style="cursor:pointer;width:200px; margin-left:.55em;" class="class="rounded img-thumbnail" src="'+objectIRI+'"/></div>';
          }
          if(!desc && propLabel.endsWith(':comment')) desc = objectValue;
          if(!desc && propLabel.endsWith(':abstract')) desc = objectValue;
          if(!desc && propLabel.endsWith(':description')) desc = objectValue;
          if(propLabel.endsWith(':long')) long = objectValue;
          if(propLabel.endsWith(':lat')) lat = objectValue;
          if(propLabel.endsWith(':name')) name = objectValue;
          if(propLabel.endsWith(':title')) title = objectValue;
          if(propLabel.endsWith(':isbn')) {
            if(!actions) actions = '';
            else actions += '&nbsp;';
            actions += '<i style="cursor:pointer" '+buildTitle('View on Amazon')+' onclick="javascript:linkOut(\'https://www.amazon.com/s?i=stripbooks&rh=p_66:'+objectValue.replaceAll('-', '')+'\')" class="fa fa-amazon fa-lg"></i>';
          }
          //if(objectIRI == uri && !propLabel.trim().toLowerCase().endsWith('of')) propLabel += ' of';
          if(propLabel == 'RDF:TYPE') propLabel = 'category';
          proplink.css('color', '#495057');
          proplink.css('text-decoration','none');
          propLabel = propLabel.toLowerCase();



          if(isRole && !showRecordRoles) return;
          if(!isRole && showRecordRoles) return;
          var propIRI = namespaces[qname]+fragId;
          var facets = matchFocusProperties(propIRI);
          var ctxId = (facets && facets.length > 0) ? facets.attr('class') : createId();
          if(facets && facets.length > 0) propIRI = facets.attr('iri');
          if(filterRecordViewFields && (!facets || facets.length <= 0) ) return;
          if(propLabel == 'category') return;

          if(getLabel(propIRI)) propLabel = getLabel(propIRI);
          proplink.text(propLabel);

          if(!headerAdded){
            header.append(row);
            headerAdded = true;
          }

          row = $.createElement('tr');
          col = $.createElement('td');
          //col.css('font-weight', '400');
          //col.addClass('d-none');
          //col.addClass('d-md-table-cell');
          col.append(proplink);
          row.append(col);

          col = $.createElement('td');
              var cid = 'copy_' + createId();
              col.on('mouseover', function(){
                $('#'+cid).removeClass('hide');
              });
              col.on('mouseout', function(){
                $('#'+cid).addClass('hide');
              });
          //col.attr('width', '100%');
          //col.addClass('d-none');
          //col.addClass('d-md-table-cell');
          if(objectIRI == uri){
            if(subject) {
              col.html('<a style="text-decoration:none;" href="'+subject + '">' +processLabel(subLabel)+ '</a>&nbsp;<img style="cursor:pointer" class="pull-right" src="'+getFaviconUrl(subject)+'" onclick="javascript: remove(\''+facets.attr('class')+'\'); var pid = createId(); setPropertyValue(pid, \''+NODE_TYPE_PROPERTY+'\', \''+ctxId+'\', \''+propIRI+'\', \''+propLabel+'\', \''+objectIRI+'\', \''+processLabel(objLabel)+'\', \'uri\', \''+lang+'\');"/>');
            }        
            else col.html(objectValue);
          }
          else {
            if(objectIRI) {
              col.html('<a style="text-decoration:none;" href="'+objectIRI + '">' +processLabel(objLabel)+ '</a>&nbsp;<img style="cursor:pointer" class="pull-right" src="'+getFaviconUrl(objectIRI)+'" onclick="javascript: remove(\''+facets.attr('class')+'\'); var pid = createId(); setPropertyValue(pid, \''+NODE_TYPE_PROPERTY+'\', \''+ctxId+'\', \''+propIRI+'\', \''+propLabel+'\', \''+objectIRI+'\', \''+processLabel(objLabel)+'\', \'uri\', \''+lang+'\');"/>');
            }        
            else { 
              col.html('<span style="cursor:pointer" class="pull-right icon-literal glyphicon glyphicon-tag" onclick="javascript: remove(\''+facets.attr('class')+'\'); var pid = createId(); setPropertyValue(pid, \''+NODE_TYPE_PROPERTY+'\', \''+ctxId+'\', \''+propIRI+'\', \''+propLabel+'\', \''+objectValue+'\', \''+sanitizeLabel(objectValue)+'\', \'uri\', \''+lang+'\');"></span>' + objectValue + '&nbsp;&nbsp;<i id="'+cid+'" onmouseout="$(\'#'+cid+'\').tooltip(\'hide\');$(\'#'+cid+'\').attr(\'data-original-title\', \'Copy to clipboard\');$(\'#'+cid+'\').tooltip();" '+buildTitle('Copy to clipboard')+' onclick="javascript:$(\'#'+cid+'\').tooltip(\'hide\');copy(\''+sanitizeLabel(objectValue)+'\'); $(\'#'+cid+'\').attr(\'data-original-title\', \'Copied\');$(\'#'+cid+'\').tooltip(\'show\');" style="cursor:pointer;" class="hide fa fa-copy fa-sm"></i>');
            }
          }
          row.append(col);

          body.append(row);
        });
      });

      uriLabel = uriLabel.replace('\'S', '\'s');
      uriLabel = uriLabel.replace('\'T', '\'t');

      uriLabel = uriLabel.trim();

      var uriLabalArray = uriLabel.split(' ');
      var buttonLabel = uriLabel;


      if(isMovie){
        if(!actions) actions = '';
        else actions += '&nbsp;';
        var mtitle = name;
        if(!mtitle) mtitle = title;
        if(!mtitle) mtitle = uriLabel;
        actions += '<i style="cursor:pointer" '+buildTitle('View on IMDB')+' onclick="javascript:linkOut(\'http://www.imdb.com/find?q='+mtitle.replace('\'', '%27')+'\')" class="fa fa-imdb fa-lg"></i>';        
      }
      if(isMusic){
        if(!actions) actions = '';
        else actions += '&nbsp;';
        var mtitle = name;
        if(!mtitle) mtitle = title;
        if(!mtitle) mtitle = uriLabel;
        var albumStr = (isAlbum) ? '&type=album' : '';
        actions += '<i style="cursor:pointer" '+buildTitle('View in iTunes')+' onclick="javascript:linkOut(\'https://linkmaker.itunes.apple.com/en-us?term='+mtitle.replace('\'', '%27')+albumStr+'\')" class="fa fa-apple fa-lg"></i>';        
      }


      uriLabel = '';
      for(i =0; i < uriLabalArray.length; i++){
        uriLabel += ' ' + ( (i == uriLabalArray.length - 1) ? '<span class="fw-semi-bold">' +uriLabalArray[i]+ '</span>' : uriLabalArray[i] );
      }
      uriLabel = uriLabel.trim();

      $('#angular_recordViewer').append('<h3 onclick="javascript:linkOut();" '+buildTitle('Visit ' + sanitizeLabel(uri))+' style="cursor:pointer;padding-top:1em; padding-left:.55rem; padding-right:.55rem;">'+uriLabel+'</h3>'+ '<i style="position:absolute; right:0; top:0; margin-bottom:4px;cursor:pointer" onclick="javascript:filterRecordViewFields = !filterRecordViewFields; describe(\'recordNavBar\', \''+sanitizeLabel(uri)+'\')" class="p-2 glyphicon glyphicon-filter text-'+((filterRecordViewFields)?'info':'muted')+'"></i>');//((body.children().length <= 0 && filterRecordViewFields)?'<i style="position:absolute; right:0; top:0; margin-bottom:4px;cursor:pointer" onclick="javascript:filterRecordViewFields = false; describe(\''+sanitizeLabel(uri)+'\')" class="p-2 glyphicon glyphicon-filter text-info"></i>':''));
      if(hasImage){
        desc = img + desc;
      }
      if(desc) $('#angular_recordViewer').append('<div style="padding-left:.55rem; padding-right:.55rem; ">'+desc+'</div>');

      if(long && lat){
        if(!actions) actions = '';
        else actions += '&nbsp;';
        actions += '<i style="cursor:pointer" '+buildTitle('View on Google Maps')+' onclick="javascript:linkOut(\'https://www.google.com/maps/search/?api=1&query='+lat+','+long+'\')" class="fa fa-map-marker fa-lg"></i>';
      }

      if(actions && actions.length > 0){
          content += $('#angular_recordViewer').append('<legend class="m-2 text-left text-dark">Services</legend><div style="padding-left:.55rem; padding-right:.55rem; " >'+actions+'</div>');
      }
      if(categoryBadges.length > 0){
          content += $('#angular_recordViewer').append('<legend class="m-2 text-left text-dark">Categories</legend><div style="padding-left:.55rem; padding-right:.55rem; " >'+categoryBadges+'</div>');
      }



      table.append(body);
      $('#angular_recordViewer').removeClass('embed-responsive-1by1');
      $('#angular_recordViewer').append('<p/>');
      $('#angular_recordViewer').append('<p/>');
      $('#angular_recordViewer').append(table);
      if(hasClass) $('#angular_recordViewer').append('<div class="form-actions"><div class="text-center"><button _ngcontent-c7="" class="btn btn-info " role="button">New '+buttonLabel+'</button>&nbsp;<button _ngcontent-c7="" class="btn btn-inverse " role="button"> New Subclass </button></div></div>');
      //if(!$('#angular_recordViewer').hasClass('embed-responsive-1by1')) $('#angular_recordViewer').addClass('embed-responsive-1by1');
    }
$('[data-toggle="tooltip"]').tooltip(); // activate facet tooltips

if(opt.srcId){
  $('#'+opt.srcId).removeClass('loading');
}

}//recordViewerColumn

function matchFocusProperties(propIRI, isReverse){
  return getMainFocus().children('property').filter(function() {
            return $(this).attr('iri').toLowerCase() == propIRI.toLowerCase();
          });
}

function copy(str) {
    str = deSanitizeLabel(str);
    var textArea = document.createElement("textarea");
    textArea.value = str;
    //textArea.classList.add('hide');
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

function copySPARQL(){
  copy(mainSparql);
}

function doGGGView(uri){
  if(!$('#angular_recordViewer').hasClass('embed-responsive-1by1')) $('#angular_recordViewer').addClass('embed-responsive-1by1');
  $('#angular_recordViewer').empty();
  $('#angular_recordViewer').append('<iframe src="'+getGGGURL(uri)+'"/>');
}

function loadGeoListResults(xml){
      //var mapId = '';
      //$('#'+mapId+'').empty();
      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      var locations = new Array();

      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");

          // shortform can be used in lieu of the label for URI values
          var geoIRI, datatype, shortform, geoLabel, long, lat;
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              //console.log(val);
              switch(j){
                case 0: geoIRI = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
                case 1: geoLabel = val; break;
                case 2: long = val; break;
                case 3: lat = val; break;
              }
          });
          geoLabel = processLabel(geoLabel, geoIRI, datatype);
          var id = createId();
          var opts = new Object();
          rows += '';
          locations.push({"lat":parseInt(long), "lng":parseInt(lat)});
      });

      // call Map function, pass the location array
      //if(locations.length > 0) initMap(locations);
} // loadGeoListResults


function initMap(results) {
  $('#map').empty();
  if(!google) return;
  //const results = [{lat: 51.5, lng: -0.1}, {lat: 51.54, lng: -0.122}, {lat: 51.52, lng: -0.11}];
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: new google.maps.LatLng(results[0].lat, results[0].lng),
    mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
  //var script = document.createElement('script');
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  
  for (var i = 0; i < results.length; i++) {
    var coords = results[i];
    var latLng = new google.maps.LatLng(coords.lat, coords.lng);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}

function selectShowMe(isPaging){
exitGroupBy();

    var showMeType = $('#showMeMenu :selected').attr('value');
    hideAlignButton();
    if(showMeType == VIEW_TYPE_TEXT_PROPERTIES){
      if(!_root.find('query text') || _root.find('query text').length <= 0){
        //('Please enter keywords to view corresponding text fields');
       $('#'+ID_SHOW_ME+'').empty();
       return;
      }
    }
    $('#showMeHeader').addClass('loading');
    var q = getQuery().clone();
    setViewType(showMeType, q);
    //q.find('view').attr('limit', SIZE_RESULT_SET);
    //q.find('view').attr('offset', 0);
    //q.attr('same-as', 'true');

    if(!isPaging){
      showMePage = 0;
    }
    getFocus(q).find('view').attr('offset', showMePage * SIZE_RESULT_SET);
    
    //takeFocus(q, q);
    fct_query(q, showMeType);
}



function expandShowMe(v, datatype, optsStr){
    var opts = toJSONObject(optsStr);    
    var childrenId = opts.childrenId;
    var parentId = opts.parentId;
    v = deSanitizeLabel(v);
    if($('#'+parentId+'').hasClass('up')){
        $('#'+parentId+'').removeClass('up');
        $('#'+parentId+'').addClass('down');
    }
    else{
        collapse(opts);
        return;
    }

/*    
    //console.log('user expanded: ' + id);
    var table = $.createElement('table');
    table.attr('id', childrenId);
    table.attr('width', '100%');
    table.addClass('table');
    table.addClass('table-striped');
    var tbody = $.createElement('tbody');
    table.append(tbody);
    //col.append(table);
    //row.append(col);
    $('#'+parentId+'').after(table);
*/
    var q = getQuery().clone();
    setViewType(VIEW_TYPE_LIST_COUNT, q);
    getFocus(q).find('view').attr('offset', 0);

    //var groupByIRI = $('#groupByMenu :selected').attr('value');
    var prop;
    if(opts.tag == TAG_PROPERTY) {
      prop = $.createElement('property');
      prop.attr('iri', v);
      getFocus(q).append(prop);
      takeFocus(prop, q);
    }
    else if(opts.tag == TAG_PROPERTY_OF) {
      prop = $.createElement('property-of');
      prop.attr('iri', v);
      getFocus(q).append(prop);
      takeFocus(prop, q);
    }
    else if(opts.tag == TAG_CLASS) {
      prop = $.createElement('class');
      prop.attr('iri', v);
      getFocus(q).append(prop);
      // leave the focus where it is
    }


    //var val = $.createElement('value');
    //val.text(v);
    //val.attr('datatype', datatype);
    //val.attr('op', '=');
    //val.attr('same_as', 'yes');
    //prop.append(val);

    $('#'+parentId+'').addClass('loading');
    fct_query(q, VIEW_TYPE_LIST_COUNT, opts);

}

function removeFacetValue(propertyType, iri, value, silent){
  getMainFocus().find(propertyType+'[iri=\''+iri+'\'] > value').filter(function() {return $(this).text() === value;}).remove();
  if(!silent) doQuery(getQueryText());
}

function removeEmptyFacet(propertyType, iri, silent){
  getMainFocus().find(propertyType+'[iri=\''+iri+'\']:not("value")').remove();
  //getMainFocus().find('property[iri=\''+iri+'\'] > value').filter(function() {return $(this).text().length <= 0;}).remove();
  if(!silent) doQuery(getQueryText());
}


function loadPropertyValues(xml, opts){
      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      var value, datatype, lang, shortform, label, ct;
      var loadedUri = false;
      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              // seems like jquery is commenting out the CDATA
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              val = val.replace("&lt;![CDATA[","").replace("]]&gt;","");
              //console.log(val);
              switch(j){
                case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); lang = $(this).attr('lang'); break;
                case 1: label = val; break;
                case 2: ct = val; break;
              }
          });
          label = processLabel(label, value, datatype, lang);
          var id = createId();
          //console.log($(col[0]));

          var rowId = 'r_' + createId();
          var recordActive = false;

              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(rowId, value);
                    recordActive = true;
                    $('.record-active').removeClass('record-active');
                  } 
              }


rows += '<tr><td id="'+rowId+'"'+((recordActive)?' class="record-active"':'')+'>';
//rows +=  '<a class="list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';
if(datatype == 'uri'){
                  rows += '<img style="cursor:pointer" onclick="javascript: remove(\''+_root.find('.' + getMainFocus().attr('class') + ' > [iri=\''+opts.propIRI+'\']').attr('class')+'\'); setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\'); takeMainFocus(\''+opts.contextId+'\')" src="'+getFaviconUrl(value)+'">';
                                    //rows +=  '<i class="status status-bottom bg-success"></i>';
}
                else {
                  rows += '<span style="cursor:pointer" onclick="javascript: remove(\''+_root.find('.' + getMainFocus().attr('class') + ' > [iri=\''+opts.propIRI+'\']').attr('class')+'\'); setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" class="icon-literal glyphicon glyphicon-tag"></span>';
                }
rows += '</span>';
//rows += '</a>';

var link = '';
if(datatype=='uri') link = 'style="cursor:pointer" onclick="javascript:describe(\''+rowId+'\', \''+value+'\');"';

          rows +=  '<h6 class="row-result" '+buildTitle(value)+' '+link+'>'+label

          var facet = _root.find('.' + getMainFocus().attr('class') + ' > property[iri=\''+opts.propIRI+'\'] > value');
          var checked = false;
          if(facet && facet.length > 0){
            facet.each(function (z){
 if( $(this).text() == value ){
 checked = ' checked="checked"';        
return;  
 }     
            });

          } 

                var gbjson = JSON.parse( $('#groupByMenu :selected').attr('json') ) ;
                var isReverse = (!gbjson) ? false :  gbjson.isReverse;
              //if(propIRI != GROUP_BY_NONE_VALUE && propIRI != GROUP_BY_TEXT_VALUE) {
                var propOrPropOf = (isReverse) ? "property-of" : "property";


          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-primary">';
          rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' onclick="javascript:if(!$(this).is(\':checked\')) {removeFacetValue(\''+propOrPropOf+'\',\''+opts.propIRI+'\', \''+value+'\');}else{setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')}"/>&nbsp;';
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';

rows +='</h6>';

rows += '</td></tr>';


/*

          rows += '<tr><td class="instance" id="'+id+'"><span id="'+id+'">';
          if(datatype=='uri') rows += '<a title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</a>&nbsp;';
          else rows += label + '&nbsp;';
          rows += '</span></td><td style="vertical-align:top;">';
          rows += '<a onclick="javascript: remove(\''+_root.find('.' + getMainFocus().attr('class') + ' > [iri=\''+opts.propIRI+'\']').attr('class')+'\'); setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')">'+getFavicon(value)+'</a>&nbsp;';
          rows += '</td></tr>';
*/

                            //rows += '&nbsp;<a href="#'+id+'" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\', \''+sanitizeLabel(value)+'\', \''+sanitizeLabel(label)+'\', \''+datatype+'\')"><img src="'+icon_folder_black+'" width="16" height="16"/></a>&nbsp;';

      });
        // todo: load the first record
 

      //console.log(rows);
      addSubResults(opts);
          $('#'+opts.childrenId+' > tbody').append(rows);

        //$('#groupby').append(rows);
        //return total;

}

function loadPropertyOfValues(xml, opts){
      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      var value, datatype, shortform, label, ct;
      var loadedUri = false;
      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              // seems like jquery is commenting out the CDATA
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              val = val.replace("&lt;![CDATA[","").replace("]]&gt;","");
              //console.log(val);
              switch(j){
                case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
                case 1: label = val; break;
                case 2: ct = val; break;
              }
          });
          label = processLabel(label, value, datatype);
          var id = createId();
          //console.log($(col[0]));

          var rowId = 'r_' + createId();
          var recordActive = false;

              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(rowId, value);
                    recordActive = true;
                    $('.record-active').removeClass('record-active');
                  } 
              }


rows += '<tr><td id="'+rowId+'"'+((recordActive)?' class="record-active"':'')+'>';
//rows +=  '<a class="list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';

                  rows += '<img style="cursor:pointer" onclick="javascript:setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY_OF+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\'); takeMainFocus(\''+opts.contextId+'\')" src="'+getFaviconUrl(value)+'">';
                                    //rows +=  '<i class="status status-bottom bg-success"></i>';
rows += '</span>';
//rows += '</a>';

          rows +=  '<h6 class="row-result" style="cursor:pointer" '+buildTitle(value)+' onclick="javascript:describe(\''+rowId+'\', \''+value+'\');">'+label;


          var facet = _root.find('.' + getMainFocus().attr('class') + ' > property-of[iri=\''+opts.propIRI+'\'] > value');
          var checked = false;
          if(facet && facet.length > 0){
            facet.each(function (z){
 if( $(this).text() == value ){
 checked = ' checked="checked"';        
return;  
 }     
            });

          } 
                var gbjson = JSON.parse( $('#groupByMenu :selected').attr('json') ) ;
                var isReverse = (!gbjson) ? false :  gbjson.isReverse;
              //if(propIRI != GROUP_BY_NONE_VALUE && propIRI != GROUP_BY_TEXT_VALUE) {
                var propOrPropOf = (isReverse) ? "property-of" : "property";


          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-primary">';
          rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' onclick="javascript:if(!$(this).is(\':checked\')) {removeFacetValue(\''+propOrPropOf+'\',\''+opts.propIRI+'\', \''+value+'\');}else{setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY_OF+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')}"/>&nbsp;';
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';
rows +='</h6>';
rows += '</td></tr>';
/*

          rows += '<tr><td class="instance" id="'+id+'"><span id="'+id+'">';
          rows += '<a title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</a>&nbsp;';
          rows += '</span></td><td style="vertical-align:top;">';
          rows += '<a onclick="javascript:setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY_OF+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')">'+getFavicon(value)+'</a>';
          rows += '</td></tr>';
          */
      });
        // todo: load the first record
 

      //console.log(rows);
      addSubResults(opts);
          $('#'+opts.childrenId+' > tbody').append(rows);

        //$('#groupby').append(rows);
        //return total;

}

function loadClassInstances(xml, opts){
      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      var value, datatype, lang, shortform, label, ct;


var loadedUri = false;      
      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              // seems like jquery is commenting out the CDATA
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              //console.log(val);
              switch(j){
                case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); lang = $(this).attr('lang'); break;
                case 1: label = val; break;
                case 2: ct = val; break;
              }
          });
          label = processLabel(label, value, datatype);
          var id = createId();
          //console.log($(col[0]));

          var rowId = 'r_' + createId();
          var recordActive = false;


              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(rowId, value);
                    recordActive = true;
                    $('.record-active').removeClass('record-active');
                  } 
              }


          var focusTarget = 'focusValue';
          var focusTargetClass = 'queryFocusValue';

rows += '<tr><td id="'+rowId+'"'+((recordActive)?' class="record-active"':'')+'>';
//rows +=  '<a class="list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';

                  rows += '<img style="cursor:pointer" onmouseover="javascript:$(\'#'+focusTarget+'\').addClass(\''+focusTargetClass+'\')" onmouseout="javascript:$(\'#'+focusTarget+'\').removeClass(\''+focusTargetClass+'\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" src="'+getFaviconUrl(value)+'">';
                                    //rows +=  '<i class="status status-bottom bg-success"></i>';
rows += '</span>';
//rows += '</a>';

          rows +=  '<h6 class="row-result" style="cursor:pointer" '+buildTitle(value)+' onclick="javascript:describe(\''+rowId+'\', \''+value+'\');">'+label+'</h6>';
rows += '</td></tr>';
/*
          rows += '<tr><td class="instance" id="'+id+'"><span id="'+id+'">';
          rows += '<a title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</a>&nbsp;';
          rows += '</span></td><td style="vertical-align:top;">';
          rows += '<a onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')">'+getFavicon(value)+'</a>&nbsp;';
          rows += '</td></tr>';
          */
      });
        // todo: load the first record
 
  var len1 = parseInt( $('#'+opts.parentId).find('.total').text());
var len2 = $("fct\\:row", result).length;
 
if(len1 > len2){
  rows += '<tr><td>';
  //rows +=  '<a class="list-group-item" data-target="#">';  //rows += '</a>';

            rows +=  '<p class="text-sm-right">... and '+(len1 - len2)+' more</p>';
  rows += '</td></tr>';
}

if(false){
  rows +=  '<table class="table table-striped">';
          rows +=  '<tbody>';
          rows +=  '<tr>';
            rows +=  '<td>';
              rows +=  '<div class="form-check abc-checkbox">';
                rows +=  '<input class="form-check-input" id="checkbox2" type="checkbox">';
                rows +=  '<label class="form-check-label" for="checkbox2"></label>';
              rows +=  '</div>';
            rows +=  '</td>';
          rows +=  '</tr>';
          rows +=  '<tr>';
            rows +=  '<td>';
              rows +=  '<div class="form-check abc-checkbox">';
                rows +=  '<input class="form-check-input" id="checkbox3" type="checkbox">';
                rows +=  '<label class="form-check-label" for="checkbox3"></label>';
              rows +=  '</div>';
            rows +=  '</td>';
          rows +=  '</tr>';
          rows +=  '<tr>';
            rows +=  '<td>';
              rows +=  '<div class="form-check abc-checkbox">';
                rows +=  '<input class="form-check-input" id="checkbox4" type="checkbox">';
                rows +=  '<label class="form-check-label" for="checkbox4"></label>';
              rows +=  '</div>';
            rows +=  '</td>';
          rows +=  '</tr>';
          rows +=  '</tbody>';
        rows +=  '</table>';
}

      //console.log(rows);
addSubResults(opts);
          $('#'+opts.childrenId+' > tbody').append(rows);

        //$('#groupby').append(rows);
        //return total;

}


//** FILE: record.js **/


var twin = "vios.window.1";

$(document).ready(function () {
    $('#angular_recordViewer').on('load', function () {
        $('#describePanel').removeClass('loadingDescribe');
    });
});

function describe(id, src, isGGGRecord){
    if(id && id != 'recordNavBar' && $('#'+id) && $('#'+id).length > 0){
      var rec = $('.record-active');
      if($('#'+id).prop('nodeName').toLowerCase() == 'td'){
        if(!$('#'+id).parent() || $('#'+id).parent().length <=0 || $('#'+id).parent().prop('nodeName').toLowerCase() != 'tr') return;
        rec.removeClass('record-active');
        $('#'+id).parent().children('td').addClass('record-active');
      }
      else if($('#'+id).prop('nodeName').toLowerCase() == 'a'){
        if($('#'+id).prop('nodeName').toLowerCase() != 'a') return;
        rec.removeClass('record-active');
        $('#'+id).addClass('record-active');
      }
    }

    var linkOutURI = src;
    if(linkOutURI.startsWith('http://linkeddata.uriburner.com/') && false){
      linkOutURI = linkOutURI.substring(linkOutURI.indexOf('http://linkeddata.uriburner.com/')+'http://linkeddata.uriburner.com/'.length);
      linkOutURI = linkOutURI.substring(linkOutURI.indexOf('http'));
      linkOutURI = linkOutURI.replace('https/', 'https://');
      linkOutURI = linkOutURI.replace('http/', 'http://');
    }
    linkOutURI = deSanitizeLabel(linkOutURI); // deprecated
    src = deSanitizeLabel(src); // deprecated
    $('#angular_recordViewer').attr('iri', linkOutURI); // deprecated
    //if(dataspace == 'http://linkeddata.uriburner.com') src = getGGGURL(src); // deprecated
    //$('#describePanel').addClass('loadingDescribe');
    $('#angular_recordViewer').attr('src', linkOutURI); // deprecated
    //$('#recordLabel').val(label);

    //var win = window.open(src, twin, 'width="'+window.outerWidth+'" height="'+window.outerHeight+'"');
    //win.blur();
    //this.window.focus();


    var opt = new Object();
    opt.tar = 'record';
    if(isGGGRecord) opt.srv = 'http://linkeddata.uriburner.com/sparql';
    if(id) {
      opt.srcId = id;
      $('#'+id).addClass('loading');
    }
    if(!isTableShowing()) fct_sparql(getSPARQLDescribe(src, isGGGRecord), opt);
}

function linkOut(src){
    if(! src ) src = $('#angular_recordViewer').attr('iri');
    if(!src || src.length <= 0) return;
    var win = window.open(deSanitizeLabel(src), twin, 'width="'+window.outerWidth+'" height="'+window.outerHeight+'"');
    //win.blur();
    //this.window.focus();
}

function loadInstances(xml, opts){
      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      var value, datatype, lang, shortform, label, ct;
      var loadedUri = false;
      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              // seems like jquery is commenting out the CDATA
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
              //console.log(val);
              switch(j){
                case 0: value = val; shortform = $(this).attr('shortform'); datatype = $(this).attr('datatype'); lang = $(this).attr('lang'); break;
                case 1: label = val; break;
                case 2: ct = val; break;
              }
          });
          label = processLabel(label, value, datatype);
          var id = createId();
          var rowId = 'r_' + createId();
          var recordActive = false;
          //console.log($(col[0]));

              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(rowId, value);
                    recordActive = true;
                    $('.record-active').removeClass('record-active');
                  } 
              }

              var propIRI = $('#groupByMenu :selected').attr('value');
              var propLabel = $('#groupByMenu :selected').text();
              var contextId = $('#groupByMenu :selected').attr('id');

              var color = 'success';

rows += '<tr><td id="'+rowId+'"  '+((recordActive)?' class="record-active"':'')+'>';
//rows +=  '<a class="list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';

                if(datatype=='uri') {
                  rows += '<img style="cursor:pointer" onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:remove('+getMainFocus().attr('class')+', true);setValue(\''+id+'\', \''+sanitizeLabel(value)+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                    //rows +=  '<i class="status status-bottom bg-'+color+'"></i>';
                }
                else {
                  rows += '<span style="cursor:pointer" onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:remove('+getMainFocus().attr('class')+', true);setValue(\''+id+'\', \''+sanitizeLabel(value)+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" class="icon-literal glyphicon glyphicon-tag"></span>';
                }

rows += '</span>';
//rows += '</a>';

          rows +=  '<h6 class="row-result"  style="cursor:pointer" '+buildTitle(value)+' onclick="javascript:describe(\''+rowId+'\', \''+sanitizeLabel(value)+'\');">'+label+'</h6>';
              var badgeId = createId();
              rows +=  '<p style="cursor:pointer" class="text-ellipsis m-0" id="'+badgeId+'"></p><script type="text/javascript">loadSubjectBadge(\''+value+'\', \''+badgeId+'\');</script>'; //
rows += '</td></tr>';






/*


          rows += '<tr><td class="instance" id="'+id+'"><span id="'+id+'">';
          rows += '<a title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</a>&nbsp;';
          rows += '</span></td><td style="vertical-align:top;">';
          rows += '<a onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')">'+getFavicon(value)+'</a>&nbsp;';
          rows += '</td></tr>';

*/

      });



        // todo: load the first record
 

      //console.log(rows);
      addSubResults(opts);
          $('#'+opts.childrenId+' > tbody').append(rows);

        //$('#groupby').append(rows);
        //return total;


}


//** FILE: nav.js **/

  var BC_FACET_TYPE_BREADCRUMB = 0;
  var BC_FACET_TYPE_FACET = 1;
  var BC_FACET_TYPE_FOCUS = 2;


    // POI: this function is responsible for building the breadcrumbs and facetCollector
    function buildNavPath(){
      $('#breadcrumbPanel').removeClass('hide');

      //var breadcrumbs = $('#breadcrumbs');
      //var facetCollector = $('#facetCollector');
      //var focusCollector = $('#focusCollector');
      var breadcrumbs, facetCollector,focusCollector;
      if(nav_type == NAV_TYPE_1){
        $('#facetCollectorWidgetContainer').addClass('hide');

      }
      else if(nav_type == NAV_TYPE_2){
        $('#facetCollectorWidgetContainer').addClass('hide');
        breadcrumbs  = $('#angular_breadcrumbBar');
        facetCollector = $('#angular_breadcrumbBar');
        focusCollector = $('#angular_breadcrumbBar');
      }
      else if(nav_type == NAV_TYPE_3){
        $('#facetCollectorWidgetContainer').removeClass('hide');
        breadcrumbs  = $('#angular_breadcrumbBar');
        facetCollector = $('#angular_facetCollector');
        focusCollector = $('#angular_focusCollector');
      }
      breadcrumbs.empty();
      facetCollector.empty();
      focusCollector.empty();
      
      var isRootWithoutProps = true;
      $(getMainFocus().children('property, property-of')).each(function(i) {
          isRootWithoutProps = false;
          /*var children = $(this).has('property');
          var tar = (children) ? breadcrumbs : facetCollector ;*/
          var label = $(this).attr('label');
          var len = $(this).find('property').length;
          len += $(this).find('property-of').length;
          len += $(this).find('class').length;
          //if(len > 0) label += ' [' + len + ']';
          //len += ', including';
          facetCollector.append( buildNavigationNode(this, label, BC_FACET_TYPE_FACET, len) );
      });
      
      /*
      $(_root.find('.'+getMainFocus().attr('class') + ' > property-of')).each(function(i) {
          isRootWithoutProps = false;
          var label = $(this).attr('label');
          var len = $(this).find('property').length;
          len += $(this).find('property-of').length;
          len += $(this).find('class').length;
          //if(len > 0) label += ' [' + len + ']';
          //len += ', including';
          facetCollector.append( buildNavigationNode(this, label, BC_FACET_TYPE_FACET, len) );
      });
*/
      // when node.attr('class'), there are no more parents
      var isFocus = true;
      for(node = $(getMainFocus()); $(node).attr('class') && node.attr('class') != ID_QUERY; node = $(node).parent()){
          if(isFocus) { focusCollector.prepend( buildNavigationNode(node, $(node).attr('label'), BC_FACET_TYPE_FOCUS ) ); isFocus=false;}
          else breadcrumbs.prepend( buildNavigationNode(node, $(node).attr('label'), BC_FACET_TYPE_BREADCRUMB ) );
      }

      //if(getQueryText() || _root.find('class').length > 0 || _root.find('property').length > 0){

          var label = (isExpandSearch) ? LABEL_KEYWORDS : LABEL_RECORD_NAME;
          // showing the count for the root is confusing, use can see the children of the root and their counts, that should suffice
          //var len = _root.find('query property').length;
          //if(len > 0) label += ' [' + len + ']';

          if(isFocus) focusCollector.prepend( buildNavigationNode(_root.find('query'), label, BC_FACET_TYPE_FOCUS));
          else breadcrumbs.prepend( buildNavigationNode(_root.find('query'), label, BC_FACET_TYPE_BREADCRUMB));

      //}


$('[data-toggle="tooltip"]').tooltip(); // activate facet tooltips
//var obj = { "show": 5000, "hide": 0 };
//$('[data-toggle="tooltip"]').attr('data-delay',obj);

    }

    function buildNavigationNode(ele, desc, bcFacetType, len){

      //if($(ele).attr('isGroupBy') == 'true') return;

        var id = $(ele).attr('class');
        var label = (id == ID_QUERY) ? $(ele).find('text').text() : $(ele).text();
        var v = _root.find('.'+id + ' > value'); // use only the <value> that is directly under this node, not other descendant <value>'s
        var c = _root.find('.'+id + ' > class'); // use only the <value> that is directly under this node, not other descendant <value>'s
        var val, cval;
        if(v.length > 0) val = v.attr('label');
        if(c.length > 0) cval = c.attr('label');
        //val = val.trim();

        var isPropOf = ($(ele).prop('nodeName')) ? $(ele).prop('nodeName').toLowerCase() === 'property-of' : false;
        //console.log('nodeName: ' + $(ele).prop('nodeName'));
        //if(isPropOf) console.log('is property-of: ' + label);


        var action = "removeValue";
        var categoryAsValue = false;
        if(!val) {
          if(!cval) action = "remove";
          if(id == ID_QUERY) val = label;
          else{
              if(cval){
                val = cval;
                if(id != ID_QUERY) {
                  val = aOrAn(val) + ' ' + val;
                  categoryAsValue = true;
                }
              }
              else {
                val = VALUE_ANON_NODE;
              }
          }
        }

        // TODO: decided whether the focus var will ever be used, and if not, remove it; the logic changed so that this is now triggered on mouseover of records and categories 
        var focus = "";// hasMainFocus(id) ? 'class="focus"' : '';
        //if(focus) console.log("focus set: " + focus); 
        var img = (bcFacetType == BC_FACET_TYPE_FACET) ? '<img src="'+icon_folder_black+'" width="16" height="16"/>&nbsp;' : '';
        if(bcFacetType == BC_FACET_TYPE_FACET) $('#facetCollectorPanel').removeClass('hide');
        // remove the bracket numbers for child count, this is unsafe, since a bracket may be a legitimate part of the label
        // instead, need to pass the child count to this method


        //if(!desc || desc.length == 0) desc = 'anything'; // POI: !desc if this is the <query> and there are no keywords, if no keywords, set keywords to 'anything'

        if(isPropOf) {
            var ttd = desc; 
            if(ttd) {
                if(ttd.indexOf('[') > 0) ttd = ttd.substring(0, ttd.lastIndexOf('[')); 
                ttd = ttd.trim();
            }
            var tooltip = 'and for what does it act as ' + ttd;        
            if(ttd.endsWith(' to') || ttd.endsWith('To')){
                tooltip = 'and what ' + ttd + ' it';
            }
            else if(ttd.endsWith(' of') || ttd.endsWith('Of')){
                var isa = 'is a ';
                if( (ttd.startsWith('is') || ttd.startsWith('Is')) && ttd.length > 2 && (ttd.charAt(2).toUpperCase() == ttd.charAt(2) || ttd.charAt(2) == ' ') ) isa = '';
                tooltip = 'and what ' + isa + ttd + ' it';
            }
            else if(ttd.startsWith('has')){
                tooltip = 'and what ' + ttd + ' represented by it';
            }
            else if(ttd.endsWith('by') || ttd.endsWith('By')){
                tooltip = 'and what is ' + ttd + ' it';
            }
            else if(ttd.endsWith('ing')){
                tooltip = 'and what is ' + ttd + ' it';
            }
            //desc = desc + '';
        }
        else {
            var ttd = desc; 
            if(ttd) {
                if(ttd.indexOf('[') > 0) ttd = ttd.substring(0, ttd.lastIndexOf('[')); 
                ttd = ttd.trim();
            }
            var tooltip = 'and what is its ' + ttd;        
            if(ttd.endsWith(' to') || ttd.endsWith('To')){
                tooltip = 'and what it ' + ttd;
            }
            else if(ttd.endsWith(' of') || ttd.endsWith('Of')){
                var isa = 'is a ';
                if( (ttd.startsWith('is') || ttd.startsWith('Is')) && ttd.length > 2 && (ttd.charAt(2).toUpperCase() == ttd.charAt(2) || ttd.charAt(2) == ' ') ) isa = '';
                tooltip = 'and it ' + isa + ttd + ' what';
            }
            else if(ttd.startsWith('has') || ttd.startsWith('Has')){
                tooltip = 'and it ' + ttd + ' among these';
            }
            else if(ttd.endsWith('by') || ttd.endsWith('By')){
                tooltip = 'and what is it ' + ttd;
            }
            else if(ttd.endsWith('ing')){
                tooltip = 'and what is it ' + ttd;
            }
        }
        if(val != VALUE_ANON_NODE && !categoryAsValue) {
            // TODO: this label is due to a bug in Virtuoso, the filters aren't being applied, causing the query to conform to what this label says
            // bug submitted: https://github.com/openlink/virtuoso-opensource/issues/823
            //tooltip += ', where one of them is ' + val;
            tooltip += ' where the answer ' + (val.trim().startsWith('is ') ? '' : 'is ') + val; // the correct tooltip
        }
        if(cval){
                var whichOrAnd = ', where';
                if(val != VALUE_ANON_NODE && cval != val) whichOrAnd = ', and';
                tooltip += whichOrAnd + ' each of them is';

                var cvals = _root.find('.'+id + ' > class');
                for(i = 0; i < cvals.length; i++){
                  if(i > 0 && cvals.length == 1) break;
                  var aoran = aOrAn($( cvals[i] ).attr('label').substring(0, 1));
                  tooltip += ' ' + aoran + ' ' + $( cvals[i] ).attr('label');
                  if(i+1 < cvals.length) {
                    tooltip += ',';
                  }
                  if(i+2 == cvals.length) {
                    tooltip += ' and';
                  }
                }

        }
        if(id == ID_QUERY) {
          if(cval){
//            desc += '<br/>+ ' + cval;
            desc = cval;
//            tooltip += ' a '; // add article for the ensuing category
          }

          // TODO: need to remove the redundancy here

          var searchLabel = 'are named';
          if(isExpandSearch){
            searchLabel = 'contain keywords';
          }

          var libdiv = '&nbsp;<i class="fa fa-chevron-right"></i>&nbsp;';

          if(v.attr('datatype') == 'uri'){
              tooltip = 'the record for ' + val;
              desc = 'Record';
              if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
                desc = getQueryGraphLabel() + libdiv + desc;
              }
              else if(getQueryGraph() && getQueryGraph().length > 0) {
                desc = getQueryGraph() + libdiv + desc;
              }
              if(getQueryText() && getQueryText().length){
                tooltip = tooltip + ' '+searchLabel+': \'' + getQueryText() + '\'';
              }
          }
          else if(val){
              tooltip = 'what records '+searchLabel+': ' + val;
              if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
                tooltip += ', in library: ' + getQueryGraphLabel();
                desc = getQueryGraphLabel() + libdiv + desc;
              }
              else if(getQueryGraph() && getQueryGraph().length > 0) {
                tooltip += ', in library: ' + getQueryGraph();
                desc = getQueryGraph() + libdiv + desc;
              }
          }
          else {
              tooltip = 'any record';
              if(!cval) {
                  if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
                    tooltip += ', in library: ' + getQueryGraphLabel();
                    desc = getQueryGraphLabel() + libdiv + desc;
                  }
                  else if(getQueryGraph() && getQueryGraph().length > 0) {
                    tooltip += ', in library: ' + getQueryGraph();
                    desc = getQueryGraph() + libdiv + desc;
                  }
                  else desc = LABEL_ROOT;
              }
              else {
                  if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
                    tooltip += ', in library: ' + getQueryGraphLabel();
                    desc = getQueryGraphLabel() + libdiv + desc;
                  }
                  else if(getQueryGraph() && getQueryGraph().length > 0) {
                    tooltip += ', in library: ' + getQueryGraph();
                    desc = getQueryGraph() + libdiv + desc;
                  }
              }
          }
            if(cval){

                tooltip += ', and each of them is';

                var cvals = _root.find('.'+id + ' > class');
                for(i = 0; i < cvals.length; i++){
                  if(i > 0 && cvals.length == 1) break;
                  var aoran = aOrAn($( cvals[i] ).attr('label').substring(0, 1));
                  var cv = $( cvals[i] ).attr('label');
                  tooltip += ' ' + aoran + ' ' + $( cvals[i] ).attr('label');
                  if(i+1 < cvals.length) {
                    tooltip += ',';
                  }
                  if(i+2 == cvals.length) {
                    tooltip += ' and';
                  }
                }
            }
        }
        if( (v.attr('datatype') != 'uri' && (!v.attr('iri') || v.attr('iri').length <= 0)) && ( !cval || id == ID_QUERY)){
              if(val.length > 0 && val != VALUE_ANON_NODE) val = '\'' + val + '\'';
        }

        // update root
        getQuery().attr('label', (desc == 'name' || desc == 'keywords') ? val : desc);

        //var slash = (!isFacet) ? '/' : '';

        var ret;

        if(id == ID_QUERY && (!val || val.trim().length == 0)) val = VALUE_ANON_NODE;

if(false){        
        if(bcFacetType == BC_FACET_TYPE_FACET || bcFacetType == BC_FACET_TYPE_FOCUS) {
          ret =  
            '<tr><td title="'+tooltip+'" id="nav'+id+'" '+focus+'><table><tbody>'+
            '<tr><td ><!--<span onclick="javascript:takeMainFocus(\''+id+'\')" >'+ img + '</span>--><span onclick="javascript:'+action+'(\''+id+'\')" class="via '+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'">' + ''+desc+'</span></td>'+
            '<td onclick="javascript:takeMainFocus(\''+id+'\')" class="boundValue"><span class="circle">' + val + '</span></td></tr>'+
            '</tbody></table></td></tr>';
        }
        else { // isBreadCrumb
          ret =  
            '<td title="'+tooltip+'" id="nav'+id+'" '+focus+'><table><tbody>'+
            '<tr><td onclick="javascript:'+action+'(\''+id+'\')" class="via '+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'">&nbsp;/&nbsp;'+desc+'</td>'+
            '<td onclick="javascript:takeMainFocus(\''+id+'\')" class="boundValue"><span class="circle">' + val + '</span></td></tr>'+
            '</tbody></table></td>';
        }

}

        var isEmptyValue = val === VALUE_ANON_NODE;
        var outline = (isEmptyValue) ? 'outline-default': 'default';
        var bcOutline = (isEmptyValue) ? 'outline-default': 'primary';
        var bcOutlineRemove = (isEmptyValue) ? 'outline-': '';
        var of = (isPropOf && !desc.toLowerCase().endsWith('of')) ? ' of' : '';

        if(nav_type == NAV_TYPE_1){

        }
        else if(nav_type == NAV_TYPE_2){

          var focusClass = (bcFacetType == BC_FACET_TYPE_FOCUS) ? ' current' : '';

          if(bcFacetType == BC_FACET_TYPE_FOCUS){
            outline = outline.replace('primary', 'info');
            bcOutline = bcOutline.replace('primary', 'info');
          }

          var roleBadge = '';// '&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>';
          ret = '<li '+buildTitle(tooltip)+' class="breadcrumb-item'+focusClass+'" id="nav'+id+'"><a ><em onmouseover="mouseOverFacet(\''+id+'\', \''+bcOutline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onmouseout="mouseOutFacet(\''+id+'\', \''+bcOutline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onclick="javascript:'+action+'(\''+id+'\')" class="text-ellipsis">'+desc+of+((isPropOf)?roleBadge:'')+'</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-'+bcOutline+' btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\',false,\''+getMainFocus().attr('class')+'\')">'+val+'</button></li>';


        }
        else if(nav_type == NAV_TYPE_3){
          var roleBadge = '';// '&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>';
          if(bcFacetType == BC_FACET_TYPE_FACET) {
            ret = '<div style="padding: 0px; background-color:transparent;" class="row" '+buildTitle(tooltip)+' id="nav'+id+'" '+focus+'><div style="display:inline; padding:0px;" class="text-ellipsis'+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'"><h6 style="vertical-align:bottom;margin-bottom:0px">&nbsp;<span onclick="javascript:'+action+'(\''+id+'\')" class="via" onmouseover="mouseOverFacet(\''+id+'\', \''+outline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onmouseout="mouseOutFacet(\''+id+'\', \''+outline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')">' + ''+desc+of+((isPropOf)?roleBadge:'')+((len > 0) ? '</span>&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">'+len+'</span>' : '')+'</h6></div><button class="btn-rounded-f btn btn-'+outline+' btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></div>';
          }
          else if(bcFacetType == BC_FACET_TYPE_FOCUS) {
            ret = '<div style="padding: 0px; background-color:transparent;" class="row" '+buildTitle(tooltip)+' id="nav'+id+'" '+focus+'><div onclick="javascript:'+action+'(\''+id+'\')" class="via text-ellipsis'+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'" onmouseover="mouseOverFacet(\''+id+'\', \''+outline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onmouseout="mouseOutFacet(\''+id+'\', \''+outline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')"><h3 class="fw-semi-bold" style="padding-bottom:4px" >'+desc+of+((isPropOf)?roleBadge:'')+'</h3></div><button id="focusValue" class="btn-rounded-f btn btn-'+outline+' btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></div>';
          }
          else { // isBreadCrumb
            //ret = '<li class="breadcrumb-item"><div class="row" style="background-color:transparent;" title="'+tooltip+'" id="nav'+id+'" '+focus+'><div onclick="javascript:'+action+'(\''+id+'\')" class="via text-ellipsis'+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'"><h6>' + ''+desc+'</h6></div><button class="btn-rounded-f  btn btn-'+outline+'default btn-block btn-xs text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></div></li>';
    ret = '<li '+buildTitle(tooltip)+' class="breadcrumb-item" id="nav'+id+'"><a><em onmouseover="mouseOverFacet(\''+id+'\', \''+bcOutline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onmouseout="mouseOutFacet(\''+id+'\', \''+bcOutline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onclick="javascript:'+action+'(\''+id+'\')" class="text-ellipsis">'+desc+of+((isPropOf)?roleBadge:'')+'</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-'+bcOutline+' btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\',false,\''+getMainFocus().attr('class')+'\')">'+val+'</button></li>';
  //  gbcol += '<li class="breadcrumb-item"><a  title=""><em>distributor</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-outline-default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\'0\')">'+VALUE_ANON_NODE+'</button></li>';
          }


        }




/*
        else { // isBreadCrumb
          ret = '<ul class="steps steps-5"> <li><a href="#" title=""><em>Step 1: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li><li><a href="#" title=""><em>Step 2: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li><li class="current"><a href="#" title=""><em>Step 3: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li><li><a href="#" title=""><em>Step 4: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li><li><a href="#" title=""><em>Step 5: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li></ul>';
        }
        var ret =  
        '<td title="'+tooltip+'" id="nav'+id+'" '+focus+'><table><tbody>'+
        '<tr><td onclick="javascript:'+action+'(\''+id+'\')" class="via '+((!isFacet)?' breadcrumb':'')+'">'+desc+'</td></tr>'+
        '<tr><td onclick="javascript:takeMainFocus(\''+id+'\')" class="boundValue">' + img + val + '</td></tr>'+
        '</tbody></table></td>';
        //console.log("bc added: " + ret);
        */

        return ret;
    }

    function buildTitle(title, placement){
      if(!placement) placement = 'top';
      return ' title="'+title+'" data-delay=\'{ "show": "'+tooltipShowDelay+'", "hide": "'+tooltipHideDelay+'" }\' data-toggle="tooltip" data-placement="'+placement+'" ';      
    }

    function setTitle(id, title, placement){
      $('#'+id).attr('title', title);
      if( !$('#'+id).attr('data-delay')  ){
        $('#'+id).attr('data-delay', '{ "show": "'+tooltipShowDelay+'", "hide": "'+tooltipHideDelay+'" }');
        $('#'+id).attr('data-toggle', 'tooltip');
        $('#'+id).attr('data-placement', placement);
      }
        $('#'+id).removeAttr('data-original-title');
      //$('#'+id).tooltip();
    }

    function setNavType(type){
      if(type) nav_type = type;
      updatePermalink();
    }

    function getNavType(){
      return nav_type;
    }

    function aOrAn(word){
      word = word.toLowerCase();
      if(word.startsWith('a')||word.startsWith('e')||word.startsWith('i')||word.startsWith('o')||word.startsWith('u')) return 'an';
      return 'a';
    }


function mouseOverFacet(id, decorateBtn, remove, isEmptyValue){
  if(id == ID_QUERY){
    var txt = $('#nav'+id).find('h3, em');
    if(txt.text() != 'name' && txt.text() != 'keywords'){
      txt.addClass('removeFacetValue');
      //txt.addClass('text-danger');
      return;
    }
  }
  $('#nav'+id).find('button').removeClass('btn-'+decorateBtn);
  $('#nav'+id).find('button').addClass('btn-'+remove + 'danger');
  //console.log('btn-'+decorateBtn + ', '+ 'btn-'+remove + 'danger')
  if(!isEmptyValue) $('#nav'+id).find('button').addClass('removeFacetValue');
}

function mouseOutFacet(id, decorateBtn, remove, isEmptyValue){
  if(id == ID_QUERY){
    var txt = $('#nav'+id).find('h3, em');
    if(txt.text() != 'name' && txt.text() != 'keywords'){
      txt.removeClass('removeFacetValue');
      //txt.removeClass('text-danger');
      return;
    }
  }
  if(!isEmptyValue) $('#nav'+id).find('button').removeClass('removeFacetValue');
  $('#nav'+id).find('button').removeClass('btn-'+remove+ 'danger');
  $('#nav'+id).find('button').addClass('btn-'+decorateBtn);
}


    function getFormEditor(){

var ret = '';

//ret += '<div id="formEditor" class="tab-content mb-lg col-lg-'+SIZE_RECORD_VIEWER+' col-12" id="myTabContent">';
ret += '<div class="clearfix"> <ul class="nav nav-tabs float-left" id="myTab" role="tablist"> <li class="nav-item"> <a aria-controls="basic" aria-expanded="true" class="nav-link active" data-toggle="tab" href="#basic" id="home-tab" role="tab">Basic</a> </li> <li class="nav-item"> <a aria-controls="assumtion" aria-expanded="false" class="nav-link" data-toggle="tab" href="#assumtion" id="profile-tab" role="tab">Assumtion</a> </li> <li class="nav-item dropdown"> <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"> Dropdown <b class="caret"></b> </a> <div class="dropdown-menu"> <a aria-controls="dropdown1" aria-expanded="false" class="dropdown-item" data-toggle="tab" href="#dropdown1" id="dropdown1-tab" role="tab">@fat</a> <a aria-controls="dropdown2" aria-expanded="false" class="dropdown-item" data-toggle="tab" href="#dropdown2" id="dropdown2-tab" role="tab">@mdo</a> </div> </li> </ul> </div>';
      ret += '<div class="tab-content" id="myTabContent"> <div aria-expanded="true" aria-labelledby="basic-tab" class="tab-pane active in clearfix" id="basic" role="tabpanel"> <h3>Tabs-enabled widget</h3> <p>You will never know exactly how something will go until you try it.</p> <p>You can think three hundred times and still have no precise result. If you see attractive girl all you need to do is to go and ask her to give you her phone. You don’t need to think about HOW it can turn out. All you have to do is to GO and DO IT. It should be super-fast and easy. No hesitation. You ask me: “What to do with these fearful thoughts preventing me from doing that?” The answer is to ignore them, because they can’t disappear immediately.</p> <p>The same thing is for startups and ideas. If you have an idea right away after it appears in your mind you should go and make a first step to implement it. </p> <div class="float-right"> <button onclick="javascript:hideForm()" class="btn btn-inverse">Cancel</button> <button class="btn btn-primary">Some button</button> </div> </div> <div aria-expanded="false" aria-labelledby="assumtion-tab" class="tab-pane" id="assumtion" role="tabpanel"> <p>Why dont use Lore Ipsum? I think if some one says dont use lore ipsum its very controversial point. I think the opposite actually. Everyone knows what is lore ipsum - it is easy to understand if text is lore ipsum.</p> <div class="clearfix"> <div class="btn-toolbar"> <a class="btn btn-default" href="#">&nbsp;&nbsp;Check&nbsp;&nbsp;</a> <a class="btn btn-primary" href="#">&nbsp;&nbsp;Dance?&nbsp;&nbsp;</a> </div> </div> </div> <div aria-expanded="false" aria-labelledby="dropdown1-tab" class="tab-pane" id="dropdown1" role="tabpanel"> <p> If you will think too much it will sink in the swamp of never implemented plans and ideas or will just go away or will be implemented by someone else.</p> <p><strong>5 months of doing everything to achieve nothing.</strong></p> <p>Youll automatically skip - because you know - its just non-informative stub. But what if there some text like this one?</p> </div> <div aria-expanded="false" aria-labelledby="dropdown2-tab" class="tab-pane" id="dropdown2" role="tabpanel"> <blockquote class="blockquote-sm blockquote mb-xs"> Plan it? Make it! </blockquote> <p>The same thing is for startups and ideas. If you have an idea right away after it appears in your mind you should go and make a first step to implement it.</p> </div> </div>';

return ret;

    }

function get_short_url(long_url, func)
{
    $.getJSON(
        "http://vio.sn/c/create?uri="+ encodeURIComponent( long_url ), 
        { 
        },
        function(response)
        {
            if(response.c_uri) func(response.c_uri);
        }
    );
}