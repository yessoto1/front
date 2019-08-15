import axios from 'axios';

export default {
    state: {
        input: ''
    },
    getters: {},
    mutations: {
        SET_INPUT: (state, param) => {
            state.input = param;
        }
    },
    actions: {
        setInput: ({commit}, param) => {
            setTimeout(() => {
                commit('SET_INPUT', param);
            }, 5000)
        },
        saveRisk: ({commit}, param) => {
            const url = 'http://localhost:9080/rms/api/risk/save';
            return new Promise((resolve, reject) => {
                axios.post(url,
                    {
                        riskType: param['riskType'],
                        riskName: param['riskName'],
                        processId: param['processId']
                    },
                    {})
                    .then((response) => {
                        console.log('response', response);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        }
    }
};