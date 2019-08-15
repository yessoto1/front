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
        saveCause: ({commit}, param) => {
            const url = 'http://localhost:9080/rms/api/cause/save';
            return new Promise((resolve, reject) => {
                axios.post(url,
                    {
                        riskId: param['riskId'],
                        causeDescription: param['causeDescription'],
                        percent: param['percent'],
                        areaResponsableId: param['areaResponsableId']
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