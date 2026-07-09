document.addEventListener("DOMContentLoaded", () => {

    const darkModeToggle =
    document.getElementById("darkModeToggle");

    const savedMode =
    localStorage.getItem("petsyDarkMode");

    /*
        Default mode is dark.
        Only show light mode if user selected light before.
    */

    if(savedMode === "light"){

        document.body.classList.remove("dark-mode");

        if(darkModeToggle){
            darkModeToggle.textContent = "🌙";
        }

    }else{

        document.body.classList.add("dark-mode");

        if(darkModeToggle){
            darkModeToggle.textContent = "☀️";
        }

    }

    if(darkModeToggle){

        darkModeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if(document.body.classList.contains("dark-mode")){

                localStorage.setItem(
                    "petsyDarkMode",
                    "dark"
                );

                darkModeToggle.textContent = "☀️";

            }else{

                localStorage.setItem(
                    "petsyDarkMode",
                    "light"
                );

                darkModeToggle.textContent = "🌙";

            }

        });

    }

});