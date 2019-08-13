function fun1() {
  return 'fun1';
}

function fun2() {
  const value1 = fun1();
  return `fun2 ${value1}`;
}

module.exports = {
  fun1, fun2
};
