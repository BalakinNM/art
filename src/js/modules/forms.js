import postData from "../services/request";

const forms = () => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');
    const message = {
        failure: 'Что то пошло не так!',
        success: 'Загрузка успешно завершена',
        loading: 'Загрузка...',
        spinner: `assets/img/spinner.gif`,
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };
    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };
    function clearInputs() {
        input.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    }
    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated','fadeOutUp');

            let statusImg = document.createElement('img');
            let textMessage = document.createElement('div');
            setTimeout(() => {
                item.style.display = 'none';
                
                statusImg.setAttribute('src', message.spinner);
                statusMessage.appendChild(statusImg);
    
                statusMessage.appendChild(textMessage);
                textMessage.textContent = message.loading;
            }, 500);
            let api;
            const formData = new FormData(item);
            item.closest('.popup-design') || item.classList.contains('.calc_form') ? 
            api = path.designer : api = path.question;
            postData(api, formData)
                .then(res => {
                    console.log(res);
                    setTimeout(() => {
                        statusImg.setAttribute('src', message.ok);
                        textMessage.textContent = message.success;
                    }, 500);
                })
                .catch(() => {
                    setTimeout(() => {
                        textMessage.textContent = message.failure;
                        statusImg.setAttribute('src', message.fail);
                    }, 500);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.classList.remove('fadeOutUp');
                        item.style.display = 'block';
                        item.classList.add('fadeIn');
                    }, 5000);
                });
        });
    });
};
export default forms;