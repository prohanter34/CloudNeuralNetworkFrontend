import axiox from "axios"

const instance = axiox.create({
    baseURL: "http://127.0.0.1:8000/",
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
})

export const networkAPI = {

}

export const loginAPI = {
    loginApi(login, password) {
        return instance.post("auth/login", { login, password })
    },
    registerApi(email, login, password) {
        return instance.post("auth/registration", { email, login, password })
    },
}

export const trainingAPI = {
    uploadDataset(dataset) {
        return instance.post("dataset", { dataset }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },
    uploadParams(params) {

        let data = {
            opt_fn: params.model.optimization,
            loss_fn: params.model.lossFunction,

            neuron_count: params.structure.neuronCounts,
            hidden_layer_count: params.structure.numHidenLayers,
            act_fn: params.structure.activationFunctions,

            depth_input_data: params.data.dataDeep,
            dataset_filename: params.path,

            epochs: params.train.epochsCount,
            validation_split: params.train.splitValidation,
            batch_size: params.train.batchSize,
        }

        return instance.post('data', { ...data })
    },
    downloadKeras(neuralnetwork_file_name) {
        return instance.post("final", {neuralnetwork_file_name}, {
            responseType: 'blob'
        })
    }
}