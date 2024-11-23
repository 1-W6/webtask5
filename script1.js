document.addEventListener("DOMContentLoaded", function() {
  // 选择所有人员项
  const employeeCards = document.querySelectorAll(".employee-card");

  // 为每个人员项添加点击事件
  employeeCards.forEach(function(item) {
    item.onclick = function() {
      alert("你点击了： " + this.textContent);
    };
  });

  // 获取特殊人员元素，并添加更改事件
  const specialEmployee = document.getElementById("special-employee");
  if (specialEmployee) {
    specialEmployee.addEventListener("change", function() {
      console.log("特殊人员已更改");
    });
  }

  // 为每个人员项添加鼠标按下事件
  employeeCards.forEach(function(item) {
    item.onmousedown = function() {
      this.style.backgroundColor = "#d1c4e9"; // 按下时改变背景色
    };
  });

  // 为每个人员项添加鼠标移出事件
  employeeCards.forEach(function(item) {
    item.onmouseout = function() {
      this.style.backgroundColor = ""; // 鼠标移出时恢复原样
    };
  });

  // 为每个人员项添加鼠标悬停事件
  employeeCards.forEach(function(item) {
    item.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
    };
  });

  // 为每个人员项添加鼠标松开事件
  employeeCards.forEach(function(item) {
    item.onmouseup = function() {
      this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色
    };
  });
});