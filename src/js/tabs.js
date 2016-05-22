class Tabs {

  /**
   * Class constructor
   *   Create basic elements, set classes
   *   open default tab
   * @param  {String} links - selection of the tabs links
   */
  constructor(links) {
    this.$links = $(links);
    this.$tabs = this.setTabs();
    this.showClass = 'show';
    this.activeClass = 'active';
    this.setHandlers();
    this.setActiveTab(this.$links.eq(0).data('id'));
  }

  /**
   * Create selection of the tabs
   *   based on the links data attributes
   * @return {Object} - jQuery selection of the tabs
   */
  setTabs() {
    var $tabs = $();
    this.$links.each((e, el) => {
      var $tab = $(`#${$(el).data('id')}`);
      if ($tab.length) { $tabs = $tabs.add($tab); }
    });
    return $tabs;
  }

  /**
   * Set event handlers and create app behavior 
   */
  setHandlers() {
    this.$links.on('click', (e) => {
      this.setActiveTab($(e.currentTarget).data('id'));
    });
  }

  /**
   * Set active tab by showing tab container
   *   and set active class to navigation link
   * @param {String} id - id of the tab
   */
  setActiveTab(id) {
    this.$tabs.removeClass(this.showClass);
    $(`#${id}`).addClass(this.showClass);
    this.$links.removeClass(this.activeClass);
    this.$links.filter(`[data-id=${id}]`).addClass(this.activeClass);
  }
}

export default Tabs;