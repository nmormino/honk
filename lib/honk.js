var honk = {};

honk.language = {
    'entity':window.location.hostname+' says',
    'ok':'OK',
    'cancel':'Cancel',
    'submit':'Submit',
    'alert':'Alert',
    'confirm':'Confirmation'
}

honk.setLang = function(words)
{
    for(var key in words){
        honk.language[key] = words[key];
    }
}

honk.alert = function(message, callback) {
    var id = (new Date()).getTime();
    var popup = '<div class="honk"><div class="honk-popup"><div class="honk-header">'+this.language['entity']+'</div><div class="honk-content">'+
    message+'</div><div class="honk-footer"><button class="honk-button" id="honk-ok-'+id+'">'+this.language['ok']+'</button></div></div></div>';

    $('body').append(popup);
    $('#honk-ok-'+id).focus();
    $('#honk-ok-'+id).on('click', function(){
        if (typeof callback === 'function') {
            callback();
        }
        $(this).closest('.honk').fadeOut(function(){
            $(this).remove();
        });
    });
};

honk.confirm = function(message, callback) {
    var id = (new Date()).getTime();
    var popup = '<div class="honk"><div class="honk-popup"><div class="honk-header">'+this.language['entity']+'</div><div class="honk-content">'+
    message+'</div><div class="honk-footer"><button class="honk-button" id="honk-ok-'+id+'">'+this.language['ok']+'</button><button class="honk-button" id="honk-cancel-'+id+'">'+this.language['cancel']+'</button></div></div></div>';

    $('body').append(popup);

    $('#honk-ok-'+id).focus();
    
    $('#honk-ok-'+id).on('click', function(){
        if (typeof callback === 'function') {
            callback();
        }
        $(this).closest('.honk').fadeOut(function(){
            $(this).remove();
        });
    });

    $('#honk-cancel-'+id).on('click', function(){
        $(this).closest('.honk').fadeOut(function(){
            $(this).remove();
        });
    });
};
