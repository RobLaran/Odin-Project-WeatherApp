const alertView = (() => {
    const body = document.querySelector('body');

    const container = document.createElement('div');
    container.className = 'alert';

    const alertMessage = document.createElement('p');
    alertMessage.className = 'message';

    const closeButton = document.createElement('button');
    closeButton.className = 'alert-close button';
    closeButton.innerHTML = '&times;';

    container.append(
        alertMessage,
        closeButton
    );

    const popAlert = (type, message) => {
        container.setAttribute('class','');

        container.classList.add('show');
        container.classList.add(type);
        alertMessage.innerHTML = message;

        body.append(container);
    };

    return { popAlert }
})();

export default alertView;