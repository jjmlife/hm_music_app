let _scrollTop 

class ModalHelper {
    static afterOpen() {
        _scrollTop = document.scrollingElement.scrollTop;
        document.body.style.position = 'fixed';
        document.body.style.top = -_scrollTop + 'px';
        document.body.style.left = 0;
        document.body.style.bottom = 0;
        document.body.style.right = 0;
    }

    static beforeClose() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.bottom = '';
        document.scrollingElement.scrollTop = _scrollTop;
    }
}

export default ModalHelper;
