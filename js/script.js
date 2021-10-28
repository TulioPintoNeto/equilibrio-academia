var firstClick = true;

$(() => main());

const main = () => {
    closeNavbarWhenClickOnItem();
    showFirstContent();
    onScroll();

    $(document).scroll(onScroll);
};

const closeNavbarWhenClickOnItem = () => {
    const button = document.getElementById("navbar-button-toggle");
    button.addEventListener("click", () => {
        if (!firstClick) return;

        firstClick = false;

        const navLinks = document.querySelectorAll(".nav-item");
        const menuToggle = document.getElementById("navbarNav");
        const bsCollapse = new bootstrap.Collapse(menuToggle);
        navLinks.forEach((l) => {
            l.addEventListener("click", () => {
                bsCollapse.toggle();
            });
        });
    });
};

const showFirstContent = () => {
    $(".appear-on-load").fadeIn(animationDuration);

    setTimeout(() => {
        $(".appear-on-load-1").fadeIn(animationDuration);

        const $onLoadChangeElement = $(".on-load-change");
        $onLoadChangeElement.removeClass("on-load-change");
    }, 600);
};

const onScroll = () => {
    controlNavbarMode();
    showElements();
};

const controlNavbarMode = () => {
    const $nav = $("#navbar-row");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
};

const showElements = () => {
    const $elements = $(".on-scroll-fade");

    if ($elements.length === 0) return;

    $elements.each(function () {
        if (
            $(window).scrollTop() + $(window).height() - 200 >=
            $(this).offset().top
        ) {
            $(this).addClass("on-scroll-show");
        }
    });
};
