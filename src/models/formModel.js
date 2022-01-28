export class FormModel {
    constructor(obj = {}) {
        this.name = obj.name || ''
        this.nameError = obj.nameError || ''
        this.lastName = obj.lastName || ''
        this.lastNameError = obj.lastNameError || ''
        this.date = obj.date || ''
        this.dateError = obj.dateError || ''
        this.phoneNumber = obj.phoneNumber || ''
        this.phoneNumberError = obj.phoneNumberError || ''
        this.site = obj.site || ''
        this.siteError = obj.siteError || ''
        this.aboutUser = obj.aboutUser || ''
        this.aboutUserError = obj.aboutUserError || ''
        this.technologies = obj.technologies || ''
        this.technologiesError = obj.technologiesError || ''
        this.lastProject = obj.lastProject || ''
        this.lastProjectError = obj.lastProjectError || ''
    }
    get fullName () {
        console.log('get')
        return this.name
    }
    set fullName (val) {
        console.log('set', val)
        this.name = val
    }
}