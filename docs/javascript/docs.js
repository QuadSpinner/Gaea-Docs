
// namespace
window.semantic = {
    handler: {}
};

// ready event
semantic.ready = function () {

    // selector cache
    var

        $swap = $('.theme.menu .item'),
        $menu = $('#toc'),

        $container = $('.main.container'),
        $allHeaders = $('.main.container > h2'),
        $sectionHeaders = $container.children('h2'),
        $followMenu = $container.find('.following.menu'),
        $sectionExample = $container.find('.example'),
        $exampleHeaders = $sectionExample.children('h4'),
        $footer = $('.page > .footer'),

        $menuPopup = $('.ui.main.menu .popup.item'),

        $pageTabs = $('.masthead.tab.segment .tabs.menu .item'),

        $languageDropdown = $('.language.dropdown'),

        $example = $('.example'),
        $visibilityExample = $example.filter('.visiblity').find('.overlay, .demo.segment, .items img'),

        // alias
        handler
        ;

    // event handlers
    handler = {

        createWaypoints: function () {
            $sectionHeaders
                .visibility({
                    observeChanges: false,
                    once: false,
                    offset: 50,
                    onTopPassed: handler.activate.section,
                    onTopPassedReverse: handler.activate.previous
                })
                ;

            $sectionExample
                .visibility({
                    observeChanges: false,
                    once: false,
                    offset: 50,
                    onTopPassed: handler.activate.example,
                    onBottomPassedReverse: handler.activate.example
                })
                ;
            $footer
                .visibility({
                    observeChanges: false,
                    once: false,
                    onBottomVisible: function (calculations) {
                        var
                            $title = $followMenu.find('> .item > .title').last()
                            ;
                        $followMenu
                            .accordion('open', $title)
                            ;
                    }
                })
                ;
        },

        activate: {
            previous: function () {
                var
                    $menuItems = $followMenu.children('.item'),
                    $section = $menuItems.filter('.active'),
                    index = $menuItems.index($section)
                    ;
                if ($section.prev().length > 0) {
                    $section
                        .removeClass('active')
                        .prev('.item')
                        .addClass('active')
                        ;
                    $followMenu
                        .accordion('open', index - 1)
                        ;
                }
            },
            accordion: function () {
                var
                    $section = $(this),
                    index = $sectionHeaders.index($section),
                    $followSection = $followMenu.children('.item'),
                    $activeSection = $followSection.eq(index)
                    ;
            },
            section: function () {
                var
                    $section = $(this),
                    index = $sectionHeaders.index($section),
                    $followSection = $followMenu.children('.item'),
                    $activeSection = $followSection.eq(index),
                    isActive = $activeSection.hasClass('active')
                    ;
                if (!isActive) {
                    $followSection.filter('.active')
                        .removeClass('active')
                        ;
                    $activeSection
                        .addClass('active')
                        ;
                    $followMenu
                        .accordion('open', index)
                        ;
                }
            },
            example: function () {
                var
                    $section = $(this).children('h4').eq(0),
                    index = $exampleHeaders.index($section),
                    $followSection = $followMenu.find('.menu > .item'),
                    $activeSection = $followSection.eq(index),
                    inClosedTab = ($(this).closest('.tab:not(.active)').length > 0),
                    anotherExample = ($(this).filter('.another.example').length > 0),
                    isActive = $activeSection.hasClass('active')
                    ;
                if (index !== -1 && !inClosedTab && !anotherExample && !isActive) {
                    $followSection.filter('.active')
                        .removeClass('active')
                        ;
                    $activeSection
                        .addClass('active')
                        ;
                }
            }
        },

        tryCreateMenu: function (event) {
            if ($(window).width() > 640 && !$('body').hasClass('basic')) {
                if ($container.length > 0 && $container.find('.following.menu').length === 0) {
                    handler.createMenu();
                    handler.createWaypoints();
                    $(window).off('resize.menu');
                }
            }
        },

        createAnchors: function () {
            $allHeaders
                .each(function () {
                    var
                        $section = $(this),
                        text = handler.getText($section),
                        safeName = handler.getSafeName(text),
                        id = window.escape(safeName),
                        $anchor = $('<a />').addClass('anchor').attr('id', id)
                        ;
                    $section
                        .append($anchor)
                        ;
                })
                ;
            $example
                .each(function () {
                    var
                        $title = $(this).children('h4').eq(0),
                        text = handler.getText($title),
                        safeName = handler.getSafeName(text),
                        id = window.escape(safeName),
                        $anchor = $('<a />').addClass('anchor').attr('id', id)
                        ;
                    if ($title.length > 0) {
                        $title.after($anchor);
                    }
                })
                ;

        },

        getPageTitle: function () {
            return $.trim($('h1').eq(0).contents().filter(function () { return this.nodeType == 3; }).text().toLowerCase());
        },
        getSafeName: function (text) {
            return text.replace(/\s+/g, '-').replace(/[^-,'A-Za-z0-9]+/g, '').toLowerCase();
        },

        getText: function ($element) {
            $element = ($element.find('a').not('.label, .anchor').length > 0)
                ? $element.find('a')
                : $element
                ;
            var
                $text = $element.contents().filter(function () {
                    return this.nodeType == 3;
                })
                ;
            return ($text.length > 0)
                ? $text[0].nodeValue.trim()
                : $element.find('a').text().trim()
                ;
        },

        createMenu: function () {
            // grab each h3
            var
                html = '',
                pageTitle = handler.getPageTitle(),
                title = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1),
                $sticky,
                $rail
                ;
            $sectionHeaders
                .each(function (index) {
                    var
                        $currentHeader = $(this),
                        $nextElements = $currentHeader.nextUntil('h2'),
                        $examples = $nextElements.find('.example:not(.another)').addBack().filter('.example:not(.another)'),
                        activeClass = (index === 0)
                            ? 'active '
                            : '',
                        text = handler.getText($currentHeader),
                        safeName = handler.getSafeName(text),
                        id = window.escape(safeName),
                        $anchor = $('<a />').addClass('anchor').attr('id', id)
                        ;
                    html += '<div class="item">';
                    if ($examples.length === 0) {
                        html += '<a class="' + activeClass + 'title" href="#' + id + '"><b>' + $(this).text() + '</b></a>';
                    }
                    else {
                        html += '<a class="' + activeClass + 'title"><i class="dropdown icon"></i> <b>' + $(this).text() + '</b></a>';
                    }
                    if ($examples.length > 0) {
                        html += '<div class="' + activeClass + 'content menu">';
                        $examples
                            .each(function () {
                                var
                                    $title = $(this).children('h4').eq(0),
                                    text = handler.getText($title),
                                    safeName = handler.getSafeName(text),
                                    id = window.escape(safeName),
                                    $anchor = $('<a />').addClass('anchor').attr('id', id)
                                    ;
                                if ($title.length > 0) {
                                    html += '<a class="item" href="#' + id + '">' + text + '</a>';
                                }
                            })
                            ;
                        html += '</div>';
                    }
                    html += '</div>';
                })
                ;

            //// Add 'Related Topics'
            //var relhtml = "";
            //if ($("#related").length) {
            //    relhtml += '<div class="item related-item">';
            //    html += '<a class="title"><i class="dropdown icon"></i> <b>Related topics</b></a>';
            //    relhtml += '<div class="content menu">';
            //    $("#related p a").each(function () {
            //        relhtml += '<a class="item" href="' + $(this).attr("href") + '">' + $(this).html() + '</a>';
            //    });
            //    relhtml += '</div>';
            //    relhtml += '</div>';

            //    $("#related").remove();
            //}

            //html += relhtml;

            //var $relatedMenu = $('<div />')
            //    .addClass('ui vertical text menu')
            //    .html(relhtml)
            //    ;


            $followMenu = $('<div />')
                .addClass('ui vertical following fluid accordion text menu')
                .html(html)
                ;

            
            $sticky = $('<div />')
                .addClass('ui sticky')
                .html($followMenu)
                //.prepend($advertisement)
                .prepend('<h4 class="ui header">' + title + '</h4>')
                ;


            //$relatedMenu.appendTo($sticky);
            $rail = $('<div />')
                .addClass('ui dividing right rail')
                .html($sticky)
                .prependTo($container)
                ;

            
            $sticky.sticky({
                silent: true,
                context: $container,
                container: $('html'),
                offset: 30
            });
            $followMenu
                .accordion({
                    exclusive: false,
                    animateChildren: false,
                    onChange: function () {
                        $('.ui.sticky').sticky('refresh');
                    }
                })
                .find('.menu a[href], .title[href]')
                .on('click', handler.scrollTo)
                ;
        },

        scrollTo: function (event) {
            var
                id = $(this).attr('href').replace('#', ''),
                $element = $('#' + id),
                position = $element.offset().top + 10
                ;
            $element
                .addClass('active')
                ;
            $('html, body')
                .stop()
                .animate({
                    scrollTop: position
                }, 500)
                ;
            location.hash = '#' + id;
            event.stopImmediatePropagation();
            event.preventDefault();
            return false;
        },

        getIndent: function (text) {
            var
                lines = text.split("\n"),
                firstLine = (lines[0] === '')
                    ? lines[1]
                    : lines[0],
                spacesPerIndent = 2,
                leadingSpaces = (firstLine !== undefined)
                    ? firstLine.length - firstLine.replace(/^\s*/g, '').length
                    : false,
                indent
                ;
            if (!leadingSpaces) {
                return ($pageTabs.length > 0)
                    ? 6
                    : 4
                    ;
            }
            if (leadingSpaces !== 0) {
                indent = leadingSpaces;
            }
            else {
                // string has already been trimmed, get first indented line and subtract 2
                $.each(lines, function (index, line) {
                    leadingSpaces = line.length - line.replace(/^\s*/g, '').length;
                    if (leadingSpaces !== 0) {
                        indent = leadingSpaces - spacesPerIndent;
                        return false;
                    }
                });
            }
            return indent || 4;
        },

        refreshSticky: function () {
            $sectionHeaders.visibility('refresh');
            $sectionExample.visibility('refresh');
            $('.ui.sticky').sticky('refresh');
            $footer.visibility('refresh');
            $visibilityExample.visibility('refresh');
        },

        selectAll: function () {
            this.setSelectionRange(0, this.value.length);
        },

        swapStyle: function () {
            var
                theme = $(this).data('theme')
                ;
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active')
                ;
            $('head link.ui')
                .each(function () {
                    var
                        href = $(this).attr('href'),
                        subDirectory = href.split('/')[3],
                        newLink = href.replace(subDirectory, theme)
                        ;
                    $(this)
                        .attr('href', newLink)
                        ;
                })
                ;
        }
    };

    semantic.handler = handler;

    // code highlighting languages
    window.hljs.configure({
        classPrefix: '',
        languages: [
            'xml',
            'bash',
            'css',
            'less',
            'javascript'
        ]
    });

    // add anchors to docs headers
    handler.createAnchors();

    // register less files
    // window.less.registerStylesheets();

    // load page tabs
    handler.tryCreateMenu();
    $(window).on('resize.menu', function () {
        handler.tryCreateMenu();
    });

    // main sidebar
    $menu
        .sidebar({
            dimPage: true,
            transition: 'overlay',
            mobileTransition: 'uncover'
        })
        ;

    // launch buttons
    $menu
        .sidebar('attach events', '.launch.button, .view-ui, .launch.item')
        ;

    // handler.createIcon();

    $swap
        .on('click', handler.swapStyle)
        ;

    $menuPopup
        .add($languageDropdown)
        .popup({
            position: 'bottom center',
            delay: {
                show: 100,
                hide: 50
            }
        })
        ;

    //$.fn.api.settings.base = '//api.semantic-ui.com';
    $.extend($.fn.api.settings.api, {
        categorySearch: '//api.semantic-ui.com/search/category/{query}',
        getOverrides: '/src/themes/{$theme}/{$type}s/{$element}.overrides',
        getVariables: '/src/themes/{$theme}/{$type}s/{$element}.variables',
        search: '//api.semantic-ui.com/search/{query}'
    });

    if (window.location.hash) {
        var
            $element = $(window.location.hash),
            position = $element.offset().top + 10
            ;
        $element.addClass('active')
            ;
        $('html, body')
            .stop()
            .animate({
                scrollTop: position
            }, 500)
            ;
    }

    //handler.getMetadata();

};

// attach ready event
$(document)
    .ready(semantic.ready)
    ;
