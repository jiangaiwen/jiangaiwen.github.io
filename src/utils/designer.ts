/**
 * 浅拷贝对象属性，obj2覆盖obj1
 */
export const overwriteObj = (obj1: any, obj2: any) => {
    Object.keys(obj2).forEach(prop => {
        obj1[prop] = obj2[prop]
    })
}

export function getDefaultFormConfig() {
    return {
        modelName: 'formData',
        refName: 'vForm',
        rulesName: 'rules',
        labelWidth: 80,
        labelPosition: 'left',
        size: '',
        labelAlign: 'label-left-align',
        cssCode: '',
        customClass: [],
        functions: '',  //全局函数
        layoutType: 'PC',
        jsonVersion: 3,
        onFormCreated: '',
        onFormMounted: '',
        onFormDataChange: ''
    }
}