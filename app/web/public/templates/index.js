define(function() {
  return function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
      var interp;
      buf.push("<center><h1>new app</h1></center>");
    }
    return buf.join("");
  };
});