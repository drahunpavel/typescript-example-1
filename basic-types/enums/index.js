//* по умолчанию StatusCode.SUCCESS = 0, StatusCode.IN_PROCESS = 1 и тд
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 1] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 2] = "FAILED";
})(StatusCode || (StatusCode = {}));
var Status;
(function (Status) {
    Status["SUCCESS"] = "success";
    Status["IN_PROCESS"] = "process";
    Status["FAILED"] = "failed";
})(Status || (Status = {}));
function action(act) {
    console.log('action: ', act);
}
action(Status.FAILED);
var value = "success" /* Status2.SUCCESS */;
