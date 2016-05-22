class Fizzbuzz {

  /**
   * Class constructor
   *   set basic elements and init handlers
   * @param  {Object|String} cnt selection of the container or jQuery element
   */
  constructor(cnt) {
    this.$cnt = $(cnt);
    this.$form = this.$cnt.find('form');
    this.$input = this.$form.find('input');
    this.$consoleCnt = this.$cnt.find('.console');
    this.setHandlers();
  }

  /**
   * Set event handlers and create app behavior
   */
  setHandlers() {
    this.$form.on('submit', (e) => {
      e.preventDefault();
      this.render(this.countFizzbuzz(this.$input.val()));
    });
  }

  /**
   * Counting fizz and buzz according to the current iteration
   * @param  {Number} n - number of iterations
   * @return {Array}    - Array with the fizzbuzz statements
   */
  countFizzbuzz(n) {
    var arr = [];
    for (let i = 1; i <= n; i ++) {
      if (i % 3 === 0 && i % 5 === 0) { arr.push('FizzBuzz'); }
      else if (i % 3 === 0) { arr.push('Fizz'); }
      else if (i % 5 === 0) { arr.push('Buzz'); }
      else { arr.push(i); }
    }
    return arr;
  }

  /**
   * Render html from the array of the fizzbuzz statements
   * @param  {Array} arr - array with the fizz, buzz and fizzbuzz
   */
  render(arr) {
    var str = '';
    arr.forEach(function (el) {
      str += `<div class="entry">${el}</div>`;
    });
    this.$consoleCnt.html(str);
  }
}

export default Fizzbuzz;