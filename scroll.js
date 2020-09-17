const targetAnimation = document.querySelectorAll('.scroll-animation');

if ('IntersectionObserver' in window) {

  const config = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  };

  const observer = new IntersectionObserver(animation, config);
  targetAnimation.forEach(function (targetAnimation) {
    observer.observe(targetAnimation)
  });

  function animation(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting === true) {
        onAnimate(entry.target);
        observer.unobserve(entry.target)
      } else {
        styleAnimation(entry.target)
      }
    });
  };

  function styleAnimation(targetAnimation) {
    targetAnimation.classList.add("animation")
  };

  function onAnimate(targetAnimation) {
    if (targetAnimation.classList.contains("top")) {
      targetAnimation.classList.add("top-scroll-class");
    } else if (targetAnimation.classList.contains("right")) {
      targetAnimation.classList.add("right-scroll-class");
    } else if (targetAnimation.classList.contains("bottom")) {
      targetAnimation.classList.add("bottom-scroll-class");
    } else {
      targetAnimation.classList.add("left-scroll-class");
    }
  }
};