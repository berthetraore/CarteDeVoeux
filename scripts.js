
$(function () {
    var $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $newItemForm.on('submit', (e) => {
        e.preventDefault();
        var text = $('input:text').val();
        if (text != ''){
            $list.append('<li>'+text+'</li>');
            $('input:text').val('');
        }
        



    });

    $list.on('click', 'li', () => {
        var $this=$(this);
        $this.remove();
    });
}) ;

