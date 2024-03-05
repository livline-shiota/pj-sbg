(function ($, Drupal, debounce, drupalSettings) {
    $(function(){
        $('.highlight-table-accordion').each(function(){
            var highlightTableAccordion = $(this);

            var highlightTable = $('.highlight-table', highlightTableAccordion);
            var highlightTableGraphs = $('> ul > li', highlightTable);

            var highlightAccordion = $('.highlight-accordion', highlightTableAccordion);
            var highlightAccordionTpl = $('.accordion', highlightAccordion).remove();
            var highlightAccordionYearTpl = $('.highlight-accordion-year', highlightAccordionTpl).remove();

            $('.highlight-table-graph', highlightTableAccordion).matchHeight();

            var highlightYears = [];
            var highlightYearCnt = -1;

            var highlightYearRows = $('tr', highlightTable).eq(0);
            var highlightquarterRows = $('tr', highlightTable).eq(1);

            $('th', highlightYearRows).each(function(i){
                var year = $(this).text();

                if(year.length > 0) {
                    highlightYearCnt++;
                    highlightYears.push({
                        'year': year,
                        'quarters': []
                    });
                }

                if(highlightYears.length > 0) {
                    var quarter = $('th', highlightquarterRows).eq(i).text();
                    highlightYears[highlightYearCnt]['quarters'].push(quarter);
                }
            });

            var highlightTableData = $('tr', highlightTable).slice(2);

            for(var i = 0; i < highlightTableData.length; i++) {
                var tableData = highlightTableData[i];
                var tpl = highlightAccordionTpl.clone();

                $('.accordion-head > div', tpl).html($('th', tableData).html());

                var quarterCnt = 0;

                for(var j = 0; j < highlightYears.length; j++) {
                    var yearData = highlightYears[j];
                    var yearTpl = highlightAccordionYearTpl.clone();

                    $('> p', yearTpl).text(yearData['year']);

                    var quarters = yearData['quarters'];
                    for(var k = 0; k < quarters.length; k++) {
                        var quarter = quarters[k];
                        var value = $('td', tableData).eq(quarterCnt).text();
                        quarterCnt++;
                        

                        $('> table', yearTpl).append('<tr><th>' + quarter + '</th><td>' + value + '</td></tr>')
                    }

                    $('.accordion-body > p', tpl).before(yearTpl);
                }

                var graphId = $(tableData).data('graph');

                if(typeof graphId !== 'undefined') {
                    graphId = parseInt(graphId) - 1;
                    $('.highlight-accordion-graph', tpl).html($('.highlight-table-graph', highlightTableGraphs.eq(graphId)).html());
                }
                else {
                    $('.highlight-accordion-graph', tpl).remove();
                }

                $('.accordion-list', highlightAccordion).append(tpl);
            }

            $('.accordion-list .accordion', highlightAccordion).each(function(){
                Module.setAccordion(this);
            });

            highlightAccordion.css('visibility', 'visible');
        });
    });
});
