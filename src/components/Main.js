import React, {useState} from "react";
import '../assets/styles/main.css'
import {FormModel} from "../models/formModel";

/*const initialState = {
    name: '',
    nameError: '',
    lastName: '',
    lastNameError: '',
    date: '',
    dateError: '',
    phoneNumber: '',
    phoneNumberError: '',
    site: '',
    siteError: '',
    aboutUser: '',
    aboutUserError: '',
    technologies: '',
    technologiesError: '',
    lastProject: '',
    lastProjectError: '',
}*/

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = new FormModel()
    }

    handleChange = (event) => {
        const isCheckbox = event.target.type === 'checkbox'
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
    }
    
    validate = () => {
        let nameError = ""
        let lastNameError = ""
        let dateError = ''
        let phoneNumberError = ''
        let siteError = ''
        let aboutUserError = ''
        let technologiesError = ''
        let lastProjectError = ''
        let errorMessage = "Поле пустое. Заполните пожалуйста"
        //Name
        if(!this.state.name.match(/^([А-Я])|([A-Z])/)) {
            nameError = 'Имя должно начинаться с заглавной буквы'
        }
        if (this.state.name < 1) {
            nameError = errorMessage
        }
        //lastName
        if(!this.state.lastName.match(/^([А-Я])|([A-Z])/)) {
            lastNameError = 'Фамилия должна начинаться с заглавной буквы'
        }
        if (this.state.lastName <1) {
            lastNameError = errorMessage
        }
        //Date
        if (this.state.date === '') {
            dateError = errorMessage
        }
        //Phone
        if (!this.state.phoneNumber.match(/^\d(\-)(\d{4})(\-)(\d{2})(\-)(\d{2})$/)) {
            phoneNumberError = 'Неверный формат номера'
        }
        if (this.state.phoneNumber <1) {
            phoneNumberError = errorMessage
        }
        //Site
        if (!this.state.site.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/)) {
            siteError = 'Неправильный формат адреса сайта'
        }
        if (this.state.site <1) {
            siteError = errorMessage
        }
        //AboutUser
        /*if (this.state.aboutUser > 600) {
            aboutUserError = 'Превышен лимит количества символов'
        }*/
        if (this.state.aboutUser <1) {
            aboutUserError = errorMessage
        }
        //Technologies
        if (this.state.technologies <1) {
            technologiesError = errorMessage
        }
        //Last Project
        if (this.state.lastProject <1) {
            lastProjectError = errorMessage
        }
        if (nameError || lastNameError || dateError || phoneNumberError || siteError || aboutUserError || technologiesError || lastProjectError) {
            this.setState({ nameError, lastNameError, dateError, phoneNumberError, siteError, aboutUserError, technologiesError, lastProjectError })
            return false
        }
        return true
    }

    handleDate = (event) => {
        this.setState({date: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        const isValid = this.validate()
        if (isValid) {
            this.setState(new FormModel())
        }
    }

    validateTextArea = (name) => {
        let limit = 600
        let textLength = name.length
        if (textLength >= limit) {
           return 'Превышен лимит символов в поле'
        }
        return ` Осталось ${limit-textLength} из ${limit}`
    }

    clearInputs = () => {
        this.setState(new FormModel())
    }


    render() {
        return (
            <div className="wrapper">
                <div className="form" >
                    <div className="form__title">Создание анкеты</div>
                    <form action="#" id="form" className='form__body'>
                        <div className="form__item">
                            <label htmlFor="formName" className="form__label">Имя</label>
                            <input type="text"
                                   id="formName"
                                   name='name'
                                   className='form__input'
                                   placeholder='Введите свое имя'
                                   onChange={this.handleChange}
                                   value={this.state.name}
                            />
                            <div >{this.state.nameError}</div>
                        </div>
                        <div className="form__item">
                            <label htmlFor="formLastName" className="form__label">Фамилия</label>
                            <input type="text"
                                   id="formLastName"
                                   name='lastName'
                                   className='form__input'
                                   placeholder='Введите свою фамилию'
                                   onChange={this.handleChange}
                                   value={this.state.lastName}/>
                            <div >{this.state.lastNameError}</div>
                        </div>
                        <div className="form__item" >
                            <label htmlFor="formBirthDate" className="form__label">Дата рождения </label>
                            <input type="date"
                                   id="formBirthDate"
                                   name='birthDate'
                                   className='form__input'
                                   onChange={this.handleDate}
                                   />
                            <div >{this.state.dateError}</div>
                        </div>
                        <div className="form__item">
                            <label htmlFor="formPhoneNumber" className="form__label">Телефон</label>
                            <input type="tel"
                                   id="formPhoneNumber"
                                   name='phoneNumber'
                                   className='form__input'
                                   placeholder='Введите номер телефона в формате 8-8888-88-88'
                                   onChange={this.handleChange}
                                   value={this.state.phoneNumber}/>
                            <div >{this.state.phoneNumberError}</div>
                        </div>
                        <div className="form__item">
                            <label htmlFor="formSite" className="form__label">Сайт</label>
                            <input type="tel"
                                   id="formSite"
                                   name='site'
                                   className='form__input'
                                   placeholder='Введите адрес личного сайта в формате https://siteadress.com'
                                   value={this.state.site}
                                   onChange={this.handleChange}/>
                            <div >{this.state.siteError}</div>
                        </div>
                        <div className="form__item">
                            <label htmlFor="formAboutUser" className="form__label">О себе</label>
                            <div className="form__item-input">
                                <textarea name="aboutUser"
                                          id="formAboutUser"
                                          cols="30"
                                          rows="10"
                                          className="form__textarea"
                                          placeholder='О себе'
                                          onChange={this.handleChange}
                                          value={this.state.aboutUser}
                                >
                            </textarea>
                                <div className='result'>{this.validateTextArea(this.state.aboutUser)}</div>
                                <div>{this.state.aboutUserError}</div>
                            </div>
                        </div>
                        <div className="form__item">
                            <label htmlFor="formTechnologies" className="form__label">Стек технологий</label>
                            <div className="form__item-input">
                                <textarea name="technologies"
                                          id="formTechnologies"
                                          cols="30"
                                          rows="10"
                                          className="form__textarea"
                                          placeholder='Стек технологий'
                                          onChange={this.handleChange}
                                          value={this.state.technologies} />
                                <div className='result'>{this.validateTextArea(this.state.technologies)}</div>
                                <div>{this.state.technologiesError}</div>
                            </div>
                        </div>
                        <div className="form__item">
                            <label htmlFor="formLastProject" className="form__label">Описание последнего проекта</label>
                            <div className="form__item-input">
                                <textarea name="lastProject"
                                          id="formLastProject"
                                          cols="30"
                                          rows="10"
                                          className="form__textarea"
                                          placeholder='Добавьте писание последнего проекта'
                                          onChange={this.handleChange}
                                          value={this.state.lastProject}/>
                                <div className='result'>{this.validateTextArea(this.state.lastProject)}</div>
                                <div>{this.state.lastProjectError}</div>
                            </div>
                        </div>
                        <div className="form__buttons">
                            <button className="form__buttons-item"
                                    type='submit'
                                    onClick={this.handleSubmit}>Сохранить</button>
                            <button className="form__buttons-item"
                                    type='reset'
                                    onClick={this.clearInputs}>Очистить</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Main