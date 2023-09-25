      function comprobar() {
            const campo = document.querySelector("#email");
            const mensaje = document.querySelector(".mensaje_error");
            const regexEmail =
                /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

            if (!regexEmail.test(campo.value)) {
                campo.classList.add("error");
                mensaje.classList.add("mensaje-error");
                mensaje.textContent = "Valid email requered";
            } else {
                campo.classList.remove("error");
                mensaje.classList.remove("mensaje-error");
                mensaje.textContent = "";
            }
        }

        document.getElementById("form").addEventListener("submit", function (e) {
            e.preventDefault();
            comprobar();

            // Si la validación es exitosa, redirige a la página de destino
            if (!document.querySelector("#email").classList.contains("error")) {
                const email = document.querySelector("#email").value;
                window.location.href = `exito.html?email=${encodeURIComponent(email)}`;
            }
        });
