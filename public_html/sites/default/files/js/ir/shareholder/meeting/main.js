(function ($, Drupal, debounce, drupalSettings) {
    $(function(){
        $('.meeting-table-accordion').each(function(){
            var meetingTableAccordion = $(this);
            var meetingTable = $('.meeting-table', meetingTableAccordion);
            var meetingAccordion = $('.meeting-accordion', meetingTableAccordion);

            var meetingAccordionTpl = $('> dl', meetingAccordion).remove();
            var meetingAccordionDetailTpl = $('.meeting-accordion-detail', meetingAccordionTpl).remove();

            var endTableNum = 0;
            var accordionTpl = null;

            $('tr', meetingTable).each(function(i) {
                if(i > 0) {
                    var node = $(this);
                    var th = $('th', node);

                    if(th.length > 0) {
                        accordionTpl = meetingAccordionTpl.clone();

                        $('> dt', accordionTpl).text(th.text());

                        var rowspan = th.attr('rowspan');

                        if(typeof rowspan === 'undefined') {
                            rowspan = 1;
                        }
                        else {
                            rowspan = parseInt(rowspan);
                        }

                        endTableNum = i + rowspan - 1;
                    }

                    var accordionDetailTpl = meetingAccordionDetailTpl.clone();

                    $('td', node).each(function(j) {
                        var td = $(this);

                        if(j == 0) {
                            var text = td.text();

                            if(text.length > 0) {
                                $('> p', accordionDetailTpl).text(td.text());
                            }
                            else {
                                $('> p', accordionDetailTpl).remove();
                            }
                        }
                        else {
                            var tr = $('tr', accordionDetailTpl).eq(j - 1);
                            $('td', tr).html(td.html());
                        }
                    });

                    $('> dd', accordionTpl).append(accordionDetailTpl);

                    if(i == endTableNum) {
                        meetingAccordion.append(accordionTpl);
                    }
                }
            });

            $('> dl', meetingAccordion).each(function() {
                var node = $(this);

                $('> dt', node).on('click', function() {
                    node.toggleClass('on');
                    $('> dd', node).slideToggle();
                });
            });
        });
    });
});
