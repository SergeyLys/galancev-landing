/**
 * Тут глобальные методы, которые повторяются
 * на нескольких страницах
 */
export default {
    /**
     * метод для инициализации модального
     * окна, которое есть на нескольких страницах
     */
    init(){
        this.modal_contact_form();
    },
    
    modal_contact_form () {
        console.log('modal_contact_form', this);
    }
};