(function (win, $) {
    'use strict';

    var ctr = {};
    ctr.prototype = ctr;
    ctr.config = {
        feed_turn_on      : true,
        wohoo_show_version: 331,
        debug             : function () {
            if (wt.env === 'dev' && !ctr.util.isIE()) {
                if (typeof(win.console) === 'object') {
                    return true;
                }
            }
            return false;
        },
        prefixed          : 'wt',
        lang              : 'zh-cn',
        default_pos       : 65535,
        default_count     : 20,
        googleAnalytics   : 'UA-42366759-1',
        box_url           : function () {
            if (wt.env === 'dev') {
                return 'http://worktile.me:8086/';
                // return 'http://w.gaige383.com/';
            } else {
                return 'https://box.worktile.com/';
            }
        },
        feed_url          : function () {
            if (wt.env === 'dev') {
                return 'http://42.121.64.136:5280/http-bind';
            } else {
                return 'https://feed.worktile.com/http-bind';
            }
        },
        box_url_regex     : function () {
            if (wt.env === 'dev') {
                return new RegExp('^http\://worktile\.me:8086/(.*)$');
            } else {
                return new RegExp('^https\://box\.worktile\.com/(.*)$');
            }
        },
        default_team_pic  : '/img/logo.png',
        default_avatar    : '/img/default_avatar.png',
        default_box       : '',
        default_project_bg: '',
        default_nopic     : '/img/bg/nopic.png',
        wtbox_url         : 'https://wt-thumb.oss.aliyuncs.com/', //'http://box.worktile.com/',
        wtlogo_url        : 'https://wt-team.oss.aliyuncs.com/', //'http://box-logo.worktile.com/',
        wtavatar_url      : 'https://wt-avatars.oss.aliyuncs.com/', //'http://box-avatar.worktile.com/',
        wtall_url         : 'https://wt-all.oss.aliyuncs.com/',
        wtprj_url         : 'https://wt-prj.oss.aliyuncs.com/',
        desk_notify_key   : 'my_desk_notice',
        root_url          : 'https://worktile.com',
        colors            : {
            completed  : '#88b244',
            uncompleted: '#f7af49',
            expired    : '#f47a55',
            archived   : '#9fc6e7',
            created    : '#9fe1e7'
        }
    };


    ctr.calcHeight = function () {
        var headerNavHeight = $('#header').outerHeight(true);
        var modNavHeight = $('.mod-navbar').outerHeight(true);

        //HTZ:move to css
        //全高：#wrap-all
        //$('.height-full').height(ctr.util.winHeight());
        //除去头部：#main
        //$('.height-noheader').height(ctr.util.winHeight() - headerNavHeight);
        //除去导航头部：#layout_leftcenterright
        //$('.height-nonav').height(ctr.util.winHeight() - headerNavHeight - modNavHeight - 1);
        //$('.height-main-min').css('minHeight', ctr.util.winHeight() - headerNavHeight - modNavHeight);
        //$.each($('.height-nonav'), function (index, el) {
        //    if ($(el).hasClass('leftpanel')) {
        //        if (parseInt($(el).css('height'), 10) < $(el).children().height()) {
        //            $(el).addClass('height-scroll');
        //        } else {
        //            $(el).removeClass('height-scroll');
        //        }
        //    }
        //});
        $('[data-minheight]').each(function () {
            var minHeight = parseInt(ctr.util.winHeight() - $(this).data('minheight'), 10);
            $(this).css('minHeight', minHeight);
        });
        $('[data-maxheight]').each(function () {
            var maxHeight = parseInt(ctr.util.winHeight() - $(this).attr('data-maxheight'), 10);
            $(this).css('maxHeight', maxHeight);
        });
        $('[data-height]').each(function () {
            var exHeight = parseInt(ctr.util.winHeight() - $(this).attr('data-height'), 10);
            $(this).css('height', exHeight);
        });
    };

    ctr.emojis = [
        'bowtie', 'smile', 'laughing', 'blush', 'smiley', 'relaxed', 'smirk', 'heart_eyes', 'kissing_heart', 'kissing_closed_eyes', 'flushed', 'relieved', 'satisfied', 'grin', 'wink', 'stuck_out_tongue_winking_eye', 'stuck_out_tongue_closed_eyes', 'grinning', 'kissing', 'kissing_smiling_eyes', 'stuck_out_tongue', 'sleeping', 'worried', 'frowning', 'anguished', 'open_mouth', 'grimacing', 'confused', 'hushed', 'expressionless', 'unamused', 'sweat_smile', 'sweat', 'weary', 'pensive', 'disappointed', 'confounded', 'fearful', 'cold_sweat', 'persevere', 'joy', 'astonished', 'scream', 'neckbeard', 'tired_face', 'angry', 'rage', 'triumph', 'sleepy', 'yum', 'mask', 'sunglasses', 'dizzy_face', 'imp', 'smiling_imp', 'neutral_face', 'no_mouth', 'innocent', 'alien', 'yellow_heart', 'blue_heart', 'purple_heart', 'heart', 'green_heart', 'broken_heart', 'heartbeat', 'heartpulse', 'two_hearts', 'revolving_hearts', 'cupid', 'sparkling_heart', 'sparkles', 'star', 'star2', 'dizzy', 'boom', 'collision', 'anger', 'exclamation', 'question', 'grey_exclamation', 'grey_question', 'zzz', 'dash', 'sweat_drops', 'notes', 'musical_note', 'fire', 'hankey', 'poop', 'shit', '+1', 'thumbsup', '-1', 'thumbsdown', 'ok_hand', 'punch', 'facepunch', 'fist', 'v', 'wave', 'hand', 'raised_hand', 'open_hands', 'point_up', 'point_down', 'point_left', 'point_right', 'raised_hands', 'pray', 'point_up_2', 'clap', 'muscle', 'metal', 'walking', 'runner', 'running', 'couple', 'family', 'two_men_holding_hands', 'two_women_holding_hands', 'ok_woman', 'no_good', 'information_desk_person', 'bride_with_veil', 'person_with_pouting_face', 'person_frowning', 'bow', 'couplekiss', 'couple_with_heart', 'massage', 'haircut', 'nail_care', 'boy', 'girl', 'woman', 'man', 'baby', 'older_woman', 'older_man', 'person_with_blond_hair', 'man_with_gua_pi_mao', 'man_with_turban', 'construction_worker', 'cop', 'angel', 'princess', 'smiley_cat', 'smile_cat', 'heart_eyes_cat', 'kissing_cat', 'smirk_cat', 'scream_cat', 'crying_cat_face', 'joy_cat', 'pouting_cat', 'japanese_ogre', 'japanese_goblin', 'see_no_evil', 'hear_no_evil', 'speak_no_evil', 'guardsman', 'skull', 'feet', 'lips', 'kiss', 'droplet', 'ear', 'eyes', 'nose', 'tongue', 'love_letter', 'bust_in_silhouette', 'busts_in_silhouette', 'speech_balloon', 'thought_balloon', 'feelsgood', 'finnadie', 'goberserk', 'godmode', 'hurtrealbad', 'rage1', 'rage2', 'rage3', 'rage4', 'suspect', 'trollface', 'sunny', 'umbrella', 'cloud', 'snowflake', 'snowman', 'zap', 'cyclone', 'foggy', 'ocean', 'cat', 'dog', 'mouse', 'hamster', 'rabbit', 'wolf', 'frog', 'tiger', 'koala', 'bear', 'pig', 'pig_nose', 'cow', 'boar', 'monkey_face', 'monkey', 'horse', 'racehorse', 'camel', 'sheep', 'elephant', 'panda_face', 'snake', 'bird', 'baby_chick', 'hatched_chick', 'hatching_chick', 'chicken', 'penguin', 'turtle', 'bug', 'honeybee', 'ant', 'beetle', 'snail', 'octopus', 'tropical_fish', 'fish', 'whale', 'whale2', 'dolphin', 'cow2', 'ram', 'rat', 'water_buffalo', 'tiger2', 'rabbit2', 'dragon', 'goat', 'rooster', 'dog2', 'pig2', 'mouse2', 'ox', 'dragon_face', 'blowfish', 'crocodile', 'dromedary_camel', 'leopard', 'cat2', 'poodle', 'paw_prints', 'bouquet', 'cherry_blossom', 'tulip', 'four_leaf_clover', 'rose', 'sunflower', 'hibiscus', 'maple_leaf', 'leaves', 'fallen_leaf', 'herb', 'mushroom', 'cactus', 'palm_tree', 'evergreen_tree', 'deciduous_tree', 'chestnut', 'seedling', 'blossom', 'ear_of_rice', 'shell', 'globe_with_meridians', 'sun_with_face', 'full_moon_with_face', 'new_moon_with_face', 'new_moon', 'waxing_crescent_moon', 'first_quarter_moon', 'waxing_gibbous_moon', 'full_moon', 'waning_gibbous_moon', 'last_quarter_moon', 'waning_crescent_moon', 'last_quarter_moon_with_face', 'first_quarter_moon_with_face', 'moon', 'earth_africa', 'earth_americas', 'earth_asia', 'volcano', 'milky_way', 'partly_sunny', 'octocat', 'squirrel', 'bamboo', 'gift_heart', 'dolls', 'school_satchel', 'mortar_board', 'flags', 'fireworks', 'sparkler', 'wind_chime', 'rice_scene', 'jack_o_lantern', 'ghost', 'santa', 'christmas_tree', 'gift', 'bell', 'no_bell', 'tanabata_tree', 'tada', 'confetti_ball', 'balloon', 'crystal_ball', 'cd', 'dvd', 'floppy_disk', 'camera', 'video_camera', 'movie_camera', 'computer', 'tv', 'iphone', 'phone', 'telephone', 'telephone_receiver', 'pager', 'fax', 'minidisc', 'vhs', 'sound', 'speaker', 'mute', 'loudspeaker', 'mega', 'hourglass', 'hourglass_flowing_sand', 'alarm_clock', 'watch', 'radio', 'satellite', 'loop', 'mag', 'mag_right', 'unlock', 'lock', 'lock_with_ink_pen', 'closed_lock_with_key', 'key', 'bulb', 'flashlight', 'high_brightness', 'low_brightness', 'electric_plug', 'battery', 'calling', 'email', 'mailbox', 'postbox', 'bath', 'bathtub', 'shower', 'toilet', 'wrench', 'nut_and_bolt', 'hammer', 'seat', 'moneybag', 'yen', 'dollar', 'pound', 'euro', 'credit_card', 'money_with_wings', 'e-mail', 'inbox_tray', 'outbox_tray', 'envelope', 'incoming_envelope', 'postal_horn', 'mailbox_closed', 'mailbox_with_mail', 'mailbox_with_no_mail', 'door', 'smoking', 'bomb', 'gun', 'hocho', 'pill', 'syringe', 'page_facing_up', 'page_with_curl', 'bookmark_tabs', 'bar_chart', 'chart_with_upwards_trend', 'chart_with_downwards_trend', 'scroll', 'clipboard', 'calendar', 'date', 'card_index', 'file_folder', 'open_file_folder', 'scissors', 'pushpin', 'paperclip', 'black_nib', 'pencil2', 'straight_ruler', 'triangular_ruler', 'closed_book', 'green_book', 'blue_book', 'orange_book', 'notebook', 'notebook_with_decorative_cover', 'ledger', 'books', 'bookmark', 'name_badge', 'microscope', 'telescope', 'newspaper', 'football', 'basketball', 'soccer', 'baseball', 'tennis', '8ball', 'rugby_football', 'bowling', 'golf', 'mountain_bicyclist', 'bicyclist', 'horse_racing', 'snowboarder', 'swimmer', 'surfer', 'ski', 'spades', 'hearts', 'clubs', 'diamonds', 'gem', 'ring', 'trophy', 'musical_score', 'musical_keyboard', 'violin', 'space_invader', 'video_game', 'black_joker', 'flower_playing_cards', 'game_die', 'dart', 'mahjong', 'clapper', 'memo', 'pencil', 'book', 'art', 'microphone', 'headphones', 'trumpet', 'saxophone', 'guitar', 'shoe', 'sandal', 'high_heel', 'lipstick', 'boot', 'shirt', 'tshirt', 'necktie', 'womans_clothes', 'dress', 'running_shirt_with_sash', 'jeans', 'kimono', 'bikini', 'ribbon', 'tophat', 'crown', 'womans_hat', 'mans_shoe', 'closed_umbrella', 'briefcase', 'handbag', 'pouch', 'purse', 'eyeglasses', 'fishing_pole_and_fish', 'coffee', 'tea', 'sake', 'baby_bottle', 'beer', 'beers', 'cocktail', 'tropical_drink', 'wine_glass', 'fork_and_knife', 'pizza', 'hamburger', 'fries', 'poultry_leg', 'meat_on_bone', 'spaghetti', 'curry', 'fried_shrimp', 'bento', 'sushi', 'fish_cake', 'rice_ball', 'rice_cracker', 'rice', 'ramen', 'stew', 'oden', 'dango', 'egg', 'bread', 'doughnut', 'custard', 'icecream', 'ice_cream', 'shaved_ice', 'birthday', 'cake', 'cookie', 'chocolate_bar', 'candy', 'lollipop', 'honey_pot', 'apple', 'green_apple', 'tangerine', 'lemon', 'cherries', 'grapes', 'watermelon', 'strawberry', 'peach', 'melon', 'banana', 'pear', 'pineapple', 'sweet_potato', 'eggplant', 'tomato', 'corn', 'house', 'house_with_garden', 'school', 'office', 'post_office', 'hospital', 'bank', 'convenience_store', 'love_hotel', 'hotel', 'wedding', 'church', 'department_store', 'european_post_office', 'city_sunrise', 'city_sunset', 'japanese_castle', 'european_castle', 'tent', 'factory', 'tokyo_tower', 'japan', 'mount_fuji', 'sunrise_over_mountains', 'sunrise', 'stars', 'statue_of_liberty', 'bridge_at_night', 'carousel_horse', 'rainbow', 'ferris_wheel', 'fountain', 'roller_coaster', 'ship', 'speedboat', 'boat', 'sailboat', 'rowboat', 'anchor', 'rocket', 'airplane', 'helicopter', 'steam_locomotive', 'tram', 'mountain_railway', 'bike', 'aerial_tramway', 'suspension_railway', 'mountain_cableway', 'tractor', 'blue_car', 'oncoming_automobile', 'car', 'red_car', 'taxi', 'oncoming_taxi', 'articulated_lorry', 'bus', 'oncoming_bus', 'rotating_light', 'police_car', 'oncoming_police_car', 'fire_engine', 'ambulance', 'minibus', 'truck', 'train', 'station', 'train2', 'bullettrain_front', 'bullettrain_side', 'light_rail', 'monorail', 'railway_car', 'trolleybus', 'ticket', 'fuelpump', 'vertical_traffic_light', 'traffic_light', 'warning', 'construction', 'beginner', 'atm', 'slot_machine', 'busstop', 'barber', 'hotsprings', 'checkered_flag', 'crossed_flags', 'izakaya_lantern', 'moyai', 'circus_tent', 'performing_arts', 'round_pushpin', 'triangular_flag_on_post', 'jp', 'kr', 'cn', 'us', 'fr', 'es', 'it', 'ru', 'gb', 'uk', 'de', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'keycap_ten', '1234', 'zero', 'hash', 'symbols', 'arrow_backward', 'arrow_down', 'arrow_forward', 'arrow_left', 'capital_abcd', 'abcd', 'abc', 'arrow_lower_left', 'arrow_lower_right', 'arrow_right', 'arrow_up', 'arrow_upper_left', 'arrow_upper_right', 'arrow_double_down', 'arrow_double_up', 'arrow_down_small', 'arrow_heading_down', 'arrow_heading_up', 'leftwards_arrow_with_hook', 'arrow_right_hook', 'left_right_arrow', 'arrow_up_down', 'arrow_up_small', 'arrows_clockwise', 'arrows_counterclockwise', 'rewind', 'fast_forward', 'information_source', 'ok', 'twisted_rightwards_arrows', 'repeat', 'repeat_one', 'new', 'top', 'up', 'cool', 'free', 'ng', 'cinema', 'koko', 'signal_strength', 'u5272', 'u5408', 'u55b6', 'u6307', 'u6708', 'u6709', 'u6e80', 'u7121', 'u7533', 'u7a7a', 'u7981', 'sa', 'restroom', 'mens', 'womens', 'baby_symbol', 'no_smoking', 'parking', 'wheelchair', 'metro', 'baggage_claim', 'accept', 'wc', 'potable_water', 'put_litter_in_its_place', 'secret', 'congratulations', 'm', 'passport_control', 'left_luggage', 'customs', 'ideograph_advantage', 'cl', 'sos', 'id', 'no_entry_sign', 'underage', 'no_mobile_phones', 'do_not_litter', 'non-potable_water', 'no_bicycles', 'no_pedestrians', 'children_crossing', 'no_entry', 'eight_spoked_asterisk', 'eight_pointed_black_star', 'heart_decoration', 'vs', 'vibration_mode', 'mobile_phone_off', 'chart', 'currency_exchange', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpius', 'sagittarius', 'capricorn', 'aquarius', 'pisces', 'ophiuchus', 'six_pointed_star', 'negative_squared_cross_mark', 'a', 'b', 'ab', 'o2', 'diamond_shape_with_a_dot_inside', 'recycle', 'end', 'on', 'soon', 'clock1', 'clock130', 'clock10', 'clock1030', 'clock11', 'clock1130', 'clock12', 'clock1230', 'clock2', 'clock230', 'clock3', 'clock330', 'clock4', 'clock430', 'clock5', 'clock530', 'clock6', 'clock630', 'clock7', 'clock730', 'clock8', 'clock830', 'clock9', 'clock930', 'heavy_dollar_sign', 'copyright', 'registered', 'tm', 'x', 'heavy_exclamation_mark', 'bangbang', 'interrobang', 'o', 'heavy_multiplication_x', 'heavy_plus_sign', 'heavy_minus_sign', 'heavy_division_sign', 'white_flower', '100', 'heavy_check_mark', 'ballot_box_with_check', 'radio_button', 'link', 'curly_loop', 'wavy_dash', 'part_alternation_mark', 'trident', 'black_square', 'white_square', 'white_check_mark', 'black_square_button', 'white_square_button', 'black_circle', 'white_circle', 'red_circle', 'large_blue_circle', 'large_blue_diamond', 'large_orange_diamond', 'small_blue_diamond', 'small_orange_diamond', 'small_red_triangle', 'small_red_triangle_down', 'shipit'
    ];

    Date.prototype.format = function (fmt) { //author: meizz
        var o = {
            "y+": this.getFullYear(),
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S" : this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }

        return fmt;
    };

    ctr.util = {
        isIE           : function () {
            return !!win.ActiveXObject;
        },
        isIE6          : function () {
            return ctr.util.isIE() && !win.XMLHttpRequest;
        },
        isIE7          : function () {
            return ctr.util.isIE() && !ctr.util.isIE6() && !ctr.util.isIE8();
        },
        isIE8          : function () {
            return ctr.util.isIE() && !!document.documentMode;
        },
        winHeight      : function () {
            return $(win).height();
        },
        docWidth       : function () {
            return $(document).width();
        },
        docHeight      : function () {
            return $(document).height();// - parseInt($("body").css("padding-top"));
        },
        docOuterWidth  : function () {
            return $(document).outerWidth();
        },
        docOuterHeight : function () {
            return $(document).outerHeight();
        },
        headerNavHeight: function () {
            return $('#header').outerHeight(true);
        },
        modNavHeight   : function () {
            return $('.mod-navbar').outerHeight(true);
        },
        heightNoHeader : function () {
            return ctr.util.winHeight() - ctr.util.headerNavHeight();
        },
        heightNoNav    : function () {
            return ctr.util.winHeight() - ctr.util.headerNavHeight() - ctr.util.modNavHeight();
        },
        dateToTimestamp: function (input_datetime) {
            if (isNaN(input_datetime)) {
                return Date.parse(input_datetime);
            }
            return input_datetime;
        },
        isDate         : function (obj) {
            return (typeof obj == 'object') && obj.constructor == Date;
        },
        getWeekday     : function (sDate) {
            var a = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            if (ctr.util.isDate(sDate)) {
                return a[sDate.getDay()];
            } else {
                var dt = new Date(sDate);
                return a[dt.getDay()];
            }
        },
        datetimeToDTW  : function (input_datetime) {
            var now = moment();
            var inputDate = moment(input_datetime);
            var result = "";
            if (!now.isSame(inputDate, "year")) {
                result = inputDate.year() + "年 ";
            }
            if (now.isSame(inputDate, "day")) {
                result = result + inputDate.format("今天 ");
            } else {
                result = result + inputDate.format("MM月DD日 ");
            }
            result = result + inputDate.format("HH:mm ");
            result = result + ctr.util.getWeekday(inputDate);
            return result;
        }
    };

    ctr.helper = {
        build_file_icon: function (file) {
            var icon = kzi.constant.get_file_icon(file);

            if (icon === '-1') {
                icon = file.path;
            }

            return icon;
        },
        get_query      : function (name) {
            var LocString = String(win.document.location.href);
            var rs = new RegExp('(^|)' + name + '=([^\&]*)(\&|$)', 'gi').exec(LocString);

            if (rs && rs.length > 2) {
                return rs[2];
            }

            // parameter cannot be found
            return '';
        },
        substr         : function (str, length) {
            if (!str) {
                return '';
            }

            if (str.length <= length) {
                return str;
            }
            else {
                return str.substring(0, length - 1) + '...';
            }
        },
        padLeft        : function (str, lenght) {
            if (str.length >= lenght) {
                return str;
            }
            else {
                return ctr.helper.padLeft('0' + str, lenght);
            }
        },
        mouse_position : function (ev) {
            if (ev.pageX || ev.pageY) {
                return {x: ev.pageX, y: ev.pageY};
            } else {
                return {
                    x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
                    y: ev.clientY + document.body.scrollTop - document.body.clientTop
                };
            }
        }
    };

    ctr.validator = {
        isEmail: function (input) {
            var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return re.test(input);
        },
        isUrl  : function (input) {
            var re = /^(https?|s?ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-fA-F]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-fA-F]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-fA-F]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-fA-F]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-fA-F]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;
            return re.test(input);

        }
    };

    ctr.get_cookie = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    ctr.console = {
        log       : function (msg) {
            if (ctr.config.debug()) {
                console.log(msg);
                //return '------ CONSOLE END ------';
            }
        },
        time      : function (str) {
            if (ctr.config.debug()) {
                console.time(str);
            }
        },
        timeEnd   : function (str) {
            if (ctr.config.debug()) {
                console.timeEnd(str);
            }
        },
        group     : function (str) {
            if (ctr.config.debug()) {
                console.groupCollapsed(str);
            }
        },
        groupEnd  : function (str) {
            if (ctr.config.debug()) {
                console.groupEnd(str);
            }
        },
        profile   : function (str) {
            if (ctr.config.debug()) {
                console.profile(str);
            }
        },
        profileEnd: function (str) {
            if (ctr.config.debug()) {
                console.profile(str);
            }
        }
    };

    var _msg = function (type, msg, onClosed) {
        $('.notifications').notify({
            type    : type,
            message : {text: msg},
            onClosed: onClosed
        }).show();
    };
    ctr.msg = {
        info   : function (msg, onClosed) {
            _msg('info', msg, onClosed);
        },
        error  : function (msg, onClosed) {
            _msg('danger', msg, onClosed);
        },
        success: function (msg, onClosed) {
            _msg('success', msg, onClosed);
        },
        warn   : function (msg, onClosed) {
            _msg('warning', msg, onClosed);
        }
    };

    ctr.localData = {
        hname         : location.hostname ? location.hostname : 'localStatus',
        isLocalStorage: win.localStorage ? true : false,
        dataDom       : null,

        initDom  : function () { //初始化userData
            if (!this.dataDom) {
                try {
                    this.dataDom = document.createElement('input');//这里使用hidden的input元素
                    this.dataDom.type = 'hidden';
                    this.dataDom.style.display = "none";
                    this.dataDom.addBehavior('#default#userData');//这是userData的语法
                    document.body.appendChild(this.dataDom);
                    var exDate = new Date();
                    exDate = exDate.getDate() + 30;
                    this.dataDom.expires = exDate.toUTCString();//设定过期时间
                } catch (ex) {
                    return false;
                }
            }
            return true;
        },
        set      : function (key, value) {
            if (this.isLocalStorage) {
                win.localStorage.setItem(key, value);
            } else {
                if (this.initDom()) {
                    this.dataDom.load(this.hname);
                    this.dataDom.setAttribute(key, value);
                    this.dataDom.save(this.hname);
                }
            }
        },
        get      : function (key) {
            if (this.isLocalStorage) {
                return win.localStorage.getItem(key);
            } else {
                if (this.initDom()) {
                    this.dataDom.load(this.hname);
                    return this.dataDom.getAttribute(key);
                }
            }
        },
        setObject: function (key, _obj) {
            if (this.isLocalStorage) {
                return win.localStorage.setItem(key, JSON.stringify(_obj));
            } else {
                return null;
            }
        },
        getObject: function (key) {
            if (this.isLocalStorage) {
                try {
                    return JSON.parse(win.localStorage.getItem(key));
                } catch (err) {
                    return null;
                }
            } else {
                return null;
            }
        },
        remove   : function (key) {
            if (this.isLocalStorage) {
                localStorage.removeItem(key);
            } else {
                if (this.initDom()) {
                    this.dataDom.load(this.hname);
                    this.dataDom.removeAttribute(key);
                    this.dataDom.save(this.hname);
                }
            }
        }
    };

    ctr.activity_icon = {
        //project
        'project_create'   : 'ai-blue icon-folder-close',
        'project_update'   : 'ai-yellow icon-folder-close',
        'project_archive'  : 'ai-dark-blue icon-archive',
        'project_unarchive': 'ai-red icon-archive',
        'project_delete'   : 'ai-red icon-trash',

        //member
        'member_add'     : 'ai-green icon-user',
        'member_remove'  : 'ai-red icon-user',
        'member_join'    : 'ai-orange icon-user',
        //entry
        'entry_create'   : 'ai-blue icon-columns',
        'entry_update'   : 'ai-yellow icon-columns',
        'entry_archive'  : 'ai-dark-blue icon-archive',
        'entry_unarchive': 'ai-red icon-archive',
        'entry_delete'   : 'ai-red icon-trash',
        'entry_restore'  : 'ai-yellow icon-reply-all',
        'entry_move'     : 'ai-orange icon-share-alt',

        //task
        'task_create'      : 'ai-blue icon-check',
        'task_update'      : 'ai-yellow icon-check',
        'task_delete'      : 'ai-red icon-trash',
        'task_restore'     : 'ai-yellow icon-reply-all',
        'task_move'        : 'ai-orange icon-share-alt',
        'task_expire_set'  : 'ai-yellow icon-time',
        'task_expire_reset': 'ai-yellow icon-time',
        'task_complete'    : 'ai-green icon-check-sign',
        'task_uncomplete'  : 'ai-red icon-check-empty',
        'task_archive'     : 'ai-dark-blue icon-archive',
        'task_unarchive'   : 'ai-red icon-archive',

        //todo
        'todo_add'     : 'ai-blue icon-th-list',
        'todo_remove'  : 'ai-red icon-th-list',
        'todo_check'   : 'ai-green icon-check-sign',
        'todo_uncheck' : 'ai-red icon-check-empty',
        'todo_update'  : 'ai-yellow icon-th-list',
        //labels
        'labels_add'   : 'ai-green icon-tag',
        'labels_remove': 'ai-red icon-tag',

        //设置截止时间
//'date_expire_set'  : 'icon-time',
//'date_expire_reset': 'icon-time',

        //file
        'folder_add'      : 'ai-blue icon-folder-open-alt',
        'folder_update'   : 'ai-yellow icon-folder-open-alt',
        'folder_del'      : 'ai-red icon-folder-open-alt',
        'file_move'       : 'ai-orange icon-share-alt',
        'file_attach'     : 'ai-blue icon-paper-clip',
        'file_detach'     : 'ai-red icon-paper-clip',
        'file_upload'     : 'ai-blue icon-file',
        'file_update'     : 'ai-yellow icon-file',
        'file_new_version': 'ai-blue icon-upload-alt',
        'file_delete'     : 'ai-red icon-trash',
        'file_restore'    : 'ai-yellow icon-reply-all',

        //comment
        'comment_add'   : 'ai-blue icon-comment',
        'comment_remove': 'ai-red icon-comment',
        'watch_add'     : 'ai-purple icon-eye-open',
        'watch_remove'  : 'ai-red icon-eye-open',

        // post
        'post_create' : 'ai-blue icon-comments-alt',
        'post_update' : 'ai-yellow icon-comments-alt',
        'post_delete' : 'ai-red icon-trash',
        'post_restore': 'ai-yellow icon-reply-all',

        // page
        'page_create'     : 'ai-blue icon-file-text-alt',
        'page_update'     : 'ai-yellow icon-file-text-alt',
        'page_new_version': 'ai-blue icon-file-text-alt',
        'page_delete'     : 'ai-red icon-trash',
        'page_restore'    : 'ai-yellow icon-reply-all',

        // event
        'event_create'   : 'ai-blue icon-calendar',
        'event_update'   : 'ai-yellow icon-calendar',
        'event_delete'   : 'ai-red icon-trash',
        'attendee_add'   : 'ai-green icon-user',
        'attendee_remove': 'ai-red icon-user'
    };

    ctr.init_fancybox = function () {
        var fancybox_file_option = {
            padding    : 0,
            scrolling  : "auto",
            maxWidth   : '95%',
            wrapCSS    : 'fancybox-scroll',
            //height:"95%",
            //maxHeight  : '95%',
            openEffect : 'elastic',
            closeEffect: 'elastic',
            //prevEffect : 'fade',
            //nextEffect : 'fade',
            closeBtn   : false,
            beforeLoad : function () {
                if (_.isString(this.title)) {
                    this.title = filterXSS(this.title);
                    this.title = this.title.replace(/\n/g, '<br>');
                }
            },
            helpers    : {
                title  : {type: 'outside', position: 'top'},
                buttons: {
                    tpl: ['<div id="fancybox-buttons"><ul>',
                        '<li><a class="btnPrev" title="上一个" href="javascript:;"></a></li>',
                        '<li><a class="btnPlay" title="开始幻灯播放" href="javascript:;"></a></li>',
                        '<li><a class="btnNext" title="下一个" href="javascript:;"></a></li>',
                        '<li><a class="btnToggle" title="切换大小" href="javascript:;"></a></li>',
                        '<li><a class="btnClose" title="关闭" href="javascript:;"></a></li>',
                        '</ul></div>'].join('')
                },
                thumbs : {
                    width : 50,
                    height: 50
                },
                media  : {}
            },
            tpl        : {
                wrap    : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image   : '<img class="fancybox-image" src="{href}" alt="" />',
                iframe  : ['<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" ',
                    ' webkitAllowFullScreen mozallowfullscreen allowFullScreen',
                    ( ctr.util.isIE() ? ' allowtransparency="true"' : ''),
                    '></iframe>'].join(''),
                error   : '<p class="fancybox-error">内容加载失败.<br/>请稍后重试.</p>',
                closeBtn: '<a title="关闭" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next    : '<a title="下一个" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev    : '<a title="上一个" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            }

        };
        $(".fancybox-file").fancybox(fancybox_file_option);
    };
    var _init = function () {
        if($){
            $(document).ready(function () {
                ctr.calcHeight();
                ctr.init_fancybox();
            });
            $(window).load(function () {
                ctr.calcHeight();
            });

            setInterval(function () {
                kzi.calcHeight();
            }, 150);

            var lazyLayout = _.debounce(function () {
                kzi.calcHeight();
            }, 50);
            $(window).on('resize', lazyLayout);
        }

        if (!window.location.origin) {
            window.location.origin = window.location.protocol + '//' + window.location.host;
        }
    };
    _init();

    win.kzi = ctr;
})(window, window.jQuery || null);
