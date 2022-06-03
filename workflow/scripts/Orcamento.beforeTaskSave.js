function beforeTaskSave(form){
    var activity = parseInt(getValue('WKNumState'))

    if (activity == 29) {
        form.setValue("tipo_orcamento", "sem_sinal");
    }
}