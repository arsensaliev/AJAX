let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/main.json');

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function () {
                if (request.readyState === 4) {

                    if (request.status == 200) {
                        resolve(this.response);
                    } else {
                        reject();
                    }

                }

            }

        })

    }
    catchData()
    .then((response) => {
        console.log("Success");
        let data = JSON.parse(response);
        inputUsd.value = (inputRub.value / data.usd).toFixed(2)
    } )
    .catch( () => {
        inputUsd.value = "Error";
    } )
})