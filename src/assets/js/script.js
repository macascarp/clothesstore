var botonElement = document.getElementsByClassName(".suma-cart");
            var pElement = document.getElementsByClassName(".cart-counter");
            var contador = 0;
            botonElement.onclick = function () {
                contador++;
                pElement.textContent = contador;
            }