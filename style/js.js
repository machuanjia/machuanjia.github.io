/**
 * Created by yanshi0429 on 15/6/18.
 */
$(document).ready(function(){
    var entitys = [{
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
        time:'8/19 2015',
        title:'arithmetic',
        body:'arithmetic',
        footer:'Skill: js',
        content:'<a href="arithmetic/index.html" target="_blank"><img class="img-responsive" src="style/images/arithmetic.gif"/></a>'
    },{
        time:'8/14 2015',
        title:'BOOTSTRAP MARKDOWN',
        body:'BOOTSTRAP MARKDOWN',
        footer:'Skill: BOOTSTRAP MARKDOWN',
        content:'<a href="markdown/bootstrap-markdown-master/index.html" target="_blank"><img class="img-responsive" src="style/images/bootstrap-markdown.jpg"/></a>'
    },{
        time:'8/13 2015',
        title:'TITA',
        body:'TITA is the index page of beisen.',
        footer:'Skill: css3',
        content:'<a href="animation/a6.html" target="_blank"><img class="img-responsive" src="style/images/tita.jpg"/></a>'
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
        content:'<a href="mfish/index.html" target="_blank"><img class="img-responsive" src="style/images/mfish.jpg"/></a>'
    },{
        time:'7/5 2015',
        title:'LESSCHAT_INDEX',
        body:'LESSCHAT_INDEX is the index page of lesschat.',
        footer:'Skill: css3、js',
        content:'<a href="https://lesschat.com" target="_blank"><img class="img-responsive" src="style/images/lesschat.jpg"/></a>'
    },{
        time:'6/25 2015',
        title:'CSS3-LESSCHAT',
        body:'CSS3-LESSCHAT is the worker for time.',
        footer:'Skill: css3、js',
        content:'<a href="animation/lesschat/index.html" target="_blank"><img class="img-responsive" src="style/images/date_count_down.jpg"/></a><a href="animation/lesschat.html" target="_blank"><img class="img-responsive" src="style/images/animation_lesschat.jpg"/></a>'
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
        content:'<a href="animation/Animation.pptx" target="_blank"><img class="img-responsive" src="style/images/animation0.jpg"/></a>' +
        '<a href="animation/a3.html" target="_blank"><img class="img-responsive" src="style/images/animation1.jpg"/></a>' +
        '<a href="animation/a4.html" target="_blank"><img class="img-responsive" src="style/images/animation2.jpg"/></a>' +
        '<a href="animation/a1.html" target="_blank"><img class="img-responsive" src="style/images/animation3.jpg"/></a>' +
        '<a href="animation/a2.html" target="_blank"><img class="img-responsive" src="style/images/animation4.jpg"/></a>' +
        '<a href="animation/a5.html" target="_blank"><img class="img-responsive" src="style/images/animation5.jpg"/></a>'
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
        content:'<a href="seeyonmobileui/index.html" target="_blank"><img class="img-responsive" src="style/images/seeyonmobile.jpg"/></a>'
    },{
        time:'9/12 2013',
        title:'Seeyon-UI-HTML5',
        body:'Seeyon-UI-HTML5 is the development study for seeyon.',
        footer:'Skill: html5、css3',
        content:'<a href="seeyonui/html5/index.html" target="_blank"><img class="img-responsive" src="style/images/html5.png"/></a>'
    },{
        time:'7/06 2013',
        title:'Seeyon-UI',
        body:'Seeyon-UI is the development guider for seeyon.',
        footer:'Skill: jquery、html5、css3、js',
        content:'<a href="seeyonui/v2.0/index.html" target="_blank"><img class="img-responsive" src="style/images/seeyonui.jpg"/></a>'
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