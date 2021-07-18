var thread = threads.start(function(){
  //设置一个空的定时来保持线程的运行状态
  // setInterval(function(){}, 1000);
});
thread.waitFor();
thread.setTimeout(function(){
  toast("hello");
  click(780, 2300);
  }, 5000);
  }, 5000);