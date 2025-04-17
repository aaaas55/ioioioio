document.getElementById("startBot").addEventListener("click", function () {
  const status = document.getElementById("status");
  status.innerText = "جاري تشغيل البوت...";
  setTimeout(() => {
    status.innerText = "البوت شغال الآن!";
  }, 2000);
});
