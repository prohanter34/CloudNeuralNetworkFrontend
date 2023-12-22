import axiox from "axios"

const instance = axiox.create({
    baseURL: "http://127.0.0.1:8000/",
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
})

export const networkAPI = {
    getNetworksAPI(login) {
        return instance.get(`networks/${login}`)
    }
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
    uploadParams(structure, model, data1, train, name, login) {

        let data = {

            name: name,
            login: login,

            opt_fn: model.optimization,
            loss_fn: model.lossFunction,

            neuron_count: structure.neuronCounts,
            hidden_layer_count: structure.numHidenLayers,
            act_fn: structure.activationFunctions,

            depth_input_data: data1.dataDeep,
            dataset_filename: data1.datasetPath,

            epochs: train.epochsCount,
            validation_split: train.splitValidation,
            batch_size: train.batchSize,
        }

        return instance.post('data', { ...data })
    },
    downloadKeras(neuralnetwork_file_name) {
        return instance.post("final", {neuralnetwork_file_name}, {
            responseType: 'blob'
        })
    }
}