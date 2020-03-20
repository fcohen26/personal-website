// import '../../css/carousel.css';

class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    const self = this;
    $('.section-tab').click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => { this.onScroll(); });
    $(window).resize(() => { this.onResize(); });
  }

  onTabClick(event, element) {
    event.preventDefault();
    const scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
    $('html, body').animate({ scrollTop }, 600);
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    const offset = $('.section-tabs').offset().top + $('.section-tabs').height() - this.tabContainerHeight;
    if ($(window).scrollTop() > offset) {
      $('.section-tabs-container').addClass('section-tabs-container--top');
    } else {
      $('.section-tabs-container').removeClass('section-tabs-container--top');
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId,
		 newCurrentTab;
    const self = this;
    $('.section-tab').each(function () {
      const id = $(this).attr('href');
      const offsetTop = $(id).offset().top - self.tabContainerHeight;
      const offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
        console.log('HERE');
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      console.log(newCurrentTab);
      // console.log(this.currentId);
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css('width');
      left = this.currentTab.offset().left;
    }
    console.log(width);
    $('.section-tab-slider').css('width', width);
    $('.section-tab-slider').css('left', left);
  }
}

new StickyNavigation();
