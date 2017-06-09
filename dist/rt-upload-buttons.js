var RTUploadButtons = function (t) {
    return "undefined" == typeof jQuery ? void console.log("jQuery is required to run upload buttons") : (this.options = $.extend(this.defaults, t), t || (this.options = this.defaults), void this.__init())
};
RTUploadButtons.prototype = {
    defaults: {
        classes: "btn btn-info",
        form_selector: ".rt-form",
        upload_group_selector: ".file-upload"
    }, __init: function () {
        console.log('fuck you');
        var t = '<button type="button" class="' + this.options.classes + '">Choose File</button><span> File: </span><span class="file-name">None Chosen</span>', o = $(this.options.upload_group_selector, this.options.form_selector).append(t);
        $("span, button", o).show(), $('input[type="file"]', o).hide().on("change", function () {
            $(this).siblings(".file-name").html($(this).val().replace("C:\\fakepath\\", ""))
        }), $("button", o).on("click", function () {
            $(this).siblings("input").trigger("click")
        })
    }
};