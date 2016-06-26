(function () {
    "use strict";

    function _showSection(element) {
        // var element = document.createElement("div");
        var siblings = element.parentElement.querySelectorAll("li.siteNavigationMenu");
        var count = 0;
        var targetId, target;
        var child = siblings.item(count);
        while (child) {

            if (child.classList.contains("active")) {
                child.classList.remove("active");
            }

            count += 1;
            child = siblings.item(count);
        }

        // add active to current element
        element.classList.add("active");

        targetId = element.getAttribute("target-div");
        window.location.hash = "#" + targetId;

        document.body.className = targetId;

    }

    if (window.location.hash) {

        var targetId = window.location.hash.replace("#", "");

        var linkElement = document.getElementById(targetId + "Link");

        if (linkElement) {
            _showSection(linkElement);
        }
    }

    window.app = {
        showSection: _showSection
    };
} ());