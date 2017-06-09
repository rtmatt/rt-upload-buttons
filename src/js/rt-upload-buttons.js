var RTUploadButtons = function (opts) {
    if(typeof jQuery==='undefined'){
        console.log('jQuery is required to run upload buttons');
        return;
    }
    this.options = $.extend(this.defaults,opts);
    if (!opts) {
        this.options = this.defaults;
    }
    this.__init();
};
RTUploadButtons.prototype = {
    defaults: {
        classes: 'btn btn-info',
        form_selector:'.rt-form',
        upload_group_selector: '.file-upload'
    },
    __init: function () {
        var buttons = '<button type="button" class="'+this.options.classes+'">Choose File</button><span> File: </span><span class="file-name">None Chosen</span>';
        var uploadGroups = $(this.options.upload_group_selector, this.options.form_selector).append(buttons);
        $('span, button', uploadGroups).show();
        $('input[type="file"]', uploadGroups).hide().on('change', function () {
            $(this).siblings('.file-name').html($(this).val().replace('C:\\fakepath\\', ''));
        });
        $('button', uploadGroups).on('click', function () {
            $(this).siblings('input').trigger('click');
        });
    }
};