angular.module('app').value('taToastr', toastr);

angular.module('app').factory('taNotifier', function(taToastr){
    return{
        notify: function(msg){
            taToastr.success(msg);
            console.log(msg);
        },
        error: function(msg) {
            taToastr.error(msg);
            console.log(msg);
        }
    };
});