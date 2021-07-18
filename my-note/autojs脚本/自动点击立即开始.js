//在投射/录制时显示敏感信息
var thread = threads.start(function() {
    const time = setInterval(() => {
        toast('hello')
        var beginBtn;
        if (beginBtn = classNameContains('Button').textContains('立即开始').findOne(2000)) {
        beginBtn.click();
        exit()
        }
    }, 2000);
})