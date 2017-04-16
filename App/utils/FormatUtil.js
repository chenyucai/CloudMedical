var FormatUtil = {

    format: function(d){
      var date = new Date(d);
      Y = date.getFullYear() + '-';
      M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      D = date.getDate() + ' ';
      h = date.getHours() + ':';
      m = date.getMinutes() + ':';
      s = date.getSeconds();

      return Y+M+D;
    }
};

module.exports = FormatUtil;
