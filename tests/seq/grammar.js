module.exports = grammar({
  name: "seq",
  rules: {
    program: $ => seq(
      $.variable,
      seq(
        $.number,
        $.number
      )
    ),
    variable: $ => /[a-z]+/,
    number: $ => /\d+/
  }
});
