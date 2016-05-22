class SearchText {

  /**
   * Class constructor
   *   set basic elements and event handlers
   * @param  {String} cnt container selection
   */
  constructor(cnt) {
    this.$cnt = $(cnt);
    this.$form = this.$cnt.find('form');
    this.$textarea = this.$form.find('textarea');
    this.$table = this.$cnt.find('.words-list');
    this.$wordsCnt = this.$table.find('tbody');
    this.$wordsCount = this.$cnt.find('.count');
    this.$cancelButton = this.$cnt.find('.cancel');
    this.setHandlers();
  }

  /**
   * Set event handlers and create app behavior
   */
  setHandlers() {
    this.$form.on('submit', (e) => {
      e.preventDefault();
      var words = this.createList(this.$textarea.val());
      this.render(words);
    });
    this.$cancelButton.on('mousedown', (e) => {
      e.preventDefault();
      this.$textarea.val('').focus();
      this.render([]);
    });
  }

  /**
   * Render words list from the array of objects
   * @param  {Array} words - array of words with similarities
   */
  render(words) {
    var str = '';
    this.$table.toggleClass('show', !!words.length);
    this.$wordsCount.html(words.length);
    words.forEach(function (word) {
      str += `<tr><td class="word">${word.word}</td>
        <td class="similarities">`;
      word.similarities.forEach(function (sim) {
        str += `<span class="sim">${sim}</span>`;
      });
      str += `</td>
        </tr>`;
    });
    this.$wordsCnt.html(str);
  }

  /**
   * Create words array:
   *   parse String to get simple array of words
   *   checkLevenshtein distance of the word to create similarities
   * @param  {String} str - string with words
   * @return {Array}     - Array of the words with similarities
   */
  createList(str) {
    var words = this.getWords(str);
    var arr = [];
    words.forEach((word) => {
      if (!this.checkLevenshtein(word, arr)) {
        arr.push({word: word, similarities: []});
      }
    });
    return arr;
  }

  /**
   * Check Levenshtein distance of the given word
   *   and array of the words.
   *   Return true if similarities found and false if not
   * @param  {String} word  - word for checking
   * @param  {Array} arr    - Array of words for checking
   * @return {Boolean}      - true if similarities found and false if not
   */
  checkLevenshtein(word, arr) {
    return !arr.every((currentWord) => {
      if (this.getEditDistance(currentWord.word, word) === 1) {
        currentWord.similarities.push(word);
        return false;
      } else {
        return true;
      }
    });
  }

  /**
   * Get set of unique words from the string as an array
   * @param  {String} str - string with words
   * @return {Array}      - Array of words
   */
  getWords(str) {
    return $.unique(str.match(/\w+/mg) || []);
  }

  /**
   * Get Levenshtein distance between two words
   *   fast matrix algorithm
   *   (https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript)
   * @param  {String} a - first word
   * @param  {String} b - second word
   * @return {Number}   - Levenshtein distance between words
   */
  getEditDistance(a, b) {
    if (a.length === 0) { return b.length; } 
    if (b.length === 0) { return a.length; }
    var matrix = [];
    var i;
    for (i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    var j;
    for (j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        if (b.charAt(i-1) == a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1,
            Math.min(matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1));
        }
      }
    }
    return matrix[b.length][a.length];
  }

}

export default SearchText;