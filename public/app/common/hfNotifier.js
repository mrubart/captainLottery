angular.module('app').value('hfToastr', toastr);

angular.module('app').factory('hfNotifier', function(hfToastr){
    return{
        notify: function(msg){
            hfToastr.success(msg);
            console.log(msg);
        },
        error: function(msg) {
            hfToastr.error(msg);
            console.log(msg);
        }
    };
});