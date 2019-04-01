function ReiwaDiff() {
  var now = new Date();

        var firstDay = new Date(now.getFullYear() + 0, 4, 2);

        var diff = (firstDay.getTime() - now.getTime()) / 1000;

        var daysLeft = Math.floor(diff / (24 * 60 * 60));
        var hoursLeft = (Math.floor(diff / (60 * 60))) % 24;
        var minitesLeft = (Math.floor(diff / 60)) % 60;
        var secondsLeft = Math.floor(diff) % 60;

        minitesLeft = ("0" + minitesLeft).slice(-2)
        secondsLeft = ("0" + secondsLeft).slice(-2)

        document.getElementById("days").innerHTML = ("『令和』まであと：" + daysLeft + "日" + hoursLeft + "時間" + minitesLeft + "分" + secondsLeft + "秒です");
}
setInterval('ReiwaDiff()',500);
