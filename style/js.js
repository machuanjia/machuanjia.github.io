/**
 * Created by yanshi0429 on 15/6/18.
 */
$(document).ready(function(){
    var entitys = [{
        time:'15/9 2017',
        title:'react',
        body:'react',
        type:'video',
        src:'rn.mov',
        footer:'Skill: react react-native es6',
        content:'<a href="https://github.com/machuanjia/rn" target="_blank"><h3>源码戳这里</h3></a>'
    },{
        time:'8/9 2017',
        title:'target map',
        body:'target map',
        footer:'Skill: svg angularjs less',
        content:'<a href="https://github.com/machuanjia/angular-target-map" target="_blank"><h3>target map</h3></a><a href="https://atweb.worktile.com/okr/map" target="_blank">worktile target map</a>'
    },{
        time:'5/9 2017',
        title:'calendar helper',
        body:'calendar helper',
        footer:'Skill: svg angularjs less',
        content:'<a href="https://atweb.worktile.com/calendar/my" target="_blank"><h3>calendar helper</h3></a>'
    },{
        time:'12/15 2016',
        title:'zhengze',
        body:'zhengze',
        footer:'Skill: zhengze',
        content:'<a href="https://machuanjia.github.io/zhengze/" target="_blank"><h3>zhengze</h3></a>'
    },{
        time:'10/23 2016',
        title:'css loading',
        body:'css loading',
        footer:'Skill: css3',
        content:'<a href="https://machuanjia.github.io/timma-h5/" target="_blank"><h3>css loading</h3></a>'
    },{
        //
        time:'8/20 2016',
        title:'freewall sort',
        body:'freewall sort',
        footer:'Skill: freewall angularjs',
        content:'<a href="https://github.com/machuanjia/freewall-sort/blob/master/freewall" target="_blank"><h3>freewall sort</h3></a>'
    },{
        time:'7/20 2016',
        title:'jedate',
        body:'jedate',
        footer:'Skill: jedate',
        content:'<a href="http://www.jayui.com/uidoc/jedate.html" target="_blank"><h3>jedate</h3></a>'
    },{
        time:'5/6 2016',
        title:'angular-gantt-svg',
        body:'angular-gantt-svg',
        footer:'Skill: angular svg js less gulp',
        content:'<a href="https://github.com/machuanjia/angular-gantt-svg" target="_blank"><h3>angular-gantt-svg</h3></a>'
    },{
        time:'3/10 2016',
        title:'h5-mobile',
        body:'h5-mobile',
        footer:'Skill: css html mobile zpeto',
        content:'<a href="https://machuanjia.github.io/h5-mobile/#&pageHome" target="_blank"><h3>h5-mobile</h3></a>'
    },{
        time:'10/20 2015',
        title:'flex',
        body:'flex',
        footer:'Skill: css less',
        content:'<a href="https://github.com/machuanjia/timma-flex" target="_blank"><h3>flex</h3></a>'
    },{
        time:'9/22 2015',
        title:'upload-file',
        body:'upload-file',
        footer:'Skill: js css doc',//webstromspace/myapp/kindergarten/
        content:'<a href="https://github.com/danialfarid/ng-file-upload" target="_blank"><h3>upload-file</h3></a>'
    },{
        time:'9/8 2015',
        title:'mkdocs',
        body:'mkdocs',
        footer:'Skill: js css doc',
        content:'<a href="docs/site/index.html" target="_blank"><img class="img-responsive" src="style/images/docs.png"/></a>'
    },{
        time:'9/7 2015',
        title:'mkdocs',
        body:'mkdocs',
        footer:'Skill: js css doc',
        content:'<a href="guide/site/index.html" target="_blank"><img class="img-responsive" src="style/images/guide.png"/></a>'
    },{
        time:'8/14 2015',
        title:'ANGULAR-WT-EDITOR',
        body:'ANGULAR-WT-EDITOR',
        footer:'Skill:MARKDOWN',
        content:'<a href="https://github.com/WorktileTech/angular-wt-editor" target="_blank"><img class="img-responsive" src="style/images/bootstrap-markdown.jpg"/></a>'
    },{
        time:'8/13 2015',
        title:'TITA',
        body:'TITA is the index page of beisen.',
        footer:'Skill: css3',
        content:'<a href="https://machuanjia.github.io/timma-animation/a6.html" target="_blank"><img class="img-responsive" src="style/images/tita.jpg"/></a>'
    },{
        time:'8/11 2015',
        title:'THREEJS',
        body:'THREEJS is webgl frame of js.',
        footer:'Skill: js',
        content:'<a href="mrdoob-three.js/examples/canvas_geometry_earth.html" target="_blank"><img class="img-responsive" src="style/images/threejs.png"/></a>'
    },{
        time:'8/10 2015',
        title:'Regular Expression',
        body:'Regular Expression',
        footer:'Skill: Regular Expression',
        content:'<a href="zhengze/index.html" target="_blank"><img class="img-responsive" src="style/images/zhengze.png"/></a>'
    },{
        time:'7/13 2015',
        title:'MFISH',
        body:'MFISH is website.',
        footer:'Skill: css3、js',
        content:'<a href="https://machuanjia.github.io/timma-mfish/index.html" target="_blank"><img class="img-responsive" src="style/images/mfish.jpg"/></a>'
    },{
        time:'7/5 2015',
        title:'LESSCHAT_INDEX',
        body:'LESSCHAT_INDEX is the index page of lesschat.',
        footer:'Skill: css3、js',
        content:'<a href="https://worktile.com" target="_blank"><img class="img-responsive" src="style/images/lesschat.jpg"/></a>'
    },{
        time:'6/25 2015',
        title:'CSS3-LESSCHAT',
        body:'CSS3-LESSCHAT is the worker for time.',
        footer:'Skill: css3、js',
        content:'<a href="https://machuanjia.github.io/timma-animation/lesschat/index.html" target="_blank"><img class="img-responsive" src="style/images/date_count_down.jpg"/></a><a href="animation/lesschat.html" target="_blank"><img class="img-responsive" src="style/images/animation_lesschat.jpg"/></a>'
    },{
        time:'6/24 2015',
        title:'IMG-SHOW',
        body:'IMG-SHOW is the images carousel js .',
        footer:'Skill: js',
        content:'<a href="animation-img/edit/index.html" target="_blank"><img class="img-responsive" src="style/images/animation-img.png"/></a>'
    },{
        time:'6/10 2015',
        title:'CSS3-ANIMATION',
        body:'CSS3-ANIMATION is the skill share for worktiles.',
        footer:'Skill: css3',
        content:'<a href="https://machuanjia.github.io/timma-animation/Animation.pptx" target="_blank"><img class="img-responsive" src="style/images/animation0.jpg"/></a>' +
        '<a href="https://machuanjia.github.io/timma-animation/a3.html" target="_blank"><img class="img-responsive" src="style/images/animation1.jpg"/></a>' +
        '<a href="https://machuanjia.github.io/timma-animation/a4.html" target="_blank"><img class="img-responsive" src="style/images/animation2.jpg"/></a>' +
        '<a href="https://machuanjia.github.io/timma-animation/a1.html" target="_blank"><img class="img-responsive" src="style/images/animation3.jpg"/></a>' +
        '<a href="https://machuanjia.github.io/timma-animation/a2.html" target="_blank"><img class="img-responsive" src="style/images/animation4.jpg"/></a>' +
        '<a href="https://machuanjia.github.io/timma-animation/a5.html" target="_blank"><img class="img-responsive" src="style/images/animation5.jpg"/></a>'
    },{
        time:'6/18 2015',
        title:'YC-UI',
        body:'YC-UI is the development specification for worktile.',
        footer:'Skill: nodejs、html5、css3、mongodb',
        content:'<a href="wtcodestyle/index.html" target="_blank"><img class="img-responsive" src="style/images/yc.jpg"/></a>'
    },{
        time:'5/28 2015',
        title:'WORKTILE-OPEN-API',
        body:'WORKTILE-OPEN-API is the index page for worktile open api.',
        footer:'Skill: nodejs、html5、css3',
        content:'<a href="https://open.worktile.com/" target="_blank"><img class="img-responsive" src="style/images/openapi.jpg"/></a>'
    },{
        time:'5/06 2015',
        title:'WORKTILE-V4-INDEX',
        body:'WORKTILE-V4-INDEX is the index page for worktile v4.',
        footer:'Skill: nodejs、html5、css3',
        content:'<a href="https://new.worktile.com/" target="_blank"><img class="img-responsive" src="style/images/v4-index.jpg"/></a>'
    },{
        time:'9/06 2014',
        title:'Seeyon-UI-MOBILE',
        body:'Seeyon-UI-MOBILE is the development specification for seeyon.',
        footer:'Skill: jquery-mobile、html5、css3',
        content:'<a href="https://machuanjia.github.io/timma-seeyonui-mobile/index.html" target="_blank"><img class="img-responsive" src="style/images/seeyonmobile.jpg"/></a>'
    },{
        time:'9/12 2013',
        title:'Seeyon-UI-HTML5',
        body:'Seeyon-UI-HTML5 is the development study for seeyon.',
        footer:'Skill: html5、css3',
        content:'<a href="https://machuanjia.github.io/timma-seeyonui/html5/demo/api_geolocation.html" target="_blank"><img class="img-responsive" src="style/images/html5.png"/></a>'
    },{
        time:'7/06 2013',
        title:'Seeyon-UI',
        body:'Seeyon-UI is the development guider for seeyon.',
        footer:'Skill: jquery、html5、css3、js',
        content:'<a href="https://machuanjia.github.io/timma-seeyonui/V2.0/index.html" target="_blank"><img class="img-responsive" src="style/images/seeyonui.jpg"/></a>'
    }];
    var _str = "";
    var _content = "";
    if(entitys.length>0){
        _str+='<div class="line"></div>';
    }
    $(entitys).each(function(index,item){
        _str+='<span class="ball ball'+index+'"></span>';
        _str+='<div class="entity" index="'+index+'">';
            _str+='<div class="header">';
                _str+='<div class="time">'+item.time+'</div>';
                _str+='<div class="title">'+item.title+'</div>';
            _str+='</div>';
            _str+='<div class="body">';
                _str+=item.body;
            _str+='</div>';
            _str+='<div class="footer">';
                _str+='<p>'+item.footer+'</p>';
            _str+='</div>';

            _str+='<div class="content">';
            _str+=(item.content?item.content:item.title)
            if(item.type === 'video'){
                _str+='<video src="style/images/'+item.src+'" width="500" height="600" controls autobuffer></video>';
            }

            _str+='</div>';
        _str+='</div>';

    });
    $('#center').append(_str);
    $('.entity').each(function(){
        var _obj = $(this);
        var _objoff = _obj.offset();
        var _index = _obj.attr('index');
        $('.ball'+_index).css({
            top:_objoff.top+3
        });
        _obj.click(function(){
            $('#right').empty();
            _obj.find('.content').clone().appendTo($('#right'));
        });
    });
    $('.line').height(entitys.length*300-40);

    $('#right').html(entitys[0].content);

});