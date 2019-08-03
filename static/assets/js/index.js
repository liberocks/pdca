$('.datepicker').datepicker({
    format: 'dd/mm/yyyy',
});

$("select#proker").change(function () {
    let selectedProker = $(this).children("option:selected").val();
    if (selectedProker == 'others') {
        $('form').find("#others-document").attr('style', '');
    } else {
        $('form').find("#others-document").attr('style', 'display:none;');
    }
});

$('#inputGroupFile01').change(function (event) {
    $('.progress-group').attr('style', '')
    filename = event.target.files[0].name
    $(this).next().text(filename)

    let totalSeconds = 0;
    let x = setInterval(setTime, 25);
    let width = 0
    function setTime() {
        if (width < 100) {
            ++totalSeconds;
            width = totalSeconds * 4
            $('#upload-progress').text(`${width}%`)
        } else {
            width = 100;
            clearInterval(x);
            $('#upload-progress').text(`Done`)
        }
        $('#upload-progress').attr('style', `width: ${width}%`)
    }
});