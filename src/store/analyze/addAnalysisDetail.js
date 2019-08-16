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
        saveDetail: ({commit}, param) => {
            const url = 'http://localhost:9080/rms/api/analysis-detail/save';
            return new Promise((resolve, reject) => {
                axios.post(url,
                    {
                        riskId: param['riskId'],
                        impact: param['impact'],
                        probability: param['probability'],
                        significant: param['significant'],
                        control: param['control']
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