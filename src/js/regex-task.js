class RegExpTest {

  /**
   * Class constructor
   *   Set regular expression,
   *   Set elements,
   *   Set event handlers
   * @param  {Object} $cnt jQuery object of the container
   */
  constructor($cnt) {
    this.regex = /^([A-Z]{1}[a-z]+(\s?)){1,3}$/;
    this.$cnt = $cnt;
    this.$input = $cnt.find('input');
    this.validClass = 'valid';
    this.notValidClass = 'not-valid';
    this.setHandlers();
  }

  /**
   * Set event handlers on the elements
   *   and create app behavior
   */
  setHandlers() {
    this.$input.on('input', (e) => {
      var val = e.currentTarget.value.trim();
      if (val === '') {
        this.$cnt.removeClass(`${this.validClass} ${this.notValidClass}`);
        return;
      }
      var isValid = this.checkString(val);
      this.$cnt.toggleClass(this.validClass, isValid);
      this.$cnt.toggleClass(this.notValidClass, !isValid);
    });
  }

  /**
   * Checking string on regexp matching
   * @param  {String} str - checked string
   * @return {Boolean}    - true if matched and false if do not
   */
  checkString(str) {
    return this.regex.test(str);
  }
}

export default RegExpTest;