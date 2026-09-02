document.addEventListener("DOMContentLoaded", () => {

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    const savedMode =
        localStorage.getItem("CompanionReviewHubDarkMode");

    /*
        Default mode is LIGHT.

        If the user previously selected dark mode,
        dark mode will be restored.

        If there is no saved preference,
        the website stays in light mode.
    */

    if (savedMode === "dark") {

        document.body.classList.add("dark-mode");

        if (darkModeToggle) {
            darkModeToggle.textContent = "☀️";
        }

    } else {

        document.body.classList.remove("dark-mode");

        if (darkModeToggle) {
            darkModeToggle.textContent = "🌙";
        }

    }


    /*
        Dark mode toggle
    */

    if (darkModeToggle) {

        darkModeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");


            /*
                If dark mode is ON
            */

            if (document.body.classList.contains("dark-mode")) {

                localStorage.setItem(
                    "CompanionReviewHubDarkMode",
                    "dark"
                );

                darkModeToggle.textContent = "☀️";

            }


            /*
                If dark mode is OFF
                → Light mode
            */

            else {

                localStorage.setItem(
                    "CompanionReviewHubDarkMode",
                    "light"
                );

                darkModeToggle.textContent = "🌙";

            }

        });

    }

});