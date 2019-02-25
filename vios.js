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
}

function clearQueryGraph(){
  _root.find('query').removeAttr('graph');
  _root.find('query').removeAttr(ATTR_GRAPH_LABEL);
}

function getQueryText(){
  return _root.find('query text').text();
}

function setViewType(type, q){
  $(q).find('view').attr('type', type);
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

var fct_dataSpace = "http://lod.openlinksw.com/fct/service";
var fct_dataSpaceSparql = "http://lod.openlinksw.com/sparql";
var fct_dataSpaceLabel = "LOD Cloud";
//var fct_dataSpace = "http://myopenlink.net/fct/service";

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


function fct_query(q, viewType, opt){
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
  var id = (qstr) ? (qstr).hashCode() : 0;
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

  if (resp != null) { // if exist on cache
        switch(viewType){
          case VIEW_TYPE_LIST: {
            fct_handleListResults(resp, opt);
          } break;
          case VIEW_TYPE_LIST_COUNT: {
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
      url: fct_dataSpace,
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
          xml = xml.replace('fct:facets ', 'fct:facets timestamp="' + new Date().getTime() + '" ');          
          //xml = xml.replace('fct:facets ', 'fct:facets sparql="' + sparql + '" ');
        }
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

        $('#reportQueryTime').text(time);
        $('#reportQueryTimeout').text(timeout);
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
        
        switch(viewType){
          case VIEW_TYPE_LIST: {
            fct_handleListResults(xml, opt);
          } break;
          case VIEW_TYPE_LIST_COUNT: {
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
        }
        var currentdataspace = $('#dataSpaceMenu :selected').attr('value');
        var currentdataspacelabel = $('#dataSpaceMenu :selected').text();
        /*window.open(
          'mailto:sdmonroe@gmail.com?subject=Data%20server%20error&body=' +
                'The server '+currentdataspacelabel+' ('+currentdataspace+') threw this error: ' + 
                '%0A%0AError message: ' + thrownError + 
                '%0ADate: '+formatDate(new Date()) +
                '%0AUrl: ' + xhr.url + 
                '%0AStatus: ' + xhr.status + 
                '%0APOST data: %0A'+ encodeURIComponent( xhr.data )+
                ''
        );*/
        fct_handleError(xhr, ajaxOptions, thrownError);
      } 
  });
  updatePermalink();
  return req;
}

function fct_sparql(sparql, opt){
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
  var id = sparql ? sparql.hashCode() : 0;
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

  if (resp != null) { // if exist on cache
    //console.log('sparql results: ' + resp);

            if(!opt){
              fct_handleSparqlResults(resp, opt);
            }
            else {
              if(opt.tar == 'showMeMenu'){
                fct_handleSparqlShowMeCount(resp, opt);

              }
              else if(opt.tar == 'groupByMenu'){
                fct_handleSparqlGroupByCount(resp, opt);
              }
              else if(opt.tar == 'table'){
                fct_handleSparqlTableCount(resp, opt);
              }
            }

    updatePermalink();
    return;
  }
  var req = $.ajax({
      url: fct_dataSpaceSparql + "?query=" + encodeURIComponent(sparql),
      type: 'GET',
      headers: {Accept: "application/sparql-results+xml"},
      dataType: "text", // POI: can't do dataType: xml, since the service sometimes returns malformed XML
      beforeSend: function(jqXHR, settings) {
          jqXHR.url = settings.url;
      },
          success : function(xml) {

            if(!opt){
              fct_handleSparqlResults(xml, opt);
            }
            else {
              if(opt.tar == 'showMeMenu'){
                fct_handleSparqlShowMeCount(xml, opt);

              }
              else if(opt.tar == 'groupByMenu'){
                fct_handleSparqlGroupByCount(xml, opt);
              }
              else if(opt.tar == 'table'){
                fct_handleSparqlTableCount(xml, opt);
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
      } 
  });
  updatePermalink();
  return req;  
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
    x = x * SIZE_RESULT_SET;
    if(x > ct) x = ct;
    $('#tableCount').text( x + ' / ' + ct);
  });
  tablePage();
}

function fct_handleGeoListResults(xml, opt){
    loadGeoListResults(xml);
    $('#showMeMenu').removeClass('loading');
}

function buildResultTableHeaders(row, row2, varNames, varCt, node){
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
  var col = $.createElement('th');

  var action = 'remove';
  var outline = '';
  var val = node.children('value');
  var classes = node.children('class');
  var isPropOf = node.prop('nodeName').toUpperCase() == 'property-of'.toUpperCase();
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

var rainbow = new Rainbow(); 
rainbow.setNumberRange(1, node.parents().length +1);
rainbow.setSpectrum('#e9ecef', '#ffffff'); //'#e9ecef', d7daddff
col.css('background-color', '#' + rainbow.colourAt( (node.parents().length <= 2) ? 1 : node.parents().length - 1));


  col.html(colStr);
  row.append(col);


    col = $.createElement('td');
          colStr = '<button id="focusTableValue'+id+'" class="btn-rounded-f btn btn-'+outline+'default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">';
          colStr += processLabel(valStr);
          colStr += '</button>';
  col.html(colStr);
  row2.append(col);
          //ret += '</div>';



  node.children('property, property-of').each(function (i){
    buildResultTableHeaders(row, row2, varNames, varCt, $(this));
  });
  return row;




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
      if(tableResultsCt < SIZE_RESULT_SET) {
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

function fct_handleSparqlResults(xml, opt){
    $('#resultsTable > thead').empty();
    $('#resultsTable > tbody').empty();
    //console.log('xml' + $(xml).html());
    var results = $(xml).find('results');

//tableResultsCt = $("result", results).length;
//fct_handleSparqlTableCount(xml, opt);


    var row, row2, col;
    row = $.createElement('tr');
    row2 = $.createElement('tr');
    var variables = $("variable", xml);

//labels={};

    var varCt = 0;
    buildResultTableHeaders(row, row2, variables, varCt);

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

    $('#resultsTable > thead').append(row);
    $('#resultsTable > thead').append(row2);
    $("result", results).each(function(i) {
        row = $.createElement('tr');
        var cols = {};
        variables.each(function(j) {
            col = $.createElement('td');
            var header = $(this).attr('name');
            //if(header.indexOf('?o')==-1) col.addClass('resultTableCell');
            if(header.indexOf('o1') == -1){ // make text results optional
              cols[header] = col;
            }
            //console.log('fcthsr: header: ' + header);
        });
        //console.log($(this).html());
        $("binding", this).each(function(j) {
            var header = $(this).attr("name");
            var value = $(this).text();
            var datatype = $($(this).children()[0]).prop('nodeName').toLowerCase();

            if(datatype == 'uri'){
              var label = labels[value];
              if(!label) label = processLabel(value);
              label = getFavicon(value) + '&nbsp;<a href="' + value + '">' + label + '</a>';
              value = label;
            }


            //console.log('fcthsr: header2: ' + header);
            col = cols[header];
            if(col){
                col.append("<span>"+value+"</span>");
                row.append(col);
            }
        });
        $('#resultsTable > tbody').append(row);
    });
    $('#groupByTableHeader').removeClass('loading');



    $('#tableSaveOptions').empty();
    var saveOptions = '';
    saveOptions += '<li><a class="dropdown-item" onclick="exportTableToCSV(\'results.csv\')">CSV</a></li>';
    saveOptions += '<li><a class="dropdown-item" href="#">XML</a></li>';
    saveOptions += '<li><a class="dropdown-item" href="#">JSON</a></li>';
    if(inbox || storage) saveOptions += '<li class="dropdown-divider"></li>';
    if(inbox) saveOptions += '<li><a class="dropdown-item" href="'+getInbox()+'" '+buildTitle(getInbox(), 'right')+'>Save to Inbox</a></li>';
    if(storage) saveOptions += '<li><a class="dropdown-item" href="'+getStorage()+'" '+buildTitle(getStorage(), 'right')+'>Save to Storage</a></li>';
    $('#tableSaveOptions').append(saveOptions);

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
            if(!opt) {
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
  $('*').removeClass('loading');
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
          if(showme === VIEW_TYPE_PROPERTIES){
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
        $('#describe').attr('src', '');
      //  $('#'+viewType+'').empty();

          var sparql = processSparql(xml, true); // POI: for now, let the table share the Record's list limit and offset
          var focus = getSparqlFocus(sparql);
          //console.log('focus: ' + focus);
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

        if(!$('#recordFormColumn').hasClass('hide')) {
          if(!$('#recordFormColumn').hasClass('dont-touch')){
          buildForm();
          }
          else {
            $('#recordFormColumn').removeClass('dont-touch');
          }
        }
        if(!opt || !opt.isTablePaging) pageTable = 0;

        loadGroupByResults(xml, focus);
        $('#groupByHeader').removeClass('loading');
        //$('#focusHeader').removeClass('loading');
        var opt = new Object();
        opt.tar = 'groupByMenu';
        //var sparql = processSparql(xml);
        fct_sparql(getSparqlCount(sparql), opt);


        sparql = sparql.substring(0, sparql.lastIndexOf('}')) + sparql.substring(sparql.lastIndexOf('}') + 1);
        sparql = sparql.replace(/offset\s+\d+/gi, 'offset ' + pageTable * SIZE_RESULT_SET);
        sparql += '}';

        fct_sparql(sparql);

        opt = new Object();
        opt.tar = 'table';
        //var sparql = processSparql(xml);
        sparql = sparql.replace(/limit\s+\d+/gi, '');
        sparql = sparql.replace(/offset\s+\d+/gi, '');
        fct_sparql(getSparqlCount(sparql), opt);


        fct_query(query, VIEW_TYPE_GEO_LIST);

          //console.log("xml: " + xml );
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
  var focus = sparql.match(/select\s*\?[s|p|o|c]\d+/mgi)[0]; // POI: the ?o1 var must be part of the projection, or the SPARQL engine will complain, it is referenced in the ORDER clause
  focus = focus.substring(focus.indexOf('select ')+'select '.length);
  return focus;
}

function getSparqlVars(sparql){
  var vars = (sparql.match(/\s+\?([s|p|o|c]\d+)|\?g\s+/mgi).sort()
             .filter(function(element, index, array) {
                 return index == array.indexOf(element) && array[index].indexOf('?c') == -1 && array[index].indexOf('?g'); // don't return duplicates and remove count vars 
             }) + '').replaceAll(',', ' ');
  if(vars.indexOf('?o1')==-1)vars = '?o1 ' + vars; // ?o1 is required for text match
  return vars;
}

function setSparqlProjection(sparql, projection){
    sparql = sparql.replace(/select.*where/gi, 'select ' + projection + ' where');
    sparql = sparql.replace(/{\s*select.*distinct.*?{/gi, '{ select distinct ' + projection + ' {'); // besure to use .*? non-greedy match to match only the first curly brace
    return sparql;
}

function getSparqlCount(sparql, type){
  var ctVar = (type==VIEW_TYPE_GRAPHS) ? '?g' : getSparqlFocus(sparql)
  switch(type) {
    case VIEW_TYPE_CLASSES: ctVar = ctVar + 'c'; break;
    case VIEW_TYPE_PROPERTIES: ctVar = ctVar + 'p'; break;
    case VIEW_TYPE_PROPERTIES_IN: ctVar = ctVar + 'ip'; break;
    case VIEW_TYPE_TEXT_PROPERTIES: ctVar = ctVar + 'textp'; break;
    case VIEW_TYPE_GRAPHS: ctVar = '?g'; break; // redundant
    case VIEW_TYPE_TEXT: ctVar = '?o1'; break;
    default: ctVar = getSparqlFocus(sparql); break;
  }
  if(VIEW_TYPE_TEXT != type && sparql.indexOf('group')>0) sparql = sparql.substring(0, sparql.indexOf('group'));
  sparql = setSparqlProjection(sparql, 'count(distinct '+ctVar+') as ?c1');
  if(sparql.match(/{\s*select.*distinct.*?{/gi)){
    sparql = sparql.substring(sparql.indexOf('select')+6);
    sparql = sparql.substring(sparql.indexOf('select'), sparql.lastIndexOf('}'));
  }
  //if(sparql.indexOf('distinct') < 0) sparql = sparql.replace('select ', 'select distinct ');
  return sparql;
}

function fct_handleTextResults(xml, opt){
    var groupby = $('#groupByMenu :selected').attr('value');
    loadTextResults(xml);
    $('#groupByHeader').removeClass('loading');
    //$('#focusHeader').removeClass('loading');
    $('#groupByCount').text('');
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
    var opt = new Object();
    opt.tar = 'showMeMenu';
    var sparql = processSparql(xml);
    fct_sparql(getSparqlCount(sparql, VIEW_TYPE_CLASSES), opt);
}

function fct_handlePropertiesResults(xml, opt){
    var showme = $('#showMeMenu :selected').attr('value');
    if(opt == OPT_SEND_TO_GROUP_BY){
      // $('#'+viewType+'').empty();
        //loadGroupByMenu(xml);
        //$('#groupByHeader').removeClass('loading');

        if(qGroupBy && qGroupBy.length > 0){
            var qgb = decodeURIComponent(qGroupBy);
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
        }
        else {
            //if(isDebug) console.log('groupByNotLoaded: ' + qgb + ', old value:' + qGroupBy);
        }

    }
    else {
      if(showme === VIEW_TYPE_PROPERTIES){
        loadPropertiesResults(xml);
      }
      $('#showMeHeader').removeClass('loading');
      var opt = new Object();
      opt.tar = 'showMeMenu';
      var sparql = processSparql(xml);
      fct_sparql(getSparqlCount(sparql, VIEW_TYPE_PROPERTIES), opt);
    }
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

function takeMainFocus(id, silent){

  //if(id == ID_TEXT) id = ID_QUERY;
  var query = getQuery();
  takeFocus( _root.find('.'+id), getFocus(query));
  //console.log('query after take focus: ' + $('query').html());

  getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;
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
  getMainFocus().find('view').attr('offset', 0);
  page = 0;
  //pageTable = 0;

  //if(fct_isDebug) console.log('setView query: ' + query.html());
  //query = _root.find('query');

  doQuery(getQueryText());

  //getFocus(query).append(p);
}

function setPropertyValue(id, nodeName, contextId, propIRI, propLabel, val, valLabel, datatype, lang){
    exitGroupBy(id);

  remove(_root.find('.'+contextId).attr('class'), true);
  if(propIRI) propIRI = deSanitizeLabel(propIRI);
  if(val) val = deSanitizeLabel(val);
  valLabel = deSanitizeLabel(valLabel);
  var p = $.createElement(nodeName); // nodeName is property or property-of
  p.attr('class', contextId);
  p.attr('iri', propIRI);
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
  getMainFocus().find('view').attr('offset', 0);
  page = 0;
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
  getMainFocus().find('view').attr('offset', 0);
  page = 0;
  //pageTable = 0;

  getMainFocus().append(p);
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
  getMainFocus().find('view').attr('offset', 0);
  page = 0;
  //pageTable = 0;

  getMainFocus().append(p);
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  if(!silent) doQuery(getQueryText());
}

function addClassFacet(id, clazz, label){
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
  getMainFocus().find('view').attr('offset', 0);
  page = 0;
  //pageTable = 0;

  getMainFocus().prepend(c); // POI: 'prepend' to ensure the last one added is the first returned by $.find() 
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  doQuery(getQueryText());
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

var GROUP_BY_NONE_LABEL = "Records";
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

var qGroupBy, qShowMe, qdataSpace, qSearchAllFields, qTimeout;

var icon_folder_black = 'http://icon-park.com/imagefiles/folder_icon_black.png';
var icon_file = 'http://myopenlink.net/DAV/home/sdmonroe/img/blank-file-xxl.png';
var icon_expand = "http://myopenlink.net/DAV/home/sdmonroe/img/expand.png";


var preInitialized = false;

var screenSz = screen.width;
var SIZE_GROUP_BY = (screenSz < 1500) ? "3" : "2";
var SIZE_SHOW_ME = (screenSz < 1500) ? "3" : "2";
var SIZE_RECORD_VIEWER = (screenSz < 1500) ? "6" : "8";
var SIZE_RECORD_FORM = (screenSz < 1500) ? "6" : "6";
var SIZE_LABEL = (screenSz < 1500) ? 22 : 30; // TODO: this constant is deprecated, using text-ellipse now
var SIZE_RESULT_SET = (screenSz < 1500) ? 15: 30;
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

  function getStorage(){
    return storage.value;
  }

  function getInbox(){
    return inbox.value;
  }

function init(){
    fct_init(); // this method must be the first method called by the implementation of the fct_ framework






//************************************//

    if(!document.getElementById('id2')) {
        var link = document.createElement('link');
        link.id = 'id2';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'http://myopenlink.net/DAV/home/sdmonroe/css/vios.css';
        document.head.appendChild(link);

        link = document.createElement('link');
        link.id = 'id2';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://fonts.googleapis.com/css?family=Source+Code+Pro';
        document.head.appendChild(link);

    }  

        link = document.createElement('script');
        link.type = 'text/javascript';
        link.src = 'http://myopenlink.net/DAV/home/sdmonroe/js/solid-auth-client.bundle.js';
        document.head.appendChild(link);

        link = document.createElement('script');
        link.type = 'text/javascript';
        link.src = 'http://myopenlink.net/DAV/home/sdmonroe/js/rdflib.min.js';
        document.head.appendChild(link);

        link = document.createElement('script');
        link.type = 'text/javascript';
        link.src = 'http://myopenlink.net/DAV/home/sdmonroe/js/rdflib.min.js.map';
        document.head.appendChild(link);

        link = document.createElement('script');
        link.type = 'text/javascript';
        link.src = 'http://myopenlink.net/DAV/home/sdmonroe/js/md5.min.js';
        document.head.appendChild(link);


//alert('init() screen width: ' + screen.width);

  //startDictation();

  if(window.location.href.indexOf('myopenlink') > 0) {
    $('body').empty();
    $('body').append('<div>Site down for maintenance, please check back.</div>');
    return;
  }


// Q&D data canvas ******************//




  //$('#showMeMenu').remove();
  $('#leftButton').remove();
  $('#rightButton').remove();
  $('#showMeLeftButton').remove();
  $('#showMeRightButton').remove();
  //$('#keywords').remove();
  $('.search-area').remove();
  $('#describe').remove();

  $('#isDebug').prop('checked', false);

  $('select#groupByMenu').parent().removeClass('hidden');

  // **** TODO: comment out these lines
  //$('#lod').addClass('hide');
  //$($('.vios-body').children('div')[0]).addClass('hide');
  //$($('.vios-body').children('div')[1]).addClass('hide');
  //$('#isSearchAllFields').remove();
  //$('#isCache').remove();
  //$('#isDebug').remove();
  //$('#keywords').remove();
  // ***** END TODO

  isExpandSearch = $('#isSearchAllFields').parent().hasClass('active');
  $('#isSearchAllFields').parent().click(function(e){
    isExpandSearch = !$('#isSearchAllFields').parent().hasClass('active');
    doQuery(getQueryText());
  });
  //$('#queryTimeout').unbind('click');  
  //$('#isSearchAllFields').click(function(e){doQuery(getQueryText());});


  selectMenuItem('queryTimeout', '30000');

  $('dashboard').append('<div class="row" id="angular_breadcrumbs"></div>');
  $('dashboard').append('<div class="row" id="angular_facets"></div>');
  $('dashboard').append('<div class="row" id="dataCanvas"></div>');
  $('#queryTimeout').val('30000');



  $('#keywords').css('padding-left', '10px');

    var clearKeywords = $('span.clear-data').filter(function() {return $(this).text() === 'Keywords';});
    var clearLibrary = $('span.clear-data').filter(function() {return $(this).text() === 'Library';});

    clearKeywords.css('text-decoration', 'none');
    clearLibrary.css('text-decoration', 'none');


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
            newDataspacePicker += '<button _ngcontent-c2="" class="btn btn-default" id="dropdown-btn-three">LOD Cloud</button>';
            newDataspacePicker += '<button _ngcontent-c2="" class="btn btn-default dropdown-toggle" dropdowntoggle="" aria-haspopup="true" aria-expanded="false">';
              newDataspacePicker += '<i _ngcontent-c2="" class="fa fa-caret-down"></i>';
            newDataspacePicker += '</button>';
            newDataspacePicker += '<!----><ul _ngcontent-c2="" aria-labelledby="dropdown-btn-three" class="dropdown-menu" role="menu" style="left: 0px; right: auto; top: 100%; transform: translateY(0px);">';
              newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://lod.openlinksw.com" class="dropdown-item">LOD Cloud</a></li>';
              newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://id.myopenlinksw.net" class="dropdown-item">MyOpenLink</a></li>';
              newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://uriburner.net" class="dropdown-item">URI Burner</a></li>';
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


gbcol = '<div id="groupByColumn" class="hide col-lg-'+SIZE_GROUP_BY+' col-12">';
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
        gbcol += '<h4><span id="groupByCount" class="badge badge-info">0/0</span> Records</h4>';
        gbcol += '<div class="widget-controls">';
          gbcol += '<a data-target="#" class="hide " '+buildTitle('')+' id="leftButton" onclick="javascript:pageLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
          gbcol += '<a data-target="#" class="hide " '+buildTitle('')+' id="rightButton" onclick="javascript:pageRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
          //gbcol += '<a data-widgster="close" data-target="#"><i class="glyphicon glyphicon-remove"></i></a>';
        gbcol += '</div>';
        gbcol += '</header>';

        gbcol += '<div class="widget-body  p-0">';
      //  gbcol += '<div class="widget-body p-0">';
            gbcol += '<div id="angular_recordsList" class="list-group fs-mini">';



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
          gbcol += '<h4><span id="tableCount" class="badge badge-info">0/0</span> Records</h4>';
        gbcol += '</h5>';
        gbcol += '<div class="widget-controls">';
          //gbcol += '<a href="#"><i class="glyphicon glyphicon-cog"></i></a>';
          gbcol += '<a data-target="#" disabled="true" class="disabled" id="leftTableButton" onclick="javascript:pageTableLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
          gbcol += '<a data-target="#" disabled="true" class="disabled" id="rightTableButton" onclick="javascript:pageTableRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
          gbcol += '<a data-widgster="close" onclick="undoTable()" class="btn-gray"><i class="glyphicon glyphicon-remove"></i></a>';
        gbcol += '</div>';
      gbcol += '</header>';
        gbcol += '<div class="widget-body">';


gbcol += '<table id="resultsTable" class="table table-hover table-bordered table-lg mt-lg mb-0">';
gbcol += '<thead>';
gbcol += '<tr>';
gbcol += '<th>test';
gbcol += '</th>';
gbcol += '</tr>';
gbcol += '</thead>';

gbcol += '<tbody>';
gbcol += '<tr>';
gbcol += '<td>value';
gbcol += '</td>';
gbcol += '</tr>';

gbcol += '</tbody>';
gbcol += '</table>';
gbcol += '<br/>';



gbcol += '<div class="clearfix">';
          gbcol += '<div class="pull-right">';
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












gbcol = '<div id="showMeColumn" class="hide col-lg-'+SIZE_SHOW_ME+' col-12"><section class="widget" widget>';
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






gbcol = '<div id="recordViewerColumn" class="hide col-lg-'+SIZE_RECORD_VIEWER+' col-12"><section class="widget" widget>';

        gbcol += '<div class="widget-body  p-0 ">';
       // gbcol += '<div class="widget-body p-0">';


gbcol += '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
  gbcol += '<a class="navbar-brand" data-target="#" onclick="javascript:buildForm()">Compose</a>';
  gbcol += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    gbcol += '<i class="glyphicon glyphicon-tree-conifer"></i>';
    gbcol += '<i _ngcontent-c10="" class="glyphicon glyphicon-tree-conifer text-success"></i>';
  gbcol += '</button>';

  gbcol += '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
    gbcol += '<ul class="navbar-nav mr-auto">';
      gbcol += '<li class="nav-item active">';
        gbcol += '<a id="www" class="nav-link" data-target="#" onclick="linkOut()">WWW <span class="sr-only">(current)</span></a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#" onclick="javascript:doTable()">Table</a>';
      gbcol += '</li>';
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link" data-target="#" onclick="javascript:showMap()">Map</a>';
      gbcol += '</li>';
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
      gbcol += '<li class="nav-item">';
        gbcol += '<a class="nav-link disabled" data-target="#">Edit</a>';
      gbcol += '</li>';
    gbcol += '</ul>';
    gbcol += '<form class="form-inline my-2 my-lg-0">';
      //gbcol += '<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">';
      gbcol += '<button style="margin-right:1em" class="btn btn-secondary my-2 my-sm-0" type="submit">IDN</button>';
    gbcol += '</form>';
  gbcol += '</div>';
gbcol += '</nav>';


            gbcol += '<div id="angular_recordViewer" class="embed-responsive embed-responsive-1by1">';


gbcol += '<iframe id="describe" class="iframe embed-responsive-item" src="" height="100%"></iframe>';
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



gbcol += '</div>';



$('#dataCanvas').append(gbcol);


var hideHelpOnEnter = localStorage.getItem('hideHelpOnEnter');

if(!hideHelpOnEnter){

gbcol += '<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
  gbcol += '<div class="modal-dialog" role="document">';
    gbcol += '<div class="modal-content">';
      gbcol += '<div class="modal-header">';
        gbcol += '<h5 class="modal-title" id="exampleModalLabel">Quick Reference</h5>';
        gbcol += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
          gbcol += '<span aria-hidden="true">&times;</span>';
        gbcol += '</button>';
      gbcol += '</div>';
      gbcol += '<div class="modal-body">';
      gbcol += '  <p>Press the <i>ctrl</i> key to toggle Command and Edit Modes';
      gbcol += '  </p><p>';
      gbcol += '  In Commmand Mode:';
      gbcol += '  <ul><li>';
      gbcol += '  Press <i>N</i> key to toggle navigation types';
      gbcol += '  </li><li>';
      gbcol += '  Press <i>C</i>, <i>T</i>, <i>F</i>, <i>R</i> or <i>L</i> keys to switch CTRL lists';
      gbcol += '  </li><li>';
      gbcol += '  Use <i>&lt;</i>, <i>&gt;</i>, <i>left arrow</i>, and <i>right arrow</i> to move through list pages';
      gbcol += '  </li></ul>';
      gbcol += '  <p>';
      gbcol += '  See <a href="https://medium.com/@sdmonroe/vios-network-99488f5bf29d">this article</a> for more tips';
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
$('#exampleModal').modal({});

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
    $('.avatar').parent().children('.small').text('Login');
    $('.avatar').children('img').attr('src', 'http://www.gravatar.com/avatar/' + ('info@vios.network'));
    $('.avatar').parent().children('.circle').addClass('hide');

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
  solid.auth.popupLogin({ "popupUri":"http://myopenlink.net/DAV/home/sdmonroe/popup.html" });


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
    $('#dsroot').attr('title', fct_dataSpace);
    getQuery().attr('label', LABEL_ROOT);

    qGroupBy = fct_getUrlParameter('groupBy'); // the loading of gGroupBy is done in doQuery
    qShowMe = fct_getUrlParameter('showMe');
    qdataSpace = fct_getUrlParameter('dataSpace');
    qSearchAllFields = fct_getUrlParameter('searchAllFields');
    qTimeout = fct_getUrlParameter('timeout');
    qPage = fct_getUrlParameter('page');
    qshowMePage = fct_getUrlParameter('ctrlPage');

    if(qdataSpace && qdataSpace.length > 0){
      selectMenuItem('dataSpaceMenu', qdataSpace, true);
      qdataSpace = null;
    }
    if(qShowMe && qShowMe.length > 0) {
      selectMenuItem('showMeMenu', qShowMe);
      qShowMe = null;
    }
    if(qTimeout && qTimeout.length > 0) {
      setQueyTimeout(qTimeout);
      qTimeout = null;
    }
    if(qPage && qPage.length > 0) {
      page = qPage;
      qPage = null;
    }
    if(qshowMePage && qshowMePage.length > 0) {
      showMePage = qshowMePage;
      qshowMePage = null;
    }
    if(qSearchAllFields && qSearchAllFields.length > 0 && qSearchAllFields.toLowerCase() == 'true'){
      isExpandSearch = true;
      $('#isSearchAllFields').prop('checked', true);
      $('#isSearchAllFields').parent().addClass('active');
      $('#isSearchAllFields').parent().attr('aria-pressed','true');
      qSearchAllFields = null;
    }

    loadGroupByMenuDefaults();

    try{
      setNavType(localStorage.getItem('navType'));
    }
    catch(e){

    }

    preInitialized = true;
    if(fct_isPermalink) doQuery(getQueryText());    

    /* TODO: use qTip for tooltips
    var api = $('[title!=""]').qtip('api');
    api.timers = {
        show: timerObject, // Value of the setTimeout call for showing the tooltip (if show.delay is set)
        hide: timerObject // Value of the setTimeout call for hiding the tooltip (if hide.delay is set)
    }    
    */

    $('#keywords').focus();

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
}

function hideForm(){
  $('#recordFormColumn').addClass('hide');
  $('#recordViewerColumn').removeClass('hide');
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


    function addTab(fctId, tabCounter) {
     // tabCounter++;
      //var label = tabTitle.val() || "Tab " + tabCounter;
      var  id = "tabs-" + tabCounter;
     var tabTitle = $( "#tab_title" );
    var tabContent = $( "#tab_content" );
 
 if(tabCounter == 0){
    $('.tab-content').empty();
    $('ul[role="tablist"]').empty();
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



var classes = $(_root.find('.'+fctId + ' > class'));
var tabLabel = _root.find('.'+fctId).attr('label');


if(classes && classes.length > 0){
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
        if(i == 0) tabLabel = processLabel($(this).attr('label')); // POI: take the latest added class as the tab label
              clazz += ((i > 0) ? ', ' : '') + processLabel($(this).attr('label'));

              
      });
              rows += '<input class="form-control" id="normal-field" disabled="disabled" placeholder="Enter field value" value="'+clazz+'" type="text" id="'+createId()+'"/>';
              rows += '</div>';
              rows += '</div>';
}




var hasLegend = false;


      $(_root.find('.'+fctId + ' > property')).each(function(i) {
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
          
          //len += ', including';
          var datatype = $(this).attr('datatype');


          if($(this).children('property, property-of').length <= 0){

        if(!hasLegend){
          rows += '<legend class="m-2"><strong>General</strong> Fields</legend>';
          hasLegend = true;

        }
              rows += '<div class="form-group row">';
              rows += '<label class="col-md-4  col-form-label text-md-right" for="normal-field">';
              rows += label;





var  cls = $(_root.find('.'+fctId + ' > property[iri="'+iri+'"]')).children('class');


if(cls && cls.length > 0){
          rows += '<span class="help-block">';

      cls.each(function(j) {
              rows += ((j > 0) ? ', ' : '') + processLabel($(this).attr('label'));

              
      });
              rows += '</span>';
}




              rows += '</label>';
              rows += '<div class="col-md-7 ">';
              var disabled = (value) ? ' disabled="disabled"' : '';
              if(valueLabel) valueLabel = processLabel(valueLabel);
              else valueLabel = '';
              rows += '<input class="form-control" id="normal-field"'+disabled+' placeholder="Enter field value" value="'+valueLabel+'" type="text" id="'+createId()+'"/>';
              rows += '</div>';
              rows += '</div>';
          }
          else{
            //var subTab = $(this);
            var b = $.createElement('button');
            b.addClass('btn');
            b.addClass('btn-info');
            b.attr('type', 'button');

            // AddTab button: just opens the dialog
            b.button().on( "click", function() {
                //$('#tab_title').attr('value', );        
                //buildForm();

                addTab(subId, createId());
                $('#recordFormColumn').addClass('dont-touch');
                takeMainFocus(subId);
                //$('#recordFormColumn').remmoveClass('dont-touch');
                //$('#tabs').removeClass('hide');
                b.remove();
                if(buttonblock.children('button').length <= 0) {
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


      $(_root.find('.'+fctId + ' > property-of')).each(function(i) {
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
          
          //len += ', including';
          var datatype = $(this).attr('datatype');


          if($(this).children('property, property-of').length <= 0){
        if(!hasLegend){
          rows += '<legend class="m-2"><strong>General</strong> Roles</legend>';
          hasLegend = true;
        }
              rows += '<div class="form-group row">';
              rows += '<label class="col-md-4  col-form-label text-md-right" for="normal-field">';
              rows += label + ' of';







var  cls = $(_root.find('.'+fctId + ' > property-of[iri="'+iri+'"]')).children('class');


if(cls && cls.length > 0){
          rows += '<span class="help-block">';

      cls.each(function(j) {
              rows += ((j > 0) ? ', ' : '') + processLabel($(this).attr('label'));

              
      });
              rows += '</span>';
}








              rows += '</label>';
              rows += '<div class="col-md-7 ">';
              var disabled = (value) ? ' disabled="disabled"' : '';
              if(valueLabel) valueLabel = processLabel(valueLabel);
              else valueLabel = '';
              rows += '<input class="form-control" id="normal-field"'+disabled+' placeholder="Enter field value" value="'+valueLabel+'" type="text" id="'+createId()+'"/>';
              rows += '</div>';
              rows += '</div>';
          }
          else{
            //var subTab = $(this);
            var b = $.createElement('button');
            b.addClass('btn');
            b.addClass('btn-info');
            b.attr('type', 'button');

            // AddTab button: just opens the dialog
            b.button().on( "click", function() {
                //$('#tab_title').attr('value', );        
                //takeMainFocus(subId);
                //buildForm();

                addTab(subId, createId());
                $('#recordFormColumn').addClass('dont-touch');
                takeMainFocus(subId);
                //$('#recordFormColumn').remmoveClass('dont-touch');
                //$('#tabs').removeClass('hide');
                b.remove();
                if(buttonblock.children('button').length <= 0) {
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
      if(rows && rows != undefined) {
fieldset.append(rows);
        form.append(fieldset);
      }
      form.append("<br/>");
      if(buttonblock.children('button').length > 0) {
        buttonPanel.append(buttonblock);
        form.append(buttonPanel);
      }
      //var tabs = $.createElement('ul');
      //tabs.append('<li><a href="#tabs-1">'+getQuery().attr('label')+'</a></li>');


    var tabTemplate = '<li class="nav-item"><a aria-controls="'+id+'" onclick="selectTab('+tabCounter+')" aria-expanded="false" class="nav-link'+((tabCounter == 0) ? ' active' : '')+'" data-toggle="tab" id="profile-tab" role="tab">'+tabLabel+'</a></li>';
    var tabDropDownTemplate = '<a aria-controls="'+id+'" aria-expanded="true" class="dropdown-item show" data-toggle="tab" id="'+id+'-tab" role="tab" aria-selected="true">'+_root.find('.'+fctId).attr('label')+'</a>';
      $(_root.find('.'+fctId + ' > class')).each(function(i) {
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
      tabPanel.attr('aria-labelledby', id+'-tab');
      tabPanel.attr('role', 'tabpanel');
      tabPanel.addClass('tab-pane');
      tabPanel.attr('id', id);
if(tabCounter == 0 && false) {
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
          footer += '<div class="pull-right">';
          
            footer += '<button onclick="hideForm()" class="btn btn-default btn-sm">';
              footer += 'Cancel';
            footer += '</button>&nbsp;';

            footer += '<div class="btn-group" data-dropdown="">';
              footer += '<button class="btn btn-sm btn-inverse dropdown-toggle" data-toggle="dropdown" aria-expanded="false">';
                footer += '&nbsp; Save To... &nbsp;';
                footer += '<i class="fa fa-caret-down"></i>';
              footer += '</button>';

              footer += '<ul class="dropdown-menu dropdown-menu-right" x-placement="top-end" style="position: absolute; transform: translate3d(-97px, -145px, 0px; top: 0px; left: 0px; will-change: transform;">';
                if(inbox) footer += '<li><a href="'+getInbox()+'" '+buildTitle(getInbox(), 'right')+' class="dropdown-item" >Inbox</a></li>';
                if(storage) footer += '<li><a href="'+getStorage()+'" '+buildTitle(getStorage(), 'right')+' class="dropdown-item" >Storage</a></li>';
                //footer += '<li><a class="dropdown-item" href="#">vios.network</a></li>';
                //footer += '<li><a class="dropdown-item" href="#">Solid POD</a></li>';
                if(!inbox && !storage) {
//                  footer += '<li class="dropdown-divider"></li>';
                  footer += '<li><a class="dropdown-item" href="#">Save to Data Space...</a></li>';
                }
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



  }

  function undoTable(){
    $('#recordViewerColumn').removeClass('hide');
    $('#groupByColumn').removeClass('col-lg-'+(parseInt(SIZE_GROUP_BY)+parseInt(SIZE_RECORD_VIEWER)));
    $('#groupByColumn').addClass('col-lg-'+SIZE_GROUP_BY);
    $('#tabularResults').addClass('hide');
    $('#recordsListWidgetContainer').removeClass('hide');
    if(nav_type == NAV_TYPE_3) $('#facetCollectorWidgetContainer').removeClass('hide');
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
    downloadCSV(csv.join("\n"), filename.replace('.cvs', + '_' + createId() + '.cvs'));
}

function downloadCSV(csv, filename) {
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
  function isControlListVisible(){
    return !$('#showMeColumn').hasClass('hide');
  }

document.onkeydown = checkKey;
document.onkeyup = checkKeyRelease;

var ctrlDown = false;

function checkKeyRelease(e) {
      e = e || window.event;
    if (e.keyCode == '17') { // control key
        ctrlDown = false;
    }
}

function checkKey(e) {


    e = e || window.event;

    if (e.keyCode == '188') { // period key
        if(page > 0 && !$('#leftButton').hasClass('hide')) pageLeft();
    }
    else if (e.keyCode == '190') { // comma key
        if(!$('#rightButton').hasClass('hide')) pageRight();
    }
    else if (e.keyCode == '37') { // left arrow key
       if(showMePage > 0 && !$('#showMeLeftButton').hasClass('hide')) showMePageLeft();
    }
    else if (e.keyCode == '39') { // right arrow key
       if(!$('#showMeRightButton').hasClass('hide')) showMePageRight();
    }
    else if (e.keyCode == '116') { // F5 key
       doExplore($('#keywords').val());
    }


if(!$('input').is(":focus")){
  if(ctrlDown){
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
    if (e.keyCode == '8' || e.keyCode == '67') { // Delete key or C key
        selectMenuItem('showMeMenu', VIEW_TYPE_CLASSES);
    }
    else if (e.keyCode == '220' || e.keyCode == '80' || e.keyCode == '70') { // | key or P key or F key
        selectMenuItem('showMeMenu', VIEW_TYPE_PROPERTIES);
    }
    else if (e.keyCode == '13' || e.keyCode == '82') { // Return key or R key
        selectMenuItem('showMeMenu', VIEW_TYPE_PROPERTIES_IN);
    }
    else if (e.keyCode == '84') { // T key
      if(isExpandSearch){
          selectMenuItem('showMeMenu', VIEW_TYPE_TEXT_PROPERTIES);
      }
    }
    else if (e.keyCode == '16' || e.keyCode == '76' || e.keyCode == '71') { // Shift key or L key or G key
        selectMenuItem('showMeMenu', VIEW_TYPE_GRAPHS);
    }  
    else if(e.keyCode == '17') { // Control key
      ctrlDown = true;
    }    


    else if(e.keyCode == '78') { // Control keyn
      if(!isTableShowing()){
        if(nav_type == NAV_TYPE_2) nav_type = NAV_TYPE_3;
        else if(nav_type == NAV_TYPE_3) nav_type = NAV_TYPE_2;
        try{
          localStorage.setItem('navType', nav_type);
        }
        catch(e){

        }
        doQuery(getQueryText());
      }
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


function clearKeywords(){
  $("#keywords").val('');
  _root.find('text').remove();
  //text=undefined;
}

function sanitizeLabel(label){
  label = label.split('\'').join("&amp;apos;");
  label = label.split('&#39;').join("&amp;apos;");
  label = label.replaceAll('"', '\"');
  label = label.replaceAll('\\', '\\\\');
  //label = label.split('_').join(" ");
  return label;
}

function deSanitizeLabel(label){
  label = label.split('&amp;apos;').join("\'");
  label = label.split('&amp;apos;').join("&#39;");
  return label;
}

function deSanitizeIRI(iri){
iri = deSanitizeLabel(iri);
iri = decodeURIComponent(iri);
return iri;
}

function processLabel(label, value, datatype, lang, labelSize){
    if(!labelSize) labelSize = SIZE_LABEL;
    label = label.trim();



    if(label.length <= 0){
      label = value;
    }
      if(label.lastIndexOf("/") == label.length - 1){
        label = label.substring(0, label.length-1);
      }
      else{
        label = label.substring(label.lastIndexOf("/")+1);
      }
      if(label.lastIndexOf("#") == label.length - 1){
        label = label.substring(0, label.length-1);
      }
      else{
        label = label.substring(label.lastIndexOf("#")+1);
      }


    // *** business Category processing
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
    label = label.replace('\\d{'+SIZE_MIN_DIGITS+','+SIZE_MAX_DIGITS+'}/g', '');
    label = label.replace(/\d{5,11}/g, '');
    return label.trim();
}

//var beep1Str = '//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=';
//var snd = new Audio("data:audio/wav;base64,"+beep1Str);  

var snd = new Audio('http://www.soundjay.com/button/beep-24.wav');

function beep() {
    try{
      snd.play();
    }
    catch(e){

    }
}

function updatePermalink(){
    $('#permalink').attr('href', this_endpoint + '?' + 
      '&dataSpace=' + encodeURIComponent( $('#dataSpaceMenu :selected').attr('value') ) + 
      '&groupBy=' + encodeURIComponent( $('#groupByMenu :selected').attr('json') ) + 
      '&showMe=' + $('#showMeMenu :selected').attr('value') + 
      '&searchAllFields=' + isExpandSearch + 
      '&timeout=' + getQueryTimeout() + 
      '&page=' + page + 
      '&ctrlPage=' + showMePage + 
      '&qxml=' + encodeURIComponent(_root.find('query').prop('outerHTML'))
    ); //+ '&idCt=' + idCt

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

function doExplore(keywords){
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
function doQuery(keywords){
      if(!isActivated) {
        activate();
        isActivated = true;
      }
      //console.log("keywords:" + keywords);
      setQueryText(keywords);


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
      if(dqct = 3 || !fct_isPermalink){ 

      //console.log('query 1: ' + getQuery().prop('outerHTML'));

      //var q = query.clone();

if(!fct_isPermalink){
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
}
else {

          if(qGroupBy && qGroupBy.length > 0 && qGroupBy !== 'undefined'){
          selectShowMe(true);


          var qgb = decodeURIComponent(qGroupBy);
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
        }
        else {
            //if(isDebug) console.log('groupByNotLoaded: ' + qgb + ', old value:' + qGroupBy);
        }

  fct_isPermalink = false;
}

    //query.attr('same-as', 'true');
        fct_query(query, VIEW_TYPE_LIST_COUNT);
      //console.log('query 3: ' + getQuery().prop('outerHTML'));
      }
      else {
        dqct++;
      }

      //clearKeywords();

      buildNavPath();
      //console.log('query 4: ' + getQuery().prop('outerHTML'));

      /* TODO: use qTip for tooltips, see http://qtip2.com/api
      $('[title!=""]').qtip();
      */
}

function selectMenuItem(id, value, silent){
//  $('#'+id+' option[value=\''+ value +'\']').prop('selected', true); // POI: use escapeSelector if id=groupByMenu, since the values are URIs, which contain special chars
  var menu = $('#'+id).val(value);
  if(id == 'showMeMenu'){
    $('#showMeMenuSelectLabel').text($('#showMeMenu :selected').text());
  }
  if(!silent) menu.change(); // POI: use escapeSelector if id=groupByMenu, since the values are URIs, which contain special chars
}

function selectdataSpace(uri, label){
  //fct_dataSpace = uri;
  fct_dataSpaceLabel = label;
  //fct_dataSpace = $('#dataSpaceMenu :selected').attr('value') + '/fct/service';
  //fct_dataSpaceSparql = $('#dataSpaceMenu :selected').attr('value') + '/sparql';
  fct_dataSpace = uri + '/fct/service';
  fct_dataSpaceSparql = uri + '/sparql';
  LABEL_ROOT = getDataspaceLabel().toUpperCase(); //<i class="fa fa-home" style="padding-bottom:4px;padding-right:2px;"></i>
  doQuery(getQueryText());
}

function getDataspaceLabel(){
  if(!fct_dataSpaceLabel || fct_dataSpaceLabel.length <= 0) return LABEL_ROOT;
return fct_dataSpaceLabel;
}

function getQueryTimeout(){
//  return $('#queryTimeout :selected').attr('value');
  return $('.slider-handle').attr('aria-valuenow'); // TODO: need to access the slider via id
}

function setQueyTimeout(timeout){
  $('.slider-handle').attr('aria-valuenow', timeout); // TODO: need to access the slider via id
  $('.slider-handle').slider('setValue', timeout); // TODO: need to access the slider via id
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
  groupByResultsCt = 0;
}

function pageRight(){
  setViewOffset(getViewOffset() + SIZE_RESULT_SET);
  page++;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  selectGroupBy(true);
}

function pageLeft(){
  setViewOffset(getViewOffset() - SIZE_RESULT_SET);
  page--;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  selectGroupBy(true);
}

function loadTextResults(xml){
      $('#'+ID_GROUP_BY+'').empty();

      var rows = "";
      var result = $(xml).find("fct\\:result")[0];
      groupByResultsCt = $("fct\\:row", result).length;
        if(page == 0){
          $("#leftButton").attr('disabled', 'true');
          $("#leftButton").addClass('disabled');
          $('#leftButton').removeAttr('title');
        }
        else{

          $("#leftButton").removeAttr('disabled');
          $("#leftButton").removeClass('disabled');
          //$('#leftButton').attr('title', 'page ' + (page));
          setTitle('leftButton', 'page ' + (page), 'bottom');

        }
      if(groupByResultsCt < SIZE_RESULT_SET) {
        $("#rightButton").attr('disabled', 'true');
        $("#rightButton").addClass('disabled');
        $('#rightButton').removeAttr('title');
      }
      else {
        $("#rightButton").removeAttr('disabled');
        $("#rightButton").removeClass('disabled');
       // $('#rightButton').attr('title', 'page ' + (page+2));
          setTitle('rightButton', 'page ' + (page+2), 'bottom');

      }

      $("fct\\:row", result).each(function(i) {
          //console.log($(this).html());
          var col = $(this).find("fct\\:column");

          // shortform can be used in lieu of the label for URI values
          var value, datatype, shortform, label, lang, ct, trank, erank, g, text; // TODO: need to utilize the lang property for filtering results for the user
          
          $("fct\\:column", this).each(function(j) {
              // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
              val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
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
      });
      //console.log(rows);
          $('#'+ID_GROUP_BY+'').append(rows);

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

              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(value);
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
              labels[value] = label;

              // POI: the label and values need to have the apostrophe (') char removed before insertion into the javascript functions below
              // but they need to be desanitized by the respective javascript methods before being used in a query (or else the query will fail due to value mismatch)
              // also, a double encoding is used by the sanitize function, so we have to desanitize the label before displaying it in the data canvas
              label = sanitizeLabel(label);
              value = sanitizeLabel(value);
              //console.log($(col[0]));
              var id = createId();

              var opts = new Object();
              opts.tag = TAG_LIST;
              opts.parentId = 'gbr_'+id;
              opts.childrenId = opts.tag + opts.parentId;

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
rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';

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
                                    rows +=  '<i class="status status-bottom bg-'+color+'"></i>';
                }
                else {
                  rows += '<span onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" class="glyphicon glyphicon-tag"></span>';
                }
              }
                                rows +=  '</span>';

            rows +=  '<div>';



              label = deSanitizeLabel(label);
              var labelLink = (datatype=='uri') ? ''+buildTitle(value)+' onclick="javascript:describe(\''+value+'\');"' : '';
              rows +=  '<h6 class="text-ellipsis m-0" '+labelLink+'>';
              rows+=label;
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
          rows += '<i '+buildTitle('acts as \''+propLabel+'\' of these things')+' class="expand la la-bars" onclick="javascript:expand(\''+value+'\', \''+datatype+'\', \''+lang+'\', \''+toJSONString(opts)+'\')"></i>';
              }
             // rows += '</td></tr>';

rows+='</h6>';
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
        sub.addClass('m-0');
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
      getFocus(q).find('view').attr('offset', 0);
      getMainFocus().find('view').attr('offset', 0);
      page = 0;
      //pageTable = 0;
    }

    $('#groupByHeader').addClass('loading');
    $('#groupByTableHeader').addClass('loading');
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

function hideAlignButton(){
      $('#alignButton').addClass('disabled');
      $('#alignButton').attr('disabled', 'true');
      $('#alignButton').unbind('click');
}

function loadCategoriesResults(xml){
      $('#'+ID_SHOW_ME+'').empty();
      $('#angular_showMeList').empty();

      var reverse = getMainFocus().prop('nodeName');
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

if(true){



          //console.log('test parent: ' + getMainFocus().parent(reverse + '[iri='+getMainFocus().attr('iri')+']').parent().attr('class'));
          var align = getMainFocus().parent(reverse + '[iri='+getMainFocus().attr('iri')+']').parent().children('class[iri=\''+uri+'\']');
          var facet = getMainFocus().children('class[iri=\''+uri+'\']');
          if((!facet || facet.length) <= 0 && getMainFocus().children('value') && getMainFocus().children('value').length > 0) facet = align;
          var checked = (facet && facet.length > 0) ? ' checked="checked"': '';
          var focusTarget = (getMainFocus().attr('class') == ID_QUERY+"") ? 'focusHeader' : 'focusValue';
          var focusTargetClass = (getMainFocus().attr('class') == ID_QUERY+"") ? 'queryFocus' : 'queryFocusValue';
          //rows += '<tr  id="rw'+id+'" onmouseover="javascript:showControls(\''+id+'\')" onmouseout="javascript:hideControls(\''+id+'\')"><td class="up" id="'+opts.parentId+'">';

          rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-'+badgeColor+'" onmouseover="javascript:$(\'#'+focusTarget+'\').addClass(\''+focusTargetClass+'\')" onmouseout="javascript:$(\'#'+focusTarget+'\').removeClass(\''+focusTargetClass+'\')" onclick="javascript: addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</span>';
//          rows += '<a class="count" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</a>&nbsp;-&nbsp;';
          //rows += '<a title="'+uri+'" onclick="javascript:describe(\''+uri+'\');">'+ spaceCamelCase(label) +'</a>&nbsp;';
                                rows +=  '</span>';
            rows +=  '<div>';
          rows +=  '<h6 class="text-ellipsis m-0" onclick="javascript:describe(\''+uri+'\');">';
          rows += label;
              //rows +=  '<p class="help-block text-ellipsis m-0"></p>';

          //rows += '</td><td id="ctrl'+id+'" class="hideCtrl" style="white-space:nowrap; vertical-align:top;">';
          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+ckcolor+'">';
          rows += '<input class="form-check-input" id="ckbx'+id+'" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: if(!$(this).is(\':checked\')) {removeFacet(\''+facet.attr('class')+'\')}else{addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')}" />&nbsp;';
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';
          //rows += '<img title="view instances" class="count" onclick="javascript:expandShowMe(\''+uri+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
//          rows += '<a title="view instances" class="count" onclick="javascript:expandShowMe(\''+uri+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')">&nbsp;<img width="16" height="16"/></a>';
          //rows += '</td></tr>';
          rows += '<i '+buildTitle('acts as \''+label+'\' field of these records')+' class="expand la la-bars" onclick="javascript:expandShowMe(\''+uri+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"></i>';

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
          propLabel = processLabel(propLabel, propIRI, datatype, undefined);
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


          var facet = _root.find('.' + getMainFocus().attr('class') + ' > property[iri=\''+opts.propIRI+'\']');
          var checked = (facet && facet.length > 0) ? ' checked="checked"': '';
          //rows += '<tr id="'+id+'" onmouseover="javascript:showControls(\''+id+'\')" onmouseout="javascript:hideControls(\''+id+'\')"><td class="up" id="'+opts.parentId+'"><span id="'+id+'">';
          //var propIRI = $('#groupByMenu :selected').attr('value');
          //var propLabel = $('#groupByMenu :selected').text();
          rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-'+badgeColor+'" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\');">'+ct+'</span>';
                                rows +=  '</span>';
            rows +=  '<div>';
//          rows += '<a class="count" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\');">'+ct+'</a>&nbsp;-&nbsp;';
//          if(datatype=='uri') {
          rows +=  '<h6 class="text-ellipsis m-0" '+buildTitle(propIRI)+' onclick="javascript:describe(\''+propIRI+'\');">';
            //rows += '<a title="'+propIRI+'" onclick="javascript:describe(\''+propIRI+'\');">';
            rows += propLabel;
            //rows += '</a>&nbsp;';
//          }
          //rows += '</span></td><td id="ctrl'+id+'" style="white-space:nowrap; vertical-align:top;">';          
          if(propIRI != GROUP_BY_NONE_VALUE){
          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+ckcolor+'">';
          rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: if(!$(this).is(\':checked\')) {removeFacet(\''+facet.attr('class')+'\')}else{addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\');}" />&nbsp;';
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';
              //rows += '<img title="view values" class="count" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
          rows += '<i title="view values" class="expand la la-bars" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"></i>';
//              rows += '<a title="view values" class="count" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')">&nbsp;<img width="16" height="16"/></a>&nbsp;';
          if((facet && facet.length > 0))rows += '<i '+buildTitle('group the record list by \''+propLabel+'\'')+' class="group la la-compress" onclick="javascript:doGroup(\''+propIRI+'\', \''+propLabel+'\')" ></i>';
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
 
          rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-'+badgeColor+'" onclick="javascript: addPropertyOfFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\')">'+ct+'</span>';
                                rows +=  '</span>';
            rows +=  '<div>';
          rows +=  '<h6 class="text-ellipsis m-0" '+buildTitle(propIRI)+' onclick="javascript:describe(\''+propIRI+'\');">';



            rows += propLabel;
          //rows += '</span></td><td id="ctrl'+id+'" class="hideCtrl" style="white-space:nowrap; vertical-align:top;">';          
          if(propIRI != GROUP_BY_NONE_VALUE){
          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+ckcolor+'">';
          rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: if(!$(this).is(\':checked\')) {removeFacet(\''+facet.attr('class')+'\')}else{addPropertyOfFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\');}"/>&nbsp;';
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';
          rows += '<i title="view values" class="expand la la-bars" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"></i>';
              //rows += '<img title="shows up in the \''+propLabel+'\' field of these records" class="count" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
          if((facet && facet.length > 0))rows += '<i '+buildTitle('group the record list by role: \''+propLabel+'\'')+' class="group la la-compress" onclick="javascript:doGroup(\''+propIRI+'\', \''+propLabel+'\', true)" ></i>';
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
                                    rows +=  '<i class="status status-bottom bg-success"></i>';
rows += '</span>';

var ckcolor = 'primary';



          /*else {
            if(datatype=='uri') rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="'+icon_file+'" width="16" height="16" /></a>&nbsp;';
            else rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/tag-512.png" width="16" height="16" /></a>&nbsp;';
          }*/
          // a property is always a uri datatype
          rows +=  '<h6 class="text-ellipsis m-0" '+buildTitle(graphIRI)+' onclick="javascript:describe(\''+graphIRI+'\');">';
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
      getFocus(q).find('view').attr('offset', 0);
      getMainFocus().find('view').attr('offset', 0);
      showMePage = 0;
    }
    
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

              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(value);
                  } 
              }


rows += '<tr><td>';
//rows +=  '<a class="list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';
if(datatype == 'uri'){
                  rows += '<img style="cursor:pointer" onclick="javascript: remove(\''+_root.find('.' + getMainFocus().attr('class') + ' > [iri=\''+opts.propIRI+'\']').attr('class')+'\'); setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\'); takeMainFocus(\''+opts.contextId+'\')" src="'+getFaviconUrl(value)+'">';
                                    rows +=  '<i class="status status-bottom bg-success"></i>';
}
                else {
                  rows += '<span style="cursor:pointer" onclick="javascript: remove(\''+_root.find('.' + getMainFocus().attr('class') + ' > [iri=\''+opts.propIRI+'\']').attr('class')+'\'); setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" class="glyphicon glyphicon-tag"></span>';
                }
rows += '</span>';
//rows += '</a>';

var link = '';
if(datatype=='uri') link = 'style="cursor:pointer" onclick="javascript:describe(\''+value+'\');"';

          rows +=  '<h6 '+buildTitle(value)+' '+link+'>'+label

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

              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(value);
                  } 
              }


rows += '<tr><td>';
//rows +=  '<a class="list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';

                  rows += '<img style="cursor:pointer" onclick="javascript:setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY_OF+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\'); takeMainFocus(\''+opts.contextId+'\')" src="'+getFaviconUrl(value)+'">';
                                    rows +=  '<i class="status status-bottom bg-success"></i>';
rows += '</span>';
//rows += '</a>';

          rows +=  '<h6 style="cursor:pointer" '+buildTitle(value)+' onclick="javascript:describe(\''+value+'\');">'+label;


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


              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(value);
                  } 
              }


          var focusTarget = 'focusValue';
          var focusTargetClass = 'queryFocusValue';

rows += '<tr><td>';
//rows +=  '<a class="list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';

                  rows += '<img style="cursor:pointer" onmouseover="javascript:$(\'#'+focusTarget+'\').addClass(\''+focusTargetClass+'\')" onmouseout="javascript:$(\'#'+focusTarget+'\').removeClass(\''+focusTargetClass+'\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" src="'+getFaviconUrl(value)+'">';
                                    rows +=  '<i class="status status-bottom bg-success"></i>';
rows += '</span>';
//rows += '</a>';

          rows +=  '<h6 style="cursor:pointer" '+buildTitle(value)+' onclick="javascript:describe(\''+value+'\');">'+label+'</h6>';
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
    $('#describe').on('load', function () {
        $('#describePanel').removeClass('loadingDescribe');
    });
});

function describe(src){
    src = deSanitizeLabel(src);
    //$('#describePanel').addClass('loadingDescribe');
    $('#describe').attr('src', src);
    //$('#recordLabel').val(label);

    //var win = window.open(src, twin, 'width="'+window.outerWidth+'" height="'+window.outerHeight+'"');
    //win.blur();
    //this.window.focus();
}

function linkOut(){
    var src = $('.iframe').attr('src');
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
          //console.log($(col[0]));

              if(!loadedUri) {
                  if(datatype === 'uri'){
                    loadedUri = true;
                    describe(value);
                  } 
              }

              var propIRI = $('#groupByMenu :selected').attr('value');
              var propLabel = $('#groupByMenu :selected').text();
              var contextId = $('#groupByMenu :selected').attr('id');

              var color = 'success';

rows += '<tr><td>';
//rows +=  '<a class="list-group-item" data-target="#">';
                                rows +=  '<span class="thumb-sm float-left mr">';

                if(datatype=='uri') {
                  rows += '<img style="cursor:pointer" onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:remove('+getMainFocus().attr('class')+', true);setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                    rows +=  '<i class="status status-bottom bg-'+color+'"></i>';
                }
                else {
                  rows += '<span style="cursor:pointer" onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:remove('+getMainFocus().attr('class')+', true);setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\', \''+lang+'\')" class="glyphicon glyphicon-tag"></span>';
                }

rows += '</span>';
//rows += '</a>';

          rows +=  '<h6  style="cursor:pointer" '+buildTitle(value)+' onclick="javascript:describe(\''+value+'\');">'+label+'</h6>';
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
      $(_root.find('.'+getMainFocus().attr('class') + ' > property')).each(function(i) {
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
      
      $(_root.find('.'+getMainFocus().attr('class') + ' > property-of')).each(function(i) {
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
        if(!val) {
          if(!cval) action = "remove";
          if(id == ID_QUERY) val = label;
          else{
              if(cval){
                val = cval;
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
        if(val != VALUE_ANON_NODE && cval != val) {
            // TODO: this label is due to a bug in Virtuoso, the filters aren't being applied, causing the query to conform to what this label says
            // bug submitted: https://github.com/openlink/virtuoso-opensource/issues/823
            //tooltip += ', where one of them is ' + val;
            tooltip += ' where the answer is ' + val; // the correct tooltip
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

          if(v.attr('datatype') == 'uri'){
              tooltip = 'the record for ' + val;
              desc = 'Record';
              if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
                desc += '@'+ getQueryGraphLabel();
              }
              else if(getQueryGraph() && getQueryGraph().length > 0) {
                desc += '@'+getQueryGraph();
              }
              if(getQueryText() && getQueryText().length){
                tooltip = tooltip + ' '+searchLabel+': \'' + getQueryText() + '\'';
              }
          }
          else if(val){
              tooltip = 'what records '+searchLabel+': ' + val;
              if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
                tooltip += ', in library: ' + getQueryGraphLabel();
                desc += '@'+ getQueryGraphLabel();
              }
              else if(getQueryGraph() && getQueryGraph().length > 0) {
                tooltip += ', in library: ' + getQueryGraph();
                desc += '@'+getQueryGraph();
              }
          }
          else {
              tooltip = 'any record';
              if(!cval) {
                  if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
                    tooltip += ', in library: ' + getQueryGraphLabel();
                    desc += '@'+ getQueryGraphLabel();
                  }
                  else if(getQueryGraph() && getQueryGraph().length > 0) {
                    tooltip += ', in library: ' + getQueryGraph();
                    desc += '@'+getQueryGraph();
                  }
                  else desc = LABEL_ROOT;
              }
              else {
                  if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
                    tooltip += ', in library: ' + getQueryGraphLabel();
                    desc += '@'+ getQueryGraphLabel();
                  }
                  else if(getQueryGraph() && getQueryGraph().length > 0) {
                    tooltip += ', in library: ' + getQueryGraph();
                    desc += '@'+getQueryGraph();
                  }
              }
          }
            if(cval){

                tooltip += ', and each of them is';

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
        }
        if( (v.attr('datatype') != 'uri' && (!v.attr('iri') || v.attr('iri').length <= 0)) && ( !cval || id == ID_QUERY)){
              if(val.length > 0 && val != VALUE_ANON_NODE) val = '\'' + val + '\'';
        }

        // update root
        getQuery().attr('label', desc);

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

          ret = '<li '+buildTitle(tooltip)+' class="breadcrumb-item'+focusClass+'" id="nav'+id+'"><a ><em onmouseover="mouseOverFacet(\''+id+'\', \''+bcOutline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onmouseout="mouseOutFacet(\''+id+'\', \''+bcOutline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onclick="javascript:'+action+'(\''+id+'\')" class="text-ellipsis">'+desc+of+((isPropOf)?'&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>':'')+'</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-'+bcOutline+' btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></li>';


        }
        else if(nav_type == NAV_TYPE_3){
          if(bcFacetType == BC_FACET_TYPE_FACET) {
            ret = '<div style="padding: 0px; background-color:transparent;" class="row" '+buildTitle(tooltip)+' id="nav'+id+'" '+focus+'><div style="display:inline; padding:0px;" class="text-ellipsis'+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'"><h6 style="vertical-align:bottom;margin-bottom:0px">&nbsp;<span onclick="javascript:'+action+'(\''+id+'\')" class="via" onmouseover="mouseOverFacet(\''+id+'\', \''+outline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onmouseout="mouseOutFacet(\''+id+'\', \''+outline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')">' + ''+desc+of+((isPropOf)?'&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>':'')+((len > 0) ? '</span>&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">'+len+'</span>' : '')+'</h6></div><button class="btn-rounded-f btn btn-'+outline+' btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></div>';
          }
          else if(bcFacetType == BC_FACET_TYPE_FOCUS) {
            ret = '<div style="padding: 0px; background-color:transparent;" class="row" '+buildTitle(tooltip)+' id="nav'+id+'" '+focus+'><div onclick="javascript:'+action+'(\''+id+'\')" class="via text-ellipsis'+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'" onmouseover="mouseOverFacet(\''+id+'\', \''+outline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onmouseout="mouseOutFacet(\''+id+'\', \''+outline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')"><h3 class="fw-semi-bold" style="padding-bottom:4px" >'+desc+of+((isPropOf)?'&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>':'')+'</h3></div><button id="focusValue" class="btn-rounded-f btn btn-'+outline+' btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></div>';
          }
          else { // isBreadCrumb
            //ret = '<li class="breadcrumb-item"><div class="row" style="background-color:transparent;" title="'+tooltip+'" id="nav'+id+'" '+focus+'><div onclick="javascript:'+action+'(\''+id+'\')" class="via text-ellipsis'+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'"><h6>' + ''+desc+'</h6></div><button class="btn-rounded-f  btn btn-'+outline+'default btn-block btn-xs text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></div></li>';
    ret = '<li '+buildTitle(tooltip)+' class="breadcrumb-item" id="nav'+id+'"><a><em onmouseover="mouseOverFacet(\''+id+'\', \''+bcOutline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onmouseout="mouseOutFacet(\''+id+'\', \''+bcOutline+'\', \''+bcOutlineRemove+'\', '+isEmptyValue+')" onclick="javascript:'+action+'(\''+id+'\')" class="text-ellipsis">'+desc+of+((isPropOf)?'&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>':'')+'</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-'+bcOutline+' btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></li>';
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
  $('#nav'+id).find('button').removeClass('btn-'+decorateBtn);
  $('#nav'+id).find('button').addClass('btn-'+remove + 'danger');
  //console.log('btn-'+decorateBtn + ', '+ 'btn-'+remove + 'danger')
  if(!isEmptyValue) $('#nav'+id).find('button').addClass('removeFacetValue');
}

function mouseOutFacet(id, decorateBtn, remove, isEmptyValue){
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
