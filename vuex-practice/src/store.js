import { createStore} from 'vuex';

const counterStore = {
    // namespaced: true,
    state(){ // this state is local for this module. We can't access isLoggedIn property. For this we can use rootState and rootGetters.
        return {
            counter: 0,
        };
    },
    mutations: {
        incrementCounter(state){
            state.counter += 2;
        },
        incrementCustom(state, payload){
            state.counter += payload.value;
        },
    },
    getters: {
        finalCounter(state){
            return state.counter*2;
        },
        checkCounter(_, getters){
            const counterVal = getters.finalCounter;
            if(counterVal < 2){
                return 0;
            }
            else if(counterVal >= 100){
                return 100;
            }
            return counterVal;
        },
    },
    actions: {
        incrementCounter(context){
            setTimeout(function(){
                context.commit('incrementCounter');
            }, 2000);
        },
    },
};

const store = createStore({
    modules: {
        counterModule: counterStore,
    },
    state(){
        return{
            isLoggedIn: false,
        };
    },
    mutations: {
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth;
        },
    },
    getters: {
        userIsAuth(state){
            return state.isLoggedIn;
        },
    },
    actions: {
        login(context){
            context.commit('setAuth', {isAuth: true});
        },
        logout(context){
            context.commit('setAuth', {isAuth: false});
        },
    },
});

export default store;