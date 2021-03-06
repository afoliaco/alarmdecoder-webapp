<script type="text/javascript">
    $(document).ready(function(){
        $.fn.spin.presets.flower = {
            lines: 13,
            length: 30,
            width: 10,
            radius: 30,
            className: 'spinner',
        }
        $('#loading').spin('flower');
        $('#notifications-table').dataTable({
            responsive: true,
            stateSave: true,
            stateDuration: 60 * 60 * 24,
            pagingType: "full_numbers",
            language: {
                infoEmpty: "No Results",
                infoFiltered: "",
                info: "_START_ to _END_ of _TOTAL_",
                emptyTable: " ",
            },
            initComplete: function() {
                $('#loading').stop();
                $('#loading').hide();
                $('#clear').css('display', 'inline-block');
                $('#datatable').show();
            },
        });
    });
</script>
