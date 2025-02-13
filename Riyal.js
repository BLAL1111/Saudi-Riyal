
let dollar = document.getElementById('dollar'); // الريال السعودي
let pound = document.getElementById('pound'); // الجنيه المصري

// تحويل من الريال السعودي إلى الجنيه المصري
dollar.onkeyup = function () {
  pound.value = (dollar.value * 13.50 ).toFixed(2); // استخدمت معدل افتراضي (8.20)، يمكنك تغييره حسب الحاجة
};

// تحويل من الجنيه المصري إلى الريال السعودي
pound.onkeyup = function () {
  dollar.value = (pound.value / 13.50).toFixed(2);
};

// لإغلاق الرسالة الترحيبية
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});
